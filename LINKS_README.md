# 🔗 Links & Configuration Management

This document explains how to manage all the links, URLs, and configurable content in your Turing Community website.

## 📁 File Structure

```
src/
├── config/
│   └── links.js          # 🎯 Main links configuration
├── .env                  # 🔧 Environment template  
├── .env.local           # 🔒 Your actual values (git-ignored)
└── components/          # Components using the links
```

## 🚀 Quick Setup

### 1. Update Your Links

Edit `.env.local` with your actual values:

```bash
# Discord Links (MOST IMPORTANT!)
VITE_DISCORD_INVITE_LINK=https://discord.gg/YOUR_ACTUAL_INVITE

# Social Media
VITE_GITHUB_URL=https://github.com/your-username/your-repo
VITE_TWITTER_URL=https://twitter.com/your_handle

# Contact Info
VITE_CONTACT_EMAIL=your-email@domain.com
```

### 2. Test Your Links

Run the dev server and click through all buttons to ensure they work:

```bash
npm run dev
```

## 🎯 Key Links to Update

### 🔥 Priority 1 (Update FIRST!)
- **Discord Invite**: `VITE_DISCORD_INVITE_LINK`
- **GitHub Repository**: `VITE_GITHUB_URL` 
- **Contact Email**: `VITE_CONTACT_EMAIL`

### 📱 Priority 2 (Social Media)
- **Twitter**: `VITE_TWITTER_URL`
- **LinkedIn**: `VITE_LINKEDIN_URL`
- **YouTube**: `VITE_YOUTUBE_URL`

### 📄 Priority 3 (Documentation Pages)
- **Guidelines**: `VITE_GUIDELINES_URL`
- **Help/Support**: `VITE_HELP_URL`
- **Privacy Policy**: `VITE_PRIVACY_POLICY_URL`

## 🔄 How to Update Links

### Method 1: Environment Variables (Recommended)
1. Edit `.env.local`
2. Restart the dev server
3. Links update automatically!

### Method 2: Direct Code Update
Edit `src/config/links.js` for complex changes.

## 📍 Where Links Are Used

| Component | Links Used |
|-----------|------------|
| **Header** | Discord invite, navigation |
| **HeroSection** | Discord invite, "Learn More" |
| **Footer** | All footer links, contact info |
| **CTASection** | Discord invite, social media |

## 🛠️ Common Tasks

### Add New Social Platform
1. Add to `.env.local`:
   ```bash
   VITE_INSTAGRAM_URL=https://instagram.com/your_handle
   ```

2. Add to `src/config/links.js`:
   ```javascript
   social: {
     // ... existing
     instagram: getEnvVar('VITE_INSTAGRAM_URL', '#instagram'),
   }
   ```

### Change Button Text
Edit `src/config/links.js`:
```javascript
CTA_BUTTONS: {
  primary: {
    discord: {
      text: "Join Our Community", // Changed from "Join Our Discord"
      href: LINKS.discord.invite,
    }
  }
}
```

### Add New Page Link
1. Add environment variable:
   ```bash
   VITE_BLOG_URL=https://blog.turingcommunity.com
   ```

2. Add to links config:
   ```javascript
   docs: {
     // ... existing
     blog: getEnvVar('VITE_BLOG_URL', '#blog'),
   }
   ```

## 🚨 Important Notes

### Security
- Never commit `.env.local` to git (it's git-ignored)
- Use environment variables for sensitive data
- Test all external links before deploying

### Best Practices
- Always use `target="_blank" rel="noopener noreferrer"` for external links
- Provide fallback values for all environment variables
- Test links in different environments (dev, staging, production)

## 🎨 Customization Examples

Tell me any of these and I'll update them for you:

```bash
# Discord
"Set Discord invite to: https://discord.gg/abc123"

# Social Media  
"Update GitHub to: https://github.com/username/repo"
"Add Twitter: https://twitter.com/handle"

# Contact
"Change contact email to: hello@community.dev"

# Documentation
"Add guidelines page: https://docs.community.dev/guidelines"
```

## 📞 Need Help?

Just ask me to:
- "Update Discord invite link"
- "Add new social media platform"
- "Change contact email"
- "Add documentation links"

I'll update the configuration files for you! 🚀
