import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
    Activity, ArrowRight, BookOpen, Cpu, ShieldAlert, Globe, BarChart2, 
    Map, TrendingUp, Bell, CheckCircle2, ChevronRight 
} from 'lucide-react';
import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts';

import DataTerrainBackground from '../components/DataTerrainBackground';
import heroImg from '../assets/images/hero_new.png'; // Will use as fallback if needed

const UNSPLASH_IMAGES = [
    'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&q=80',
    'https://images.unsplash.com/photo-1588725176140-5bfa26ed6a42?w=600&q=80',
    'https://images.unsplash.com/photo-1579383615967-df50e50d75a1?w=600&q=80',
    'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80'
];

const MOCK_LINE_DATA = Array.from({ length: 20 }).map((_, i) => ({ val: 50 + Math.sin(i * 0.5) * 40 + Math.random() * 10 }));

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" }} };
const staggerContainer = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.15 }} };

const Home = () => {

    return (
        <main style={{ backgroundColor: '#f9fafb', overflowX: 'hidden' }}>
            
            {/* 1. HERO SECTION (Top Banner) */}
            <section style={{ 
                position: 'relative', 
                minHeight: '100vh', 
                display: 'flex', 
                alignItems: 'center', 
                backgroundColor: '#020617', 
                color: 'white',
                padding: '8rem 0 4rem'
            }}>
                <DataTerrainBackground />
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', background: 'radial-gradient(circle at 50% 50%, transparent 0%, #020617 100%)', opacity: 0.8, zIndex: 1 }} />
                
                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <div style={{ maxWidth: '900px' }}>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#38bdf8', backgroundColor: 'rgba(56,189,248,0.1)', padding: '0.5rem 1.2rem', borderRadius: '30px', fontWeight: 600, fontSize: '0.9rem', marginBottom: '1.5rem', border: '1px solid rgba(56,189,248,0.2)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                <Globe size={16} /> Advanced Risk Analytics
                            </span>
                            <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '2rem', letterSpacing: '-0.02em', background: 'linear-gradient(to right, #ffffff, #94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                Predictive Intelligence for Disasters.
                            </h1>
                            <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', color: '#cbd5e1', marginBottom: '3rem', lineHeight: 1.6, maxWidth: '800px' }}>
                                An AI-powered platform for analyzing and predicting natural disaster risks across the United States, helping insurers and organizations make smarter, data-driven decisions.
                            </p>
                        </motion.div>
                        
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <Link to="/dashboard" style={{ background: '#2563eb', color: 'white', textDecoration: 'none', padding: '1rem 2rem', borderRadius: '12px', fontWeight: 600, fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.2s' }} onMouseOver={e=>e.currentTarget.style.background='#1d4ed8'} onMouseOut={e=>e.currentTarget.style.background='#2563eb'}>
                                Explore Dashboard <ArrowRight size={20} />
                            </Link>
                            <Link to="/insights" style={{ background: 'rgba(255,255,255,0.05)', color: 'white', textDecoration: 'none', padding: '1rem 2rem', borderRadius: '12px', fontWeight: 600, fontSize: '1.1rem', border: '1px solid rgba(255,255,255,0.2)', transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: '0.5rem' }} onMouseOver={e=>e.currentTarget.style.background='rgba(255,255,255,0.1)'} onMouseOut={e=>e.currentTarget.style.background='rgba(255,255,255,0.05)'}>
                                View Insights
                            </Link>
                            <Link to="/about" style={{ display: 'flex', alignItems: 'center', color: '#cbd5e1', textDecoration: 'none', fontWeight: 600, padding: '0 1rem', transition: 'color 0.2s' }} onMouseOver={e=>e.currentTarget.style.color='white'} onMouseOut={e=>e.currentTarget.style.color='#cbd5e1'}>
                                Learn More
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. SHORT INTRO SECTION */}
            <section style={{ padding: '6rem 0', background: 'white', position: 'relative' }}>
                <div className="container">
                    <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                        <p style={{ fontSize: 'clamp(1.2rem, 3vw, 1.6rem)', color: '#334155', lineHeight: 1.6, fontWeight: 500 }}>
                            <span style={{ color: '#2563eb', fontWeight: 700 }}>Procentric Research</span> focuses on Natural Disaster Risk Assessment in the United States using advanced data analytics and machine learning models. By analyzing historical disaster patterns, we predict future risks, estimate financial losses, and provide actionable insights for the insurance sector.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 3. KEY FEATURES SECTION */}
            <section style={{ padding: '5rem 0 8rem', background: '#f8fafc' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#0f172a' }}>Core Capabilities</h2>
                        <p style={{ fontSize: '1.15rem', color: '#64748b', marginTop: '1rem' }}>Advanced methodologies driving our models.</p>
                    </div>
                    
                    <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: 'Predictive Modeling', desc: 'Forecast disaster occurrence, severity, and impact using historical US data.', icon: <Cpu size={32} /> },
                            { title: 'Risk Mapping', desc: 'Identify high-risk zones across states with interactive visualization.', icon: <Map size={32} /> },
                            { title: 'Insurance Insights', desc: 'Estimate claim volumes and financial losses for better planning.', icon: <TrendingUp size={32} /> },
                            { title: 'Early Warning System', desc: 'Generate alerts for potential disaster risks before they occur.', icon: <Bell size={32} /> }
                        ].map((feat, i) => (
                            <motion.div key={i} variants={fadeUp} style={{ background: 'white', padding: '2.5rem', borderRadius: '24px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', gap: '1.5rem', transition: 'transform 0.3s' }} whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.06)' }}>
                                <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: '#f0f9ff', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    {feat.icon}
                                </div>
                                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#0f172a' }}>{feat.title}</h3>
                                <p style={{ color: '#475569', lineHeight: 1.6 }}>{feat.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 4. STATS / NUMBERS SECTION */}
            <section style={{ padding: '6rem 0', background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)', color: 'white' }}>
                <div className="container">
                    <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', textAlign: 'center', marginBottom: '3rem' }}>
                        {[
                            { number: '50+', label: 'Years of Disaster Data' },
                            { number: '1000+', label: 'US Regions Analyzed' },
                            { number: 'High', label: 'Accuracy Predictive Models' },
                            { number: '$1B+', label: 'Billion-Dollar Loss Insights' }
                        ].map((stat, i) => (
                            <motion.div key={i} variants={fadeUp}>
                                <div style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: '#60a5fa', marginBottom: '0.5rem' }}>{stat.number}</div>
                                <div style={{ fontSize: '1.1rem', fontWeight: 500, color: '#bfdbfe' }}>{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" style={{ textAlign: 'center', opacity: 0.8, fontSize: '1rem', fontStyle: 'italic' }}>
                        Based on FEMA disaster declaration data and advanced analytics.
                    </motion.div>
                </div>
            </section>

            {/* 5. WHAT WE DO SECTION */}
            <section style={{ padding: '8rem 0', background: 'white' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '5rem', alignItems: 'center' }}>
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <span style={{ display: 'inline-block', color: '#2563eb', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>What We Do</span>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 800, color: '#0f172a', lineHeight: 1.1, marginBottom: '2rem' }}>
                            Transforming complex data into predictive power.
                        </h2>
                        <p style={{ fontSize: '1.2rem', color: '#475569', lineHeight: 1.7, marginBottom: '2rem' }}>
                            Our platform transforms raw disaster data into meaningful insights through predictive models and risk analysis. We help identify patterns, assess vulnerabilities, and support proactive decision-making in disaster-prone regions across the United States.
                        </p>
                        <Link to="/about" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#2563eb', fontWeight: 600, textDecoration: 'none', fontSize: '1.1rem' }}>
                            Learn more about our methodology <ChevronRight size={20} />
                        </Link>
                    </motion.div>

                    {/* 6. DASHBOARD PREVIEW SECTION */}
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '24px', border: '1px solid #e2e8f0', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1)' }}>
                            <div style={{ background: '#0f172a', borderRadius: '16px', overflow: 'hidden', height: '300px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {/* Mockup representation of the dashboard */}
                                <div style={{ position: 'absolute', inset: 0, opacity: 0.2, backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                                <BarChart2 size={80} color="#38bdf8" style={{ zIndex: 2, opacity: 0.8 }} />
                                <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', color: 'white', background: 'rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.8rem', backdropFilter: 'blur(4px)' }}>Live Risk Maps</div>
                            </div>
                            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                                <p style={{ fontSize: '1.1rem', color: '#334155', fontWeight: 500, marginBottom: '1.5rem' }}>
                                    Explore our interactive dashboard to visualize disaster trends, risk scores, and insurance projections across different US states.
                                </p>
                                <Link to="/dashboard" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.8rem 2rem', background: '#0f172a', color: 'white', borderRadius: '12px', fontWeight: 600, textDecoration: 'none' }}>
                                    Launch Dashboard
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 7. RESEARCH HIGHLIGHT & 8. INSIGHTS */}
            <section style={{ padding: '6rem 0 8rem', background: '#f1f5f9' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
                        
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: '#2563eb' }}>
                                <BookOpen size={24} /> <h3 style={{ fontSize: '1.5rem', fontWeight: 800, margin: 0, color: '#0f172a' }}>Research Highlight</h3>
                            </div>
                            <p style={{ fontSize: '1.25rem', color: '#475569', lineHeight: 1.7, background: 'white', padding: '2.5rem', borderRadius: '24px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                                Our research focuses on disaster occurrence prediction, severity estimation, and insurance claim forecasting using machine learning models trained on historical US disaster data.
                            </p>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: '#ea580c' }}>
                                <Activity size={24} /> <h3 style={{ fontSize: '1.5rem', fontWeight: 800, margin: 0, color: '#0f172a' }}>Insights Highlight</h3>
                            </div>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {[
                                    'California and Texas show consistently high disaster risk',
                                    'Floods contribute to the highest insurance claims',
                                    'Disaster frequency is increasing over time'
                                ].map((insight, i) => (
                                    <li key={i} style={{ background: 'white', padding: '1.5rem', borderRadius: '16px', display: 'flex', gap: '1rem', alignItems: 'center', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', fontWeight: 500, color: '#334155' }}>
                                        <div style={{ color: '#2563eb', flexShrink: 0 }}><CheckCircle2 size={24} /></div>
                                        {insight}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* 9. CALL TO ACTION (Bottom Section) */}
            <section style={{ padding: '8rem 0', background: 'linear-gradient(145deg, #0f172a 0%, #020617 100%)', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '2rem', letterSpacing: '-0.02em', background: 'linear-gradient(to right, #ffffff, #94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            Empowering smarter decisions through data-driven disaster intelligence.
                        </h2>
                        
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '3rem' }}>
                            <Link to="/dashboard" style={{ background: '#2563eb', color: 'white', padding: '1rem 2.5rem', borderRadius: '12px', fontSize: '1.1rem', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'background 0.2s' }} onMouseOver={e=>e.currentTarget.style.background='#1d4ed8'} onMouseOut={e=>e.currentTarget.style.background='#2563eb'}>
                                Explore Dashboard <ArrowRight size={20} />
                            </Link>
                            <Link to="/research" style={{ background: 'rgba(255,255,255,0.05)', color: 'white', padding: '1rem 2.5rem', borderRadius: '12px', fontSize: '1.1rem', fontWeight: 600, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)', transition: 'background 0.2s' }} onMouseOver={e=>e.currentTarget.style.background='rgba(255,255,255,0.1)'} onMouseOut={e=>e.currentTarget.style.background='rgba(255,255,255,0.05)'}>
                                View Research
                            </Link>
                            <Link to="/contact" style={{ background: 'rgba(255,255,255,0.05)', color: 'white', padding: '1rem 2.5rem', borderRadius: '12px', fontSize: '1.1rem', fontWeight: 600, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)', transition: 'background 0.2s' }} onMouseOver={e=>e.currentTarget.style.background='rgba(255,255,255,0.1)'} onMouseOut={e=>e.currentTarget.style.background='rgba(255,255,255,0.05)'}>
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 10. SMALL FOOTER NOTE */}
            <footer style={{ background: '#020617', padding: '2rem 0', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                <div className="container">
                    <p style={{ color: '#64748b', fontSize: '0.95rem', margin: 0 }}>
                        All analysis and predictions are focused exclusively on natural disasters in the United States.
                    </p>
                </div>
            </footer>

        </main>
    );
};

export default Home;
