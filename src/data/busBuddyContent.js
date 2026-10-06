// Content for the /busbuddy page.
// Plain data only (no JSX) so generate-static.js can import it under Node.
//
// Claims policy: BusBuddy is pre-launch. This page says what the product is designed
// to do and what is planned. Nothing here should read as a shipped feature, a running
// pilot or a signed partner until that is true. Move an item from "Defined" or
// "Planned" to "Available" only when visitors can actually use it.

import { busBuddy, busBuddyLinks } from './busBuddy.js';
import { SITE_URL, ORGANIZATION_ID, organizationSchema } from '../utils/structuredData.js';

export const hero = {
    eyebrow: busBuddy.label,
    headline: busBuddy.name,
    subtitle: busBuddy.subtitle,
    statement: "BusBuddy is Thasmai InfoTech’s flagship mobility-safety platform for travellers, families and transport ecosystems. Starting in Mangaluru, Udupi and Dakshina Kannada, BusBuddy combines consent-based journey sharing, ETA, smart alerts, SOS workflows and safe-arrival confirmation across iOS, Android and the web. The long-term platform is designed for family safety, colleges, employers and bus operators through secure APIs, operator integrations and journey intelligence.",
    facts: [
        { label: "Status", value: busBuddy.status },
        { label: "Starting region", value: "Coastal Karnataka" },
        { label: "Planned platforms", value: "iOS · Android · Web" },
        { label: "Sharing model", value: "Consent-based" }
    ]
};

export const problem = {
    lead: "People travelling alone by bus often rely on repeated phone calls or WhatsApp messages to reassure family members.",
    promise: "The first release is designed to answer these questions through one journey flow, shared only with the people the traveller chooses.",
    unknownsTitle: "What families are left wondering",
    unknowns: [
        "Did the traveller actually board?",
        "Has the trip started?",
        "Is the bus delayed?",
        "Is the journey progressing normally?",
        "When will they arrive?",
        "Have they reached safely?",
        "Do they need help?"
    ]
};

export const journey = {
    intro: "The first release is built around a single journey, from planning the trip to confirming safe arrival.",
    steps: [
        {
            title: "Plan the journey",
            detail: "Enter the origin, destination and planned departure. Operator and bus details are optional."
        },
        {
            title: "Choose trusted contacts",
            detail: "Invite the people who should follow this trip. A contact has to accept the invitation before seeing anything."
        },
        {
            title: "Start, and share with consent",
            detail: "Sharing stays off until the traveller turns it on. Who will see what, and for how long, is shown before the journey starts."
        },
        {
            title: "Stay connected on the way",
            detail: "Trusted contacts follow journey status, approximate location and ETA, each shown with the time it was last updated."
        },
        {
            title: "Confirm safe arrival",
            detail: "The traveller marks safe arrival, trusted contacts are notified, and location sharing for the trip ends."
        }
    ],
    sos: {
        title: "SOS, if it is ever needed",
        detail: "A guarded SOS action with a short cancel window sends the selected trusted contacts a high-priority alert with the time and the permitted location.",
        note: busBuddy.emergencyNote
    }
};

export const capabilities = {
    intro: "Scope is staged so the core safety flow is dependable before more is added.",
    stages: [
        {
            title: "First release",
            status: "Defined",
            items: [
                "Sign-in and profile",
                "Trusted contacts and invitations",
                "Create and start a journey",
                "Journey status and timeline",
                "Consent-based approximate location",
                "ETA with last-update time",
                "Journey-start and arrival notifications",
                "SOS workflow for trusted contacts",
                "Safe-arrival confirmation",
                "Family and trusted-contact view",
                "Revoke sharing and delete account",
                "Admin console and audit log"
            ]
        },
        {
            title: "Next",
            status: "Planned",
            items: [
                "Stop alerts",
                "Delay alerts",
                "Guardian check-in",
                "Route history",
                "Offline queue for weak networks",
                "English and Kannada interface",
                "Accessibility mode with larger controls",
                "Trip-share link"
            ]
        },
        {
            title: "Later",
            status: "Planned",
            items: [
                "Ticket import",
                "Bus operator integration",
                "Live bus GPS",
                "AI-assisted ETA",
                "Missed-stop detection",
                "Institution roster and bulk trip upload",
                "Emergency response partner integration"
            ]
        }
    ],
    legend: [
        { status: "Defined", meaning: "scope agreed for the first release; not yet available." },
        { status: "Planned", meaning: "intended for a later release." }
    ]
};

export const audiences = [
    {
        title: "Travellers and families",
        groups: [
            { key: "student", name: "Students", need: "Travel independently while a parent or guardian follows the trip." },
            { key: "guardian", name: "Parents and guardians", need: "Know a journey is progressing without calling repeatedly." },
            { key: "solo", name: "Solo travellers", need: "Voluntary, private sharing that ends when the trip does." },
            { key: "senior", name: "Senior citizens", need: "A simple flow with large controls and family-assisted setup." },
            { key: "night", name: "Night and long-distance travellers", need: "ETA, delay notifications and safe-arrival confirmation." }
        ]
    },
    {
        title: "Institutions and operators",
        groups: [
            { key: "college", name: "Colleges, universities and hostels", need: "Opt-in visibility for student home travel and college transport." },
            { key: "employer", name: "Employers", need: "Late-shift and shuttle travel with a clear escalation workflow." },
            { key: "operator", name: "Bus and travel operators", need: "Passenger-safety differentiation and service-status communication." },
            { key: "tour", name: "Tour operators and care providers", need: "Assisted pickups, transfers and group travel with family notification." }
        ]
    }
];

