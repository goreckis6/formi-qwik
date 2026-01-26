import fs from "node:fs";
import path from "node:path";

const ROOT = "/home/slavko/cursor/formi-qwik";
const I18N_DIR = path.join(ROOT, "src", "i18n");

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function write(filePath, content) {
  fs.writeFileSync(filePath, content, "utf8");
}

function findAllKeyPositions(source, key) {
  const re = new RegExp(`\\b${key}\\s*:`, "g");
  const positions = [];
  for (;;) {
    const m = re.exec(source);
    if (!m) break;
    positions.push(m.index);
  }
  return positions;
}

function extractObjectBlockFrom(source, startIdx) {
  // startIdx points to beginning of "<key>:" token
  const colonIdx = source.indexOf(":", startIdx);
  if (colonIdx === -1) throw new Error("Missing ':' after key");

  const firstBraceIdx = source.indexOf("{", colonIdx);
  if (firstBraceIdx === -1) throw new Error("Missing '{' after key");

  let i = firstBraceIdx;
  let depth = 0;

  let inSingle = false;
  let inDouble = false;
  let inTemplate = false;
  let inLineComment = false;
  let inBlockComment = false;
  let escape = false;

  while (i < source.length) {
    const ch = source[i];
    const next = source[i + 1];

    if (inLineComment) {
      if (ch === "\n") inLineComment = false;
      i++;
      continue;
    }

    if (inBlockComment) {
      if (ch === "*" && next === "/") {
        inBlockComment = false;
        i += 2;
        continue;
      }
      i++;
      continue;
    }

    if (inSingle) {
      if (escape) {
        escape = false;
      } else if (ch === "\\") {
        escape = true;
      } else if (ch === "'") {
        inSingle = false;
      }
      i++;
      continue;
    }

    if (inDouble) {
      if (escape) {
        escape = false;
      } else if (ch === "\\") {
        escape = true;
      } else if (ch === '"') {
        inDouble = false;
      }
      i++;
      continue;
    }

    if (inTemplate) {
      if (escape) {
        escape = false;
      } else if (ch === "\\") {
        escape = true;
      } else if (ch === "`") {
        inTemplate = false;
      }
      i++;
      continue;
    }

    // Not in string/comment
    if (ch === "/" && next === "/") {
      inLineComment = true;
      i += 2;
      continue;
    }
    if (ch === "/" && next === "*") {
      inBlockComment = true;
      i += 2;
      continue;
    }

    if (ch === "'") {
      inSingle = true;
      i++;
      continue;
    }
    if (ch === '"') {
      inDouble = true;
      i++;
      continue;
    }
    if (ch === "`") {
      inTemplate = true;
      i++;
      continue;
    }

    if (ch === "{") depth++;
    if (ch === "}") {
      depth--;
      if (depth === 0) {
        // Include trailing comma if present
        let end = i + 1;
        while (end < source.length && (source[end] === " " || source[end] === "\t")) end++;
        if (source[end] === ",") end++;
        // Include following newline(s) for nicer formatting
        while (end < source.length && source[end] === "\r") end++;
        if (source[end] === "\n") end++;
        return { blockStart: startIdx, blockEnd: end, firstBraceIdx };
      }
    }
    i++;
  }

  throw new Error("Unbalanced braces while extracting object block");
}

function getLineIndent(source, idx) {
  const lineStart = source.lastIndexOf("\n", idx) + 1;
  const line = source.slice(lineStart, idx);
  const m = line.match(/^\s*/);
  return m ? m[0] : "";
}

function reindentBlock(blockText, targetIndent) {
  const lines = blockText.split("\n");
  // Determine current indent of first line
  const firstLineIndent = (lines[0].match(/^\s*/) || [""])[0];
  return lines
    .map((ln, ix) => {
      if (ix === 0) return targetIndent + ln.trimStart();
      if (ln.startsWith(firstLineIndent)) return targetIndent + ln.slice(firstLineIndent.length);
      return ln;
    })
    .join("\n");
}

function syncKeyFromEn({ key }) {
  const enPath = path.join(I18N_DIR, "en.ts");
  const enSrc = read(enPath);
  const enPositions = findAllKeyPositions(enSrc, key);
  if (enPositions.length === 0) throw new Error(`Key '${key}' not found in en.ts`);

  const enStartIdx = enPositions[enPositions.length - 1]; // use the big converter section (last occurrence)
  const enExtract = extractObjectBlockFrom(enSrc, enStartIdx);
  const enBlock = enSrc.slice(enExtract.blockStart, enExtract.blockEnd);

  const files = fs
    .readdirSync(I18N_DIR)
    .filter(
      (f) =>
        f.endsWith(".ts") &&
        f !== "index.ts" &&
        f !== "utils.ts" &&
        f !== "en.ts"
    );

  const changed = [];

  for (const file of files) {
    const filePath = path.join(I18N_DIR, file);
    const src = read(filePath);
    const positions = findAllKeyPositions(src, key);
    if (positions.length === 0) {
      throw new Error(`Key '${key}' not found in ${file}`);
    }

    const startIdx = positions[positions.length - 1]; // use the big converter section (last occurrence)
    const extract = extractObjectBlockFrom(src, startIdx);
    const indent = getLineIndent(src, startIdx);
    const replacement = reindentBlock(enBlock, indent);

    const next = src.slice(0, extract.blockStart) + replacement + src.slice(extract.blockEnd);
    if (next !== src) {
      write(filePath, next);
      changed.push(file);
    }
  }

  return changed;
}

const changed = syncKeyFromEn({ key: "jpgToGif" });
console.log(`Updated jpgToGif in ${changed.length} locale files:`);
for (const f of changed) console.log(`- ${f}`);

