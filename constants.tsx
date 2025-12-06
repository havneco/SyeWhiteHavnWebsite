

import { Building2, Code2, LineChart, ShieldCheck, Zap, Heart, Search } from 'lucide-react';
import { Project, Service, Milestone, ChartData, BrandValue, CaseStudy, AppTool } from './types';

export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Apps', href: '#apps' },
  { label: 'Media Kit', href: '/media-kit' },
  { label: 'Contact', href: '#contact' },
];

export const CONTACT_INFO = {
  email: "sye@luxhavn.com",
  phone: "+1 (406) 555-0123",
  location: "Helena, Montana",
  social: {
    linkedin: "https://linkedin.com/in/syewhite",
    github: "https://github.com/syewhite",
    twitter: "https://x.com/syewhite"
  }
};

export const SITE_IMAGES = {
  hero: "https://i.imgur.com/igfNf2j.jpeg",
  about_personal: "https://i.imgur.com/WXPjejr.jpeg", // New AI Innovator image
  hospitality_shot: "https://i.imgur.com/PVBTUvE.jpeg",
  adventure_shot: "https://i.imgur.com/AWjD0Im.jpeg",
  dog_training_shot: "https://i.imgur.com/8hbAr4E.jpeg",
  headshot_print: "https://i.imgur.com/iOYQeWm.png",
  headshot_action: "https://i.imgur.com/q63gQur.jpeg",
  section_divider: "https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&q=80&w=2000", // Montana/Mountain landscape
  project_0: "https://i.imgur.com/uwIT889.jpeg", // Havn Logo
  project_1: "https://i.imgur.com/iOYQeWm.png", // Wealth Council Image
  project_2: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000", // AI/Data abstract
  project_3: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000"
};

export const HERO_CONTENT = {
  headline: "Building the Future of Sovereign Living Through AI & Ecosystem Architecture",
  subhead: "Leveraging AI to develop Havn—a platform bringing liquidity to luxury and democratizing access to the good life.",
  intersection: "The intersection of luxury assets, holistic wellness, and tokenized access.",
  ctaPrimary: "View Media Kit",
  ctaSecondary: "Explore Projects"
};

export const ABOUT_CONTENT = {
  hook: "At 32, I've built 100+ applications using cutting-edge AI platforms, closed commercial real estate deals in Montana, and launched multiple fintech ventures — all while maintaining the work ethic I learned bailing hay for $75 a day.",
  bio: "My name is Sye White. I am a 32-year-old Native American Assiniboine Sioux and a 5th generation Montana Homesteader. My work ethic started at age 13, bailing hay for Farmer Art. By 15, I entered hospitality, working my way up from Subway to fine dining. My career took me from a wine bar in 2015 to wine distribution, eventually becoming a Sommelier and Maitre'd helping open a hotel with a Michelin-starred chef. I was able to get the Wine Spectator International Restaurant Award for their wine list in the first year of opening. Joining less than 4,000 other restaurants globally, and my third award. It was there—managing high-end guest experiences—where I had the self-reflective conversation of how I was going to give the most positive impact in my lifetime and generations forward.",
  bio_havn: "Thus, 'Havn' was born, starting with building LuxHavn—building out our family homestead of 480 acres in Eastern Montana.",
  bio_real_estate: "This, of course, was a large financial undertaking, so I decided that the 'snowball method' of real estate might be the best way for me to finance it. I decided to get into real estate and spend my life building a portfolio that will eventually convert into the development. The idea has grown and evolved into what it is today.",
  current: "In 2020, I got my license, starting in residential before pivoting to Commercial Real Estate. I didn't stop there. I dove into AI, building apps with GPT, Replit, and AI Studio to revolutionize how we work. In 2024, I met Boris in Vegas while in town for a separate work trip, leading to a partnership on MyCEO and the creation of Wealth Council. Today, I continue to build Havn as my ultimate vision while researching AI—the single biggest impacting factor of our lifetime."
};

export const BRAND_VALUES: BrandValue[] = [
  {
    title: "Integrity First",
    description: "Every project, every client interaction starts with honesty. I don't oversell, I don't hide limitations, and I don't promise what I can't deliver.",
    icon: ShieldCheck
  },
  {
    title: "Radical Transparency",
    description: "I share my learning process, my platform experiments, my wins and challenges. Transparency helps clients and partners make informed decisions.",
    icon: Search
  },
  {
    title: "Execution Over Theory",
    description: "100+ apps isn't theoretical — it's hands-on, production-level execution. I believe in building, testing, iterating, and shipping.",
    icon: Zap
  },
  {
    title: "Service Excellence",
    description: "My hospitality roots inform everything I do. Whether it's a real estate transaction or an app, I bring a commitment to exceptional service.",
    icon: Heart
  }
];

