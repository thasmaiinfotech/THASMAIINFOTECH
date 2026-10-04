import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Satellite } from 'lucide-react';
import { logEvent } from '../utils/analytics';
import { spaceLinks, spaceProgram } from '../data/spaceProgram';

const chips = [
    "Satellite Engineering",
    "CubeTwin",
    "CanSat",
    "Model Rocketry",
    "Avionics",
    "Telemetry",
    "Ground Station",
    "Competition Readiness"
];

const stats = [
    { label: "Program initiated", value: spaceProgram.initiatedShort },
    { label: "First Batch", value: spaceProgram.firstBatch },
    { label: "Annual Program", value: spaceProgram.duration }
];

const focusRing = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-background-paper";

// Drawing callouts are too small to read at phone widths, so they only show from sm up
const callout = "hidden sm:block fill-gray-400 font-mono text-[10px] tracking-wider";

const MissionSchematic = () => (
    <svg
        viewBox="0 0 520 400"
        className="w-full h-full relative z-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Technical line drawing of a model rocket on its launch rail, its flight path to apogee, a CanSat descending under a parachute and a ground station receiving telemetry"
    >
        {/* Registration marks */}
        <path d="M16 28V16H28M492 16H504V28M16 372V384H28M492 384H504V372" className="stroke-white/20" />

        {/* Orbital lines */}
        <circle cx="600" cy="-200" r="250" className="stroke-white/10" />
        <circle cx="600" cy="-200" r="300" strokeDasharray="3 9" className="stroke-secondary/50 motion-safe:animate-dash-flow" />
        <circle cx="600" cy="-200" r="350" className="stroke-white/10" />
        <g transform="translate(450 60) rotate(30)" className="stroke-violet-300">
            <rect x="-4" y="-4" width="8" height="8" className="fill-background" />
            <path d="M-15 -3H-6V3H-15ZM6 -3H15V3H6Z" />
        </g>

        {/* Ground and launch rail */}
        <path d="M24 322H496" className="stroke-white/20" />
        <path d="M164 150V322M160 180H164M160 300H164" className="stroke-white/20" />
        <rect x="136" y="316" width="28" height="6" className="stroke-white/30" />

        {/* Model rocket */}
        <path d="M150 124V330" strokeDasharray="10 3 2 3" className="stroke-accent-teal/40" />
        <g className="stroke-gray-300" strokeWidth="1.25" strokeLinejoin="round">
            <path d="M140 176C140 158 146 142 150 134C154 142 160 158 160 176" />
            <path d="M140 176H160V306H140Z" className="fill-background-card/60" />
            <path d="M140 208H160M140 236H160" />
            <path d="M140 274L122 314L140 304ZM160 274L178 314L160 304Z" />
            <path d="M145 306L143 316H157L155 306" />
        </g>

        {/* Centre of gravity and centre of pressure */}
        <circle cx="150" cy="222" r="5" className="stroke-white" />
        <path d="M150 222V217A5 5 0 0 1 155 222ZM150 222V227A5 5 0 0 1 145 222Z" className="fill-white" />
        <circle cx="150" cy="262" r="5" className="stroke-accent-teal" />
        <circle cx="150" cy="262" r="1.5" className="fill-accent-teal" />

        {/* Flight path to apogee, then payload descent */}
        <path d="M150 128C162 84 214 50 284 50" strokeDasharray="4 8" strokeWidth="1.25" className="stroke-secondary motion-safe:animate-dash-flow" />
        <path d="M296 54C326 64 350 92 358 120" strokeDasharray="2 6" className="stroke-white/30" />
        <circle cx="290" cy="50" r="3.5" className="fill-background stroke-accent-teal" />

        {/* CanSat under parachute */}
        <g className="stroke-white/30">
            <path d="M326 150L360 186M343 150L360 186M360 150V186M377 150L360 186M394 150L360 186" />
        </g>
        <g className="stroke-gray-300" strokeWidth="1.25" strokeLinejoin="round">
            <path d="M326 150C326 124 394 124 394 150" />
            <path d="M326 150Q334.5 144 343 150Q351.5 144 360 150Q368.5 144 377 150Q385.5 144 394 150" />
            <rect x="344" y="188" width="32" height="50" rx="4" className="fill-background-card/60" />
            <path d="M344 196H376M344 230H376" />
            <path d="M360 238V252" />
        </g>
        <path d="M349 205H371M349 213H371M349 221H371" className="stroke-accent-teal" />
        <circle cx="360" cy="253" r="1.5" className="fill-gray-300" />

        {/* Ground station and downlink */}
        <g className="stroke-gray-300" strokeWidth="1.25" strokeLinecap="round">
            <path d="M446 296V322M446 312L436 322M446 312L456 322" />
            <path d="M446 296L420 264" />
            <path d="M447.8 283.9L433.8 295.3M438.4 275.6L427.6 284.4M429.1 267.3L421.3 273.6" />
        </g>
        <path d="M364 254L418 264" strokeDasharray="2 6" className="stroke-accent-teal motion-safe:animate-dash-flow" />

        {/* Telemetry trace */}
        <path d="M40 392V388M80 392V388M120 392V388M160 392V388M200 392V388M240 392V388M280 392V388M320 392V388M360 392V388M400 392V388M440 392V388M480 392V388" className="stroke-white/20" />
        <path d="M40 384H84C112 384 122 356 150 354C198 352 300 384 384 384H452" strokeWidth="1.5" strokeLinecap="round" className="stroke-accent-teal" />
        <circle cx="452" cy="384" r="3" className="fill-accent-teal motion-safe:animate-pulse" />

        {/* Callouts */}
        <g className={callout}>
            <path d="M96 156H141M96 192H140M96 222H140M96 300H128M155 222H184M155 262H184M376 213H398" className="stroke-white/20" />
            <text x="92" y="159" textAnchor="end">NOSE CONE</text>
            <text x="92" y="195" textAnchor="end">PAYLOAD BAY</text>
            <text x="92" y="225" textAnchor="end">AVIONICS</text>
            <text x="92" y="303" textAnchor="end">FINS</text>
            <text x="188" y="225">CG</text>
            <text x="188" y="265">CP</text>
            <text x="290" y="36" textAnchor="middle">APOGEE</text>
            <text x="402" y="216">CANSAT</text>
            <text x="446" y="340" textAnchor="middle">GROUND STATION</text>
            <text x="40" y="366" className="fill-accent-teal">TELEMETRY</text>
        </g>
    </svg>
);

