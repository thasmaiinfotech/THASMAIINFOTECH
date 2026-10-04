// Content for the /space-research page.
// Plain data only (no JSX) so generate-static.js can import it under Node.

import { teamMembers } from './teamData.js';
import { spaceLinks, spaceProgram } from './spaceProgram.js';
import { SITE_URL, ORGANIZATION_ID, organizationSchema, buildPersonSchema } from '../utils/structuredData.js';

export const hero = {
    eyebrow: "THASMAI Space Research",
    headline: spaceProgram.heading,
    secondary: "Engineering Program",
    subheading: spaceProgram.subheading,
    copy: "A structured 12-month engineering pathway combining satellite engineering, CanSat development, model rocketry, simulation, avionics, telemetry, system integration, testing, flight and competition preparation.",
    disciplines: [
        "Satellite Engineering",
        "CubeTwin",
        "CanSat",
        "Model Rocketry",
        "Avionics",
        "Telemetry",
        "Ground Systems"
    ],
    stats: [
        { label: "Started", value: spaceProgram.initiatedShort },
        { label: "Program Duration", value: spaceProgram.duration },
        { label: "Current / First Batch", value: spaceProgram.firstBatch },
        { label: "Next Batch", value: spaceProgram.nextBatch }
    ]
};

export const pathway = ["Learn", "Design", "Simulate", "Build", "Integrate", "Test", "Fly", "Analyse", "Compete"];

