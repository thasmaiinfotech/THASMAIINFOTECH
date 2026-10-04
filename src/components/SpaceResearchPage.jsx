import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
    ArrowDown,
    ArrowRight,
    ArrowUpRight,
    Check,
    CheckCircle2,
    ChevronRight,
    Cpu,
    Flag,
    Globe,
    Layers,
    Linkedin,
    MapPin,
    Plus,
    Rocket,
    Satellite,
    ShieldCheck,
    Zap
} from 'lucide-react';
import { logEvent } from '../utils/analytics';
import { toJsonLd } from '../utils/structuredData';
import { teamMembers } from '../data/teamData';
import { spaceLinks, spaceProgram } from '../data/spaceProgram';
import {
    hero,
    timeline,
    sectionLinks,
    mission,
    researchAreas,
    learningPathway,
    quarters,
    reviewGates,
    artefacts,
    digitalTwin,
    researchQuestions,
    safety,
    competition,
    firstCohort,
    researchOutputs,
    portfolio,
    ecosystem,
    governance,
    audience,
    outcomes,
    programInfo,
    apply,
    faqs,
    spaceResearchSeo,
    buildSpaceResearchSchema
} from '../data/spaceResearchContent';
import {
    focusRing,
    btnPrimary,
    btnSecondary,
    textLink,
    labelHeading,
    Section,
    Eyebrow,
    SectionHeader,
    NewTabLink,
    DotList,
    ChipList,
    InlineList,
    TopicList,
    StatusBadge,
    FlowSteps,
    EngineeringLoop,
    MissionProfile,
    TwinChart
} from './SpaceResearchUI';

const schemaJson = toJsonLd(buildSpaceResearchSchema());
const lead = teamMembers.find((member) => member.slug === spaceProgram.leadSlug);

const areaIcons = { rocketry: Rocket, cansat: Cpu, twins: Layers, satellite: Satellite, cyber: ShieldCheck, energy: Zap };
const workshopIcons = { cubetwin: Layers, cansat: Satellite, rocket: Rocket };

// Border accents that strengthen along a progression
const progressTones = [
    "border-white/10",
    "border-secondary/25",
    "border-secondary/40",
    "border-accent-blue/40",
    "border-accent-teal/40",
    "border-accent-teal/60"
];

const outputStatuses = ["Available", "Developing", "Planned"];

