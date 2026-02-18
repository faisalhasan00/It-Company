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
        { name: "Custom Software", href: "/#services" },
        { name: "SaaS Development", href: "/#services" },
        { name: "API Development", href: "/#services" },
        { name: "Mobile App Development", href: "/#services" }
      ]
    },
    {
      category: "Web Design",
      icon: <CodeBracketIcon className="w-6 h-6" />,
      items: [
        { name: "Web Design & Development", href: "/#services" },
        { name: "Custom Website Design", href: "/#services" },
        { name: "WordPress Development", href: "/#services" },
        { name: "Website Maintenance", href: "/#services" }
      ]
    },
    {
      category: "Social Media",
      icon: <ChartBarIcon className="w-6 h-6" />,
      items: [
        { name: "Social Media Management", href: "/#services" },
        { name: "Social Media Marketing", href: "/#services" },
        { name: "Brand Management", href: "/#services" },
        { name: "Community Growth", href: "/#services" }
      ]
    },
    {
      category: "AI Automation",
      icon: <CpuChipIcon className="w-6 h-6" />,
      items: [
        { name: "Workflow Automation", href: "/#services" },
        { name: "Chatbot Development", href: "/#services" },
        { name: "AI Integration", href: "/#services" },
        { name: "Process Optimization", href: "/#services" }
      ]
    },
    {
      category: "Software Consulting",
      icon: <LightBulbIcon className="w-6 h-6" />,
      items: [
        { name: "IT Strategy", href: "/#services" },
        { name: "Digital Transformation", href: "/#services" },
        { name: "Tech Stack Advisory", href: "/#services" },
        { name: "Project Audits", href: "/#services" }
      ]
    },
    {
      category: "Digital Marketing",
      icon: <MegaphoneIcon className="w-6 h-6" />,
      items: [
        { name: "Digital Marketing Services", href: "/#services" },
        { name: "Content Marketing", href: "/#services" },
        { name: "Email Marketing", href: "/#services" },
        { name: "Online Public Relations", href: "/#services" }
      ]
    },
    {
      category: "UI/UX Design",
      icon: <PaintBrushIcon className="w-6 h-6" />,
      items: [
        { name: "User Interface Design", href: "/#services" },
        { name: "User Experience Research", href: "/#services" },
        { name: "Prototyping", href: "/#services" },
        { name: "Design Systems", href: "/#services" }
      ]
    },
    {
      category: "SEO Services",
      icon: <MagnifyingGlassIcon className="w-6 h-6" />,
      items: [
        { name: "Search Engine Optimization", href: "/#services" },
        { name: "Local SEO", href: "/#services" },
        { name: "Technical SEO Audit", href: "/#services" },
        { name: "Link Building", href: "/#services" }
      ]
    },
    {
      category: "Production",
      icon: <VideoCameraIcon className="w-6 h-6" />,
      items: [
        { name: "Video Production", href: "/#services" },
        { name: "Product Photography", href: "/#services" },
        { name: "Motion Graphics", href: "/#services" },
        { name: "Podcast Production", href: "/#services" }
      ]
    },
    {
      category: "Support & Maintenance",
      icon: <LifebuoyIcon className="w-6 h-6" />,
      items: [
        { name: "24/7 Support", href: "/#services" },
        { name: "Legacy System Maintenance", href: "/#services" },
        { name: "Performance Monitoring", href: "/#services" },
        { name: "Security Updates", href: "/#services" }
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
