import React from 'react';
import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-background-paper border-t border-white/5 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Info */}
                    <div>
                        <a href="#" className="inline-block mb-6">
                            <img src={logo} alt="Thasmai Infotech" className="h-24 w-auto object-contain" />
                        </a>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Engineering Intelligent Solutions for a Connected World. We help businesses automate, optimize, and scale with confidence.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary transition-colors text-white">
                                <Linkedin size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary transition-colors text-white">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary transition-colors text-white">
                                <Github size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-secondary transition-colors">Home</a></li>
                            <li><a href="#about" className="hover:text-secondary transition-colors">About Us</a></li>
                            <li><a href="#services" className="hover:text-secondary transition-colors">Services</a></li>
                            <li><a href="#insights" className="hover:text-secondary transition-colors">Insights</a></li>
                            <li><a href="#contact" className="hover:text-secondary transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Solutions */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Our Solutions</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-secondary transition-colors">IoT & GPS Tracking</a></li>
                            <li><a href="#" className="hover:text-secondary transition-colors">Financial Analytics</a></li>
                            <li><a href="#" className="hover:text-secondary transition-colors">Gen AI & Agents</a></li>
                            <li><a href="#" className="hover:text-secondary transition-colors">Stock Analysis</a></li>
                            <li><a href="#" className="hover:text-secondary transition-colors">Mobile Development</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <Mail size={18} className="text-secondary mt-0.5" />
                                <span>thasmaiinfotech@gmail.com</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone size={18} className="text-secondary mt-0.5" />
                                <span>+91 94489 10866</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-secondary mt-0.5" />
                                <span>Mangalore, Karnataka, India</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} THASMAI INFOTECH PRIVATE LIMITED. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