const Hero = () => (
    <section aria-labelledby="space-hero-heading" className="relative pt-12 pb-16 lg:pt-20 lg:pb-20 overflow-hidden bg-gradient-dark">
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
                <div className="lg:col-span-7">
                    <Eyebrow>{hero.eyebrow}</Eyebrow>
                    <h1 id="space-hero-heading" className="text-[clamp(2rem,6.4vw,3.75rem)] font-bold leading-[1.1] mt-6 mb-5 text-white">
                        {hero.headline}{" "}
                        <span className="block w-fit text-gradient text-[0.62em] leading-[1.3] mt-2">{hero.secondary}</span>
                    </h1>
                    <p className="text-lg lg:text-xl font-medium text-gray-300 mb-5 leading-relaxed max-w-2xl">
                        {hero.subtitle}
                    </p>
                    <p className="text-base text-gray-400 mb-8 leading-relaxed max-w-2xl">
                        {hero.copy}
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
                        <a
                            href="#first-cohort"
                            onClick={() => logEvent('click_first_cohort_hero', 'Space Research Hero', spaceProgram.heading)}
                            className={`${btnSecondary} lg:px-6`}
                        >
                            2026 First Cohort
                        </a>
                        <a
                            href="#apply"
                            onClick={() => logEvent('click_apply_hero', 'Space Research Hero', spaceProgram.heading)}
                            className={`${btnSecondary} lg:px-6`}
                        >
                            Collaborate / Apply
                        </a>
                    </div>
                </div>

                {/* Decorative on small screens, so it only renders from lg up */}
                <div className="hidden lg:block lg:col-span-5">
                    <MissionProfile />
                </div>
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

const Timeline = () => (
    <section id="timeline" aria-labelledby="timeline-heading" className="py-12 lg:py-14 bg-background-paper border-b border-white/5 scroll-mt-16">
        <div className="container mx-auto px-6">
            <div className="mb-8">
                <Eyebrow tone="teal">Established</Eyebrow>
                <h2 id="timeline-heading" className="text-2xl lg:text-3xl font-bold mt-4 text-white">Program Timeline</h2>
            </div>

            {/* Vertical rail on phones, horizontal line from lg up */}
            <ol className="ml-1.5 border-l border-white/10 space-y-8 lg:ml-0 lg:border-l-0 lg:border-t lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-8">
                {timeline.map((item) => (
                    <li key={item.when} className="relative pl-6 lg:pl-0 lg:pt-7">
                        <span aria-hidden="true" className="absolute -left-[5px] top-2.5 lg:left-0 lg:-top-[5px] w-2.5 h-2.5 rounded-full bg-secondary" />
                        <p className="w-fit font-heading text-2xl font-bold text-gradient">{item.when}</p>
                        <h3 className="text-base font-bold text-white mt-1 mb-1.5 leading-snug">{item.title}</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">{item.detail}</p>
                        {item.href && (
                            <NewTabLink
                                href={item.href}
                                onClick={() => logEvent('click_first_cohort_timeline', 'Space Research Timeline', spaceProgram.heading)}
                                className={textLink}
                            >
                                {item.linkLabel}
                                <ArrowUpRight size={16} aria-hidden="true" />
                            </NewTabLink>
                        )}
                    </li>
                ))}
            </ol>
        </div>
    </section>
);

const SectionNav = () => (
    <nav aria-label="On this page" className="bg-background border-b border-white/5">
        <div className="container mx-auto px-6">
            {/* One scrollable row on phones, wrapped and centred from md up */}
            <ul className="flex gap-2 py-3 -mx-6 px-6 overflow-x-auto md:mx-0 md:px-0 md:flex-wrap md:justify-center md:overflow-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {sectionLinks.map((link) => (
                    <li key={link.href} className="shrink-0">
                        <a
                            href={link.href}
                            className={`flex items-center min-h-[44px] px-4 text-sm font-medium text-gray-300 whitespace-nowrap rounded-full bg-white/5 border border-white/10 hover:text-white hover:border-secondary/40 transition-colors ${focusRing}`}
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
);

const Mission = () => (
    <Section id="mission" labelledBy="mission-heading">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-7">
                <SectionHeader id="mission-heading" eyebrow="Program Identity" title="Research Mission" align="left" />
                <p className="text-lg text-gray-200 leading-relaxed mb-8">{mission.statement}</p>

                <h3 className="text-xl font-bold text-white mb-3">Why This Program</h3>
                <p className="text-gray-400 leading-relaxed mb-6">{mission.why}</p>
                <p className="pl-5 border-l-2 border-secondary font-heading text-lg lg:text-xl font-semibold text-white leading-snug">
                    {mission.principle}
                </p>
            </div>

            <div className="lg:col-span-5">
                <div className="p-6 lg:p-8 rounded-2xl bg-background-card/50 border border-white/5">
                    <h3 className="text-xl font-bold text-white mb-3">Five Kinds of Work</h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-5">{mission.modesLead}</p>
                    <dl className="divide-y divide-white/5">
                        {mission.modes.map((mode) => (
                            <div key={mode.name} className="py-3 first:pt-0 last:pb-0">
                                <dt className="text-sm font-semibold text-white">{mode.name}</dt>
                                <dd className="text-sm text-gray-400 leading-relaxed mt-0.5">{mode.detail}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>

        <div className="mt-12 lg:mt-16 p-6 lg:p-10 rounded-3xl bg-background-paper border border-white/5">
            <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-white mb-2">The Engineering Loop</h3>
                <p className="text-sm text-gray-400">{mission.loopLead}</p>
            </div>
            <EngineeringLoop steps={mission.loop} label="Engineering loop" />
        </div>
    </Section>
);

const ResearchAreas = () => (
    <Section id="areas" labelledBy="areas-heading" paper>
        <SectionHeader id="areas-heading" eyebrow="Focus" tone="teal" title="Research & Engineering Areas">
            Six areas the program works in. Depth varies by area and by cohort.
        </SectionHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchAreas.map((area) => {
                const Icon = areaIcons[area.id];
                return (
                    <div key={area.id} className="bg-background-card p-6 rounded-2xl border border-white/5">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-secondary/20 text-violet-300 flex items-center justify-center shrink-0">
                                <Icon size={20} aria-hidden="true" />
                            </div>
                            <h3 className="text-lg font-bold text-white leading-snug">{area.title}</h3>
                        </div>
                        <InlineList items={area.items} />
                    </div>
                );
            })}
        </div>
    </Section>
);

const Pathway = () => (
    <Section id="pathway" labelledBy="pathway-heading">
        <SectionHeader id="pathway-heading" eyebrow="Learning Pathway" tone="blue" title="Space Engineering Learning Pathway">
            {learningPathway.scope}
        </SectionHeader>

        {/* Stacked with downward arrows below lg, one left-to-right row from lg up */}
        <ol className="grid grid-cols-1 lg:grid-cols-6 gap-3 lg:gap-4">
            {learningPathway.stages.map((stage, idx) => (
                <li key={stage.title} className="relative flex flex-col">
                    <div className={`flex flex-col flex-1 p-5 lg:p-4 xl:p-5 rounded-2xl bg-background-card border ${progressTones[idx]}`}>
                        <span aria-hidden="true" className="font-mono text-xs text-accent-teal mb-2">{String(idx + 1).padStart(2, "0")}</span>
                        <h3 className="text-base font-bold text-white leading-snug mb-3">{stage.title}</h3>
                        {stage.items.length > 0 && (
                            <ul className="grid grid-cols-1 min-[360px]:grid-cols-2 gap-x-4 gap-y-1.5 lg:grid-cols-1 text-sm text-gray-300 leading-snug">
                                {stage.items.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        )}
                        {stage.href && (
                            <NewTabLink
                                href={stage.href}
                                onClick={() => logEvent('click_pathway_link', 'Space Research Pathway', stage.title)}
                                className={`${textLink} self-start mt-auto pt-2`}
                            >
                                {stage.linkLabel}
                                <ArrowUpRight size={16} aria-hidden="true" className="shrink-0" />
                            </NewTabLink>
                        )}
                    </div>
                    {idx < learningPathway.stages.length - 1 && (
                        <>
                            <ArrowDown size={16} aria-hidden="true" className="lg:hidden mx-auto mt-3 text-secondary" />
                            <ChevronRight size={14} aria-hidden="true" className="hidden lg:block absolute -right-[15px] top-1/2 -translate-y-1/2 text-gray-500" />
                        </>
                    )}
                </li>
            ))}
        </ol>
    </Section>
);

const QuarterCard = ({ quarter }) => (
    <article
        id={quarter.id}
        aria-labelledby={`${quarter.id}-title`}
        className="relative scroll-mt-32 bg-background-card/40 rounded-3xl border border-white/5 overflow-hidden"
    >
        <div aria-hidden="true" className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-secondary via-accent-blue to-accent-teal opacity-60" />

        <header className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 p-6 lg:px-8 border-b border-white/5">
            <span aria-hidden="true" className="self-start sm:self-auto font-heading text-4xl lg:text-5xl font-bold text-gradient">{quarter.label}</span>
            <div className="min-w-0">
                <p className="font-mono text-xs uppercase tracking-widest text-accent-teal mb-1.5">{quarter.months}</p>
                <h3 id={`${quarter.id}-title`} className="text-xl lg:text-2xl font-bold text-white leading-snug">
                    <span className="sr-only">{quarter.label}: </span>
                    {quarter.title}
                </h3>
            </div>
        </header>

        <div className="p-6 lg:p-8 space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-7">
                    <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-6">{quarter.summary}</p>
                    <h4 className={`${labelHeading} mb-3`}>Topics</h4>
                    <TopicList items={quarter.topics} />
                </div>

                <div className="lg:col-span-5 space-y-5">
                    <div className="p-5 rounded-2xl bg-background/60 border border-white/5">
                        <h4 className={`${labelHeading} mb-4`}>Engineering Outputs</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                            {quarter.outputs.map((output) => (
                                <li key={output} className="flex items-start gap-2.5 text-sm text-gray-300 leading-snug">
                                    <CheckCircle2 size={16} aria-hidden="true" className="text-accent-teal mt-0.5 shrink-0" />
                                    {output}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="p-5 rounded-2xl bg-secondary/5 border border-secondary/20">
                        <h4 className={`${labelHeading} mb-3 flex items-center gap-2`}>
                            <Flag size={14} aria-hidden="true" className="text-violet-300" />
                            {quarter.gates.length > 1 ? "Review Gates" : "Review Gate"}
                        </h4>
                        <ul className="space-y-2">
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

            {quarter.workshops && (
                <div>
                    <h4 className={`${labelHeading} mb-4`}>Workshops</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {quarter.workshops.map((workshop) => {
                            const Icon = workshopIcons[workshop.id];
                            return (
                                <div key={workshop.id} className="p-5 rounded-2xl bg-background-card border border-white/5">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Icon size={18} aria-hidden="true" className="text-violet-300 shrink-0" />
                                        <h5 className="text-base font-bold text-white leading-snug">{workshop.title}</h5>
                                    </div>
                                    <p className="text-sm text-gray-400 leading-relaxed">{workshop.topics.join(" · ")}</p>
                                </div>
                            );
                        })}
                    </div>
                    <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                        <span className="font-semibold text-gray-300">Lab work:</span> {quarter.labWork.join(" · ")}
                    </p>
                    <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                        Physical build and test work follows the program's{" "}
                        <a href="#safety" className={`font-semibold text-violet-300 hover:text-white underline underline-offset-4 rounded ${focusRing}`}>
                            safety and compliance requirements
                        </a>.
                    </p>
                </div>
            )}
        </div>
    </article>
);

const Program = () => (
    <Section id="program" labelledBy="program-heading" paper>
        <SectionHeader id="program-heading" eyebrow="Q1–Q4 Program" title="Twelve Months, Four Engineering Quarters">
            The year runs as one engineering-development lifecycle. Each quarter builds on the last and closes with review gates.
        </SectionHeader>

        {/* Quarter timeline: stacked rows on phones, left-to-right progression on desktop */}
        <nav aria-label="Program quarters" className="relative mb-12">
            <div aria-hidden="true" className="hidden lg:block absolute top-6 left-6 right-[calc((100%_-_4.5rem)_/_4_-_1.5rem)] h-px bg-gradient-to-r from-secondary via-accent-blue to-accent-teal" />
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
                {quarters.map((quarter) => (
                    <li key={quarter.id}>
                        <a
                            href={`#${quarter.id}`}
                            onClick={() => logEvent('click_quarter_nav', 'Space Research Program', quarter.label)}
                            className={`group relative flex lg:flex-col items-center lg:items-start gap-4 h-full p-4 lg:p-0 rounded-2xl bg-background-card/60 lg:bg-transparent border border-white/5 lg:border-0 ${focusRing}`}
                        >
                            <span className="flex items-center justify-center w-12 h-12 shrink-0 rounded-full bg-background-paper border border-secondary/50 font-mono text-sm font-bold text-white group-hover:border-accent-teal transition-colors">
                                {quarter.label}
                            </span>
                            <span className="block flex-1 min-w-0 lg:w-full lg:p-5 lg:rounded-2xl lg:bg-background-card/60 lg:border lg:border-white/5 lg:group-hover:border-secondary/30 transition-colors">
                                <span className="block font-mono text-xs uppercase tracking-widest text-accent-teal">{quarter.monthsShort}</span>
                                <span className="block font-heading font-semibold text-white leading-snug mt-1">{quarter.title}</span>
                                <span className="hidden lg:block text-xs text-gray-400 mt-2">Gates: {quarter.gateShort}</span>
                            </span>
                            <ChevronRight size={18} aria-hidden="true" className="lg:hidden text-gray-500 shrink-0" />
                        </a>
                    </li>
                ))}
            </ol>
        </nav>

        <div className="space-y-8">
            {quarters.map((quarter) => (
                <QuarterCard key={quarter.id} quarter={quarter} />
            ))}
        </div>
    </Section>
);

const ReviewGates = () => (
    <Section id="review-gates" labelledBy="review-gates-heading">
        <SectionHeader id="review-gates-heading" eyebrow="Engineering Review Gates" tone="blue" title="Eight Reviews, One Question Each">
            A gate is a decision point. Work does not move to the next stage until the review question can be answered with evidence.
        </SectionHeader>

        {/* Vertical rail on phones, wrapping left-to-right sequence from md up */}
        <ol className="ml-1.5 border-l border-white/10 space-y-3 md:ml-0 md:border-l-0 md:space-y-0 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-4">
            {reviewGates.gates.map((gate, idx) => (
                <li key={gate.code} className="relative pl-6 md:pl-0">
                    <span aria-hidden="true" className="md:hidden absolute -left-[5px] top-7 w-2.5 h-2.5 rounded-full bg-accent-teal" />
                    <div className="h-full p-4 sm:p-5 rounded-2xl bg-background-card border border-white/5">
                        <div className="flex items-baseline justify-between gap-3 mb-1.5">
                            <span className="font-heading text-2xl font-bold text-white">{gate.display ?? gate.code}</span>
                            <span className="font-mono text-xs text-accent-teal">{gate.quarter}</span>
                        </div>
                        <h3 className="text-sm font-semibold text-gray-200 leading-snug">{gate.name}</h3>
                        {gate.note && <p className="text-xs text-violet-300 mt-1">{gate.note}</p>}
                        <p className="text-sm text-gray-400 leading-relaxed mt-2">{gate.question}</p>
                    </div>
                    {idx < reviewGates.gates.length - 1 && (
                        <ChevronRight size={14} aria-hidden="true" className="hidden md:block absolute -right-[15px] top-1/2 -translate-y-1/2 text-gray-500" />
                    )}
                </li>
            ))}
        </ol>

        <p className="mt-8 text-sm text-gray-400 leading-relaxed text-center">
            {reviewGates.reference.lead}{" "}
            <NewTabLink href={reviewGates.reference.href} className={`font-semibold text-violet-300 hover:text-white underline underline-offset-4 rounded ${focusRing}`}>
                {reviewGates.reference.label}
            </NewTabLink>.
        </p>
    </Section>
);

const Artefacts = () => (
    <Section id="artefacts" labelledBy="artefacts-heading" paper>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
                <SectionHeader id="artefacts-heading" eyebrow="Documentation" title="Engineering Artefacts" align="left" />
                <p className="text-gray-300 leading-relaxed">{artefacts.note}</p>
            </div>

            <ul className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 content-start">
                {artefacts.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 py-2.5 border-b border-white/5 text-sm text-gray-200 leading-snug">
                        <Check size={16} aria-hidden="true" className="text-accent-teal mt-0.5 shrink-0" />
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    </Section>
);

const DigitalTwin = () => (
    <Section id="digital-twin" labelledBy="digital-twin-heading">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
                <SectionHeader id="digital-twin-heading" eyebrow="Core Theme" tone="teal" title="Digital Twin Engineering" align="left" />
                <p className="text-gray-300 leading-relaxed mb-8">{digitalTwin.intro}</p>
                <FlowSteps steps={digitalTwin.steps} label="Digital twin cycle" />

                <div className="mt-8 p-5 rounded-2xl bg-secondary/5 border border-secondary/20">
                    <p className="text-sm text-gray-300 leading-relaxed">{digitalTwin.cubeTwin.text}</p>
                    <NewTabLink
                        href={digitalTwin.cubeTwin.href}
                        onClick={() => logEvent('click_cubetwin', 'Space Research Digital Twin', spaceProgram.heading)}
                        className={textLink}
                    >
                        {digitalTwin.cubeTwin.linkLabel}
                        <ArrowUpRight size={16} aria-hidden="true" />
                    </NewTabLink>
                </div>
            </div>

            {/* Worked example: why measured data matters */}
            <div className="p-6 lg:p-8 rounded-3xl bg-background-card/50 border border-white/10">
                <div className="flex items-center justify-between gap-4 mb-4">
                    <h3 className="text-lg font-bold text-white">Predicted vs Measured</h3>
                    <span className="text-xs font-semibold text-gray-300 px-2.5 py-1 rounded-md bg-white/5 border border-white/10">Illustrative</span>
                </div>

                <TwinChart />
                <ul className="flex flex-wrap gap-x-6 gap-y-1 mt-2 mb-6 text-xs text-gray-400">
                    <li className="flex items-center gap-2">
                        <span aria-hidden="true" className="w-6 border-t-2 border-dashed border-violet-300" /> Predicted
                    </li>
                    <li className="flex items-center gap-2">
                        <span aria-hidden="true" className="w-6 border-t-2 border-accent-teal" /> Measured
                    </li>
                </ul>

                {/* Rows on phones, three tiles from sm up */}
                <dl className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden mb-6">
                    {digitalTwin.example.map((stat) => (
                        <div key={stat.label} className="flex items-center justify-between sm:flex-col-reverse sm:items-start sm:justify-end gap-x-4 gap-y-1 px-4 py-3 sm:p-4 bg-background">
                            <dt className="text-xs text-gray-400 leading-snug">{stat.label}</dt>
                            <dd className="font-heading text-base sm:text-xl font-bold text-white whitespace-nowrap">{stat.value}</dd>
                        </div>
                    ))}
                </dl>

                <h4 className="text-base font-bold text-white mb-3">{digitalTwin.whyLead}</h4>
                <ChipList items={digitalTwin.factors} className="mb-5" />
                <p className="text-sm text-gray-300 leading-relaxed mb-4">{digitalTwin.lesson}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{digitalTwin.disclaimer}</p>
            </div>
        </div>
    </Section>
);

const ResearchQuestions = () => (
    <Section id="research-questions" labelledBy="research-questions-heading" paper>
        <SectionHeader id="research-questions-heading" eyebrow="Research Directions" title="Example Research Questions">
            {researchQuestions.note}
        </SectionHeader>

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
            {researchQuestions.items.map((question, idx) => (
                <li key={question} className="flex items-start gap-4 py-4 border-t border-white/10">
                    <span aria-hidden="true" className="font-mono text-xs text-accent-teal mt-1 shrink-0">{String(idx + 1).padStart(2, "0")}</span>
                    <span className="text-sm text-gray-200 leading-relaxed">{question}</span>
                </li>
            ))}
        </ol>
    </Section>
);

const Safety = () => (
    <Section id="safety" labelledBy="safety-heading">
        <SectionHeader id="safety-heading" eyebrow="Mandatory" tone="teal" title="Safety & Regulatory Compliance" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-8">
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-accent-teal/5 border border-accent-teal/30">
                    <ShieldCheck size={24} aria-hidden="true" className="text-accent-teal mt-0.5 shrink-0" />
                    <p className="text-base text-gray-100 leading-relaxed">{safety.statement}</p>
                </div>

                <div>
                    <h3 className={`${labelHeading} mb-4`}>From design to authorised activity</h3>
                    <FlowSteps steps={safety.lifecycle} label="Safety and compliance lifecycle" />
                </div>

                <p className="text-sm text-gray-400 leading-relaxed">{safety.propulsion}</p>
            </div>

            <div className="lg:col-span-5 p-6 lg:p-8 rounded-2xl bg-background-card/50 border border-white/5">
                <h3 className="text-lg font-bold text-white mb-4">{safety.considerLead}</h3>
                <DotList items={safety.considerations} className="space-y-3" />

                <div className="mt-6 pt-5 border-t border-white/5">
                    <p className="text-sm text-gray-400 leading-relaxed">{safety.sourcesLead}</p>
                    <ul className="flex flex-wrap gap-x-6">
                        {safety.sources.map((source) => (
                            <li key={source.href}>
                                <NewTabLink href={source.href} className={textLink}>
                                    {source.label}
                                    <ArrowUpRight size={16} aria-hidden="true" />
                                </NewTabLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </Section>
);

const Competition = () => (
    <Section id="competitions" labelledBy="competition-heading" paper>
        <SectionHeader id="competition-heading" eyebrow="Opportunity" title="Competition Readiness">
            {competition.intro}
        </SectionHeader>

        <FlowSteps steps={competition.ladder} label="Competition readiness pathway" className="justify-center mb-10" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* India */}
            <div className="bg-background-card p-6 lg:p-8 rounded-2xl border border-white/5">
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
                <DotList items={competition.india.conditions} className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-6" />
                <p className="text-sm text-gray-300 leading-relaxed">{competition.india.note}</p>
            </div>

            {/* International */}
            <div className="bg-background-card p-6 lg:p-8 rounded-2xl border border-white/5">
                <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-blue-400 mb-3">
                    <Globe size={14} aria-hidden="true" /> International
                </p>
                <h3 className="text-xl font-bold text-white mb-5 leading-snug">{competition.international.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">{competition.international.lead}</p>
                <DotList items={competition.international.references} className="space-y-2.5 mb-6" />
                <p className="text-sm text-gray-300 leading-relaxed">{competition.international.note}</p>
            </div>
        </div>

        <div className="mt-10 max-w-4xl mx-auto text-center space-y-3">
            <p className="text-sm font-semibold text-gray-200">{competition.participation}</p>
            <p className="text-xs text-gray-400 leading-relaxed">{competition.disclaimer}</p>
        </div>
    </Section>
);

const Evidence = () => (
    <Section id="first-cohort" labelledBy="first-cohort-heading">
        {/* 2026 First Cohort */}
        <SectionHeader id="first-cohort-heading" eyebrow="Evidence" tone="teal" title="2026 First Cohort" align="left">
            {firstCohort.intro}
        </SectionHeader>

        {/* Stacked rows on phones, a three-column table layout from md up */}
        <dl className="border-t border-white/5">
            {firstCohort.evidence.map((row) => (
                <div key={row.field} className="flex flex-wrap items-center gap-x-4 gap-y-1.5 py-4 border-b border-white/5 md:grid md:grid-cols-[10rem_1fr_7rem] md:items-start md:gap-x-8">
                    <dt className="flex-1 text-sm font-semibold text-white">{row.field}</dt>
                    <dd className="md:order-3 md:justify-self-end"><StatusBadge status={row.status} /></dd>
                    <dd className="w-full md:w-auto md:order-2 text-sm text-gray-400 leading-relaxed">{row.value}</dd>
                </div>
            ))}
        </dl>

        <div className="mt-3 flex flex-wrap items-center justify-between gap-x-6">
            <NewTabLink
                href={firstCohort.href}
                onClick={() => logEvent('click_first_cohort_evidence', 'Space Research Evidence', spaceProgram.heading)}
                className={textLink}
            >
                {firstCohort.linkLabel}
                <ArrowUpRight size={16} aria-hidden="true" />
            </NewTabLink>
            <p className="text-xs text-gray-400">Source: project page. Last reviewed {firstCohort.reviewed}.</p>
        </div>

        {/* Research & Technical Outputs */}
        <div id="outputs" className="mt-12 p-6 lg:p-8 rounded-3xl bg-background-card/50 border border-white/5 scroll-mt-32">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 mb-6">
                <h2 className="text-2xl font-bold text-white">Research &amp; Technical Outputs</h2>
                <p className="text-sm font-semibold text-violet-300">{researchOutputs.headline}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {outputStatuses.map((status) => {
                    const items = researchOutputs.items.filter((item) => item.status === status);
                    if (items.length === 0) {
                        return null;
                    }
                    return (
                        <div key={status}>
                            <h3 className="mb-3"><StatusBadge status={status} /></h3>
                            <ul className="space-y-2.5">
                                {items.map((item) => (
                                    <li key={item.name} className="text-sm leading-snug">
                                        <span className="font-medium text-gray-200">{item.name}</span>
                                        {item.note && <span className="block text-gray-400 mt-0.5">{item.note}</span>}
                                        {item.href && (
                                            <NewTabLink href={item.href} className={textLink}>
                                                View design report
                                                <ArrowUpRight size={16} aria-hidden="true" />
                                            </NewTabLink>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>

            <dl className="mt-6 pt-5 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-2">
                {researchOutputs.legend.map((entry) => (
                    <div key={entry.status} className="text-xs leading-relaxed">
                        <dt className="inline font-semibold text-gray-300">{entry.status}: </dt>
                        <dd className="inline text-gray-400">{entry.meaning}</dd>
                    </div>
                ))}
            </dl>
        </div>
    </Section>
);

const ResearchTeam = () => (
    <Section id="research-team" labelledBy="research-team-heading" paper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            {/* Portfolio */}
            <div>
                <SectionHeader id="research-team-heading" eyebrow="Portfolio" tone="blue" title="Aerospace & Space Research" align="left">
                    {portfolio.intro}
                </SectionHeader>
                <ChipList items={portfolio.areas} className="mb-10" />

                <h3 className={`${labelHeading} mb-2`}>Research &amp; Learning Ecosystem</h3>
                <ul className="divide-y divide-white/5">
                    {ecosystem.map((org) => (
                        <li key={org.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-x-6 py-3">
                            <div>
                                <p className="text-sm font-semibold text-white">{org.name}</p>
                                <p className="text-sm text-gray-400 leading-relaxed">{org.role}</p>
                            </div>
                            {org.href && (
                                <NewTabLink
                                    href={org.href}
                                    onClick={() => logEvent('click_ecosystem_link', 'Space Research Ecosystem', org.name)}
                                    className={`${textLink} shrink-0`}
                                >
                                    {org.linkLabel}
                                    <ArrowUpRight size={16} aria-hidden="true" />
                                </NewTabLink>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Research team */}
            <div className="flex flex-col bg-background-card p-6 lg:p-8 rounded-2xl border border-white/5">
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
                        <p className="text-xs font-bold uppercase tracking-widest text-accent-teal mb-1">{portfolio.leadRole}</p>
                        <h3 className="text-2xl font-bold text-white">{lead.name}</h3>
                        <p className="text-sm text-gray-400 mt-1 leading-relaxed">{lead.title}, {lead.company}</p>
                    </div>
                </div>

                <h4 className={`${labelHeading} mb-3`}>Research &amp; Engineering Focus</h4>
                <DotList items={portfolio.leadFocus} className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-6" />

                <ul className="pt-4 border-t border-white/5 flex flex-col sm:flex-row sm:flex-wrap gap-x-6">
                    <li>
                        <Link to={spaceLinks.leadProfile} className={textLink}>
                            THASMAI Profile
                            <ArrowRight size={16} aria-hidden="true" />
                        </Link>
                    </li>
                    <li>
                        <NewTabLink href={spaceLinks.leadAerospace} className={textLink}>
                            Aerospace &amp; Space Research Profile
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
            </div>
        </div>
    </Section>
);

const Governance = () => (
    <Section id="governance" labelledBy="governance-heading">
        <SectionHeader id="governance-heading" eyebrow="Governance" title="Engineering & Research Governance">
            {governance.intro}
        </SectionHeader>

        <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8">
            {governance.elements.map((element) => (
                <div key={element.name} className="py-4 border-t border-white/10">
                    <dt className="text-sm font-semibold text-white mb-1">{element.name}</dt>
                    <dd className="text-sm text-gray-400 leading-relaxed">{element.detail}</dd>
                </div>
            ))}
        </dl>

        <div className="mt-8 p-6 rounded-2xl bg-background-card/50 border border-white/5">
            <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="text-lg font-bold text-white">{governance.externalReview.title}</h3>
                <StatusBadge status={governance.externalReview.status} />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-3xl">{governance.externalReview.detail}</p>
        </div>
    </Section>
);

const Outcomes = () => (
    <Section id="outcomes" labelledBy="outcomes-heading" paper>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Audience */}
            <div className="lg:col-span-4">
                <SectionHeader eyebrow="Audience" tone="blue" title="Who It Is For" align="left" />
                <h3 className={`${labelHeading} mb-3`}>Students</h3>
                <ChipList items={audience.students} className="mb-3" />
                <ChipList items={audience.disciplines} className="mb-8" />
                <h3 className={`${labelHeading} mb-3`}>Also suitable for</h3>
                <DotList items={audience.alsoFor} className="space-y-2.5" />
            </div>

            {/* Outcomes */}
            <div className="lg:col-span-8">
                <SectionHeader id="outcomes-heading" eyebrow="Capability Outcomes" tone="teal" title="Program Outcomes" align="left">
                    {outcomes.lead}
                </SectionHeader>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                    {outcomes.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 py-3 border-b border-white/5 text-sm text-gray-200 leading-snug">
                            <Check size={16} aria-hidden="true" className="text-accent-teal mt-0.5 shrink-0" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        <div className="mt-12 pt-10 border-t border-white/5">
            <h3 className="text-xl font-bold text-white mb-2">Career &amp; Research Pathways</h3>
            <p className="text-sm text-gray-400 leading-relaxed max-w-3xl mb-5">{outcomes.careersLead}</p>
            <InlineList items={outcomes.careers} className="max-w-4xl" />
        </div>
    </Section>
);

const Faq = () => (
    <Section id="faq" labelledBy="faq-heading">
        <SectionHeader id="faq-heading" eyebrow="FAQ" tone="blue" title="Frequently Asked Questions" />

        <div className="max-w-3xl lg:max-w-none mx-auto grid grid-cols-1 lg:grid-cols-2 gap-3 items-start">
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
    </Section>
);

const Apply = () => (
    <Section id="apply" labelledBy="apply-heading" paper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-background-card p-6 lg:p-8 rounded-2xl border border-white/5">
                <h2 className="text-xl font-bold text-white mb-4">Program Information</h2>
                <dl className="divide-y divide-white/5">
                    {programInfo.map((row) => (
                        <div key={row.label} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 py-3.5">
                            <dt className="sm:w-36 shrink-0 text-xs font-semibold uppercase tracking-wider text-gray-400">{row.label}</dt>
                            <dd className="text-sm lg:text-base font-medium text-white leading-snug">{row.value}</dd>
                        </div>
                    ))}
                </dl>
            </div>

            <div className="relative flex flex-col justify-center bg-gradient-to-br from-[#111827] to-[#1F2937] p-6 lg:p-10 rounded-3xl border border-white/10 overflow-hidden">
                <div aria-hidden="true" className="absolute top-0 right-0 w-48 h-48 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10">
                    <Eyebrow tone="teal">Next Cohort · {spaceProgram.nextBatch}</Eyebrow>
                    <h2 id="apply-heading" className="text-3xl lg:text-4xl font-bold mt-4 mb-4 text-white">Collaborate or Apply</h2>
                    <p className="text-gray-300 leading-relaxed mb-8">{apply.lead}</p>
                    <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
                        <Link
                            to={spaceLinks.leadProfile}
                            onClick={() => logEvent('click_contact_fees', 'Space Research Apply', spaceProgram.heading)}
                            className={`${btnPrimary} lg:px-6`}
                        >
                            Contact for Program Details &amp; Fees
                            <ArrowRight size={18} aria-hidden="true" className="shrink-0 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <NewTabLink
                            href={spaceLinks.firstBatch}
                            onClick={() => logEvent('click_first_cohort_apply', 'Space Research Apply', spaceProgram.heading)}
                            className={`${btnSecondary} lg:px-6`}
                        >
                            2026 First Cohort
                            <ArrowUpRight size={18} aria-hidden="true" className="shrink-0" />
                        </NewTabLink>
                    </div>
                </div>
            </div>
        </div>
    </Section>
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
            <Timeline />
            <SectionNav />
            <Mission />
            <ResearchAreas />
            <Pathway />
            <Program />
            <ReviewGates />
            <Artefacts />
            <DigitalTwin />
            <ResearchQuestions />
            <Safety />
            <Competition />
            <Evidence />
            <ResearchTeam />
            <Governance />
            <Outcomes />
            <Faq />
            <Apply />
        </div>
    );
};

export default SpaceResearchPage;
