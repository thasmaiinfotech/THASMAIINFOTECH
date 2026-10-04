// Content for the /space-research page.
// Plain data only (no JSX) so generate-static.js can import it under Node.
//
// Claims policy: statuses and evidence below state only what can be verified.
// Mark something "Available" only when it is published and linked from this page.

import { teamMembers } from './teamData.js';
import { spaceLinks, spaceProgram } from './spaceProgram.js';
import { SITE_URL, ORGANIZATION_ID, organizationSchema, buildPersonSchema } from '../utils/structuredData.js';

const ISHAVASYAM = "https://aerospace.ishavasyam.org";

export const hero = {
    eyebrow: "THASMAI Space Research",
    headline: spaceProgram.heading,
    secondary: "Engineering Research Program",
    subtitle: "From Fundamentals and Simulation to Flight Validation, Digital Twins and Space Systems Engineering",
    copy: "A 12-month engineering, experimentation and research-oriented program. Learners work through requirements-driven design, simulation, prototyping, testing and measured experimentation, with formal review gates in every quarter.",
    stats: [
        { label: "Program Initiated", value: spaceProgram.initiatedShort },
        { label: "First Structured Cohort", value: spaceProgram.firstBatch },
        { label: "Program Duration", value: spaceProgram.duration },
        { label: "Next Cohort", value: spaceProgram.nextBatch }
    ]
};

export const timeline = [
    {
        when: "01 Dec 2025",
        title: "Program initiated",
        detail: "The CanSat & Model Rocketry program is initiated."
    },
    {
        when: "2026",
        title: "First structured cohort",
        detail: "2026 First Cohort / First Batch. 01 January 2026 – 30 December 2026.",
        href: spaceLinks.firstBatch,
        linkLabel: "View Program / Project Details"
    },
    {
        when: "2027",
        title: "Next annual cohort",
        detail: "01 January 2027 – 30 December 2027."
    },
    {
        when: "Annual",
        title: "Annual program cycle",
        detail: "January – December each year."
    }
];

export const sectionLinks = [
    { href: "#mission", label: "Mission" },
    { href: "#areas", label: "Research Areas" },
    { href: "#pathway", label: "Pathway" },
    { href: "#program", label: "Q1–Q4" },
    { href: "#review-gates", label: "Review Gates" },
    { href: "#artefacts", label: "Artefacts" },
    { href: "#digital-twin", label: "Digital Twin" },
    { href: "#safety", label: "Safety" },
    { href: "#competitions", label: "Competition" },
    { href: "#first-cohort", label: "First Cohort" },
    { href: "#research-team", label: "Team" },
    { href: "#outcomes", label: "Outcomes" },
    { href: "#apply", label: "Apply" }
];

export const mission = {
    statement: "The program develops engineering capability in CanSat, model rocketry, avionics, telemetry, digital twins and satellite systems through requirements-driven design, simulation, prototyping, testing and measured experimentation.",
    why: "It is an engineering, experimentation and research-oriented program, not only a training course. Learners are expected to justify design decisions with requirements, analysis and measured data, and to document them the way aerospace projects do.",
    principle: "Understand the physics. Engineer the system. Build it. Test it. Fly it. Analyse it.",
    modesLead: "Not every activity is research, and the program does not present it that way. It distinguishes five kinds of work:",
    modes: [
        { name: "Learning", detail: "Fundamentals of flight, electronics, programming and systems engineering." },
        { name: "Engineering development", detail: "Requirements, architecture, budgets, design baselines and reviews." },
        { name: "Experimentation", detail: "Planned tests on prototypes, with measured results." },
        { name: "Research", detail: "Open questions investigated with models and data. Research outputs are still developing." },
        { name: "Flight validation", detail: "Comparing predicted and measured flight performance, only where an authorised flight takes place." }
    ],
    loopLead: "Learners progress through the same loop on every design iteration:",
    loop: ["Model", "Simulate", "Design", "Build", "Test", "Measure", "Analyse", "Improve"]
};

