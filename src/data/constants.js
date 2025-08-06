// === APPLICATION CONSTANTS ===
import { LINKS, NAVIGATION_LINKS as NAV_LINKS, DISCORD_CONFIG } from '../config/links.js';

// Re-export for backwards compatibility
export const DISCORD_INVITE_LINK = LINKS.discord.invite;
export const NAVIGATION_LINKS = NAV_LINKS;

export const COMMUNITY_STATS = [
    { value: "500+", label: "Active Members" },
    { value: "50+", label: "Challenges Solved" },
    { value: "6", label: "Domains" },
    { value: "24/7", label: "Community Support" }
];

export const ABOUT_FEATURES = [
    { 
        title: "Community Guidelines", 
        description: "Our community thrives on respect and inclusivity. We maintain a positive environment where everyone can learn and grow together." 
    },
    { 
        title: "Curated Resources", 
        description: "Access a wealth of study materials, documentation, and learning resources shared by mentors and experienced members." 
    },
    { 
        title: "Live Rankings", 
        description: "Track your progress and compete with peers through our dynamic leaderboard system with weekly and monthly rankings." 
    },
    { 
        title: "Weekly Events", 
        description: "Participate in regular coding challenges, workshops, and community events designed to enhance your skills." 
    },
    { 
        title: "Peer Learning", 
        description: "Collaborate with students from different years and departments, sharing knowledge and learning from each other." 
    },
    { 
        title: "Recognition System", 
        description: "Earn points, unlock achievements, and gain access to exclusive content as you progress through our rank system." 
    }
];

export const RANK_SYSTEM = [
    { name: "Newbie", points: "0-200", color: "bg-gray-500", members: "150+" },
    { name: "Junior Member", points: "201-500", color: "bg-green-500", members: "120+" },
    { name: "Coffee Coder", points: "501-1000", color: "bg-yellow-500", members: "80+" },
    { name: "Developer", points: "1000+", color: "bg-red-500", members: "60+" },
    { name: "Superclub", points: "Top 10%", color: "bg-purple-500", members: "25+" }
];

export const POINT_SYSTEM = [
    { activity: "Perfect Solution", points: "100" },
    { activity: "Working Solution", points: "70" },
    { activity: "Participation", points: "20" },
    { activity: "Helping Others", points: "+5" },
    { activity: "Code Reviews", points: "+5" },
    { activity: "Clean Code", points: "+10" },
    { activity: "First Submission", points: "+10" },
    { activity: "Workshop Attendance", points: "+15" }
];

export const DOMAINS = [
    { 
        name: "Data Science & AI", 
        description: "Dive into machine learning, data analysis, neural networks, and artificial intelligence projects.",
        icon: "🤖",
        skills: ["Python", "TensorFlow", "Pandas", "Scikit-learn"]
    },
    { 
        name: "Full Stack Development", 
        description: "Master both front-end and back-end technologies to build complete web applications.",
        icon: "🌐",
        skills: ["React", "Node.js", "MongoDB", "Express"]
    },
    { 
        name: "Cloud & DevOps", 
        description: "Explore cloud platforms, containerization, CI/CD pipelines, and infrastructure management.",
        icon: "☁️",
        skills: ["AWS", "Docker", "Kubernetes", "Jenkins"]
    },
    { 
        name: "Mobile Development", 
        description: "Create native and cross-platform mobile applications for iOS and Android.",
        icon: "📱",
        skills: ["React Native", "Flutter", "Swift", "Kotlin"]
    },
    { 
        name: "UI/UX Design", 
        description: "Focus on creating beautiful, intuitive, and user-centered design experiences.",
        icon: "🎨",
        skills: ["Figma", "Adobe XD", "Prototyping", "User Research"]
    },
    { 
        name: "Competitive Programming", 
        description: "Hone your algorithmic thinking and problem-solving skills for coding competitions.",
        icon: "🏆",
        skills: ["Algorithms", "Data Structures", "Mathematics", "Optimization"]
    },
];

export const COMMUNITY_FEATURES = [
    { 
        title: "Project Showcase", 
        description: "Share your personal projects, get constructive feedback, and discover what amazing things other members are building.",
        highlight: "50+ projects shared monthly"
    },
    { 
        title: "Career Guidance", 
        description: "Find job and internship opportunities, get resume reviews, and receive career advice from experienced mentors and alumni.",
        highlight: "15+ job placements this year"
    },
    { 
        title: "Portfolio Reviews", 
        description: "Polish your GitHub profile and portfolio with detailed feedback from mentors and peers to stand out to recruiters.",
        highlight: "Weekly review sessions"
    },
];

export const TEAM_MEMBERS = [
    { 
        name: "Nirupam Sharma", 
        role: "Community Lead", 
        avatar: `https://ui-avatars.com/api/?name=Nirupam+Sharma&background=06b6d4&color=fff&size=120`,
        description: "Passionate about building inclusive tech communities and fostering collaborative learning environments."
    },
    { 
        name: "Sarah Johnson", 
        role: "Senior Mentor (AI/ML)", 
        avatar: `https://ui-avatars.com/api/?name=Sarah+Johnson&background=8b5cf6&color=fff&size=120`,
        description: "3rd year CS student specializing in machine learning and data science projects."
    },
    { 
        name: "Alex Chen", 
        role: "Senior Mentor (Full Stack)", 
        avatar: `https://ui-avatars.com/api/?name=Alex+Chen&background=10b981&color=fff&size=120`,
        description: "Full-stack developer with expertise in modern web technologies and cloud platforms."
    },
    { 
        name: "Priya Patel", 
        role: "Event Coordinator", 
        avatar: `https://ui-avatars.com/api/?name=Priya+Patel&background=f59e0b&color=fff&size=120`,
        description: "Organizes workshops, hackathons, and community events to keep everyone engaged and learning."
    },
];

export const BOT_FEATURES = [
    {
        title: "Challenge Management",
        description: "Automatically posts weekly challenges, tracks submissions, and manages deadlines."
    },
    {
        title: "Points & Rankings",
        description: "Real-time leaderboard updates, point calculations, and automatic rank promotions."
    },
    {
        title: "Moderation Tools",
        description: "Smart moderation features to maintain community guidelines and positive environment."
    },
    {
        title: "Resource Library",
        description: "Curated study materials, documentation links, and learning resources at your fingertips."
    }
];

export const BOT_COMMANDS = [
    { command: "/challenge", description: "View current challenge" },
    { command: "/leaderboard", description: "Check rankings" },
    { command: "/profile", description: "View your stats" },
    { command: "/help", description: "Get assistance" }
];
