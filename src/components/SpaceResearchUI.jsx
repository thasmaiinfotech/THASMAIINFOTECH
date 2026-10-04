import React from 'react';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from 'lucide-react';

// Building blocks for the Space Research page. Everything here renders to plain
// HTML/CSS with no animation library, so the page can be prerendered as-is.

export const focusRing = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-background";
export const btnPrimary = `px-8 py-4 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary-hover transition-all shadow-lg shadow-secondary/25 flex items-center justify-center gap-2 group text-center ${focusRing}`;
export const btnSecondary = `px-8 py-4 bg-white/5 text-white border border-white/10 font-semibold rounded-xl hover:bg-white/10 transition-all backdrop-blur-sm flex items-center justify-center gap-2 text-center ${focusRing}`;
export const textLink = `inline-flex items-center gap-1.5 min-h-[44px] text-sm font-semibold text-violet-300 hover:text-white transition-colors rounded ${focusRing}`;
export const labelHeading = "text-sm font-semibold uppercase tracking-wider text-gray-400";

const eyebrowTones = {
    violet: "text-violet-300 bg-secondary/10 border-secondary/20",
    teal: "text-accent-teal bg-accent-teal/10 border-accent-teal/20",
    blue: "text-blue-400 bg-accent-blue/10 border-accent-blue/20"
};

const statusTones = {
    "Available": "text-accent-teal bg-accent-teal/10 border-accent-teal/20",
    "Documented": "text-accent-teal bg-accent-teal/10 border-accent-teal/20",
    "Defined": "text-accent-teal bg-accent-teal/10 border-accent-teal/20",
    "In Progress": "text-blue-400 bg-accent-blue/10 border-accent-blue/20",
    "Developing": "text-violet-300 bg-secondary/10 border-secondary/20",
    "Planned": "text-gray-300 bg-white/5 border-white/10"
};

export const Section = ({ id, labelledBy, paper = false, children }) => (
    <section
        id={id}
        aria-labelledby={labelledBy}
        className={`py-12 sm:py-16 lg:py-20 scroll-mt-20 sm:scroll-mt-16 lg:scroll-mt-12 ${paper ? "bg-background-paper border-t border-b border-white/5" : "bg-background"}`}
    >
        <div className="container mx-auto px-6">{children}</div>
    </section>
);

