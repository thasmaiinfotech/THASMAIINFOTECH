import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Server, BarChart3, Truck } from 'lucide-react';

const domains = [
    {
        id: 'retail',
        label: 'Retail & Commerce',
        icon: <ShoppingCart size={20} />,
        solutions: [
            { title: 'Better Store Layout', desc: 'AI-driven insights from sales data to optimize shelf placement.' },
            { title: 'Seamless CX', desc: 'Omnichannel apps and personalized notifications.' },
            { title: 'Automated Feedback', desc: 'Sentiment analysis on customer reviews and feedback.' },
            { title: 'Centralized Ops', desc: 'Single view dashboard for inventory and staff management.' }
        ]
    },
    {
        id: 'tech',
        label: 'Technology',
        icon: <Server size={20} />,
        solutions: [
            { title: 'Predictive Maintenance', desc: 'AI models to predict infrastructure failures before they happen.' },
            { title: 'Code Gen Assist', desc: 'Internal developer tools powered by GenAI.' },
            { title: 'Infra Optimization', desc: 'Automated cost and performance tuning for cloud resources.' },
            { title: 'Intelligent Debugging', desc: 'Log analysis and root cause detection with AI.' }
        ]
    },
    {
        id: 'finance',
        label: 'Finance',
        icon: <BarChart3 size={20} />,
        solutions: [
            { title: 'Fraud Detection', desc: 'Real-time transaction monitoring and anomaly detection.' },
            { title: 'Algorithmic Trading', desc: 'High-frequency trading strategies and backtesting.' },
            { title: 'Risk Assessment', desc: 'Credit scoring and loan approval automation.' },
            { title: 'Personalized Banking', desc: 'AI chatbots for customer support and advice.' }
        ]
    },
    {
        id: 'logistics',
        label: 'Logistics',
        icon: <Truck size={20} />,
        solutions: [
            { title: 'Route Optimization', desc: 'Dynamic routing based on traffic and weather.' },
            { title: 'Fleet Management', desc: 'Real-time tracking and driver behavior analysis.' },
            { title: 'Supply Chain Vis', desc: 'End-to-end visibility of goods in transit.' },
            { title: 'Demand Forecasting', desc: 'Predictive analytics for inventory planning.' }
        ]
    }
];

const Solutions = () => {
    const [activeTab, setActiveTab] = useState(domains[0].id);

    return (
        <section className="py-20 bg-background-paper">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">Tailored Solutions by Domain</h2>
                    <p className="text-gray-400">Specialized tools for your specific industry challenges.</p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {domains.map((domain) => (
                        <button
                            key={domain.id}
                            onClick={() => setActiveTab(domain.id)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${activeTab === domain.id
                                    ? 'bg-secondary text-white shadow-lg shadow-secondary/25 scale-105'
                                    : 'bg-background-card text-gray-400 hover:bg-white/5 hover:text-white border border-white/5'
                                }`}
                        >
                            {domain.icon}
                            {domain.label}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="relative min-h-[300px]">
                    <AnimatePresence mode="wait">
                        {domains.map((domain) => (
                            domain.id === activeTab && (
                                <motion.div
                                    key={domain.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                                >
                                    {domain.solutions.map((sol, idx) => (
                                        <div key={idx} className="bg-background-card p-6 rounded-xl shadow-sm border border-white/5 hover:border-white/10 hover:shadow-md transition-all">
                                            <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center mb-4 font-bold">
                                                {idx + 1}
                                            </div>
                                            <h3 className="font-bold text-lg mb-2 text-white">{sol.title}</h3>
                                            <p className="text-sm text-gray-400 leading-relaxed">{sol.desc}</p>
                                        </div>
                                    ))}
                                </motion.div>
                            )
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Solutions;
