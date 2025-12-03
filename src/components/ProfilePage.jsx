import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, Globe, Linkedin, ArrowLeft } from 'lucide-react';
import { teamMembers } from '../data/teamData';

const ProfilePage = () => {
    const { slug } = useParams();
    const member = teamMembers.find(m => m.slug === slug);

    if (!member) {
        return <Navigate to="/" replace />;
    }

    useEffect(() => {
        // Update Title
        document.title = member.seo.title;

        // Update Meta Tags
        const updateMeta = (name, content) => {
            let element = document.querySelector(`meta[name="${name}"]`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute('name', name);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };

        const updateOgMeta = (property, content) => {
            let element = document.querySelector(`meta[property="${property}"]`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute('property', property);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };

        updateMeta('description', member.seo.description);
        updateMeta('author', member.company);

        updateOgMeta('og:title', member.seo.ogTitle);
        updateOgMeta('og:description', member.seo.ogDescription);
        updateOgMeta('og:image', member.photoUrl); // Using relative path, ideally absolute URL
        updateOgMeta('og:url', window.location.href);
        updateOgMeta('og:type', 'profile');

        updateMeta('twitter:card', 'summary_large_image');
        updateMeta('twitter:title', member.seo.twitterTitle);
        updateMeta('twitter:description', member.seo.twitterDescription);
        updateMeta('twitter:image', member.photoUrl);

        // Cleanup function to reset title (optional, but good practice)
        return () => {
            document.title = 'Thasmai Infotech';
        };
    }, [member]);

    return (
        <div className="min-h-screen bg-background pt-24 pb-20">
            <div className="container mx-auto px-6">
                <a href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft size={20} className="mr-2" />
                    Back to Home
                </a>

                <div className="max-w-4xl mx-auto">
                    {/* Hero Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <div className="relative w-48 h-48 mx-auto mb-8">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-secondary to-accent-blue p-[3px]">
                                <div className="w-full h-full rounded-full bg-background overflow-hidden">
                                    <img src={member.photoUrl} alt={member.name} className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="absolute inset-0 rounded-full bg-secondary/20 blur-2xl -z-10" />
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{member.name}</h1>
                        {member.qualifications && (
                            <p className="text-gray-400 text-sm mb-2">{member.qualifications}</p>
                        )}
                        <p className="text-xl text-secondary font-medium mb-2">{member.title}</p>
                        <p className="text-gray-400">{member.company}</p>
                    </motion.div>

                    {/* Contact Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
                    >
                        <div className="bg-white/5 rounded-xl p-4 flex flex-col items-center text-center border border-white/5 hover:border-white/10 transition-colors">
                            <Phone className="text-secondary mb-2" size={24} />
                            <span className="text-sm text-gray-400">Mobile</span>
                            <a href={`tel:${member.contact.mobile}`} className="text-white font-medium hover:text-secondary transition-colors">{member.contact.mobile}</a>
                        </div>
                        <div className="bg-white/5 rounded-xl p-4 flex flex-col items-center text-center border border-white/5 hover:border-white/10 transition-colors">
                            <Mail className="text-secondary mb-2" size={24} />
                            <span className="text-sm text-gray-400">Email</span>
                            <a href={`mailto:${member.contact.email}`} className="text-white font-medium hover:text-secondary transition-colors break-all">{member.contact.email}</a>
                        </div>
                        <div className="bg-white/5 rounded-xl p-4 flex flex-col items-center text-center border border-white/5 hover:border-white/10 transition-colors">
                            <Globe className="text-secondary mb-2" size={24} />
                            <span className="text-sm text-gray-400">Website</span>
                            <a href={member.contact.website} target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-secondary transition-colors">thasmaiinfotech.com</a>
                        </div>
                        {member.contact.linkedin && (
                            <div className="bg-white/5 rounded-xl p-4 flex flex-col items-center text-center border border-white/5 hover:border-white/10 transition-colors">
                                <Linkedin className="text-secondary mb-2" size={24} />
                                <span className="text-sm text-gray-400">LinkedIn</span>
                                <a href={member.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-secondary transition-colors">Connect</a>
                            </div>
                        )}
                    </motion.div>

                    {/* Bio Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white/5 rounded-2xl p-8 border border-white/5"
                    >
                        <h2 className="text-2xl font-bold text-white mb-6">About</h2>
                        <div className="text-gray-300 leading-relaxed space-y-4 whitespace-pre-line">
                            {member.bio}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
