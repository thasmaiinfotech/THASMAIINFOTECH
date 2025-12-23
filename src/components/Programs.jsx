import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, BookOpen, ArrowRight, X, CheckCircle2, IndianRupee, Clock, FileText } from 'lucide-react';

const programs = [
    {
        id: 'internship',
        title: "Internship Programs",
        description: "Mentorship-driven internships with real-world EV, IoT, and GenAI projects. Includes certification, resume building, and job-readiness support.",
        icon: <GraduationCap size={24} />,
        tags: ["INTERNSHIPS", "EV PROJECTS", "GENAI", "MENTORSHIP", "CERTIFICATION"],
        color: "text-accent-teal bg-accent-teal/10",
        pdfLink: "/training/Thasmai - Internship and Faculty Development Program .pdf",
        details: {
            headline: "Internship Collaboration (3 Months)",
            fee: "₹10,000 – ₹25,000 (+GST) per student (30 hours mentorship)",
            includes: [
                "Industry mentorship",
                "Real-world EV & AI projects",
                "Resume building & mock interviews",
                "Certification & job assistance"
            ],
            extension: {
                title: "Optional extension (top performers)",
                description: "3 more months on live projects",
                fee: "₹10,000 (+GST) per month for 10 hours mentorship"
            },
            cta: "Request Internship Proposal"
        }
    },
    {
        id: 'fdp',
        title: "Faculty Development Program (FDP)",
        description: "Advanced GenAI & Agentic AI training for faculty with theory + hands-on labs + mini project. Designed for engineering colleges and universities.",
        icon: <BookOpen size={24} />,
        tags: ["FDP", "GENAI", "AGENTIC AI", "LABS", "MINI PROJECT"],
        color: "text-accent-violet bg-accent-violet/10",
        pdfLink: "/training/Thasmai - Internship and Faculty Development Program .pdf",
        syllabusLink: "/training/ai/Thasmai - Gen AI & Agentic AI - Design Patterns.pdf",
        details: {
            headline: "FDP Package (Theory + Lab + Mini Project)",
            packageFee: "₹2,50,000 (+GST)",
            workshopOptions: [
                { label: "1-Day Workshop", duration: "8 hrs", fee: "₹65,000 (+GST)" },
                { label: "2-Day Workshop", duration: "16 hrs", fee: "₹1,25,000 (+GST)" },
                { label: "2-Day + 24-hr Online", duration: "40 hrs", fee: "₹2,50,000 (+GST)" }
            ],
            cta: "Book FDP / Get Quote"
        }
    }
];

