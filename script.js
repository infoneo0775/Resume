/* ============================================================
   Resume Portfolio — script.js
   Author : Harish Nishad
   Data   : Hardcoded static object — no fetch / data.json needed
   ============================================================ */

'use strict';

var CONTACT_FORM_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbylRgi6mRepZz0lMO4LfXT7H2eGXwPyEOujCJN4PNP_id1vDPDW48wy0XIY3BdjbbEr/exec';

// ── Static Resume Data ───────────────────────────────────────
var RESUME_DATA = {

    personal: {
        name:     'Harish Nishad',
        tagline:  'Software Engineer · Full-Stack · Node.js · Angular · React · Cloud Architecture',
        email:    'harish.nishad0775@gmail.com',
        phone:    '+91 9319130910',
        location: 'Sector 29, Noida',
        summary:  'Software Engineer with 4+ years of experience in full-stack development, ' +
                  'specialising in Angular, React, Node.js, and cloud architecture. ' +
                  'Proven track record of delivering scalable, high-performance applications ' +
                  'in fast-paced environments. Passionate about leveraging technical expertise ' +
                  'to drive innovation and develop solutions that benefit society and humanity.',
        image:    'https://resume0775.s3.eu-north-1.amazonaws.com/withCard.jpg',
        quickFacts: [
            { value: '4+', label: 'Years Experience' },
            { value: '6',  label: 'Major Projects' },
            { value: '40%', label: 'Faster Workflows' }
        ],
        focusPoints: [
            'Modular backend architecture for enterprise-scale operations',
            'Workflow automation with reporting, PDF, and Excel pipelines',
            'Frontend delivery across Angular and React applications',
            'Deployment support with AWS, Jenkins, PM2, Docker, and caching'
        ],
        socials: [
            { icon: 'fab fa-github',   url: 'https://github.com/' },
            { icon: 'fab fa-linkedin', url: 'https://linkedin.com/in/' },
            { icon: 'fab fa-twitter',  url: 'https://twitter.com/' }
        ]
    },

    skillBars: [
        { name: 'Node.js / Express',  level: 92 },
        { name: 'Angular',            level: 88 },
        { name: 'React / Next.js',    level: 82 },
        { name: 'MySQL / PostgreSQL', level: 85 },
        { name: 'MongoDB / Redis',    level: 80 },
        { name: 'AWS / Docker / K8s', level: 75 }
    ],

    skills: {
        'Languages':         ['JavaScript', 'TypeScript', 'Java', 'SQL', 'HTML', 'CSS'],
        'Frameworks':        ['Angular', 'React', 'Node.js', 'Express', 'Next.js', 'Sequelize', 'Mongoose'],
        'Cloud & DevOps':    ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'PM2', 'Jenkins', 'FileZilla'],
        'Databases':         ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis'],
        'Tools & Practices': ['REST APIs', 'Git', 'Cron Jobs', 'PDF/Excel Pipelines', 'RBAC', 'System Design']
    },

    experience: [
        {
            role:    'Software Engineer',
            company: 'Infoneo – Client-Site (GAIL Corporate Office, Noida)',
            period:  'Jan 2025 – Present',
            highlights: [
                'Architected a modular Node.js/Express backend for GAIL\'s nationwide CNG operations with 35+ domain-specific controllers and GA-based access workflows.',
                'Optimised MySQL queries, indexing and stored procedures, reducing report runtimes by 40%+.',
                'Implemented secure authentication, role-based permissions, and station-level authorisation across multiple business units.',
                'Automated CNG operations, compressor testing, logistics fuel records, and CBG vendor onboarding via PDF/Excel pipelines.',
                'Consistently received appreciation from BIS officers for delivering high-quality solutions on-site.'
            ]
        },
        {
            role:    'Software Engineer',
            company: 'CodeFire',
            period:  'May 2023 – Sep 2024',
            highlights: [
                'Led development of Finhaat\'s claim initiation, approval workflow, and dashboard modules, cutting manual processing by 40%.',
                'Engineered high-volume Excel data validation, boosting data accuracy and reducing processing errors by 35%.',
                'Designed 5+ cron services and integrated Redis caching, reducing API load by 45%.',
                'Managed CI/CD workflows (PM2, Jenkins, AWS), reducing downtime incidents by 30%.',
                'Mentored junior engineers, reviewed code, and coordinated directly with clients.'
            ]
        },
        {
            role:    'Junior Node.js Developer',
            company: 'PrimaFelicitas',
            period:  'Jun 2022 – May 2023',
            highlights: [
                'Engineered core features for Aware™ – tamper-proof material verification, reducing API processing time by 40%.',
                'Automated Digital Product Passport generation, improving compliance reporting efficiency by 50%.',
                'Built ClojBug test-case management platform, improving QA workflow speed by 75%.'
            ]
        },
        {
            role:    'Software Engineer',
            company: 'Doceree',
            period:  'Oct 2021 – Mar 2022',
            highlights: [
                'Developed a new web application using the MEAN Stack with end-to-end feature implementation.',
                'Built modules to manage physician-targeted campaigns integrated with physician-only digital platforms.',
                'Collaborated with design and product teams to implement A/B testing frameworks.'
            ]
        }
    ],

    education: [
        {
            degree:    'Master of Computer Applications (MCA)',
            institute: 'IGNOU',
            period:    'Completed',
            details: [
                'Design and Analysis of Algorithms, OOPS, Discrete Mathematics.',
                'Security & Cyber Laws, Professional Skills & Ethics, AI & Machine Learning.',
                'Focus: Software Development & Algorithm Design. Score: 60%.'
            ]
        },
        {
            degree:    'Bachelor of Computer Applications (BCA)',
            institute: 'IGNOU',
            period:    'Completed',
            details: [
                'Computer Networks, Programming, Object-Oriented Programming.',
                'Data Structures, Probability & Statistics, DBMS.',
                'Logic System Design.'
            ]
        }
    ],

    projects: [
        {
            title: 'GAIL CNG Operations Platform',
            domain: 'Energy Operations',
            company: 'Infoneo at GAIL Corporate Office',
            period: 'Jan 2025 - Present',
            icon: 'fas fa-industry',
            summary: 'Enterprise workflow platform for nationwide CNG operations, approvals, station-level governance, and daily operational control.',
            techStack: ['Node.js', 'Express', 'MySQL', 'RBAC', 'REST APIs', 'Workflow Automation'],
            quickHighlights: [
                'Architected a modular backend with 35+ domain-specific controllers.',
                'Implemented GA-based workflows and station-level authorization.',
                'Digitised compressor testing, logistics fuel records, and vendor onboarding.',
                'Delivered on-site solutions appreciated by BIS officers.'
            ],
            businessOverview: 'Built for GAIL\'s nationwide CNG operations, this platform consolidated operational workflows that previously depended on fragmented processes, multiple approvals, and high-touch manual coordination.',
            problemStatement: 'Business teams needed a reliable system to control station operations, user permissions, and workflow execution across multiple units without slowing down field activity or compliance processes.',
            role: 'Software Engineer',
            responsibilities: [
                'Designed backend modules for domain-specific operations and approval flows.',
                'Worked directly with on-site stakeholders to translate business rules into application workflows.',
                'Implemented secure access control aligned with station and business-unit responsibilities.'
            ],
            featuresImplemented: [
                'Modular controller structure for nationwide CNG operations.',
                'Station-level authorization and role-based workflow access.',
                'Modules covering compressor testing, logistics fuel management, and CBG vendor onboarding.',
                'Structured approval routes for operational actions and audits.'
            ],
            technologiesUsed: ['Node.js', 'Express', 'MySQL', 'Stored Procedures', 'Role-Based Access Control', 'REST APIs'],
            challengesFaced: [
                'Managing domain complexity across multiple operational functions.',
                'Aligning application behavior with real-world client workflows at site level.',
                'Maintaining security and authorization clarity across business units.'
            ],
            solutionsDelivered: [
                'Introduced a modular backend architecture to separate operational domains cleanly.',
                'Mapped approval rules and station permissions directly into the application layer.',
                'Created structured workflows that reduced ambiguity in day-to-day operations.'
            ],
            businessImpact: [
                'Improved workflow reliability for nationwide CNG operations.',
                'Enabled stronger governance through secure, station-level access control.',
                'Earned appreciation from BIS officers for delivery quality.'
            ],
            moduleBreakdown: [
                'Operational workflow modules',
                'Station authorization flows',
                'Compressor testing processes',
                'Logistics fuel record handling',
                'CBG vendor onboarding journeys'
            ],
            architecturePoints: [
                'Backend structured around domain-specific controllers for maintainability.',
                'Authorization logic aligned to real operational boundaries.',
                'Database-backed workflow execution for enterprise-scale usage.'
            ]
        },
        {
            title: 'GAIL Reporting, PDF and Excel Automation',
            domain: 'Reporting Automation',
            company: 'Infoneo at GAIL Corporate Office',
            period: 'Jan 2025 - Present',
            icon: 'fas fa-file-lines',
            summary: 'High-value reporting layer for operational visibility, document exports, and faster decision support across CNG business workflows.',
            techStack: ['MySQL', 'Node.js', 'PDF Generation', 'Excel Export', 'API Caching', 'Query Optimization'],
            quickHighlights: [
                'Reduced report runtimes by 40%+ through SQL optimization.',
                'Built PDF and Excel export pipelines for operational reporting.',
                'Supported real-time reporting with lazy loading and API caching.',
                'Improved reporting usability for business and compliance teams.'
            ],
            businessOverview: 'This reporting workstream focused on making operational data usable at business speed through reliable exports, optimized queries, and structured reporting endpoints.',
            problemStatement: 'Existing reports were slow, difficult to operationalize, and too dependent on manual extraction for teams that needed consistent business and compliance visibility.',
            role: 'Software Engineer',
            responsibilities: [
                'Optimized database access patterns for report-heavy workflows.',
                'Implemented export pipelines for PDF and Excel-based reporting.',
                'Supported API responses designed for large operational datasets.'
            ],
            featuresImplemented: [
                'Real-time report generation endpoints.',
                'PDF and Excel export flows for business reporting.',
                'Lazy-loading support for large result sets.',
                'Caching-aware APIs for frequent report consumers.'
            ],
            technologiesUsed: ['Node.js', 'MySQL', 'Indexing', 'Stored Procedures', 'PDF Pipelines', 'Excel Pipelines'],
            challengesFaced: [
                'Handling slow-running queries on operational datasets.',
                'Generating business-friendly exports without degrading API responsiveness.',
                'Balancing reporting depth with performance expectations.'
            ],
            solutionsDelivered: [
                'Optimized query design, indexing, and stored procedure usage.',
                'Built export-oriented workflows around PDF and Excel outputs.',
                'Introduced response patterns that improved usability for large reports.'
            ],
            businessImpact: [
                'Cut report runtimes by more than 40%.',
                'Improved access to operational and compliance data through direct exports.',
                'Made reporting workflows faster and more dependable for business users.'
            ],
            moduleBreakdown: [
                'Operational reports',
                'Excel export workflows',
                'PDF output pipelines',
                'Query-optimized data access'
            ],
            architecturePoints: [
                'Performance centered on query optimization and stored procedure usage.',
                'Report APIs designed for large data volumes and export-friendly responses.',
                'Caching and lazy loading used to protect frontend experience.'
            ]
        },
        {
            title: 'GAILGAS Intranet Application Suite',
            domain: 'Internal Portal',
            company: 'GAILGAS',
            period: 'Enterprise delivery project',
            icon: 'fas fa-sitemap',
            summary: 'Modular intranet suite with 25+ sub-applications for employee workflows, secure access, and connected internal operations.',
            techStack: ['Angular', 'JavaScript', 'REST APIs', 'Authentication', 'Dashboards', 'Responsive UI'],
            quickHighlights: [
                'Delivered a modular Angular intranet with 25+ sub-applications.',
                'Built secure authentication and responsive dashboards.',
                'Connected internal workflows with real-time backend integration.',
                'Improved usability for everyday employee operations.'
            ],
            businessOverview: 'The intranet suite supported internal employee workflows through a modular frontend architecture designed for operational clarity and daily usability.',
            problemStatement: 'Internal business processes were spread across multiple disconnected flows and needed a single, secure application layer that employees could use reliably across modules.',
            role: 'Software Engineer',
            responsibilities: [
                'Delivered frontend modules aligned with employee workflow needs.',
                'Integrated dashboards and backend-connected views into the intranet suite.',
                'Supported secure access patterns and responsive user experiences.'
            ],
            featuresImplemented: [
                '25+ sub-applications within a modular intranet structure.',
                'Authentication-aware user journeys.',
                'Responsive dashboards for internal visibility.',
                'Real-time backend integration for workflow updates.'
            ],
            technologiesUsed: ['Angular', 'JavaScript', 'REST APIs', 'Authentication', 'Dashboard UI'],
            challengesFaced: [
                'Maintaining consistency across many intranet modules.',
                'Supporting secure access without adding friction to employees.',
                'Keeping the UI responsive while integrating business workflows.'
            ],
            solutionsDelivered: [
                'Used a modular application structure for maintainable feature delivery.',
                'Implemented secure flows for internal access and data visibility.',
                'Improved interface consistency across employee-facing modules.'
            ],
            businessImpact: [
                'Created a more unified intranet experience for internal users.',
                'Improved workflow accessibility through secure, responsive interfaces.',
                'Enabled connected internal operations through integrated dashboards.'
            ],
            moduleBreakdown: [
                'Employee workflow modules',
                'Dashboard views',
                'Authentication flows',
                'Backend-connected utility screens'
            ],
            architecturePoints: [
                'Frontend organized as a modular intranet suite.',
                'Dashboard views designed around real-time backend integration.',
                'Authentication patterns applied consistently across modules.'
            ]
        },
        {
            title: 'Finhaat Claims Workflow and Dashboard',
            domain: 'Financial Services',
            company: 'CodeFire',
            period: 'May 2023 - Sep 2024',
            icon: 'fas fa-chart-line',
            summary: 'Claims initiation and approval workflow system backed by dashboards that improved operational clarity and reduced manual processing effort.',
            techStack: ['Node.js', 'JavaScript', 'Dashboards', 'Workflow Automation', 'Redis', 'AWS'],
            quickHighlights: [
                'Led claim initiation and approval workflow development.',
                'Delivered dashboard modules for business visibility.',
                'Reduced manual processing by 40%.',
                'Worked directly with clients and engineering teams during delivery.'
            ],
            businessOverview: 'Built to support financial service operations, this workflow system streamlined how claims moved from initiation through approval while giving teams visibility through dashboard-driven status tracking.',
            problemStatement: 'Manual claim handling created operational drag, reduced visibility, and increased coordination overhead across teams responsible for initiating, validating, and approving requests.',
            role: 'Software Engineer',
            responsibilities: [
                'Led delivery of claim workflow modules and supporting dashboards.',
                'Translated business process requirements into application logic.',
                'Coordinated with clients and team members throughout implementation.'
            ],
            featuresImplemented: [
                'Claim initiation workflow.',
                'Approval lifecycle handling.',
                'Dashboard views for operational tracking.',
                'Workflow paths aligned with business review stages.'
            ],
            technologiesUsed: ['Node.js', 'Redis', 'AWS', 'PM2', 'Jenkins', 'JavaScript'],
            challengesFaced: [
                'Reducing manual effort while preserving workflow control.',
                'Providing visibility across different processing stages.',
                'Supporting delivery quality while coordinating directly with clients.'
            ],
            solutionsDelivered: [
                'Converted manual claim handling into structured digital workflows.',
                'Added dashboards to expose workflow state and pending actions.',
                'Delivered modules that supported faster and more traceable operations.'
            ],
            businessImpact: [
                'Reduced manual processing by 40%.',
                'Improved visibility for teams managing financial workflows.',
                'Created a stronger operational backbone for claim handling.'
            ],
            moduleBreakdown: [
                'Claim initiation',
                'Approval workflows',
                'Operational dashboards',
                'Business visibility modules'
            ],
            architecturePoints: [
                'Workflow logic designed around business approval stages.',
                'Dashboard layer used to expose operational progress.',
                'Platform support included deployment-aware engineering practices.'
            ]
        },
        {
            title: 'Finhaat Data Validation and Scheduled Services',
            domain: 'Workflow Automation',
            company: 'CodeFire',
            period: 'May 2023 - Sep 2024',
            icon: 'fas fa-gears',
            summary: 'Automation-heavy backend workstream for high-volume Excel validation, scheduled services, caching, and deployment support.',
            techStack: ['Excel Validation', 'Cron Jobs', 'Redis', 'Node.js', 'Jenkins', 'PM2'],
            quickHighlights: [
                'Built high-volume Excel validation workflows.',
                'Improved data accuracy and reduced processing errors by 35%.',
                'Designed 5+ cron services and Redis-backed performance improvements.',
                'Helped reduce API load by 45% and downtime incidents by 30%.'
            ],
            businessOverview: 'This workstream focused on data-heavy operational reliability, combining scheduled jobs, validation logic, caching, and deployment support to keep business workflows dependable at scale.',
            problemStatement: 'Teams needed better control over high-volume spreadsheet inputs, recurring background processing, and API performance under operational load.',
            role: 'Software Engineer',
            responsibilities: [
                'Built validation logic for high-volume Excel processing.',
                'Designed scheduled services for recurring workflow tasks.',
                'Supported deployment and runtime reliability using PM2, Jenkins, and AWS.'
            ],
            featuresImplemented: [
                'Excel data validation pipelines.',
                'Five or more cron-driven backend services.',
                'Redis caching for high-frequency API access.',
                'Deployment support aligned with CI/CD operations.'
            ],
            technologiesUsed: ['Node.js', 'Redis', 'Cron Jobs', 'Jenkins', 'PM2', 'AWS'],
            challengesFaced: [
                'Validating high-volume input data without slowing operations.',
                'Managing repeated backend workloads efficiently.',
                'Reducing API strain while keeping delivery stable in production.'
            ],
            solutionsDelivered: [
                'Introduced structured validation for Excel-driven workflows.',
                'Automated repeatable backend tasks using cron services.',
                'Reduced repeated API computation with Redis caching and deployment discipline.'
            ],
            businessImpact: [
                'Improved data accuracy and reduced processing errors by 35%.',
                'Reduced API load by 45%.',
                'Reduced downtime incidents by 30%.'
            ],
            moduleBreakdown: [
                'Excel validation pipelines',
                'Scheduled backend services',
                'Caching layer support',
                'Deployment and uptime workflows'
            ],
            architecturePoints: [
                'Background jobs separated from request-driven application flows.',
                'Caching introduced to offload repeated API pressure.',
                'Operational delivery supported through CI/CD and process management.'
            ]
        },
        {
            title: 'Aware Traceability and Digital Product Passport',
            domain: 'Supply Chain Traceability',
            company: 'PrimaFelicitas',
            period: 'Jun 2022 - May 2023',
            icon: 'fas fa-link',
            summary: 'Traceability platform for tamper-proof material verification, supply chain visibility, and digital product passport automation.',
            techStack: ['Node.js', 'REST APIs', 'Traceability', 'Compliance Reporting', 'Verification Flows'],
            quickHighlights: [
                'Engineered core verification features for material traceability.',
                'Reduced API processing time by 40%.',
                'Automated Digital Product Passport generation.',
                'Improved compliance reporting efficiency by 50%.'
            ],
            businessOverview: 'Aware focused on supply-chain trust by making material verification traceable, auditable, and easier to operationalize across product life-cycle workflows.',
            problemStatement: 'The platform needed to prove material authenticity and track chain-of-custody style information while also reducing friction in compliance-oriented documentation.',
            role: 'Junior Node.js Developer',
            responsibilities: [
                'Delivered core backend features for traceability workflows.',
                'Optimized API behavior for faster verification handling.',
                'Automated product passport generation for compliance use cases.'
            ],
            featuresImplemented: [
                'Tamper-proof material verification logic.',
                'Real-time traceability support.',
                'Digital Product Passport generation.',
                'Compliance-oriented reporting automation.'
            ],
            technologiesUsed: ['Node.js', 'REST APIs', 'Verification Workflows', 'Compliance Reporting'],
            challengesFaced: [
                'Supporting trust-sensitive verification flows.',
                'Reducing latency in API-driven processing.',
                'Automating document-heavy compliance outputs.'
            ],
            solutionsDelivered: [
                'Improved verification pipeline efficiency in core API flows.',
                'Automated digital passport generation for downstream reporting.',
                'Built backend functionality aligned with transparency-focused use cases.'
            ],
            businessImpact: [
                'Reduced API processing time by 40%.',
                'Improved compliance reporting efficiency by 50%.',
                'Strengthened transparency for supply-chain workflows.'
            ],
            moduleBreakdown: [
                'Verification services',
                'Traceability workflows',
                'Digital Product Passport automation',
                'Compliance reporting support'
            ],
            architecturePoints: [
                'Backend flows designed around trusted verification events.',
                'Automation used to reduce manual compliance effort.',
                'API optimization applied to time-sensitive workflow processing.'
            ]
        },
        {
            title: 'ClojBug Test Management Platform',
            domain: 'QA Engineering',
            company: 'PrimaFelicitas',
            period: 'Jun 2022 - May 2023',
            icon: 'fas fa-bug',
            summary: 'Test-case management platform built to improve QA workflow speed, visibility, and engineering coordination.',
            techStack: ['Node.js', 'REST APIs', 'QA Workflow', 'Test Management', 'Web Application'],
            quickHighlights: [
                'Built a scalable test-case management application.',
                'Delivered 30+ REST APIs for QA operations.',
                'Improved QA workflow speed by 75%.',
                'Reduced debugging time through better workflow structure.'
            ],
            businessOverview: 'ClojBug supported engineering and QA teams with a central workflow for test management, reducing scattered tracking and improving coordination around quality processes.',
            problemStatement: 'QA execution was slowed down by fragmented tracking and the lack of a dedicated system for managing test cases and supporting workflow visibility.',
            role: 'Junior Node.js Developer',
            responsibilities: [
                'Built backend APIs and feature flows for QA management.',
                'Supported scalable workflow handling for test operations.',
                'Improved usability for teams managing case execution and follow-up.'
            ],
            featuresImplemented: [
                'Test-case management workflows.',
                '30+ REST APIs for platform operations.',
                'Workflow support for faster QA execution.',
                'Tracking-oriented platform capabilities for testing teams.'
            ],
            technologiesUsed: ['Node.js', 'REST APIs', 'JavaScript', 'Web Application'],
            challengesFaced: [
                'Making QA workflows easier to manage at scale.',
                'Supporting multiple platform actions through a clean API surface.',
                'Improving workflow speed without adding complexity.'
            ],
            solutionsDelivered: [
                'Created a dedicated system for test-case lifecycle management.',
                'Delivered an API-rich platform to support QA team needs.',
                'Improved workflow organization for better debugging and follow-through.'
            ],
            businessImpact: [
                'Improved QA workflow speed by 75%.',
                'Reduced debugging time through clearer process management.',
                'Created stronger operational support for testing teams.'
            ],
            moduleBreakdown: [
                'Test-case lifecycle management',
                'QA workflow APIs',
                'Execution tracking views',
                'Debugging support workflows'
            ],
            architecturePoints: [
                'API-first structure enabled multiple QA actions through one platform.',
                'Workflow organization prioritized execution clarity.',
                'Platform scope focused on day-to-day QA productivity.'
            ]
        },
        {
            title: 'Physician Campaign Management Platform',
            domain: 'Healthcare Technology',
            company: 'Doceree',
            period: 'Oct 2021 - Mar 2022',
            icon: 'fas fa-stethoscope',
            summary: 'MEAN-stack web application for physician-targeted campaign management, feature delivery, and experimentation support.',
            techStack: ['MEAN Stack', 'Web Application', 'Campaign Modules', 'A/B Testing', 'Product Collaboration'],
            quickHighlights: [
                'Delivered end-to-end features in a new MEAN-stack application.',
                'Built modules for physician-targeted campaign management.',
                'Integrated with physician-only digital platforms.',
                'Supported A/B testing implementation with design and product teams.'
            ],
            businessOverview: 'This platform supported physician-focused digital campaign operations through a dedicated application built for campaign management and iterative product delivery.',
            problemStatement: 'The product needed a dedicated web application to manage campaign workflows and support integration with physician-only digital channels in a controlled, measurable way.',
            role: 'Software Engineer',
            responsibilities: [
                'Delivered end-to-end feature implementation in the MEAN stack.',
                'Built campaign-focused modules aligned with product requirements.',
                'Collaborated closely with design and product teams on experimentation support.'
            ],
            featuresImplemented: [
                'Campaign management modules.',
                'Platform integration for physician-focused workflows.',
                'End-to-end web application features.',
                'A/B testing support for product experimentation.'
            ],
            technologiesUsed: ['MEAN Stack', 'JavaScript', 'Web Application', 'A/B Testing'],
            challengesFaced: [
                'Building a new application while shaping product behavior quickly.',
                'Supporting campaign workflows tied to specialized digital channels.',
                'Coordinating engineering delivery with design and product inputs.'
            ],
            solutionsDelivered: [
                'Delivered core campaign modules for the new application.',
                'Implemented features that supported targeted physician workflows.',
                'Enabled product experimentation through A/B testing support.'
            ],
            businessImpact: [
                'Supported physician-targeted campaign execution in a dedicated application.',
                'Improved product delivery through close cross-functional collaboration.',
                'Established a strong foundation for further feature rollout.'
            ],
            moduleBreakdown: [
                'Campaign management',
                'Targeting-related workflows',
                'Experiment support',
                'Feature delivery for web operations'
            ],
            architecturePoints: [
                'End-to-end feature delivery within a MEAN-stack application.',
                'Modules aligned with campaign workflow needs.',
                'Experimentation support integrated with product delivery.'
            ]
        }
    ],

    certifications: [
        { name: 'Operating Systems',                       issuer: 'Coding Ninjas', date: 'Mar 2024' },
        { name: 'Database Management System',              issuer: 'Coding Ninjas', date: 'May 2024' },
        { name: 'System Design',                           issuer: 'Coding Ninjas', date: 'Jun 2024' },
        { name: 'Back End – Triplebyte Certified',         issuer: 'Triplebyte',    date: 'Apr 2022' },
        { name: 'Front End Development with React',        issuer: 'Coding Ninjas', date: 'May 2021' },
        { name: 'Full Stack Web Dev – Node.js (Back End)', issuer: 'Coding Ninjas', date: 'Oct 2020' },
        { name: 'Full Stack Web Dev – Front End',          issuer: 'Coding Ninjas', date: 'Aug 2020' },
        { name: 'Java – Data Structures & Algorithms',     issuer: 'Coding Ninjas', date: 'Feb 2019' }
    ]
};

