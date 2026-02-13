import { BrowserRouter as Router, Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  Search,
  ArrowRight,
  BookOpen,
  Cpu,
  ShieldAlert,
  Globe,
  FileText,
  Award,
  Mail,
  ExternalLink,
  Play,
  Menu,
  X
} from 'lucide-react';

// Import Assets
import heroImg from './assets/images/hero_new.png';
import insuranceImg from './assets/images/insurance_new.png';
import aimlImg from './assets/images/aiml_new.png';
import safetyImg from './assets/images/safety_new.png';
import disasterImg from './assets/images/disaster_new.png';
import aboutImg from './assets/images/about_new.png';
import publicationsImg from './assets/images/publications_new.png';
import projectsImg from './assets/images/projects_new.png';
import newsImg from './assets/images/news_new.png';

// Components
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header" style={{ borderBottom: 'none', background: 'rgba(255,255,255,1)' }}>
      <div className="container nav-container">
        <Link to="/" className="logo">ProCentric <span>Research</span></Link>

        {/* Desktop Nav */}
        <nav className="nav-links">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/research">Research Areas</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/publications">Publications</NavLink>
          <NavLink to="/evidence">Evidence</NavLink>
          <NavLink to="/news">News</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        {/* Mobile Nav Overlay */}
        {isMenuOpen && (
          <div className="mobile-nav-overlay animate-fade" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            background: 'white',
            zIndex: 1000,
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Link to="/" className="logo" onClick={() => setIsMenuOpen(false)}>ProCentric</Link>
              <button onClick={() => setIsMenuOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                <X size={24} />
              </button>
            </div>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.25rem' }}>
              <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</NavLink>
              <NavLink to="/research" onClick={() => setIsMenuOpen(false)}>Research Areas</NavLink>
              <NavLink to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</NavLink>
              <NavLink to="/publications" onClick={() => setIsMenuOpen(false)}>Publications</NavLink>
              <NavLink to="/evidence" onClick={() => setIsMenuOpen(false)}>Evidence</NavLink>
              <NavLink to="/news" onClick={() => setIsMenuOpen(false)}>News</NavLink>
              <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
            </nav>
          </div>
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Search size={20} className="desktop-only" />
          <button
            className="mobile-toggle"
            onClick={() => setIsMenuOpen(true)}
            style={{ padding: '0.5rem' }}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div>
          <h3 className="mb-4">ProCentric Research Division</h3>
          <p style={{ color: '#8d8d8d', fontSize: '0.875rem', maxWidth: '300px' }}>
            Advancing the frontiers of Insurance Analytics, Artificial Intelligence, and Disaster Preparedness for public benefit.
          </p>
        </div>
        <div className="footer-links">
          <h4>Navigation</h4>
          <Link to="/research">Research Areas</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/publications">Publications</Link>
        </div>
        <div className="footer-links">
          <h4>Resources</h4>
          <Link to="/evidence">Recognition</Link>
          <Link to="/news">Updates</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
        <div className="footer-links">
          <h4>Collaborate</h4>
          <Link to="/contact">Contact Us</Link>
          <a href="#">Institutional Login</a>
        </div>
      </div>
      <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #393939', fontSize: '0.75rem', color: '#8d8d8d' }}>
        &copy; {new Date().getFullYear()} ProCentric Research Division. Documentation for Academic Review & Institutional Collaboration.
      </div>
    </div>
  </footer>
);

// Pages
const Home = () => (
  <main>
    <section className="hero-with-bg">
      {/* Background Video (Stock Placeholder) */}
      <video
        autoPlay
        muted
        loop
        className="bg-video"
        poster={heroImg}
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-circuit-board-1510-large.mp4" type="video/mp4" />
      </video>
      <div className="media-overlay"></div>

      <div className="container">
        <div className="hero-grid" style={{ gridTemplateColumns: '1.2fr 0.8fr' }}>
          <div className="hero-text">
            <span className="mono-label animate-slide" style={{ color: 'var(--ibm-blue)', opacity: 0 }}>Advancing Science & Technology</span>
            <h1 className="animate-slide delay-1" style={{ color: 'white', opacity: 0 }}>Intelligence and Resilience for a Changing World.</h1>
            <p className="animate-slide delay-2" style={{ color: 'var(--ibm-gray-20)', opacity: 0 }}>
              We integrate AI/ML with Disaster & Public Safety Analytics to transform Insurance outcomes and community resilience.
            </p>
            <div className="animate-slide delay-3" style={{ display: 'flex', gap: '1rem', marginTop: '2rem', opacity: 0 }}>
              <button className="btn">Our Research</button>
              <button className="btn btn-ghost" style={{ borderColor: 'white', color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Play size={16} /> Watch Overview
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <span className="mono-label animate-slide" style={{ opacity: 0 }}>Core Research</span>
        <h2 className="mb-4 animate-slide delay-1" style={{ opacity: 0 }}>Areas of Investigation</h2>
        <div className="section-grid">
          {[
            { title: 'Insurance Intelligence', icon: <BookOpen />, desc: 'Optimizing risk assessment through machine learning.', image: insuranceImg },
            { title: 'AI/ML Engineering', icon: <Cpu />, desc: 'Translating complex neural architectures into scalable systems.', image: aimlImg },
            { title: 'Public Safety Analytics', icon: <ShieldAlert />, desc: 'Data-driven strategies for disaster mitigation.', image: safetyImg },
            { title: 'Disaster Preparedness', icon: <Globe />, desc: 'Systemic research into climate impact.', image: disasterImg }
          ].map((area, i) => (
            <Link to="/research" key={i} className={`research-card animate-slide delay-${i + 1}`} style={{ padding: 0, overflow: 'hidden', opacity: 0 }}>
              <img src={area.image} alt={area.title} className="card-image" />
              <div style={{ padding: '1.5rem' }}>
                <div style={{ color: 'var(--ibm-blue)', marginBottom: '1rem' }}>{area.icon}</div>
                <h3>{area.title}</h3>
                <p>{area.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div className="animate-slide" style={{ opacity: 0 }}>
            <span className="mono-label">Mission</span>
            <h2>Transparency and Public Benefit</h2>
            <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
              Our work is grounded in the principle that research should serve the public interest. We emphasize open documentation,
              reproducible methodologies, and ethical AI implementation.
            </p>
            <Link to="/about" className="btn">Our Methodology</Link>
          </div>
          <div className="animate-fade delay-2" style={{ position: 'relative', height: '500px', borderRadius: '4px', overflow: 'hidden', opacity: 0 }}>
            <img src={heroImg} alt="Mission" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div className="animate-slide delay-3" style={{ position: 'absolute', bottom: '2rem', left: '2rem', right: '2rem', padding: '1.5rem', background: 'white', opacity: 0 }}>
              <span className="mono-label">Recent Publication</span>
              <h3 style={{ fontSize: '1rem' }}>Neural Networks in Dynamic Risk Modeling</h3>
              <Link to="/publications" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--ibm-blue)', textDecoration: 'none', fontSize: '0.875rem' }}>
                Read the paper <ExternalLink size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
);

const About = () => (
  <div style={{ background: 'var(--bg-primary)' }}>
    <div className="hero-about container">
      <span className="mono-label-ibm animate-fade" style={{ opacity: 0 }}>Discovering what's next</span>
      <div className="reveal-text">
        <h1 style={{ marginBottom: 0 }}>
          <span>Research at ProCentric</span>
        </h1>
      </div>
    </div>

    <div className="container" style={{ paddingBottom: '8rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '6rem', alignItems: 'start' }}>
        <div>
          <p className="animate-slide delay-1" style={{ fontSize: '1.5rem', lineHeight: '1.4', marginBottom: '4rem', opacity: 0 }}>
            We are an interdisciplinary team dedicated to solving high-stakes challenges at the intersection of information technology and public safety.
          </p>

          <div className="animate-slide delay-2" style={{ maxWidth: '800px', opacity: 0 }}>
            <h3 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Our Core Pillars</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              <div>
                <span className="mono-label" style={{ marginBottom: '0.5rem' }}>01</span>
                <h4>Academic Rigor</h4>
                <p style={{ fontSize: '1.125rem' }}>We maintain strictly credible methodologies suitable for institutional review and international academic standards.</p>
              </div>
              <div>
                <span className="mono-label" style={{ marginBottom: '0.5rem' }}>02</span>
                <h4>Practical Innovation</h4>
                <p style={{ fontSize: '1.125rem' }}>Our research isn't theoretical—it's designed for deployment in real-world disaster management and insurance risk systems.</p>
              </div>
              <div>
                <span className="mono-label" style={{ marginBottom: '0.5rem' }}>03</span>
                <h4>Public Benefit</h4>
                <p style={{ fontSize: '1.125rem' }}>Every project is evaluated for its potential to improve safety, transparency, and equity for the general public.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="img-reveal-container animate-fade delay-2" style={{ opacity: 0 }}>
          <img
            src={aboutImg}
            alt="About Research"
            style={{ width: '100%', minHeight: '600px', objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  </div>
);

const Publications = () => (
  <div className="container section">
    <span className="mono-label animate-slide" style={{ opacity: 0 }}>Scholarly Output</span>
    <h1 className="animate-slide delay-1" style={{ opacity: 0 }}>Publications & Papers</h1>
    <div style={{ borderTop: '1px solid var(--ibm-gray-20)', marginTop: '2rem' }}>
      {[
        { year: '2024', title: 'Machine Learning Architectures for Catastrophic Loss Prediction', journal: 'Global Risk Review', authors: 'Division Staff' },
        { year: '2023', title: 'Ethical Frameworks for AI in Emergency Services', journal: 'Computing for Society', authors: 'Division Staff' },
        { year: '2023', title: 'Data Synthesis in Multi-Hazard Disaster Environments', journal: 'International Safety Journal', authors: 'Division Staff' }
      ].map((pub, i) => (
        <div key={i} className={`animate-slide delay-${i + 1}`} style={{ padding: '2rem 0', borderBottom: '1px solid var(--ibm-gray-20)', display: 'grid', gridTemplateColumns: '80px 1fr 200px', opacity: 0 }}>
          <div className="mono-label">{pub.year}</div>
          <div>
            <h3 style={{ fontSize: '1.25rem' }}>{pub.title}</h3>
            <p style={{ color: 'var(--text-secondary)' }}>{pub.authors}</p>
          </div>
          <div style={{ textAlign: 'right', fontStyle: 'italic', fontSize: '0.875rem' }}>{pub.journal}</div>
        </div>
      ))}
    </div>
  </div>
);

const Evidence = () => (
  <div className="container section">
    <span className="mono-label animate-slide" style={{ opacity: 0 }}>Recognition</span>
    <h1 className="animate-slide delay-1" style={{ opacity: 0 }}>Evidence of Excellence</h1>
    <p className="mb-4 animate-slide delay-2" style={{ opacity: 0 }}>Documenting institutional impact, citations, and professional recognition for EB2-NIW and academic review.</p>
    <div className="section-grid">
      {[
        { title: 'Institutional Collaborations', icon: <FileText />, desc: 'Documentation of partnerships with leading universities and safety organizations.' },
        { title: 'Peer Recognition', icon: <Award />, desc: 'Reviewer roles, board memberships, and scholarly impact metrics.' },
        { title: 'Public Citations', icon: <ExternalLink />, desc: 'Mentions and implementation of research in public policy documents.' }
      ].map((item, i) => (
        <div key={i} className={`research-card animate-slide delay-${i + 2}`} style={{ opacity: 0 }}>
          <div style={{ color: 'var(--ibm-blue)', marginBottom: '1rem' }}>{item.icon}</div>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

const ResearchAreas = () => (
  <div className="container section">
    <span className="mono-label animate-slide" style={{ opacity: 0 }}>Areas of Investigation</span>
    <h1 className="animate-slide delay-1" style={{ opacity: 0 }}>Research Areas</h1>
    <div className="section-grid">
      {[
        { title: 'Insurance Intelligence', desc: 'Predictive modeling for catastrophic loss and risk assessment.', image: insuranceImg },
        { title: 'AI/ML Engineering', desc: 'Advancing neural architectures for complex data environments.', image: aimlImg },
        { title: 'Public Safety Analytics', desc: 'Smart city initiatives and emergency response optimization.', image: safetyImg },
        { title: 'Disaster Preparedness', desc: 'Climate resilience and flood mitigation research.', image: disasterImg }
      ].map((area, i) => (
        <div key={i} className={`research-card animate-slide delay-${i + 2}`} style={{ opacity: 0 }}>
          <img src={area.image} alt={area.title} className="card-image" />
          <div style={{ padding: '1.5rem' }}>
            <h3>{area.title}</h3>
            <p>{area.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Projects = () => (
  <div className="container section">
    <span className="mono-label animate-slide" style={{ opacity: 0 }}>Ongoing Initiatives</span>
    <h1 className="animate-slide delay-1" style={{ opacity: 0 }}>Current Research Projects</h1>
    <div style={{ display: 'grid', gap: '2rem' }}>
      {[
        { title: 'Project Resilio', status: 'Active', desc: 'Developing AI-driven flood prediction models for urban areas.' },
        { title: 'NeuralRisk', status: 'Phase 2', desc: 'Next-generation machine learning for parametric insurance underwriting.' },
        { title: 'SafetyNet AI', status: 'Deployment', desc: 'Real-time emergency responder coordination using graph neural networks.' }
      ].map((project, i) => (
        <div key={i} className={`animate-slide delay-${i + 2}`} style={{ padding: '2rem', border: '1px solid var(--ibm-gray-20)', borderRadius: '4px', opacity: 0 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3>{project.title}</h3>
            <span className="mono-label" style={{ color: 'var(--ibm-blue)' }}>{project.status}</span>
          </div>
          <p>{project.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

const News = () => (
  <div className="container section">
    <span className="mono-label animate-slide" style={{ opacity: 0 }}>Updates</span>
    <h1 className="animate-slide delay-1" style={{ opacity: 0 }}>Division News</h1>
    <div style={{ borderTop: '1px solid var(--ibm-gray-20)' }}>
      {[
        { date: 'Feb 12, 2024', title: 'New Publication in Global Risk Review', category: 'Publication' },
        { date: 'Jan 28, 2024', title: 'Collaboration Agreement Signed with City Safety Board', category: 'Partnership' },
        { date: 'Jan 15, 2024', title: 'Research Grant Awarded for Climate Resilience Study', category: 'Award' }
      ].map((item, i) => (
        <div key={i} className={`animate-slide delay-${i + 2}`} style={{ padding: '1.5rem 0', borderBottom: '1px solid var(--ibm-gray-20)', display: 'grid', gridTemplateColumns: '150px 1fr 150px', opacity: 0 }}>
          <div className="mono-label">{item.date}</div>
          <h3>{item.title}</h3>
          <div style={{ textAlign: 'right', color: 'var(--ibm-blue)' }}>{item.category}</div>
        </div>
      ))}
    </div>
  </div>
);

const Contact = () => (
  <div className="container section">
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
      <div className="animate-slide" style={{ opacity: 0 }}>
        <span className="mono-label">Contact</span>
        <h1>Collaborate with Us</h1>
        <p className="mb-4">We are open to institutional collaborations, academic inquiries, and data-sharing partnerships.</p>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Mail color="var(--ibm-blue)" />
          <span>research@procentric.edu</span>
        </div>
      </div>
      <div className="animate-fade delay-2" style={{ padding: '2rem', border: '1px solid var(--ibm-gray-20)', opacity: 0 }}>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input type="text" placeholder="Full Name" style={{ padding: '0.75rem', border: '1px solid var(--ibm-gray-20)' }} />
          <input type="email" placeholder="Institutional Email" style={{ padding: '0.75rem', border: '1px solid var(--ibm-gray-20)' }} />
          <select style={{ padding: '0.75rem', border: '1px solid var(--ibm-gray-20)' }}>
            <option>Research Collaboration</option>
            <option>Publication Inquiry</option>
            <option>Other</option>
          </select>
          <textarea placeholder="Brief Inquiry Description" style={{ padding: '0.75rem', border: '1px solid var(--ibm-gray-20)', minHeight: '150px' }}></textarea>
          <button className="btn">Send Inquiry</button>
        </form>
      </div>
    </div>
  </div>
);

// Main App
function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/evidence" element={<Evidence />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/research" element={<ResearchAreas />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/news" element={<News />} />
          <Route path="/privacy" element={<div>Privacy Policy</div>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
