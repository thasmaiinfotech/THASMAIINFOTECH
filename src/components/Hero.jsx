import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, Brain, Globe } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-dark">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/10 to-transparent pointer-events-none" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent-teal/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent-violet/10 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Text Content */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-secondary uppercase bg-secondary/10 rounded-full border border-secondary/20">
                                Innovate • Automate • Scale
                            </span>
                            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6 text-white">
                                Engineering <span className="text-gradient">Intelligent Solutions</span> for a Connected World.
                            </h1>
                            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                                THASMAI INFOTECH builds IoT, financial analytics, Gen AI, AI Agents, and GPS-based solutions that help businesses automate, optimize, and scale with confidence.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <a href="#contact" className="px-8 py-4 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary-hover transition-all shadow-lg shadow-secondary/25 flex items-center justify-center gap-2 group">
                                    Schedule a Consultation
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </a>
                                <a href="#services" className="px-8 py-4 bg-white/5 text-white border border-white/10 font-semibold rounded-xl hover:bg-white/10 transition-all backdrop-blur-sm">
                                    Explore Our Services
                                </a>
                            </div>
                        </motion.div>

                        {/* Trust Bar */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className="mt-12 pt-8 border-t border-white/10 flex flex-wrap justify-center lg:justify-start gap-6 text-sm font-medium text-gray-500"
                        >
                            <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent-teal" /> End-to-End Delivery</span>
                            <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent-blue" /> Secure by Design</span>
                            <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent-violet" /> Cloud & Mobile Ready</span>
                        </motion.div>
                    </div>

                    {/* Visual Content / Card Cluster */}
                    <div className="lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative w-full max-w-lg mx-auto"
                        >
                            {/* Main Card */}
                            <div className="bg-background-card p-6 rounded-2xl shadow-2xl border border-white/10 relative z-20">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary">
                                        <Brain size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-white">Gen AI & Agentic AI</h3>
                                        <p className="text-xs text-gray-400">Autonomous workflows</p>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="h-2 bg-white/10 rounded-full w-3/4" />
                                    <div className="h-2 bg-white/10 rounded-full w-full" />
                                    <div className="h-2 bg-white/10 rounded-full w-5/6" />
                                </div>
                                <div className="mt-4 flex gap-2">
                                    <span className="px-2 py-1 bg-white/5 text-[10px] font-medium text-gray-400 rounded-md border border-white/5">LLMs</span>
                                    <span className="px-2 py-1 bg-white/5 text-[10px] font-medium text-gray-400 rounded-md border border-white/5">RAG</span>
                                </div>
                            </div>

                            {/* Floating Card 1 */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="absolute -top-12 -right-4 bg-background-card p-4 rounded-xl shadow-xl border border-white/10 z-10 w-48"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-lg bg-accent-teal/20 flex items-center justify-center text-accent-teal">
                                        <Activity size={16} />
                                    </div>
                                    <h4 className="font-bold text-sm text-white">Financial Analytics</h4>
                                </div>
                                <div className="text-xs text-gray-400">Real-time profit tracking</div>
                            </motion.div>

                            {/* Floating Card 2 */}
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-8 -left-8 bg-background-card p-4 rounded-xl shadow-xl border border-white/10 z-30 w-52"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-lg bg-accent-blue/20 flex items-center justify-center text-accent-blue">
                                        <Globe size={16} />
                                    </div>
                                    <h4 className="font-bold text-sm text-white">IoT & GPS Tracking</h4>
                                </div>
                                <div className="flex items-center gap-2 mt-2">
                                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                                        <div className="w-2/3 h-full bg-accent-blue rounded-full" />
                                    </div>
                                    <span className="text-[10px] font-bold text-accent-blue">Live</span>
                                </div>
                            </motion.div>

                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
