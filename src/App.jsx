import React from "react";
import {
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Mail,
  CheckCircle2,
  AlertTriangle,
  FileText,
  BadgeCheck,
  ArrowRight,
  Search,
  Users,
  FlaskConical,
  CalendarCheck,
  TrendingUp,
  Leaf,
  Award
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: ClipboardCheck,
    title: "Food Safety System Development",
    description:
      "Build or strengthen food safety programs to meet regulatory, customer, and audit requirements.",
  },
  {
    icon: Search,
    title: "Internal Audits & Gap Assessments",
    description:
      "Identify gaps, evaluate risk, and create practical corrective action plans to stay audit-ready.",
  },
  {
    icon: ShieldCheck,
    title: "Regulatory Compliance & SQF Support",
    description:
      "SQF Code implementation, documentation, supplier management, CAPA, and audit readiness support.",
  },
  {
    icon: Users,
    title: "Training & Team Development",
    description:
      "Practical, engaging training to build food safety knowledge and strengthen accountability.",
  },
  {
    icon: FlaskConical,
    title: "Allergen & Enrober Validation Support",
    description:
      "Specialized support for allergen control and enrober line validation in confectionery operations.",
  },
];

const packages = [
 {
  title: "Audit Pre-Walk & Risk Review",
  price: "Starting at $750 + travel",
  description:
    "An on-site facility walkthrough designed to identify likely food safety, GMP, allergen, sanitation, documentation, and operational risks before an audit, inspection, or customer visit.",
  includes: [
    "On-site facility walkthrough",
    "GMP and operational observation review",
    "Allergen and sanitation risk observations",
    "Documentation and recordkeeping concerns",
    "Written summary of key findings and recommendations",
    "Follow-up consultation call",
  ],
},
  {
    title: "Chocolate Matrix / Enrober Validation Support",
    price: "Starting at $1,500",
    description:
      "Support for small candy manufacturers needing to validate removal, flush, purge, or sanitation controls for recirculating chocolate systems.",
    includes: [
      "Process and allergen risk review",
      "Validation plan outline",
      "Sampling and documentation recommendations",
      "Audit-ready summary language",
    ],
    featured: true,
  },
  {
    title: "SQF / Documentation Cleanup",
    price: "Starting at $95/hr",
    description:
      "Hands-on support cleaning up policies, forms, corrective actions, verification records, and audit-response documentation.",
    includes: [
      "Policy and form review",
      "CAPA and root cause support",
      "Food safety plan documentation edits",
      "Supplier and sanitation record support",
    ],
  },
];

const credentials = [
  "PCQI — Preventive Controls for Human Food",
  "HACCP — Developing and Implementing HACCP Systems",
  "FSPCA — Intentional Adulteration / Food Defense",
  "SQF Code Practitioner Training",
  "SQF Internal Auditing",
  "SQF CAPA — Corrective Action & Preventive Action",
  "SQF Root Cause Analysis",
  "SQF Risk Assessment",
  "SQF Supplier Management",
  "SQF Food Safety Culture",
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Protect Your Customers",
    description: "Food safety protects what matters most.",
  },
  {
    icon: Award,
    title: "Strengthen Your Brand",
    description: "Build trust with customers, auditors, and retailers.",
  },
  {
    icon: TrendingUp,
    title: "Improve Efficiency",
    description: "Streamline systems and reduce repeat risk.",
  },
  {
    icon: Leaf,
    title: "Sustainable Success",
    description: "Practical solutions for long-term results.",
  },
];