// ── State ────────────────────────────────────────────────────
var progressBars = [];
var timelineDetailsStore = {};
var projectDetailsStore = {};
var projectDetailLastTrigger = null;

// ── Utilities ────────────────────────────────────────────────

/**
 * Returns value as an array; falls back to [] when value is not an array.
 * @param {*} value
 * @returns {Array}
 */
function safeArray(value) {
    return Array.isArray(value) ? value : [];
}

/**
 * Returns value as a plain object; falls back to {} for null / non-objects.
 * @param {*} value
 * @returns {Object}
 */
function safeObject(value) {
    return value && typeof value === 'object' && !Array.isArray(value) ? value : {};
}

/**
 * Escapes HTML special characters to prevent XSS when injecting into innerHTML.
 * @param {*} text
 * @returns {string}
 */
function escapeHtml(text) {
    return String(text == null ? '' : text)
        .replace(/&/g,  '&amp;')
        .replace(/</g,  '&lt;')
        .replace(/>/g,  '&gt;')
        .replace(/"/g,  '&quot;')
        .replace(/'/g,  '&#039;');
}

/**
 * Safely sets textContent of a DOM element by ID. No-ops if element is missing.
 * @param {string} id
 * @param {string} text
 */
function setText(id, text) {
    var el = document.getElementById(id);
    if (el) el.textContent = text;
}

/**
 * Safely sets innerHTML of a DOM element by ID. No-ops if element is missing.
 * @param {string} id
 * @param {string} html
 */
function setHtml(id, html) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = html;
}

/**
 * Safely sets an attribute on a DOM element by ID. No-ops if element is missing.
 * @param {string} id
 * @param {string} attr
 * @param {string} value
 */
function setAttr(id, attr, value) {
    var el = document.getElementById(id);
    if (el) el.setAttribute(attr, value);
}

// ── HTML Builders ────────────────────────────────────────────

/**
 * Builds <li> social icon link items.
 * @param {Array<{icon: string, url: string}>} items
 * @returns {string}
 */
function buildSocialLinks(items) {
    return safeArray(items)
        .map(function (s) {
            return (
                '<li><a href="' + escapeHtml(s.url) + '" target="_blank" rel="noreferrer noopener">' +
                '<i class="' + escapeHtml(s.icon) + '" aria-hidden="true"></i>' +
                '</a></li>'
            );
        })
        .join('');
}

/**
 * Builds hero quick fact pills.
 * @param {Array<{value: string, label: string}>} items
 * @returns {string}
 */
function buildHeroFacts(items) {
    return safeArray(items)
        .map(function (item) {
            return (
                '<div class="hero-fact">' +
                '<span class="hero-fact-value">' + escapeHtml(item.value) + '</span>' +
                '<span class="hero-fact-label">' + escapeHtml(item.label) + '</span>' +
                '</div>'
            );
        })
        .join('');
}

/**
 * Builds hero focus point rows.
 * @param {string[]} items
 * @returns {string}
 */
function buildHeroFocusPoints(items) {
    return safeArray(items)
        .map(function (item) {
            return (
                '<div class="hero-focus-item">' +
                '<i class="fas fa-check-circle" aria-hidden="true"></i>' +
                '<span>' + escapeHtml(item) + '</span>' +
                '</div>'
            );
        })
        .join('');
}

/**
 * Returns display metadata for a skill level.
 * @param {number} level
 * @returns {{ label: string, summary: string, dots: number, tone: string }}
 */
function getSkillLevelMeta(level) {
    if (level >= 90) {
        return {
            label: 'Expert',
            summary: 'Production ownership across architecture, performance, and delivery quality.',
            dots: 5,
            tone: 'expert'
        };
    }
    if (level >= 82) {
        return {
            label: 'Advanced',
            summary: 'Strong implementation depth for scalable features and day-to-day engineering execution.',
            dots: 4,
            tone: 'advanced'
        };
    }
    return {
        label: 'Proficient',
        summary: 'Reliable hands-on capability for modern product delivery and continuous improvement.',
        dots: 3,
        tone: 'proficient'
    };
}

/**
 * Builds an alternative capability-card layout for featured skills.
 * @param {Array<{name: string, level: number}>} items
 * @returns {string}
 */
function buildSkillBars(items) {
    return safeArray(items)
        .map(function (skill) {
            var level = Math.max(0, Math.min(100, Number(skill.level) || 0));
            var meta = getSkillLevelMeta(level);
            var dots = Array.from({ length: 5 }, function (_, index) {
                return '<span class="skill-strength-dot' + (index < meta.dots ? ' is-active' : '') + '"></span>';
            }).join('');
            return (
                '<article class="skill-spotlight-card skill-tone-' + escapeHtml(meta.tone) + '">' +
                '<div class="skill-spotlight-top">' +
                '<p class="skill-kicker">Core Capability</p>' +
                '<span class="skill-badge">' + escapeHtml(meta.label) + '</span>' +
                '</div>' +
                '<h3 class="skill-spotlight-title">' + escapeHtml(skill.name) + '</h3>' +
                '<p class="skill-spotlight-copy">' + escapeHtml(meta.summary) + '</p>' +
                '<div class="skill-spotlight-footer">' +
                '<div class="skill-strength-scale" aria-label="Expertise strength">' + dots + '</div>' +
                '<span class="skill-strength-value">' + level + '/100</span>' +
                '</div>' +
                '</article>'
            );
        })
        .join('');
}

/**
 * Builds the chip-based skill category grid.
 * @param {Object.<string, string[]>} skillsByCategory
 * @returns {string}
 */
function buildSkillCategoryGrid(skillsByCategory) {
    var icons = {
        'Languages': 'fas fa-code',
        'Frameworks': 'fas fa-cubes',
        'Cloud & DevOps': 'fas fa-cloud',
        'Databases': 'fas fa-database',
        'Tools & Practices': 'fas fa-tools'
    };
    return Object.keys(safeObject(skillsByCategory))
        .map(function (category) {
            var iconClass = icons[category] || 'fas fa-check-circle';
            var items = safeArray(skillsByCategory[category]);
            var chips = safeArray(skillsByCategory[category])
                .map(function (skill) {
                    return '<span class="skill-chip">' + escapeHtml(skill) + '</span>';
                })
                .join('');
            return (
                '<article class="skill-category-card">' +
                '<div class="skill-category-head">' +
                '<h3 class="skill-category-title"><i class="' + iconClass + '" aria-hidden="true"></i> ' + escapeHtml(category) + '</h3>' +
                '<span class="skill-category-count">' + items.length + ' items</span>' +
                '</div>' +
                '<div class="chip-list">' + chips + '</div>' +
                '</article>'
            );
        })
        .join('');
}

/**
 * Builds a short preview list for timeline cards.
 * @param {string[]} items
 * @param {number} limit
 * @returns {string}
 */
function buildTimelinePreview(items, limit) {
    return safeArray(items)
        .slice(0, limit)
        .map(function (point) { return '<li>' + escapeHtml(point) + '</li>'; })
        .join('');
}

/**
 * Builds a single timeline card, shared by experience and education sections.
 * @param {Object} item
 * @param {number} index  Drives left / right alternation.
 * @param {string} detailId
 * @param {string} detailGroup
 * @returns {string}
 */
function buildTimelineCard(item, index, detailId, detailGroup) {
    var bulletItems = safeArray(item.highlights || item.details);
    var bullets = buildTimelinePreview(bulletItems, 2);

    var title    = escapeHtml(item.role    || item.degree    || '');
    var subtitle = escapeHtml(item.company || item.institute || '');
    var period   = escapeHtml(item.period  || '');
    var context  = item.context ? ' | ' + escapeHtml(item.context) : '';
    var side     = index % 2 === 1 ? 'right' : 'left';
    var kicker   = detailGroup === 'experience' ? 'Role Details' : 'Academic Details';

    return (
        '<div class="timeline-box ' + side + ' timeline-card-trigger" tabindex="0" role="button" aria-haspopup="dialog" data-detail-id="' + escapeHtml(detailId) + '">' +
        '<div class="timeline-container">' +
        '<p class="timeline-card-kicker">' + kicker + '</p>' +
        '<h3 class="experience-designation m0 m-blue">' + title + '</h3>' +
        '<h4 class="experience-company-name">'           + subtitle + '</h4>' +
        '<h5 class="experience-duration m0">'            + period + context + '</h5>' +
        '<ul class="bullet-list">' + bullets + '</ul>' +
        '<span class="timeline-card-cta">Click to view full details</span>' +
        '</div></div>'
    );
}

/**
 * Builds a full timeline section including the animated centre divider.
 * @param {Array} items
 * @param {string} detailGroup
 * @returns {string}
 */
function buildTimeline(items, detailGroup) {
    var cards = safeArray(items).map(function (item, index) {
        var detailId = detailGroup + '-' + index;
        timelineDetailsStore[detailId] = {
            kicker: detailGroup === 'experience' ? 'Work Experience' : 'Education',
            title: item.role || item.degree || '',
            subtitle: item.company || item.institute || '',
            period: item.period || '',
            context: item.context || '',
            details: safeArray(item.highlights || item.details)
        };
        return buildTimelineCard(item, index, detailId, detailGroup);
    }).join('');
    return (
        cards +
        '<div class="timeline-divider">' +
        '<div class="timeline-traveller">' +
        '<div><i class="fas fa-plane" aria-hidden="true"></i></div>' +
        '</div></div>'
    );
}

function buildProjectTechBadges(items) {
    return safeArray(items)
        .map(function (item) {
            return '<span class="project-tech-badge">' + escapeHtml(item) + '</span>';
        })
        .join('');
}

function buildProjectQuickHighlights(items, limit) {
    return safeArray(items)
        .slice(0, limit)
        .map(function (item) {
            return '<li><i class="fas fa-check-circle" aria-hidden="true"></i><span>' + escapeHtml(item) + '</span></li>';
        })
        .join('');
}

function buildProjectOverviewPanel(items) {
    var projects = safeArray(items);
    var domains = {};

    projects.forEach(function (project) {
        if (project && project.domain) {
            domains[project.domain] = true;
        }
    });

    return (
        '<aside class="project-overview-panel" aria-label="Project case study overview">' +
        '<p class="project-overview-kicker">Case Study Collection</p>' +
        '<h3 class="project-overview-title">Backend-first delivery across enterprise operations, dashboards, automation workflows, and production-ready business systems.</h3>' +
        '<p class="project-overview-copy">Each card opens into a recruiter-friendly case study covering problem context, implementation scope, engineering decisions, and measurable outcomes from real project work.</p>' +
        '<div class="project-overview-stats">' +
        '<div class="project-overview-stat"><strong>' + projects.length + '</strong><span>Case Studies</span></div>' +
        '<div class="project-overview-stat"><strong>' + Object.keys(domains).length + '</strong><span>Domains</span></div>' +
        '<div class="project-overview-stat"><strong>API + UI</strong><span>Delivery Blend</span></div>' +
        '</div>' +
        '<div class="project-overview-tags">' +
        '<span>Backend Architecture</span>' +
        '<span>Dashboards</span>' +
        '<span>PDF / Excel Pipelines</span>' +
        '<span>Deployment & Caching</span>' +
        '</div>' +
        '</aside>'
    );
}

/**
 * Builds a single project case-study card.
 * @param {Object} project
 * @param {string} detailId
 * @returns {string}
 */
function buildProjectCard(project, detailId) {
    return (
        '<article class="project-case-item">' +
        '<button type="button" class="project-case-card project-case-trigger" data-project-id="' + escapeHtml(detailId) + '" aria-haspopup="dialog" aria-label="Open details for ' + escapeHtml(project.title) + '">' +
        '<div class="project-case-top">' +
        '<div class="project-case-icon" aria-hidden="true"><i class="' + escapeHtml(project.icon || 'fas fa-folder-open') + '"></i></div>' +
        '<div class="project-case-meta">' +
        '<span class="project-case-domain">' + escapeHtml(project.domain || 'Project') + '</span>' +
        '<span class="project-case-company">' + escapeHtml(project.company || '') + '</span>' +
        '</div>' +
        '<i class="fas fa-arrow-up-right-from-square project-case-arrow" aria-hidden="true"></i>' +
        '</div>' +
        '<h3 class="project-case-title">' + escapeHtml(project.title || '') + '</h3>' +
        '<p class="project-case-summary">' + escapeHtml(project.summary || '') + '</p>' +
        '<div class="project-tech-row">' + buildProjectTechBadges(project.techStack) + '</div>' +
        '<div class="project-case-footer">' +
        '<span class="project-case-period">' + escapeHtml(project.period || '') + '</span>' +
        '</div>' +
        '</button>' +
        '</article>'
    );
}

/**
 * Builds all project case-study cards with an overview panel.
 * @param {Array} items
 * @returns {string}
 */
function buildProjects(items) {
    var projects = safeArray(items);
    var cards = projects.map(function (project, index) {
        var detailId = 'project-' + index;
        projectDetailsStore[detailId] = project;
        return buildProjectCard(project, detailId);
    }).join('');

    return (
        '<div class="project-showcase">' +
        buildProjectOverviewPanel(projects) +
        '<div class="project-case-grid">' + cards + '</div>' +
        '</div>'
    );
}

function buildProjectDetailList(items) {
    return '<ul class="project-detail-list">' + safeArray(items)
        .map(function (item) {
            return '<li>' + escapeHtml(item) + '</li>';
        })
        .join('') + '</ul>';
}

function buildProjectInsightItem(title, iconClass, content, extraClass) {
    return (
        '<article class="project-insight-item' + (extraClass ? ' ' + extraClass : '') + '">' +
        '<h4 class="project-insight-title"><i class="' + escapeHtml(iconClass) + '" aria-hidden="true"></i><span>' + escapeHtml(title) + '</span></h4>' +
        '<div class="project-insight-body">' + content + '</div>' +
        '</article>'
    );
}

function buildProjectLinkButtons(items) {
    return safeArray(items)
        .map(function (item) {
            return '<a class="project-detail-link" href="' + escapeHtml(item.url) + '" target="_blank" rel="noreferrer noopener">' + escapeHtml(item.label) + '</a>';
        })
        .join('');
}

function buildProjectDetailContent(project) {
    var infoCards = [
        { label: 'Company', value: project.company || '' },
        { label: 'Timeline', value: project.period || '' },
        { label: 'Role', value: project.role || '' }
    ].map(function (item) {
        return (
            '<div class="project-detail-meta-row">' +
            '<span class="project-detail-meta-key">' + escapeHtml(item.label) + '</span>' +
            '<strong class="project-detail-meta-value">' + escapeHtml(item.value || 'Not specified') + '</strong>' +
            '</div>'
        );
    }).join('');

    var overviewContent =
        '<p class="project-detail-text">' + escapeHtml(project.businessOverview || '') + '</p>' +
        '<p class="project-detail-text project-detail-text-muted">' + escapeHtml(project.problemStatement || '') + '</p>';

    var roleContent =
        '<p class="project-detail-role"><span>Role</span>' + escapeHtml(project.role || '') + '</p>' +
        buildProjectDetailList(project.responsibilities);

    var technologiesContent = '<div class="project-detail-tech-grid">' + buildProjectTechBadges(project.technologiesUsed || project.techStack) + '</div>';

    var detailCards = [
        buildProjectInsightItem('Project Context', 'fas fa-briefcase', overviewContent, 'project-insight-item-wide'),
        buildProjectInsightItem('Role and Responsibilities', 'fas fa-user-gear', roleContent),
        buildProjectInsightItem('Technologies Used', 'fas fa-code', technologiesContent),
        buildProjectInsightItem('Features Implemented', 'fas fa-layer-group', buildProjectDetailList(project.featuresImplemented)),
        buildProjectInsightItem('Business Impact', 'fas fa-chart-column', buildProjectDetailList(project.businessImpact)),
        buildProjectInsightItem('Challenges Faced', 'fas fa-triangle-exclamation', buildProjectDetailList(project.challengesFaced)),
        buildProjectInsightItem('Solutions Delivered', 'fas fa-wand-magic-sparkles', buildProjectDetailList(project.solutionsDelivered))
    ];

    if (safeArray(project.moduleBreakdown).length) {
        detailCards.push(
            buildProjectInsightItem('Module Breakdown', 'fas fa-diagram-project', buildProjectDetailList(project.moduleBreakdown))
        );
    }

    if (safeArray(project.architecturePoints).length) {
        detailCards.push(
            buildProjectInsightItem('Architecture and Workflow Notes', 'fas fa-network-wired', buildProjectDetailList(project.architecturePoints))
        );
    }

    if (safeArray(project.links).length) {
        detailCards.push(
            buildProjectInsightItem('Links', 'fas fa-link', '<div class="project-detail-links">' + buildProjectLinkButtons(project.links) + '</div>', 'project-insight-item-wide')
        );
    }

    return (
        '<div class="project-detail-hero">' +
        '<div class="project-detail-header">' +
        '<div class="project-detail-icon" aria-hidden="true"><i class="' + escapeHtml(project.icon || 'fas fa-folder-open') + '"></i></div>' +
        '<div class="project-detail-header-copy">' +
        '<p class="project-detail-kicker">' + escapeHtml(project.domain || 'Project Case Study') + '</p>' +
        '<h3 id="project-detail-title" class="project-detail-title">' + escapeHtml(project.title || '') + '</h3>' +
        '<p class="project-detail-subtitle">' + escapeHtml(project.company || '') + (project.period ? ' | ' + escapeHtml(project.period) : '') + '</p>' +
        '<p class="project-detail-summary">' + escapeHtml(project.summary || '') + '</p>' +
        '</div>' +
        '</div>' +
        '<div class="project-detail-meta-panel">' + infoCards + '</div>' +
        '<div class="project-detail-top-tech">' + buildProjectTechBadges(project.techStack) + '</div>' +
        '</div>' +
        '<div class="project-insight-grid">' + detailCards.join('') + '</div>'
    );
}

/**
 * Builds a single certification card.
 * @param {{ name: string, issuer: string, date: string }} cert
 * @returns {string}
 */
function buildCertCard(cert) {
    return (
        '<article class="cert-card">' +
        '<h3>'   + escapeHtml(cert.name)   + '</h3>' +
        '<p>'    + escapeHtml(cert.issuer) + '</p>'  +
        '<span>' + escapeHtml(cert.date)   + '</span>' +
        '</article>'
    );
}

/**
 * Builds all certification cards.
 * @param {Array} items
 * @returns {string}
 */
function buildCertifications(items) {
    return safeArray(items).map(buildCertCard).join('');
}

/**
 * Returns the formatted hero contact line: "email | phone | location".
 * @param {{ email: string, phone: string, location: string }} personal
 * @returns {string}
 */
function buildContactLine(personal) {
    return [personal.email, personal.phone, personal.location]
        .filter(Boolean)
        .join(' | ');
}

// ── Skill Bar Animation ──────────────────────────────────────

/**
 * Resets a skill bar to 0 % width and marks it unvisited.
 * @param {Element} bar
 */
function resetBar(bar) {
    bar.setAttribute('data-visited', 'false');
    bar.style.width = '0%';
}

/**
 * Smoothly animates a skill bar from 0 to its target width.
 * @param {Element} bar
 */
function animateBar(bar) {
    var current  = 0;
    var target   = Number(bar.getAttribute('data-bar-width')) || 0;
    var step     = Math.max(1, Math.ceil(target / 60));
    var interval = setInterval(function () {
        current = Math.min(current + step, target);
        bar.style.width = current + '%';
        if (current >= target) clearInterval(interval);
    }, 10);
}

/**
 * Fires animateBar() for every skill bar that has scrolled into view,
 * and resets bars that have scrolled above the viewport.
 */
function checkSkillBarsInView() {
    var viewHeight = window.innerHeight;
    for (var i = 0; i < progressBars.length; i++) {
        var bar  = progressBars[i];
        var rect = bar.getBoundingClientRect();
        if (rect.top <= viewHeight - rect.height && bar.getAttribute('data-visited') === 'false') {
            bar.setAttribute('data-visited', 'true');
            animateBar(bar);
        } else if (rect.top > viewHeight) {
            resetBar(bar);
        }
    }
}

// ── Data Binding ─────────────────────────────────────────────

/**
 * Populates every personal / hero field from the personal data block.
 * @param {Object} personal
 */
function bindPersonalSection(personal) {
    setText('my-name',           personal.name     || 'Your Name');
    setText('my-tagline',        personal.tagline  || '');
    setText('hero-contact-line', buildContactLine(personal));
    setText('about-summary',     personal.summary  || '');
    setText('about-location',    personal.location || '');
    setText('contact-location',  personal.location || '');
    setText('contact-phone',     personal.phone    || '');
    setText('contact-email',     personal.email    || '');

    setAttr('profile-image', 'src', personal.image || '');
    setAttr('profile-image', 'alt', (personal.name || 'Profile') + ' photo');

    var socialHtml = buildSocialLinks(personal.socials);
    setHtml('hero-social-icons',   socialHtml);
    setHtml('footer-social-icons', socialHtml);
    setHtml('hero-quick-facts',    buildHeroFacts(personal.quickFacts));
    setHtml('hero-focus-points',   buildHeroFocusPoints(personal.focusPoints));
}

/**
 * Master binder — populates every section of the page from the data object.
 * @param {Object} data
 */
function bindResumeData(data) {
    var d = safeObject(data);
    var stats = [
        { value: '4+', label: 'Years Experience' },
        { value: String(safeArray(d.projects).length), label: 'Projects Delivered' },
        { value: String(safeArray(d.certifications).length), label: 'Certifications' },
        { value: '40%', label: 'Reported Efficiency Gain' }
    ];

    timelineDetailsStore = {};
    projectDetailsStore = {};

    bindPersonalSection(safeObject(d.personal));

    setHtml('about-stats',
        stats.map(function (item) {
            return '<div class="stat-item"><span class="stat-number">' + escapeHtml(item.value) + '</span><span class="stat-label">' + escapeHtml(item.label) + '</span></div>';
        }).join('')
    );

    setHtml('skills-display',      buildSkillBars(d.skillBars));
    setHtml('skill-category-grid', buildSkillCategoryGrid(d.skills));
    setHtml('experience-timeline', buildTimeline(d.experience, 'experience'));
    setHtml('education-timeline',  buildTimeline(d.education, 'education'));
    setHtml('portfolio-container', buildProjects(d.projects));
    setHtml('certification-grid',  buildCertifications(d.certifications));

    setText('contact-summary',
        'Open to Software Engineer and Full Stack opportunities. ' +
        'Reach out for product engineering, client-site execution, and scalable platform development.'
    );

    // Collect newly rendered skill bars, reset, then check viewport.
    progressBars = Array.prototype.slice.call(
        document.querySelectorAll('.skill-progress > div')
    );
    progressBars.forEach(resetBar);
    checkSkillBarsInView();
}

// ── Initialisation ───────────────────────────────────────────

/**
 * Entry point — called once the page has fully loaded.
 * Passes the static RESUME_DATA object straight into the binder (no fetch needed).
 */
function initialisePage() {
    bindResumeData(RESUME_DATA);

    // Cache DOM refs used in scroll handler
    _nav        = document.querySelector('#body-header nav');
    _backToTop  = document.getElementById('back-to-top');
    _scrollProg = document.getElementById('scroll-progress');

    // Wire back-to-top click
    if (_backToTop) {
        _backToTop.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Set up scroll-reveal animations
    setupReveal();
    setupTimelineAnimations();
    setupTimelineDetailDialog();
    setupProjectDetailDialog();
    setupContactForm();

    // Apply initial scroll state
    handleScroll();
}

// ── Scroll Handler ───────────────────────────────────────────
var _nav        = null;
var _backToTop  = null;
var _scrollProg = null;

function handleScroll() {
    var scrollY = window.scrollY || window.pageYOffset;

    // Skill bar animations
    checkSkillBarsInView();

    // Sticky nav glass effect
    if (_nav) {
        if (scrollY > 60) _nav.classList.add('nav-scrolled');
        else              _nav.classList.remove('nav-scrolled');
    }

    // Back-to-top button visibility
    if (_backToTop) {
        if (scrollY > 400) _backToTop.classList.add('visible');
        else               _backToTop.classList.remove('visible');
    }

    // Scroll progress bar width
    if (_scrollProg) {
        var docH    = document.documentElement.scrollHeight - window.innerHeight;
        var percent = docH > 0 ? (scrollY / docH) * 100 : 0;
        _scrollProg.style.width = percent.toFixed(1) + '%';
    }

    // Active nav link highlighting
    updateActiveNav();
}

function updateActiveNav() {
    var sections = document.querySelectorAll('section[id]');
    var navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    var scrollY  = (window.scrollY || window.pageYOffset) + 90;

    sections.forEach(function (sec) {
        var top    = sec.offsetTop;
        var bottom = top + sec.offsetHeight;
        if (scrollY >= top && scrollY < bottom) {
            var id = sec.getAttribute('id');
            navLinks.forEach(function (link) {
                link.classList.toggle('active', link.getAttribute('href') === '#' + id);
            });
        }
    });
}

function setupReveal() {
    var items = document.querySelectorAll('section');
    if (!('IntersectionObserver' in window)) {
        items.forEach(function (el) { el.classList.add('visible'); });
        return;
    }
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.08 });
    items.forEach(function (el) {
        el.classList.add('reveal');
        observer.observe(el);
    });
}

