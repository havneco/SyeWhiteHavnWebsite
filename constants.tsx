
import { Building2, Code2, LineChart, ShieldCheck, Zap, Heart, Search, Users, Lightbulb } from 'lucide-react';
import { Project, Service, Milestone, ChartData, BrandValue, CaseStudy, AppTool, AudienceSegment, ProofPoint, HavnPillar, Philosophy, StorySection, MediaKitBio } from './types';

export const NAV_ITEMS = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Apps', href: '#apps' },
    { label: 'Media Kit', href: '#media-kit' },
    { label: 'Contact', href: '#contact' },
];

export const CONTACT_INFO = {
    email: "syewhite@gmail.com",
    phone: "+1 (406) 555-0123",
    location: "Helena, Montana (serving everywhere)",
    social: {
        linkedin: "https://linkedin.com/in/syewhite",
        github: "https://github.com/syewhite",
        twitter: "https://x.com/syewhite"
    }
};

export const SITE_IMAGES = {
    hero: "https://i.imgur.com/igfNf2j.jpeg",
    about_personal: "https://i.imgur.com/WXPjejr.jpeg",
    hospitality_shot: "https://i.imgur.com/PVBTUvE.jpeg",
    adventure_shot: "https://i.imgur.com/AWjD0Im.jpeg",
    dog_training_shot: "https://i.imgur.com/8hbAr4E.jpeg",
    headshot_print: "/sye_headshot.jpg",
    headshot_action: "/sye_adventure.jpg",
    section_divider: "https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&q=80&w=2000",
    project_0: "https://i.imgur.com/uwIT889.jpeg",
    project_1: "https://i.imgur.com/iOYQeWm.png",
    project_2: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    project_3: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000"
};

// ============================================
// NEW V2 CONTENT - Homepage
// ============================================

export const HERO_CONTENT = {
    tagline: "Builder. Founder. Lifelong Learner.",
    headline: "I build AI-powered solutions for people problems.",
    subhead: "",
    stats: "120 applications built in 6 months. From wine lists to wealth systems.",
    obsession: "Currently obsessed with helping people live well.",
    ctaPrimary: "See What I'm Building",
    ctaSecondary: "Let's Talk"
};

export const SHORT_STORY_CONTENT = {
    header: "The Short Story",
    intro: "I'm Sye. I spend my time learning, researching, and building.",
    achievements: [
        { skill: "wine", detail: "I learned wine well enough to land a restaurant on Wine Spectator's international list in its first year." },
        { skill: "real estate", detail: "Learned real estate well enough to close $5M in deals in 2025 — my Dimes so I can focus on my Dollars." },
        { skill: "AI", detail: "Learned AI well enough to ship 120 applications in 6 months on an app-a-day challenge." }
    ],
    pattern: "The pattern: figure it out, then help others do the same.",
    magnumOpus: "My magnum opus is Havn — a one-stop ecosystem for all of a person's needs. Health, wealth, impact, luxury. AI-native, integrated flywheel, causal chain. The goal is simple: help people enjoy a life well lived.",
    teaser: "I have a longer story if you want it. It explains a lot. But the short version is: I made my life what it is, I am who I am because of my upbringing, and I'm here to solve problems.",
    ctaText: "Read the Full Story →"
};

export const AUDIENCE_SEGMENTS: AudienceSegment[] = [
    {
        title: "For Family Offices & HNW Individuals",
        problem: "Your data is fragmented. Your tools don't talk to each other. You need clarity on what you actually have and where it's going.",
        solution: "Sovereign AI systems. Private dashboards that unify your portfolio, automate reporting, and give you real visibility — without trusting the cloud with everything.",
        currentBuild: "Currently Building: Aegis — AI infrastructure for family offices who want control.",
        icon: ShieldCheck
    },
    {
        title: "For Operators & Founders",
        problem: "Messy data, fragmented tools, teams that need better visibility. You know what you need but don't have time to build it.",
        solution: "Data architecture, AI integration, custom dashboards. I come in, understand your stack, and build what you actually need — fast.",
        recentWork: "Recent Work: E-commerce data warehousing, portfolio visualization, real estate analysis tools.",
        icon: Code2
    },
    {
        title: "For Everyone Else",
        problem: "You have an idea, a workflow, a bottleneck. You need someone who can figure it out.",
        solution: "Whatever solves the problem. I've built accessibility apps, media kit generators, task managers, conversation analyzers, video workflow tools. If it can be built, I'll build it.",
        icon: Lightbulb
    }
];

export const PROOF_POINTS: ProofPoint[] = [
    { what: "Applications Built", number: "120", context: "App-a-day challenge, 6 months" },
    { what: "Real Estate Volume", number: "$5M", context: "2025, Dimes for Dollars" },
    { what: "Wine Spectator Awards", number: "3", context: "Consecutive years" },
    { what: "Time to Build Lumina", number: "4 hours", context: "Visual accessibility app for my mom" }
];

export const PHILOSOPHY_VALUES: Philosophy[] = [
    {
        title: "Convenience is Key.",
        description: "If it's not easy to use, people won't use it. I build for adoption, not admiration."
    },
    {
        title: "Confidence is Key.",
        description: "I'd rather be clear and wrong than vague and safe. Every system I build has a point of view."
    },
    {
        title: "Teamwork Makes the Dream Work.",
        description: "I operate as a solo founder amplified by AI — but I know when to bring in the right people. Ego doesn't build companies."
    },
    {
        title: "The Greatest Thing You'll Ever Learn...",
        description: "...is just to love, and be loved in return. (Yes, I'm quoting Moulin Rouge. It's my favorite movie. Sue me.)"
    }
];

