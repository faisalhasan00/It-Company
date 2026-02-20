
import {
  CommandLineIcon,
  CodeBracketIcon,
  ChartBarIcon,
  CpuChipIcon,
  LightBulbIcon,
  MegaphoneIcon,
  PaintBrushIcon,
  MagnifyingGlassIcon,
  VideoCameraIcon,
  LifebuoyIcon
} from '@heroicons/react/24/outline';

export const serviceDetails = {
  // Software Development
  "custom-software": {
    title: "Custom Software Development",
    icon: <CommandLineIcon className="w-12 h-12" />,
    heroImage: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "Tailored software solutions designed to meet your specific business needs and scale with your growth.",
    benefits: [
      "Scalable architecture that grows with your business",
      "Secure and compliant code standards",
      "Seamless integration with existing systems",
      "Full ownership of source code and IP"
    ],
    process: [
      { title: "Discovery", desc: "We analyze your requirements and business goals." },
      { title: "Architecture", desc: "Designing a robust and scalable system structure." },
      { title: "Development", desc: "Agile coding sprints with regular updates." },
      { title: "Testing & Launch", desc: "Rigorous QA and seamless deployment." }
    ]
  },
  "saas-development": {
    title: "SaaS Development",
    icon: <CommandLineIcon className="w-12 h-12" />,
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "Build, launch, and scale your Software-as-a-Service product with our expert development team.",
    benefits: [
      "Multi-tenant architecture",
      "Subscription management integration",
      "Cloud-native deployment",
      "High availability and uptime"
    ],
    process: [
      { title: "MVP Strategy", desc: "Defining core features for quick market entry." },
      { title: "UX/UI Design", desc: "Creating intuitive interfaces for user retention." },
      { title: "Backend Build", desc: "Secure API and database development." },
      { title: "Growth Scaling", desc: "Optimizing for thousands of concurrent users." }
    ]
  },
  "api-development": {
    title: "API Development",
    icon: <CommandLineIcon className="w-12 h-12" />,
    heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "Robust and secure APIs to connect your applications and data sources seamlessly.",
    benefits: [
      "RESTful and GraphQL standards",
      "High performance and low latency",
      "Comprehensive documentation",
      "Secure authentication (OAuth, JWT)"
    ],
    process: [
      { title: "Spec Design", desc: "Defining endpoints and data structures." },
      { title: "Implementation", desc: "Coding the logic and database connections." },
      { title: "Security Audit", desc: "Penetration testing and vulnerability checks." },
      { title: "Documentation", desc: "Clear guides for developers and integrators." }
    ]
  },
  "mobile-app-development": {
    title: "Mobile App Development",
    icon: <CommandLineIcon className="w-12 h-12" />,
    heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "Native and cross-platform mobile apps that deliver exceptional user experiences on iOS and Android.",
    benefits: [
      "Cross-platform efficiency (React Native / Flutter)",
      "Native performance optimization",
      "Offline capabilities",
      "App Store & Play Store publishing support"
    ],
    process: [
      { title: "Prototyping", desc: "Interactive wireframes to validate flow." },
      { title: "Development", desc: "Building the app with modern frameworks." },
      { title: "Testing", desc: "Device lab testing for compatibility." },
      { title: "Launch", desc: "Submission and approval management." }
    ]
  },

  // Web Design
  "web-design-development": {
    title: "Web Design & Development",
    icon: <CodeBracketIcon className="w-12 h-12" />,
    heroImage: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "Beautiful, responsive websites that drive conversions and reflect your brand identity.",
    benefits: [
      "Mobile-first responsive design",
      "SEO-friendly structure",
      "Fast loading speeds",
      "Custom animations and interactions"
    ],
    process: [
      { title: "Design", desc: "Creating visual mockups and style guides." },
      { title: "Development", desc: "Coding with clean, semantic HTML/CSS/JS." },
      { title: "CMS Integration", desc: "Easy content management setup." },
      { title: "Launch", desc: "Server setup and go-live checklist." }
    ]
  },
  "custom-website-design": {
    title: "Custom Website Design",
    icon: <CodeBracketIcon className="w-12 h-12" />,
    heroImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "Unique, hand-crafted designs that set you apart from competitors using generic templates.",
    benefits: [
      "Unique brand identity",
      "Tailored user journeys",
      "Accessibility compliance",
      "Conversion rate optimization"
    ],
    process: [
      { title: "Brand Analysis", desc: "Understanding your visual language." },
      { title: "Concepting", desc: "Sketching and wireframing ideas." },
      { title: "High-Fidelity UI", desc: "Pixel-perfect design creation." },
      { title: "Handoff", desc: "Preparing assets for development." }
    ]
  },
  "wordpress-development": {
    title: "WordPress Development",
    icon: <CodeBracketIcon className="w-12 h-12" />,
    heroImage: "https://images.unsplash.com/photo-1616469829941-c7200edec809?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "Custom WordPress themes and plugins built for performance, security, and ease of use.",
    benefits: [
      "Easy content updates",
      "Huge ecosystem of plugins",
      "Custom theme development",
      "Secure hosting setup"
    ],
    process: [
      { title: "Theme Design", desc: "Customizing the look and feel." },
      { title: "Plugin Setup", desc: "Adding necessary functionality." },
      { title: "Optimization", desc: "Caching and image compression." },
      { title: "Training", desc: "Teaching you how to manage content." }
    ]
  },
  "website-maintenance": {
    title: "Website Maintenance",
    icon: <CodeBracketIcon className="w-12 h-12" />,
    heroImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "Keep your website secure, fast, and up-to-date with our proactive maintenance plans.",
    benefits: [
      "Regular security patches",
      "Daily backups",
      "Uptime monitoring",
      "Performance tuning"
    ],
    process: [
      { title: "Audit", desc: "Checking current health and security." },
      { title: "Update", desc: "Applying core and plugin updates." },
      { title: "Monitor", desc: "24/7 uptime and error tracking." },
      { title: "Report", desc: "Monthly summary of activities." }
    ]
  },

  // Social Media
  "social-media-management": {
    title: "Social Media Management",
    icon: <ChartBarIcon className="w-12 h-12" />,
    heroImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "Full-service management of your social profiles to build community and engagement.",
    benefits: [
      "Consistent posting schedule",
      "Community engagement",
      "Crisis management",
      "Performance reporting"
    ],
    process: [
      { title: "Audit", desc: "Reviewing existing profiles." },
      { title: "Strategy", desc: "Defining voice and content pillars." },
      { title: "Creation", desc: "Designing posts and writing copy." },
      { title: "Management", desc: "Posting and replying to comments." }
    ]
  },
  "social-media-marketing": {
    title: "Social Media Marketing",
    icon: <ChartBarIcon className="w-12 h-12" />,
    heroImage: "https://images.unsplash.com/photo-1611926653458-09294b3019dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "Targeted ad campaigns on Facebook, Instagram, LinkedIn, and more to drive leads.",
    benefits: [
      "Precise audience targeting",
      "Retargeting campaigns",
      "A/B testing creatives",
      "ROI-focused reporting"
    ],
    process: [
      { title: "Targeting", desc: "Identifying your ideal customer." },
      { title: "Ad Design", desc: "Creating high-converting visuals." },
      { title: "Launch", desc: "Setting up campaigns and pixels." },
      { title: "Optimize", desc: "Tweaking bids and creatives daily." }
    ]
  },
  "brand-management": {
    title: "Brand Management",
    icon: <ChartBarIcon className="w-12 h-12" />,
    heroImage: "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "Building and protecting your brand's reputation across digital channels.",
    benefits: [
      "Consistent brand voice",
      "Reputation monitoring",
      "Influencer partnerships",
      "Brand guideline creation"
    ],
    process: [
      { title: "Identity", desc: "Defining core values and visuals." },
      { title: "Monitoring", desc: "Tracking mentions and sentiment." },
      { title: "Engagement", desc: "Proactive community building." },
      { title: "Growth", desc: "Expanding brand reach strategically." }
    ]
  },
  "community-growth": {
    title: "Community Growth",
    icon: <ChartBarIcon className="w-12 h-12" />,
    heroImage: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "Strategies to grow your following and turn followers into loyal advocates.",
    benefits: [
      "Organic follower growth",
      "Higher engagement rates",
      "User-generated content",
      "Viral campaign strategies"
    ],
    process: [
      { title: "Analysis", desc: "Understanding current audience." },
      { title: "Content", desc: "Creating shareable assets." },
      { title: "Outreach", desc: "Collaborating with niche leaders." },
      { title: "Nurture", desc: "Rewarding loyal community members." }
    ]
  },

  // AI Automation
  "workflow-automation": {
    title: "Workflow Automation",
    icon: <CpuChipIcon className="w-12 h-12" />,
    heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "Automate repetitive tasks to save time and reduce human error.",
    benefits: [
      "Reduced operational costs",
      "Higher accuracy",
      "Faster turnaround times",
      "Employee satisfaction"
    ],
    process: [
      { title: "Map", desc: "Visualizing current workflows." },
      { title: "Identify", desc: "Spotting bottlenecks and repetition." },
      { title: "Automate", desc: "Building scripts and integrations." },
      { title: "Optimize", desc: "Refining for maximum efficiency." }
    ]
  },
  "chatbot-development": {
    title: "Chatbot Development",
    icon: <CpuChipIcon className="w-12 h-12" />,
    heroImage: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "Intelligent conversational agents to handle customer support 24/7.",
    benefits: [
      "24/7 customer support",
      "Instant response times",
      "Lead qualification",
      "Integration with CRM"
    ],
    process: [
      { title: "Design", desc: "Scripting conversation flows." },
      { title: "Train", desc: "Teaching the AI with data sets." },
      { title: "Integrate", desc: "Connecting to chat platforms." },
      { title: "Refine", desc: "Improving responses based on logs." }
    ]
  },
  "ai-integration": {
    title: "AI Integration",
    icon: <CpuChipIcon className="w-12 h-12" />,
    heroImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "Embed advanced AI capabilities like computer vision and NLP into your existing apps.",
    benefits: [
      "Enhanced product features",
      "Data-driven insights",
      "Personalized user experiences",
      "Competitive advantage"
    ],
    process: [
      { title: "Assess", desc: "Evaluating AI opportunities." },
      { title: "Select", desc: "Choosing the right models/APIs." },
      { title: "Implement", desc: "Coding the integration." },
      { title: "Test", desc: "Validating accuracy and performance." }
    ]
  },
  "process-optimization": {
    title: "Process Optimization",
    icon: <CpuChipIcon className="w-12 h-12" />,
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "Data-driven analysis to streamline your business operations and remove inefficiencies.",
    benefits: [
      "Leaner operations",
      "Data-backed decisions",
      "Resource allocation",
      "Improved profitability"
    ],
    process: [
      { title: "Measure", desc: "Gathering performance data." },
      { title: "Analyze", desc: "Finding trends and waste." },
      { title: "Improve", desc: "Implementing new procedures." },
      { title: "Control", desc: "Monitoring to sustain gains." }
    ]
  },

  // Software Consulting
  "it-strategy": {
    title: "IT Strategy",
    icon: <LightBulbIcon className="w-12 h-12" />,
    heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "Align your technology roadmap with your long-term business objectives.",
    benefits: [
      "Clear technology roadmap",
      "Budget optimization",
      "Risk mitigation",
      "Future-proof architecture"
    ],
    process: [
      { title: "Assess", desc: "Reviewing current IT state." },
      { title: "Vision", desc: "Defining future goals." },
      { title: "Plan", desc: "Creating a step-by-step roadmap." },
      { title: "Execute", desc: "Guiding the implementation." }
    ]
  },
  "digital-transformation": {
    title: "Digital Transformation",
    icon: <LightBulbIcon className="w-12 h-12" />,
    heroImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "Modernize your legacy systems and processes to compete in the digital age.",
    benefits: [
      "Increased agility",
      "Better customer experience",
      "Data democratization",
      "Innovation culture"
    ],
    process: [
      { title: "Audit", desc: "Identifying legacy blockers." },
      { title: "Design", desc: "Planning the digital shift." },
      { title: "Migrate", desc: "Moving to modern platforms." },
      { title: "Adopt", desc: "Training teams on new tools." }
    ]
  },
  "tech-stack-advisory": {
    title: "Tech Stack Advisory",
    icon: <LightBulbIcon className="w-12 h-12" />,
    heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "Choose the right technologies for your project to ensure scalability and maintainability.",
    benefits: [
      "Reduced technical debt",
      "Faster development cycles",
      "Easier talent acquisition",
      "Cost-effective scaling"
    ],
    process: [
      { title: "Requirements", desc: "Listing technical needs." },
      { title: "Research", desc: "Comparing available tools." },
      { title: "Recommend", desc: "Selecting the best stack." },
      { title: "Support", desc: "Assisting with initial setup." }
    ]
  },
  "project-audits": {
    title: "Project Audits",
    icon: <LightBulbIcon className="w-12 h-12" />,
    heroImage: "https://images.unsplash.com/photo-1507537297725-24a1c4325ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "Independent review of your software projects to identify code quality and security issues.",
    benefits: [
      "Code quality assurance",
      "Security vulnerability check",
      "Performance benchmarking",
      "Refactoring roadmap"
    ],
    process: [
      { title: "Review", desc: "Analyzing code and architecture." },
      { title: "Test", desc: "Running diagnostic tools." },
      { title: "Report", desc: "Documenting findings." },
      { title: "Fix", desc: "Proposing remediation steps." }
    ]
  },

  // Digital Marketing
  "digital-marketing-services": {
    title: "Digital Marketing Services",
    icon: <MegaphoneIcon className="w-12 h-12" />,
    heroImage: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "Comprehensive marketing strategies to increase your online visibility and sales.",
    benefits: [
      "Increased brand awareness",
      "Lead generation",
      "Customer retention",
      "Data-driven insights"
    ],
    process: [
      { title: "Strategy", desc: "Developing a multi-channel plan." },
      { title: "Execution", desc: "Launching campaigns." },
      { title: "Analysis", desc: "Tracking KPIs and metrics." },
      { title: "Optimization", desc: "Improving performance over time." }
    ]
  },
  "content-marketing": {
    title: "Content Marketing",
    icon: <MegaphoneIcon className="w-12 h-12" />,
    heroImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "Valuable content that attracts and retains your target audience.",
    benefits: [
      "Thought leadership",
      "Improved SEO",
      "Customer trust",
      "Inbound lead generation"
    ],
    process: [
      { title: "Research", desc: "Finding trending topics." },
      { title: "Creation", desc: "Writing blogs, papers, and scripts." },
      { title: "Distribution", desc: "Sharing across channels." },
      { title: "Analysis", desc: "Measuring engagement." }
    ]
  },
  "email-marketing": {
    title: "Email Marketing",
    icon: <MegaphoneIcon className="w-12 h-12" />,
    heroImage: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "Direct communication campaigns that convert subscribers into customers.",
    benefits: [
      "High ROI",
      "Personalized messaging",
      "Automated flows",
      "Direct customer access"
    ],
    process: [
      { title: "List Build", desc: "Growing your subscriber base." },
      { title: "Segment", desc: "Grouping users by interest." },
      { title: "Design", desc: "Creating responsive templates." },
      { title: "Send", desc: "Scheduling and A/B testing." }
    ]
  },
  "online-public-relations": {
    title: "Online Public Relations",
    icon: <MegaphoneIcon className="w-12 h-12" />,
    heroImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "Managing your digital reputation and building relationships with media.",
    benefits: [
      "Positive brand image",
      "Crisis mitigation",
      "Media coverage",
      "Backlink acquisition"
    ],
    process: [
      { title: "Monitor", desc: "Listening to online conversations." },
      { title: "Engage", desc: "Connecting with journalists." },
      { title: "Publish", desc: "Releasing press statements." },
      { title: "Review", desc: "Analyzing sentiment impact." }
    ]
  },

  // UI/UX Design
  "user-interface-design": {
    title: "User Interface Design",
    icon: <PaintBrushIcon className="w-12 h-12" />,
    heroImage: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "Visually stunning interfaces that align with your brand and delight users.",
    benefits: [
      "Modern aesthetic",
      "Consistent design system",
      "Accessibility compliance",
      "Brand reinforcement"
    ],
    process: [
      { title: "Moodboard", desc: "Exploring visual styles." },
      { title: "Design", desc: "Creating high-fidelity screens." },
      { title: "Prototype", desc: "Adding interactivity." },
      { title: "Handoff", desc: "Providing assets to devs." }
    ]
  },
  "user-experience-research": {
    title: "User Experience Research",
    icon: <PaintBrushIcon className="w-12 h-12" />,
    heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "Understand your users deeply to build products they actually need.",
    benefits: [
      "Reduced development risk",
      "Higher user satisfaction",
      "Data-driven decisions",
      "Product-market fit"
    ],
    process: [
      { title: "Interview", desc: "Talking to real users." },
      { title: "Survey", desc: "Gathering quantitative data." },
      { title: "Test", desc: "Usability testing sessions." },
      { title: "Report", desc: "Synthesizing insights." }
    ]
  },
  "prototyping": {
    title: "Prototyping",
    icon: <PaintBrushIcon className="w-12 h-12" />,
    heroImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "Interactive mockups to validate ideas before writing code.",
    benefits: [
      "Faster feedback loops",
      "Stakeholder buy-in",
      "Reduced rework",
      "Clear requirements"
    ],
    process: [
      { title: "Wireframe", desc: "Low-fidelity structural layout." },
      { title: "Link", desc: "Connecting screens." },
      { title: "Animate", desc: "Adding micro-interactions." },
      { title: "Validate", desc: "Testing with stakeholders." }
    ]
  },
  "design-systems": {
    title: "Design Systems",
    icon: <PaintBrushIcon className="w-12 h-12" />,
    heroImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "A centralized library of components and guidelines for consistent product design.",
    benefits: [
      "Design consistency",
      "Faster design/dev handoff",
      "Scalable UI",
      "Easy maintenance"
    ],
    process: [
      { title: "Audit", desc: "Reviewing existing UI." },
      { title: "Define", desc: "Setting tokens (color, type)." },
      { title: "Build", desc: "Creating component library." },
      { title: "Document", desc: "Writing usage guidelines." }
    ]
  },

  // SEO Services
  "search-engine-optimization": {
    title: "Search Engine Optimization",
    icon: <MagnifyingGlassIcon className="w-12 h-12" />,
    heroImage: "https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "Improve your organic rankings to drive long-term traffic.",
    benefits: [
      "Sustainable traffic growth",
      "Higher brand credibility",
      "Better user experience",
      "Cost-effective leads"
    ],
    process: [
      { title: "Audit", desc: "Technical site review." },
      { title: "Research", desc: "Keyword opportunity finding." },
      { title: "Optimize", desc: "On-page content updates." },
      { title: "Monitor", desc: "Tracking rank changes." }
    ]
  },
  "local-seo": {
    title: "Local SEO",
    icon: <MagnifyingGlassIcon className="w-12 h-12" />,
    heroImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "Dominate local search results and attract customers in your area.",
    benefits: [
      "Increased foot traffic",
      "Local map visibility",
      "Trust building",
      "Mobile search dominance"
    ],
    process: [
      { title: "GMB Setup", desc: "Optimizing Google Profile." },
      { title: "Citations", desc: "Building local directory links." },
      { title: "Reviews", desc: "Managing reputation." },
      { title: "Content", desc: "Creating local landing pages." }
    ]
  },
  "technical-seo-audit": {
    title: "Technical SEO Audit",
    icon: <MagnifyingGlassIcon className="w-12 h-12" />,
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "Deep dive into your website's code and structure to fix indexing issues.",
    benefits: [
      "Improved crawlability",
      "Faster page speeds",
      "Mobile usability fix",
      "Indexation health"
    ],
    process: [
      { title: "Crawl", desc: "Scanning entire site." },
      { title: "Analyze", desc: "Identifying errors." },
      { title: "Prioritize", desc: "Ranking fixes by impact." },
      { title: "Resolve", desc: "Implementing technical fixes." }
    ]
  },
  "link-building": {
    title: "Link Building",
    icon: <MagnifyingGlassIcon className="w-12 h-12" />,
    heroImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "Acquire high-quality backlinks to boost your domain authority.",
    benefits: [
      "Higher rankings",
      "Referral traffic",
      "Domain authority boost",
      "Brand partnerships"
    ],
    process: [
      { title: "Prospect", desc: "Finding relevant sites." },
      { title: "Outreach", desc: "Pitching content ideas." },
      { title: "Create", desc: "Writing guest posts." },
      { title: "Secure", desc: "Confirming live links." }
    ]
  },

  // Production
  "video-production": {
    title: "Video Production",
    icon: <VideoCameraIcon className="w-12 h-12" />,
    heroImage: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "High-quality video content to tell your brand story effectively.",
    benefits: [
      "Higher engagement",
      "Complex info simplified",
      "Emotional connection",
      "Social sharing"
    ],
    process: [
      { title: "Script", desc: "Writing the narrative." },
      { title: "Shoot", desc: "Professional filming." },
      { title: "Edit", desc: "Post-production magic." },
      { title: "Deliver", desc: "Final format export." }
    ]
  },
  "product-photography": {
    title: "Product Photography",
    icon: <VideoCameraIcon className="w-12 h-12" />,
    heroImage: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "Stunning product photos that increase perceived value and sales.",
    benefits: [
      "Professional look",
      "Higher conversion",
      "Brand consistency",
      "Versatile assets"
    ],
    process: [
      { title: "Plan", desc: "Styling and prop selection." },
      { title: "Shoot", desc: "Studio or lifestyle capture." },
      { title: "Retouch", desc: "Color correction and editing." },
      { title: "Deliver", desc: "High-res file handover." }
    ]
  },
  "motion-graphics": {
    title: "Motion Graphics",
    icon: <VideoCameraIcon className="w-12 h-12" />,
    heroImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "Animated visuals to explain concepts and add dynamism to your brand.",
    benefits: [
      "Attention grabbing",
      "Visual storytelling",
      "Brand personality",
      "Information retention"
    ],
    process: [
      { title: "Storyboard", desc: "Sketching key frames." },
      { title: "Design", desc: "Creating vector assets." },
      { title: "Animate", desc: "Adding movement." },
      { title: "Sound", desc: "Syncing audio effects." }
    ]
  },
  "podcast-production": {
    title: "Podcast Production",
    icon: <VideoCameraIcon className="w-12 h-12" />,
    heroImage: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "End-to-end audio production for branded podcasts.",
    benefits: [
      "Deep audience connection",
      "Thought leadership",
      "Content repurposing",
      "Network building"
    ],
    process: [
      { title: "Plan", desc: "Topic and guest strategy." },
      { title: "Record", desc: "Remote or studio capture." },
      { title: "Edit", desc: "Cleaning and mixing audio." },
      { title: "Publish", desc: "Distribution to platforms." }
    ]
  },

  // Support & Maintenance
  "24-7-support": {
    title: "24/7 Support",
    icon: <LifebuoyIcon className="w-12 h-12" />,
    heroImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "Round-the-clock technical support to ensure your business never stops.",
    benefits: [
      "Immediate issue resolution",
      "Peace of mind",
      "Global coverage",
      "SLA guarantees"
    ],
    process: [
      { title: "Onboard", desc: "System knowledge transfer." },
      { title: "Monitor", desc: "Automated alerts setup." },
      { title: "Respond", desc: "Triage and fix issues." },
      { title: "Review", desc: "Incident reporting." }
    ]
  },
  "legacy-system-maintenance": {
    title: "Legacy System Maintenance",
    icon: <LifebuoyIcon className="w-12 h-12" />,
    heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "Supporting and updating older systems to keep them running smoothly.",
    benefits: [
      "Extended software life",
      "Reduced crash risk",
      "Security hardening",
      "Cost efficiency"
    ],
    process: [
      { title: "Assess", desc: "Codebase analysis." },
      { title: "Stabilize", desc: "Fixing critical bugs." },
      { title: "Secure", desc: "Patching vulnerabilities." },
      { title: "Maintain", desc: "Regular check-ups." }
    ]
  },
  "performance-monitoring": {
    title: "Performance Monitoring",
    icon: <LifebuoyIcon className="w-12 h-12" />,
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "Real-time tracking of application speed and reliability.",
    benefits: [
      "Proactive error detection",
      "Faster load times",
      "User satisfaction",
      "Resource optimization"
    ],
    process: [
      { title: "Setup", desc: "Installing monitoring tools." },
      { title: "Configure", desc: "Setting alert thresholds." },
      { title: "Analyze", desc: "Reviewing metrics." },
      { title: "Tune", desc: "Optimizing bottlenecks." }
    ]
  },
  "security-updates": {
    title: "Security Updates",
    icon: <LifebuoyIcon className="w-12 h-12" />,
    heroImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    description: "Keeping your software safe from emerging threats and vulnerabilities.",
    benefits: [
      "Data protection",
      "Compliance adherence",
      "Trust preservation",
      "Attack prevention"
    ],
    process: [
      { title: "Scan", desc: "Vulnerability detection." },
      { title: "Patch", desc: "Applying security fixes." },
      { title: "Test", desc: "Regression testing." },
      { title: "Verify", desc: "Confirming security." }
    ]
  }
};