export default function App() {
  return (
    <main>
      <header className="site-header">
        <a className="logo-link" href="#home" aria-label="Food Safety Bytes home">
          <img src="/food-safety-bytes-logo.png" alt="Food Safety Bytes logo" className="site-logo" />
        </a>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#packages">Packages</a>
          <a href="#qualifications">Qualifications</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="hero-copy">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <p className="eyebrow">Consulting. Training. Validation.</p>
            <h1>
              Practical Food Safety.
              <span> Real Results.</span>
            </h1>
            <p className="hero-text">
              Helping food manufacturers build strong, compliant food safety systems that protect people, your brand,
              and your bottom line.
            </p>

            <div className="proof-list">
              <div><ShieldCheck /> Expert Guidance</div>
              <div><BadgeCheck /> Regulatory Compliance</div>
              <div><TrendingUp /> Operational Excellence</div>
            </div>

            <a className="primary-button" href="mailto:danielle@foodsafetybytes.com">
              Let’s make food safety simple <ArrowRight />
            </a>
          </motion.div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="pixel-field">
            {Array.from({ length: 16 }).map((_, index) => (
              <span key={index} />
            ))}
          </div>
          <div className="factory-card">
            <Factory />
            <h2>Food Safety Bytes</h2>
            <p>Audit-ready systems for real production environments.</p>
          </div>
          <div className="swoosh" />
        </div>
      </section>

      <section id="services" className="section services-section">
        <div className="section-heading center">
          <h2>How I Help</h2>
          <p>
            Focused food safety support for small manufacturers that need clear, usable systems — not unnecessary complexity.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <service.icon />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="packages" className="section packages-section">
        <div className="section-heading">
          <p className="eyebrow">Service Packages</p>
          <h2>Fix the actual risk before it becomes a citation.</h2>
          <p>
            Packages can be completed remotely or adapted for on-site support in Ohio and nearby regions.
          </p>
        </div>

        <div className="package-grid">
          {packages.map((pkg) => (
            <article className={`package-card ${pkg.featured ? "featured" : ""}`} key={pkg.title}>
              {pkg.featured && <div className="featured-badge">Most Relevant</div>}
              <h3>{pkg.title}</h3>
              <p className="price">{pkg.price}</p>
              <p>{pkg.description}</p>
              <ul>
                {pkg.includes.map((item) => (
                  <li key={item}><CheckCircle2 /> {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
<section className="about-section">
  <div className="about-image">
    <img src="/danielle-headshot.jpeg" alt="Danielle Dutro" />
  </div>

  <div className="about-copy">
    <p className="eyebrow">About Danielle Dutro</p>

    <h2>
      Food safety consulting grounded in real manufacturing operations.
    </h2>

    <p>
      I’m a food safety and quality professional with experience leading SQF,
      HACCP, GMP, CAPA, environmental monitoring, allergen control, and audit
      readiness programs within active food manufacturing environments.
    </p>

    <p>
      My background includes confectionery, dairy, bakery, meat processing,
      supplier compliance, sanitation oversight, food defense, and regulatory
      readiness support across multiple manufacturing sectors.
    </p>

    <p>
      I created Food Safety Bytes to help small manufacturers build practical,
      sustainable food safety systems that work in real production environments
      — not just on paper.
    </p>
  </div>
</section>
      <section id="qualifications" className="section credentials-section">
        <div className="section-heading center">
          <h2>Certifications & Qualifications</h2>
          <p>
            Formal food safety training backed by real manufacturing floor experience in confectionery, SQF, allergen control,
            supplier compliance, CAPA, traceability, and audit readiness.
          </p>
        </div>

        <div className="credentials-layout">
          <div className="credential-list">
            {credentials.map((credential) => (
              <div className="credential-item" key={credential}>
                <CheckCircle2 />
                <span>{credential}</span>
              </div>
            ))}
          </div>

          <aside className="credential-card">
            <img src="/food-safety-bytes-logo.png" alt="Food Safety Bytes logo" />
            <p>
              I bring real-world experience from the food manufacturing environment and a passion for helping companies
              develop food safety systems that are practical, sustainable, and effective.
            </p>
          </aside>
        </div>
      </section>

      <section id="contact" className="cta-band">
        <div className="calendar-icon"><CalendarCheck /></div>
        <div>
          <h2>Let’s work together to strengthen your food safety program.</h2>
          <p>Send a short summary of your facility, product type, current concern, and timeline.</p>
        </div>
        <a className="secondary-button" href="mailto:danielle@foodsafetybytes.com">
          Schedule a consultation <ArrowRight />
        </a>
      </section>

      <section className="benefits">
        {benefits.map((benefit) => (
          <article key={benefit.title}>
            <benefit.icon />
            <div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          </article>
        ))}
      </section>

      <footer>
        © {new Date().getFullYear()} Food Safety Bytes | Food Safety Consulting
      </footer>
    </main>
  );
}