function setupTimelineAnimations() {
    var items = document.querySelectorAll('#experience .timeline-box, #education .timeline-box');
    if (!items.length) return;

    items.forEach(function (item, index) {
        item.classList.add('timeline-card-reveal');
        item.style.transitionDelay = Math.min(index * 90, 450) + 'ms';
    });

    if (!('IntersectionObserver' in window)) {
        items.forEach(function (item) { item.classList.add('is-visible'); });
        return;
    }

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.14,
        rootMargin: '0px 0px -40px 0px'
    });

    items.forEach(function (item) {
        observer.observe(item);
    });
}

function openTimelineDetail(detailId) {
    var modal = document.getElementById('timeline-detail-modal');
    var data = timelineDetailsStore[detailId];
    if (!modal || !data) return;

    setText('timeline-detail-kicker', data.kicker || 'Details');
    setText('timeline-detail-title', data.title || '');
    setText('timeline-detail-subtitle', data.subtitle || '');
    setText('timeline-detail-period', data.period + (data.context ? ' | ' + data.context : ''));
    setHtml('timeline-detail-list', safeArray(data.details).map(function (item) {
        return '<li>' + escapeHtml(item) + '</li>';
    }).join(''));

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('has-modal-open');

    var closeButton = document.getElementById('timeline-detail-close');
    if (closeButton) closeButton.focus();
}