const Programs = () => {
    const [selectedProgram, setSelectedProgram] = useState(null);

    const openModal = (program) => setSelectedProgram(program);
    const closeModal = () => setSelectedProgram(null);

    return (
        <section id="programs" className="py-20 bg-background border-y border-white/5 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-secondary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-4 block"
                    >
                        Academic Partnerships
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl lg:text-4xl font-bold mb-4 text-white"
                    >
                        Programs for Colleges & Institutes
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 max-w-2xl mx-auto"
                    >
                        Internship Tracks, Faculty Development, and Campus Collaboration
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {programs.map((program, index) => (
                        <motion.div
                            key={program.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-background-card rounded-2xl p-6 border border-white/5 shadow-lg hover:shadow-xl hover:shadow-secondary/5 transition-all duration-300 group hover:-translate-y-1 flex flex-col h-full relative"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${program.color} group-hover:scale-110 transition-transform shadow-lg shrink-0`}>
                                    {program.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white group-hover:text-secondary transition-colors leading-tight">
                                    {program.title}
                                </h3>
                            </div>
                            <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow">
                                {program.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {program.tags.map((tag, idx) => (
                                    <span key={idx} className="px-2.5 py-1 bg-white/5 text-gray-400 text-[10px] font-bold uppercase tracking-widest rounded-md border border-white/5 group-hover:border-secondary/20 transition-colors">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="flex items-center justify-between mt-auto">
                                <button
                                    onClick={() => openModal(program)}
                                    className="inline-flex items-center text-sm font-bold text-secondary hover:text-secondary-hover transition-colors group/btn"
                                >
                                    Learn More <ArrowRight size={18} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                                <div className="flex items-center gap-2">
                                    {program.syllabusLink && (
                                        <a
                                            href={program.syllabusLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 p-2 text-gray-500 hover:text-white transition-all group/icon"
                                            title="View Syllabus / Topics"
                                        >
                                            <span className="text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover/icon:opacity-100 transition-opacity hidden sm:inline">Syllabus</span>
                                            <FileText size={18} className="text-secondary" />
                                        </a>
                                    )}
                                    <a
                                        href={program.pdfLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 p-2 mr-[-8px] text-gray-500 hover:text-white transition-all group/icon"
                                        title="View FAQ & Program Details"
                                    >
                                        <span className="text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover/icon:opacity-100 transition-opacity hidden sm:inline">FAQ / Details</span>
                                        <FileText size={18} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal Overlay */}
            <AnimatePresence>
                {selectedProgram && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeModal}
                            className="absolute inset-0 bg-background/90 backdrop-blur-md"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-2xl bg-[#0F172A] border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
                        >
                            {/* Close Button */}
                            <button
                                onClick={closeModal}
                                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all z-10"
                            >
                                <X size={20} />
                            </button>

                            <div className="p-8 md:p-10 pt-12">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${selectedProgram.color} shadow-lg`}>
                                        {selectedProgram.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">{selectedProgram.title}</h3>
                                        <div className="flex flex-wrap gap-4 mt-2">
                                            <a
                                                href={selectedProgram.pdfLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-500 hover:text-secondary text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 transition-colors"
                                            >
                                                <FileText size={14} /> FAQ / Program Details
                                            </a>
                                            {selectedProgram.syllabusLink && (
                                                <a
                                                    href={selectedProgram.syllabusLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-gray-500 hover:text-secondary text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 transition-colors"
                                                >
                                                    <FileText size={14} className="text-secondary" /> Syllabus / Topics
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-8">
                                    {/* Headline and Fee */}
                                    <div>
                                        <h4 className="text-secondary font-bold text-lg mb-3">{selectedProgram.details.headline}</h4>
                                        <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 relative overflow-hidden group">
                                            <div className="absolute top-0 left-0 w-1 h-full bg-secondary opacity-50" />
                                            <IndianRupee size={22} className="text-secondary mt-1 shrink-0" />
                                            <div>
                                                <p className="text-white text-lg font-bold leading-tight">
                                                    {selectedProgram.details.fee || selectedProgram.details.packageFee}
                                                </p>
                                                <p className="text-[10px] text-gray-500 mt-2 uppercase tracking-widest font-black">Investment / Package Fee</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Program Specific Content */}
                                    {selectedProgram.id === 'internship' && (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div>
                                                <h5 className="text-white font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                                                    <CheckCircle2 size={16} className="text-accent-teal" />
                                                    What's Included
                                                </h5>
                                                <ul className="space-y-3">
                                                    {selectedProgram.details.includes.map((item, idx) => (
                                                        <li key={idx} className="flex items-start gap-3 text-gray-400 text-sm leading-snug">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-accent-teal/40 mt-1.5 shrink-0" />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="p-6 rounded-2xl bg-secondary/5 border border-secondary/10 relative">
                                                <h5 className="text-secondary font-black text-[10px] mb-3 uppercase tracking-[0.2em]">
                                                    {selectedProgram.details.extension.title}
                                                </h5>
                                                <p className="text-white text-sm font-bold mb-3 leading-relaxed">
                                                    {selectedProgram.details.extension.description}
                                                </p>
                                                <div className="h-px w-full bg-white/5 my-3" />
                                                <p className="text-xs text-gray-500 leading-relaxed font-medium">
                                                    {selectedProgram.details.extension.fee}
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {selectedProgram.id === 'fdp' && (
                                        <div>
                                            <h5 className="text-white font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                                                <Clock size={16} className="text-accent-violet" />
                                                Workshop Curated Tiers
                                            </h5>
                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                                {selectedProgram.details.workshopOptions.map((option, idx) => (
                                                    <div key={idx} className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-secondary/30 transition-all group/opt hover:bg-secondary/[0.02]">
                                                        <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-2">{option.label}</p>
                                                        <p className="text-white font-bold mb-2 text-base">{option.duration}</p>
                                                        <p className="text-secondary font-bold text-[11px] leading-tight">{option.fee}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* CTA Button */}
                                    <div className="pt-4">
                                        <a
                                            href="#contact"
                                            onClick={closeModal}
                                            className="w-full inline-flex items-center justify-center p-4 rounded-2xl bg-secondary hover:bg-secondary-hover text-white font-black uppercase tracking-widest text-sm transition-all shadow-xl shadow-secondary/20 group/cta"
                                        >
                                            {selectedProgram.details.cta}
                                            <ArrowRight size={18} className="ml-2 group-hover/cta:translate-x-1 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Programs;
