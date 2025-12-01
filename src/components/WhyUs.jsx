import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cloud, MessageSquare, Award, Clock, Users } from 'lucide-react';

const features = [
    {
        title: "Deep Domain & Engineering Expertise",
        desc: "We combine industry knowledge with cutting-edge tech skills.",
        icon: <Award size={24} />
    },
    {
        title: "End-to-End Ownership",
        desc: "From concept to deployment and maintenance, we handle it all.",
        icon: <Clock size={24} />
    },
    {
        title: "Security & Compliance by Design",
        desc: "Enterprise-grade security standards built into every solution.",
        icon: <ShieldCheck size={24} />
    },
    {
        title: "Cloud & Mobile First",
        desc: "Scalable architectures ready for the modern digital ecosystem.",
        icon: <Cloud size={24} />
    },
    {
        title: "Transparent Communication",
        desc: "Clear updates, honest feedback, and collaborative planning.",
        icon: <MessageSquare size={24} />
    },
    {
        title: "Long-Term Partnership",
        desc: "We grow with you, adapting solutions as your business scales.",
        icon: <Users size={24} />
    }
];

const WhyUs = () => {
    return (
        <section className="py-20 bg-background-paper relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent-teal/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">Why Choose THASMAI?</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        We are more than just developers; we are your strategic technology partners.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-background-card p-6 rounded-xl border border-white/5 hover:border-white/10 hover:bg-white/5 transition-all group"
                        >
                            <div className="w-12 h-12 rounded-lg bg-secondary/20 text-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