function closeTimelineDetail() {
    var modal = document.getElementById('timeline-detail-modal');
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('has-modal-open');
}

function setupTimelineDetailDialog() {
    document.addEventListener('click', function (event) {
        var trigger = event.target.closest('.timeline-card-trigger');
        if (trigger) {
            openTimelineDetail(trigger.getAttribute('data-detail-id'));
            return;
        }

        if (event.target.closest('#timeline-detail-close') || event.target.id === 'timeline-detail-backdrop') {
            closeTimelineDetail();
        }
    });

    document.addEventListener('keydown', function (event) {
        var trigger = event.target.closest('.timeline-card-trigger');
        if (trigger && (event.key === 'Enter' || event.key === ' ')) {
            event.preventDefault();
            openTimelineDetail(trigger.getAttribute('data-detail-id'));
            return;
        }

        if (event.key === 'Escape') {
            closeTimelineDetail();
        }
    });
}

function ensureProjectDetailModal() {
    var modal = document.getElementById('project-detail-modal');
    if (modal) return modal;

    modal = document.createElement('div');
    modal.id = 'project-detail-modal';
    modal.className = 'project-detail-modal';
    modal.setAttribute('aria-hidden', 'true');
    modal.innerHTML = '' +
        '<div class="project-detail-backdrop" data-project-detail-close="true"></div>' +
        '<div class="project-detail-dialog" role="dialog" aria-modal="true" aria-labelledby="project-detail-title">' +
        '<button type="button" class="project-detail-close" aria-label="Close project details" data-project-detail-close="true">' +
        '<i class="fas fa-xmark" aria-hidden="true"></i>' +
        '</button>' +
        '<div id="project-detail-content"></div>' +
        '</div>';

    document.body.appendChild(modal);
    return modal;
}