export const quarters = [
    {
        id: "q1",
        label: "Q1",
        months: "January – March",
        monthsShort: "Jan – Mar",
        stage: "Foundation",
        title: "Space & Flight Engineering Foundations",
        summary: "The physics, systems thinking and electronics groundwork that every later design decision depends on.",
        topicsLabel: "Topics",
        topics: [
            "Introduction to Space Systems",
            "Satellite Engineering Fundamentals",
            "Systems Engineering",
            "Mission Definition",
            "Model Rocketry Fundamentals",
            "CanSat Architecture",
            "Flight Physics",
            "Aerodynamics",
            "Forces and Moments",
            "Stability and Centre of Pressure",
            "Basic Propulsion Concepts",
            "Structures and Materials",
            "Electronics Fundamentals",
            "Sensors",
            "Embedded Systems Introduction",
            "Power Systems",
            "Telemetry Fundamentals",
            "Engineering Safety",
            "Engineering Documentation"
        ],
        outputs: ["Mission Concept", "Initial Requirements", "System Architecture", "Basic Simulation Models"],
        gateShort: "Concept & Requirements Review",
        gates: [
            { name: "Mission Concept Review" },
            { name: "Requirements Review" }
        ]
    },
    {
        id: "q2",
        label: "Q2",
        months: "April – June",
        monthsShort: "Apr – Jun",
        stage: "Engineering Design",
        title: "Design, Simulation & Digital Engineering",
        summary: "The mission concept becomes a simulated, budgeted and reviewable preliminary design.",
        topicsLabel: "Topics",
        topics: [
            "Satellite Subsystems",
            "CanSat Detailed Architecture",
            "Model Rocket Configuration",
            "OpenRocket / Flight Simulation",
            "CAD and Mechanical Design",
            "Mass Budget",
            "Power Budget",
            "Telemetry Architecture",
            "Radio Communication",
            "Ground Station Architecture",
            "Flight Computer",
            "Sensor Selection",
            "Embedded Firmware",
            "Recovery System Design",
            "Parachute Design",
            "Payload Integration",
            "Reliability Basics",
            "Design Trade Studies"
        ],
        cubeTwin: {
            description: "CubeTwin is a digital engineering / digital-twin learning platform used to model and analyse mission behaviour before and after physical testing.",
            loop: ["Digital Model", "Simulation", "Physical Build", "Flight Data", "Compare", "Improve Model"]
        },
        outputs: ["Preliminary Design", "Simulation Results", "Subsystem Architecture", "Initial CAD", "Telemetry Design"],
        gateShort: "PDR",
        gates: [
            { code: "PDR", name: "Preliminary Design Review" }
        ]
    },
    {
        id: "q3",
        label: "Q3",
        months: "July – September",
        monthsShort: "Jul – Sep",
        stage: "Build, Lab & Integration",
        title: "Build, Integrate & Validate",
        summary: "The hands-on quarter. Three workshops and supporting lab work take the design to integrated, tested hardware.",
        workshops: [
            {
                id: "cubetwin",
                title: "CubeTwin Workshop",
                topics: [
                    "Mission Simulation",
                    "Energy Modelling",
                    "Telemetry Modelling",
                    "Reliability",
                    "Failure Scenarios",
                    "Digital vs Physical Comparison"
                ]
            },
            {
                id: "cansat",
                title: "Build a CanSat",
                topics: [
                    "Mechanical Structure",
                    "Flight Computer",
                    "Sensors",
                    "Battery / Power",
                    "Telemetry",
                    "Payload",
                    "Firmware",
                    "Recovery System",
                    "Ground Station",
                    "Mission Data Collection"
                ]
            },
            {
                id: "rocket",
                title: "Build a Model Rocket",
                topics: [
                    "Airframe",
                    "Nose Cone",
                    "Fins",
                    "Stability",
                    "Structural Design",
                    "Motor / Propulsion Selection Concepts",
                    "Recovery System",
                    "Payload Bay",
                    "CanSat Integration",
                    "Flight Simulation",
                    "Ground Testing"
                ]
            }
        ],
        topicsLabel: "Additional Lab Work",
        topics: [
            "Electronics Prototyping",
            "Sensor Calibration",
            "Communication Testing",
            "Ground Station Testing",
            "Recovery Tests",
            "Integration Tests",
            "Mass Verification",
            "Structural Checks",
            "System-Level Validation"
        ],
        safetyNote: "Propulsion is taught as an educational, safety-oriented subject: approved educational and commercially appropriate propulsion systems, safe engineering practice and competition-rule compliance. The program does not cover propellant formulation or motor manufacturing.",
        outputs: ["Integrated CanSat", "Integrated Model Rocket", "Ground Station", "Flight Software", "Test Reports"],
        gateShort: "CDR · TRR",
        gates: [
            { code: "CDR", name: "Critical Design Review" },
            { code: "TRR", name: "Test Readiness Review" }
        ]
    },
    {
        id: "q4",
        label: "Q4",
        months: "October – December",
        monthsShort: "Oct – Dec",
        stage: "Flight, Competition & Career Pathways",
        title: "Flight, Mission Analysis & Competition Readiness",
        summary: "Flight readiness, flight operations, mission data analysis and the documentation that student competitions expect.",
        topicsLabel: "Topics",
        topics: [
            "Flight Readiness",
            "Launch Operations",
            "Mission Procedures",
            "Range / Safety Awareness",
            "Telemetry Operations",
            "Flight Data Capture",
            "Data Analysis",
            "Mission Performance Comparison",
            "Failure / Anomaly Review",
            "Engineering Report",
            "Competition Documentation",
            "Technical Presentation",
            "Design Defence",
            "Team Operations",
            "Project Management",
            "Post-Flight Review"
        ],
        outputs: [
            "Flight Demonstration",
            "Mission Data",
            "Final Engineering Report",
            "Competition Portfolio",
            "Technical Presentation",
            "Post-Flight Review"
        ],
        gateShort: "FRR · Mission Review",
        gates: [
            { code: "FRR", name: "Flight / Launch Readiness Review" },
            { name: "Mission Review" },
            { name: "Post-Flight Review" }
        ]
    }
];

