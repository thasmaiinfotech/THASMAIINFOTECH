import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
    ArrowRight,
    Briefcase,
    Building2,
    Bus,
    GraduationCap,
    Handshake,
    HeartHandshake,
    Map,
    Moon,
    ShieldCheck,
    Sparkles,
    UserRound,
    Users
} from 'lucide-react';
import { logEvent } from '../utils/analytics';
import { toJsonLd } from '../utils/structuredData';
import { busBuddy, busBuddyLinks } from '../data/busBuddy';
import {
    hero,
    problem,
    journey,
    capabilities,
    audiences,
    privacy,
    region,
    roadmap,
    pilot,
    busBuddySeo,
    buildBusBuddySchema
} from '../data/busBuddyContent';
import {
    focusRing,
    btnPrimary,
    btnSecondary,
    labelHeading,
    Section,
    Eyebrow,
    SectionHeader,
    DotList,
    ChipList,
    StatusBadge
} from './SpaceResearchUI';
import BusBuddyJourney from './BusBuddyJourney';

const schemaJson = toJsonLd(buildBusBuddySchema());

const audienceIcons = {
    student: GraduationCap,
    guardian: HeartHandshake,
    solo: UserRound,
    senior: Users,
    night: Moon,
    college: Building2,
    employer: Briefcase,
    operator: Bus,
    tour: Map
};
const scopeIcons = { emergency: ShieldCheck, ai: Sparkles };
const pilotIcons = { college: GraduationCap, operator: Bus, family: HeartHandshake };

const Hero = () => (
    <section aria-labelledby="busbuddy-hero-heading" className="relative pt-12 pb-16 lg:pt-20 lg:pb-20 overflow-hidden bg-gradient-dark">
        {/* Background Shapes */}
        <div aria-hidden="true" className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent-teal/5 to-transparent pointer-events-none" />
        <div aria-hidden="true" className="absolute top-1/2 left-0 w-72 h-72 bg-accent-violet/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
            <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex items-center gap-2 text-sm text-gray-400">
                    <li>
                        <Link to="/" className={`inline-block py-3 -my-3 hover:text-white transition-colors rounded ${focusRing}`}>Home</Link>
                    </li>
                    <li aria-hidden="true">/</li>
                    <li aria-current="page" className="text-gray-300">{busBuddy.name}</li>
                </ol>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <Eyebrow tone="teal">{hero.eyebrow}</Eyebrow>
                    <h1 id="busbuddy-hero-heading" className="text-[clamp(2.5rem,9vw,4rem)] font-bold leading-[1.1] mt-6 mb-4 text-white">
                        Bus<span className="text-gradient">Buddy</span>
                    </h1>
                    <p className="text-lg lg:text-xl font-medium text-gray-300 mb-5 leading-relaxed">
                        {hero.subtitle}
                    </p>
                    <p className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-6 text-sm text-gray-400">
                        <span className="px-2.5 py-1 text-xs font-semibold text-violet-300 bg-secondary/10 rounded-md border border-secondary/20 whitespace-nowrap">
                            {busBuddy.status}
                        </span>
                        {busBuddy.statusNote}
                    </p>
                    <p className="text-base text-gray-400 mb-8 leading-relaxed">
                        {hero.statement}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="#pilot"
                            onClick={() => logEvent('click_pilot_hero', 'BusBuddy Hero', busBuddy.name)}
                            className={btnPrimary}
                        >
                            Pilot With Us
                            <ArrowRight size={18} aria-hidden="true" className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#how-it-works"
                            onClick={() => logEvent('click_how_it_works_hero', 'BusBuddy Hero', busBuddy.name)}
                            className={btnSecondary}
                        >
                            How It Works
                        </a>
                    </div>
                </div>

                <div>
                    <BusBuddyJourney />
                </div>
            </div>

            <dl className="mt-12 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
                {hero.facts.map((fact) => (
                    <div key={fact.label} className="flex flex-col-reverse justify-end gap-1 p-4 sm:p-5 bg-background/80">
                        <dt className="text-xs font-medium text-gray-400 uppercase tracking-wider">{fact.label}</dt>
                        <dd className="font-heading text-base sm:text-xl font-bold text-white">{fact.value}</dd>
                    </div>
                ))}
            </dl>
        </div>
    </section>
);

const Problem = () => (
    <Section id="problem" labelledBy="problem-heading" paper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
                <SectionHeader id="problem-heading" eyebrow="The Problem" title="A Journey Should Not Mean Hours of Not Knowing" align="left" />
                <p className="text-base lg:text-lg text-gray-300 leading-relaxed mb-5">{problem.lead}</p>
                <p className="text-sm lg:text-base text-gray-400 leading-relaxed">{problem.promise}</p>
            </div>
            <div className="p-6 lg:p-8 rounded-3xl bg-background-card/50 border border-white/5">
                <h3 className={`${labelHeading} mb-5`}>{problem.unknownsTitle}</h3>
                <DotList items={problem.unknowns} className="space-y-3" />
            </div>
        </div>
    </Section>
);

