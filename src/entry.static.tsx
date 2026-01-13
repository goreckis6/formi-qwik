/**
 * Static Site Generation Entry Point
 * This file is used when building the site for static deployment
 */

import { createQwikCity } from '@builder.io/qwik-city/middleware/node';
import qwikCityPlan from '@qwik-city-plan';
import render from './entry.ssr';

/**
 * The default export is the QwikCity adapter used by Vite preview and Node.js deployments.
 */
export default createQwikCity({ render, qwikCityPlan });