export const learningTracks = [
    {
        id: "theory",
        title: "Theory",
        caption: "Concepts, analysis and engineering method",
        topics: [
            "Spacecraft Systems",
            "Rocket Flight",
            "Aerodynamics",
            "Satellite Engineering",
            "Systems Engineering",
            "Mission Design",
            "Telemetry",
            "Embedded Systems",
            "Ground Systems",
            "Reliability",
            "Safety",
            "Engineering Documentation"
        ]
    },
    {
        id: "lab",
        title: "Engineering Lab / Workshop",
        caption: "Simulation, fabrication, integration and test",
        topics: [
            "Simulation",
            "OpenRocket",
            "CAD",
            "Electronics",
            "Sensors",
            "Firmware",
            "Telemetry",
            "Ground Station",
            "CanSat Fabrication",
            "Rocket Assembly",
            "Integration",
            "Recovery Testing",
            "Flight Preparation",
            "Mission Analysis"
        ]
    }
];

export const lifecycle = [
    { name: "Mission" },
    { name: "Requirements" },
    { name: "Architecture" },
    { name: "Simulation" },
    { name: "PDR", gate: true },
    { name: "Detailed Design" },
    { name: "CDR", gate: true },
    { name: "Build" },
    { name: "Integration" },
    { name: "Test" },
    { name: "TRR", gate: true },
    { name: "Flight Readiness", gate: true },
    { name: "Flight" },
    { name: "Telemetry" },
    { name: "Analysis" },
    { name: "Mission Review", gate: true }
];

export const competition = {
    heading: "From Engineering Lab to National & International Competition",
    intro: "The program is designed to develop the technical, documentation, teamwork, mission-design and flight-readiness skills required for student aerospace competitions.",
    ladder: [
        "Local Lab",
        "Institutional Demo",
        "National Competition Readiness",
        "IN-SPACe / India Opportunities",
        "International Competition Pathways"
    ],
    india: {
        title: "IN-SPACe / India Opportunities",
        competitions: [
            { id: "rocket", name: "IN-SPACe Model Rocketry India Student Competition" },
            { id: "cansat", name: "IN-SPACe CANSAT India Student Competition" }
        ],
        lead: "Students may have opportunities to prepare for and participate in relevant IN-SPACe competitions, subject to:",
        conditions: [
            "Official competition announcement",
            "Team eligibility",
            "Institution requirements",
            "Application / selection",
            "Current-year rules",
            "Safety requirements"
        ],
        note: "Entry is not automatic. THASMAI does not conduct IN-SPACe competitions."
    },
    international: {
        title: "International Competition Pathways",
        lead: "Reference competitions and engineering benchmarks:",
        references: [
            "International CanSat competitions",
            "American Astronautical Society (AAS) CanSat Competition",
            "ESA CanSat ecosystem",
            "International student rocketry competitions",
            "NASA Student Launch, as an engineering benchmark where relevant",
            "Other eligible university / student aerospace competitions"
        ],
        note: "Potential competition pathways depend on current eligibility rules. Not all international competitions are open to Indian teams, and international participation is not promised."
    },
    disclaimer: "THASMAI INFOTECH PRIVATE LIMITED is an independent engineering and educational organisation. References to IN-SPACe, ISRO, ESA, NASA, AAS and other competition organisations are for educational, benchmarking and competition-readiness purposes. Competition eligibility, selection, schedules and rules are governed independently by the respective organisers."
};

export const careers = [
    "Satellite Engineering",
    "Space Systems Engineering",
    "Aerospace Systems",
    "Avionics",
    "Telemetry",
    "Embedded Systems",
    "Ground Systems",
    "Mission Operations",
    "Aerospace Software",
    "Digital Twins",
    "Systems Engineering",
    "Model Rocketry",
    "CubeSat Development",
    "Aerospace Cybersecurity",
    "Research & Higher Studies",
    "Space-tech Startups"
];

export const ecosystem = [
    {
        id: "thasmai",
        label: "Program",
        name: "THASMAI INFOTECH PRIVATE LIMITED",
        role: "Program · Technology · Engineering"
    },
    {
        id: "evsociety",
        label: "Ecosystem partner",
        name: "EV Society",
        role: "Student and technology ecosystem",
        href: spaceLinks.evSociety,
        linkLabel: "EVSociety.org"
    },
    {
        id: "ishavasyam",
        label: "Ecosystem partner",
        name: "ISHAVASYAM.ORG",
        tagline: "Space Research · Engineering · Experimentation",
        role: "Space research and engineering knowledge ecosystem",
        href: spaceLinks.ishavasyamSpace,
        linkLabel: "ISHAVASYAM Space"
    }
];