export const researchAreas = [
    {
        id: "rocketry",
        title: "Model Rocketry",
        items: ["Aerodynamics", "Stability", "Structures", "Recovery systems", "Flight dynamics", "Performance simulation"]
    },
    {
        id: "cansat",
        title: "CanSat",
        items: ["Embedded systems", "Sensors", "Avionics", "Telemetry", "GNSS / GPS", "Onboard computing"]
    },
    {
        id: "twins",
        title: "Digital Twins",
        items: ["Flight simulation", "Model-to-test correlation", "Predicted vs measured performance", "Sensor-data replay", "Failure modelling"]
    },
    {
        id: "satellite",
        title: "Satellite Engineering Foundations",
        items: ["Mission engineering", "Systems engineering", "Power systems", "Communications", "ADCS fundamentals", "Ground systems"]
    },
    {
        id: "cyber",
        title: "Aerospace Cybersecurity",
        items: ["Telemetry security", "Command authentication concepts", "Anomaly detection", "Secure avionics architecture"]
    },
    {
        id: "energy",
        title: "Energy Systems",
        items: ["Battery performance", "Power budgeting", "Energy availability", "Thermal impact on batteries"]
    }
];

export const learningPathway = {
    stages: [
        {
            title: "Foundation",
            items: ["Physics", "Electronics", "Programming", "Systems Engineering"]
        },
        {
            title: "Model Rocketry",
            items: ["Aerodynamics", "Structures", "Propulsion fundamentals", "Recovery"],
            href: `${ISHAVASYAM}/space/model-rocketry`,
            linkLabel: "Model Rocketry"
        },
        {
            title: "CanSat",
            items: ["Avionics", "Sensors", "Telemetry", "Embedded Systems"]
        },
        {
            title: "CubeSat / CubeTwin",
            items: ["Mission Engineering", "EPS (power)", "ADCS (attitude control)", "OBC (onboard computer)", "Communications"],
            href: `${ISHAVASYAM}/space/cubesat`,
            linkLabel: "CubeTwin"
        },
        {
            title: "Satellite Engineering",
            items: ["Spacecraft Systems Architecture"],
            href: `${ISHAVASYAM}/space/satellite-engineering`,
            linkLabel: "Satellite Engineering"
        },
        {
            title: "Advanced Space Systems Research",
            items: []
        }
    ],
    scope: "This program concentrates on the first three stages and introduces the foundations of the later ones."
};

