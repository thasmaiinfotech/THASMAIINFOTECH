import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, MotionConfig } from 'framer-motion';
import {
    ArrowDown,
    ArrowRight,
    ArrowUpRight,
    BookOpen,
    CheckCircle2,
    ChevronRight,
    ExternalLink,
    Flag,
    Globe,
    Layers,
    Linkedin,
    MapPin,
    Plus,
    Repeat,
    Rocket,
    Satellite,
    ShieldCheck,
    Wrench
} from 'lucide-react';
import { logEvent } from '../utils/analytics';
import { toJsonLd } from '../utils/structuredData';
import { teamMembers } from '../data/teamData';
import { spaceLinks, spaceProgram } from '../data/spaceProgram';
import {
    hero,
    pathway,
    quarters,
    learningTracks,
    lifecycle,
    competition,
    careers,
    ecosystem,
    programHistory,
    programInfo,
    faqs,
    spaceResearchSeo,
    buildSpaceResearchSchema
} from '../data/spaceResearchContent';

const MotionDiv = motion.div;

const schemaJson = toJsonLd(buildSpaceResearchSchema());
const lead = teamMembers.find((member) => member.slug === spaceProgram.leadSlug);

const reveal = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { delay }
});

const progressLine = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1 }
};

const focusRing = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-background";
const btnPrimary = `px-8 py-4 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary-hover transition-all shadow-lg shadow-secondary/25 flex items-center justify-center gap-2 group text-center ${focusRing}`;
const btnSecondary = `px-8 py-4 bg-white/5 text-white border border-white/10 font-semibold rounded-xl hover:bg-white/10 transition-all backdrop-blur-sm flex items-center justify-center gap-2 text-center ${focusRing}`;
const textLink = `inline-flex items-center gap-1.5 min-h-[44px] text-sm font-semibold text-violet-300 hover:text-white transition-colors rounded ${focusRing}`;
const labelHeading = "text-sm font-semibold uppercase tracking-wider text-gray-400";

const eyebrowTones = {
    violet: "text-violet-300 bg-secondary/10 border-secondary/20",
    teal: "text-accent-teal bg-accent-teal/10 border-accent-teal/20",
    blue: "text-blue-400 bg-accent-blue/10 border-accent-blue/20"
};

const workshopIcons = { cubetwin: Layers, cansat: Satellite, rocket: Rocket };
const trackStyles = {
    theory: { icon: BookOpen, color: "bg-secondary/20 text-violet-300" },
    lab: { icon: Wrench, color: "bg-accent-teal/15 text-accent-teal" }
};
const ladderTones = [
    "border-white/10",
    "border-secondary/25",
    "border-secondary/40",
    "border-accent-blue/40",
    "border-accent-teal/50"
];

