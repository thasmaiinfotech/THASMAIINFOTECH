import React, { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { BellRing, BusFront, Pause, Play, ShieldCheck } from 'lucide-react';

// Concept preview for BusBuddy: a journey runs along a route line while a trusted
// contact's phone receives each update. Every place, time and message in it is
// illustrative. The loop runs only while the preview is on screen, can be paused,
// and stays still for visitors who prefer reduced motion until they press play.

// Route in SVG units. Straight segments, so the marker can cover each leg with a
// plain CSS transition and stay on the line.
const stops = [
    { x: 20, y: 60 },   // Mangaluru
    { x: 120, y: 60 },  // Mulki
    { x: 196, y: 40 },  // Padubidri
    { x: 296, y: 40 },  // Kaup
    { x: 380, y: 20 }   // Udupi
];
const lastStop = stops.length - 1;
const routePath = stops.map((stop, idx) => `${idx === 0 ? "M" : "L"}${stop.x} ${stop.y}`).join("");

// Share of the route covered on reaching each stop, from 0 to 100
const legs = stops.map((stop, idx) => (idx === 0 ? 0 : Math.hypot(stop.x - stops[idx - 1].x, stop.y - stops[idx - 1].y)));
const routeLength = legs.reduce((sum, leg) => sum + leg, 0);
const covered = legs.map((_, idx) => (legs.slice(0, idx + 1).reduce((sum, leg) => sum + leg, 0) / routeLength) * 100);

const TRAVEL_MS = 1900;

const updates = [
    { label: "Journey started", time: "7:10 PM", detail: "Mangaluru → Udupi · ETA 8:35 PM" },
    { label: "Passed Mulki", time: "7:48 PM", detail: "On the way · ETA 8:35 PM" },
    { label: "ETA updated", time: "8:02 PM", detail: "Now arriving 8:42 PM" },
    { label: "Arrived safely", time: "8:42 PM", detail: "Udupi · Sharing ended" }
];

// One frame per beat. `at` is the stop the marker is heading to, `sent` is how many
// updates the trusted contact has received, `hold` is how long the frame lasts.
const frames = [
    { at: 0, sent: 0, hold: 1700, status: "Scheduled", etaLabel: "ETA", eta: "8:35 PM", note: "Departs 7:10 PM" },
    { at: 1, sent: 1, hold: 2400, status: "On the way", etaLabel: "ETA", eta: "8:35 PM", note: "Last update 20 sec ago" },
    { at: 2, sent: 2, hold: 2400, status: "On the way", etaLabel: "ETA", eta: "8:35 PM", note: "Last update 20 sec ago" },
    { at: 3, sent: 3, hold: 2400, status: "On the way", etaLabel: "ETA", eta: "8:42 PM", note: "Last update 20 sec ago" },
    { at: 4, sent: 3, hold: 2200, status: "On the way", etaLabel: "ETA", eta: "8:42 PM", note: "Last update 20 sec ago" },
    { at: 4, sent: 4, hold: 4600, status: "Arrived", etaLabel: "Arrived at", eta: "8:42 PM", note: "Sharing ended on arrival", arrived: true }
];
// Shown when nothing is moving: mid-journey, with status, ETA and three updates
const RESTING_FRAME = 3;

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
const subscribeReducedMotion = (onChange) => {
    const query = window.matchMedia(REDUCED_MOTION);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
};
const getReducedMotion = () => window.matchMedia(REDUCED_MOTION).matches;
const subscribeNever = () => () => {};
const yes = () => true;
const no = () => false;

const focusRing = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const BusBuddyJourney = () => {
    const panelRef = useRef(null);
    const reducedMotion = useSyncExternalStore(subscribeReducedMotion, getReducedMotion, no);
    // False in the prerendered HTML, so a page read without JavaScript shows the full route
    const hydrated = useSyncExternalStore(subscribeNever, yes, no);
    const [inView, setInView] = useState(false);
    const [seen, setSeen] = useState(false);
    // The visitor's own play/pause choice; null until they use the control
    const [choice, setChoice] = useState(null);
    const [tick, setTick] = useState(0);

    const playing = choice ?? !reducedMotion;
    const frameIndex = choice === null && reducedMotion ? RESTING_FRAME : tick % frames.length;
    const frame = frames[frameIndex];
    const loop = Math.floor(tick / frames.length);
    const latest = updates[frame.sent - 1];
    // Entrance animations wait at their first keyframe until the preview is on screen
    const held = hydrated && !seen ? "[animation-play-state:paused]" : "";

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setInView(entry.isIntersecting);
            if (entry.isIntersecting) {
                setSeen(true);
            }
        }, { threshold: 0.35 });
        observer.observe(panelRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!playing || !inView) {
            return undefined;
        }
        const timer = setTimeout(() => setTick((current) => current + 1), frames[tick % frames.length].hold);
        return () => clearTimeout(timer);
    }, [playing, inView, tick]);

    return (
        <div ref={panelRef} className="relative w-full max-w-xl lg:max-w-none mx-auto bg-background-card/25 rounded-3xl border border-white/5 p-4 sm:p-6 backdrop-blur-sm overflow-hidden">
            {/* Map-style grid and glow */}
            <div aria-hidden="true" className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
            <div aria-hidden="true" className="absolute -top-20 -right-16 w-72 h-72 bg-accent-teal/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between gap-3 mb-3">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">Concept preview · illustrative</p>
                <button
                    type="button"
                    onClick={() => setChoice(!playing)}
                    aria-label={playing ? "Pause the journey animation" : "Play the journey animation"}
                    className={`flex items-center justify-center w-9 h-9 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-colors ${focusRing}`}
                >
                    {playing ? <Pause size={14} aria-hidden="true" /> : <Play size={14} aria-hidden="true" />}
                </button>
            </div>

            <div
                role="img"
                aria-label="Concept illustration of a BusBuddy journey from Mangaluru to Udupi. A bus moves along a route line while a trusted contact's phone shows the journey status, the ETA and a timeline of updates: journey started, passed Mulki, ETA updated and arrived safely. A small badge shows the SOS workflow on standby."
                className="relative z-10"
            >
                {/* Journey route line */}
                <div className={`text-right text-xs font-semibold transition-colors duration-500 ${frame.arrived ? "text-emerald-400" : "text-gray-300"}`}>Udupi</div>
                <svg viewBox="0 0 400 80" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Remounts on every loop, which replays the entrance and returns the marker to the start */}
                    <g key={loop}>
                        <path d={routePath} pathLength="100" strokeDasharray="100" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={`stroke-white/15 motion-safe:animate-route-draw ${held}`} />
                        <path
                            d={routePath}
                            pathLength="100"
                            strokeDasharray="100"
                            strokeWidth="3"
                            strokeLinejoin="round"
                            className="stroke-accent-teal"
                            style={{ strokeDashoffset: 100 - covered[frame.at], transition: `stroke-dashoffset ${TRAVEL_MS}ms ease-in-out` }}
                        />

                        {stops.map((stop, idx) => {
                            const reached = idx <= frame.at;
                            const tone = idx === lastStop && frame.arrived
                                ? "fill-emerald-400 stroke-emerald-400"
                                : reached ? "fill-background stroke-accent-teal" : "fill-background stroke-white/40";
                            return (
                                <circle
                                    key={idx}
                                    cx={stop.x}
                                    cy={stop.y}
                                    r={idx === 0 || idx === lastStop ? 6 : 4}
                                    strokeWidth="2"
                                    className={`transition-colors duration-300 motion-safe:animate-fade-in ${held} ${tone}`}
                                    // A stop changes colour as the marker arrives, not as it sets off
                                    style={{ animationDelay: `${idx * 180}ms`, transitionDelay: idx === frame.at && idx > 0 && !frame.arrived ? `${TRAVEL_MS}ms` : "0ms" }}
                                />
                            );
                        })}
                        {frame.arrived && (
                            <circle cx={stops[lastStop].x} cy={stops[lastStop].y} r="12" className="stroke-emerald-400/40 motion-safe:animate-fade-in" />
                        )}

                        {/* Traveller's bus */}
                        <g style={{ transform: `translate(${stops[frame.at].x}px, ${stops[frame.at].y}px)`, transition: `transform ${TRAVEL_MS}ms ease-in-out` }}>
                            <g className={`motion-safe:animate-fade-in ${held}`}>
                                <circle r="16" className="fill-accent-teal/15" />
                                <circle r="11" className="fill-accent-teal" />
                                <BusFront x="-7" y="-7" width="14" height="14" strokeWidth={2.25} className="text-background" />
                            </g>
                        </g>
                    </g>
                </svg>
                <div className="text-xs font-semibold text-gray-300">Mangaluru</div>

                <div className="relative mx-auto mt-5 mb-3 w-[17rem] max-w-full flex flex-col items-center">
                    {/* Guardian notification card */}
                    <div className="relative z-10 w-full -mb-5 sm:translate-x-8">
                        <div
                            key={frame.sent}
                            className={`flex items-start gap-3 px-3.5 py-3 rounded-2xl bg-background-card/90 border border-white/10 shadow-xl shadow-black/30 backdrop-blur-md motion-safe:animate-fade-up ${latest ? "" : "invisible"}`}
                        >
                            <span className={`flex items-center justify-center w-8 h-8 shrink-0 rounded-lg ${frame.arrived ? "bg-emerald-400/15 text-emerald-400" : "bg-accent-teal/15 text-accent-teal"}`}>
                                <BellRing size={16} />
                            </span>
                            <span className="min-w-0 flex-1">
                                <span className="flex items-baseline justify-between gap-2">
                                    <span className="font-heading text-sm font-semibold text-white">{(latest ?? updates[0]).label}</span>
                                    <span className="text-[10px] text-gray-500">now</span>
                                </span>
                                <span className="block text-xs text-gray-400 leading-snug">{(latest ?? updates[0]).detail}</span>
                            </span>
                        </div>
                    </div>

                    {/* Trusted contact's phone */}
                    <div className="w-60 max-w-full rounded-[2rem] border-[3px] border-gray-700 bg-background p-1.5 shadow-2xl shadow-black/40">
                        <div className="rounded-[1.5rem] bg-background-paper px-4 pt-9 pb-8">
                            <div className="flex items-center justify-between mb-3">
                                <span className="flex items-center gap-1.5 font-heading text-xs font-semibold text-white">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent-teal" />
                                    BusBuddy
                                </span>
                                <span className="text-[10px] font-medium uppercase tracking-wider text-gray-500">Family view</span>
                            </div>

                            <div className="text-[10px] font-medium uppercase tracking-wider text-gray-500">Shared journey</div>
                            <div className="font-heading text-sm font-semibold text-white mb-3">Mangaluru → Udupi</div>

                            <div className="grid grid-cols-2 gap-2 mb-2">
                                <div className="px-2.5 py-2 rounded-xl bg-background border border-white/5">
                                    <div className="text-[10px] text-gray-500">Status</div>
                                    <div className={`text-xs font-semibold transition-colors duration-500 ${frame.arrived ? "text-emerald-400" : "text-white"}`}>{frame.status}</div>
                                </div>
                                <div className="px-2.5 py-2 rounded-xl bg-background border border-white/5">
                                    <div className="text-[10px] text-gray-500">{frame.etaLabel}</div>
                                    <div className="text-xs font-semibold text-accent-teal">{frame.eta}</div>
                                </div>
                            </div>
                            <div className="text-[10px] text-gray-500 mb-3">{frame.note}</div>

                            <div className="space-y-2 pt-3 border-t border-white/5">
                                {updates.map((update, idx) => {
                                    const shown = idx < frame.sent;
                                    const final = idx === updates.length - 1;
                                    return (
                                        <div key={update.label} className={`flex items-center gap-2 text-[11px] transition-all duration-500 ${shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}`}>
                                            <span className={`w-1.5 h-1.5 shrink-0 rounded-full ${final ? "bg-emerald-400" : "bg-accent-teal"}`} />
                                            <span className={`flex-1 font-medium ${final ? "text-emerald-400" : "text-gray-200"}`}>{update.label}</span>
                                            <span className="text-gray-500">{update.time}</span>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="mt-3 pt-3 border-t border-white/5 text-[10px] text-gray-500">
                                Safety status: <span className="font-semibold text-gray-300">Normal</span>
                            </div>
                        </div>
                    </div>

                    {/* SOS status */}
                    <div className="absolute -bottom-3 left-0 sm:-left-8 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background-card border border-white/10 shadow-lg shadow-black/30 text-[11px] font-semibold text-gray-300">
                        <ShieldCheck size={13} className="text-accent-teal" />
                        SOS · Standby
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusBuddyJourney;
