import React from 'react';
import { ArrowRight } from 'lucide-react';

const posts = [
    {
        category: "Gen AI",
        title: "The Future of Agentic AI in Enterprise",
        excerpt: "How autonomous agents are reshaping business workflows and decision making.",
        date: "Oct 12, 2023",
        color: "text-purple-400"
    },
    {
        category: "IoT",
        title: "Securing the Edge: IoT Best Practices",
        excerpt: "Essential security protocols for large-scale device deployments.",
        date: "Sep 28, 2023",
        color: "text-blue-400"
    },
    {
        category: "Finance Analytics",
        title: "Real-time Profitability Analysis",
        excerpt: "Moving beyond month-end reports to day-end actionable insights.",
        date: "Sep 15, 2023",
        color: "text-green-400"
    }
];

const Insights = () => {
    return (
        <section id="insights" className="py-20 bg-background">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">Insights & Updates</h2>
                        <p className="text-gray-400">Latest thinking from our tech experts.</p>
                    </div>
                    <a href="#" className="text-secondary font-semibold hover:text-secondary-hover flex items-center gap-2">
                        View All Articles <ArrowRight size={18} />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <div key={index} className="group cursor-pointer">
                            <div className="bg-background-card rounded-xl h-48 mb-6 overflow-hidden relative border border-white/5">
                                <div className="absolute inset-0 bg-white/5 group-hover:scale-105 transition-transform duration-500" />
                                {/* Placeholder for image */}
                                <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium">
                                    Image Placeholder
                                </div>
                            </div>
                            <div className={`text-xs font-bold uppercase tracking-wider mb-2 ${post.color}`}>
                                {post.category}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-secondary transition-colors">
                                {post.title}
                            </h3>
                            <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                {post.excerpt}
                            </p>
                            <span className="text-xs text-gray-500">{post.date}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Insights;