const Eyebrow = ({ tone = "violet", children }) => (
    <span className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${eyebrowTones[tone]}`}>
        {children}
    </span>
);

const SectionHeader = ({ id, eyebrow, tone, title, children }) => (
    <div className="text-center mb-12 lg:mb-16">
        <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        <h2 id={id} className="text-3xl lg:text-4xl font-bold mt-4 mb-4 text-white max-w-3xl mx-auto">
            {title}
        </h2>
        {children && (
            <p className="text-gray-400 max-w-2xl mx-auto text-sm lg:text-base leading-relaxed">{children}</p>
        )}
    </div>
);

const NewTabLink = ({ href, className, onClick, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} onClick={onClick}>
        {children}
        <span className="sr-only">(opens in a new tab)</span>
    </a>
);

const DotList = ({ items, className }) => (
    <ul className={className}>
        {items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-gray-300 leading-snug">
                <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                {item}
            </li>
        ))}
    </ul>
);

const MissionProfile = () => (
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

const Hero = () => (
    <section aria-labelledby="space-hero-heading" className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden bg-gradient-dark">
        {/* Background Shapes */}
        <div aria-hidden="true" className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/10 to-transparent pointer-events-none" />
        <div aria-hidden="true" className="absolute top-1/2 left-0 w-72 h-72 bg-accent-violet/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
            <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex items-center gap-2 text-sm text-gray-400">
                    <li>
                        <Link to="/" className={`inline-block py-3 -my-3 hover:text-white transition-colors rounded ${focusRing}`}>Home</Link>
                    </li>
                    <li aria-hidden="true">/</li>
                    <li aria-current="page" className="text-gray-300">Space Research</li>
                </ol>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-7"
                >
                    <Eyebrow>{hero.eyebrow}</Eyebrow>
                    <h1 id="space-hero-heading" className="text-[clamp(2rem,6.4vw,3.75rem)] font-bold leading-[1.1] mt-6 mb-5 text-white">
                        {hero.headline}{" "}
                        <span className="block w-fit text-gradient text-[0.62em] leading-[1.3] mt-2">{hero.secondary}</span>
                    </h1>
                    <p className="text-lg lg:text-xl font-medium text-gray-300 mb-5 leading-relaxed">
                        {hero.subheading}
                    </p>
                    <p className="text-base lg:text-lg text-gray-400 mb-6 leading-relaxed max-w-2xl">
                        {hero.copy}
                    </p>
                    <p className="text-sm text-gray-300 mb-8 leading-relaxed max-w-2xl">
                        {hero.disciplines.join(" · ")}
                    </p>

                    <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
                        <a
                            href="#program"
                            onClick={() => logEvent('click_explore_program', 'Space Research Hero', spaceProgram.heading)}
                            className={`${btnPrimary} lg:px-6`}
                        >
                            Explore Program
                            <ArrowRight size={18} aria-hidden="true" className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <NewTabLink
                            href={spaceLinks.firstBatch}
                            onClick={() => logEvent('click_first_batch_hero', 'Space Research Hero', spaceProgram.heading)}
                            className={`${btnSecondary} lg:px-6`}
                        >
                            2026 First Batch
                            <ExternalLink size={18} aria-hidden="true" />
                        </NewTabLink>
                        <a
                            href="#program-lead"
                            onClick={() => logEvent('click_contact_lead_hero', 'Space Research Hero', spaceProgram.heading)}
                            className={`${btnSecondary} lg:px-6`}
                        >
                            Contact Program Lead
                        </a>
                    </div>
                </MotionDiv>

                {/* Decorative on small screens, so it only renders from lg up */}
                <MotionDiv
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="hidden lg:block lg:col-span-5"
                >
                    <MissionProfile />
                </MotionDiv>
            </div>

            <dl className="mt-12 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
                {hero.stats.map((stat) => (
                    <div key={stat.label} className="flex flex-col-reverse justify-end gap-1 p-4 sm:p-5 bg-background/80">
                        <dt className="text-xs font-medium text-gray-400 uppercase tracking-wider">{stat.label}</dt>
                        <dd className="font-heading text-base sm:text-xl font-bold text-white">{stat.value}</dd>
                    </div>
                ))}
            </dl>
        </div>
    </section>
);

const QuarterCard = ({ quarter }) => (
    <article
        id={quarter.id}
        aria-labelledby={`${quarter.id}-title`}
        className="relative scroll-mt-36 bg-background-card/40 rounded-3xl border border-white/5 overflow-hidden"
    >
        <div aria-hidden="true" className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-secondary via-accent-blue to-accent-teal opacity-60" />

        <header className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 p-6 lg:p-8 border-b border-white/5">
            <span aria-hidden="true" className="self-start sm:self-auto font-heading text-4xl lg:text-5xl font-bold text-gradient">{quarter.label}</span>
            <div className="min-w-0">
                <p className="font-mono text-xs uppercase tracking-widest text-accent-teal mb-1.5">
                    {quarter.months} · {quarter.stage}
                </p>
                <h3 id={`${quarter.id}-title`} className="text-xl lg:text-2xl font-bold text-white leading-snug">
                    <span className="sr-only">{quarter.label}: </span>
                    {quarter.title}
                </h3>
            </div>
        </header>

        <div className="p-6 lg:p-8 space-y-8">
            <p className="text-gray-300 text-sm lg:text-base leading-relaxed max-w-3xl">{quarter.summary}</p>

            {quarter.workshops && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {quarter.workshops.map((workshop, idx) => {
                        const Icon = workshopIcons[workshop.id];
                        return (
                            <div key={workshop.id} className="bg-background-card p-6 rounded-2xl border border-white/5 hover:border-secondary/20 transition-all card-hover">
                                <div className="w-10 h-10 rounded-lg bg-secondary/20 text-violet-300 flex items-center justify-center mb-4">
                                    <Icon size={20} aria-hidden="true" />
                                </div>
                                <p className="font-mono text-xs uppercase tracking-widest text-gray-400 mb-1">Workshop {idx + 1}</p>
                                <h4 className="text-lg font-bold text-white mb-4 leading-snug">{workshop.title}</h4>
                                <DotList items={workshop.topics} className="space-y-2.5" />
                            </div>
                        );
                    })}
                </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <h4 className={`${labelHeading} mb-4`}>{quarter.topicsLabel}</h4>
                    <DotList items={quarter.topics} className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3" />

                    {quarter.safetyNote && (
                        <div className="mt-8 flex items-start gap-3 p-4 rounded-xl bg-accent-teal/5 border border-accent-teal/20">
                            <ShieldCheck size={18} aria-hidden="true" className="text-accent-teal mt-0.5 shrink-0" />
                            <p className="text-sm text-gray-300 leading-relaxed">
                                <strong className="text-white">Safety first.</strong> {quarter.safetyNote}
                            </p>
                        </div>
                    )}
                </div>

                <div className="space-y-6">
                    <div className="p-5 rounded-2xl bg-background/60 border border-white/5">
                        <h4 className={`${labelHeading} mb-4`}>Outputs</h4>
                        <ul className="space-y-2.5">
                            {quarter.outputs.map((output) => (
                                <li key={output} className="flex items-start gap-2.5 text-sm text-gray-300 leading-snug">
                                    <CheckCircle2 size={16} aria-hidden="true" className="text-accent-teal mt-0.5 shrink-0" />
                                    {output}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="p-5 rounded-2xl bg-secondary/5 border border-secondary/20">
                        <h4 className={`${labelHeading} mb-4 flex items-center gap-2`}>
                            <Flag size={14} aria-hidden="true" className="text-violet-300" />
                            {quarter.gates.length > 1 ? "Review Gates" : "Review Gate"}
                        </h4>
                        <ul className="space-y-2.5">
                            {quarter.gates.map((gate) => (
                                <li key={gate.name} className="text-sm text-gray-300 leading-snug">
                                    {gate.code && <span className="font-mono font-bold text-white mr-2">{gate.code}</span>}
                                    {gate.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {quarter.cubeTwin && (
                <div className="p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-secondary/10 to-transparent border border-secondary/20">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-secondary/20 text-violet-300 flex items-center justify-center shrink-0">
                            <Layers size={24} aria-hidden="true" />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-white">CubeTwin</h4>
                            <p className="text-xs text-gray-400 uppercase tracking-wider">Digital engineering · Digital twin</p>
                        </div>
                    </div>
                    <p className="text-sm lg:text-base text-gray-300 leading-relaxed max-w-3xl mb-6">{quarter.cubeTwin.description}</p>

                    <h5 className={`${labelHeading} mb-4`}>Learning loop</h5>
                    <ol className="flex flex-col sm:flex-row sm:flex-wrap gap-2">
                        {quarter.cubeTwin.loop.map((step, idx) => (
                            <li key={step} className="flex flex-col sm:flex-row sm:items-center gap-2">
                                <span className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-background/70 border border-white/10 text-sm font-medium text-white">
                                    <span aria-hidden="true" className="font-mono text-xs text-accent-teal">{idx + 1}</span>
                                    {step}
                                </span>
                                {idx < quarter.cubeTwin.loop.length - 1 && (
                                    <>
                                        <ArrowRight size={16} aria-hidden="true" className="hidden sm:block text-secondary shrink-0" />
                                        <ArrowDown size={16} aria-hidden="true" className="sm:hidden ml-5 text-secondary" />
                                    </>
                                )}
                            </li>
                        ))}
                    </ol>
                    <p className="mt-5 flex items-center gap-2 text-xs text-gray-400">
                        <Repeat size={14} aria-hidden="true" className="text-accent-teal shrink-0" />
                        Each pass through the loop feeds the next iteration of the model.
                    </p>
                </div>
            )}
        </div>
    </article>
);

const Journey = () => (
    <section id="program" aria-labelledby="journey-heading" className="py-20 bg-background scroll-mt-12">
        <div className="container mx-auto px-6">
            <SectionHeader id="journey-heading" eyebrow="Program Journey" title="Twelve Months, Four Engineering Quarters">
                The year runs as one engineering project. Each quarter builds on the last and closes with a review gate.
            </SectionHeader>

            {/* Learn → Compete */}
            <ol aria-label="Program pathway" className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-2.5 mb-14">
                {pathway.map((step, idx) => (
                    <li key={step} className="flex items-center gap-1.5">
                        <span className="px-3 py-1.5 bg-white/5 text-gray-300 text-xs font-medium rounded-full border border-white/10">{step}</span>
                        {idx < pathway.length - 1 && <ChevronRight size={14} aria-hidden="true" className="text-secondary" />}
                    </li>
                ))}
            </ol>

            {/* Quarter timeline: stacked rows on phones, left-to-right progression on desktop */}
            <nav aria-label="Program quarters" className="mb-12 lg:mb-16">
                {/* The line starts at zero width, so the wrapper is what gets observed */}
                <MotionDiv initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative">
                    <MotionDiv
                        aria-hidden="true"
                        variants={progressLine}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="hidden lg:block absolute top-6 left-6 right-[calc((100%_-_4.5rem)_/_4_-_1.5rem)] h-px origin-left bg-gradient-to-r from-secondary via-accent-blue to-accent-teal"
                    />
                    <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
                        {quarters.map((quarter) => (
                            <li key={quarter.id}>
                                <a
                                    href={`#${quarter.id}`}
                                    onClick={() => logEvent('click_quarter_nav', 'Space Research Journey', quarter.label)}
                                    className={`group relative flex lg:flex-col items-center lg:items-start gap-4 h-full p-4 lg:p-0 rounded-2xl bg-background-card/60 lg:bg-transparent border border-white/5 lg:border-0 ${focusRing}`}
                                >
                                    <span className="flex items-center justify-center w-12 h-12 shrink-0 rounded-full bg-background border border-secondary/50 font-mono text-sm font-bold text-white group-hover:border-accent-teal transition-colors">
                                        {quarter.label}
                                    </span>
                                    <span className="block flex-1 min-w-0 lg:w-full lg:p-5 lg:rounded-2xl lg:bg-background-card/60 lg:border lg:border-white/5 lg:group-hover:border-secondary/30 transition-colors">
                                        <span className="block font-mono text-xs uppercase tracking-widest text-accent-teal">{quarter.monthsShort}</span>
                                        <span className="block font-heading font-semibold text-white leading-snug mt-1">{quarter.stage}</span>
                                        <span className="hidden lg:block text-xs text-gray-400 mt-2">Gate: {quarter.gateShort}</span>
                                    </span>
                                    <ChevronRight size={18} aria-hidden="true" className="lg:hidden text-gray-500 shrink-0" />
                                </a>
                            </li>
                        ))}
                    </ol>
                </MotionDiv>
            </nav>

            <div className="space-y-8 lg:space-y-10">
                {quarters.map((quarter) => (
                    <MotionDiv key={quarter.id} {...reveal()}>
                        <QuarterCard quarter={quarter} />
                    </MotionDiv>
                ))}
            </div>
        </div>
    </section>
);

