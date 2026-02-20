import {
  ChartBarIcon,
  MagnifyingGlassIcon,
  MegaphoneIcon,
  CodeBracketIcon,
  VideoCameraIcon,
  PencilSquareIcon,
  CpuChipIcon,
  LightBulbIcon,
  CommandLineIcon,
  LifebuoyIcon,
  PaintBrushIcon,
  HeartIcon,
  ShoppingBagIcon,
  TagIcon,
  BanknotesIcon,
  GlobeAmericasIcon,
  TruckIcon,
  ComputerDesktopIcon,
  HomeModernIcon,
  FilmIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

export const navbarData = {
  services: [
    {
      category: "Software Development",
      icon: <CommandLineIcon className="w-6 h-6" />,
      items: [
        { name: "Custom Software", href: "/services/custom-software" },
        { name: "SaaS Development", href: "/services/saas-development" },
        { name: "API Development", href: "/services/api-development" },
        { name: "Mobile App Development", href: "/services/mobile-app-development" }
      ]
    },
    {
      category: "Web Design",
      icon: <CodeBracketIcon className="w-6 h-6" />,
      items: [
        { name: "Web Design & Development", href: "/services/web-design-development" },
        { name: "Custom Website Design", href: "/services/custom-website-design" },
        { name: "WordPress Development", href: "/services/wordpress-development" },
        { name: "Website Maintenance", href: "/services/website-maintenance" }
      ]
    },
    {
      category: "Social Media",
      icon: <ChartBarIcon className="w-6 h-6" />,
      items: [
        { name: "Social Media Management", href: "/services/social-media-management" },
        { name: "Social Media Marketing", href: "/services/social-media-marketing" },
        { name: "Brand Management", href: "/services/brand-management" },
        { name: "Community Growth", href: "/services/community-growth" }
      ]
    },
    {
      category: "AI Automation",
      icon: <CpuChipIcon className="w-6 h-6" />,
      items: [
        { name: "Workflow Automation", href: "/services/workflow-automation" },
        { name: "Chatbot Development", href: "/services/chatbot-development" },
        { name: "AI Integration", href: "/services/ai-integration" },
        { name: "Process Optimization", href: "/services/process-optimization" }
      ]
    },
    {
      category: "Software Consulting",
      icon: <LightBulbIcon className="w-6 h-6" />,
      items: [
        { name: "IT Strategy", href: "/services/it-strategy" },
        { name: "Digital Transformation", href: "/services/digital-transformation" },
        { name: "Tech Stack Advisory", href: "/services/tech-stack-advisory" },
        { name: "Project Audits", href: "/services/project-audits" }
      ]
    },
    {
      category: "Digital Marketing",
      icon: <MegaphoneIcon className="w-6 h-6" />,
      items: [
        { name: "Digital Marketing Services", href: "/services/digital-marketing-services" },
        { name: "Content Marketing", href: "/services/content-marketing" },
        { name: "Email Marketing", href: "/services/email-marketing" },
        { name: "Online Public Relations", href: "/services/online-public-relations" }
      ]
    },
    {
      category: "UI/UX Design",
      icon: <PaintBrushIcon className="w-6 h-6" />,
      items: [
        { name: "User Interface Design", href: "/services/user-interface-design" },
        { name: "User Experience Research", href: "/services/user-experience-research" },
        { name: "Prototyping", href: "/services/prototyping" },
        { name: "Design Systems", href: "/services/design-systems" }
      ]
    },
    {
      category: "SEO Services",
      icon: <MagnifyingGlassIcon className="w-6 h-6" />,
      items: [
        { name: "Search Engine Optimization", href: "/services/search-engine-optimization" },
        { name: "Local SEO", href: "/services/local-seo" },
        { name: "Technical SEO Audit", href: "/services/technical-seo-audit" },
        { name: "Link Building", href: "/services/link-building" }
      ]
    },
    {
      category: "Production",
      icon: <VideoCameraIcon className="w-6 h-6" />,
      items: [
        { name: "Video Production", href: "/services/video-production" },
        { name: "Product Photography", href: "/services/product-photography" },
        { name: "Motion Graphics", href: "/services/motion-graphics" },
        { name: "Podcast Production", href: "/services/podcast-production" }
      ]
    },
    {
      category: "Support & Maintenance",
      icon: <LifebuoyIcon className="w-6 h-6" />,
      items: [
        { name: "24/7 Support", href: "/services/24-7-support" },
        { name: "Legacy System Maintenance", href: "/services/legacy-system-maintenance" },
        { name: "Performance Monitoring", href: "/services/performance-monitoring" },
        { name: "Security Updates", href: "/services/security-updates" }
      ]
    }
  ],
  industries: [
    { name: "Healthcare", href: "/industries/healthcare", icon: <HeartIcon className="w-6 h-6" /> },
    { name: "Ecommerce", href: "/industries/ecommerce", icon: <ShoppingBagIcon className="w-6 h-6" /> },
    { name: "Retail", href: "/industries/retail", icon: <TagIcon className="w-6 h-6" /> },
    { name: "Fintech", href: "/industries/fintech", icon: <BanknotesIcon className="w-6 h-6" /> },
    { name: "Travel", href: "/industries/travel", icon: <GlobeAmericasIcon className="w-6 h-6" /> },
    { name: "Logistics", href: "/industries/logistics", icon: <TruckIcon className="w-6 h-6" /> },
    { name: "Software & IT", href: "/industries/software-it", icon: <ComputerDesktopIcon className="w-6 h-6" /> },
    { name: "Real Estate", href: "/industries/real-estate", icon: <HomeModernIcon className="w-6 h-6" /> },
    { name: "Media & Entertainment", href: "/industries/media-entertainment", icon: <FilmIcon className="w-6 h-6" /> },
    { name: "Edtech", href: "/industries/edtech", icon: <AcademicCapIcon className="w-6 h-6" /> }
  ]
};
