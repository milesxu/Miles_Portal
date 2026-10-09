import { getPermalink } from './utils/permalinks';
import { getBlogSiteUrl } from './utils/site-links';

export const headerData = {
  links: [
    { text: 'Home', href: getPermalink('/') },
    { text: 'About me', href: getPermalink('/about') },
    { text: 'Blog', href: getBlogSiteUrl(), target: '_blank' },
    { text: 'GitHub', href: 'https://github.com/milesxu', target: '_blank' },
  ],
  actions: [{ text: 'Explore projects', href: '#projects' }],
};

export const footerData = {
  links: [
    {
      title: 'Explore',
      links: [
        { text: 'About me', href: getPermalink('/about') },
        { text: 'Blog', href: getBlogSiteUrl(), target: '_blank' },
        { text: 'GitHub', href: 'https://github.com/milesxu', target: '_blank' },
      ],
    },
    {
      title: 'Projects',
      links: [
        { text: 'Lucent', href: 'https://lucent.milesxu.com', target: '_blank' },
        { text: 'Apps', href: 'https://app.milesxu.com', target: '_blank' },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getBlogSiteUrl('rss.xml'), target: '_blank' },
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/milesxu', target: '_blank' },
  ],
  footNote: 'Miles Xu · Built with Astro and AstroWind',
};