export const quarters = [
    {
        id: "q1",
        label: "Q1",
        months: "January – March",
        monthsShort: "Jan – Mar",
        title: "Foundations & Mission Definition",
        summary: "The groundwork: flight and electronics fundamentals, and a mission defined well enough to write requirements against.",
        topics: [
            "Mathematics and physics refresh",
            "Fundamentals of flight",
            "Aerospace systems overview",
            "Introduction to CanSat",
            "Introduction to model rocketry",
            "Mission definition",
            "Concept of Operations",
            "Requirements engineering",
            "Initial OpenRocket / simulation work",
            "Basic electronics",
            "Embedded systems foundation",
            "Safety awareness"
        ],
        outputs: [
            "Mission Concept",
            "ConOps",
            "Initial System Requirements",
            "Preliminary architecture",
            "Initial risk register",
            "Initial simulation model"
        ],
        gateShort: "MCR · SRR",
        gates: [
            { code: "MCR", name: "Mission Concept Review" },
            { code: "SRR", name: "System Requirements Review" }
        ]
    },
    {
        id: "q2",
        label: "Q2",
        months: "April – June",
        monthsShort: "Apr – Jun",
        title: "Architecture & Preliminary Design",
        summary: "The mission becomes an architecture: subsystems, interfaces and budgets, with a digital-twin baseline to test the design against.",
        topics: [
            "Aerodynamics",
            "Stability",
            "Structures",
            "Recovery systems",
            "Avionics",
            "Sensors",
            "Telemetry",
            "Power architecture",
            "Ground station",
            "Software architecture",
            "Interfaces",
            "Digital-twin baseline"
        ],
        outputs: [
            "System architecture",
            "Subsystem design",
            "Mass budget",
            "Power budget",
            "Telemetry / data budget",
            "Interface Control Document",
            "Preliminary test plan",
            "Updated risk register"
        ],
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
        title: "Detailed Design, Build & Integration",
        summary: "The hands-on quarter. The design is detailed, built, integrated and ground-tested, and the simulation is refined against what was built.",
        topics: [
            "Detailed design",
            "Electronics assembly",
            "Firmware",
            "Ground station",
            "Mechanical integration",
            "CanSat prototype",
            "Rocket prototype",
            "Telemetry integration",
            "Recovery testing",
            "Ground testing",
            "Simulation refinement",
            "Verification planning",
            "FMEA / FMECA introduction"
        ],
        workshops: [
            {
                id: "cubetwin",
                title: "CubeTwin Workshop",
                topics: ["Mission simulation", "Energy modelling", "Telemetry modelling", "Reliability", "Failure scenarios", "Digital vs physical comparison"]
            },
            {
                id: "cansat",
                title: "Build a CanSat",
                topics: ["Mechanical structure", "Flight computer", "Sensors", "Battery / power", "Telemetry", "Payload", "Firmware", "Recovery system", "Ground station", "Mission data collection"]
            },
            {
                id: "rocket",
                title: "Build a Model Rocket",
                topics: ["Airframe", "Nose cone", "Fins", "Stability", "Structural design", "Motor / propulsion selection concepts", "Recovery system", "Payload bay", "CanSat integration", "Flight simulation", "Ground testing"]
            }
        ],
        labWork: ["Sensor calibration", "Communication testing", "Mass verification", "Structural checks", "System-level validation"],
        outputs: [
            "Integrated prototype",
            "Detailed drawings / schematics",
            "Final software / firmware baseline",
            "Verification matrix",
            "FMEA / FMECA",
            "Ground-test results",
            "Updated digital twin"
        ],
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
        title: "Flight, Validation & Research Output",
        summary: "Flight readiness, flight where authorised, and the comparison of predicted and measured performance that turns a flight into research output.",
        topics: [
            "Flight readiness",
            "Compliance review",
            "Launch / flight preparation",
            "Flight data acquisition",
            "Telemetry analysis",
            "Predicted vs measured performance",
            "Digital-twin calibration",
            "Failure / anomaly review",
            "Post-flight analysis",
            "Research report preparation",
            "Competition readiness",
            "Presentation and technical defense"
        ],
        outputs: [
            "Flight log",
            "Telemetry dataset",
            "Post-flight report",
            "Simulation correlation report",
            "Final technical report",
            "Research poster",
            "Portfolio",
            "Competition-ready engineering dossier"
        ],
        gateShort: "FRR · ORR · Final Review",
        gates: [
            { code: "FRR", name: "Flight Readiness Review" },
            { code: "ORR", name: "Operational Readiness Review (educational)" },
            { name: "Final Research Review" }
        ]
    }
];

export const reviewGates = {
    gates: [
        { code: "MCR", name: "Mission Concept Review", quarter: "Q1", question: "Is the mission concept clear, feasible and worth pursuing?" },
        { code: "SRR", name: "System Requirements Review", quarter: "Q1", question: "Are the system requirements complete, consistent and verifiable?" },
        { code: "PDR", name: "Preliminary Design Review", quarter: "Q2", question: "Does the preliminary design meet the requirements within its mass, power and data budgets?" },
        { code: "CDR", name: "Critical Design Review", quarter: "Q3", question: "Is the detailed design mature enough to build and integrate?" },
        { code: "TRR", name: "Test Readiness Review", quarter: "Q3", question: "Are the system, the procedures and the team ready to test safely?" },
        { code: "FRR", name: "Flight Readiness Review", quarter: "Q4", question: "Do the vehicle, payload, procedures and compliance evidence support an authorised flight?" },
        { code: "ORR", name: "Operational Readiness Review", quarter: "Q4", note: "Educational systems-engineering review", question: "Are the operating procedures, roles and ground systems ready?" },
        { code: "FRV", display: "Final", name: "Final Research Review", quarter: "Q4", question: "What was learned, and does the measured evidence support it?" }
    ],
    reference: {
        lead: "Review names follow common systems-engineering practice, as described in the",
        label: "NASA Systems Engineering Handbook",
        href: "https://www.nasa.gov/reference/systems-engineering-handbook/"
    }
};

export const artefacts = {
    note: "The objective is not only to build hardware, but to learn professional aerospace engineering documentation, review and verification practices.",
    items: [
        "Mission Definition",
        "Concept of Operations",
        "System Requirements",
        "Requirements Traceability Matrix",
        "System Architecture",
        "Interface Control Document",
        "Mass Budget",
        "Power Budget",
        "Energy Budget",
        "Telemetry / Data Budget",
        "Stability Analysis",
        "Risk Register",
        "FMEA / FMECA",
        "Test Plan",
        "Verification Matrix",
        "Flight Readiness Checklist",
        "Flight Log",
        "Post-Flight Analysis",
        "Digital Twin Correlation Report",
        "Final Research Report"
    ]
};