export const programHistory = [
    {
        when: "01 Dec 2025",
        title: "Program initiated",
        detail: "The CanSat & Model Rocketry Engineering Program is initiated."
    },
    {
        when: "2026",
        title: "First batch",
        detail: "First CanSat & Model Rocketry engineering batch, an ongoing engineering cohort.",
        dates: "01 January 2026 – 30 December 2026",
        href: spaceLinks.firstBatch,
        linkLabel: "View First Batch — 2026"
    },
    {
        when: "2027",
        title: "Next annual batch",
        detail: "The second annual batch of the program.",
        dates: "01 January 2027 – 30 December 2027"
    },
    {
        when: "Future",
        title: "Annual student engineering program",
        detail: "The program continues as an annual cycle.",
        dates: "January – December"
    }
];

export const programInfo = [
    { label: "Program", value: spaceProgram.name },
    { label: "Duration", value: spaceProgram.duration },
    { label: "Format", value: "Theory + Simulation + Engineering Lab + Workshops + Project" },
    { label: "Cycle", value: "Annual" },
    { label: "Current Batch", value: spaceProgram.firstBatch },
    { label: "Next Batch", value: spaceProgram.nextBatch },
    { label: "Fees", value: "Contact Program Lead" },
    { label: "Program Lead", value: "Sudarshana Karkala" }
];

export const faqs = [
    {
        question: "What is the CanSat & Model Rocketry Engineering Program?",
        answer: "It is a 12-month engineering program from THASMAI Space Research that takes students from satellite and rocketry fundamentals through simulation, hardware development, telemetry, system integration, testing, flight and competition readiness."
    },
    {
        question: "Who can join?",
        answer: "It is a student engineering program for students who want to work hands-on across space systems, electronics, embedded software and mechanical design. Eligibility and intake for each annual batch are confirmed by the program lead."
    },
    {
        question: "How long is the program?",
        answer: "12 months. It runs as an annual cycle from January to December, organised into four quarters."
    },
    {
        question: "When was the program started?",
        answer: "The program was initiated on 01 December 2025. The first batch is the 2026 batch, running from 01 January 2026 to 30 December 2026."
    },
    {
        question: "What happens during Q1, Q2, Q3 and Q4?",
        answer: "Q1 (January to March) covers space and flight engineering foundations. Q2 (April to June) covers design, simulation and digital engineering, including CubeTwin. Q3 (July to September) is the build, integration and validation quarter, with hands-on workshops and lab work. Q4 (October to December) covers flight, mission analysis and competition readiness."
    },
    {
        question: "Will students build a real CanSat?",
        answer: "Yes. The Q3 Build a CanSat workshop covers the mechanical structure, flight computer, sensors, power, telemetry, payload, firmware, recovery system and ground station, and an integrated CanSat is one of the planned Q3 outputs."
    },
    {
        question: "Will students build a model rocket?",
        answer: "Yes. The Q3 Build a Model Rocket workshop covers the airframe, nose cone, fins, stability, recovery system, payload bay and CanSat integration. Propulsion is covered as an educational, safety-oriented subject using approved educational and commercially appropriate systems."
    },
    {
        question: "Does the program prepare students for IN-SPACe competitions?",
        answer: "The program builds competition readiness: the technical, documentation, teamwork, mission-design and flight-readiness skills that student aerospace competitions require. Students may have opportunities to prepare for and participate in relevant IN-SPACe competitions, subject to the official competition announcement, team eligibility, institution requirements, application and selection, current-year rules and safety requirements. THASMAI does not conduct IN-SPACe competitions."
    },
    {
        question: "Can students participate in international competitions?",
        answer: "Potential competition pathways depend on current eligibility rules. Not all international competitions are open to Indian teams, and international participation is not promised. International competitions are referenced as benchmarks for engineering practice."
    },
    {
        question: "Is competition participation guaranteed?",
        answer: "No. Participation depends on official announcements, eligibility, selection and the organiser's rules for that year. The program focuses on competition readiness."
    },
    {
        question: "What is CubeTwin?",
        answer: "CubeTwin is a digital engineering / digital-twin learning platform used in the program to model and analyse mission behaviour before and after physical testing. Students work through a loop of digital model, simulation, physical build, flight data, comparison and model improvement."
    },
    {
        question: "What are the career and research pathways?",
        answer: "The program builds skills relevant to satellite engineering, space systems engineering, avionics, telemetry, embedded systems, ground systems, mission operations, digital twins, aerospace cybersecurity, research and higher studies, and space-tech startups. These are possible pathways, not placement commitments."
    },
    {
        question: "How can I know the program fees?",
        answer: "Program fees are not published on this page. Contact the program lead, Sudarshana Karkala, for program details and fees."
    },
    {
        question: "Who is the program lead?",
        answer: "Sudarshana Karkala, Co-Founder & Executive Director of THASMAI INFOTECH PRIVATE LIMITED, is the program lead and contact person."
    }
];

