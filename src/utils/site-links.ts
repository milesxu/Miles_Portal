const PRODUCTION_BLOG_URL = 'https://blog.milesxu.com';
const LOCAL_BLOG_URL = 'http://localhost:4322';

/**
 * Cross-site links are resolved at build time:
 * - `astro dev` points to the local Blog dev server.
 * - Netlify/production builds point to the public Blog domain.
 *
 * `PUBLIC_BLOG_URL` remains available as an explicit override for local
 * production previews or alternate deployment environments.
 */
export const BLOG_SITE_URL =
  import.meta.env.PUBLIC_BLOG_URL || (import.meta.env.DEV ? LOCAL_BLOG_URL : PRODUCTION_BLOG_URL);

export const getBlogSiteUrl = (path = ''): string => {
  const normalizedPath = path ? `/${path.replace(/^\/+/, '')}` : '';
  return `${BLOG_SITE_URL.replace(/\/+$/, '')}${normalizedPath}`;
};
