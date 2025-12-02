import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, TrendingUp, LineChart, Brain, Map, Users, Smartphone, Cpu, ArrowRight } from 'lucide-react';

const services = [
    {
        title: "IoT Solutions",
        description: "Device connectivity, sensor integration, MQTT/REST APIs, dashboards, and alerts.",
        icon: <Wifi size={24} />,
        tags: ["IoT", "MQTT", "Edge Devices", "Cloud Integration"],
        color: "text-accent-blue bg-accent-blue/10",
        link: "#"
    },
    {
        title: "Financial Solutions",
        description: "Billing automation, reconciliation dashboards, and profitability analytics.",
        icon: <TrendingUp size={24} />,
        tags: ["Billing Automation", "BI Dashboards", "Reports"],
        color: "text-green-400 bg-green-400/10",
        link: "#"
    },
    {
        title: "Stock Analysis & Analytics",
        description: "Tools for market data ingestion, portfolio analytics, and actionable insights.",
        icon: <LineChart size={24} />,
        tags: ["Data Pipelines", "Backtesting", "Visualization"],
        color: "text-accent-violet bg-accent-violet/10",
        link: "#"
    },
    {
        title: "Gen AI & Agentic AI",
        description: "LLM-powered assistants, multi-agent workflows, document Q&A, and automation.",
        icon: <Brain size={24} />,
        tags: ["LLMs", "RAG", "Agentic AI", "Training"],
        color: "text-secondary bg-secondary/10",
        link: "/training/ai/Thasmai - Gen AI & Agentic AI - Design Patterns.pdf"
    },
    {
        title: "GPS-Based Asset Management",
        description: "Real-time tracking for vehicles/assets, geofencing, alerts, trip insights.",
        icon: <Map size={24} />,
        tags: ["GPS", "Telematics", "Maps"],
        color: "text-orange-400 bg-orange-400/10",
        link: "#"
    },
    {
        title: "Project-Based Consultancy",
        description: "Architecture, delivery, and coaching for complex projects.",
        icon: <Users size={24} />,
        tags: ["Consulting", "Architecture", "Delivery"],
        color: "text-accent-teal bg-accent-teal/10",
        link: "#"
    },
    {
        title: "Mobile App Development",
        description: "Native and cross-platform apps for iOS and Android, from idea to launch.",
        icon: <Smartphone size={24} />,
        tags: ["iOS", "Android", "Swift", "Kotlin"],
        color: "text-pink-400 bg-pink-400/10",
        link: "#"
    },
    {
        title: "AI Solutions",
        description: "Custom ML models, predictive analytics, and AI integration into existing systems.",
        icon: <Cpu size={24} />,
        tags: ["ML Models", "Prediction", "MLOps"],
        color: "text-red-400 bg-red-400/10",
        link: "#"
    }
];

const Services = () => {
    return (
        <section id="services" className="py-20 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl lg:text-4xl font-bold mb-4 text-white"
                    >
                        Solutions We Deliver
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 max-w-2xl mx-auto"
                    >
                        End-to-end technology services tailored to your business needs, from IoT to Advanced AI.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-background-card rounded-2xl p-6 border border-white/5 shadow-lg hover:shadow-xl hover:shadow-secondary/5 transition-all duration-300 group hover:-translate-y-1"
                        >
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${service.color} group-hover:scale-110 transition-transform`}>
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-secondary transition-colors">{service.title}</h3>
                            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                {service.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {service.tags.map((tag, idx) => (
                                    <span key={idx} className="px-2 py-1 bg-white/5 text-gray-400 text-[10px] font-medium uppercase tracking-wide rounded-md border border-white/5">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <a
                                href={service.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-sm font-semibold text-secondary hover:text-secondary-hover transition-colors"
                            >
                                Learn More <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