export const SERVICES: Service[] = [
  {
    title: "Real Estate Services",
    icon: Building2,
    description: "Commercial property analysis, acquisition, and transaction management with a vision for international luxury destinations.",
    features: ["Commercial Real Estate (Helena, MT)", "Investment Property Consulting", "Land Evaluation & Acquisition", "International Resort Development"]
  },
  {
    title: "Technology Development",
    icon: Code2,
    description: "Rapid prototyping and full-stack AI application development using modern multi-model frameworks.",
    features: ["AI Application Development", "Rapid Prototyping (100+ Apps)", "No-code to Full-stack Solutions", "AI Model Integration"]
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
    description: "Built 100+ functional applications across Google AI Studio, Replit, and other platforms.",
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
  { year: "2023", title: "The Tech Sprint", description: "Began building 100+ AI apps using GPT, Replit, AI Studio, and AntiGravity—proving execution over theory." },
  { year: "2024", title: "Strategic Partnership", description: "Met Boris in Vegas while in town for a separate work trip, leading to a partnership on MyCEO and the creation of Wealth Council." },
  { year: "2025", title: "Wealth Council Launch", description: "Launched the Wealth Council Founder Program to 15 founding members." },
  { year: "2026", title: "Scaling & Launch", description: "Scheduled public launch of Wealth Council. Continued expansion and deployment of the Havn ecosystem." },
];

export const TECH_STACK = [
  "Google AI Studio", "Firebase Studio", "Replit", "AntiGravity", "Lovable", "Vercel", "Python", "TypeScript", "SQL", "GPT-4", "Claude 3.5"
];

export const CHART_DATA: ChartData[] = [
  { name: 'Apps Built', value: 100 },
  { name: 'Years Crypto', value: 14 },
  { name: 'Active Ventures', value: 3 },
  { name: 'Platforms', value: 6 },
];

export const STATS_METRICS = [
  { label: "Applications Built", value: "100+" },
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
    id: "nexus-ai",
    name: "Nexus AI",
    description: "Advanced Conversation Intelligence. Distills wisdom, subtext, and behavioral insights from any interaction using Gemini 3 Pro.",
    url: "#",
    category: "AI Utility",
    status: "Live"
  },
  {
    id: "sparky",
    name: "Sparky",
    description: "The TikTok for AI-generated micro-apps and games. Build tools, utilities, or games with a prompt, launch to the feed, and vibe out.",
    url: "#",
    category: "AI Utility",
    status: "Live"
  },
  {
    id: "lumina-sensory",
    name: "Lumina: Sensory Bridge",
    description: "A dedicated accessibility prosthetic using Gemini Live API to provide real-time video-to-speech visual assistance for the visually impaired.",
    url: "#",
    category: "HealthTech",
    status: "Live"
  },
  {
    id: "prompt-dj",
    name: "PromptDJ",
    description: "Steer a continuous stream of music with text prompts.",
    url: "#",
    category: "AI Utility",
    status: "Live"
  },
  {
    id: "prompt-dj-midi",
    name: "PromptDJ MIDI",
    description: "Control real time music with a MIDI controller.",
    url: "#",
    category: "AI Utility",
    status: "Live"
  },
  {
    id: "infinite-wiki",
    name: "Infinite Wiki",
    description: "Explore an infinite wiki where every word is a hyperlink to descriptions generated in real-time.",
    url: "#",
    category: "AI Utility",
    status: "Live"
  },
  {
    id: "research-vis",
    name: "Research Visualization Gallery",
    description: "Research paper reimagined as an elegant, interactive narrative site.",
    url: "#",
    category: "AI Utility",
    status: "Live"
  },
  {
    id: "mk-ultrai",
    name: "MK UltrAI",
    description: "An application to design custom media kits from business cards to billboards.",
    url: "#",
    category: "AI Utility",
    status: "Live"
  },
  {
    id: "actually-useful",
    name: "Actually Useful",
    description: "A smart task manager and idea funnel that helps you capture, prioritize, and act on your thoughts using AI.",
    url: "#",
    category: "AI Utility",
    status: "Live"
  },
  {
    id: "runway-node",
    name: "Runway Node Emulator",
    description: "A visual tool to emulate and test node-based workflows, allowing users to create, connect, and manage nodes in a simulated environment.",
    url: "#",
    category: "AI Utility",
    status: "Live"
  },
  {
    id: "cute-pai",
    name: "Cute as PAI",
    description: "Create fun, beautiful, and unique AI-generated portraits and avatars. Perfect for social media and profiles.",
    url: "#",
    category: "AI Utility",
    status: "Live"
  },
  {
    id: "naturescape",
    name: "NatureScape Designer",
    description: "An interactive visual designer that uses AI to generate, analyze, and troubleshoot aquascapes, terracapes, and backyard ponds.",
    url: "#",
    category: "Other",
    status: "Live"
  },
  {
    id: "watercolor-assist",
    name: "Watercolor Artist's Assistant",
    description: "Upload a photo and get AI-powered guidance for your watercolor painting. Analyzes lighting, textures, and suggests palettes.",
    url: "#",
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
