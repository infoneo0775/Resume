/* ============================================================
   Resume Portfolio — script.js
   Author : Harish Nishad
   Data   : Hardcoded static object — no fetch / data.json needed
   ============================================================ */

'use strict';

var CONTACT_FORM_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbylRgi6mRepZz0lMO4LfXT7H2eGXwPyEOujCJN4PNP_id1vDPDW48wy0XIY3BdjbbEr/exec';
var COMPANY_LOGOS = {
    doceree: 'https://resume0775.s3.eu-north-1.amazonaws.com/doceree_logo.svg',
    codefire: 'https://resume0775.s3.eu-north-1.amazonaws.com/codefire.webp',
    infoneo: 'https://resume0775.s3.eu-north-1.amazonaws.com/infoneo.png',
    primafelicitas: 'https://resume0775.s3.eu-north-1.amazonaws.com/primafelicitas.png',
    ignou: 'https://resume0775.s3.eu-north-1.amazonaws.com/ignou.webp'
};
function escapeSvgText(value) {
    return String(value || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function buildProjectPosterTitleRows(value) {
    var words = String(value || 'Project Case Study').split(/\s+/).filter(Boolean);
    var rows = [];
    var current = '';

    words.forEach(function (word) {
        var next = current ? current + ' ' + word : word;
        if (next.length > 22 && current) {
            rows.push(current);
            current = word;
            return;
        }
        current = next;
    });

    if (current) {
        rows.push(current);
    }

    return rows.slice(0, 3).map(escapeSvgText);
}

function buildProjectPoster(config) {
    var title = escapeSvgText(config.title || 'Project Case Study');
    var subtitle = escapeSvgText(config.subtitle || 'Delivery Snapshot');
    var titleRows = buildProjectPosterTitleRows(config.title || 'Project Case Study');
    var accentA = config.accentA || '#f7d243';
    var accentB = config.accentB || '#0c831f';
    var accentC = config.accentC || '#163326';
    var svg = '' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 720" role="img" aria-label="' + title + '">' +
        '<defs>' +
        '<linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">' +
        '<stop offset="0%" stop-color="#0d1512"/>' +
        '<stop offset="100%" stop-color="#17241e"/>' +
        '</linearGradient>' +
        '<linearGradient id="panel" x1="0" y1="0" x2="1" y2="1">' +
        '<stop offset="0%" stop-color="' + accentA + '" stop-opacity="0.95"/>' +
        '<stop offset="100%" stop-color="' + accentB + '" stop-opacity="0.92"/>' +
        '</linearGradient>' +
        '<linearGradient id="line" x1="0" y1="0" x2="1" y2="1">' +
        '<stop offset="0%" stop-color="#ffffff" stop-opacity="0.55"/>' +
        '<stop offset="100%" stop-color="#ffffff" stop-opacity="0.08"/>' +
        '</linearGradient>' +
        '</defs>' +
        '<rect width="1200" height="720" fill="url(#bg)"/>' +
        '<circle cx="1040" cy="140" r="200" fill="' + accentA + '" fill-opacity="0.18"/>' +
        '<circle cx="140" cy="620" r="220" fill="' + accentB + '" fill-opacity="0.16"/>' +
        '<rect x="56" y="56" width="1088" height="608" rx="40" fill="none" stroke="url(#line)" stroke-width="2"/>' +
        '<rect x="92" y="96" width="520" height="528" rx="32" fill="url(#panel)"/>' +
        '<rect x="660" y="120" width="420" height="24" rx="12" fill="#ffffff" fill-opacity="0.14"/>' +
        '<rect x="660" y="176" width="360" height="24" rx="12" fill="#ffffff" fill-opacity="0.1"/>' +
        '<rect x="660" y="232" width="296" height="24" rx="12" fill="#ffffff" fill-opacity="0.1"/>' +
        '<rect x="660" y="338" width="420" height="148" rx="28" fill="#ffffff" fill-opacity="0.06" stroke="#ffffff" stroke-opacity="0.12"/>' +
        '<rect x="696" y="374" width="144" height="16" rx="8" fill="#ffffff" fill-opacity="0.16"/>' +
        '<rect x="696" y="414" width="306" height="16" rx="8" fill="#ffffff" fill-opacity="0.1"/>' +
        '<rect x="696" y="448" width="248" height="16" rx="8" fill="#ffffff" fill-opacity="0.1"/>' +
        '<text x="144" y="178" font-family="Segoe UI, Arial, sans-serif" font-size="28" font-weight="700" letter-spacing="6" fill="#f6ffe9" fill-opacity="0.84">PROJECT WORK</text>' +
        '<text x="144" y="272" font-family="Segoe UI, Arial, sans-serif" font-size="62" font-weight="700" fill="#0f1b14">' + subtitle + '</text>' +
        '<text x="144" y="372" font-family="Segoe UI, Arial, sans-serif" font-size="42" font-weight="800" fill="#ffffff">' +
        titleRows.map(function (row, index) {
            return '<tspan x="144" dy="' + (index === 0 ? '0' : '52') + '">' + row + '</tspan>';
        }).join('') +
        '</text>' +
        '<text x="144" y="588" font-family="Segoe UI, Arial, sans-serif" font-size="26" font-weight="600" fill="#efffde" fill-opacity="0.92">Case Study Preview</text>' +
        '<rect x="92" y="96" width="520" height="528" rx="32" fill="none" stroke="' + accentC + '" stroke-opacity="0.3" stroke-width="2"/>' +
        '</svg>';

    return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
}

function normalizeProjectImageEntry(image, projectTitle, index) {
    if (!image) {
        return null;
    }

    if (typeof image === 'string') {
        return {
            url: image,
            label: 'Project Image ' + (index + 1),
            alt: (projectTitle || 'Project') + ' image ' + (index + 1)
        };
    }

    if (typeof image === 'object' && image.url) {
        return {
            url: image.url,
            label: image.label || ('Project Image ' + (index + 1)),
            alt: image.alt || image.label || ((projectTitle || 'Project') + ' image ' + (index + 1))
        };
    }

    return null;
}

function normalizeProjectImages(project, fallbackUrl) {
    var rawImages = Array.isArray(project && project.images) ? project.images : [];
    var normalized = rawImages
        .map(function (image, index) {
            return normalizeProjectImageEntry(image, project && project.title, index);
        })
        .filter(Boolean);

    if (!normalized.length && project && project.image) {
        normalized.push(normalizeProjectImageEntry(project.image, project.title, 0));
    }

    if (!normalized.length && fallbackUrl) {
        normalized.push(normalizeProjectImageEntry({
            url: fallbackUrl,
            label: 'Project Preview',
            alt: (project && project.title ? project.title : 'Project') + ' preview'
        }, project && project.title, 0));
    }

    return normalized;
}

function getProjectImages(project) {
    return project && Array.isArray(project.images) ? project.images : [];
}

function getProjectPrimaryImage(project) {
    var images = getProjectImages(project);
    return images.length ? images[0] : null;
}

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
                  'to drive innovation and develop solutions that benefit society and humanitY.',
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
            { icon: 'fab fa-github',   url: 'https://github.com/harish0775' },
            { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/harish0775' },
            { icon: 'fab fa-twitter',  url: 'https://x.com/harish0775' }
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
            title: 'Finhaat – B2B Insurance Distribution Platform (FinSAAS)',
            domain: 'InsurTech / B2B SaaS / Financial Services',
            company: 'Finhaat Technologies Pvt Ltd',
            period: 'Jun 2023 – May 2024',
            icon: 'fas fa-shield-alt',
            summary: 'Backend engineering for FinSAAS — Finhaat\'s institutional B2B insurance distribution platform — covering policy issuance APIs, claims management, partner onboarding, RBAC, and MIS reporting for 200+ institutional partners across India.',
            techStack: ['Node.js', 'REST APIs', 'MySQL', 'RBAC', 'Insurance APIs', 'Document Management', 'Policy Issuance', 'Claims Workflow'],
            quickHighlights: [
                'Built backend APIs for end-to-end digital policy issuance integrated with multiple insurer systems.',
                'Developed claims submission and tracking module with real-time status updates across insurers.',
                'Implemented role-based access control (RBAC) for institutional partner hierarchies and compliance requirements.',
                'Engineered MIS and reporting APIs providing trend analysis and performance dashboards for institutional partners.'
            ],
            businessOverview: 'Finhaat is a B2B platform transforming financial services delivery for emerging India. FinSAAS is its institutional arm — a unified assisted digital platform offering insurance distribution, issuance, and claims management across multiple insurers and product lines (Health, Life, Cattle, Parametric, Assets) to 200+ institutional partners covering 75 lakh+ lives.',
            problemStatement: 'Institutional partners needed a single digital platform to manage insurance product journeys end-to-end — from quote to issuance to claims — across multiple insurers, while maintaining compliance, role management, and real-time visibility into their portfolio performance.',
            role: 'Software Engineer (Backend)',
            responsibilities: [
                'Developed and maintained backend REST APIs powering the FinSAAS institutional platform.',
                'Built policy issuance pipeline integrating with external insurer APIs for instant digital policy generation.',
                'Implemented the claims management module handling submission, tracking, and real-time status resolution.',
                'Designed RBAC architecture to support institutional partner hierarchies with compliance and audit requirements.',
                'Built MIS and reporting layer delivering dashboard metrics, trend analysis, and partner performance data.',
                'Developed secure document storage and retrieval APIs for policy and claims documentation.'
            ],
            featuresImplemented: [
                'Policy issuance APIs: quote generation, proposal submission, instant digital issuance across Health, Life, Cattle, Parametric, and Asset products.',
                'Multi-insurer API integration for real-time processing and response handling.',
                'Claims journey: digital submission, document upload, real-time query and response, status tracking.',
                'Unified dashboard APIs: portfolio overview, insurer-wise splits, product-wise performance metrics.',
                'RBAC system: role definition, permission management, compliance controls for institutional partner staff.',
                'Secure document management: upload, storage, and retrieval for policy and claims documents.',
                'MIS reporting: trend analysis, forecasting data endpoints, partner performance aggregation.',
                'Partner onboarding APIs: institutional registration, configuration, and product activation flows.',
                'Regulatory update pipeline: backend support for rapid product journey changes driven by compliance requirements.'
            ],
            technologiesUsed: ['Node.js', 'Express', 'MySQL', 'REST APIs', 'RBAC', 'Third-party Insurer APIs', 'Document Management', 'Cron Jobs', 'MIS Reporting'],
            challengesFaced: [
                'Integrating with multiple insurer APIs that had inconsistent response formats and reliability characteristics.',
                'Designing an RBAC model flexible enough to support varied institutional partner org structures while enforcing compliance.',
                'Building a claims workflow that handled real-time status updates across asynchronous insurer systems.',
                'Ensuring document management met regulatory standards for secure storage and retrieval at scale.'
            ],
            solutionsDelivered: [
                'Built an insurer API abstraction layer that normalised responses across providers and handled retry and fallback logic.',
                'Designed a configurable RBAC schema that mapped to institutional hierarchy levels without hardcoding role structures.',
                'Implemented an event-driven claims status engine with polling and webhook support for asynchronous insurer responses.',
                'Developed a document management service with access-controlled storage and structured retrieval tied to policy and claim IDs.'
            ],
            businessImpact: [
                'Supported 200+ institutional partners and 75 lakh+ lives covered through the FinSAAS platform.',
                'Enabled instant digital policy issuance replacing manual, paper-based processes for partner field teams.',
                'Reduced claims processing time through real-time digital submission and status tracking across insurers.',
                'Provided institutional partners with real-time MIS dashboards to monitor portfolio performance and compliance.'
            ],
            moduleBreakdown: [
                'Partner onboarding and configuration',
                'Policy issuance and multi-insurer API integration',
                'Claims submission and status tracking',
                'RBAC and compliance management',
                'Document management (policy and claims)',
                'Unified dashboard and MIS reporting',
                'Trend analysis and forecasting data layer',
                'Regulatory update support pipeline'
            ],
            architecturePoints: [
                'Backend structured as feature-scoped API modules with partner-level data isolation for multi-tenant institutional use.',
                'Insurer integrations abstracted behind a unified adapter layer to normalise formats and handle failures gracefully.',
                'RBAC implemented as a configurable permission matrix supporting dynamic institutional hierarchy mapping.',
                'Claims and issuance flows designed as stateful pipelines with audit trails and async status reconciliation support.'
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
        },
        {
            title: 'Mailiam – Email Marketing SaaS Platform',
            domain: 'Email Marketing / SaaS',
            company: 'PrimaFelicitas',
            period: 'Jun 2022 – May 2023',
            icon: 'fas fa-envelope-open-text',
            summary: 'Full-stack SaaS email marketing platform covering user onboarding, contact management, template creation, campaign scheduling, and reporting — built for business teams to run and track email campaigns end to end.',
            images: [
                {
                    url: 'https://resume0775.s3.eu-north-1.amazonaws.com/mailiam_email_compaign.png',
                    label: 'Mailiam Email Campaign Dashboard'
                },
                {
                    url: 'https://resume0775.s3.eu-north-1.amazonaws.com/mailiam_setup_temp_page.png',
                    label: 'Mailiam Template Setup Page'
                },
                {
                    url: 'https://resume0775.s3.eu-north-1.amazonaws.com/mailiam_setup_template.png',
                    label: 'Mailiam Template Builder'
                },
                {
                    url: 'https://resume0775.s3.eu-north-1.amazonaws.com/mailiam_setup_temple.png',
                    label: 'Mailiam Template Preview'
                },
                {
                    url: 'https://resume0775.s3.eu-north-1.amazonaws.com/mailiam_sms_tem_template.png',
                    label: 'Mailiam SMS Template Config'
                },
                {
                    url: 'https://resume0775.s3.eu-north-1.amazonaws.com/mailiam_bussiness_size.png',
                    label: 'Mailiam Business Size Selection'
                },
                {
                    url: 'https://resume0775.s3.eu-north-1.amazonaws.com/mailiam_data_mapping.png',
                    label: 'Mailiam Data Mapping Flow'
                }
            ],
            techStack: ['Node.js', 'Angular', 'MySQL', 'REST APIs', 'Multi-step Onboarding', 'RBAC', 'Email Campaigns'],
            quickHighlights: [
                'Delivered complete multi-step user registration and onboarding flow with email and OTP verification.',
                'Built contacts module with manual add, CSV/XLSX bulk import, field mapping, and list management.',
                'Implemented template system with layout gallery, HTML editor, and rich text editor support.',
                'Engineered campaign workflow covering From/To/Subject/Design configuration, preview, test, and scheduling.'
            ],
            businessOverview: 'Mailiam is a business email marketing SaaS platform that gives companies the tools to grow their audience, design email campaigns, and measure delivery outcomes — all within a single, managed product experience.',
            problemStatement: 'Business teams needed a reliable self-service platform to manage contacts at scale, build professional email templates without technical effort, and run campaigns with scheduling and reporting support baked in.',
            role: 'Software Engineer (Backend + Frontend Integration)',
            responsibilities: [
                'Developed backend APIs and database logic for user registration, onboarding, and authentication flows.',
                'Built the full contacts and mailing list module including bulk import pipelines with field mapping.',
                'Implemented template creation flows integrating layout selection, HTML editor, and template gallery.',
                'Engineered the email campaign module covering sender configuration, recipient list selection, scheduling, and test email dispatch.',
                'Integrated frontend Angular components with backend APIs across all major feature modules.'
            ],
            featuresImplemented: [
                'Multi-step onboarding: register, email verification, basic info, company info, business details, phone OTP.',
                'Login, forgot password, reset password with expiry-aware link handling.',
                'Contacts module: add manually, import via CSV/XLSX/TXT, copy-paste, drag-and-drop file upload.',
                'Import pipeline with file preview, column mapping, list selection or creation.',
                'Mailing lists with folder-based organisation, subscriber manager, duplicate, rename, and delete.',
                'Template system with Layouts, Template Gallery, My Templates, and Code Your Own (HTML + rich text editor).',
                'Template setup: name, subject line, preview text, from email/name, personalisation support.',
                'Campaign builder: From, To (contact list), Subject, Design selection, Preview & Test, Schedule (send now / schedule for later / best time).',
                'Dashboard with total contacts, opens, clicks, and blocklist stats.',
                'Settings: My Profile, password change, Senders & IPs management, timezone and notification preferences.'
            ],
            technologiesUsed: ['Node.js', 'Express', 'Angular', 'MySQL', 'REST APIs', 'RBAC', 'Email Verification', 'OTP Flow', 'File Upload', 'Cron Jobs'],
            challengesFaced: [
                'Designing a multi-step onboarding flow that stayed reliable across email and OTP verification stages.',
                'Handling bulk contact imports with flexible field mapping without degrading performance.',
                'Managing template creation across multiple editor modes (drag-and-drop, HTML, gallery) in a consistent way.',
                'Building a campaign workflow that coordinated multiple configuration steps before scheduling and dispatch.'
            ],
            solutionsDelivered: [
                'Built a step-based onboarding architecture with verification state tracking and clear fallback handling.',
                'Created an import pipeline that parsed CSV/XLSX inputs, previewed data, mapped columns, and committed to lists atomically.',
                'Implemented a tabbed template design system separating layout selection, gallery templates, saved templates, and raw HTML entry.',
                'Engineered the campaign module as a sequenced configuration flow with validation gates before scheduling was available.'
            ],
            businessImpact: [
                'Delivered a working SaaS platform that covered the full email marketing lifecycle from onboarding to reporting.',
                'Enabled business users to import and manage thousands of contacts without technical support.',
                'Reduced time-to-campaign by providing structured template creation and guided campaign setup.',
                'Built a scalable foundation that supported Phase 2 expansion including plugins, subscription plans, and WordPress sync.'
            ],
            moduleBreakdown: [
                'User registration and multi-step onboarding',
                'Email and OTP verification flows',
                'Contacts and mailing list management',
                'Bulk import with field mapping pipeline',
                'Email template creation and editor system',
                'Campaign builder and scheduler',
                'Dashboard and campaign statistics',
                'Senders, settings, and profile management'
            ],
            architecturePoints: [
                'Backend structured around feature-specific API modules with user-scoped data isolation.',
                'Onboarding implemented as a stateful multi-step flow with verification checkpoints at each stage.',
                'Import pipeline designed to handle file parsing, preview, mapping, and list persistence in a single transaction-safe flow.',
                'Template and campaign modules built with a step-based UI architecture supported by corresponding backend validation.'
            ]
        }
    ],

    certifications: [
        {
            name: 'Operating Systems',
            issuer: 'Coding Ninjas',
            date: 'Mar 2024',
            fileUrl: 'https://resume0775.s3.eu-north-1.amazonaws.com/operating_systems.pdf'
        },
        {
            name: 'Database Management System',
            issuer: 'Coding Ninjas',
            date: 'May 2024',
            fileUrl: 'https://resume0775.s3.eu-north-1.amazonaws.com/database-management-system_dbms.pdf',
            description: 'Has successfully completed the course "Database Management System (DBMS)" conducted from February \u201924 to May \u201924.'
        },
        {
            name: 'System Design',
            issuer: 'Coding Ninjas',
            date: 'Jun 2024',
            fileUrl: 'https://resume0775.s3.eu-north-1.amazonaws.com/system_design.pdf',
            description: 'Has successfully completed the course "System Design" conducted from April \u201924 to June \u201924.'
        },
        { name: 'Back End – Triplebyte Certified',         issuer: 'Triplebyte',    date: 'Apr 2022' },
        {
            name: 'Front End Development with React',
            issuer: 'Coding Ninjas',
            date: 'May 2021',
                fileUrl: 'https://resume0775.s3.eu-north-1.amazonaws.com/advanced-front-end-web-development-with-react_full-stack.pdf',
                description: 'Has successfully completed the course "Advance Front-End Web Development with React - Full Stack" conducted from January 2021 to April 2021.'
        },
        {
            name: 'Full Stack Web Dev – Node.js (Back End)',
            issuer: 'Coding Ninjas',
            date: 'Oct 2020',
                fileUrl: 'https://resume0775.s3.eu-north-1.amazonaws.com/back-end_full-stack-web-development_node-js.pdf',
                description: 'Has successfully completed the course "Back End | Full Stack Web Development in Node.js" conducted from July 2020 to October 2020.'
        },
        {
            name: 'Full Stack Web Dev – Front End',
            issuer: 'Coding Ninjas',
            date: 'Aug 2020',
                fileUrl: 'https://resume0775.s3.eu-north-1.amazonaws.com/front-end_full-stack-web-development.pdf',
                description: 'Has successfully completed the course "Front End | Full Stack Web Development" conducted from May 2020 to July 2020.'
        },
        {
          name: 'Java – Data Structures & Algorithms',
          issuer: 'Coding Ninjas', 
          date: 'Feb 2019',
          fileUrl: 'https://resume0775.s3.eu-north-1.amazonaws.com/Java.jpg',
          description: 'Has successfully completed the course "Java - Data Structures and Algorithm" conducted from November 2018 to February 2019.'
        }
    ],

    appreciations: [
        {
            title: 'Client-Site Delivery Appreciation',
            organization: 'GAIL Corporate Office / BIS Stakeholders',
            date: '2025',
            summary: 'Recognized for dependable on-site software delivery, strong ownership of operational workflows, and consistently high execution quality during enterprise implementation.',
            quote: 'Appreciation received for delivering high-quality solutions with clarity, responsiveness, and professionalism during critical operations work.',
            highlights: [
                'Delivered business-critical features directly in the client environment.',
                'Maintained strong coordination with operational stakeholders and officers.',
                'Improved trust through reliable execution and fast issue turnaround.'
            ],
            attachmentLabel: 'Open appreciation attachments',
            attachments: [
                {
                    label: 'Appreciation Image 1',
                    url: 'https://resume0775.s3.eu-north-1.amazonaws.com/apprecation1.PNG',
                    type: 'image'
                }
            ]
        }
    ]
};

var PROJECT_IMAGE_MAP = {
    'GAIL CNG Operations Platform': buildProjectPoster({
        title: 'GAIL CNG Operations Platform',
        subtitle: 'Energy Operations',
        accentA: '#f7d243',
        accentB: '#0c831f',
        accentC: '#244b28'
    }),
    'GAIL Reporting, PDF and Excel Automation': buildProjectPoster({
        title: 'Reporting, PDF and Excel Automation',
        subtitle: 'Reporting Automation',
        accentA: '#ffb347',
        accentB: '#2f7d7a',
        accentC: '#184847'
    }),
    'GAILGAS Intranet Application Suite': buildProjectPoster({
        title: 'GAILGAS Intranet Application Suite',
        subtitle: 'Internal Portal',
        accentA: '#7ed957',
        accentB: '#135d66',
        accentC: '#1c4a50'
    }),
    'Finhaat – B2B Insurance Distribution Platform (FinSAAS)': buildProjectPoster({
        title: 'Finhaat B2B Insurance Distribution',
        subtitle: 'InsurTech Platform',
        accentA: '#00c2ff',
        accentB: '#106c8b',
        accentC: '#124c61'
    }),
    'Finhaat Data Validation and Scheduled Services': buildProjectPoster({
        title: 'Finhaat Validation and Scheduled Services',
        subtitle: 'Workflow Automation',
        accentA: '#ff8a5b',
        accentB: '#7f2ccb',
        accentC: '#4f226f'
    }),
    'Aware Traceability and Digital Product Passport': buildProjectPoster({
        title: 'Aware Traceability and Product Passport',
        subtitle: 'Supply Chain',
        accentA: '#82c91e',
        accentB: '#2b8a3e',
        accentC: '#275b2f'
    }),
    'ClojBug Test Management Platform': buildProjectPoster({
        title: 'ClojBug Test Management Platform',
        subtitle: 'QA Engineering',
        accentA: '#ffd166',
        accentB: '#ef476f',
        accentC: '#7b2d45'
    }),
    'Physician Campaign Management Platform': buildProjectPoster({
        title: 'Physician Campaign Management',
        subtitle: 'Healthcare Technology',
        accentA: '#80ed99',
        accentB: '#2d6a4f',
        accentC: '#244a3a'
    }),
    'Mailiam – Email Marketing SaaS Platform': buildProjectPoster({
        title: 'Mailiam Email Marketing Platform',
        subtitle: 'Email Marketing SaaS',
        accentA: '#f4a261',
        accentB: '#264653',
        accentC: '#203942'
    })
};

safeArray(RESUME_DATA.projects).forEach(function (project) {
    var fallbackImage = PROJECT_IMAGE_MAP[project.title] || buildProjectPoster({
        title: project.title,
        subtitle: project.domain,
        accentA: '#f7d243',
        accentB: '#0c831f',
        accentC: '#244b28'
    });

    project.images = normalizeProjectImages(project, fallbackImage);
    project.image = project.images.length ? project.images[0].url : '';
});

// ── State ────────────────────────────────────────────────────
var progressBars = [];
var timelineDetailsStore = {};
var projectDetailsStore = {};
var projectDetailLastTrigger = null;
var projectImagePreviewLastTrigger = null;
var certificatePreviewStore = {};
var certificatePreviewLastTrigger = null;
var appreciationPreviewStore = {};
var appreciationPreviewLastTrigger = null;

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

function getCompanyLogoUrl(companyName) {
    var normalizedName = String(companyName || '').toLowerCase();

    if (normalizedName.indexOf('doceree') !== -1) return COMPANY_LOGOS.doceree;
    if (normalizedName.indexOf('codefire') !== -1) return COMPANY_LOGOS.codefire;
    if (normalizedName.indexOf('infoneo') !== -1) return COMPANY_LOGOS.infoneo;
    if (normalizedName.indexOf('primafelicitas') !== -1) return COMPANY_LOGOS.primafelicitas;
    if (normalizedName.indexOf('ignou') !== -1) return COMPANY_LOGOS.ignou;

    return '';
}

function buildCompanyIdentity(companyName, wrapperClass, logoClass, nameClass) {
    var companyText = String(companyName || '');
    var safeCompanyName = escapeHtml(companyText);
    var logoUrl = getCompanyLogoUrl(companyText);
    var classes = 'company-identity' + (wrapperClass ? ' ' + wrapperClass : '');
    var nameClasses = 'company-identity-name' + (nameClass ? ' ' + nameClass : '');

    if (!safeCompanyName) return '';

    if (!logoUrl) {
        return (
            '<span class="' + classes + '">' +
            '<span class="' + nameClasses + '">' + safeCompanyName + '</span>' +
            '</span>'
        );
    }

    return (
        '<span class="' + classes + '">' +
        '<span class="company-logo-frame">' +
        '<img class="company-logo' + (logoClass ? ' ' + logoClass : '') + '" src="' + escapeHtml(logoUrl) + '" alt="' + safeCompanyName + ' logo">' +
        '</span>' +
        '<span class="' + nameClasses + '">' + safeCompanyName + '</span>' +
        '</span>'
    );
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
    var descriptions = {
        'Languages': 'Core implementation languages used across frontend, backend, and data workflows.',
        'Frameworks': 'Production-focused frameworks and libraries used for scalable application delivery.',
        'Cloud & DevOps': 'Deployment, infrastructure, and operations tooling for modern engineering execution.',
        'Databases': 'Transactional and cache-layer systems used for structured and high-performance data access.',
        'Tools & Practices': 'Daily delivery disciplines, architectural patterns, and workflow automation practices.'
    };
    return Object.keys(safeObject(skillsByCategory))
        .map(function (category) {
            var iconClass = icons[category] || 'fas fa-check-circle';
            var items = safeArray(skillsByCategory[category]);
            var rows = items
                .map(function (skill, index) {
                    return (
                        '<div class="skill-category-item">' +
                        '<span class="skill-category-item-index">' + String(index + 1).padStart(2, '0') + '</span>' +
                        '<span class="skill-category-item-name">' + escapeHtml(skill) + '</span>' +
                        '</div>'
                    );
                })
                .join('');
            return (
                '<article class="skill-category-card">' +
                '<div class="skill-category-head">' +
                '<h3 class="skill-category-title"><i class="' + iconClass + '" aria-hidden="true"></i> ' + escapeHtml(category) + '</h3>' +
                '<span class="skill-category-count">' + items.length + ' items</span>' +
                '</div>' +
                '<p class="skill-category-copy">' + escapeHtml(descriptions[category] || 'Delivery-focused capability stack.') + '</p>' +
                '<div class="skill-category-stack">' + rows + '</div>' +
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
    var subtitle = buildCompanyIdentity(
        item.company || item.institute || '',
        'company-identity-timeline',
        'company-logo-timeline',
        'company-identity-name-timeline'
    );
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

function buildProjectImage(project, wrapperClass, imageClass) {
    var primaryImage = getProjectPrimaryImage(project);

    if (!primaryImage || !primaryImage.url) {
        return '';
    }

    return (
        '<div class="' + escapeHtml(wrapperClass) + '">' +
        '<img class="' + escapeHtml(imageClass) + '" src="' + escapeHtml(primaryImage.url) + '" alt="' + escapeHtml(primaryImage.alt || ((project.title || 'Project') + ' preview')) + '" loading="lazy" decoding="async">' +
        '</div>'
    );
}

function buildProjectGallery(project) {
    var images = getProjectImages(project);

    if (!images.length) {
        return '';
    }

    return (
        '<section class="project-gallery-section">' +
        '<div class="project-gallery-head">' +
        '<p class="project-gallery-kicker">Project Work Showcase</p>' +
        '<span class="project-gallery-count">' + escapeHtml(String(images.length)) + ' Image' + (images.length > 1 ? 's' : '') + '</span>' +
        '</div>' +
        '<div class="project-gallery-grid">' +
        images.map(function (image, index) {
            return (
                '<figure class="project-gallery-card">' +
                '<img class="project-gallery-image" src="' + escapeHtml(image.url) + '" alt="' + escapeHtml(image.alt || image.label || ('Project image ' + (index + 1))) + '" loading="lazy" decoding="async" data-project-image-preview="' + escapeHtml(image.url) + '" data-project-image-label="' + escapeHtml(image.label || ('Project Image ' + (index + 1))) + '">' +
                '<figcaption class="project-gallery-caption">' +
                '<span class="project-gallery-caption-text">' + escapeHtml(image.label || ('Project Image ' + (index + 1))) + '</span>' +
                '<a class="project-gallery-link" href="' + escapeHtml(image.url) + '" target="_blank" rel="noreferrer noopener" data-project-image-preview="' + escapeHtml(image.url) + '" data-project-image-label="' + escapeHtml(image.label || ('Project Image ' + (index + 1))) + '">Open Image</a>' +
                '</figcaption>' +
                '</figure>'
            );
        }).join('') +
        '</div>' +
        '</section>'
    );
}

function buildProjectDetailTabs(project) {
    var hasImages = getProjectImages(project).length > 0;

    return (
        '<div class="project-detail-tabs" role="tablist" aria-label="Project detail sections">' +
        '<button type="button" class="project-detail-tab is-active" role="tab" aria-selected="true" data-project-tab="details">Details</button>' +
        '<button type="button" class="project-detail-tab" role="tab" aria-selected="false" data-project-tab="images">Images</button>' +
        '</div>'
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
        buildProjectImage(project, 'project-case-media', 'project-case-image') +
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
    var hasImages = getProjectImages(project).length > 0;
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

    var technologiesContent = '<div class="project-detail-tech-grid">' + buildProjectTechBadges(project.technologiesUsed || project.techStack) + '</div>';

    var detailCards = [
        buildProjectInsightItem('Quick Highlights', 'fas fa-bolt', buildProjectDetailList(project.quickHighlights)),
        buildProjectInsightItem('Business Overview', 'fas fa-briefcase', '<p class="project-detail-text">' + escapeHtml(project.businessOverview || '') + '</p>', 'project-insight-item-wide'),
        buildProjectInsightItem('Problem Statement', 'fas fa-circle-question', '<p class="project-detail-text project-detail-text-muted">' + escapeHtml(project.problemStatement || '') + '</p>', 'project-insight-item-wide'),
        buildProjectInsightItem('Role', 'fas fa-user-tie', '<p class="project-detail-text">' + escapeHtml(project.role || 'Not specified') + '</p>'),
        buildProjectInsightItem('Responsibilities', 'fas fa-user-gear', buildProjectDetailList(project.responsibilities)),
        buildProjectInsightItem('Features Implemented', 'fas fa-layer-group', buildProjectDetailList(project.featuresImplemented)),
        buildProjectInsightItem('Technologies Used', 'fas fa-code', technologiesContent),
        buildProjectInsightItem('Challenges Faced', 'fas fa-triangle-exclamation', buildProjectDetailList(project.challengesFaced)),
        buildProjectInsightItem('Solutions Delivered', 'fas fa-wand-magic-sparkles', buildProjectDetailList(project.solutionsDelivered)),
        buildProjectInsightItem('Business Impact', 'fas fa-chart-column', buildProjectDetailList(project.businessImpact))
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
        '<div class="project-detail-subtitle">' +
        buildCompanyIdentity(project.company || '', 'company-identity-detail-modal', 'company-logo-detail-modal', 'company-identity-name-detail-modal') +
        (project.period ? '<span class="project-detail-period-chip">' + escapeHtml(project.period) + '</span>' : '') +
        '</div>' +
        '<p class="project-detail-summary">' + escapeHtml(project.summary || '') + '</p>' +
        '</div>' +
        '</div>' +
        buildProjectDetailTabs(project) +
        '<section class="project-detail-tab-panel" role="tabpanel" data-project-panel="images">' +
        buildProjectGallery(project) +
        '</section>' +
        '<section class="project-detail-tab-panel is-active" role="tabpanel" data-project-panel="details">' +
        '<div class="project-detail-meta-panel">' + infoCards + '</div>' +
        '<div class="project-detail-top-tech">' + buildProjectTechBadges(project.techStack) + '</div>' +
        '<div class="project-insight-grid">' + detailCards.join('') + '</div>' +
        '</section>' +
        '</div>'
    );
}

/**
 * Builds a single certification card.
 * @param {{ name: string, issuer: string, date: string, fileUrl?: string }} cert
 * @param {string} certId
 * @param {number} index
 * @returns {string}
 */
function buildCertCard(cert, certId, index) {
    var hasPreview = Boolean(cert.fileUrl);
    return (
        '<button type="button" class="cert-card cert-card-trigger" data-cert-id="' + escapeHtml(certId) + '" aria-label="Open certificate for ' + escapeHtml(cert.name) + '">' +
        '<span class="cert-card-index">' + String(index + 1).padStart(2, '0') + '</span>' +
        '<span class="cert-card-status' + (hasPreview ? ' is-live' : '') + '">' + (hasPreview ? 'Preview Ready' : 'Credential Record') + '</span>' +
        '<h3 class="cert-card-title">' + escapeHtml(cert.name) + '</h3>' +
        '<p class="cert-card-issuer">' + escapeHtml(cert.issuer) + '</p>' +
        '<div class="cert-card-footer">' +
        '<span class="cert-card-date">' + escapeHtml(cert.date) + '</span>' +
        '<span class="cert-card-action">' + (hasPreview ? 'Open Certificate' : 'View Details') + '</span>' +
        '</div>' +
        '</button>'
    );
}

function buildFeaturedCertification(cert, certId) {
    var hasPreview = Boolean(cert && cert.fileUrl);
    if (!cert) return '';

    return (
        '<button type="button" class="cert-feature-card cert-card-trigger" data-cert-id="' + escapeHtml(certId) + '" aria-label="Open featured certificate ' + escapeHtml(cert.name) + '">' +
        '<span class="cert-feature-eyebrow">Featured Credential</span>' +
        '<h3 class="cert-feature-title">' + escapeHtml(cert.name) + '</h3>' +
        '<p class="cert-feature-copy">A focused backend credential that reinforces production-ready Node.js fundamentals, server-side architecture, and delivery discipline.</p>' +
        '<div class="cert-feature-meta">' +
        '<span><i class="fas fa-building-columns" aria-hidden="true"></i>' + escapeHtml(cert.issuer) + '</span>' +
        '<span><i class="fas fa-calendar-days" aria-hidden="true"></i>' + escapeHtml(cert.date) + '</span>' +
        '</div>' +
        '<div class="cert-feature-actions">' +
        '<span class="cert-feature-button">' + (hasPreview ? 'Preview PDF Certificate' : 'Open Credential Details') + '</span>' +
        '<span class="cert-feature-note">' + (hasPreview ? 'Local certificate file attached' : 'Credential metadata only') + '</span>' +
        '</div>' +
        '</button>'
    );
}

/**
 * Builds all certification cards.
 * @param {Array} items
 * @returns {string}
 */
function buildCertifications(items) {
    var certs = safeArray(items);
    var featuredIndex = certs.findIndex(function (cert) {
        return Boolean(cert && cert.fileUrl);
    });

    if (featuredIndex === -1) featuredIndex = 0;

    certificatePreviewStore = {};

    certs.forEach(function (cert, index) {
        certificatePreviewStore['cert-' + index] = cert;
    });

    return (
        '<div class="certification-showcase">' +
        buildFeaturedCertification(certs[featuredIndex], 'cert-' + featuredIndex) +
        '<div class="certification-gallery">' + certs.map(function (cert, index) {
            return buildCertCard(cert, 'cert-' + index, index);
        }).join('') + '</div>' +
        '</div>'
    );
}

function buildCertificatePreviewContent(cert) {
    var hasPreview = Boolean(cert && cert.fileUrl);
    var safeUrl = hasPreview ? escapeHtml(cert.fileUrl) : '';
    var description = cert && cert.description ? '<p class="certificate-modal-summary">' + escapeHtml(cert.description) + '</p>' : '';

    return (
        '<div class="certificate-modal-shell">' +
        '<div class="certificate-modal-header">' +
        '<p class="certificate-modal-kicker">Certificate Preview</p>' +
        '<h3 id="certificate-preview-title" class="certificate-modal-title">' + escapeHtml(cert.name || '') + '</h3>' +
        '<p class="certificate-modal-meta">' + escapeHtml(cert.issuer || '') + ' | ' + escapeHtml(cert.date || '') + '</p>' +
        description +
        '</div>' +
        '<div class="certificate-modal-stage">' +
        (hasPreview
            ? '<iframe class="certificate-modal-frame" src="' + safeUrl + '" title="Certificate preview for ' + escapeHtml(cert.name || '') + '"></iframe>'
            : '<div class="certificate-modal-empty"><i class="fas fa-file-circle-question" aria-hidden="true"></i><p>Preview file is not attached for this certificate yet.</p></div>') +
        '</div>' +
        '<div class="certificate-modal-footer">' +
        (hasPreview
            ? '<a class="certificate-modal-link" href="' + safeUrl + '" target="_blank" rel="noreferrer noopener">Open certificate directly</a>' +
              '<p class="certificate-modal-note">If the embedded preview is blocked by the browser, open the PDF directly from the link above.</p>'
            : '<p class="certificate-modal-note">Add a local or hosted PDF path to this certification entry to enable embedded preview.</p>') +
        '</div>' +
        '</div>'
    );
}

function getAppreciationAttachments(item) {
    var attachments = safeArray(item && item.attachments).filter(function (entry) {
        return entry && entry.url;
    });

    if (!attachments.length && item && item.fileUrl) {
        attachments.push({
            label: item.attachmentLabel || 'Appreciation attachment',
            url: item.fileUrl,
            type: 'document'
        });
    }

    return attachments;
}

function getAttachmentType(attachment) {
    var explicitType = attachment && attachment.type;
    var url = String(attachment && attachment.url ? attachment.url : '').toLowerCase();

    if (explicitType) return explicitType;
    if (/\.(png|jpe?g|gif|webp|bmp|svg)$/i.test(url)) return 'image';
    if (/\.pdf$/i.test(url)) return 'pdf';
    return 'document';
}

function buildAppreciationAttachmentPreview(attachment) {
    var safeUrl = escapeHtml(attachment.url || '');
    var safeLabel = escapeHtml(attachment.label || 'Attachment');
    var attachmentType = getAttachmentType(attachment);

    if (attachmentType === 'image') {
        return (
            '<figure class="appreciation-attachment-card">' +
            '<img class="appreciation-attachment-image" src="' + safeUrl + '" alt="' + safeLabel + '">' +
            '<figcaption class="appreciation-attachment-caption">' + safeLabel + '</figcaption>' +
            '</figure>'
        );
    }

    return (
        '<div class="appreciation-attachment-card appreciation-attachment-card-document">' +
        '<iframe class="appreciation-modal-frame" src="' + safeUrl + '" title="' + safeLabel + '"></iframe>' +
        '<p class="appreciation-attachment-caption">' + safeLabel + '</p>' +
        '</div>'
    );
}

function buildAppreciationCardThumbs(attachments) {
    var previewItems = safeArray(attachments).slice(0, 3).map(function (attachment, index) {
        var attachmentType = getAttachmentType(attachment);
        var safeUrl = escapeHtml(attachment.url || '');
        var safeLabel = escapeHtml(attachment.label || ('Attachment ' + (index + 1)));

        if (attachmentType === 'image') {
            return '<img class="appreciation-card-thumb" src="' + safeUrl + '" alt="' + safeLabel + '">';
        }

        return '<div class="appreciation-card-thumb appreciation-card-thumb-doc"><i class="fas fa-file-lines" aria-hidden="true"></i><span>' + safeLabel + '</span></div>';
    }).join('');

    if (!previewItems) return '';

    return '<div class="appreciation-card-media">' + previewItems + '</div>';
}

function buildAppreciationCard(item, itemId, index) {
    var attachments = getAppreciationAttachments(item);
    var attachmentCount = attachments.length;
    var hasAttachment = attachmentCount > 0;

    return (
        '<button type="button" class="appreciation-card appreciation-card-trigger" data-appreciation-id="' + escapeHtml(itemId) + '" aria-label="Open appreciation ' + escapeHtml(item.title || '') + '">' +
        '<span class="appreciation-card-count">0' + (index + 1) + '</span>' +
        '<span class="appreciation-card-badge' + (hasAttachment ? ' is-live' : '') + '">' + (hasAttachment ? 'Attachment Ready' : 'Attachment Pending') + '</span>' +
        '<div class="appreciation-card-meta-row">' +
        '<span class="appreciation-card-date">' + escapeHtml(item.date || '') + '</span>' +
        '<span class="appreciation-card-link">' + (hasAttachment ? String(attachmentCount) + ' Attachment' + (attachmentCount > 1 ? 's' : '') : escapeHtml(item.attachmentLabel || 'View attachment')) + '</span>' +
        '</div>' +
        '<h3 class="appreciation-card-title">' + escapeHtml(item.title || '') + '</h3>' +
        '<p class="appreciation-card-org">' + escapeHtml(item.organization || '') + '</p>' +
        buildAppreciationCardThumbs(attachments) +
        '<p class="appreciation-card-summary">' + escapeHtml(item.summary || '') + '</p>' +
        '<div class="appreciation-card-footer">' +
        '<span class="appreciation-card-footer-note">Tap to open full appreciation preview</span>' +
        '</div>' +
        '</button>'
    );
}

function buildAppreciationSection(items) {
    var appreciations = safeArray(items);

    appreciationPreviewStore = {};

    appreciations.forEach(function (item, index) {
        appreciationPreviewStore['appreciation-' + index] = item;
    });

    if (!appreciations.length) return '';

    return (
        '<div class="appreciation-showcase">' +
        '<aside class="appreciation-spotlight">' +
        '<p class="appreciation-spotlight-kicker">Recognition Snapshot</p>' +
        '<h3 class="appreciation-spotlight-title">Professional appreciation that reflects delivery ownership, stakeholder confidence, and reliable execution.</h3>' +
        '<p class="appreciation-spotlight-copy">This section highlights formal recognition connected to high-quality implementation, on-site collaboration, and business-facing software delivery.</p>' +
        '<div class="appreciation-spotlight-points">' +
        '<div><i class="fas fa-handshake-angle" aria-hidden="true"></i><span>Trusted client-side coordination</span></div>' +
        '<div><i class="fas fa-shield-heart" aria-hidden="true"></i><span>Reliable execution under operational pressure</span></div>' +
        '<div><i class="fas fa-file-signature" aria-hidden="true"></i><span>Attachment-ready appreciation documents</span></div>' +
        '</div>' +
        '</aside>' +
        '<div class="appreciation-grid">' + appreciations.map(function (item, index) {
            return buildAppreciationCard(item, 'appreciation-' + index, index);
        }).join('') + '</div>' +
        '</div>'
    );
}

function buildAppreciationPreviewContent(item) {
    var attachments = getAppreciationAttachments(item);
    var hasAttachment = attachments.length > 0;
    var highlights = safeArray(item && item.highlights).map(function (entry) {
        return '<li>' + escapeHtml(entry) + '</li>';
    }).join('');
    var attachmentPreviews = attachments.map(buildAppreciationAttachmentPreview).join('');
    var attachmentLinks = attachments.map(function (attachment, index) {
        return '<a class="appreciation-modal-link" href="' + escapeHtml(attachment.url || '') + '" target="_blank" rel="noreferrer noopener">Open ' + escapeHtml(attachment.label || ('Attachment ' + (index + 1))) + '</a>';
    }).join('');

    return (
        '<div class="appreciation-modal-shell">' +
        '<div class="appreciation-modal-header">' +
        '<p class="appreciation-modal-kicker">Appreciation Preview</p>' +
        '<h3 id="appreciation-preview-title" class="appreciation-modal-title">' + escapeHtml(item.title || '') + '</h3>' +
        '<p class="appreciation-modal-meta">' + escapeHtml(item.organization || '') + ' | ' + escapeHtml(item.date || '') + '</p>' +
        '<p class="appreciation-modal-summary">' + escapeHtml(item.summary || '') + '</p>' +
        '</div>' +
        '<div class="appreciation-modal-layout">' +
        '<aside class="appreciation-modal-insight">' +
        '<p class="appreciation-modal-quote">' + escapeHtml(item.quote || '') + '</p>' +
        '<ul class="appreciation-modal-list">' + highlights + '</ul>' +
        '</aside>' +
        '<div class="appreciation-modal-stage">' +
        (hasAttachment
            ? '<div class="appreciation-attachment-gallery">' + attachmentPreviews + '</div>'
            : '<div class="appreciation-modal-empty"><i class="fas fa-paperclip" aria-hidden="true"></i><p>No attachment is connected yet. Add your appreciation image or PDF path inside the data object to preview it here.</p></div>') +
        '</div>' +
        '</div>' +
        '<div class="appreciation-modal-footer">' +
        (hasAttachment
            ? attachmentLinks
            : '<p class="appreciation-modal-note">Set one or more attachment paths in the appreciation entry, for example: file:///C:/Users/YourName/Pictures/appreciation1.png</p>') +
        '</div>' +
        '</div>'
    );
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
    setText('contact-phone-link', personal.phone   || '');
    setText('contact-email-link', personal.email   || '');
    setAttr('contact-phone-link', 'href', personal.phone ? 'tel:' + String(personal.phone).replace(/\s+/g, '') : '#');
    setAttr('contact-email-link', 'href', personal.email ? 'mailto:' + personal.email : '#');

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
    setHtml('appreciation-container', buildAppreciationSection(d.appreciations));

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
    _navToggle  = document.getElementById('nav-toggle');
    _backToTop  = document.getElementById('back-to-top');
    _scrollProg = document.getElementById('scroll-progress');

    // Wire back-to-top click
    if (_backToTop) {
        _backToTop.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Set up scroll-reveal animations
    setupMobileNav();
    setupReveal();
    setupTimelineAnimations();
    setupTimelineDetailDialog();
    setupProjectDetailDialog();
    setupCertificatePreviewDialog();
    setupAppreciationPreviewDialog();
    setupContactForm();

    // Apply initial scroll state
    handleScroll();
}

// ── Scroll Handler ───────────────────────────────────────────
var _nav        = null;
var _navToggle  = null;
var _backToTop  = null;
var _scrollProg = null;

function isMobileNavViewport() {
    return window.innerWidth <= 768;
}

function setMobileNavState(isOpen) {
    if (!_nav || !_navToggle) {
        return;
    }

    var shouldOpen = Boolean(isOpen && isMobileNavViewport());

    _nav.classList.toggle('is-menu-open', shouldOpen);
    _navToggle.classList.toggle('is-active', shouldOpen);
    _navToggle.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false');
    _navToggle.setAttribute('aria-label', shouldOpen ? 'Close navigation menu' : 'Open navigation menu');
    document.body.classList.toggle('nav-open', shouldOpen);
}

function closeMobileNav() {
    setMobileNavState(false);
}

function setupMobileNav() {
    if (!_nav || !_navToggle) {
        return;
    }

    _navToggle.addEventListener('click', function () {
        setMobileNavState(!_nav.classList.contains('is-menu-open'));
    });

    document.querySelectorAll('.nav-menu a[href^="#"]').forEach(function (link) {
        link.addEventListener('click', closeMobileNav);
    });

    window.addEventListener('resize', function () {
        if (!isMobileNavViewport()) {
            closeMobileNav();
        }
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeMobileNav();
        }
    });

    document.addEventListener('click', function (event) {
        if (!_nav.classList.contains('is-menu-open')) {
            return;
        }

        if (_nav.contains(event.target)) {
            return;
        }

        closeMobileNav();
    });

    closeMobileNav();
}

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
    setHtml(
        'timeline-detail-subtitle',
        buildCompanyIdentity(data.subtitle || '', 'company-identity-detail-modal', 'company-logo-detail-modal', 'company-identity-name-detail-modal')
    );
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

function ensureProjectImagePreviewModal() {
    var modal = document.getElementById('project-image-preview-modal');
    if (modal) return modal;

    modal = document.createElement('div');
    modal.id = 'project-image-preview-modal';
    modal.className = 'project-image-preview-modal';
    modal.setAttribute('aria-hidden', 'true');
    modal.innerHTML = '' +
        '<div class="project-image-preview-backdrop" data-project-image-close="true"></div>' +
        '<div class="project-image-preview-dialog" role="dialog" aria-modal="true" aria-labelledby="project-image-preview-title">' +
        '<button type="button" class="project-image-preview-close" aria-label="Close image preview" data-project-image-close="true">' +
        '<i class="fas fa-xmark" aria-hidden="true"></i>' +
        '</button>' +
        '<figure class="project-image-preview-figure">' +
        '<img id="project-image-preview-img" class="project-image-preview-img" alt="">' +
        '<figcaption id="project-image-preview-title" class="project-image-preview-caption"></figcaption>' +
        '</figure>' +
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

function openProjectImagePreview(imageUrl, label, trigger) {
    var modal = ensureProjectImagePreviewModal();
    var image = document.getElementById('project-image-preview-img');
    var caption = document.getElementById('project-image-preview-title');

    if (!modal || !image || !imageUrl) return;

    projectImagePreviewLastTrigger = trigger || null;
    image.src = imageUrl;
    image.alt = label || 'Project image preview';
    if (caption) caption.textContent = label || 'Project image preview';

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');

    var closeButton = modal.querySelector('.project-image-preview-close');
    if (closeButton) closeButton.focus();
}

function closeProjectImagePreview() {
    var modal = document.getElementById('project-image-preview-modal');
    var image = document.getElementById('project-image-preview-img');
    var caption = document.getElementById('project-image-preview-title');

    if (!modal) return;

    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');

    if (image) {
        image.removeAttribute('src');
        image.alt = '';
    }

    if (caption) caption.textContent = '';

    if (projectImagePreviewLastTrigger) {
        projectImagePreviewLastTrigger.focus();
        projectImagePreviewLastTrigger = null;
    }
}

function trapProjectImagePreviewFocus(event) {
    var modal = document.getElementById('project-image-preview-modal');
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
    ensureProjectImagePreviewModal();

    document.addEventListener('click', function (event) {
        var trigger = event.target.closest('.project-case-trigger');
        if (trigger) {
            openProjectDetail(trigger.getAttribute('data-project-id'), trigger);
            return;
        }

        var imagePreviewTrigger = event.target.closest('[data-project-image-preview]');
        if (imagePreviewTrigger) {
            event.preventDefault();
            openProjectImagePreview(
                imagePreviewTrigger.getAttribute('data-project-image-preview'),
                imagePreviewTrigger.getAttribute('data-project-image-label'),
                imagePreviewTrigger
            );
            return;
        }

        if (event.target.closest('[data-project-detail-close="true"]')) {
            closeProjectDetail();
            return;
        }

        if (event.target.closest('[data-project-image-close="true"]')) {
            closeProjectImagePreview();
            return;
        }

        var tabButton = event.target.closest('[data-project-tab]');
        if (tabButton) {
            var modal = document.getElementById('project-detail-modal');
            if (!modal) return;

            var tabName = tabButton.getAttribute('data-project-tab');
            var tabs = modal.querySelectorAll('[data-project-tab]');
            var panels = modal.querySelectorAll('[data-project-panel]');

            tabs.forEach(function (tab) {
                var isActive = tab.getAttribute('data-project-tab') === tabName;
                tab.classList.toggle('is-active', isActive);
                tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
            });

            panels.forEach(function (panel) {
                panel.classList.toggle('is-active', panel.getAttribute('data-project-panel') === tabName);
            });
        }
    });

    document.addEventListener('keydown', function (event) {
        trapProjectDetailFocus(event);
        trapProjectImagePreviewFocus(event);

        if (event.key === 'Escape') {
            var imagePreviewModal = document.getElementById('project-image-preview-modal');
            if (imagePreviewModal && imagePreviewModal.classList.contains('is-open')) {
                closeProjectImagePreview();
                return;
            }
            closeProjectDetail();
        }
    });
}

function ensureCertificatePreviewModal() {
    var modal = document.getElementById('certificate-preview-modal');
    if (modal) return modal;

    modal = document.createElement('div');
    modal.id = 'certificate-preview-modal';
    modal.className = 'certificate-preview-modal';
    modal.setAttribute('aria-hidden', 'true');
    modal.innerHTML = '' +
        '<div class="certificate-preview-backdrop" data-certificate-preview-close="true"></div>' +
        '<div class="certificate-preview-dialog" role="dialog" aria-modal="true" aria-labelledby="certificate-preview-title">' +
        '<button type="button" class="certificate-preview-close" aria-label="Close certificate preview" data-certificate-preview-close="true">' +
        '<i class="fas fa-xmark" aria-hidden="true"></i>' +
        '</button>' +
        '<div id="certificate-preview-content"></div>' +
        '</div>';

    document.body.appendChild(modal);
    return modal;
}

function openCertificatePreview(certId, trigger) {
    var modal = ensureCertificatePreviewModal();
    var content = document.getElementById('certificate-preview-content');
    var dialog = modal ? modal.querySelector('.certificate-preview-dialog') : null;
    var cert = certificatePreviewStore[certId];

    if (!modal || !content || !cert) return;

    certificatePreviewLastTrigger = trigger || null;
    content.innerHTML = buildCertificatePreviewContent(cert);
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('has-modal-open');
    if (dialog) dialog.scrollTop = 0;

    var closeButton = modal.querySelector('.certificate-preview-close');
    if (closeButton) closeButton.focus();
}

function closeCertificatePreview() {
    var modal = document.getElementById('certificate-preview-modal');
    if (!modal) return;

    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('has-modal-open');

    if (certificatePreviewLastTrigger) {
        certificatePreviewLastTrigger.focus();
        certificatePreviewLastTrigger = null;
    }
}

function trapCertificatePreviewFocus(event) {
    var modal = document.getElementById('certificate-preview-modal');
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

function setupCertificatePreviewDialog() {
    ensureCertificatePreviewModal();

    document.addEventListener('click', function (event) {
        var trigger = event.target.closest('.cert-card-trigger');
        if (trigger) {
            openCertificatePreview(trigger.getAttribute('data-cert-id'), trigger);
            return;
        }

        if (event.target.closest('[data-certificate-preview-close="true"]')) {
            closeCertificatePreview();
        }
    });

    document.addEventListener('keydown', function (event) {
        trapCertificatePreviewFocus(event);

        if (event.key === 'Escape') {
            closeCertificatePreview();
        }
    });
}

function ensureAppreciationPreviewModal() {
    var modal = document.getElementById('appreciation-preview-modal');
    if (modal) return modal;

    modal = document.createElement('div');
    modal.id = 'appreciation-preview-modal';
    modal.className = 'appreciation-preview-modal';
    modal.setAttribute('aria-hidden', 'true');
    modal.innerHTML = '' +
        '<div class="appreciation-preview-backdrop" data-appreciation-preview-close="true"></div>' +
        '<div class="appreciation-preview-dialog" role="dialog" aria-modal="true" aria-labelledby="appreciation-preview-title">' +
        '<button type="button" class="appreciation-preview-close" aria-label="Close appreciation preview" data-appreciation-preview-close="true">' +
        '<i class="fas fa-xmark" aria-hidden="true"></i>' +
        '</button>' +
        '<div id="appreciation-preview-content"></div>' +
        '</div>';

    document.body.appendChild(modal);
    return modal;
}

function openAppreciationPreview(itemId, trigger) {
    var modal = ensureAppreciationPreviewModal();
    var content = document.getElementById('appreciation-preview-content');
    var dialog = modal ? modal.querySelector('.appreciation-preview-dialog') : null;
    var item = appreciationPreviewStore[itemId];

    if (!modal || !content || !item) return;

    appreciationPreviewLastTrigger = trigger || null;
    content.innerHTML = buildAppreciationPreviewContent(item);
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('has-modal-open');
    if (dialog) dialog.scrollTop = 0;

    var closeButton = modal.querySelector('.appreciation-preview-close');
    if (closeButton) closeButton.focus();
}

function closeAppreciationPreview() {
    var modal = document.getElementById('appreciation-preview-modal');
    if (!modal) return;

    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('has-modal-open');

    if (appreciationPreviewLastTrigger) {
        appreciationPreviewLastTrigger.focus();
        appreciationPreviewLastTrigger = null;
    }
}

function trapAppreciationPreviewFocus(event) {
    var modal = document.getElementById('appreciation-preview-modal');
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

function setupAppreciationPreviewDialog() {
    ensureAppreciationPreviewModal();

    document.addEventListener('click', function (event) {
        var trigger = event.target.closest('.appreciation-card-trigger');
        if (trigger) {
            openAppreciationPreview(trigger.getAttribute('data-appreciation-id'), trigger);
            return;
        }

        if (event.target.closest('[data-appreciation-preview-close="true"]')) {
            closeAppreciationPreview();
        }
    });

    document.addEventListener('keydown', function (event) {
        trapAppreciationPreviewFocus(event);

        if (event.key === 'Escape') {
            closeAppreciationPreview();
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
