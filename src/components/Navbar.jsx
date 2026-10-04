import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

import logo from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: isHome ? '#' : '/' },
        { name: 'About', href: isHome ? '#about' : '/#about' },
        { name: 'Services', href: isHome ? '#services' : '/#services' },
        { name: 'Industries', href: isHome ? '#industries' : '/#industries' },
        { name: 'FAI AS9102', href: 'https://fai.thasmaiinfotech.com/' },
        { name: 'AI & Agents', href: isHome ? '#ai-agents' : '/#ai-agents' },
        { name: 'Training', href: isHome ? '#programs' : '/#programs' },
        { name: 'Insights', href: isHome ? '#insights' : '/#insights' },
        { name: 'Contact', href: isHome ? '#contact' : '/#contact' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="/" className="flex items-center gap-2">
                    <img src={logo} alt="Thasmai Infotech" className="h-20 w-auto object-contain" />
                </a>

                {/* Desktop Menu: the full link row only fits beside the logo from xl up */}
                <div className="hidden xl:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                            {link.name}
                        </a>
                    ))}
                    <a href={isHome ? "#contact" : "/#contact"} className="px-6 py-2.5 bg-secondary text-white text-sm font-medium rounded-full hover:bg-secondary-hover transition-colors shadow-lg shadow-secondary/25">
                        Let's Talk
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="xl:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isOpen}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="xl:hidden bg-background-card border-t border-white/10 overflow-hidden"
                    >
                        {/* Scrolls inside itself when the menu is taller than the screen */}
                        <div className="flex flex-col px-6 py-8 space-y-4 max-h-[calc(100dvh-8rem)] overflow-y-auto">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-gray-300 hover:text-white"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href={isHome ? "#contact" : "/#contact"}
                                className="inline-block text-center px-6 py-3 bg-secondary text-white font-medium rounded-xl hover:bg-secondary-hover transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Let's Talk
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