const SpaceResearch = () => {
    return (
        <section
            id="space-research"
            aria-labelledby="space-research-heading"
            className="relative py-20 lg:py-24 overflow-hidden bg-background-paper border-b border-white/5"
        >
            {/* Background glow */}
            <div aria-hidden="true" className="absolute -bottom-24 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Visual: below the copy on mobile, left of it on desktop */}
                    <div className="order-2 lg:order-1 relative w-full max-w-xl lg:max-w-none mx-auto aspect-[13/10] bg-background/60 rounded-3xl border border-white/5 p-3 sm:p-5 overflow-hidden">
                        <div aria-hidden="true" className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
                        <MissionSchematic />
                    </div>

                    {/* Program information */}
                    <div className="order-1 lg:order-2 flex flex-col justify-center text-left">
                        <div>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 mb-5 text-xs font-semibold tracking-wider text-violet-300 uppercase bg-secondary/10 rounded-full border border-secondary/20">
                                <Satellite size={12} aria-hidden="true" /> Space Research
                            </span>
                        </div>

                        <h2 id="space-research-heading" className="text-[clamp(1.875rem,8vw,2.25rem)] lg:text-5xl font-bold tracking-tight mb-4 text-white">
                            CanSat &amp; <span className="text-gradient">Model Rocketry</span>
                        </h2>

                        <h3 className="text-lg lg:text-xl font-medium text-gray-300 mb-6 leading-relaxed">
                            {spaceProgram.subheading}
                        </h3>

                        <p className="text-gray-400 mb-8 leading-relaxed text-base">
                            A year-long engineering program taking students from satellite and rocketry fundamentals through simulation, hardware development, telemetry, system integration, testing, flight and competition readiness.
                        </p>

                        {/* Technology chips */}
                        <ul className="flex flex-wrap gap-2.5 mb-8">
                            {chips.map((chip) => (
                                <li
                                    key={chip}
                                    className="px-3 py-1.5 bg-white/5 text-gray-300 text-xs font-medium rounded-full border border-white/10"
                                >
                                    {chip}
                                </li>
                            ))}
                        </ul>

                        {/* Program facts */}
                        <dl className="grid grid-cols-1 sm:grid-cols-3 gap-px mb-10 bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
                            {stats.map((stat) => (
                                <div key={stat.label} className="flex sm:flex-col items-center sm:items-start justify-between gap-x-4 gap-y-1 px-5 py-4 bg-background-paper">
                                    <dt className="text-xs font-medium text-gray-400 uppercase tracking-wider">{stat.label}</dt>
                                    <dd className="font-heading text-base sm:text-lg font-bold text-white whitespace-nowrap">{stat.value}</dd>
                                </div>
                            ))}
                        </dl>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to={spaceLinks.page}
                                onClick={() => logEvent('click_explore_space_research', 'Space Research Section', spaceProgram.heading)}
                                className={`px-6 sm:px-8 py-4 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary-hover transition-all shadow-lg shadow-secondary/25 flex items-center justify-center gap-2 group text-center ${focusRing}`}
                            >
                                Explore Space Research
                                <ArrowRight size={18} aria-hidden="true" className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <a
                                href={spaceLinks.firstBatch}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => logEvent('click_view_first_batch', 'Space Research Section', spaceProgram.heading)}
                                className={`px-6 sm:px-8 py-4 bg-white/5 text-white border border-white/10 font-semibold rounded-xl hover:bg-white/10 transition-all backdrop-blur-sm flex items-center justify-center gap-2 text-center ${focusRing}`}
                            >
                                View 2026 First Batch
                                <ExternalLink size={18} aria-hidden="true" />
                                <span className="sr-only">(opens in a new tab)</span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SpaceResearch;
