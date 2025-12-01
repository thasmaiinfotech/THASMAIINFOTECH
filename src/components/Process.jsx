import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code, RefreshCw } from 'lucide-react';

const steps = [
    {
        title: "Discover",
        description: "We dive deep to understand your goals, constraints, and existing systems.",
        icon: <Search size={24} />,
        color: "bg-accent-blue"
    },
    {
        title: "Design",
        description: "We architect scalable solutions, UX flows, and a solid technical roadmap.",
        icon: <PenTool size={24} />,
        color: "bg-accent-violet"
    },
    {
        title: "Build",
        description: "Agile implementation with frequent demos and rigorous testing.",
        icon: <Code size={24} />,
        color: "bg-secondary"
    },
    {
        title: "Evolve",
        description: "Continuous monitoring, optimization, and long-term partnership.",
        icon: <RefreshCw size={24} />,
        color: "bg-accent-teal"
    }
];

const Process = () => {
    return (
        <section className="py-20 bg-background overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">How THASMAI Helps You Succeed</h2>
                    <p className="text-gray-400">A clear, collaborative delivery model designed for results.</p>
                </div>

                <div className="relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 z-0" />

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="flex flex-col items-center text-center bg-background"
                            >
                                <div className={`w-16 h-16 rounded-full ${step.color} text-white flex items-center justify-center shadow-lg shadow-black/30 mb-6 relative z-10`}>
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
