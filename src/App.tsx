import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  FolderKanban,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from 'lucide-react'
import './App.css'

type TimelineItem = {
  period: string
  title: string
  org: string
  location: string
  summary: string
  bullets: string[]
}

type Project = {
  title: string
  year: string
  description: string
  stack: string[]
  link: string
}

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

const experience: TimelineItem[] = [
  {
    period: 'Feb 2025 - Present',
    title: 'Senior Software Engineer',
    org: 'Turing, Core R&D Team',
    location: 'Remote',
    summary:
      'Building multi-tenant AI infrastructure across agent orchestration, LLM evaluation, reinforcement learning training, and RAG systems under enterprise-grade SLAs.',
    bullets: [
      'Led delivery of AI platforms spanning 5+ services with full lifecycle ownership.',
      'Advanced auto-generation data pipelines for Terminal Bench and MLE Bench with end-to-end verifier alignment and context-rot reduced below 5%.',
      'Scaled infrastructure from 10k+ rps on a single VM to 100k+ rps across 10 nodes, with a path to 1M+ rps through sharded routing and stateless gRPC workers.',
    ],
  },
  {
    period: 'Oct 2024 - Dec 2025',
    title: 'Tech Lead',
    org: 'Paradigm AI',
    location: 'Remote',
    summary:
      'Led a 15-engineer team building AI products for legal and industrial workflows, spanning RAG, OCR, summarization, and multilingual speech systems.',
    bullets: [
      'Built a RAG-based AI assistant for legal professionals with FastAPI and React.',
      'Engineered an AWS-hosted summarization platform and reduced inference time by 50% via domain-tuned transformer workflows.',
      'Delivered OCR and reasoning tooling that converted single-line diagrams into bills of materials, plus a multilingual video UI for transcription.',
    ],
  },
  {
    period: 'Apr 2024 - Oct 2024',
    title: 'Software Engineer',
    org: 'Avigna AI',
    location: 'Remote',
    summary:
      'Worked on production AI forecasting systems, secure API design, and horizontally scalable infrastructure for real-time simulation workloads.',
    bullets: [
      'Delivered a production-ready MVP within 2 months across client-facing engagements.',
      'Designed a real-time photovoltaic simulation and forecasting platform.',
      'Improved prediction accuracy by 40%+ and scaled infrastructure across 10 nodes with Cognito, OAuth2, rate limiting, and autoscaling.',
    ],
  },
  {
    period: 'Dec 2021 - Jun 2022',
    title: 'Software Engineer',
    org: 'Sentieo',
    location: 'New Delhi, India',
    summary:
      'Built ETL and synchronization workflows for financial data products, with supporting integration work across APIs and documentation systems.',
    bullets: [
      'Developed ETL microservices for OneNote, Google, and Outlook calendar synchronization.',
      'Enabled real-time data updates using MQTT and React-based interfaces.',
      'Contributed to Mintlify documentation UI integration for internal implementation teams.',
    ],
  },
  {
    period: 'Jun 2021 - Dec 2021',
    title: 'Founding Engineer',
    org: 'Houzen Holdings',
    location: 'London / Remote',
    summary:
      'Built ML services, scraping pipelines, data-heavy React interfaces, and video transcription workflows for real estate and media use cases.',
    bullets: [
      'Hardened notification systems with retries, locking, parallel queues, and concurrency-safe operations.',
      'Built property scraping and computer vision pipelines that fed European pricing models.',
      'Developed React + Redux frontends handling 10k+ property records, analytics dashboards, and multilingual transcription tooling deployed via ECS and GitHub Actions.',
    ],
  },
  {
    period: 'Jul 2019 - May 2021',
    title: 'Software Engineer',
    org: 'Intel Technology',
    location: 'Bengaluru, India',
    summary:
      'Worked close to systems software, diagnostics, testing automation, and performance optimization across power and validation tooling.',
    bullets: [
      'Led migration of Modern Standby team workflows from C# to Python 3 and integrated automated validation into deployment workflows.',
      'Built C-based diagnostic tools and shell/Python utilities for sleepstudy reporting and ETW trace analysis.',
      'Resolved performance bottlenecks in internal C++ modules through data restructuring, compile-time optimization, and allocator improvements.',
    ],
  },
]