export const digitalTwin = {
    intro: "A model is only as good as its agreement with measurement. Digital-twin work in the program means building a model, testing the real system, and using the difference between the two to improve both.",
    steps: ["Model", "Simulate", "Build", "Test", "Compare", "Calibrate", "Improve"],
    example: [
        { label: "Predicted Apogee", value: "1,020 m" },
        { label: "Measured Apogee", value: "947 m" },
        { label: "Difference", value: "7.2%" }
    ],
    whyLead: "Why?",
    factors: ["Drag coefficient", "Actual vehicle mass", "Wind", "Motor thrust curve", "Launch angle", "Sensor error"],
    lesson: "Each candidate cause can be checked against measured data. That is why flight logs, telemetry and test records matter as much as the hardware.",
    disclaimer: "Illustrative example. These numbers are not project data.",
    cubeTwin: {
        text: "CubeTwin is a digital engineering / digital-twin learning platform used to model and analyse mission behaviour before and after physical testing. It is an educational prototype that works with simulated data and is not flight software.",
        href: `${ISHAVASYAM}/space/cubesat`,
        linkLabel: "CubeTwin"
    }
};

export const researchQuestions = {
    note: "These are example research directions that learners may investigate. They are not claims of completed research.",
    items: [
        "How does fin geometry affect stability, drag and achievable altitude?",
        "How accurately can low-cost sensors reconstruct flight state?",
        "How does telemetry packet loss vary with altitude, orientation and distance?",
        "How accurately does simulation predict actual apogee?",
        "How can recovery-system parameters minimise landing velocity while managing drift?",
        "How does temperature influence onboard battery performance during a flight?",
        "Can sensor fusion improve altitude and attitude estimation?",
        "Can telemetry anomalies be detected automatically?",
        "How closely can a digital twin reproduce measured flight behaviour?"
    ]
};

export const safety = {
    statement: "Any physical model-rocketry, CanSat deployment, launch, recovery, radio / telemetry or field-testing activity must be conducted only under applicable laws, regulatory guidance, authorised venue / range conditions, competent supervision and documented safety procedures.",
    considerLead: "Where applicable, consider:",
    considerations: [
        "IN-SPACe / Department of Space guidance",
        "Venue and range permissions",
        "Applicable aviation / airspace requirements",
        "Radio-frequency regulations",
        "Electrical and battery safety",
        "Fire safety",
        "Recovery-zone safety",
        "Weather limits",
        "Emergency procedures"
    ],
    lifecycle: ["Design", "Safety Review", "Compliance Review", "Test Readiness", "Flight Readiness", "Authorised Activity", "Post-Flight Review"],
    propulsion: "Propulsion is taught as an educational, safety-oriented subject: approved educational and commercially appropriate propulsion systems, safe engineering practice and competition-rule compliance. The program does not cover propellant formulation or motor manufacturing.",
    sourcesLead: "Requirements are set by the relevant authorities, venues and organisers. Official sources:",
    sources: [
        { label: "IN-SPACe", href: "https://www.inspace.gov.in/" },
        { label: "ISRO, Department of Space", href: "https://www.isro.gov.in/" }
    ]
};