export const spaceResearchSeo = {
    url: `${SITE_URL}${spaceLinks.page}`,
    image: `${SITE_URL}/logo.png`,
    title: "CanSat & Model Rocketry Engineering Program | Space Research | THASMAI",
    description: "Explore THASMAI's 12-month CanSat and Model Rocketry Engineering Program covering satellite engineering, CubeTwin, avionics, telemetry, simulation, hardware development, testing, flight and student competition readiness.",
    keywords: "CanSat India, CanSat course India, CanSat workshop, Model Rocketry India, Model Rocketry course, Model Rocketry workshop, Satellite Engineering India, Satellite Engineering students, IN-SPACe CanSat competition, IN-SPACe Model Rocketry competition, Student space competition India, Aerospace engineering workshop, CubeTwin, Avionics, Telemetry, Ground Station, Space Research, Bengaluru, Karnataka",
    ogTitle: "CanSat & Model Rocketry Engineering Program | THASMAI Space Research",
    ogDescription: "A 12-month theory, simulation, build, test, flight and competition-readiness program covering satellite engineering, CubeTwin, CanSat, model rocketry, avionics, telemetry and ground systems."
};

const batchInstance = (name, year) => ({
    "@type": "CourseInstance",
    name,
    startDate: `${year}-01-01`,
    endDate: `${year}-12-30`,
    organizer: { "@id": ORGANIZATION_ID }
});

export const buildSpaceResearchSchema = () => {
    const lead = teamMembers.find((member) => member.slug === spaceProgram.leadSlug);
    const { url, description } = spaceResearchSeo;

    return {
        "@context": "https://schema.org",
        "@graph": [
            organizationSchema,
            buildPersonSchema(lead),
            {
                "@type": "Course",
                "@id": `${url}#course`,
                name: spaceProgram.name,
                description,
                url,
                inLanguage: "en",
                provider: { "@id": ORGANIZATION_ID },
                audience: { "@type": "EducationalAudience", educationalRole: "student" },
                teaches: [
                    "Satellite engineering",
                    "CanSat design and development",
                    "Model rocketry",
                    "Avionics",
                    "Telemetry",
                    "Ground station engineering",
                    "Mission design",
                    "Flight simulation",
                    "Systems engineering"
                ],
                hasCourseInstance: [
                    batchInstance("2026 Batch", spaceProgram.firstBatch),
                    batchInstance("2027 Batch", spaceProgram.nextBatch)
                ]
            },
            {
                "@type": "BreadcrumbList",
                "@id": `${url}#breadcrumb`,
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
                    { "@type": "ListItem", position: 2, name: "Space Research", item: url }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": `${url}#faq`,
                mainEntity: faqs.map(({ question, answer }) => ({
                    "@type": "Question",
                    name: question,
                    acceptedAnswer: { "@type": "Answer", text: answer }
                }))
            }
        ]
    };
};
