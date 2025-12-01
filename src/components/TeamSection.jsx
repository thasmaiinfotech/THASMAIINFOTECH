import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

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
        <p className="text-sm text-gray-400 font-medium mb-4">{member.designation}</p>
        <p className="text-sm text-gray-500 leading-relaxed mb-6 line-clamp-4">
            {member.description}
        </p>

        <a
            href={member.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium hover:bg-secondary hover:text-white transition-all border border-secondary/20 hover:border-secondary"
        >
            <Linkedin size={16} />
            <span>Connect</span>
        </a>
    </motion.div >
);

const teamMembers = [
    {
        id: 1,
        photoUrl: "/images/team/rammohan.png",
        name: "Ram Mohan",
        designation: "Founder & Managing Director",
        description: "Leads business strategy, operations, and client engagement with a focus on growth, partnerships, and value creation. Drives organizational vision and ensures seamless execution across all business verticals.",
        linkedinUrl: "https://www.linkedin.com/in/member-one"
    },
    {
        id: 2,
        photoUrl: "/images/team/sudarshanakarkala.jpeg",
        name: "Sudarshana Karkala",
        designation: "Co-Founder & Executive Director",
        description: "Leads architecture, product innovation, and engineering execution across IoT, AI, and software systems. Combines deep technical expertise with business insight to deliver scalable, secure, and impactful solutions for emerging digital ecosystems.",
        linkedinUrl: "https://www.linkedin.com/in/sudarshanakarkala"
    },
    {
        id: 3,
        photoUrl: "/images/team/advisor.png",
        name: "Strategic Advisor",
        designation: "Strategic Technology Advisor",
        description: "Provides architectural direction and contributes to core technical decisions across product development, infrastructure design, and scalability planning. A key knowledge backbone supporting high-impact engineering initiatives",
        linkedinUrl: "https://www.linkedin.com/in/member-three"
    }

];

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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member) => (
                        <TeamCard key={member.id} member={member} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