function openProjectDetail(detailId, trigger) {
    var modal = ensureProjectDetailModal();
    var content = document.getElementById('project-detail-content');
    var dialog = modal ? modal.querySelector('.project-detail-dialog') : null;
    var project = projectDetailsStore[detailId];

    if (!modal || !content || !project) return;

    projectDetailLastTrigger = trigger || null;
    content.innerHTML = buildProjectDetailContent(project);
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('has-modal-open');
    if (dialog) dialog.scrollTop = 0;

    var closeButton = modal.querySelector('.project-detail-close');
    if (closeButton) closeButton.focus();
}

function closeProjectDetail() {
    var modal = document.getElementById('project-detail-modal');
    if (!modal) return;

    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('has-modal-open');

    if (projectDetailLastTrigger) {
        projectDetailLastTrigger.focus();
        projectDetailLastTrigger = null;
    }
}

function trapProjectDetailFocus(event) {
    var modal = document.getElementById('project-detail-modal');
    if (!modal || !modal.classList.contains('is-open') || event.key !== 'Tab') return;

    var focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (!focusable.length) return;

    var first = focusable[0];
    var last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
    }
}

function setupProjectDetailDialog() {
    ensureProjectDetailModal();

    document.addEventListener('click', function (event) {
        var trigger = event.target.closest('.project-case-trigger');
        if (trigger) {
            openProjectDetail(trigger.getAttribute('data-project-id'), trigger);
            return;
        }

        if (event.target.closest('[data-project-detail-close="true"]')) {
            closeProjectDetail();
        }
    });

    document.addEventListener('keydown', function (event) {
        trapProjectDetailFocus(event);

        if (event.key === 'Escape') {
            closeProjectDetail();
        }
    });
}

