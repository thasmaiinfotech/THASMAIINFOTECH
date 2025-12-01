import React from 'react';
import { motion } from 'framer-motion';
import { Zap, DollarSign, ShoppingBag, Factory, GraduationCap, Rocket } from 'lucide-react';

const industries = [
    {
        title: "EV & Automotive",
        description: "Smart mobility solutions and battery analytics.",
        icon: <Zap size={24} />,
        color: "bg-green-500/10 text-green-400"
    },
    {
        title: "Finance & Fintech",
        description: "Secure trading platforms and risk analysis.",
        icon: <DollarSign size={24} />,
        color: "bg-blue-500/10 text-blue-400"
    },
    {
        title: "Retail & E-Commerce",
        description: "Omnichannel experiences and inventory AI.",
        icon: <ShoppingBag size={24} />,
        color: "bg-purple-500/10 text-purple-400"
    },
    {
        title: "Manufacturing 4.0",
        description: "Predictive maintenance and IoT monitoring.",
        icon: <Factory size={24} />,
        color: "bg-orange-500/10 text-orange-400"
    },
    {
        title: "Education & EdTech",
        description: "Personalized learning and campus management.",
        icon: <GraduationCap size={24} />,
        color: "bg-pink-500/10 text-pink-400"
    },
    {
        title: "Startups & SMEs",
        description: "Scalable tech foundations for rapid growth.",
        icon: <Rocket size={24} />,
        color: "bg-indigo-500/10 text-indigo-400"
    }
];

const Industries = () => {
    return (
        <section id="industries" className="py-20 bg-background-paper">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl lg:text-4xl font-bold mb-4 text-white"
                    >
                        Industries We Serve
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        We adapt our deep technical expertise to fit the unique challenges of your domain.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((industry, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-background-card p-6 rounded-xl border border-white/5 shadow-sm hover:shadow-md hover:border-white/10 transition-all flex items-start gap-4"
                        >
                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${industry.color}`}>
                                {industry.icon}
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1 text-white">{industry.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">{industry.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Industries;
