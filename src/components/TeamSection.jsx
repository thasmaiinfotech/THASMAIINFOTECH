import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { teamMembers } from '../data/teamData';

const TeamCard = ({ member }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/5 hover:border-white/10 hover:shadow-lg hover:shadow-secondary/10 hover:scale-[1.02] transition-all duration-300 group flex flex-col items-center text-center"
    >
        <div className="relative mb-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-secondary to-accent-blue p-[2px]">
                <div className="w-full h-full rounded-full bg-background-card overflow-hidden flex items-center justify-center">
                    <img src={member.photoUrl} alt={member.name} className="w-full h-full object-cover" />
                </div>
            </div>
            <div className="absolute inset-0 rounded-full bg-secondary/20 blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
        <p className="text-sm text-gray-400 font-medium mb-4">{member.title}</p>
        <p className="text-sm text-gray-500 leading-relaxed mb-6 line-clamp-4">
            {member.bio}
        </p>

        <Link
            to={`/team/${member.slug}`}
            className="mt-auto inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium hover:bg-secondary hover:text-white transition-all border border-secondary/20 hover:border-secondary"
        >
            <span>View Profile</span>
            <ArrowRight size={16} />
        </Link>
    </motion.div >
);

const TeamSection = () => {
    return (
        <section id="team" className="py-20 bg-background relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl lg:text-4xl font-bold mb-4 text-white"
                    >
                        Our Team
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 max-w-2xl mx-auto"
                    >
                        Meet the people engineering intelligent solutions for a connected world.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {teamMembers.map((member) => (
                        <TeamCard key={member.id} member={member} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
