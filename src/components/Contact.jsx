import React from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-background-paper">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Left Content */}
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">Let's Build Something Great Together.</h2>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Ready to transform your business with intelligent technology? Schedule a consultation with our experts today. We usually respond within 24 hours.
                        </p>

                        <div className="bg-background-card p-8 rounded-2xl shadow-sm border border-white/5">
                            <h3 className="font-bold text-lg mb-4 text-white">Office Location</h3>
                            <p className="text-gray-400 mb-6">
                                THASMAI INFOTECH PRIVATE LIMITED<br />
                                Mangalore, Karnataka, India
                            </p>
                            <div className="h-48 bg-white/5 rounded-xl flex items-center justify-center text-gray-500 border border-white/5">
                                Map Placeholder
                            </div>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="bg-background-card p-8 rounded-2xl shadow-lg border border-white/5">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Full Name *</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg bg-background border border-white/10 text-white focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all placeholder-gray-600" placeholder="John Doe" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Company Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg bg-background border border-white/10 text-white focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all placeholder-gray-600" placeholder="Company Ltd." />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Work Email *</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-lg bg-background border border-white/10 text-white focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all placeholder-gray-600" placeholder="john@company.com" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                                    <input type="tel" className="w-full px-4 py-3 rounded-lg bg-background border border-white/10 text-white focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all placeholder-gray-600" placeholder="+91 98765 43210" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Area of Interest</label>
                                <select className="w-full px-4 py-3 rounded-lg bg-background border border-white/10 text-white focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all">
                                    <option>IoT Solutions</option>
                                    <option>Financial Analytics</option>
                                    <option>Gen AI & Agentic AI</option>
                                    <option>Stock Analysis</option>
                                    <option>GPS Asset Tracking</option>
                                    <option>Mobile App Development</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea rows="4" className="w-full px-4 py-3 rounded-lg bg-background border border-white/10 text-white focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all placeholder-gray-600" placeholder="Tell us about your project..."></textarea>
                            </div>

                            <button type="submit" className="w-full py-4 bg-secondary text-white font-bold rounded-xl hover:bg-secondary-hover transition-colors shadow-lg shadow-secondary/25 flex items-center justify-center gap-2">
                                Send Message <Send size={18} />
                            </button>

                            <p className="text-xs text-center text-gray-500 mt-4">
                                By sending this message, you agree to our Privacy Policy.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
