import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { logEvent } from '../utils/analytics';
import { 
    Sprout, 
    ShieldAlert, 
    Smartphone, 
    Cpu, 
    Clock, 
    Activity, 
    Layers, 
    WifiOff, 
    Database, 
    TrendingUp, 
    Users, 
    CheckCircle, 
    Server, 
    Zap, 
    ArrowRight, 
    FileText, 
    Award, 
    HeartHandshake, 
    GraduationCap, 
    Eye,
    ChevronRight,
    Map
} from 'lucide-react';

const KrishiSurakshaPage = () => {
    // Scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const problems = [
        {
            title: "Animal Intrusion",
            desc: "Wild animals and stray cattle frequently destroy crops, causing severe financial losses overnight.",
            icon: <ShieldAlert className="text-red-400" size={24} />
        },
        {
            title: "Crop Damage",
            desc: "Unmonitored plant damage and intrusion translate directly into catastrophic harvest losses.",
            icon: <Sprout className="text-red-400" size={24} />
        },
        {
            title: "Lack of Affordable Monitoring",
            desc: "Traditional smart-farm systems are expensive and tailored for large industrial farms, not Indian smallholders.",
            icon: <TrendingUp className="text-red-400" size={24} />
        },
        {
            title: "Delayed Detection",
            desc: "Farmers only discover damage hours or days later, missing the critical window to protect their crops.",
            icon: <Clock className="text-red-400" size={24} />
        },
        {
            title: "Manual Field Monitoring",
            desc: "Walking fields at night exposes farmers to snakebites, animal attacks, and extreme weather.",
            icon: <Users className="text-red-400" size={24} />
        },
        {
            title: "Limited Access to Smart Tech",
            desc: "Modern precision agriculture tools remain inaccessible due to cost, complexity, and connectivity gaps.",
            icon: <Cpu className="text-red-400" size={24} />
        }
    ];

    const workflow = [
        { id: "field", label: "Farm Field", sub: "Crop Area" },
        { id: "sensor", label: "Sensor Monitoring Unit", sub: "ESP32 & Sensors" },
        { id: "ai", label: "AI Detection Engine", sub: "Intrusion Analysis" },
        { id: "backend", label: "Cloud Backend", sub: "Firebase Sync" },
        { id: "alerts", label: "Mobile App Alerts", sub: "Instant Push/SMS" },
        { id: "farmer", label: "Farmer Response", sub: "Manual Scare/Action" },
        { id: "drone", label: "Future Drone Verification", sub: "Autonomous Flight" }
    ];

    const keyFeatures = [
        {
            title: "AI Intrusion Detection",
            desc: "Edge-compatible machine learning algorithms identify animal and human intrusions in real-time.",
            icon: <Cpu size={20} className="text-accent-teal" />
        },
        {
            title: "Real-Time Mobile Alerts",
            desc: "Instant pushes, SMS, or app alerts notify farmers the second an event is detected.",
            icon: <Smartphone size={20} className="text-accent-blue" />
        },
        {
            title: "Sensor Monitoring",
            desc: "Low-power IoT sensor nodes track motion, sound, and thermal activity across field boundaries.",
            icon: <Activity size={20} className="text-accent-violet" />
        },
        {
            title: "Smart Event Dashboard",
            desc: "A simplified center for tracking historical events, sensor health, and system status.",
            icon: <Layers size={20} className="text-secondary" />
        },
        {
            title: "Drone-Assisted Verification",
            desc: "Automated flight paths verify alerts visually, reducing false alarms and human risk.",
            icon: <Eye size={20} className="text-accent-teal" />
        },
        {
            title: "AI-Based Classification",
            desc: "Classifies intruders (e.g. wild boars, cattle, humans) to suggest the appropriate response.",
            icon: <Zap size={20} className="text-accent-blue" />
        },
        {
            title: "Offline-Capable Architecture",
            desc: "Designed with local network resilience to function in areas with low or intermittent cellular signal.",
            icon: <WifiOff size={20} className="text-accent-violet" />
        },
        {
            title: "Rural-Friendly Design",
            desc: "Simple UI, support for localized settings, and minimal maintenance overhead.",
            icon: <Sprout size={20} className="text-secondary" />
        },
        {
            title: "Modular Deployment",
            desc: "Farms can deploy standalone sensors first, then scale up to drone verification and advanced analytics.",
            icon: <Server size={20} className="text-accent-teal" />
        },
        {
            title: "Scalable Cloud Architecture",
            desc: "A serverless backend engine capable of handling data streams from thousands of rural farm clusters.",
            icon: <Database size={20} className="text-accent-blue" />
        }
    ];

    const techStack = [
        { name: "Flutter", role: "Cross-platform Mobile UI" },
        { name: "Firebase", role: "Real-time DB & Cloud Functions" },
        { name: "ESP32", role: "Microcontrollers & Edge Sensors" },
        { name: "OpenCV", role: "Image Processing & Diagnostics" },
        { name: "AI/ML", role: "Computer Vision & Threat Classification" },
        { name: "Sensors", role: "PIR, Radar & Thermal Sensing" },
        { name: "Drone Prototype", role: "Visual Verification Platform" },
        { name: "Cloud Backend", role: "Data Sync & Event Orchestration" },
        { name: "Mobile Alerts", role: "FCM & SMS Gateway" },
        { name: "Edge AI", role: "On-device Inference" }
    ];

    const metrics = [
        { val: "<10s", label: "Alert Delivery Time" },
        { val: "24/7", label: "Monitoring Capability" },
        { val: "AI-Based", label: "Threat Detection" },
        { val: "Real-Time", label: "Push Notifications" },
        { val: "Rural-First", label: "Edge Architecture" },
        { val: "Scalable", label: "Pilot Deployment Vision" }
    ];

    const roadmap = [
        {
            phase: "Phase 1",
            title: "Prototype & MVP Validation",
            items: [
                "Farm-side sensor monitoring node development",
                "Edge-compatible sensor validation tests",
                "Cloud database linkage & basic mobile alerts",
                "Initial AI detection algorithms modeling"
            ]
        },
        {
            phase: "Phase 2",
            title: "Drone-Assisted Verification",
            items: [
                "Drone API interface & automated flight triggers",
                "Autonomous verification path planning",
                "Visual analysis integration via camera feeds",
                "Expanded sensor-drone coordinate handoff"
            ]
        },
        {
            phase: "Phase 3",
            title: "Pilot Deployments",
            items: [
                "Targeted local farmer field testing",
                "Farmer Producer Organisations (FPO) collaborations",
                "Field testing of offline-capable messaging",
                "Refinements based on real rural deployment validation"
            ]
        },
        {
            phase: "Phase 4",
            title: "Scalable Smart Agriculture Platform",
            items: [
                "Multi-location support for larger cooperatives",
                "AI-driven predictive analytics & analytics charts",
                "Integration with local agricultural APIs",
                "Advanced monitoring ecosystem expansion"
            ]
        }
    ];

    const collaborations = [
        { name: "Farmer Producer Organisations (FPOs)", desc: "Integrating sensor hubs with local cooperative farms to protect group boundaries." },
        { name: "Research Institutions", desc: "Collaborating on agricultural AI research, threat detection models, and rural studies." },
        { name: "Agricultural Universities", desc: "Testing and validating crop protection strategies and agronomy data models." },
        { name: "Rural Innovation Labs", desc: "Co-developing hardware cases, low-power batteries, and edge field equipment." },
        { name: "Agri-Tech Mentors", desc: "Adopting operational guidelines, compliance framework guides, and pilot strategies." },
        { name: "Smart Farming Partners", desc: "Integrating Krishi Suraksha telemetry data with other farming platforms." }
    ];

    return (
        <div className="bg-background text-primary min-h-screen pt-24 font-sans">
            <Helmet>
                <title>Krishi Suraksha AI – AI-Powered Smart Farm Protection Drone Platform</title>
                <meta name="description" content="Krishi Suraksha AI is a prototype-stage intelligent agriculture platform designed to help smallholder farmers protect crops using AI, IoT sensors, smart alerts, and drone-assisted field monitoring." />
                <meta name="keywords" content="AI Smart Farming India, Farm Protection Platform, Smart Agriculture AI, Agriculture Drone Platform, Rural AI Monitoring, AI Farm Monitoring, Smart Farming India, Drone-Assisted Agriculture, AI Agriculture Startup India, Precision Farming Platform" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://thasmaiinfotech.com/krishi-suraksha-ai" />
                <meta property="og:title" content="Krishi Suraksha AI – AI-Powered Farm Protection Platform" />
                <meta property="og:description" content="Intelligent prototype-stage crop protection platform combining AI, IoT sensors, mobile alerts, and drone-assisted verification built for Indian farming conditions." />
                <meta property="og:image" content="/logo.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Krishi Suraksha AI – AI-Powered Farm Protection" />
                <meta name="twitter:description" content="Intelligent prototype-stage crop protection platform using AI, IoT sensors, mobile alerts, and drone verification." />
                <meta name="twitter:image" content="/logo.png" />
            </Helmet>

            {/* 1. HERO SECTION */}
            <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-dark">
                {/* Background Shapes */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/10 to-transparent pointer-events-none" />
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent-teal/10 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent-violet/10 rounded-full blur-3xl" />

                <div className="container mx-auto px-6 relative z-10 text-center lg:text-left">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        {/* Text Left */}
                        <div className="lg:w-7/12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-secondary uppercase bg-secondary/10 rounded-full border border-secondary/20">
                                    Prototype Stage • MVP in Progress
                                </span>
                                <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6 text-white">
                                    Krishi Suraksha <span className="text-gradient">AI</span>
                                </h1>
                                <h2 className="text-xl lg:text-2xl font-medium text-gray-300 mb-6">
                                    AI-Powered Smart Farm Protection Drone Platform
                                </h2>
                                <p className="text-base lg:text-lg text-gray-400 mb-8 leading-relaxed max-w-xl">
                                    An intelligent prototype-stage agriculture platform designed to help Indian smallholder farmers monitor, detect, and respond to farm threats using AI, IoT, mobile alerts, and future-ready drone-assisted verification systems.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                    <a 
                                        href="#solution" 
                                        onClick={() => logEvent('click_see_how_it_works', 'Product Page Hero', 'Krishi Suraksha AI')}
                                        className="px-8 py-4 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary-hover transition-all shadow-lg shadow-secondary/25 flex items-center justify-center gap-2 group"
                                    >
                                        See How It Works
                                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </a>
                                    <a 
                                        href="/#contact" 
                                        onClick={() => logEvent('click_partner_hero', 'Product Page Hero', 'Krishi Suraksha AI')}
                                        className="px-8 py-4 bg-white/5 text-white border border-white/10 font-semibold rounded-xl hover:bg-white/10 transition-all backdrop-blur-sm"
                                    >
                                        Partner With Us
                                    </a>
                                </div>
                            </motion.div>
                        </div>

                        {/* Interactive Banner Graphic Right */}
                        <div className="lg:w-5/12 w-full max-w-md lg:max-w-none">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                className="relative bg-background-card/40 border border-white/10 rounded-3xl p-6 shadow-2xl backdrop-blur-md overflow-hidden aspect-[4/3] flex items-center justify-center"
                            >
                                {/* Grid texture */}
                                <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:16px_16px]" />
                                
                                <svg viewBox="0 0 400 300" className="w-full h-full relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    {/* Agricultural networking nodes */}
                                    <path d="M 50,220 L 350,220 L 290,140 L 110,140 Z" fill="url(#farmGrad2)" opacity="0.3"/>
                                    
                                    {/* Dotted Connection lines */}
                                    <motion.path 
                                        d="M100,100 L200,80 L300,120 L320,200 L200,80" 
                                        stroke="#845EC2" strokeWidth="1" strokeDasharray="3 3"
                                        animate={{ strokeDashoffset: [0, -20] }}
                                        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                                    />
                                    
                                    {/* Farmland Node 1 - Sensor */}
                                    <g transform="translate(100, 190)">
                                        <line x1="10" y1="5" x2="10" y2="40" stroke="#00C9A7" strokeWidth="2" />
                                        <circle cx="10" cy="5" r="5" fill="#0B1020" stroke="#00C9A7" strokeWidth="2" />
                                        <motion.circle cx="10" cy="5" r="12" stroke="#00C9A7" strokeWidth="0.5" animate={{ scale: [1, 2], opacity: [0.8, 0] }} transition={{ repeat: Infinity, duration: 2 }} />
                                    </g>
                                    
                                    {/* Farmland Node 2 - Sensor */}
                                    <g transform="translate(300, 170)">
                                        <line x1="10" y1="5" x2="10" y2="50" stroke="#00C9A7" strokeWidth="2" />
                                        <circle cx="10" cy="5" r="5" fill="#0B1020" stroke="#00C9A7" strokeWidth="2" />
                                        <motion.circle cx="10" cy="5" r="12" stroke="#00C9A7" strokeWidth="0.5" animate={{ scale: [1, 2], opacity: [0.8, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.7 }} />
                                    </g>

                                    {/* Drone Outline floating */}
                                    <motion.g 
                                        animate={{ y: [0, -8, 0] }}
                                        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                                        transform="translate(160, 45)"
                                    >
                                        {/* Drone arm lines */}
                                        <line x1="20" y1="30" x2="80" y2="30" stroke="#7B3FE4" strokeWidth="3" strokeLinecap="round" />
                                        <circle cx="50" cy="30" r="10" fill="#111827" stroke="#7B3FE4" strokeWidth="2" />
                                        <circle cx="50" cy="30" r="4" fill="#007BFF" />
                                        
                                        <line x1="15" y1="23" x2="25" y2="23" stroke="#9CA3AF" strokeWidth="1.5" />
                                        <line x1="75" y1="23" x2="85" y2="23" stroke="#9CA3AF" strokeWidth="1.5" />

                                        {/* Scanning cone */}
                                        <motion.polygon 
                                            points="50,40 10,180 90,180" 
                                            fill="url(#scanGrad)"
                                            animate={{ opacity: [0.1, 0.25, 0.1] }}
                                            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                                        />
                                    </motion.g>

                                    <defs>
                                        <linearGradient id="farmGrad2" x1="200" y1="140" x2="200" y2="220" gradientUnits="userSpaceOnUse">
                                            <stop offset="0%" stopColor="#0B1020" stopOpacity="0" />
                                            <stop offset="100%" stopColor="#00C9A7" stopOpacity="0.25" />
                                        </linearGradient>
                                        <linearGradient id="scanGrad" x1="50" y1="40" x2="50" y2="180" gradientUnits="userSpaceOnUse">
                                            <stop offset="0%" stopColor="#007BFF" stopOpacity="0.3" />
                                            <stop offset="100%" stopColor="#007BFF" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                
                                {/* Label badge overlay */}
                                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-4 py-2.5 bg-background/80 border border-white/5 rounded-xl backdrop-blur-md">
                                    <span className="text-xs font-semibold text-white">Smart IoT Network Mapping</span>
                                    <span className="text-[10px] text-accent-teal font-mono uppercase animate-pulse">● LIVE TELEMETRY</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. PROBLEM STATEMENT SECTION */}
            <section className="py-20 bg-background-paper border-t border-b border-white/5">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-xs font-bold text-secondary uppercase tracking-widest bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20">The Challenge</span>
                        <h2 className="text-3xl lg:text-4xl font-bold mt-4 mb-4 text-white">
                            Challenges Faced by Smallholder Farmers
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-sm lg:text-base">
                            Traditional agriculture methods and wildlife conflicts threaten the livelihoods of millions of small farm operations across India.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {problems.map((prob, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.08 }}
                                className="bg-background-card p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-all card-hover group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                                    {prob.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-red-400 transition-colors">{prob.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{prob.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. SOLUTION SECTION */}
            <section id="solution" className="py-20 bg-background">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-xs font-bold text-accent-teal uppercase tracking-widest bg-accent-teal/10 px-3 py-1 rounded-full border border-accent-teal/20">Integrated Platform</span>
                        <h2 className="text-3xl lg:text-4xl font-bold mt-4 mb-4 text-white">
                            Our Solution Architecture
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-sm lg:text-base">
                            An automated farm boundary protection network syncing edge sensors, cloud AI logic, and future drone-assisted visual validation.
                        </p>
                    </div>

                    {/* Architecture Horizontal Workflow */}
                    <div className="relative overflow-x-auto custom-scrollbar pb-8 pt-4">
                        <div className="min-w-[1000px] flex items-center justify-between px-4 relative">
                            {/* SVG Connecting lines in background */}
                            <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 h-2 pointer-events-none z-0">
                                <svg width="100%" height="8" className="overflow-visible">
                                    <line x1="0" y1="4" x2="100%" y2="4" stroke="#7B3FE4" strokeWidth="2" strokeDasharray="6 6" opacity="0.3" />
                                </svg>
                            </div>

                            {workflow.map((item, idx) => (
                                <React.Fragment key={item.id}>
                                    {/* Workflow Card */}
                                    <motion.div 
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="relative z-10 bg-background-card border border-white/10 hover:border-secondary/40 p-5 rounded-2xl w-44 text-center glass-card transition-colors duration-300"
                                    >
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-secondary text-white font-mono text-xs font-bold flex items-center justify-center border border-background">
                                            {idx + 1}
                                        </div>
                                        <h4 className="font-bold text-white text-sm mt-1 mb-1 leading-snug">{item.label}</h4>
                                        <p className="text-[11px] text-gray-500 font-medium uppercase tracking-wider">{item.sub}</p>
                                    </motion.div>

                                    {/* Flow Arrow */}
                                    {idx < workflow.length - 1 && (
                                        <div className="flex items-center justify-center w-8 z-10">
                                            <ChevronRight className="text-secondary animate-pulse" size={20} />
                                        </div>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    <div className="mt-10 text-center">
                        <p className="text-sm text-gray-400 italic">
                            “Designed with scalable modular architecture for future autonomous farm operations.”
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. KEY FEATURES SECTION */}
            <section className="py-20 bg-background-paper border-t border-b border-white/5">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-xs font-bold text-accent-blue uppercase tracking-widest bg-accent-blue/10 px-3 py-1 rounded-full border border-accent-blue/20">Product Capability</span>
                        <h2 className="text-3xl lg:text-4xl font-bold mt-4 mb-4 text-white">
                            Key Platform Features
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-sm lg:text-base">
                            Built with modular, lightweight components to suit both standalone setups and complete agricultural security systems.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                        {keyFeatures.map((feat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="bg-background-card p-5 rounded-2xl border border-white/5 hover:border-secondary/20 transition-all card-hover flex flex-col justify-between group"
                            >
                                <div>
                                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                                        {feat.icon}
                                    </div>
                                    <h3 className="text-base font-bold mb-2 text-white group-hover:text-secondary transition-colors leading-snug">{feat.title}</h3>
                                </div>
                                <p className="text-gray-400 text-xs leading-relaxed mt-2">{feat.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. MOBILE APP MOCKUP SECTION */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        {/* Text Left */}
                        <div className="lg:w-1/2">
                            <span className="text-xs font-bold text-secondary uppercase tracking-widest bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20">Farmer Dashboard</span>
                            <h2 className="text-3xl lg:text-4xl font-bold mt-4 mb-6 text-white">
                                Farmer-Friendly Mobile App Interface
                            </h2>
                            <p className="text-gray-400 mb-6 leading-relaxed text-sm lg:text-base">
                                The mobile app acts as the command center for the farmer, delivering real-time telemetry from edge sensors and immediate alerts when intrusions occur.
                            </p>
                            
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start gap-3">
                                    <CheckCircle size={18} className="text-accent-teal mt-0.5 shrink-0" />
                                    <span className="text-sm text-gray-300 font-medium"><strong>Flutter-based:</strong> High-performance cross-platform app codebase.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle size={18} className="text-accent-teal mt-0.5 shrink-0" />
                                    <span className="text-sm text-gray-300 font-medium"><strong>Cross-platform ready:</strong> Deployable on both Android and iOS devices.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle size={18} className="text-accent-teal mt-0.5 shrink-0" />
                                    <span className="text-sm text-gray-300 font-medium"><strong>Farmer-friendly UI:</strong> Large text, simplified dashboard views, and clear icons.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle size={18} className="text-accent-teal mt-0.5 shrink-0" />
                                    <span className="text-sm text-gray-300 font-medium"><strong>Prototype wireframes:</strong> Built for intuitive navigation and quick alert reading.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Interactive UI Mockups Right */}
                        <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
                            {/* App Screen Mockup 1: Dashboard */}
                            <motion.div 
                                whileHover={{ y: -5 }}
                                className="bg-background-card border border-white/10 rounded-2xl p-4 shadow-xl relative z-10 overflow-hidden"
                            >
                                <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
                                    <span className="text-[10px] text-gray-500 font-mono font-bold">MONITORING ACTIVE</span>
                                    <span className="w-2 h-2 rounded-full bg-accent-teal animate-ping" />
                                </div>
                                <div className="text-xs text-gray-400 mb-1">Total Protected Zones</div>
                                <div className="text-2xl font-bold text-white mb-4">4 Fields</div>

                                {/* Graph Mockup */}
                                <div className="h-20 bg-background/50 rounded-lg p-2 border border-white/5 flex flex-col justify-between mb-4">
                                    <div className="text-[8px] text-gray-500">24h Event Frequency</div>
                                    <div className="flex items-end gap-1.5 h-10 w-full mt-1 px-1">
                                        <div className="h-1/3 bg-secondary/60 rounded-sm w-full" />
                                        <div className="h-2/3 bg-secondary/60 rounded-sm w-full" />
                                        <div className="h-full bg-accent-teal rounded-sm w-full" />
                                        <div className="h-1/2 bg-secondary/60 rounded-sm w-full" />
                                        <div className="h-1/4 bg-secondary/60 rounded-sm w-full" />
                                        <div className="h-3/4 bg-secondary/60 rounded-sm w-full" />
                                        <div className="h-2/5 bg-secondary/60 rounded-sm w-full" />
                                    </div>
                                </div>

                                {/* Status List */}
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center p-2 bg-white/5 rounded-md text-[10px]">
                                        <span className="text-gray-300">Boundary Sensor A</span>
                                        <span className="text-accent-teal font-bold">ONLINE</span>
                                    </div>
                                    <div className="flex justify-between items-center p-2 bg-white/5 rounded-md text-[10px]">
                                        <span className="text-gray-300">Boundary Sensor B</span>
                                        <span className="text-accent-teal font-bold">ONLINE</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* App Screen Mockup 2: Alerts */}
                            <motion.div 
                                whileHover={{ y: -5 }}
                                className="bg-background-card border border-white/10 rounded-2xl p-4 shadow-xl relative z-10 overflow-hidden"
                            >
                                <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
                                    <span className="text-[10px] text-red-400 font-mono font-bold">ALERT LOG</span>
                                    <span className="text-[9px] text-gray-400">1m ago</span>
                                </div>

                                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl mb-4 text-center">
                                    <div className="text-red-400 text-xs font-bold mb-1">INTRUSION AT FIELD C</div>
                                    <p className="text-[10px] text-gray-300">Thermal sensor triggered. Classifier suggests wild animal.</p>
                                </div>

                                <div className="text-[10px] text-gray-400 mb-2">Automated Verification:</div>
                                <div className="p-2.5 bg-secondary/10 border border-secondary/20 rounded-lg text-[10px] mb-4">
                                    <div className="text-white font-bold mb-0.5">Drone Dispatching</div>
                                    <p className="text-gray-400">ETA: 45s. Live verification stream will display shortly.</p>
                                </div>

                                {/* Button action mockup */}
                                <button className="w-full py-2 bg-red-500 text-white rounded-lg text-xs font-bold hover:bg-red-600 transition-colors">
                                    Trigger Buzzer Alarm
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. TECHNOLOGY STACK SECTION */}
            <section className="py-20 bg-background-paper border-t border-b border-white/5">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-xs font-bold text-accent-teal uppercase tracking-widest bg-accent-teal/10 px-3 py-1 rounded-full border border-accent-teal/20">System Core</span>
                        <h2 className="text-3xl lg:text-4xl font-bold mt-4 mb-4 text-white">
                            Technology Ecosystem
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-sm lg:text-base">
                            An integrated balance of mobile design patterns, cloud databases, microcontrollers, and edge AI compute.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {techStack.map((tech, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="bg-background-card border border-white/5 p-5 rounded-2xl text-center hover:border-accent-teal/30 transition-all hover:bg-background-card/80"
                            >
                                <h4 className="font-bold text-white text-base mb-1">{tech.name}</h4>
                                <p className="text-gray-400 text-xs leading-relaxed">{tech.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. IMPACT METRICS SECTION */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-xs font-bold text-accent-blue uppercase tracking-widest bg-accent-blue/10 px-3 py-1 rounded-full border border-accent-blue/20">Platform Goals</span>
                        <h2 className="text-3xl lg:text-4xl font-bold mt-4 mb-4 text-white">
                            Prototype Validation Targets
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 mb-12">
                        {metrics.map((m, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.08 }}
                                className="bg-background-card/50 border border-white/5 rounded-2xl p-6 text-center"
                            >
                                <div className="text-2xl lg:text-3xl font-extrabold text-gradient mb-2">{m.val}</div>
                                <div className="text-xs text-gray-400 font-medium">{m.label}</div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="max-w-2xl mx-auto text-center">
                        <p className="text-xs text-gray-500 italic">
                            * Metrics are based on current prototype-stage design goals and internal validation targets.
                        </p>
                    </div>
                </div>
            </section>

            {/* 8. ROADMAP SECTION */}
            <section className="py-20 bg-background-paper border-t border-b border-white/5">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-xs font-bold text-secondary uppercase tracking-widest bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20">Evolution Plan</span>
                        <h2 className="text-3xl lg:text-4xl font-bold mt-4 mb-4 text-white">
                            Modular Development Roadmap
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-sm lg:text-base">
                            A structured, phase-based path from prototype validation to rural scale.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {roadmap.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-background-card rounded-2xl p-6 border border-white/5 flex flex-col justify-between group hover:border-secondary/20 transition-all duration-300"
                            >
                                <div>
                                    <div className="text-xs font-bold text-secondary mb-3 uppercase tracking-wider bg-secondary/10 px-2.5 py-1 rounded-md inline-block">
                                        {step.phase}
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-4 leading-snug">{step.title}</h3>
                                    
                                    <ul className="space-y-2.5 text-xs text-gray-400">
                                        {step.items.map((item, idy) => (
                                            <li key={idy} className="flex items-start gap-2">
                                                <ChevronRight size={14} className="text-secondary shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. FUTURE VISION SECTION */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto bg-gradient-to-r from-secondary/10 via-accent-blue/10 to-accent-teal/10 rounded-3xl border border-white/10 p-8 lg:p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/10 rounded-full blur-2xl" />
                        
                        <div className="relative z-10 text-center lg:text-left">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-accent-teal uppercase bg-accent-teal/10 rounded-full border border-accent-teal/20">
                                Future Vision
                            </span>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white leading-tight">
                                Scalable AI Platform for Precision Farming
                            </h2>
                            <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-6">
                                Krishi Suraksha AI is envisioned as a scalable intelligent agriculture platform capable of supporting future smart farming use cases across:
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left text-sm text-gray-300 font-medium mb-8">
                                <div className="flex items-center gap-2"><CheckCircle size={16} className="text-accent-teal shrink-0" /> AI-assisted crop protection</div>
                                <div className="flex items-center gap-2"><CheckCircle size={16} className="text-accent-teal shrink-0" /> Smart farm monitoring</div>
                                <div className="flex items-center gap-2"><CheckCircle size={16} className="text-accent-teal shrink-0" /> Drone-assisted field intelligence</div>
                                <div className="flex items-center gap-2"><CheckCircle size={16} className="text-accent-teal shrink-0" /> Rural automation</div>
                                <div className="flex items-center gap-2"><CheckCircle size={16} className="text-accent-teal shrink-0" /> Precision agriculture workflows</div>
                                <div className="flex items-center gap-2"><CheckCircle size={16} className="text-accent-teal shrink-0" /> Scalable farm analytics</div>
                            </div>

                            <p className="text-xs text-gray-500 italic">
                                Built to address real-world rural challenges using robust, high-availability architecture.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 10. PILOT / FPO COLLABORATION SECTION */}
            <section className="py-20 bg-background-paper border-t border-b border-white/5">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-xs font-bold text-accent-teal uppercase tracking-widest bg-accent-teal/10 px-3 py-1 rounded-full border border-accent-teal/20">Join the Ecosystem</span>
                        <h2 className="text-3xl lg:text-4xl font-bold mt-4 mb-4 text-white">
                            Pilot & Collaboration Opportunities
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-sm lg:text-base">
                            We are actively looking to connect with partners to validate our modular prototypes in diverse field environments.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {collaborations.map((collab, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.08 }}
                                className="bg-background-card p-6 rounded-2xl border border-white/5 hover:border-accent-teal/20 transition-all card-hover group"
                            >
                                <div className="w-10 h-10 rounded-lg bg-accent-teal/15 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform text-accent-teal">
                                    <HeartHandshake size={20} />
                                </div>
                                <h3 className="text-lg font-bold mb-2 text-white group-hover:text-accent-teal transition-colors leading-snug">{collab.name}</h3>
                                <p className="text-gray-400 text-xs leading-relaxed">{collab.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center">
                                <a 
                                    href="/#contact" 
                                    onClick={() => logEvent('click_partner_collab', 'Product Page Collab', 'Krishi Suraksha AI')}
                                    className="inline-flex items-center px-8 py-4 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary-hover transition-all shadow-lg shadow-secondary/25 gap-2 group"
                                >
                                    Partner With Us
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                </div>
            </section>

            {/* 11. INTERNSHIP & RESEARCH SECTION */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        {/* Text Left */}
                        <div className="lg:w-7/12">
                            <span className="text-xs font-bold text-accent-blue uppercase tracking-widest bg-accent-blue/10 px-3 py-1 rounded-full border border-accent-blue/20">Academic & Career Programs</span>
                            <h2 className="text-3xl lg:text-4xl font-bold mt-4 mb-6 text-white leading-tight">
                                Internship & Research Opportunities
                            </h2>
                            <p className="text-gray-400 mb-8 leading-relaxed text-sm lg:text-base">
                                Thasmai Infotech is building internship-driven innovation programs focused on equipping students and researchers with hands-on experience in rural smart tech. Focus areas include:
                            </p>

                            <div className="grid grid-cols-2 gap-4 text-sm font-medium text-gray-300 mb-8">
                                <div className="flex items-center gap-2"><CheckCircle size={16} className="text-accent-blue shrink-0" /> AI for Agriculture</div>
                                <div className="flex items-center gap-2"><CheckCircle size={16} className="text-accent-blue shrink-0" /> IoT Systems</div>
                                <div className="flex items-center gap-2"><CheckCircle size={16} className="text-accent-blue shrink-0" /> Drone Technologies</div>
                                <div className="flex items-center gap-2"><CheckCircle size={16} className="text-accent-blue shrink-0" /> Mobile App Development</div>
                                <div className="flex items-center gap-2"><CheckCircle size={16} className="text-accent-blue shrink-0" /> Smart Farm Monitoring</div>
                                <div className="flex items-center gap-2"><CheckCircle size={16} className="text-accent-blue shrink-0" /> Embedded Systems</div>
                            </div>

                            <a 
                                href="/#contact" 
                                onClick={() => logEvent('click_join_research', 'Product Page Internship', 'Krishi Suraksha AI')}
                                className="inline-flex items-center px-8 py-4 bg-white/5 text-white border border-white/10 font-semibold rounded-xl hover:bg-white/10 transition-all backdrop-blur-sm gap-2 group"
                            >
                                <GraduationCap size={18} />
                                Join Research Program
                            </a>
                        </div>

                        {/* Graphic Right */}
                        <div className="lg:w-5/12 w-full max-w-sm lg:max-w-none">
                            <div className="bg-background-card/50 border border-white/10 rounded-3xl p-8 text-center relative z-10 glass-card">
                                <Award className="mx-auto text-accent-blue mb-4 animate-bounce" size={48} />
                                <h4 className="font-bold text-white text-lg mb-2">Build Tech for Social Impact</h4>
                                <p className="text-gray-400 text-xs leading-relaxed mb-6">
                                    Work directly on prototype hardware, edge compute logic, and cross-platform apps that solve immediate challenges for rural Indian farming communities.
                                </p>
                                <div className="text-[10px] text-gray-500 font-medium">MANGLORE LABS • HANDS-ON EXPERIENCE</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 12. FINAL CTA SECTION */}
            <section className="py-20 bg-background-paper border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#111827] to-[#1F2937] border border-white/10 rounded-3xl p-8 lg:p-16 text-center relative z-10 overflow-hidden shadow-2xl">
                        {/* Overlay light */}
                        <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-teal/10 rounded-full blur-3xl pointer-events-none" />

                        <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white leading-tight">
                            Building the Future of Affordable Smart Agriculture for Rural India
                        </h2>
                        
                        <p className="text-gray-400 text-sm lg:text-base mb-8 max-w-xl mx-auto font-medium uppercase tracking-wider">
                            AI • IoT • Smart Sensors • Drone Intelligence • Rural Innovation
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button 
                                onClick={() => {
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                    logEvent('click_back_to_top', 'Product Page Footer CTA', 'Krishi Suraksha AI');
                                }} 
                                className="px-8 py-4 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary-hover transition-all shadow-lg shadow-secondary/25 flex items-center justify-center gap-2 group text-center"
                            >
                                Back to Top
                            </button>
                            <a 
                                href="/#contact" 
                                onClick={() => logEvent('click_contact_footer', 'Product Page Footer CTA', 'Krishi Suraksha AI')}
                                className="px-8 py-4 bg-white/5 text-white border border-white/10 font-semibold rounded-xl hover:bg-white/10 transition-all backdrop-blur-sm flex items-center justify-center gap-2 text-center"
                            >
                                Contact Team
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default KrishiSurakshaPage;