export const Eyebrow = ({ tone = "violet", children }) => (
    <span className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${eyebrowTones[tone]}`}>
        {children}
    </span>
);

export const SectionHeader = ({ id, eyebrow, tone, title, align = "center", children }) => {
    const centered = align === "center";
    return (
        <div className={centered ? "text-center mb-8 lg:mb-12" : "mb-6 lg:mb-8"}>
            <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
            <h2 id={id} className={`text-3xl lg:text-4xl font-bold mt-4 mb-4 text-white ${centered ? "max-w-3xl mx-auto" : ""}`}>
                {title}
            </h2>
            {children && (
                <p className={`text-gray-400 text-sm lg:text-base leading-relaxed ${centered ? "max-w-2xl mx-auto" : "max-w-2xl"}`}>
                    {children}
                </p>
            )}
        </div>
    );
};

export const NewTabLink = ({ href, className, onClick, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} onClick={onClick}>
        {children}
        <span className="sr-only">(opens in a new tab)</span>
    </a>
);

export const DotList = ({ items, className }) => (
    <ul className={className}>
        {items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-gray-300 leading-snug">
                <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                {item}
            </li>
        ))}
    </ul>
);

export const ChipList = ({ items, className = "" }) => (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
        {items.map((item) => (
            <li key={item} className="px-3 py-1.5 bg-white/5 text-gray-300 text-sm font-medium rounded-lg border border-white/10">
                {item}
            </li>
        ))}
    </ul>
);

// The no-break space keeps each dot on the line of the item before it, and the
// trailing space is where the line is allowed to wrap.
const separator = "\u00A0\u00A0\u00B7\u00A0 ";

// Items set as running text with separators: compact, and still a real list
export const InlineList = ({ items, className = "" }) => (
    <ul className={`text-sm text-gray-300 leading-relaxed ${className}`}>
        {items.map((item, idx) => (
            <li key={item} className="inline">
                {item}
                {idx < items.length - 1 && <span aria-hidden="true" className="text-gray-500">{separator}</span>}
            </li>
        ))}
    </ul>
);

// Running text on phones, a two-column bulleted list from sm up
export const TopicList = ({ items }) => (
    <ul className="text-sm text-gray-300 leading-relaxed sm:leading-snug sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-2.5">
        {items.map((item, idx) => (
            <li key={item} className="inline sm:flex sm:items-start sm:gap-3">
                <span aria-hidden="true" className="hidden sm:block w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                {item}
                {idx < items.length - 1 && <span aria-hidden="true" className="sm:hidden text-gray-500">{separator}</span>}
            </li>
        ))}
    </ul>
);

export const StatusBadge = ({ status }) => (
    <span className={`inline-block shrink-0 text-xs font-semibold px-2.5 py-1 rounded-md border whitespace-nowrap ${statusTones[status]}`}>
        {status}
    </span>
);

// A numbered sequence that wraps as one row; the numbers carry the order when it wraps
export const FlowSteps = ({ steps, label, className = "" }) => (
    <ol aria-label={label} className={`flex flex-wrap gap-x-2 gap-y-2.5 ${className}`}>
        {steps.map((step, idx) => (
            <li key={step} className="flex items-center gap-2">
                <span className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-background/70 border border-white/10 text-sm font-medium text-white">
                    <span aria-hidden="true" className="font-mono text-xs text-accent-teal">{idx + 1}</span>
                    {step}
                </span>
                {idx < steps.length - 1 && (
                    <ArrowRight size={14} aria-hidden="true" className="text-secondary shrink-0" />
                )}
            </li>
        ))}
    </ol>
);

// Eight steps laid out as a closed loop: down one column and back up the other on
// phones, along the top row and back along the bottom row from sm up. DOM order
// stays 1..8, so the sequence reads correctly without the layout.
const loopCell = [
    "col-start-1 row-start-1 sm:col-start-1 sm:row-start-1",
    "col-start-1 row-start-2 sm:col-start-2 sm:row-start-1",
    "col-start-1 row-start-3 sm:col-start-3 sm:row-start-1",
    "col-start-1 row-start-4 sm:col-start-4 sm:row-start-1",
    "col-start-2 row-start-4 sm:col-start-4 sm:row-start-2",
    "col-start-2 row-start-3 sm:col-start-3 sm:row-start-2",
    "col-start-2 row-start-2 sm:col-start-2 sm:row-start-2",
    "col-start-2 row-start-1 sm:col-start-1 sm:row-start-2"
];
const loopDirectionPhone = ["down", "down", "down", "right", "up", "up", "up", "left"];
const loopDirectionWide = ["right", "right", "right", "down", "left", "left", "left", "up"];
const loopArrow = {
    right: { Icon: ArrowRight, place: "top-1/2 left-full -translate-y-1/2 ml-[3px]" },
    left: { Icon: ArrowLeft, place: "top-1/2 right-full -translate-y-1/2 mr-[3px]" },
    down: { Icon: ArrowDown, place: "left-1/2 top-full -translate-x-1/2 mt-[3px]" },
    up: { Icon: ArrowUp, place: "left-1/2 bottom-full -translate-x-1/2 mb-[3px]" }
};

export const EngineeringLoop = ({ steps, label }) => (
    <ol aria-label={label} className="grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-3xl mx-auto">
        {steps.map((step, idx) => {
            const phone = loopArrow[loopDirectionPhone[idx]];
            const wide = loopArrow[loopDirectionWide[idx]];
            const closing = idx === steps.length - 1;
            const arrowTone = closing ? "text-accent-teal" : "text-secondary";
            return (
                <li key={step} className={`relative ${loopCell[idx]}`}>
                    <div className="flex items-center gap-3 h-full px-4 py-3.5 rounded-xl bg-background-card border border-white/5">
                        <span aria-hidden="true" className="font-mono text-xs text-accent-teal">{idx + 1}</span>
                        <span className="font-heading text-sm font-semibold text-white">{step}</span>
                    </div>
                    {closing && <span className="sr-only">, then back to {steps[0]}</span>}
                    <phone.Icon size={14} aria-hidden="true" className={`sm:hidden absolute ${phone.place} ${arrowTone}`} />
                    <wide.Icon size={14} aria-hidden="true" className={`hidden sm:block absolute ${wide.place} ${arrowTone}`} />
                </li>
            );
        })}
    </ol>
);

export const MissionProfile = () => (
    <div className="relative bg-background-card/40 border border-white/10 rounded-3xl p-5 shadow-2xl backdrop-blur-sm overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

        <svg
            viewBox="0 0 440 330"
            className="w-full h-auto relative z-10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Illustrative mission profile plotting altitude against mission time: launch, coast, apogee, deployment, descent and recovery"
        >
            <defs>
                <linearGradient id="spaceProfileStroke" x1="60" y1="0" x2="400" y2="0" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#7B3FE4" />
                    <stop offset="100%" stopColor="#00C9A7" />
                </linearGradient>
                <linearGradient id="spaceProfileFill" x1="0" y1="60" x2="0" y2="286" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#7B3FE4" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#7B3FE4" stopOpacity="0" />
                </linearGradient>
            </defs>

            {/* Orbital lines */}
            <circle cx="470" cy="-60" r="120" className="stroke-white/10" />
            <circle cx="470" cy="-60" r="160" strokeDasharray="3 9" className="stroke-secondary/50 motion-safe:animate-dash-flow" />

            {/* Plot grid and axes */}
            <path d="M48 86H412M48 136H412M48 186H412M48 236H412" className="stroke-white/5" />
            <path d="M48 36V286H412" className="stroke-white/25" />
            <path d="M44 86H48M44 136H48M44 186H48M44 236H48M108 286V290M168 286V290M228 286V290M288 286V290M348 286V290M408 286V290" className="stroke-white/25" />

            {/* Altitude curve */}
            <path d="M60 286C84 200 118 84 176 66C204 58 224 76 240 98L392 280L397 286Z" fill="url(#spaceProfileFill)" />
            <path d="M192 64V286" strokeDasharray="2 4" className="stroke-white/20" />
            <path d="M60 286C84 200 118 84 176 66C204 58 224 76 240 98L392 280L397 286" stroke="url(#spaceProfileStroke)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

            {/* Flight phases */}
            <g className="fill-background stroke-accent-teal" strokeWidth="1.5">
                <circle cx="60" cy="286" r="4" />
                <circle cx="105" cy="150" r="4" />
                <circle cx="192" cy="64" r="4" />
                <circle cx="240" cy="98" r="4" />
                <circle cx="316" cy="189" r="4" />
                <circle cx="397" cy="286" r="4" />
            </g>
            <g className="fill-gray-300 font-mono text-[10px] tracking-wider">
                <text x="60" y="306">LAUNCH</text>
                <text x="116" y="160">COAST</text>
                <text x="192" y="50" textAnchor="middle">APOGEE</text>
                <text x="250" y="96">DEPLOY</text>
                <text x="326" y="188">DESCENT</text>
                <text x="404" y="306" textAnchor="end">RECOVERY</text>
            </g>
            <g className="fill-gray-500 font-mono text-[10px] tracking-wider">
                <text x="230" y="324" textAnchor="middle">MISSION TIME</text>
                <text x="28" y="160" textAnchor="middle" transform="rotate(-90 28 160)">ALTITUDE</text>
            </g>
        </svg>

        <div className="relative z-10 mt-3 flex items-center justify-between gap-3 px-4 py-2.5 bg-background/80 border border-white/5 rounded-xl">
            <span className="text-xs font-semibold text-white">Mission profile · illustrative</span>
            <span className="flex items-center gap-1.5 text-xs text-accent-teal font-mono uppercase">
                <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-accent-teal motion-safe:animate-pulse" />
                Telemetry
            </span>
        </div>
    </div>
);

// Curves only: every number and label for this chart lives in HTML next to it,
// so nothing has to be read at SVG scale on a phone.
export const TwinChart = () => (
    <svg
        viewBox="0 0 440 240"
        className="w-full h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Illustrative chart of altitude against time. The predicted curve peaks higher than the measured curve."
    >
        <path d="M40 60H420M40 100H420M40 140H420M40 180H420" className="stroke-white/5" />
        <path d="M40 20V220H420" className="stroke-white/25" />

        {/* Gap between the two apogees */}
        <path d="M172 53H232M172 65H232" strokeDasharray="2 4" className="stroke-white/25" />
        <path d="M226 53V65" strokeWidth="1.5" className="stroke-white/60" />

        {/* Predicted (dashed) and measured (solid) */}
        <path d="M50 220C85 120 125 56 175 53C215 51 245 75 275 105L400 215" strokeDasharray="6 5" strokeWidth="2" strokeLinecap="round" className="stroke-violet-300" />
        <path d="M50 220C85 130 125 70 170 65C208 62 238 84 268 112L392 218" strokeWidth="2" strokeLinecap="round" className="stroke-accent-teal" />

        <circle cx="175" cy="53" r="4" strokeWidth="1.5" className="fill-background stroke-violet-300" />
        <circle cx="170" cy="65" r="4" strokeWidth="1.5" className="fill-background stroke-accent-teal" />
    </svg>
);
