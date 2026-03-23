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
        image:    'https://ui-avatars.com/api/?name=Harish+Nishad&size=200&background=0c831f&color=fff&bold=true&format=svg',
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
            name:  'CNG Sales Management System',
            type:  'Full-Stack Web Application',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80',
            highlights: [
                'Full-stack platform managing nationwide CNG operations across 10+ modules.',
                'Real-time reporting with PDF/Excel export, lazy loading and API caching.'
            ]
        },
        {
            name:  'GAILGAS Intranet',
            type:  'Internal Portal',
            image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
            highlights: [
                'Modular Angular intranet with 25+ sub-applications for employee workflows.',
                'Secure auth, responsive dashboards, and real-time backend integration.'
            ]
        },
        {
            name:  'Finhaat – Financial Services',
            type:  'Web Application',
            image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80',
            highlights: [
                'Claim workflows, dashboards, and high-volume Excel validation pipelines.',
                'Cron jobs and Redis caching improved API responsiveness by 45%.'
            ]
        },
        {
            name:  'CR360 Survey Platform',
            type:  'Employee Feedback System',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
            highlights: [
                '360-degree feedback, client/staff surveys, EHS/CSR reporting modules.',
                'Role-based dashboards and real-time analytics.'
            ]
        },
        {
            name:  'Aware™ – Supply Chain',
            type:  'Traceability Web Platform',
            image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
            highlights: [
                'Tamper-proof material verification and real-time tracking.',
                'Automated Digital Product Passport creation, improving transparency by 50%.'
            ]
        },
        {
            name:  'ClojBug – Test Management',
            type:  'QA Web Application',
            image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
            highlights: [
                'Scalable test-case management with 30+ REST APIs.',
                'Increased QA efficiency by 75% and reduced debugging time.'
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

/**
 * Builds a single project portfolio card.
 * @param {{ name: string, type: string, image: string, highlights: string[] }} project
 * @returns {string}
 */
function buildProjectCard(project) {
    var bullets = safeArray(project.highlights)
        .map(function (line) { return '<li>' + escapeHtml(line) + '</li>'; })
        .join('');

    return (
        '<article class="project-card">' +
        '<div class="project-media">' +
        '<img src="' + escapeHtml(project.image) + '" alt="' + escapeHtml(project.name) + '" loading="lazy">' +
        '</div>' +
        '<div class="project-card-body">' +
        '<span class="project-type">' + escapeHtml(project.type) + '</span>' +
        '<h4 class="project-title">' + escapeHtml(project.name) + '</h4>' +
        '<ul class="project-points">' + bullets + '</ul>' +
        '</div>' +
        '</article>'
    );
}

/**
 * Builds all project portfolio cards.
 * @param {Array} items
 * @returns {string}
 */
function buildProjects(items) {
    return safeArray(items).map(buildProjectCard).join('');
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
