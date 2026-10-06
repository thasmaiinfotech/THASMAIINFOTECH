import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Handshake, Route } from 'lucide-react';
import { logEvent } from '../utils/analytics';
import { busBuddy, busBuddyLinks } from '../data/busBuddy';
import BusBuddyJourney from './BusBuddyJourney';

const focusRing = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const BusBuddy = () => {
    return (
        <section
            id="busbuddy"
            aria-labelledby="busbuddy-heading"
            className="relative py-20 lg:py-24 overflow-hidden bg-background border-b border-white/5"
        >
            {/* Background glow */}
            <div aria-hidden="true" className="absolute top-1/3 -left-24 w-96 h-96 bg-accent-teal/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="mb-12">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold tracking-wider text-accent-teal uppercase bg-accent-teal/10 rounded-full border border-accent-teal/20">
                        <Route size={12} aria-hidden="true" /> {busBuddy.label}
                    </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Product information */}
                    <div className="flex flex-col justify-center text-left">
                        <h2 id="busbuddy-heading" className="text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white">
                            Bus<span className="text-gradient">Buddy</span>
                        </h2>

                        <h3 className="text-lg lg:text-xl font-medium text-gray-300 mb-5 leading-relaxed">
                            {busBuddy.subtitle}
                        </h3>

                        {/* Product status */}
                        <p className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-6 text-sm text-gray-400">
                            <span className="px-2.5 py-1 text-xs font-semibold text-violet-300 bg-secondary/10 rounded-md border border-secondary/20 whitespace-nowrap">
                                {busBuddy.status}
                            </span>
                            {busBuddy.statusNote}
                        </p>

                        {busBuddy.copy.map((paragraph) => (
                            <p key={paragraph} className="text-gray-400 mb-8 leading-relaxed text-base">
                                {paragraph}
                            </p>
                        ))}

                        {/* Feature chips */}
                        <ul className="flex flex-wrap gap-2.5 mb-10">
                            {busBuddy.chips.map((chip) => (
                                <li
                                    key={chip}
                                    className="px-3 py-1.5 bg-white/5 text-gray-300 text-xs font-medium rounded-full border border-white/10"
                                >
                                    {chip}
                                </li>
                            ))}
                        </ul>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to={busBuddyLinks.page}
                                onClick={() => logEvent('click_explore_busbuddy', 'BusBuddy Section', busBuddy.name)}
                                className={`px-8 py-4 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary-hover transition-all shadow-lg shadow-secondary/25 flex items-center justify-center gap-2 group text-center ${focusRing}`}
                            >
                                Explore BusBuddy
                                <ArrowRight size={18} aria-hidden="true" className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <a
                                href={busBuddyLinks.pilot}
                                onClick={() => logEvent('click_pilot_with_us', 'BusBuddy Section', busBuddy.name)}
                                className={`px-8 py-4 bg-white/5 text-white border border-white/10 font-semibold rounded-xl hover:bg-white/10 transition-all backdrop-blur-sm flex items-center justify-center gap-2 text-center ${focusRing}`}
                            >
                                <Handshake size={18} aria-hidden="true" />
                                Pilot With Us
                            </a>
                        </div>

                        {/* Leadership */}
                        <div className="flex items-center gap-4 mt-10 pt-8 border-t border-white/10">
                            <span aria-hidden="true" className="w-12 h-12 shrink-0 rounded-full bg-gradient-to-br from-secondary to-accent-teal p-[2px]">
                                <span className="flex items-center justify-center w-full h-full rounded-full bg-background-card font-heading text-sm font-bold text-white">
                                    {busBuddy.lead.initials}
                                </span>
                            </span>
                            <div>
                                <p className="font-heading font-semibold text-white">{busBuddy.lead.name}</p>
                                <p className="text-sm text-gray-400">{busBuddy.lead.title}</p>
                                <p className="text-xs text-gray-500">{busBuddy.lead.company}</p>
                            </div>
                        </div>
                    </div>

                    {/* Journey preview */}
                    <div>
                        <BusBuddyJourney />
                        <p className="mt-4 text-xs text-gray-500 text-center">{busBuddy.emergencyNote}</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BusBuddy;