export const HAVN_ECOSYSTEM: HavnPillar[] = [
    {
        name: "HealthHavn",
        tagline: "The Foundation",
        description: "Your vitality drives everything else. We aggregate biometrics to link physical health with decision-making energy.",
        status: "Active Development"
    },
    {
        name: "WealthHavn",
        tagline: "The Engine",
        description: "Sovereign financial architecture. A unified dashboard connecting capital allocation to life goals. This is where Aegis lives.",
        status: "Active Development"
    },
    {
        name: "ImpactHavn",
        tagline: "The Legacy",
        description: "Wealth with purpose. Scalable philanthropy and community building for multi-generational impact.",
        status: "Designed"
    },
    {
        name: "LuxHavn",
        tagline: "The Reward",
        description: "Tokenized access to the good life. Fractional ownership of world-class experiences and properties.",
        status: "Designed"
    }
];

export const LUMINA_FEATURE = {
    header: "Lumina: Sensory Bridge",
    story: "My mom was diagnosed with a degenerative eye condition. She's losing her sight.\n\nI heard the news. Four hours later, she had an app that reads her mail, checks expiration dates, describes what's in front of her, and talks to her when she's alone.\n\nThat's what I mean when I say I figure things out.\n\nLumina is free. If you or someone you know needs it, it's yours.",
    cta: "Launch Lumina →",
    url: "https://lumina-sensory-bridge-1091719440895.us-west1.run.app"
};

export const CREDENTIALS = [
    "5th Generation Montana Homesteader",
    "Assiniboine Sioux (Fort Belknap)",
    "Former Sommelier & Maître d'",
    "Commercial Real Estate Broker",
    "Wine Spectator Award Winner (x3)"
];

export const CONTACT_CONTENT = {
    header: "Let's Build Something",
    copy: "I work with family offices, operators, and founders who have real problems to solve.",
    subCopy: "If you're looking for someone who can figure it out — whatever \"it\" is — let's talk.",
    abundance: "I always try to give in abundance. Fair exchange. If I can help, I will.",
    email: "syewhite@gmail.com",
    location: "Helena, Montana (serving everywhere)"
};

export const FOOTER_TAGLINE = "Helping people enjoy a life well lived.";

// ============================================
// STORY PAGE CONTENT
// ============================================

export const STORY_PAGE_CONTENT = {
    title: "The Long Version",
    subhead: "You clicked through, so here it is. This explains a lot.",
    sections: [
        {
            part: 1,
            title: "The Setup",
            content: [
                "I'm a 5th generation Montana homesteader. Assiniboine Sioux through Fort Belknap. That sounds stable, rooted. It wasn't.",
                "My childhood was... unconventional. Trailer parks, constant moves, adults making choices that didn't prioritize me. I won't list it all here — some of it I'm still piecing together — but the short version is: I learned early that no one was coming to save me.",
                "I was in foster care from 14 to 17. Ate lunch alone in the music room teaching myself piano. Barely graduated high school — teachers let me pass out of sympathy, except physics where I had an A. Something about how systems work made sense when nothing else did.",
                "I went to college, got a 0.7 GPA, dropped out. Worked in a factory to pay off the debt. Then I went back to Montana and started over."
            ]
        },
        {
            part: 2,
            title: "The Building",
            content: [
                "Here's the pattern that's defined my life:",
                "**Wine:** I studied, worked alongside Michelin-starred chefs, and learned from master sommeliers until I could hold my own. Earned Wine Spectator awards three years running. Helped open restaurants. Became the guy people trusted with their wine programs.",
                "**Real Estate:** Got my license, found mentors, closed $5M in deals in 2025 — my Dimes so I can focus on my Dollars. Learned to read deals, structure transactions, see what others miss.",
                "**AI:** Spent 8-14 hours a day inside development environments until I could build anything I could imagine. 120 applications in 6 months on an app-a-day challenge.",
                "The pattern is always the same: no credentials, no connections, no safety net. So I figure it out."
            ]
        },
        {
            part: 3,
            title: "The Why",
            content: [
                "I build sovereignty — systems that give people clarity, control, and protection over what matters most.",
                "Why sovereignty? Because I know what it feels like to have none.",
                "I'm not going to trauma-dump here. But I'll say this: my first memory isn't a happy one. My father was a complicated man — people said he was an angel when he was sober and a devil when he wasn't. He was murdered in 2019. I felt relief and regret in equal measure.",
                "My mom did her best with what she had. She taught me to be kind to everyone because you don't know what they're going through. I'm still unlearning the belief that survival is all I deserve.",
                "I tell you this not for sympathy. I tell you because it explains everything I build.",
                "The kid who learned to read rooms to survive is the same person who now builds systems to help others thrive. The pattern recognition that kept me alive is the same thing that lets me see what a family office actually needs, what an operator is missing, what a problem actually requires.",
                "I made my life what it is. I am who I am because of my upbringing. And I'm here to solve problems."
            ]
        },
        {
            part: 4,
            title: "The Now",
            content: [
                "I'm 32. I operate as a solo founder amplified by AI.",
                "My magnum opus is Havn — an ecosystem built on the belief that health drives wealth drives impact drives the ability to actually enjoy your life. Four pillars, one flywheel.",
                "I'm also building Aegis — sovereign AI infrastructure for family offices who want real control over their data and decisions.",
                "And I'm building whatever else needs building. Lumina started because my mom is going blind and I had four hours to do something about it.",
                "I don't know exactly where this goes. But I know the pattern: figure it out, then help others do the same.",
                "If you read this far, you probably see something familiar. Let's talk."
            ]
        },
        {
            part: 5,
            title: "What I Actually Want",
            content: [
                "To help people enjoy a life well lived.",
                "To build systems that give others the clarity, control, and protection I never had.",
                "To prove that late bloomers aren't behind — they're just on a different timeline.",
                "To be trusted by people who have something worth protecting.",
                "To give in abundance, in fair exchange, with everyone who gives me a chance."
            ]
        }
    ],
    closingLine: "That's the story. Now let's build something."
};