const HowItWorks = () => (
    <Section id="how-it-works" labelledBy="how-it-works-heading">
        <SectionHeader id="how-it-works-heading" eyebrow="Journey Flow" tone="teal" title="How It Is Designed to Work">
            {journey.intro}
        </SectionHeader>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 items-start">
            <ol className="lg:col-span-3 ml-3 border-l border-white/10 space-y-8">
                {journey.steps.map((step, idx) => (
                    <li key={step.title} className="relative pl-8">
                        <span aria-hidden="true" className="absolute -left-3.5 top-0 flex items-center justify-center w-7 h-7 rounded-full bg-background border border-accent-teal/40 font-mono text-xs text-accent-teal">
                            {idx + 1}
                        </span>
                        <h3 className="text-base lg:text-lg font-bold text-white mb-1.5 leading-snug">{step.title}</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">{step.detail}</p>
                    </li>
                ))}
            </ol>

            <div className="lg:col-span-2 p-6 lg:p-8 rounded-3xl bg-background-card/50 border border-white/10">
                <span className="flex items-center justify-center w-11 h-11 mb-5 rounded-xl bg-accent-teal/10 text-accent-teal">
                    <ShieldCheck size={22} aria-hidden="true" />
                </span>
                <h3 className="text-lg font-bold text-white mb-2">{journey.sos.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-5">{journey.sos.detail}</p>
                <p className="pt-5 border-t border-white/10 text-sm font-medium text-gray-300 leading-relaxed">{journey.sos.note}</p>
            </div>
        </div>
    </Section>
);

const Capabilities = () => (
    <Section id="capabilities" labelledBy="capabilities-heading" paper>
        <SectionHeader id="capabilities-heading" eyebrow="Scope" title="What Is Being Built, and When">
            {capabilities.intro}
        </SectionHeader>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {capabilities.stages.map((stage) => (
                <div key={stage.title} className="p-6 rounded-2xl bg-background-card/50 border border-white/5">
                    <div className="flex items-center justify-between gap-3 mb-5">
                        <h3 className="text-lg font-bold text-white">{stage.title}</h3>
                        <StatusBadge status={stage.status} />
                    </div>
                    <DotList items={stage.items} className="space-y-2.5" />
                </div>
            ))}
        </div>

        <dl className="mt-6 space-y-1">
            {capabilities.legend.map((entry) => (
                <div key={entry.status} className="text-xs leading-relaxed">
                    <dt className="inline font-semibold text-gray-300">{entry.status}: </dt>
                    <dd className="inline text-gray-400">{entry.meaning}</dd>
                </div>
            ))}
        </dl>
    </Section>
);

const Audiences = () => (
    <Section id="audiences" labelledBy="audiences-heading">
        <SectionHeader id="audiences-heading" eyebrow="Audience" tone="blue" title="Who It Is Being Designed For" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {audiences.map((audience) => (
                <div key={audience.title} className="p-6 lg:p-8 rounded-3xl bg-background-card/50 border border-white/5">
                    <h3 className={`${labelHeading} mb-6`}>{audience.title}</h3>
                    <ul className="space-y-5">
                        {audience.groups.map((group) => {
                            const Icon = audienceIcons[group.key];
                            return (
                                <li key={group.key} className="flex items-start gap-4">
                                    <span className="flex items-center justify-center w-10 h-10 shrink-0 rounded-xl bg-white/5 border border-white/10 text-accent-teal">
                                        <Icon size={18} aria-hidden="true" />
                                    </span>
                                    <div>
                                        <p className="font-heading text-base font-semibold text-white leading-snug">{group.name}</p>
                                        <p className="text-sm text-gray-400 leading-relaxed">{group.need}</p>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ))}
        </div>
    </Section>
);

const Privacy = () => (
    <Section id="privacy" labelledBy="privacy-heading" paper>
        <SectionHeader id="privacy-heading" eyebrow="Privacy by Design" tone="teal" title="Consent Before Tracking">
            {privacy.intro}
        </SectionHeader>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {privacy.principles.map((principle) => (
                <li key={principle.title} className="p-5 rounded-2xl bg-background-card/50 border border-white/5">
                    <h3 className="text-base font-bold text-white mb-1.5">{principle.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{principle.detail}</p>
                </li>
            ))}
        </ul>

        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
            {privacy.scope.map((item) => {
                const Icon = scopeIcons[item.key];
                return (
                    <div key={item.key} className="flex items-start gap-4 p-5 lg:p-6 rounded-2xl bg-background/60 border border-white/10">
                        <span className="flex items-center justify-center w-10 h-10 shrink-0 rounded-xl bg-secondary/10 text-violet-300">
                            <Icon size={18} aria-hidden="true" />
                        </span>
                        <div>
                            <h3 className="text-base font-bold text-white mb-1.5">{item.title}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">{item.detail}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    </Section>
);

const Roadmap = () => (
    <Section id="roadmap" labelledBy="roadmap-heading">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 mb-12">
            <div className="lg:col-span-2">
                <SectionHeader id="roadmap-heading" eyebrow="Where It Starts" tone="blue" title="Coastal Karnataka First" align="left" />
                <p className="text-sm lg:text-base text-gray-400 leading-relaxed">{region.intro}</p>
            </div>
            <div className="lg:col-span-3 p-6 lg:p-8 rounded-3xl bg-background-card/50 border border-white/5">
                <h3 className={`${labelHeading} mb-5`}>{region.corridorsLabel}</h3>
                <ChipList items={region.corridors} />
            </div>
        </div>

        <h3 className="text-2xl font-bold text-white mb-2">Three-Year Direction</h3>
        <p className="text-sm text-gray-400 leading-relaxed mb-8">{roadmap.note}</p>
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {roadmap.stages.map((stage) => (
                <li key={stage.when} className="p-6 rounded-2xl bg-background-card/50 border border-white/5">
                    <p className="w-fit font-heading text-2xl font-bold text-gradient">{stage.when}</p>
                    <h4 className="text-base font-bold text-white mt-1">{stage.title}</h4>
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mt-1 mb-5">{stage.where}</p>
                    <DotList items={stage.items} className="space-y-2.5" />
                </li>
            ))}
        </ol>
    </Section>
);

const Pilot = () => (
    <Section id="pilot" labelledBy="pilot-heading" paper>
        <SectionHeader id="pilot-heading" eyebrow="Pilot Program" title="Pilot With Us">
            {pilot.intro}
        </SectionHeader>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {pilot.tracks.map((track) => {
                const Icon = pilotIcons[track.key];
                return (
                    <li key={track.key} className="p-6 rounded-2xl bg-background-card/50 border border-white/5">
                        <span className="flex items-center justify-center w-11 h-11 mb-5 rounded-xl bg-accent-teal/10 text-accent-teal">
                            <Icon size={22} aria-hidden="true" />
                        </span>
                        <h3 className="text-lg font-bold text-white mb-2">{track.title}</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">{track.detail}</p>
                    </li>
                );
            })}
        </ul>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 p-6 lg:p-8 rounded-3xl bg-background/60 border border-white/10">
            <div className="flex items-center gap-4">
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
            <div className="lg:text-right">
                <a
                    href={busBuddyLinks.pilot}
                    onClick={() => logEvent('click_pilot_contact', 'BusBuddy Pilot', busBuddy.name)}
                    className={`${btnPrimary} lg:inline-flex`}
                >
                    <Handshake size={18} aria-hidden="true" />
                    Start a Pilot Conversation
                </a>
                <p className="mt-3 text-xs text-gray-500">{pilot.contactNote}</p>
            </div>
        </div>
    </Section>
);

const BusBuddyPage = () => {
    // This page is lazy-loaded, so a deep link such as /busbuddy#pilot arrives
    // before its target exists and ScrollToTop cannot find it.
    useEffect(() => {
        const id = window.location.hash.slice(1);
        if (id) {
            document.getElementById(id)?.scrollIntoView();
        }
    }, []);

    return (
        <div className="bg-background text-primary min-h-screen pt-24 font-sans">
            <Helmet>
                <title>{busBuddySeo.title}</title>
                <meta name="description" content={busBuddySeo.description} />
                <meta name="keywords" content={busBuddySeo.keywords} />
                <link rel="canonical" href={busBuddySeo.url} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={busBuddySeo.url} />
                <meta property="og:title" content={busBuddySeo.ogTitle} />
                <meta property="og:description" content={busBuddySeo.ogDescription} />
                <meta property="og:image" content={busBuddySeo.image} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={busBuddySeo.ogTitle} />
                <meta name="twitter:description" content={busBuddySeo.ogDescription} />
                <meta name="twitter:image" content={busBuddySeo.image} />
                <script type="application/ld+json">{schemaJson}</script>
            </Helmet>

            <Hero />
            <Problem />
            <HowItWorks />
            <Capabilities />
            <Audiences />
            <Privacy />
            <Roadmap />
            <Pilot />
        </div>
    );
};

export default BusBuddyPage;