const education: TimelineItem[] = [
  {
    period: 'Integrated Dual Degree',
    title: 'EEE (B.Tech + M.Tech)',
    org: 'Indian Institute of Technology (BHU)',
    location: 'Varanasi, India',
    summary:
      'Graduated with a GPA of 8.06/10. Strong competitive programming background with 700+ LeetCode problems solved and a 2200+ Codeforces rating.',
    bullets: [
      'Top 1/2 percentile across 1.5 M applicants in JEE Advanced 2014 and AIR 4.5K in JEE Main.',
      'Qualified NTSE, IMO, and KVPY.',
    ],
  },
]

const projects: Project[] = [
  {
    title: 'wcGo',
    year: '2025',
    description:
      'A concurrent Go implementation of the Unix wc utility with chunked streaming I/O, UTF-8 correctness, and POSIX-compatible behavior.',
    stack: ['Go', 'Concurrency', 'CLI', 'Systems'],
    link: 'https://github.com/brickster241/wc-Go',
  },
  {
    title: 'JSON Lexer + Parser from Scratch',
    year: '2025',
    description:
      'A hand-built lexer and recursive descent parser in Python for validating and parsing JSON into native data structures.',
    stack: ['Python', 'Parsing', 'Compilers', 'Testing'],
    link: 'https://github.com/brickster241/JSON-Lexer-Parser-From-Scratch',
  },
  {
    title: 'Baba Is You Clone',
    year: '2024',
    description:
      'A puzzle game clone centered on mutable game rules, state-driven architecture, and runtime rule recomposition.',
    stack: ['Unity', 'C#', 'Game Systems', 'State Machines'],
    link: 'https://github.com/brickster241/Baba-Is-You',
  },
  {
    title: 'Chain Reaction',
    year: '2023',
    description:
      'A multiplayer strategy game clone built around grid systems, object pooling, and chain-reaction simulation.',
    stack: ['Unity', 'C#', 'Gameplay Architecture', 'BFS'],
    link: 'https://github.com/brickster241/Chain-Reaction',
  },
]

const skills = [
  'Go',
  'Python',
  'TypeScript',
  'React',
  'Vite',
  'FastAPI',
  'AWS',
  'gRPC',
  'RAG',
  'LLM Evaluation',
  'Reinforcement Learning',
  'Data Engineering',
  'C++',
  'C#',
  'MQTT',
  'Redux',
  'Tailwind CSS',
  'Systems Programming',
  'Backend Engineering',
  'Distributed Systems',
  'Full-Stack Development',
  'Developer Tooling',
]

const highlights = [
  {
    label: 'Focus',
    value: 'AI systems, data engineering, and full-stack development',
  },
  {
    label: 'Experience',
    value: '5+ years across Big Tech, product, and startup environments',
  },
  {
    label: 'Scale',
    value: '100K+ concurrent users and multi-service AI platforms',
  },
]