export const privacy = {
    intro: "Location is sensitive. BusBuddy is designed so that the traveller decides what is shared, with whom, and for how long.",
    principles: [
        { title: "Off by default", detail: "Location sharing starts only when the traveller turns it on." },
        { title: "Bound to the journey", detail: "Sharing is per journey or explicitly time-bound, and ends on safe arrival." },
        { title: "Revocable at any time", detail: "Revoking a contact removes their access straight away." },
        { title: "Only what is approved", detail: "Trusted contacts see the fields approved for them, and only after accepting an invitation." },
        { title: "Approximate first", detail: "Approximate location is used where it is adequate. Exact location is optional." },
        { title: "Never stale as live", detail: "Status and location carry their last-update time, and old data is labelled as old." },
        { title: "Audited", detail: "Safety-critical events and sensitive access are recorded in an audit log." },
        { title: "Not for sale", detail: "Personal location data is not sold." }
    ],
    scope: [
        {
            key: "emergency",
            title: "Not an emergency service",
            detail: `${busBuddy.emergencyNote} The SOS workflow alerts the trusted contacts the traveller has selected.`
        },
        {
            key: "ai",
            title: "AI after reliability",
            detail: "AI is planned for ETA refinement and delay prediction once the core flow is dependable. It is not used to declare a person unsafe or to escalate an emergency on its own."
        }
    ]
};

export const region = {
    intro: "BusBuddy starts in coastal Karnataka, where buses carry daily student, commuter and intercity travel between towns such as Mangaluru, Udupi, Manipal, Karkala, Kundapura, Bantwal and Puttur.",
    corridorsLabel: "Priority pilot corridors (planned)",
    corridors: [
        "Mangaluru ↔ Udupi",
        "Mangaluru ↔ Manipal",
        "Mangaluru ↔ Karkala",
        "Mangaluru ↔ Kundapura",
        "Mangaluru ↔ Bantwal",
        "Mangaluru ↔ Puttur",
        "Mangaluru ↔ Bengaluru",
        "Udupi / Manipal ↔ Bengaluru"
    ]
};

export const roadmap = {
    note: "A direction rather than a commitment. Each stage depends on what the pilots show.",
    stages: [
        {
            when: "Year 1",
            title: "Prove safety value",
            where: "Mangaluru, Udupi and Dakshina Kannada",
            items: [
                "Journey sharing with trusted contacts",
                "ETA and safe-arrival confirmation",
                "SOS workflow",
                "Family dashboard",
                "Consent and privacy controls"
            ]
        },
        {
            when: "Year 2",
            title: "Build the mobility network",
            where: "Karnataka",
            items: [
                "Bus operator integrations",
                "College and employer dashboards",
                "Service disruption alerts",
                "Route history",
                "APIs and webhooks"
            ]
        },
        {
            when: "Year 3",
            title: "Scale the platform",
            where: "Beyond Karnataka",
            items: [
                "Partner and white-label integrations",
                "Multimodal journeys",
                "AI-assisted ETA",
                "Missed-stop detection",
                "Enterprise analytics"
            ]
        }
    ]
};

export const pilot = {
    intro: "We are looking for a small number of pilot partners in Mangaluru, Udupi and Dakshina Kannada. Taking part is voluntary and opt-in for every traveller.",
    tracks: [
        {
            key: "college",
            title: "Colleges and hostels",
            detail: "Student journeys with opt-in guardian visibility, looking at guardian engagement, safe-arrival confirmation and usability."
        },
        {
            key: "operator",
            title: "Bus operators",
            detail: "Trip status and family sharing on selected buses, with an operator dashboard."
        },
        {
            key: "family",
            title: "Families",
            detail: "Repeated long-distance journeys with a small group of families."
        }
    ],
    contactNote: "Choose “BusBuddy Pilot” as the area of interest in the contact form."
};

export const busBuddySeo = {
    url: `${SITE_URL}${busBuddyLinks.page}`,
    image: `${SITE_URL}/logo.png`,
    title: "BusBuddy – Travel Safety & Journey Intelligence Platform | THASMAI INFOTECH",
    description: "BusBuddy is a travel safety platform in development at Thasmai InfoTech: consent-based journey sharing, ETA, smart alerts, SOS workflows and safe-arrival confirmation for bus travellers and their families, starting in coastal Karnataka.",
    keywords: "BusBuddy, travel safety app, bus journey sharing, trusted contacts, safe arrival confirmation, journey ETA, SOS workflow, family travel safety, student travel safety, Mangaluru, Udupi, Dakshina Kannada, coastal Karnataka, mobility safety platform",
    ogTitle: "BusBuddy – Travel Safety & Journey Intelligence Platform",
    ogDescription: "Consent-based journey sharing, ETA, smart alerts, SOS workflows and safe-arrival confirmation. In development, starting in Mangaluru, Udupi and Dakshina Kannada."
};

export const buildBusBuddySchema = () => {
    const { url, title, description } = busBuddySeo;

    return {
        "@context": "https://schema.org",
        "@graph": [
            organizationSchema,
            {
                "@type": "WebPage",
                "@id": `${url}#webpage`,
                url,
                name: title,
                description,
                inLanguage: "en",
                publisher: { "@id": ORGANIZATION_ID },
                breadcrumb: { "@id": `${url}#breadcrumb` }
            },
            {
                "@type": "BreadcrumbList",
                "@id": `${url}#breadcrumb`,
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
                    { "@type": "ListItem", position: 2, name: busBuddy.name, item: url }
                ]
            }
        ]
    };
};