function getContactFieldLabel(fieldName) {
    var labels = {
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message'
    };
    return labels[fieldName] || 'Field';
}

function getContactFieldError(field) {
    var value = field.value.trim();
    var fieldName = field.name;

    if (field.hasAttribute('required') && !value) {
        return getContactFieldLabel(fieldName) + ' is required.';
    }

    if (fieldName === 'email' && value) {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value)) {
            return 'Enter a valid email address.';
        }
    }

    if (fieldName === 'name' && value.length < 2) {
        return 'Name must be at least 2 characters.';
    }

    if (fieldName === 'subject' && value.length > 120) {
        return 'Subject must be 120 characters or fewer.';
    }

    if (fieldName === 'message' && value && value.length < 10) {
        return 'Message must be at least 10 characters.';
    }

    return '';
}

function getFieldErrorElement(field) {
    if (!field || !field.id) return null;
    return document.getElementById(field.id + '-error');
}

function setContactFieldError(field, message) {
    var errorEl = getFieldErrorElement(field);
    if (!errorEl) return;

    if (message) {
        field.classList.add('form-input-invalid');
        field.setAttribute('aria-invalid', 'true');
        errorEl.textContent = message;
        errorEl.hidden = false;
    } else {
        field.classList.remove('form-input-invalid');
        field.removeAttribute('aria-invalid');
        errorEl.textContent = '';
        errorEl.hidden = true;
    }
}

