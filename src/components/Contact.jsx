import React, { useRef, useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setError(false);
        setSuccess(false);

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
        // Sign up at https://www.emailjs.com/
        const SERVICE_ID = 'service_m3a23ca';
        const TEMPLATE_ID = 'template_zjconis';
        const PUBLIC_KEY = 'Zbqw6nK9980pyPpNe';

        emailjs
            .sendForm(
                SERVICE_ID,
                TEMPLATE_ID,
                formRef.current,
                {
                    publicKey: PUBLIC_KEY,
                }
            )
            .then(
                () => {
                    setLoading(false);
                    setSuccess(true);
                    formRef.current.reset();
                    // Reset success message after 5 seconds
                    setTimeout(() => setSuccess(false), 5000);
                },
                (error) => {
                    console.error('FAILED...', error.text);
                    setLoading(false);
                    setError(true);
                }
            );
    };

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
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Full Name *</label>
                                    <input
                                        type="text"
                                        name="user_name"
                                        className="w-full px-4 py-3 rounded-lg bg-background border border-white/10 text-white focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all placeholder-gray-600"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Company Name</label>
                                    <input
                                        type="text"
                                        name="company_name"
                                        className="w-full px-4 py-3 rounded-lg bg-background border border-white/10 text-white focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all placeholder-gray-600"
                                        placeholder="Company Ltd."
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Work Email *</label>
                                    <input
                                        type="email"
                                        name="user_email"
                                        className="w-full px-4 py-3 rounded-lg bg-background border border-white/10 text-white focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all placeholder-gray-600"
                                        placeholder="john@company.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="user_phone"
                                        className="w-full px-4 py-3 rounded-lg bg-background border border-white/10 text-white focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all placeholder-gray-600"
                                        placeholder="+91 98765 43210"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Area of Interest</label>
                                <select
                                    name="interest"
                                    className="w-full px-4 py-3 rounded-lg bg-background border border-white/10 text-white focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                                >
                                    <option value="IoT Solutions">IoT Solutions</option>
                                    <option value="Financial Analytics">Financial Analytics</option>
                                    <option value="Gen AI & Agentic AI">Gen AI & Agentic AI</option>
                                    <option value="Stock Analysis">Stock Analysis</option>
                                    <option value="GPS Asset Tracking">GPS Asset Tracking</option>
                                    <option value="Mobile App Development">Mobile App Development</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg bg-background border border-white/10 text-white focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all placeholder-gray-600"
                                    placeholder="Tell us about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-4 bg-secondary text-white font-bold rounded-xl hover:bg-secondary-hover transition-colors shadow-lg shadow-secondary/25 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <span>Sending...</span>
                                ) : success ? (
                                    <>
                                        Message Sent! <CheckCircle size={18} />
                                    </>
                                ) : error ? (
                                    <>
                                        Try Again <AlertCircle size={18} />
                                    </>
                                ) : (
                                    <>
                                        Send Message <Send size={18} />
                                    </>
                                )}
                            </button>

                            {success && (
                                <p className="text-green-400 text-sm text-center mt-2">
                                    Thank you! We'll be in touch shortly.
                                </p>
                            )}
                            {error && (
                                <p className="text-red-400 text-sm text-center mt-2">
                                    Something went wrong. Please try again later or email us directly.
                                </p>
                            )}

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