// ============================================
// MEDIA KIT CONTENT
// ============================================

export const MEDIA_KIT_BIOS: MediaKitBio = {
    shortBio: "Sye White is a builder, founder, and lifelong learner based in Helena, Montana. A 5th generation homesteader and proud Assiniboine Sioux through Fort Belknap, Sye masters domains through pattern recognition, mentors, and relentless practice — from helping land a restaurant on Wine Spectator's international list in its first year, to closing $5M in real estate deals in 2025, to shipping 120 applications in 6 months on an app-a-day challenge.\n\nHis current focus is Havn, an AI-native ecosystem designed to help people manage health, wealth, impact, and lifestyle through one integrated platform. He also builds custom AI infrastructure for family offices and operators who need real solutions, fast.\n\nSye describes his approach simply: \"Figure it out, then help others do the same.\"",

    longBio: "Sye White's path doesn't fit a template.\n\nBorn in Helena, Montana to Michelle Johnson and Shane White, Sye is a proud Assiniboine Sioux through Fort Belknap and a 5th generation Montana homesteader. His early life was defined by instability — foster care from 14 to 17, constant moves, learning early that no one was coming to save him. He barely graduated high school, dropped out of college with a 0.7 GPA, and worked in a factory to pay off debt.\n\nThen he started building.\n\nWith no formal training, Sye learned wine well enough to help land a restaurant on Wine Spectator's international list in its first year while working alongside Michelin-starred chefs. He learned real estate well enough to close $5M in deals in 2025, part-time. He learned AI development well enough to ship 120 applications in 6 months on an app-a-day challenge.\n\nThe pattern is always the same: no credentials, no connections, no safety net. Figure it out.\n\nToday, Sye operates as what he calls a \"solo founder amplified by AI.\" His magnum opus is Havn — an integrated ecosystem connecting health, wealth, impact, and lifestyle through AI-native infrastructure. He also builds custom solutions for family offices and operators who need clarity, control, and systems that actually work.\n\nWhen his mother was diagnosed with a degenerative eye condition, Sye built Lumina — a visual accessibility app — in four hours. That's not an exaggeration — it's an example of how he operates.\n\nSye's philosophy is simple: help people enjoy a life well lived. His method: figure it out, then help others do the same.",

    talkingPoints: [
        {
            title: "The \"Figure It Out\" Pattern",
            description: "How teaching yourself wine, real estate, and AI follows the same underlying process"
        },
        {
            title: "Solo Founder, AI-Amplified",
            description: "What it actually means to build alone with AI as a force multiplier (and when you still need humans)"
        },
        {
            title: "The Havn Ecosystem",
            description: "Why health, wealth, impact, and luxury aren't separate categories but a causal chain"
        },
        {
            title: "Building Lumina in 4 Hours",
            description: "The story of building a visual accessibility app when his mother was diagnosed with a degenerative eye condition"
        },
        {
            title: "Late Bloomers Aren't Behind",
            description: "Why some people are built for emergence rather than early success"
        },
        {
            title: "Sovereignty as a Product",
            description: "What family offices actually need and why most solutions fail them"
        }
    ]
};

// ============================================
// LEGACY CONTENT (kept for backwards compatibility)
// ============================================

export const ABOUT_CONTENT = {
    hook: SHORT_STORY_CONTENT.intro,
    bio: SHORT_STORY_CONTENT.achievements.map(a => a.detail).join(' '),
    bio_havn: SHORT_STORY_CONTENT.magnumOpus,
    bio_real_estate: SHORT_STORY_CONTENT.pattern,
    current: SHORT_STORY_CONTENT.teaser
};

export const BRAND_VALUES: BrandValue[] = PHILOSOPHY_VALUES.map((p, idx) => ({
    title: p.title,
    description: p.description,
    icon: [ShieldCheck, Zap, Users, Heart][idx]
}));

export const SERVICES: Service[] = [
    {
        title: "Real Estate Services",
        icon: Building2,
        description: "Commercial property analysis, acquisition, and transaction management with a vision for international luxury destinations.",
        features: ["Commercial Real Estate (Helena, MT)", "Investment Property Consulting", "Land Evaluation & Acquisition", "International Resort Development"]
    },
    {
        title: "Technology & Data Architecture",
        icon: Code2,
        description: "Rapid prototyping and enterprise-grade data architecture. Building the infrastructure that pays for the vision.",
        features: ["AI Application Development", "Rapid Prototyping (100+ Tools)", "BigQuery & Data Warehousing", "Full-stack Solutions"]
    },
    {
        title: "Financial Services",
        icon: LineChart,
        description: "Democratizing financial literacy and wealth management through AI-driven platforms and transparent insurance solutions.",
        features: ["Wealth Council Platform", "Life Insurance Solutions", "AI-Powered Wealth Management", "Lead Generation Systems"]
    }
];