export const competition = {
    intro: "Teams may be prepared to pursue relevant national and international CanSat, model-rocketry and space-engineering competitions, subject to applicable eligibility, selection, availability and competition schedules.",
    ladder: [
        "Local Lab",
        "Institutional Demo",
        "National Competition Readiness",
        "IN-SPACe / India Opportunities",
        "International Competition Pathways"
    ],
    india: {
        title: "IN-SPACe / Indian National Opportunities",
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
        title: "Relevant International Competitions",
        lead: "CanSat and model-rocketry competitions referenced as engineering benchmarks:",
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
    participation: "Participation depends on eligibility, registration, selection, competition rules and organiser schedules.",
    disclaimer: "THASMAI INFOTECH PRIVATE LIMITED is an independent engineering and educational organisation. References to IN-SPACe, ISRO, ESA, NASA, AAS and other competition organisations are for educational, benchmarking and competition-readiness purposes. Competition eligibility, selection, schedules and rules are governed independently by the respective organisers."
};

// Every value here is taken from the linked project page. Update the review date
// and the statuses together when that page changes.
export const firstCohort = {
    intro: "The first structured cohort's project is documented on its own project page. The summary below records only what that page documents, and uses the page's own status wording.",
    reviewed: "October 2026",
    href: spaceLinks.firstBatch,
    linkLabel: "View Program / Project Details",
    evidence: [
        { field: "Mission", status: "Defined", value: "A model rocket carrying a 1 kg payload to 1,000 m ± 100 m, with ground-station telemetry and parachute recovery." },
        { field: "Participants", status: "Documented", value: "Team AstroForge, SRM Institute of Science and Technology, Trichy. Individual names are not published." },
        { field: "Simulation", status: "Planned", value: "OpenRocket / RasAero apogee simulation is the stated method. Numerical results are to be populated through PDR and CDR." },
        { field: "Design", status: "In Progress", value: "Mission requirements, system architecture, thirteen subsystem definitions, a traceability extract and a risk register are published." },
        { field: "Hardware", status: "In Progress", value: "Airframe, avionics, recovery and ground-station hardware are specified. No completed hardware is documented." },
        { field: "Telemetry", status: "Planned", value: "A 16-field, 1 Hz CSV telemetry format is defined. The sample data shown is marked as placeholder, not from a real flight." },
        { field: "Ground Tests", status: "Planned", value: "A test campaign is defined, from bench tests to a dress rehearsal. No test results are published." },
        { field: "Flight Status", status: "Planned", value: "No flight is documented." },
        { field: "Research Data", status: "Planned", value: "None published." },
        { field: "Reports", status: "In Progress", value: "PDR, CDR, FRR and post-flight analysis documents are listed as deliverables." },
        { field: "Competition Status", status: "In Progress", value: "The project page presents the work as a design for the IN-SPACe Model Rocketry India Student Competition 2026 and lists a team ID. No selection outcome or result is documented." }
    ]
};

export const researchOutputs = {
    headline: "Research Outputs — Developing",
    legend: [
        { status: "Available", meaning: "Published and linked from this page." },
        { status: "Developing", meaning: "In preparation by a cohort." },
        { status: "Planned", meaning: "Expected from the program, not yet started or not yet evidenced." }
    ],
    items: [
        { name: "Design Reports", status: "Available", note: "2026 cohort mission architecture", href: spaceLinks.firstBatch },
        { name: "Technical Reports", status: "Developing", note: "Review documents are listed as in progress." },
        { name: "Engineering Schematics", status: "Developing", note: "Block-level architecture is published; detailed schematics follow at CDR." },
        { name: "Simulation Models", status: "Planned" },
        { name: "Digital Twin Models", status: "Planned" },
        { name: "Source Code", status: "Planned" },
        { name: "Test Reports", status: "Planned" },
        { name: "Flight Data", status: "Planned" },
        { name: "Telemetry Datasets", status: "Planned" },
        { name: "Research Posters", status: "Planned" },
        { name: "Student Papers", status: "Planned" }
    ]
};

export const portfolio = {
    intro: "The program is one part of a broader body of aerospace and space research and engineering work.",
    areas: [
        "Satellite Engineering",
        "CanSat & Model Rocketry",
        "Digital Twins",
        "Aerospace Cybersecurity",
        "EV Battery & Energy Intelligence",
        "Avionics & Telemetry"
    ],
    leadRole: "Research & Engineering Lead",
    leadFocus: [
        "EV Battery & Energy Systems",
        "Satellite Systems Engineering",
        "CanSat & Model Rocketry Design and Development",
        "Digital Twins",
        "Aerospace Cybersecurity",
        "Avionics & Telemetry"
    ]
};

export const ecosystem = [
    {
        id: "thasmai",
        name: "THASMAI INFOTECH PRIVATE LIMITED",
        role: "Program · Technology · Engineering"
    },
    {
        id: "evsociety",
        name: "EV Society",
        role: "Student and technology ecosystem",
        href: spaceLinks.evSociety,
        linkLabel: "EVSociety.org"
    },
    {
        id: "ishavasyam",
        name: "ISHAVASYAM.ORG",
        role: "Space research and engineering knowledge ecosystem",
        href: spaceLinks.ishavasyamSpace,
        linkLabel: "ISHAVASYAM Space"
    }
];

export const governance = {
    intro: "Projects progress through a defined engineering process, so that results can be traced back to requirements and evidence.",
    elements: [
        { name: "Requirements", detail: "Work traces back to written mission and system requirements." },
        { name: "Reviews", detail: "Each quarter closes with formal review gates." },
        { name: "Safety", detail: "Safety and compliance reviews precede any physical test or flight." },
        { name: "Design baselines", detail: "Designs are baselined at review and changed under control." },
        { name: "Verification", detail: "Each requirement has a planned verification method." },
        { name: "Testing", detail: "Tests follow written plans and record measured results." },
        { name: "Evidence", detail: "Claims are tied to data, logs and test records." },
        { name: "Technical reporting", detail: "Results are written up as technical reports." }
    ],
    externalReview: {
        title: "External Technical Review",
        status: "Planned",
        detail: "An external advisory and review panel is planned. No external reviewers are listed at present, and none will be named until confirmed."
    }
};

export const audience = {
    students: ["B.E. / B.Tech", "M.E. / M.Tech"],
    disciplines: ["Electronics", "Electrical", "Mechanical", "Aerospace", "Computer Science", "Information Technology"],
    alsoFor: ["Faculty mentors", "Research interns", "Student engineering teams", "Early-career engineers"]
};

export const outcomes = {
    lead: "By the end of the program, participants should be able to:",
    items: [
        "Translate a mission idea into engineering requirements",
        "Perform preliminary rocket and CanSat system design",
        "Use engineering simulations",
        "Design basic avionics and telemetry systems",
        "Develop test plans",
        "Maintain mass, power and data budgets",
        "Conduct requirements-based verification",
        "Analyse flight and experiment data",
        "Compare simulation with measured results",
        "Prepare professional engineering reports",
        "Present designs at formal technical reviews",
        "Prepare for relevant competitions"
    ],
    careersLead: "The skills are relevant to the domains below. They are possible directions for further work, study and research, not placement or employment commitments.",
    careers: [
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
    ]
};

export const programInfo = [
    { label: "Program", value: spaceProgram.name },
    { label: "Duration", value: spaceProgram.duration },
    { label: "Format", value: "Theory + Simulation + Engineering Lab + Workshops + Project" },
    { label: "Cycle", value: "Annual, January – December" },
    { label: "Current Cohort", value: spaceProgram.firstBatch },
    { label: "Next Cohort", value: spaceProgram.nextBatch },
    { label: "Fees", value: "Contact Program Lead" },
    { label: "Program Lead", value: "Sudarshana Karkala" }
];

export const apply = {
    lead: "For applications, institutional collaboration, mentoring or program fees, contact the program lead."
};

export const faqs = [
    {
        question: "What is the CanSat & Model Rocketry Engineering Research Program?",
        answer: "It is a 12-month engineering, experimentation and research-oriented program from THASMAI Space Research covering CanSat, model rocketry, avionics, telemetry, digital twins and satellite engineering foundations. Learners progress through requirements-driven design, simulation, prototyping, testing and measured experimentation."
    },
    {
        question: "Is it a research program or a training program?",
        answer: "It is research-oriented, and it is explicit about the difference. The program distinguishes learning, engineering development, experimentation, research and flight validation. Research outputs are still developing, and nothing is described as completed research unless it is published and linked."
    },
    {
        question: "Who can join?",
        answer: "The program is intended for B.E. / B.Tech and M.E. / M.Tech students in electronics, electrical, mechanical, aerospace, computer science and information technology. It is also suitable for faculty mentors, research interns, student engineering teams and early-career engineers. Eligibility and intake for each cohort are confirmed by the program lead."
    },
    {
        question: "How long is the program?",
        answer: "12 months. It runs as an annual cycle from January to December, organised into four quarters."
    },
    {
        question: "When was the program started?",
        answer: "The program was initiated on 01 December 2025. The first structured cohort is the 2026 cohort, running from 01 January 2026 to 30 December 2026."
    },
    {
        question: "What happens during Q1, Q2, Q3 and Q4?",
        answer: "Q1 (January to March) covers foundations and mission definition, closing with the Mission Concept Review and System Requirements Review. Q2 (April to June) covers architecture and preliminary design, closing with the Preliminary Design Review. Q3 (July to September) covers detailed design, build and integration, with the Critical Design Review and Test Readiness Review. Q4 (October to December) covers flight, validation and research output, with the Flight Readiness Review, an educational Operational Readiness Review and the Final Research Review."
    },
    {
        question: "Will students build a real CanSat?",
        answer: "A CanSat prototype is part of the Q3 plan. The Build a CanSat workshop covers the mechanical structure, flight computer, sensors, power, telemetry, payload, firmware, recovery system and ground station, and an integrated prototype is one of the planned Q3 engineering outputs."
    },
    {
        question: "Will students build a model rocket?",
        answer: "A model rocket prototype is part of the Q3 plan. The Build a Model Rocket workshop covers the airframe, nose cone, fins, stability, recovery system, payload bay and CanSat integration. Propulsion is covered as an educational, safety-oriented subject using approved educational and commercially appropriate systems."
    },
    {
        question: "How is safety handled?",
        answer: "Any physical model-rocketry, CanSat deployment, launch, recovery, radio or field-testing activity must be conducted only under applicable laws, regulatory guidance, authorised venue or range conditions, competent supervision and documented safety procedures. Work passes a safety review and a compliance review before test readiness and flight readiness."
    },
    {
        question: "Does the program prepare students for IN-SPACe competitions?",
        answer: "The program builds competition readiness: the technical, documentation, teamwork, mission-design and flight-readiness skills that student aerospace competitions require. Students may have opportunities to prepare for and participate in relevant IN-SPACe competitions, subject to the official competition announcement, team eligibility, institution requirements, application and selection, current-year rules and safety requirements. THASMAI is an independent organisation and does not conduct IN-SPACe competitions."
    },
    {
        question: "Can students participate in international competitions?",
        answer: "Potential competition pathways depend on current eligibility rules. Not all international competitions are open to Indian teams, and international participation is not promised. International competitions are referenced as benchmarks for engineering practice."
    },
    {
        question: "Is competition participation guaranteed?",
        answer: "No. Participation depends on eligibility, registration, selection, competition rules and organiser schedules. The program focuses on competition readiness."
    },
    {
        question: "What is CubeTwin?",
        answer: "CubeTwin is a digital engineering / digital-twin learning platform used to model and analyse mission behaviour before and after physical testing. It is an educational prototype that works with simulated data and is not flight software."
    },
    {
        question: "What are the career and research pathways?",
        answer: "The program builds skills relevant to satellite engineering, space systems engineering, avionics, telemetry, embedded systems, ground systems, mission operations, digital twins, aerospace cybersecurity, research and higher studies, and space-tech startups. These are possible pathways, not placement or employment commitments."
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
    title: "CanSat & Model Rocketry Engineering Research Program | THASMAI Space Research",
    description: "Explore THASMAI's CanSat and Model Rocketry Engineering Research Program covering systems engineering, avionics, telemetry, simulation, digital twins, flight validation and satellite engineering foundations.",
    keywords: "CanSat India, CanSat course India, CanSat workshop, Model Rocketry India, Model Rocketry course, Model Rocketry workshop, Satellite Engineering India, Satellite Engineering students, Systems engineering, Digital twin, Flight validation, IN-SPACe CanSat competition, IN-SPACe Model Rocketry competition, Student space competition India, Aerospace engineering workshop, CubeTwin, Avionics, Telemetry, Ground Station, Space Research, Bengaluru, Karnataka",
    ogTitle: "CanSat & Model Rocketry Engineering Research Program | THASMAI Space Research",
    ogDescription: "A 12-month engineering, experimentation and research-oriented program: systems engineering, avionics, telemetry, simulation, digital twins, flight validation and satellite engineering foundations."
};

const cohortInstance = (name, year) => ({
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
                    "Systems engineering",
                    "Model rocketry",
                    "CanSat design and development",
                    "Avionics",
                    "Telemetry",
                    "Flight simulation",
                    "Digital twins",
                    "Requirements-based verification",
                    "Satellite engineering foundations"
                ],
                hasCourseInstance: [
                    cohortInstance("2026 Cohort", spaceProgram.firstBatch),
                    cohortInstance("2027 Cohort", spaceProgram.nextBatch)
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