function TimelineCard({ item }: { item: TimelineItem }) {
  return (
    <article className="timeline-card">
      <div className="timeline-meta">
        <span>{item.period}</span>
        <span>{item.location}</span>
      </div>
      <h3>{item.title}</h3>
      <p className="timeline-org">{item.org}</p>
      <p className="timeline-summary">{item.summary}</p>
      <ul className="timeline-list">
        {item.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </article>
  )
}

function App() {
  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="topbar">
        <a className="brand" href="#hero">
          <span className="brand-mark">KR</span>
          <span className="brand-copy">
            <strong>Kartik Rathee</strong>
            <span>kartikrathee.com</span>
          </span>
        </a>

        <nav className="nav">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero-section" id="hero">
          <div className="hero-copy">
            <p className="eyebrow">
              <Sparkles size={16} />
              Personal Website Concept
            </p>
            <h1>
              Kartik Rathee
              <span>Software engineer building AI platforms, data systems, and scalable products.</span>
            </h1>
            <p className="hero-text">
              Software engineer with 5+ years of experience across AI, software
              development, data engineering, and full-stack systems. Worked in Big
              Tech, product companies, and enterprise startups, scaling systems for
              100K concurrent users and leading teams of up to 20 developers.
            </p>

            <div className="hero-actions">
              <a className="primary-link" href="#projects">
                View Projects
                <ArrowRight size={16} />
              </a>
              <a className="secondary-link" href="mailto:kartik.rathee.eee14@itbhu.ac.in">
                <Mail size={16} />
                kartik.rathee.eee14@itbhu.ac.in
              </a>
            </div>
          </div>

          <aside className="hero-panel">
            <div className="panel-grid">
              {highlights.map((item) => (
                <div key={item.label} className="metric-card">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>

            <div className="hero-note">
              <p>Current links</p>
              <div className="hero-links">
                <a href="https://github.com/brickster241" target="_blank" rel="noreferrer">
                  <Github size={16} />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/kartik-r-2a12a9134"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
                <a href="mailto:kartik.rathee.eee14@itbhu.ac.in">
                  <Mail size={16} />
                  Email
                </a>
              </div>
            </div>
          </aside>
        </section>

        <section className="section" id="about">
          <div className="section-heading">
            <span>About</span>
            <h2>Built to feel personal, not generic.</h2>
          </div>
          <div className="about-grid">
            <article className="glass-card">
              <h3>Profile</h3>
              <p>
                This version now uses your resume-backed experience across Turing,
                Paradigm AI, Avigna AI, Sentieo, Houzen Holdings, TreeVed, and Intel,
                while keeping the portfolio structure close to the reference site you
                liked.
              </p>
            </article>
            <article className="glass-card">
              <h3>Career Narrative</h3>
              <p>
                The site now leans into your strongest story: engineering systems that
                combine AI infrastructure, scalable backend design, product delivery,
                and practical execution across startups and research-heavy teams.
              </p>
            </article>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <span>
              <FolderKanban size={16} />
              Projects
            </span>
            <h2>Selected work pulled from your local repos.</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <div className="project-topline">
                  <span>{project.year}</span>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <Github size={16} />
                  </a>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="chip-row">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-heading">
            <span>
              <BriefcaseBusiness size={16} />
              Experience
            </span>
            <h2>Resume-backed roles across AI, product, and systems teams.</h2>
          </div>
          <div className="timeline-grid">
            {experience.map((item) => (
              <TimelineCard key={`${item.period}-${item.title}`} item={item} />
            ))}
          </div>
        </section>

        <section className="section" id="education">
          <div className="section-heading">
            <span>
              <GraduationCap size={16} />
              Education
            </span>
            <h2>Academic foundation and competitive programming profile.</h2>
          </div>
          <div className="timeline-grid">
            {education.map((item) => (
              <TimelineCard key={`${item.period}-${item.title}`} item={item} />
            ))}
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading">
            <span>
              <Code2 size={16} />
              Skills
            </span>
            <h2>A focused stack across AI platforms, backend systems, and frontend delivery.</h2>
          </div>
          <div className="skills-card">
            {skills.map((skill) => (
              <span key={skill} className="skill-pill">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-card">
            <div>
              <p className="contact-kicker">Contact</p>
              <h2>Ready for `kartikrathee.com`.</h2>
              <p className="contact-copy">
                The site structure, styling, projects, experience, and education are
                now grounded in your resume. The remaining improvements are mostly
                polish: LinkedIn URL, domain deployment, and any copy refinements you want.
              </p>
            </div>
            <div className="contact-links">
              <a href="mailto:kartik.rathee.eee14@itbhu.ac.in">
                <Mail size={16} />
                kartik.rathee.eee14@itbhu.ac.in
              </a>
              <a
                href="https://www.linkedin.com/in/kartik-r-2a12a9134"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={16} />
                linkedin.com/in/kartik-r-2a12a9134
              </a>
              <a href="https://github.com/brickster241" target="_blank" rel="noreferrer">
                <Github size={16} />
                github.com/brickster241
              </a>
              <span>
                <MapPin size={16} />
                India
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