function validateContactField(field) {
    var message = getContactFieldError(field);
    setContactFieldError(field, message);
    return !message;
}

function ensureContactFormHelpers(form) {
    var fields = form.querySelectorAll('input[name], textarea[name]');
    var status = document.getElementById('contact-form-status');

    if (!status) {
        status = document.createElement('div');
        status.id = 'contact-form-status';
        status.className = 'form-status-message';
        status.hidden = true;
        status.setAttribute('role', 'status');
        status.setAttribute('aria-live', 'polite');
        form.appendChild(status);
    }

    fields.forEach(function (field) {
        if (!field.id) {
            field.id = 'contact-' + field.name;
        }

        var errorId = field.id + '-error';
        var nextElement = field.nextElementSibling;

        field.setAttribute('aria-describedby', errorId);

        if (!nextElement || nextElement.id !== errorId) {
            var errorEl = document.createElement('p');
            errorEl.id = errorId;
            errorEl.className = 'form-field-error';
            errorEl.hidden = true;
            field.insertAdjacentElement('afterend', errorEl);
        }
    });

    return status;
}

function showContactFormStatus(form, type, message) {
    var status = ensureContactFormHelpers(form);
    status.className = 'form-status-message is-' + type;
    status.textContent = message;
    status.hidden = false;
}