export const CASE_STUDIES: CaseStudy[] = [
    {
        title: "Real Estate + AI Convergence",
        description: "Developed a proprietary real estate analysis tool to augment traditional appraisal processes, targeting institutional investors and decision boards.",
        impact: "Combines market data, AI analysis, and compliance frameworks to deliver actionable investment intelligence.",
        tags: ["PropTech", "AI Analysis", "Commercial RE"]
    },
    {
        title: "Rapid Prototyping at Scale",
        description: "Built 120 applications in 6 months across Google AI Studio, Replit, and other platforms.",
        impact: "Demonstrated ability to quickly validate concepts, iterate based on feedback, and ship production-ready solutions.",
        tags: ["Development", "MVP", "Speed"]
    },
    {
        title: "Financial Services Innovation",
        description: "Created Wealth Council platform to democratize financial literacy while building lead generation systems for life insurance products.",
        impact: "Integrating AI to personalize financial education and product recommendations.",
        tags: ["FinTech", "EdTech", "Wealth Management"]
    }
];

export const PROJECTS: Project[] = [
    {
        title: "Havn",
        category: "The Magnum Opus",
        description: "The ultimate vision: An AI-powered hospitality and real estate ecosystem combining world-class service with next-gen infrastructure.",
        techStack: ["Google AI Studio", "Python", "Predictive Analytics"],
        image: "https://i.imgur.com/uwIT889.jpeg"
    },
    {
        title: "Wealth Council",
        category: "FinTech",
        description: "A financial literacy platform built in partnership with MyCEO. Designed to democratize wealth-building strategies and prepare for an AppSumo launch.",
        techStack: ["React", "Firebase", "AI Integration"],
        image: "https://i.imgur.com/iOYQeWm.png"
    },
    {
        title: "AI Research & Development",
        category: "HealthTech & Innovation",
        description: "Compliance-focused healthcare data analysis platform leveraging AI for institutional insights.",
        techStack: ["Security Compliance", "Big Data", "Machine Learning"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
    },
    {
        title: "RE Analysis Tool",
        category: "PropTech",
        description: "Investor-facing property intelligence platform designed to augment traditional appraisal processes using AI analysis.",
        techStack: ["Replit", "Data Visualization", "REST APIs"],
        image: "https://picsum.photos/800/600?random=3"
    }
];

export const MILESTONES: Milestone[] = [
    { year: "2005", title: "The Foundation", description: "First paying job at age 13 bailing hay for Farmer Art. Earned $75/day, a lunch, and a relentless work ethic." },
    { year: "2010", title: "The Discovery", description: "First encountered Bitcoin while exploring the early utility of digital currency online." },
    { year: "2015-2019", title: "Hospitality Mastery", description: "Climbed from wine bar staff to Maitre'd & Sommelier, opening a hotel with a Michelin-starred chef. The 'Havn' concept was born here." },
    { year: "2020", title: "The Pivot", description: "Obtained Real Estate License. Started in residential, quickly focused on Commercial Real Estate to build the 'Havn' vision." },
    { year: "2021", title: "The Genesis of Havn", description: "Founded Havn and began building the scaffolding and framework for the superapp ecosystem." },
    { year: "2023", title: "The Tech Sprint", description: "Began building 100+ AI prototypes using GPT, Replit, AI Studio, and AntiGravity—proving execution over theory." },
    { year: "2024", title: "Strategic Partnership", description: "Met Boris in Vegas while in town for a separate work trip, leading to a partnership on MyCEO and the creation of Wealth Council." },
    { year: "2025", title: "Wealth Council Launch", description: "Launched the Wealth Council Founder Program to 15 founding members." },
    { year: "2026", title: "Scaling & Launch", description: "Scheduled public launch of Wealth Council. Continued expansion and deployment of the Havn ecosystem." },
];

export const TECH_STACK = [
    "Google AI Studio", "BigQuery", "Parquet", "SQL", "Firebase", "Replit", "AntiGravity", "Lovable", "Vercel", "Python", "TypeScript", "Gemini 2.0"
];

export const CHART_DATA: ChartData[] = [
    { name: 'Prototypes', value: 100 },
    { name: 'Years Crypto', value: 14 },
    { name: 'Active Ventures', value: 3 },
    { name: 'Platforms', value: 6 },
];

export const STATS_METRICS = [
    { label: "Prototypes Built", value: "100+" },
    { label: "Years in Crypto", value: "14" },
    { label: "Active Ventures", value: "3+" },
    { label: "Platforms Mastered", value: "6" },
];

// Organized by Priority: Havn Ecosystem > Live > Beta > Internal/Proprietary
export const APP_LIBRARY: AppTool[] = [
    // --- FLAGSHIP / ECOSYSTEM ---
    {
        id: "havn-safe",
        name: "HAVN",
        description: "An AI-powered 'Super App' ecosystem integrating Health, Wealth, Impact, and Luxury via the Causal Chain. Features the 'Sage' AI advisor and fractional ownership models to democratize the family office lifestyle and ensure data sovereignty.",
        url: "#",
        category: "HealthTech",
        status: "Beta"
    },
    {
        id: "healthhavn-app",
        name: "HealthHavn",
        description: "The Foundation Pillar. Aggregates biometric data and health records to track how physical vitality correlates to decision-making energy and longevity. Prioritizes granular privacy and data sovereignty.",
        url: "#",
        category: "HealthTech",
        status: "Beta"
    },
    {
        id: "wealthhavn-app",
        name: "WealthHavn",
        description: "The Engine Pillar. A unified financial dashboard integrating debt services, business accounts, and investments. AI-driven advice links financial stability to health interventions and social impact.",
        url: "#",
        category: "Fintech",
        status: "Beta"
    },
    {
        id: "impacthavn-app",
        name: "ImpactHavn",
        description: "The Legacy Pillar. Manages philanthropy and social footprint. Ensures that as users grow, their community contribution grows, moving beyond local donations to global, legacy-defining impact.",
        url: "#",
        category: "Other",
        status: "Beta"
    },
    {
        id: "lux-havn-app",
        name: "LuxHavn",
        description: "The Reward Pillar. A marketplace for fractional ownership of luxury assets and experiences (Real Estate, Travel, Resorts). Combines the investment potential of REITs with NetJets-style access.",
        url: "#",
        category: "Hospitality",
        status: "Beta"
    },

    // --- LIVE & PUBLIC TOOLS (High Impact) ---
    {
        id: "lumina-sensory",
        name: "Lumina: Sensory Bridge",
        description: "A dedicated accessibility prosthetic using Gemini Live API to provide real-time video-to-speech visual assistance for the visually impaired.",
        url: "https://lumina-sensory-bridge-1091719440895.us-west1.run.app",
        category: "HealthTech",
        status: "Live"
    },
    {
        id: "nexus-ai",
        name: "Nexus AI",
        description: "Advanced Conversation Intelligence. Distills wisdom, subtext, and behavioral insights from any interaction using Gemini 3 Pro.",
        url: "https://nexus-ai-1091719440895.us-west1.run.app",
        category: "AI Utility",
        status: "Live"
    },
    {
        id: "sparky",
        name: "Sparky",
        description: "The TikTok for AI-generated micro-apps and games. Build tools, utilities, or games with a prompt, launch to the feed, and vibe out.",
        url: "https://sparky-1091719440895.us-west1.run.app",
        category: "AI Utility",
        status: "Live"
    },
    {
        id: "mk-ultrai",
        name: "MK UltrAI",
        description: "An application to design custom media kits from business cards to billboards.",
        url: "https://mk-ultrai-1091719440895.us-west1.run.app",
        category: "AI Utility",
        status: "Live"
    },
    {
        id: "actually-useful",
        name: "Actually Useful",
        description: "A smart task manager and idea funnel that helps you capture, prioritize, and act on your thoughts using AI.",
        url: "https://actually-useful-1091719440895.us-west1.run.app",
        category: "AI Utility",
        status: "Live"
    },
    {
        id: "runway-node",
        name: "Runway Node Emulator",
        description: "A visual tool to emulate and test node-based workflows, allowing users to create, connect, and manage nodes in a simulated environment.",
        url: "https://runway-node-emulator-1091719440895.us-west1.run.app",
        category: "AI Utility",
        status: "Live"
    },
    {
        id: "cute-pai",
        name: "Cute as PAI",
        description: "Create fun, beautiful, and unique AI-generated portraits and avatars. Perfect for social media and profiles.",
        url: "https://cute-as-pai-ai-portrait-generator-555155482674.us-west1.run.app",
        category: "AI Utility",
        status: "Live"
    },
    {
        id: "naturescape",
        name: "NatureScape Designer",
        description: "An interactive visual designer that uses AI to generate, analyze, and troubleshoot aquascapes, terracapes, and backyard ponds.",
        url: "https://naturescape-designer-191815171115.us-west1.run.app",
        category: "Other",
        status: "Live"
    },
    {
        id: "watercolor-assist",
        name: "Watercolor Artist's Assistant",
        description: "Upload a photo and get AI-powered guidance for your watercolor painting. Analyzes lighting, textures, and suggests palettes.",
        url: "https://watercolor-artist-s-assistant-1091719440895.us-west1.run.app",
        category: "AI Utility",
        status: "Live"
    },

    // --- BETA TOOLS (In Development) ---
    {
        id: "white-feather",
        name: "White Feather Estates",
        description: "A professional landing page for White Feather Estates, a Native American-owned commercial real estate firm specializing in site assembly for data centers.",
        url: "#",
        category: "Real Estate",
        status: "Beta"
    },
    {
        id: "lovelease-app",
        name: "LoveLease",
        description: "LoveLease is an all-in-one seamless solution for lease management, catering to users with 1 to 500+ properties.",
        url: "#",
        category: "Real Estate",
        status: "Beta"
    },
    {
        id: "lovelease-intel",
        name: "LoveLease - Lease Intelligence",
        description: "A comprehensive lease intelligence platform designed to automate and streamline property management.",
        url: "#",
        category: "Real Estate",
        status: "Beta"
    },
    {
        id: "lumina-doc",
        name: "Lumina - AI Document Architect",
        description: "An intelligent document transformation engine that ingests raw files and outputs professionally designed publications.",
        url: "#",
        category: "AI Utility",
        status: "Beta"
    },
    {
        id: "fit-me",
        name: "Fit Me",
        description: "Fit Me is your personalized AI health assistant. Get a diet plan that truly 'fits you,' with tailored goals.",
        url: "#",
        category: "HealthTech",
        status: "Beta"
    },
    {
        id: "legacy-capsule",
        name: "LegacyCapsule: Video Memories",
        description: "Record and preserve heartfelt video messages for your loved ones, to be delivered on a future date.",
        url: "#",
        category: "AI Utility",
        status: "Beta"
    },
    {
        id: "ai-cupid",
        name: "AI Cupid",
        description: "An AI-powered dating app where personalized AI agents interact to find you the perfect match based on deep compatibility.",
        url: "#",
        category: "Other",
        status: "Beta"
    },
    {
        id: "psyche-scan",
        name: "Psyche-Scan: Interaction Analyzer",
        description: "An application that objectively analyzes conversations to generate psychological profiles of the participants.",
        url: "#",
        category: "AI Utility",
        status: "Beta"
    },
    {
        id: "wisdom-distiller",
        name: "Wisdom Distiller AI",
        description: "An application to analyze text from various sources, distill key themes, and generate a culminating summary video.",
        url: "#",
        category: "AI Utility",
        status: "Beta"
    },
    {
        id: "doc-aloud",
        name: "Document Aloud",
        description: "A web application that reads documents aloud using advanced Text-to-Speech technology.",
        url: "#",
        category: "AI Utility",
        status: "Beta"
    },
    {
        id: "mcp-maps",
        name: "MCP Maps 3D",
        description: "Build Photoreal 3D maps with natural language using a Gemini-powered Agent and MCP tool.",
        url: "#",
        category: "AI Utility",
        status: "Beta"
    },
    {
        id: "enhance",
        name: "ENHANCE!",
        description: "Infinitely zoom into any image with this creative enhancer. See if you can find the easter egg.",
        url: "#",
        category: "AI Utility",
        status: "Beta"
    },
    {
        id: "my-story",
        name: "My Story",
        description: "Your personal AI-powered story creation studio. An integrated workbench to take a creator from a raw idea to a finished video.",
        url: "#",
        category: "AI Utility",
        status: "Beta"
    },
    {
        id: "mediasim",
        name: "MediaSim",
        description: "Create and combine AI media, blending Veo and Imagen on a single canvas.",
        url: "#",
        category: "AI Utility",
        status: "Beta"
    },
    {
        id: "veo-gallery",
        name: "Veo 3 Gallery",
        description: "Explore a gallery of stunning Veo videos and remix their prompts to create your own.",
        url: "#",
        category: "AI Utility",
        status: "Beta"
    },
    {
        id: "venue-reserve",
        name: "VenueReserve Pro",
        description: "A graphical reservation application that allows users to visually select and book seats, tables, or amenities.",
        url: "#",
        category: "Hospitality",
        status: "Beta"
    },
    {
        id: "ai-meeting",
        name: "AI Meeting Room",
        description: "A web application that simulates a video conference call with a Gemini-powered AI assistant.",
        url: "#",
        category: "AI Utility",
        status: "Beta"
    },
    {
        id: "keno-rogue",
        name: "Keno Rogue",
        description: "A roguelike gambling Keno game where you level up, gain powerful buffs, and try to maximize your winnings.",
        url: "#",
        category: "Other",
        status: "Beta"
    },
    {
        id: "gemini-os",
        name: "Gemini OS",
        description: "Simulate a computer with a UI that is generated dynamically from user interactions.",
        url: "#",
        category: "AI Utility",
        status: "Beta"
    },
    {
        id: "inspo",
        name: "Inspo",
        description: "An AI-powered home design and renovation assistant. Upload a photo, describe your vision, and get a redesigned image.",
        url: "#",
        category: "Real Estate",
        status: "Beta"
    },
    {
        id: "marvel-tft",
        name: "Marvel Auto Battler: Convergence",
        description: "A cooperative, roguelike Team Fight Tactics (TFT) game set in the Marvel universe.",
        url: "#",
        category: "Other",
        status: "Beta"
    },
    {
        id: "whats-your-story",
        name: "Story (What's Your Story?)",
        description: "Platform for interactive storytelling.",
        url: "#",
        category: "AI Utility",
        status: "Beta"
    },
    {
        id: "brand-homepage",
        name: "AI-Powered Brand Homepage",
        description: "An interactive brand homepage and blog that uses AI to generate new content on-demand.",
        url: "#",
        category: "Other",
        status: "Beta"
    },
    {
        id: "roulette-sim",
        name: "Roulette Strategy Simulator",
        description: "An application to simulate and test various roulette betting strategies with AI suggestion tool.",
        url: "#",
        category: "Other",
        status: "Beta"
    },
    {
        id: "micro-app-gen",
        name: "Micro-App Generator",
        description: "A service to generate unique, branded micro-apps for businesses.",
        url: "#",
        category: "AI Utility",
        status: "Beta"
    },
    {
        id: "avatar-media",
        name: "Avatar Media Package Generator",
        description: "An AI-powered application to generate a complete media package of 7 stylized avatar images.",
        url: "#",
        category: "AI Utility",
        status: "Beta"
    },
    {
        id: "aether-sales",
        name: "Aether Sales OS",
        description: "An AI-powered sales and marketing platform that automates lead generation and brand management.",
        url: "#",
        category: "Other",
        status: "Beta"
    },
    {
        id: "collab-story",
        name: "Collaborative Story Weaver",
        description: "An AI-powered application to help authors write books by collaboratively gathering stories.",
        url: "#",
        category: "AI Utility",
        status: "Beta"
    },
    {
        id: "popcorn-ideator",
        name: "Popcorn App Ideator",
        description: "An AI-powered assistant to help you brainstorm ideas for 'popcorn snacking apps'.",
        url: "#",
        category: "AI Utility",
        status: "Beta"
    },
    {
        id: "chatterbots",
        name: "ChatterBots",
        description: "Build and banter with your own AI characters using the Live API.",
        url: "#",
        category: "AI Utility",
        status: "Beta"
    },

    // --- INTERNAL & PROPRIETARY ---
    {
        id: "pips-architect",
        name: "PIPS Architect",
        description: "A Portfolio Investment Planning System (PIPS) based on the Balanced Barbell Strategy. Features automated allocation calculation, retirement projections, and AI-powered recommendations.",
        url: "#",
        category: "Fintech",
        status: "Proprietary"
    },
    {
        id: "pre-revenue-valuator",
        name: "Pre-Revenue Valuator",
        description: "A comprehensive valuation toolkit for pre-revenue startups using the Berkus, Scorecard, VC, and Risk Factor Summation methods.",
        url: "#",
        category: "Fintech",
        status: "Proprietary"
    },
    {
        id: "dansing-creator",
        name: "DanSing Creator Framework",
        description: "A comprehensive workflow training tool for DanSing Pancakes, guiding users through AI-assisted content creation.",
        url: "#",
        category: "AI Utility",
        status: "Proprietary"
    },
    {
        id: "dansing-studio",
        name: "DanSing Pancakes Studio",
        description: "Create your own long form AI generated content with My Studio.",
        url: "#",
        category: "AI Utility",
        status: "Proprietary"
    },
    {
        id: "boeing-ops",
        name: "Boeing Ops Command AI",
        description: "Unified AI-powered operational command center for Boeing leaders, integrating production, quality, and supply chain data.",
        url: "#",
        category: "AI Utility",
        status: "Proprietary"
    },
    {
        id: "prop-intel",
        name: "PropIntel | Investment Valuation Engine",
        description: "Investment-Grade Property Intelligence for Institutional Investors. Features automated regression modeling.",
        url: "#",
        category: "Real Estate",
        status: "Internal"
    },
    {
        id: "panfry-animation",
        name: "Panfry Animation Studio",
        description: "An AI-powered animation studio that brings your pastry characters to life using Veo.",
        url: "#",
        category: "AI Utility",
        status: "Proprietary"
    },
    {
        id: "balanced-barbell",
        name: "The Balanced Barbell Strategy",
        description: "A comprehensive digital guide and interactive toolkit for the Balanced Barbell Investment Strategy.",
        url: "#",
        category: "Fintech",
        status: "Proprietary"
    },
    {
        id: "genie-world",
        name: "Genie World Generator",
        description: "Upload a starter image and generate a dynamic 'world view' video, inspired by Google DeepMind's Genie.",
        url: "#",
        category: "AI Utility",
        status: "Internal"
    },
    {
        id: "ai-video-stitcher",
        name: "AI Video Stitcher",
        description: "Stitch together AI-generated video clips, add audio, voiceovers, and overlays to create a complete video.",
        url: "#",
        category: "AI Utility",
        status: "Internal"
    },
    {
        id: "ai-house-plan",
        name: "AI House Plan Generator",
        description: "An application that uses AI to generate detailed house plans, including floorplans and exterior renderings.",
        url: "#",
        category: "Real Estate",
        status: "Internal"
    },
    {
        id: "slp-stacks",
        name: "SLP Stacks Connect",
        description: "A comprehensive client management and telehealth platform for Speech-Language Pathologists.",
        url: "#",
        category: "HealthTech",
        status: "Proprietary"
    },
    {
        id: "art-style-fusion",
        name: "Art Style Fusion",
        description: "An application that seamlessly blends a character's art style with a reference image's style using the Gemini API.",
        url: "#",
        category: "AI Utility",
        status: "Internal"
    },
    {
        id: "ai-re-analyzer",
        name: "AI Real Estate Analyzer",
        description: "An AI-powered application that analyzes real estate listings and generates detailed reports.",
        url: "#",
        category: "Real Estate",
        status: "Proprietary"
    },
    {
        id: "fellowship-guide",
        name: "Fellowship AI Guide",
        description: "An AI-powered assistant and guide for the Steam MMO RPG game 'Fellowship'.",
        url: "#",
        category: "Other",
        status: "Internal"
    },
    {
        id: "add-value",
        name: "Add Value Growth Hub",
        description: "An AI-powered strategic tool to help the 'Add Value' brand generate organic growth ideas.",
        url: "#",
        category: "Other",
        status: "Proprietary"
    },
    {
        id: "collab-scene",
        name: "Collaborative Scene Generator",
        description: "An AI-powered tool to build a complete visual understanding of a character or scene.",
        url: "#",
        category: "AI Utility",
        status: "Internal"
    },
    {
        id: "ai-video-studio",
        name: "AI Video Generation Studio",
        description: "A powerful studio to create seamless 60-second videos with consistent characters and scenery using AI.",
        url: "#",
        category: "AI Utility",
        status: "Internal"
    },
    {
        id: "media-mandate",
        name: "Media-to-Mandate Engine",
        description: "An AI-powered dashboard to automate weekly research, content creation, and lead generation.",
        url: "#",
        category: "Other",
        status: "Proprietary"
    },
    {
        id: "marketing-avatar",
        name: "Marketing Avatar Generator",
        description: "Upload target market data to generate four distinct marketing avatars with detailed personas.",
        url: "#",
        category: "Other",
        status: "Proprietary"
    },
    {
        id: "momentum-drive",
        name: "Momentum Drive",
        description: "Strategic momentum building tool for rapid execution and tracking.",
        url: "#",
        category: "Other",
        status: "Proprietary"
    },
    {
        id: "ai-deal-desk",
        name: "AI Deal Desk (CRE + Capital Formation)",
        description: "A pipeline that finds, underwrites, and packages commercial real estate deals in hours.",
        url: "#",
        category: "Real Estate",
        status: "Internal"
    },
    {
        id: "veo-studio",
        name: "Veo Studio",
        description: "Describe any scene and get a stunning video in seconds. An effortless video generator powered by Veo.",
        url: "#",
        category: "AI Utility",
        status: "Internal"
    },
    {
        id: "realty-insight",
        name: "RealtyInsight AI",
        description: "An AI-powered toolkit for real estate clients and professionals. Analyze properties, visualize changes.",
        url: "#",
        category: "Real Estate",
        status: "Internal"
    },
    {
        id: "iron-dog",
        name: "Iron Dog Media PWA",
        description: "A simple progressive web app for Iron Dog Media, featuring a services hub and FAQ chatbot.",
        url: "#",
        category: "Other",
        status: "Proprietary"
    },
    {
        id: "ai-ops-consulting",
        name: "AI Ops Consulting Dashboard",
        description: "An internal dashboard for an AI-enabled operations consulting business.",
        url: "#",
        category: "Other",
        status: "Internal"
    },
    {
        id: "gov-contract",
        name: "GovContract Strategist",
        description: "An application that helps users monetize government contracting opportunities.",
        url: "#",
        category: "Other",
        status: "Internal"
    },
    {
        id: "ai-re-investment",
        name: "AI Real Estate Investment Analyzer",
        description: "A comprehensive AI-powered application for intelligent property investment analysis.",
        url: "#",
        category: "Real Estate",
        status: "Proprietary"
    },
    {
        id: "realty-assistant",
        name: "Realty AI Assistant",
        description: "An intelligent assistant for real estate professionals. Leverage AI for lead generation and content creation.",
        url: "#",
        category: "Real Estate",
        status: "Proprietary"
    },
    {
        id: "ai-studio-arch",
        name: "AI Studio Architect",
        description: "An elegant assistant to track your app ideas, generate AI prompts, and manage your development lifecycle.",
        url: "#",
        category: "AI Utility",
        status: "Proprietary"
    },
    {
        id: "lease-intel-core",
        name: "LeaseIntel",
        description: "An AI-powered platform to automate the financial management of commercial real estate leases.",
        url: "#",
        category: "Real Estate",
        status: "Proprietary"
    },
    {
        id: "data-center-strat",
        name: "Data Center Strategy Co-Pilot",
        description: "An AI-powered interactive playbook for a data center infrastructure strategy.",
        url: "#",
        category: "Real Estate",
        status: "Internal"
    },
    {
        id: "agent-growth",
        name: "Agent Growth Kit",
        description: "A practical, data-agnostic template library that helps real estate agents ship listings.",
        url: "#",
        category: "Real Estate",
        status: "Proprietary"
    },
    {
        id: "mythic-market",
        name: "Mythic Market: A Complex Asset DEX",
        description: "A decentralized exchange (DEX) for unique video game assets represented as complex numbers.",
        url: "#",
        category: "Fintech",
        status: "Internal"
    },
    {
        id: "material-shift",
        name: "Material Shift: Diligence Report",
        description: "An interactive, AI-assisted due diligence investment report on Material Shift, Inc.",
        url: "#",
        category: "Fintech",
        status: "Proprietary"
    },
    {
        id: "phase-shift",
        name: "Phase Shift Index",
        description: "An interactive web application demonstrating the principles of complex number tokenization.",
        url: "#",
        category: "Fintech",
        status: "Proprietary"
    },
    {
        id: "tvmaxi",
        name: "TVMaxi: Financial Timeline Generator",
        description: "An application that takes a user's Personal Investment Policy Statement (PIPS) and uses AI to generate financial timelines.",
        url: "#",
        category: "Fintech",
        status: "Proprietary"
    },
    {
        id: "vibe-check",
        name: "VibeCheck",
        description: "Quickly batch test prompts with visual outputs.",
        url: "#",
        category: "AI Utility",
        status: "Internal"
    },
    {
        id: "cre-command",
        name: "CRE Command Center",
        description: "An all-in-one, AI-powered platform for Commercial Real Estate professionals.",
        url: "#",
        category: "Real Estate",
        status: "Internal"
    },
    {
        id: "havn-thesis",
        name: "HAVN Thesis Visualizer",
        description: "An elegant web application that visualizes the HAVN thesis: the flywheel of Health, Wealth, Impact, and Experience.",
        url: "#",
        category: "HealthTech",
        status: "Internal"
    },
    {
        id: "ai-allocator",
        name: "AI Real Estate Allocator",
        description: "An AI-driven real-estate underwriting and financing tool. It supports creative financing.",
        url: "#",
        category: "Real Estate",
        status: "Internal"
    }
];