const TheoryAndLab = () => (
    <section aria-labelledby="theory-lab-heading" className="py-20 bg-background-paper border-t border-b border-white/5">
        <div className="container mx-auto px-6">
            <SectionHeader
                id="theory-lab-heading"
                eyebrow="Theory + Workshop"
                tone="teal"
                title="Understand the physics. Engineer the system. Build it. Test it. Fly it. Analyse it."
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {learningTracks.map((track, idx) => {
                    const { icon: Icon, color } = trackStyles[track.id];
                    return (
                        <MotionDiv
                            key={track.id}
                            {...reveal(idx * 0.1)}
                            className="bg-background-card p-6 lg:p-8 rounded-2xl border border-white/5"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${color}`}>
                                    <Icon size={24} aria-hidden="true" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white leading-snug">{track.title}</h3>
                                    <p className="text-xs text-gray-400 mt-0.5">{track.caption}</p>
                                </div>
                            </div>
                            <ul className="flex flex-wrap gap-2.5">
                                {track.topics.map((topic) => (
                                    <li key={topic} className="px-3 py-1.5 bg-white/5 text-gray-300 text-sm font-medium rounded-lg border border-white/10">
                                        {topic}
                                    </li>
                                ))}
                            </ul>
                        </MotionDiv>
                    );
                })}
            </div>
        </div>
    </section>
);

const Lifecycle = () => (
    <section aria-labelledby="lifecycle-heading" className="py-20 bg-background">
        <div className="container mx-auto px-6">
            <SectionHeader id="lifecycle-heading" eyebrow="Engineering Lifecycle" tone="blue" title="From Mission to Mission Review">
                From mission definition to mission review, with formal review gates along the way.
            </SectionHeader>

            {/* Vertical rail on phones, wrapping left-to-right sequence from md up */}
            <ol className="relative ml-1.5 border-l border-white/10 space-y-3 md:ml-0 md:border-l-0 md:space-y-0 md:grid md:grid-cols-4 md:gap-4 xl:grid-cols-8">
                {lifecycle.map((step, idx) => (
                    <li key={step.name} className="relative pl-6 md:pl-0">
                        <span
                            aria-hidden="true"
                            className={`md:hidden absolute -left-[5px] top-5 w-2.5 h-2.5 rounded-full ${step.gate ? "bg-accent-teal" : "bg-secondary"}`}
                        />
                        <div className={`h-full p-4 rounded-xl border ${step.gate ? "bg-accent-teal/5 border-accent-teal/30" : "bg-background-card border-white/5"}`}>
                            <span aria-hidden="true" className="block font-mono text-xs text-gray-400 mb-1">{String(idx + 1).padStart(2, "0")}</span>
                            <span className="block font-heading text-sm font-semibold text-white leading-snug">{step.name}</span>
                            {step.gate && (
                                <span className="inline-flex items-center gap-1 mt-1.5 text-xs font-medium text-accent-teal">
                                    <Flag size={11} aria-hidden="true" /> Review gate
                                </span>
                            )}
                        </div>
                        {idx < lifecycle.length - 1 && (
                            <ChevronRight size={14} aria-hidden="true" className="hidden md:block absolute -right-[15px] top-1/2 -translate-y-1/2 text-gray-500" />
                        )}
                    </li>
                ))}
            </ol>
        </div>
    </section>
);

const Competition = () => (
    <section id="competitions" aria-labelledby="competition-heading" className="py-20 bg-background-paper border-t border-b border-white/5 scroll-mt-12">
        <div className="container mx-auto px-6">
            <SectionHeader id="competition-heading" eyebrow="Competition Opportunities" title={competition.heading}>
                {competition.intro}
            </SectionHeader>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Pathway ladder */}
                <MotionDiv {...reveal()} className="lg:col-span-4 bg-background-card/50 p-6 rounded-2xl border border-white/5">
                    <h3 className={`${labelHeading} mb-5`}>Competition Readiness Pathway</h3>
                    <ol>
                        {competition.ladder.map((step, idx) => (
                            <li key={step}>
                                <div className={`flex items-center gap-3 px-4 py-3 rounded-xl bg-background/60 border ${ladderTones[idx]}`}>
                                    <span aria-hidden="true" className="font-mono text-xs text-accent-teal">{idx + 1}</span>
                                    <span className="text-sm font-semibold text-white leading-snug">{step}</span>
                                </div>
                                {idx < competition.ladder.length - 1 && (
                                    <ArrowDown size={16} aria-hidden="true" className="mx-auto my-2 text-secondary" />
                                )}
                            </li>
                        ))}
                    </ol>
                </MotionDiv>

                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* India */}
                    <MotionDiv {...reveal(0.1)} className="bg-background-card p-6 lg:p-8 rounded-2xl border border-white/5">
                        <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-accent-teal mb-3">
                            <MapPin size={14} aria-hidden="true" /> India
                        </p>
                        <h3 className="text-xl font-bold text-white mb-5 leading-snug">{competition.india.title}</h3>
                        <ul className="space-y-3 mb-6">
                            {competition.india.competitions.map((item) => {
                                const Icon = workshopIcons[item.id];
                                return (
                                    <li key={item.id} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                                        <Icon size={18} aria-hidden="true" className="text-violet-300 shrink-0" />
                                        <span className="text-sm font-semibold text-white leading-snug">{item.name}</span>
                                    </li>
                                );
                            })}
                        </ul>
                        <p className="text-sm text-gray-400 leading-relaxed mb-4">{competition.india.lead}</p>
                        <DotList items={competition.india.conditions} className="space-y-2.5 mb-6" />
                        <p className="text-sm text-gray-300 leading-relaxed">{competition.india.note}</p>
                    </MotionDiv>

                    {/* International */}
                    <MotionDiv {...reveal(0.2)} className="bg-background-card p-6 lg:p-8 rounded-2xl border border-white/5">
                        <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-blue-400 mb-3">
                            <Globe size={14} aria-hidden="true" /> International
                        </p>
                        <h3 className="text-xl font-bold text-white mb-5 leading-snug">{competition.international.title}</h3>
                        <p className="text-sm text-gray-400 leading-relaxed mb-4">{competition.international.lead}</p>
                        <DotList items={competition.international.references} className="space-y-2.5 mb-6" />
                        <p className="text-sm text-gray-300 leading-relaxed">{competition.international.note}</p>
                    </MotionDiv>
                </div>
            </div>

            <p className="mt-10 max-w-4xl mx-auto text-xs text-gray-400 leading-relaxed text-center">
                {competition.disclaimer}
            </p>
        </div>
    </section>
);

const Careers = () => (
    <section aria-labelledby="careers-heading" className="py-20 bg-background">
        <div className="container mx-auto px-6">
            <SectionHeader id="careers-heading" eyebrow="Career & Research Pathways" tone="teal" title="Where These Skills Can Lead">
                The program builds skills relevant to the domains below. They are possible directions for further work, study and research, not placement commitments.
            </SectionHeader>

            <ul className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
                {careers.map((domain) => (
                    <li key={domain} className="px-4 py-2.5 bg-background-card text-gray-200 text-sm font-medium rounded-xl border border-white/5">
                        {domain}
                    </li>
                ))}
            </ul>
        </div>
    </section>
);

const Ecosystem = () => (
    <section aria-labelledby="ecosystem-heading" className="py-20 bg-background-paper border-t border-b border-white/5">
        <div className="container mx-auto px-6">
            <SectionHeader id="ecosystem-heading" eyebrow="Ecosystem" tone="blue" title="Research & Learning Ecosystem">
                Three organisations, each with a distinct role.
            </SectionHeader>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {ecosystem.map((org, idx) => (
                    <MotionDiv
                        key={org.id}
                        {...reveal(idx * 0.1)}
                        className="flex flex-col bg-background-card p-6 rounded-2xl border border-white/5"
                    >
                        <p className="text-xs font-bold uppercase tracking-widest text-accent-teal mb-3">{org.label}</p>
                        <h3 className="text-lg font-bold text-white mb-2 leading-snug">{org.name}</h3>
                        {org.tagline && <p className="text-sm text-gray-300 mb-2 leading-relaxed">{org.tagline}</p>}
                        <p className="text-sm text-gray-400 leading-relaxed">{org.role}</p>
                        {org.href && (
                            <NewTabLink
                                href={org.href}
                                onClick={() => logEvent('click_ecosystem_link', 'Space Research Ecosystem', org.name)}
                                className={`${textLink} self-start mt-auto pt-3`}
                            >
                                {org.linkLabel}
                                <ArrowUpRight size={16} aria-hidden="true" />
                            </NewTabLink>
                        )}
                    </MotionDiv>
                ))}
            </div>
        </div>
    </section>
);

const ProgramHistory = () => (
    <section aria-labelledby="history-heading" className="py-20 bg-background">
        <div className="container mx-auto px-6">
            <SectionHeader id="history-heading" eyebrow="Program History" title="From First Batch to Annual Program">
                Program initiated on {spaceProgram.initiated}. The first student engineering batch is progressing through the 2026 CanSat &amp; Model Rocketry program.
            </SectionHeader>

            <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {programHistory.map((item, idx) => (
                    <li key={item.when} className="h-full">
                        <MotionDiv
                            {...reveal(idx * 0.1)}
                            className="flex flex-col h-full bg-background-card p-6 rounded-2xl border border-white/5"
                        >
                            <span className="self-start font-heading text-2xl font-bold text-gradient mb-2">{item.when}</span>
                            <h3 className="text-base font-bold text-white mb-2 leading-snug">{item.title}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">{item.detail}</p>
                            {item.dates && <p className="mt-3 text-sm font-medium text-gray-200">{item.dates}</p>}
                            {item.href && (
                                <NewTabLink
                                    href={item.href}
                                    onClick={() => logEvent('click_first_batch_history', 'Space Research History', spaceProgram.heading)}
                                    className={`${textLink} self-start mt-auto pt-3`}
                                >
                                    {item.linkLabel}
                                    <ArrowUpRight size={16} aria-hidden="true" />
                                </NewTabLink>
                            )}
                        </MotionDiv>
                    </li>
                ))}
            </ol>
        </div>
    </section>
);

const ProgramLead = () => (
    <section id="program-lead" aria-labelledby="program-lead-heading" className="py-20 bg-background-paper border-t border-b border-white/5 scroll-mt-12">
        <div className="container mx-auto px-6">
            <SectionHeader id="program-lead-heading" eyebrow="Program Information" tone="teal" title="Program Details & Program Lead" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <MotionDiv {...reveal()} className="bg-background-card p-6 lg:p-8 rounded-2xl border border-white/5">
                    <h3 className="text-xl font-bold text-white mb-4">Program Information</h3>
                    <dl className="divide-y divide-white/5">
                        {programInfo.map((row) => (
                            <div key={row.label} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 py-3.5">
                                <dt className="sm:w-36 shrink-0 text-xs font-semibold uppercase tracking-wider text-gray-400">{row.label}</dt>
                                <dd className="text-sm lg:text-base font-medium text-white leading-snug">{row.value}</dd>
                            </div>
                        ))}
                    </dl>
                </MotionDiv>

                <MotionDiv {...reveal(0.1)} className="flex flex-col bg-background-card p-6 lg:p-8 rounded-2xl border border-white/5">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-6">
                        <div className="w-24 h-24 shrink-0 rounded-full bg-gradient-to-br from-secondary to-accent-blue p-[2px]">
                            <div className="w-full h-full rounded-full bg-background-card overflow-hidden">
                                <img
                                    src={lead.photoUrl}
                                    alt={lead.name}
                                    width="96"
                                    height="96"
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-accent-teal mb-1">Program Lead</p>
                            <h3 className="text-2xl font-bold text-white">{lead.name}</h3>
                            <p className="text-sm text-gray-400 mt-1 leading-relaxed">{lead.title}, {lead.company}</p>
                        </div>
                    </div>

                    <ul className="mb-6">
                        <li>
                            <Link to={spaceLinks.leadProfile} className={textLink}>
                                THASMAI Profile
                                <ArrowRight size={16} aria-hidden="true" />
                            </Link>
                        </li>
                        <li>
                            <NewTabLink href={spaceLinks.leadAerospace} className={textLink}>
                                Space / Aerospace Research Profile
                                <ArrowUpRight size={16} aria-hidden="true" />
                            </NewTabLink>
                        </li>
                        <li>
                            <NewTabLink href={spaceLinks.leadLinkedin} className={textLink}>
                                <Linkedin size={16} aria-hidden="true" />
                                LinkedIn
                                <ArrowUpRight size={16} aria-hidden="true" />
                            </NewTabLink>
                        </li>
                    </ul>

                    <div className="mt-auto pt-6 border-t border-white/5">
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">Program Fees</p>
                        <p className="text-base font-semibold text-white mb-5">Contact {lead.name}</p>
                        <Link
                            to={spaceLinks.leadProfile}
                            onClick={() => logEvent('click_contact_fees', 'Space Research Program Lead', spaceProgram.heading)}
                            className={btnPrimary}
                        >
                            Contact for Program Details &amp; Fees
                            <ArrowRight size={18} aria-hidden="true" className="shrink-0 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </MotionDiv>
            </div>
        </div>
    </section>
);

const Faq = () => (
    <section id="faq" aria-labelledby="faq-heading" className="py-20 bg-background scroll-mt-12">
        <div className="container mx-auto px-6">
            <SectionHeader id="faq-heading" eyebrow="FAQ" tone="blue" title="Frequently Asked Questions" />

            <div className="max-w-3xl mx-auto space-y-3">
                {faqs.map((faq) => (
                    <details key={faq.question} className="group bg-background-card/60 rounded-2xl border border-white/5 open:border-secondary/30 transition-colors">
                        <summary className={`flex items-center justify-between gap-4 min-h-[44px] p-5 cursor-pointer list-none rounded-2xl [&::-webkit-details-marker]:hidden ${focusRing}`}>
                            <h3 className="text-base font-semibold text-white leading-snug">{faq.question}</h3>
                            <Plus size={18} aria-hidden="true" className="text-violet-300 shrink-0 transition-transform group-open:rotate-45" />
                        </summary>
                        <p className="px-5 pb-5 text-sm text-gray-400 leading-relaxed">{faq.answer}</p>
                    </details>
                ))}
            </div>

            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                <Link
                    to={spaceLinks.leadProfile}
                    onClick={() => logEvent('click_contact_fees_footer', 'Space Research Footer CTA', spaceProgram.heading)}
                    className={btnPrimary}
                >
                    Contact for Program Details &amp; Fees
                    <ArrowRight size={18} aria-hidden="true" className="shrink-0 group-hover:translate-x-1 transition-transform" />
                </Link>
                <NewTabLink
                    href={spaceLinks.firstBatch}
                    onClick={() => logEvent('click_first_batch_footer', 'Space Research Footer CTA', spaceProgram.heading)}
                    className={btnSecondary}
                >
                    View First Batch — 2026
                    <ExternalLink size={18} aria-hidden="true" className="shrink-0" />
                </NewTabLink>
            </div>
        </div>
    </section>
);

const SpaceResearchPage = () => {
    // This page is lazy-loaded, so a deep link such as /space-research#q3 arrives
    // before its target exists and ScrollToTop cannot find it.
    useEffect(() => {
        const id = window.location.hash.slice(1);
        if (id) {
            document.getElementById(id)?.scrollIntoView();
        }
    }, []);

    return (
        <MotionConfig reducedMotion="user">
            <div className="bg-background text-primary min-h-screen pt-24 font-sans">
                <Helmet>
                    <title>{spaceResearchSeo.title}</title>
                    <meta name="description" content={spaceResearchSeo.description} />
                    <meta name="keywords" content={spaceResearchSeo.keywords} />
                    <link rel="canonical" href={spaceResearchSeo.url} />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content={spaceResearchSeo.url} />
                    <meta property="og:title" content={spaceResearchSeo.ogTitle} />
                    <meta property="og:description" content={spaceResearchSeo.ogDescription} />
                    <meta property="og:image" content={spaceResearchSeo.image} />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content={spaceResearchSeo.ogTitle} />
                    <meta name="twitter:description" content={spaceResearchSeo.ogDescription} />
                    <meta name="twitter:image" content={spaceResearchSeo.image} />
                    <script type="application/ld+json">{schemaJson}</script>
                </Helmet>

                <Hero />
                <Journey />
                <TheoryAndLab />
                <Lifecycle />
                <Competition />
                <Careers />
                <Ecosystem />
                <ProgramHistory />
                <ProgramLead />
                <Faq />
            </div>
        </MotionConfig>
    );
};

export default SpaceResearchPage;