function hideContactFormStatus(form) {
    var status = document.getElementById('contact-form-status');
    if (!status) return;
    status.hidden = true;
    status.textContent = '';
    status.className = 'form-status-message';
}

function ensureContactPopup() {
    var popup = document.getElementById('contact-popup');
    if (popup) return popup;

    popup = document.createElement('div');
    popup.id = 'contact-popup';
    popup.className = 'contact-popup';
    popup.setAttribute('aria-hidden', 'true');
    popup.innerHTML = '' +
        '<div class="contact-popup-backdrop" data-popup-close="true"></div>' +
        '<div class="contact-popup-card" role="dialog" aria-modal="true" aria-labelledby="contact-popup-title">' +
        '<button type="button" class="contact-popup-close" aria-label="Close message" data-popup-close="true">' +
        '<i class="fas fa-xmark" aria-hidden="true"></i>' +
        '</button>' +
        '<div class="contact-popup-icon" id="contact-popup-icon"></div>' +
        '<h3 class="contact-popup-title" id="contact-popup-title"></h3>' +
        '<p class="contact-popup-text" id="contact-popup-text"></p>' +
        '</div>';

    document.body.appendChild(popup);

    popup.addEventListener('click', function (event) {
        if (event.target.closest('[data-popup-close="true"]')) {
            popup.classList.remove('is-open');
            popup.setAttribute('aria-hidden', 'true');
        }
    });

    return popup;
}

function showContactPopup(type, title, message) {
    var popup = ensureContactPopup();
    var icon = document.getElementById('contact-popup-icon');
    var popupTitle = document.getElementById('contact-popup-title');
    var popupText = document.getElementById('contact-popup-text');

    popup.className = 'contact-popup is-open is-' + type;
    popup.setAttribute('aria-hidden', 'false');
    icon.innerHTML = type === 'success'
        ? '<i class="fas fa-circle-check" aria-hidden="true"></i>'
        : '<i class="fas fa-circle-exclamation" aria-hidden="true"></i>';
    popupTitle.textContent = title;
    popupText.textContent = message;
}

function handleContactSubmitSuccess(form, fields) {
    fields.forEach(function (field) {
        setContactFieldError(field, '');
    });

    form.reset();
    showContactFormStatus(form, 'success', 'Message sent successfully. I will get back to you soon.');
    showContactPopup('success', 'Message Sent Successfully', 'Thanks for reaching out. Your message has been submitted successfully.');
}

function setupContactForm() {
    var form = document.getElementById('contact-form');
    if (!form) return;

    var fields = Array.prototype.slice.call(form.querySelectorAll('input[name], textarea[name]'));
    ensureContactFormHelpers(form);

    fields.forEach(function (field) {
        field.addEventListener('blur', function () {
            validateContactField(field);
        });

        field.addEventListener('input', function () {
            if (field.classList.contains('form-input-invalid')) {
                validateContactField(field);
            }
            hideContactFormStatus(form);
        });
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        hideContactFormStatus(form);

        if (!CONTACT_FORM_SCRIPT_URL || CONTACT_FORM_SCRIPT_URL === 'YOUR_GOOGLE_SCRIPT_URL') {
            showContactFormStatus(form, 'error', 'Contact form URL is missing. Update the Google Apps Script deployment URL.');
            showContactPopup('error', 'Configuration Missing', 'Add the Google Apps Script deployment URL before sending messages.');
            return;
        }

        var submitButton = form.querySelector('button[type="submit"]');
        var originalButtonText = submitButton ? submitButton.textContent : '';
        var formData = {
            name: form.querySelector('input[name="name"]').value.trim(),
            email: form.querySelector('input[name="email"]').value.trim(),
            subject: form.querySelector('input[name="subject"]').value.trim(),
            message: form.querySelector('textarea[name="message"]').value.trim()
        };

        var firstInvalidField = null;
        var isFormValid = fields.every(function (field) {
            var isValid = validateContactField(field);
            if (!isValid && !firstInvalidField) {
                firstInvalidField = field;
            }
            return isValid;
        });

        if (!isFormValid) {
            showContactFormStatus(form, 'error', 'Please correct the highlighted fields and try again.');
            showContactPopup('error', 'Form Not Submitted', 'Please fix the highlighted errors before sending your message.');
            if (firstInvalidField) firstInvalidField.focus();
            return;
        }

        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';
        }

        showContactFormStatus(form, 'pending', 'Sending your message...');

        fetch(CONTACT_FORM_SCRIPT_URL, {
            cache: 'no-cache',
            redirect: 'follow',
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain;charset=utf-8'
            },
            body: JSON.stringify(formData)
        })
            .then(function (response) {
                if (!response.ok) {
                    throw new Error('Request failed with status ' + response.status);
                }
                return response.text();
            })
            .then(function (text) {
                
                var result;

                try {
                    result = JSON.parse(text);
                } catch (error) {
                    throw new Error('Invalid server response');
                }

                if (!result || result.result !== 'success') {
                    throw new Error(result && result.error ? result.error : 'Form submission failed');
                }

                handleContactSubmitSuccess(form, fields);
            })
            .catch(function (error) {
                console.error(error);
                showContactFormStatus(form, 'error', error.message || 'Unable to send message right now. Please try again.');
                showContactPopup('error', 'Submission Failed', error.message || 'Unable to send message right now. Please try again.');
            })
            .finally(function () {
                if (submitButton) {
                    submitButton.disabled = false;
                    submitButton.textContent = originalButtonText;
                }
            });
    });
}

// ── Event Listeners ──────────────────────────────────────────
window.addEventListener('scroll', handleScroll, { passive: true });
window.addEventListener('load',   initialisePage);
