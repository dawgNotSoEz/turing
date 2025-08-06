// ===== TURING COMMUNITY - LINKS CONFIGURATION =====
// This file manages all external links, URLs, and configurable content

// === ENVIRONMENT VARIABLES HELPER ===
const getEnvVar = (key, fallback = '#') => {
  return import.meta.env[key] || fallback;
};

// === MAIN DISCORD & SOCIAL LINKS ===
export const LINKS = {
  // Primary Discord Links
  discord: {
    invite: getEnvVar('VITE_DISCORD_INVITE_LINK', 'https://discord.gg/placeholder'),
    bot: getEnvVar('VITE_DISCORD_BOT_INVITE_LINK', '#bot-invite'),
    server: getEnvVar('VITE_DISCORD_INVITE_LINK', 'https://discord.gg/placeholder'),
  },

  // Social Media
  social: {
    github: getEnvVar('VITE_GITHUB_URL', 'https://github.com/dawgNotSoEz/turing'),
    twitter: getEnvVar('VITE_TWITTER_URL', 'https://twitter.com/turingcommunity'),
    linkedin: getEnvVar('VITE_LINKEDIN_URL', '#linkedin'),
    instagram: getEnvVar('VITE_INSTAGRAM_URL', '#instagram'),
    youtube: getEnvVar('VITE_YOUTUBE_URL', '#youtube'),
    reddit: getEnvVar('VITE_REDDIT_URL', '#reddit'),
    telegram: getEnvVar('VITE_TELEGRAM_URL', '#telegram'),
  },

  // Contact & Support
  contact: {
    email: getEnvVar('VITE_CONTACT_EMAIL', 'contact@turingcommunity.dev'),
    support: getEnvVar('VITE_SUPPORT_EMAIL', 'support@turingcommunity.dev'),
    mailto: {
      contact: `mailto:${getEnvVar('VITE_CONTACT_EMAIL', 'contact@turingcommunity.dev')}`,
      support: `mailto:${getEnvVar('VITE_SUPPORT_EMAIL', 'support@turingcommunity.dev')}?subject=Support Request`,
    }
  },

  // Documentation & Legal
  docs: {
    main: getEnvVar('VITE_DOCUMENTATION_URL', '#documentation'),
    guidelines: getEnvVar('VITE_GUIDELINES_URL', '#guidelines'), 
    help: getEnvVar('VITE_HELP_URL', '#help'),
    privacy: getEnvVar('VITE_PRIVACY_POLICY_URL', '#privacy'),
    terms: getEnvVar('VITE_TERMS_OF_SERVICE_URL', '#terms'),
  },

  // External Platforms & Tools
  external: {
    leetcode: 'https://leetcode.com',
    hackerrank: 'https://hackerrank.com', 
    codechef: 'https://codechef.com',
    codeforces: 'https://codeforces.com',
    github: 'https://github.com',
    stackoverflow: 'https://stackoverflow.com',
  },

  // Internal Navigation (sections)
  internal: {
    about: '#about',
    challenges: '#challenges',
    domains: '#domains', 
    community: '#community',
    team: '#team',
    events: '#events',
    resources: '#resources',
    testimonials: '#testimonials',
    bot: '/bot',
  }
};

// === NAVIGATION CONFIGURATION ===
export const NAVIGATION_LINKS = [
  { href: LINKS.internal.about, text: "About" },
  { href: LINKS.internal.challenges, text: "Challenges" },
  { href: LINKS.internal.domains, text: "Domains" },
  { href: LINKS.internal.community, text: "Community" },
  { href: LINKS.internal.team, text: "Team" },
  { href: LINKS.internal.bot, text: "Discord Bot", external: true },
];

// === FOOTER LINKS CONFIGURATION ===
export const FOOTER_LINKS = {
  quickLinks: [
    { href: LINKS.internal.about, text: "About" },
    { href: LINKS.internal.challenges, text: "Challenges" },
    { href: LINKS.internal.domains, text: "Domains" },
    { href: LINKS.internal.community, text: "Community" },
  ],
  resources: [
    { href: LINKS.internal.team, text: "Team" },
    { href: LINKS.internal.bot, text: "Discord Bot" },
    { href: LINKS.docs.guidelines, text: "Guidelines" },
    { href: LINKS.docs.help, text: "Help" },
  ],
  legal: [
    { href: LINKS.docs.privacy, text: "Privacy Policy" },
    { href: LINKS.docs.terms, text: "Terms of Service" },
    { href: LINKS.contact.mailto.contact, text: "Contact Us" },
    { href: LINKS.docs.main, text: "Documentation" },
  ]
};

// === SOCIAL MEDIA CONFIGURATION ===
export const SOCIAL_LINKS = [
  { 
    name: 'Discord', 
    url: LINKS.discord.invite, 
    icon: 'FaDiscord',
    color: '#5865F2' 
  },
  { 
    name: 'GitHub', 
    url: LINKS.social.github, 
    icon: 'FaGithub',
    color: '#181717' 
  },
  { 
    name: 'Twitter', 
    url: LINKS.social.twitter, 
    icon: 'FaTwitter',
    color: '#1DA1F2' 
  },
  { 
    name: 'LinkedIn', 
    url: LINKS.social.linkedin, 
    icon: 'FaLinkedin',
    color: '#0A66C2' 
  },
  { 
    name: 'YouTube', 
    url: LINKS.social.youtube, 
    icon: 'FaYoutube',
    color: '#FF0000' 
  },
];

// === CTA BUTTON CONFIGURATIONS ===
export const CTA_BUTTONS = {
  primary: {
    discord: {
      text: "Join Our Discord",
      href: LINKS.discord.invite,
      external: true
    },
    bot: {
      text: "Add Discord Bot", 
      href: LINKS.discord.bot,
      external: true
    }
  },
  secondary: {
    learnMore: {
      text: "Learn More",
      href: LINKS.internal.about
    },
    challenges: {
      text: "Explore Challenges", 
      href: LINKS.internal.challenges
    },
    documentation: {
      text: "View Documentation",
      href: LINKS.docs.main,
      external: true
    }
  }
};

// === SITE METADATA ===
export const SITE_CONFIG = {
  name: getEnvVar('VITE_SITE_NAME', 'Turing Community'),
  description: getEnvVar('VITE_SITE_DESCRIPTION', 'A thriving Discord community for passionate coders'),
  url: getEnvVar('VITE_SITE_URL', 'https://turingcommunity.dev'),
  email: getEnvVar('VITE_CONTACT_EMAIL', 'contact@turingcommunity.dev'),
  
  // Social media handles (without @)
  handles: {
    twitter: 'turingcommunity',
    github: 'dawgNotSoEz',
    discord: 'turingcommunity'
  }
};

// === DISCORD CONFIGURATION ===
export const DISCORD_CONFIG = {
  inviteLink: LINKS.discord.invite,
  botInviteLink: LINKS.discord.bot,
  serverId: 'YOUR_SERVER_ID', // For widgets
  
  // Permissions for bot invite
  botPermissions: {
    manageMessages: true,
    embedLinks: true,
    readMessageHistory: true,
    useSlashCommands: true,
  }
};

// === LEGACY EXPORTS (for backwards compatibility) ===
export const DISCORD_INVITE_LINK = LINKS.discord.invite;

// You can ask me to customize any of these links!
// Just tell me: "Set Discord invite to: https://discord.gg/yourlink"
// Or: "Update GitHub to: https://github.com/yourusername/repo"
