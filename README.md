# Turing Community Website

A modern, responsive website for the Turing Community Discord server - a vibrant coding community where students learn, collaborate, and grow together.

## 🌟 Features

- **Modern Design**: Clean, dark theme with gradient accents and smooth animations
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Elements**: Scroll-triggered animations and hover effects
- **Community Focused**: Showcases challenges, ranks, domains, and team
- **Discord Integration**: Direct links to join the community

## 🛠 Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS with custom animations
- **Icons**: Custom SVG icons for performance
- **Deployment Ready**: Optimized build configuration

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or navigate to the project**
   ```bash
   cd c:\Users\pkaur\Documents\code\Turing-Community\Discord\dc_website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
dc_website/
├── public/
│   └── favicon.svg          # Website favicon
├── src/
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # React entry point
│   └── index.css           # Global styles and Tailwind imports
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── postcss.config.js       # PostCSS configuration
```

## 🎨 Customization

### Discord Invite Link
Update the Discord invite link in `src/App.jsx`:

```javascript
const discordInviteLink = "https://discord.gg/your-actual-invite-link";
```

### Community Information
- **Team Members**: Update the team array in `TeamSection` component
- **Statistics**: Modify the stats in `HeroSection` and `CommunitySection`
- **Current Challenge**: Edit the challenge details in `ChallengeSection`
- **Domains**: Customize domains and skills in `DomainSection`

### Styling
- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Animations**: Add new animations in the global styles section
- **Layout**: Adjust spacing and sizing using Tailwind classes

### Content Sections

1. **Hero Section**: Main landing area with call-to-action
2. **About Section**: Community features and benefits
3. **Challenge Section**: Weekly coding challenges info
4. **Gamification**: Ranking system and points
5. **Domains**: Different specialization areas
6. **Community**: Additional community features
7. **Team**: Team member profiles
8. **Join Section**: Final call-to-action

## 🎯 Based on Discord Community Blueprint

This website reflects the structure and values of our Discord community:

- **Weekly Challenges**: Monday releases with Sunday deadlines
- **Rank System**: From Newbie to Superclub based on points
- **Domain Specialization**: 6 main areas of focus
- **Mentorship**: 3rd year students and community leaders
- **Gamification**: Points, badges, and recognition system

## 🚀 Deployment Options

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Import the project
3. Deploy automatically

### Netlify
1. Drag and drop the `dist` folder to Netlify
2. Or connect via GitHub for continuous deployment

### GitHub Pages
1. Build the project: `npm run build`
2. Deploy the `dist` folder to GitHub Pages

## 📝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

## 🤝 Community Guidelines

This website represents our community values:
- **Inclusive**: Welcoming to all skill levels
- **Collaborative**: Learning together and helping others
- **Growth-Oriented**: Focused on continuous improvement
- **Respectful**: Maintaining a positive environment

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Support

- Join our [Discord Community](https://discord.gg/your-invite-link)
- Open an issue for bug reports
- Contact the team through Discord

---

**Built with ❤️ by the Turing Community**
