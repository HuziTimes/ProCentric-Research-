import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import DataTerrainBackground from '../components/DataTerrainBackground';
import {
    FileText, Database, Cpu, Download, BookOpen,
    CheckCircle2, AlertTriangle, ArrowRight, Quote, Shield, Activity, Map, BarChart
} from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import DataAttribution from '../components/DataAttribution';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const staggerContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const Publications = () => {
    const [searchParams] = useSearchParams();
    const q = searchParams.get('search') || searchParams.get('q') || '';
    const [publications, setPublications] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPublications = async () => {
            try {
                setLoading(true);
                const url = q.trim()
                    ? `${API_BASE}/api/publications/?search=${encodeURIComponent(q.trim())}`
                    : `${API_BASE}/api/publications/`;
                const res = await fetch(url);
                if (!res.ok) throw new Error('Failed to load publications');
                const data = await res.json();
                const results = data.results ?? data;
                const fetchedPubs = Array.isArray(results) ? results : [];
                
                // Add a mock "Made" publication for demonstration
                const mockPub = {
                    id: 'featured-2026',
                    title: 'Natural Disaster Risk Assessment and Insurance Loss Prediction in the United States',
                    authors: 'Procentric Research Team',
                    year: '2026',
                    venue: 'Technical Report',
                    abstract: 'This study explores the application of predictive analytics in assessing natural disaster risks across the United States...',
                    url: '/papers/disaster-risk-assessment-2026.pdf'
                };
                
                setPublications([mockPub, ...fetchedPubs]);
            } catch (err) {
                console.warn(err);
                // Fallback to mock data if API fails
                setPublications([{
                    id: 'featured-2026',
                    title: 'Natural Disaster Risk Assessment and Insurance Loss Prediction in the United States',
                    authors: 'Procentric Research Team',
                    year: '2026',
                    venue: 'Technical Report',
                    abstract: 'This study explores the application of predictive analytics in assessing natural disaster risks across the United States...',
                    url: '/papers/disaster-risk-assessment-2026.pdf'
                }]);
            } finally {
                setLoading(false);
            }
        };
        fetchPublications();
    }, [q]);

    return (
        <div style={{ backgroundColor: '#f8fafc', paddingBottom: '4rem' }}>
            {/* 1. HERO SECTION */}
            <div style={{
                background: '#020617',
                color: 'white',
                padding: '7rem 0 5rem',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <DataTerrainBackground />
                <div style={{ position: 'absolute', inset: 0, opacity: 0.05, backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.8) 0%, transparent 40%)', zIndex: 1 }} />
                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                            padding: '0.4rem 1rem', borderRadius: '30px',
                            backgroundColor: 'rgba(248, 113, 113, 0.1)', color: '#f87171',
                            fontWeight: 600, fontSize: '0.9rem', marginBottom: '1.5rem',
                            border: '1px solid rgba(248, 113, 113, 0.2)', textTransform: 'uppercase', letterSpacing: '1px'
                        }}>
                            <BookOpen size={16} /> Scholarly Output
                        </span>
                        <h1 style={{ color: '#94a3b8', fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
                            Publications & <span style={{ color: '#94a3b8' }}>Research Papers</span>
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: '#94a3b8', maxWidth: '800px', lineHeight: 1.6 }}>
                            A collection of research work, technical reports, and analytical studies on natural disaster risk and insurance modeling in the United States.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="container" style={{ marginTop: '-3rem', position: 'relative', zIndex: 10 }}>
                <motion.div variants={staggerContainer} initial="hidden" animate="show">

                    {/* 2. MAIN FEATURED PAPER */}
                    <motion.div 
                        variants={fadeUp} 
                        style={{ 
                            background: 'white', 
                            borderRadius: '32px', 
                            padding: '4rem', 
                            boxShadow: '0 40px 100px -20px rgba(0, 0, 0, 0.08)', 
                            border: '1px solid #f1f5f9', 
                            marginBottom: '6rem',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Decorative background element */}
                        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(37, 99, 235, 0.03) 0%, transparent 70%)', borderRadius: '50%' }} />

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'flex-start' }}>
                            <div style={{ flex: '1 1 500px' }}>
                                <div style={{ 
                                    display: 'inline-flex', 
                                    alignItems: 'center', 
                                    gap: '0.6rem', 
                                    marginBottom: '2rem', 
                                    color: '#2563eb', 
                                    fontWeight: 700, 
                                    fontSize: '0.85rem', 
                                    textTransform: 'uppercase', 
                                    letterSpacing: '2px',
                                    backgroundColor: 'rgba(37, 99, 235, 0.05)',
                                    padding: '0.5rem 1.2rem',
                                    borderRadius: '100px'
                                }}>
                                    <FileText size={18} /> Featured Research Paper
                                </div>
                                
                                <h2 style={{ 
                                    fontSize: 'clamp(2rem, 5vw, 3rem)', 
                                    fontWeight: 800, 
                                    color: '#0f172a', 
                                    marginBottom: '2rem', 
                                    lineHeight: 1.1,
                                    letterSpacing: '-0.03em'
                                }}>
                                    Natural Disaster Risk Assessment and <span style={{ color: '#2563eb' }}>Insurance Loss Prediction</span> in the United States
                                </h2>

                                <p style={{ 
                                    fontSize: '1.25rem', 
                                    color: '#475569', 
                                    lineHeight: 1.8, 
                                    marginBottom: '3rem',
                                    fontWeight: 400
                                }}>
                                    This study presents a multi-layered predictive framework focused on quantifying catastrophic risk vectors and their downstream financial impacts on regional insurance liquidity pools.
                                </p>

                                <div style={{ 
                                    display: 'grid', 
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', 
                                    gap: '2.5rem', 
                                    marginBottom: '3.5rem',
                                    borderTop: '1px solid #f1f5f9',
                                    paddingTop: '2.5rem'
                                }}>
                                    {[
                                        { label: 'Publication Year', val: '2026' },
                                        { label: 'Primary Author', val: 'Procentric Team' },
                                        { label: 'Classification', val: 'Technical Report' }
                                    ].map((item, i) => (
                                        <div key={i}>
                                            <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>{item.label}</div>
                                            <div style={{ fontSize: '1.1rem', color: '#0f172a', fontWeight: 700 }}>{item.val}</div>
                                        </div>
                                    ))}
                                </div>

                                <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap' }}>
                                    <Link to="/publications/featured-2026" style={{ textDecoration: 'none' }}>
                                        <button style={{ 
                                            background: '#0f172a', 
                                            color: 'white', 
                                            border: 'none', 
                                            padding: '1.2rem 2.4rem', 
                                            borderRadius: '16px', 
                                            fontWeight: 600, 
                                            fontSize: '1.1rem', 
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            gap: '0.8rem', 
                                            cursor: 'pointer', 
                                            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                                            boxShadow: '0 10px 20px -10px rgba(15, 23, 42, 0.3)'
                                        }}>
                                            Read Full Thesis <ArrowRight size={20} />
                                        </button>
                                    </Link>
                                    <a href="/papers/disaster-risk-assessment-2026.pdf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                        <button style={{ 
                                            background: 'white', 
                                            color: '#0f172a', 
                                            border: '1px solid #e2e8f0', 
                                            padding: '1.2rem 2.4rem', 
                                            borderRadius: '16px', 
                                            fontWeight: 600, 
                                            fontSize: '1.1rem', 
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            gap: '0.8rem', 
                                            cursor: 'pointer', 
                                            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                                        }}>
                                            <Download size={20} /> Archive PDF
                                        </button>
                                    </a>
                                </div>
                            </div>
                            
                            {/* Visual Asset for the Featured Paper */}
                            <div style={{ 
                                flex: '1 1 300px', 
                                display: 'flex', 
                                justifyContent: 'center', 
                                alignItems: 'center',
                                background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                                borderRadius: '24px',
                                minHeight: '400px',
                                border: '1px solid #f1f5f9',
                                position: 'relative'
                            }}>
                                <div style={{ 
                                    width: '180px', 
                                    height: '240px', 
                                    background: 'white', 
                                    boxShadow: '0 30px 60px -15px rgba(0,0,0,0.15)',
                                    borderRadius: '8px',
                                    border: '1px solid #e2e8f0',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    padding: '1.5rem',
                                    position: 'relative',
                                    zIndex: 2,
                                    transform: 'rotate(-4deg)'
                                }}>
                                    <div style={{ width: '40px', height: '4px', background: '#2563eb', marginBottom: '1rem', borderRadius: '2px' }} />
                                    <div style={{ fontSize: '0.6rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: '#94a3b8', marginBottom: '0.5rem' }}>Technical Pub 2026</div>
                                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a', lineHeight: 1.3, marginBottom: '2rem' }}>Natural Disaster Risk Assessment Models</div>
                                    <div style={{ marginTop: 'auto', display: 'flex', gap: '4px' }}>
                                        {[1,2,3,4,5].map(i => <div key={i} style={{ flex: 1, height: '2px', background: '#f1f5f9' }} />)}
                                    </div>
                                </div>
                                {/* Stack effect */}
                                <div style={{ position: 'absolute', width: '180px', height: '240px', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0', transform: 'rotate(2deg)', zIndex: 1 }} />
                            </div>
                        </div>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>

                        {/* 3. ABSTRACT SECTION */}
                        <motion.div variants={fadeUp} style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)', padding: '3rem', borderRadius: '24px', border: '1px solid #bfdbfe' }}>
                            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#1e3a8a', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <FileText size={28} /> Abstract
                            </h3>
                            <p style={{ fontSize: '1.15rem', color: '#1e40af', lineHeight: 1.8, fontStyle: 'italic', fontWeight: 500 }}>
                                "This study explores the application of predictive analytics in assessing natural disaster risks across the United States. By analyzing historical disaster data, the research develops models to forecast disaster occurrence, estimate severity, and predict insurance claims. The findings highlight key risk zones and provide actionable insights for improving insurance strategies and disaster preparedness."
                            </p>
                        </motion.div>

                        {/* 4. METHODOLOGY OVERVIEW */}
                        <motion.div variants={fadeUp} style={{ background: 'white', padding: '3rem', borderRadius: '24px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <Database size={28} color="#2563eb" /> Methodology Overview
                            </h3>
                            <p style={{ fontSize: '1.1rem', color: '#475569', marginBottom: '2rem', lineHeight: 1.6 }}>
                                The research utilizes FEMA disaster declaration datasets sourced from Kaggle, applying machine learning techniques for predictive modeling.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {[
                                    'Data collection & preprocessing',
                                    'Feature engineering',
                                    'Model development (classification & regression)',
                                    'Validation techniques'
                                ].map((step, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', color: '#334155', fontWeight: 500 }}>
                                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb', fontWeight: 700, fontSize: '0.9rem' }}>
                                            {i + 1}
                                        </div>
                                        {step}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* 5. MODELS USED */}
                    <motion.div variants={fadeUp} style={{ marginBottom: '5rem' }}>
                        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                            <h3 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0f172a' }}>Models Used</h3>
                            <p style={{ color: '#64748b', fontSize: '1.1rem' }}>The analytical engines driving our research.</p>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                            {[
                                { title: 'Disaster Occurrence Prediction Model', desc: 'A sophisticated classification framework assessing spatial and temporal variables to output likelihood scores.', icon: <Map size={32} color="#8b5cf6" /> },
                                { title: 'Severity & Impact Estimation Model', desc: 'A robust regression pipeline designed to quantify expected physical intensity and socioeconomic disruption.', icon: <Activity size={32} color="#059669" /> },
                                { title: 'Insurance Claim Projection Model', desc: 'A predictive financial model forecasting aggregate claim volume and estimating dollar-loss bounds.', icon: <Shield size={32} color="#ea580c" /> }
                            ].map((mod, i) => (
                                <div key={i} style={{ background: 'white', padding: '2.5rem 2rem', borderRadius: '24px', border: '1px solid #e2e8f0', boxShadow: '0 10px 25px rgba(0,0,0,0.02)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <div style={{ width: '70px', height: '70px', borderRadius: '20px', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                                        {mod.icon}
                                    </div>
                                    <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>{mod.title}</h4>
                                    <p style={{ color: '#64748b', lineHeight: 1.6 }}>{mod.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem', marginBottom: '5rem' }}>
                        {/* 6. KEY FINDINGS */}
                        <motion.div variants={fadeUp} style={{ background: '#0f172a', borderRadius: '24px', padding: '3rem', color: 'white' }}>
                            <h3 style={{ color: 'white', fontSize: '1.8rem', fontWeight: 800, marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <AlertTriangle size={28} color="#f59e0b" /> Key Findings
                            </h3>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                {[
                                    'Disaster frequency has increased over time',
                                    'Coastal regions show higher risk levels',
                                    'Floods generate the highest claim volumes',
                                    'Wildfire damage costs are rising rapidly'
                                ].map((finding, i) => (
                                    <li key={i} style={{ display: 'flex', gap: '1rem', fontSize: '1.15rem', color: '#f8fafc', fontWeight: 500 }}>
                                        <div style={{ marginTop: '3px' }}><CheckCircle2 size={22} color="#38bdf8" /></div>
                                        {finding}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* 7. PRACTICAL IMPLICATIONS */}
                        <motion.div variants={fadeUp} style={{ background: 'white', borderRadius: '24px', padding: '3rem', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <BarChart size={28} color="#2563eb" /> Practical Implications
                            </h3>
                            <p style={{ fontSize: '1.2rem', color: '#334155', lineHeight: 1.8, marginBottom: '2rem' }}>
                                The findings of this research can help insurance companies:
                            </p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                                <div style={{ padding: '1.2rem', background: '#f1f5f9', borderRadius: '12px', color: '#0f172a', fontWeight: 600 }}>Optimize premium pricing models dynamically</div>
                                <div style={{ padding: '1.2rem', background: '#f1f5f9', borderRadius: '12px', color: '#0f172a', fontWeight: 600 }}>Improve geographic risk assessment strategies</div>
                                <div style={{ padding: '1.2rem', background: '#f1f5f9', borderRadius: '12px', color: '#0f172a', fontWeight: 600 }}>Enhance financial preparedness against natural disasters</div>
                            </div>
                        </motion.div>
                    </div>

                    {/* 8. ADDITIONAL PUBLICATIONS */}
                    <motion.div variants={fadeUp} style={{ marginBottom: '5rem' }}>
                        <div style={{ marginBottom: '3rem' }}>
                            <h3 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0f172a' }}>Additional Publications</h3>
                            <p style={{ color: '#64748b', fontSize: '1.1rem' }}>Further reading derived from our core studies.</p>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                            {[
                                { title: 'Disaster Occurrence Prediction in the United States', desc: 'A detailed methodological breakdown of our occurrence algorithms.', year: '2026', icon: <Map /> },
                                { title: 'Machine Learning-Based Insurance Loss Forecasting', desc: 'Focuses strictly on the financial modeling aspect and damage claims.', year: '2026', icon: <Activity /> },
                                { title: 'Geospatial Risk Mapping for Natural Disasters', desc: 'An application of GIS clustering for high-risk zones.', year: '2025', icon: <FileText /> }
                            ].map((pub, i) => (
                                <div key={i} style={{ background: 'white', padding: '2rem', borderRadius: '20px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                                        <div style={{ width: '48px', height: '48px', background: '#f0f9ff', color: '#0284c7', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            {pub.icon}
                                        </div>
                                        <span style={{ padding: '0.3rem 0.8rem', background: '#f1f5f9', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600, color: '#475569' }}>
                                            {pub.year}
                                        </span>
                                    </div>
                                    <h4 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem', lineHeight: 1.4 }}>{pub.title}</h4>
                                    <p style={{ color: '#64748b', flex: 1, marginBottom: '2rem', lineHeight: 1.6 }}>{pub.desc}</p>
                                    <button style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '0.75rem', borderRadius: '10px', color: '#0f172a', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', cursor: 'pointer', transition: 'all 0.2s' }}>
                                        <Download size={18} /> Download PDF
                                    </button>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* 9. CITATION / 10. FUTURE PUBLICATIONS */}
                    <motion.div variants={fadeUp} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
                        <div style={{ background: 'white', padding: '2.5rem', borderRadius: '20px', border: '1px dashed #cbd5e1' }}>
                            <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Quote size={20} color="#64748b" /> Suggested Citation
                            </h4>
                            <p style={{ color: '#334155', fontFamily: 'monospace', fontSize: '0.95rem', background: '#f8fafc', padding: '1rem', borderRadius: '8px', border: '1px solid #f1f5f9' }}>
                                Procentric Research (2026). Natural Disaster Risk Assessment and Insurance Loss Prediction in the United States.
                            </p>
                        </div>
                        <div style={{ background: '#f0fdf4', padding: '2.5rem', borderRadius: '20px', border: '1px solid #bbf7d0' }}>
                            <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#166534', marginBottom: '1rem' }}>
                                Future Publications
                            </h4>
                            <p style={{ color: '#15803d', lineHeight: 1.6 }}>
                                Ongoing research aims to expand predictive capabilities through real-time data integration, advanced AI models, and broader geographic coverage.
                            </p>
                        </div>
                    </motion.div>

                    {/* PRO TOUCH */}
                    <motion.div variants={fadeUp} style={{ textAlign: 'center', padding: '4rem 2rem', background: 'linear-gradient(to right, #f8fafc, #f1f5f9, #f8fafc)', borderRadius: '24px', border: '1px solid #e2e8f0' }}>
                        <p style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', fontWeight: 300, color: '#334155', fontStyle: 'italic', letterSpacing: '0.02em', margin: 0 }}>
                            "Advancing disaster intelligence through data-driven research and innovation."
                        </p>
                    </motion.div>

                     {/* DYNAMIC PUBLICATIONS LIST (PRESERVED) */}
                     <motion.div variants={fadeUp} style={{ marginTop: '5rem', borderTop: '1px solid #f1f5f9', paddingTop: '6rem', paddingBottom: '4rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
                            <div>
                                <h3 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>Scholarly Catalog</h3>
                                <p style={{ color: '#64748b', fontSize: '1.1rem' }}>Access our complete historical repository of research.</p>
                            </div>
                            <div style={{ fontSize: '0.9rem', color: '#94a3b8', fontWeight: 600 }}>{publications.length} TOTAL ENTRIES</div>
                        </div>

                        {loading && <div style={{ padding: '4rem', textAlign: 'center', color: '#94a3b8' }}>Analyzing repository...</div>}
                        
                        {!loading && publications.length === 0 && (
                            <div style={{ padding: '6rem', textAlign: 'center', background: '#f8fafc', borderRadius: '24px', border: '1px dashed #e2e8f0' }}>
                                <p style={{ color: '#64748b', fontSize: '1.1rem', margin: 0 }}>No additional publications found in metadata.</p>
                            </div>
                        )}

                        {!loading && publications.length > 0 && (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                                {publications.map((pub) => (
                                    <Link 
                                        key={pub.id} 
                                        to={`/publications/${pub.id}`} 
                                        className="premium-pub-row"
                                        style={{ 
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            gap: '2.5rem', 
                                            padding: '2rem 2.5rem', 
                                            background: 'white', 
                                            borderRadius: '24px', 
                                            border: '1px solid #f1f5f9', 
                                            textDecoration: 'none', 
                                            color: 'inherit', 
                                            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                                            boxShadow: '0 4px 6px rgba(0,0,0,0.01)'
                                        }}
                                    >
                                        <div style={{ 
                                            background: '#f8fafc', 
                                            color: '#0f172a', 
                                            padding: '0.6rem 1.2rem', 
                                            borderRadius: '12px', 
                                            fontWeight: 800, 
                                            fontSize: '0.95rem',
                                            border: '1px solid #f1f5f9',
                                            minWidth: '80px',
                                            textAlign: 'center'
                                        }}>
                                            {pub.year || '—'}
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <h4 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>{pub.title}</h4>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', color: '#64748b', fontSize: '0.95rem' }}>
                                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><BookOpen size={14} /> {pub.authors}</span>
                                                {pub.venue && <span style={{ color: '#cbd5e1' }}>|</span>}
                                                {pub.venue && <span style={{ fontWeight: 600, color: '#2563eb' }}>{pub.venue}</span>}
                                            </div>
                                        </div>
                                        <div style={{ 
                                            width: '48px', 
                                            height: '48px', 
                                            borderRadius: '50%', 
                                            background: '#f8fafc', 
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            justifyContent: 'center',
                                            color: '#cbd5e1',
                                            transition: 'all 0.3s'
                                        }} className="pub-arrow-hint">
                                            <ArrowRight size={20} />
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </motion.div>

                    {/* 11. DATA SOURCES & ATTRIBUTION */}
                    <motion.div variants={fadeUp}>
                        <DataAttribution />
                    </motion.div>

                </motion.div>
            </div>
        </div>
    );
};

export default Publications;
