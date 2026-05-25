import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Radio, ShieldAlert, Cpu, Sparkles } from 'lucide-react';
import { logEvent } from '../utils/analytics';

const FlagshipProduct = () => {
    const pills = [
        "AI Detection",
        "Smart Sensors",
        "Drone Verification",
        "Real-Time Alerts",
        "Farm Monitoring",
        "Mobile Dashboard",
        "Offline Capable",
        "Rural India Focus",
        "Prototype Stage",
        "Scalable Architecture"
    ];

    return (
        <section id="flagship-product" className="relative py-24 overflow-hidden bg-gradient-dark border-b border-white/5">
            {/* Background glowing effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -top-12 left-10 w-72 h-72 bg-accent-teal/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="mb-12">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-accent-teal uppercase bg-accent-teal/10 rounded-full border border-accent-teal/20">
                        <Sparkles size={12} className="animate-pulse" /> Flagship Innovation
                    </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Column: Product Information */}
                    <div className="flex flex-col justify-center text-left">
                        <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white">
                            Krishi Suraksha <span className="text-gradient">AI</span>
                        </h2>

                        <h3 className="text-lg lg:text-xl font-medium text-gray-300 mb-6 leading-relaxed">
                            AI-Powered Smart Farm Protection Drone Platform for Rural India
                        </h3>

                        <p className="text-gray-400 mb-8 leading-relaxed text-base">
                            Krishi Suraksha AI is a prototype-stage intelligent agriculture platform designed to help smallholder farmers protect crops using AI, IoT sensors, smart alerts, and drone-assisted field monitoring.
                        </p>

                        <p className="text-gray-400 mb-8 leading-relaxed text-base">
                            The platform combines farm-side sensor monitoring, AI-powered intrusion detection, mobile alerts, and future-ready drone verification into a scalable smart agriculture ecosystem built for Indian farming conditions.
                        </p>

                        {/* Feature Pills */}
                        <div className="flex flex-wrap gap-2.5 mb-10">
                            {pills.map((pill, idx) => (
                                <span
                                    key={idx}
                                    className="px-3 py-1.5 bg-white/5 text-gray-300 text-xs font-medium rounded-full border border-white/10 hover:border-secondary/30 transition-all duration-300"
                                >
                                    {pill}
                                </span>
                            ))}
                        </div>


                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/krishi-suraksha-ai"
                                onClick={() => logEvent('click_explore_product', 'Flagship Section', 'Krishi Suraksha AI')}
                                className="px-8 py-4 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary-hover transition-all shadow-lg shadow-secondary/25 flex items-center justify-center gap-2 group text-center"
                            >
                                Explore Product
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <a
                                href="/#contact"
                                onClick={() => logEvent('click_contact_team', 'Flagship Section', 'Krishi Suraksha AI')}
                                className="px-8 py-4 bg-white/5 text-white border border-white/10 font-semibold rounded-xl hover:bg-white/10 transition-all backdrop-blur-sm flex items-center justify-center gap-2 text-center"
                            >
                                <MessageSquare size={18} />
                                Contact Team
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Visual Composition */}
                    <div className="relative w-full max-w-lg lg:max-w-none mx-auto aspect-square flex items-center justify-center bg-background-card/25 rounded-3xl border border-white/5 p-6 backdrop-blur-sm overflow-hidden">
                        {/* Farm Background Grid */}
                        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                        {/* Farmland Isometric Grid Shape */}
                        <div className="absolute bottom-4 w-[110%] h-32 bg-gradient-to-t from-accent-teal/10 to-transparent rounded-full blur-2xl pointer-events-none" />

                        {/* Interactive SVG Visual */}
                        <svg viewBox="0 0 500 500" className="w-full h-full relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* Perspective Farmland lines */}
                            <path d="M 50,400 L 450,400 L 350,300 L 150,300 Z" fill="url(#farmlandGrad)" opacity="0.3" />
                            <line x1="150" y1="300" x2="50" y2="400" stroke="#00C9A7" strokeWidth="1" opacity="0.3" strokeDasharray="4 4" />
                            <line x1="216" y1="300" x2="183" y2="400" stroke="#00C9A7" strokeWidth="1" opacity="0.2" strokeDasharray="4 4" />
                            <line x1="283" y1="300" x2="316" y2="400" stroke="#00C9A7" strokeWidth="1" opacity="0.2" strokeDasharray="4 4" />
                            <line x1="350" y1="300" x2="450" y2="400" stroke="#00C9A7" strokeWidth="1" opacity="0.3" strokeDasharray="4 4" />

                            <line x1="100" y1="350" x2="400" y2="350" stroke="#00C9A7" strokeWidth="1" opacity="0.2" />

                            {/* Farmer Silhouette representation at bottom left */}
                            <g transform="translate(110, 360)">
                                <path d="M10,25 C10,15 15,10 20,10 C25,10 30,15 30,25 L32,45 L8,45 Z" fill="#1F2937" stroke="#374151" strokeWidth="1" />
                                <circle cx="20" cy="5" r="5" fill="#1F2937" stroke="#374151" strokeWidth="1" />
                                {/* Farmer glow */}
                                <circle cx="20" cy="5" r="8" stroke="#00C9A7" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.5" />
                            </g>

                            {/* IoT Sensor Pole on Right Side */}
                            <g transform="translate(380, 220)">
                                {/* Pole shadow */}
                                <ellipse cx="20" cy="160" rx="15" ry="5" fill="black" opacity="0.3" />
                                {/* Pole */}
                                <line x1="20" y1="60" x2="20" y2="160" stroke="#4B5563" strokeWidth="3" />
                                <line x1="20" y1="60" x2="20" y2="160" stroke="#9CA3AF" strokeWidth="1" />
                                {/* Cross bar */}
                                <line x1="5" y1="80" x2="35" y2="80" stroke="#4B5563" strokeWidth="2" />
                                {/* Solar panel representation */}
                                <path d="M 0,65 L 40,65 L 35,50 L 5,50 Z" fill="#1E3A8A" stroke="#3B82F6" strokeWidth="1" />
                                {/* Battery Box */}
                                <rect x="10" y="90" width="20" height="25" rx="2" fill="#1F2937" stroke="#4B5563" />
                                <circle cx="20" cy="102" r="2" fill="#00C9A7" />
                                {/* Sensor Head */}
                                <circle cx="20" cy="40" r="10" fill="#374151" stroke="#4B5563" />
                                <circle cx="20" cy="40" r="4" fill="#E11D48" />

                                {/* Pulsing Sensor AI Detection Waves */}
                                <motion.circle
                                    cx="20" cy="40" r="30"
                                    stroke="#00C9A7" strokeWidth="1.5"
                                    animate={{ scale: [1, 2], opacity: [0.8, 0] }}
                                    transition={{ repeat: Infinity, duration: 2.5, ease: "easeOut" }}
                                />
                                <motion.circle
                                    cx="20" cy="40" r="30"
                                    stroke="#00C9A7" strokeWidth="1"
                                    animate={{ scale: [1, 3], opacity: [0.5, 0] }}
                                    transition={{ repeat: Infinity, duration: 2.5, ease: "easeOut", delay: 1.2 }}
                                />
                            </g>

                            {/* Hovering Drone representation on top left */}
                            <motion.g
                                animate={{ y: [0, -12, 0], rotate: [-0.5, 0.5, -0.5] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                transform="translate(100, 70)"
                            >
                                {/* Drone Shadow on Farm Grid (below) */}
                                <ellipse cx="100" cy="280" rx="35" ry="8" fill="black" opacity="0.25" />

                                {/* Drone Laser detection line */}
                                <motion.polygon
                                    points="100,60 50,330 150,330"
                                    fill="url(#laserGrad)"
                                    animate={{ opacity: [0.1, 0.25, 0.1] }}
                                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                />

                                {/* Drone body */}
                                {/* Arms */}
                                <line x1="40" y1="50" x2="160" y2="50" stroke="#374151" strokeWidth="4" strokeLinecap="round" />
                                <line x1="50" y1="40" x2="150" y2="60" stroke="#1F2937" strokeWidth="3" strokeLinecap="round" />

                                {/* Rotors / Motors */}
                                <rect x="35" y="40" width="10" height="15" rx="1" fill="#4B5563" />
                                <rect x="155" y="40" width="10" height="15" rx="1" fill="#4B5563" />

                                {/* Propellers spinning representation */}
                                <motion.ellipse
                                    cx="40" cy="40" rx="25" ry="3" fill="#9CA3AF" opacity="0.4"
                                    animate={{ rx: [25, 2, 25] }}
                                    transition={{ repeat: Infinity, duration: 0.15, ease: "linear" }}
                                />
                                <motion.ellipse
                                    cx="160" cy="40" rx="25" ry="3" fill="#9CA3AF" opacity="0.4"
                                    animate={{ rx: [2, 25, 2] }}
                                    transition={{ repeat: Infinity, duration: 0.15, ease: "linear" }}
                                />

                                {/* Central body */}
                                <circle cx="100" cy="50" r="18" fill="#111827" stroke="#7B3FE4" strokeWidth="2" />
                                <path d="M 88,48 Q 100,32 112,48 Z" fill="#1F2937" />
                                {/* Camera Gimbal */}
                                <rect x="94" y="66" width="12" height="10" rx="2" fill="#374151" />
                                <circle cx="100" cy="72" r="3" fill="#00C9A7" />

                                {/* Drone LEDs */}
                                <circle cx="90" cy="52" r="1.5" fill="#EF4444" />
                                <circle cx="110" cy="52" r="1.5" fill="#10B981" />
                                <motion.circle
                                    cx="100" cy="42" r="2.5" fill="#7B3FE4"
                                    animate={{ opacity: [0.2, 1, 0.2] }}
                                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                                />
                            </motion.g>

                            {/* Floating Mobile Dashboard (Center-Right overlaying the grid) */}
                            <motion.g
                                animate={{ y: [0, 8, 0] }}
                                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
                                transform="translate(230, 160)"
                            >
                                {/* Phone card backdrop shadow */}
                                <rect x="0" y="0" width="125" height="210" rx="16" fill="black" opacity="0.4" filter="blur(8px)" />

                                {/* Phone Outer Frame */}
                                <rect x="0" y="0" width="120" height="200" rx="16" fill="#0B1020" stroke="#374151" strokeWidth="3" />
                                {/* Glass Screen Inner */}
                                <rect x="4" y="4" width="112" height="192" rx="12" fill="#111827" opacity="0.95" />

                                {/* Screen notch */}
                                <rect x="45" y="4" width="30" height="6" rx="3" fill="#000000" />

                                {/* Dashboard content header */}
                                <text x="12" y="25" fill="#9CA3AF" fontSize="6" fontFamily="Inter" fontWeight="bold">SURAKSHA MONITOR</text>
                                <circle cx="105" cy="22" r="2" fill="#10B981" />

                                {/* Camera View Mockup */}
                                <rect x="12" y="35" width="96" height="50" rx="6" fill="#1F2937" stroke="#374151" strokeWidth="0.5" />
                                {/* Grid lines inside camera */}
                                <line x1="44" y1="35" x2="44" y2="85" stroke="#374151" strokeWidth="0.25" opacity="0.5" />
                                <line x1="76" y1="35" x2="76" y2="85" stroke="#374151" strokeWidth="0.25" opacity="0.5" />
                                <line x1="12" y1="52" x2="108" y2="52" stroke="#374151" strokeWidth="0.25" opacity="0.5" />
                                <line x1="12" y1="68" x2="108" y2="68" stroke="#374151" strokeWidth="0.25" opacity="0.5" />
                                {/* Bounding box overlay representing AI Detection */}
                                <motion.rect
                                    x="38" y="48" width="40" height="26" rx="2"
                                    stroke="#EF4444" strokeWidth="1" fill="none"
                                    animate={{ opacity: [0.4, 1, 0.4] }}
                                    transition={{ repeat: Infinity, duration: 1.2 }}
                                />
                                <text x="40" y="45" fill="#EF4444" fontSize="4.5" fontFamily="Inter" fontWeight="bold">INTRUDER 94%</text>

                                {/* Live Feed Text */}
                                <text x="16" y="43" fill="#10B981" fontSize="4" fontFamily="Inter" fontWeight="bold">● LIVE FEED</text>

                                {/* Notification Alert Box */}
                                <motion.g
                                    animate={{ scale: [0.97, 1.03, 0.97] }}
                                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                    transform="translate(12, 95)"
                                >
                                    <rect x="0" y="0" width="96" height="40" rx="6" fill="#7B3FE4" fillOpacity="0.15" stroke="#7B3FE4" strokeWidth="1" />

                                    <circle cx="12" cy="15" r="6" fill="#EF4444" />
                                    <path d="M12,12 L12,16 M12,18 L12,18.5" stroke="white" strokeWidth="1" strokeLinecap="round" />

                                    <text x="24" y="14" fill="#FFFFFF" fontSize="6.5" fontFamily="Inter" fontWeight="bold">Intrusion Alert</text>
                                    <text x="24" y="23" fill="#D1D5DB" fontSize="5" fontFamily="Inter">Sector D • Wild Animal</text>
                                    <text x="24" y="32" fill="#A78BFA" fontSize="4.5" fontFamily="Inter" fontWeight="bold">DRONE VERIFYING...</text>
                                </motion.g>

                                {/* Small stats blocks */}
                                <rect x="12" y="142" width="44" height="22" rx="4" fill="#1F2937" stroke="#374151" strokeWidth="0.5" />
                                <text x="16" y="151" fill="#9CA3AF" fontSize="4.5" fontFamily="Inter">Sensors</text>
                                <text x="16" y="160" fill="#10B981" fontSize="6.5" fontFamily="Inter" fontWeight="bold">12 / 12 OK</text>

                                <rect x="64" y="142" width="44" height="22" rx="4" fill="#1F2937" stroke="#374151" strokeWidth="0.5" />
                                <text x="68" y="151" fill="#9CA3AF" fontSize="4.5" fontFamily="Inter">Battery</text>
                                <text x="68" y="160" fill="#00C9A7" fontSize="6.5" fontFamily="Inter" fontWeight="bold">87%</text>

                                {/* Alert pulsing ring */}
                                <motion.circle
                                    cx="60" cy="182" r="5" fill="#EF4444"
                                    animate={{ scale: [1, 1.8], opacity: [1, 0] }}
                                    transition={{ repeat: Infinity, duration: 1.5 }}
                                />
                                <circle cx="60" cy="182" r="3" fill="#EF4444" />
                                <text x="68" y="184" fill="#EF4444" fontSize="5" fontFamily="Inter" fontWeight="bold">CRITICAL THREAT</text>
                            </motion.g>

                            {/* Floating data particles (Sensor to Cloud/Phone, Drone to Phone) */}
                            {/* Particle 1 */}
                            <motion.circle
                                cx="380" cy="240" r="3" fill="#00C9A7"
                                animate={{ cx: [380, 290, 230], cy: [240, 200, 240], opacity: [0, 1, 1, 0] }}
                                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            />
                            {/* Particle 2 */}
                            <motion.circle
                                cx="200" cy="120" r="2.5" fill="#7B3FE4"
                                animate={{ cx: [200, 240, 280], cy: [120, 180, 220], opacity: [0, 1, 1, 0] }}
                                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 1 }}
                            />
                            {/* Particle 3 */}
                            <motion.circle
                                cx="150" cy="380" r="2" fill="#007BFF"
                                animate={{ cx: [150, 200, 250], cy: [380, 310, 280], opacity: [0, 1, 0] }}
                                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
                            />

                            {/* Definitions for Gradients */}
                            <defs>
                                <linearGradient id="farmlandGrad" x1="250" y1="300" x2="250" y2="400" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="#0B1020" stopOpacity="0.2" />
                                    <stop offset="50%" stopColor="#00C9A7" stopOpacity="0.1" />
                                    <stop offset="100%" stopColor="#00C9A7" stopOpacity="0.3" />
                                </linearGradient>
                                <linearGradient id="laserGrad" x1="100" y1="60" x2="100" y2="330" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="#7B3FE4" stopOpacity="0.4" />
                                    <stop offset="50%" stopColor="#7B3FE4" stopOpacity="0.1" />
                                    <stop offset="100%" stopColor="#7B3FE4" stopOpacity="0.0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FlagshipProduct;
