import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Map, Target, Eye, ShieldAlert, Database, BrainCircuit, Activity,
    TrendingUp, AlertTriangle, Layers, Globe, CheckCircle, Clock,
    ArrowRight, Users, Play, BarChart2
} from 'lucide-react';

const TEAM = [
    {
        name: 'Dr. Sarah Jenkins',
        role: 'Head of AI Research',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80',
        bio: 'Leading our deep learning initiatives. Formerly at MIT CSAIL.'
    },
    {
        name: 'Ali Rahman',
        role: 'Data Science Lead',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&q=80',
        bio: 'Specialist in predictive modeling and quantitative finance.'
    },
    {
        name: 'Fatima Zahra',
        role: 'ML Engineer',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&q=80',
        bio: 'Expert in neural networks and spatial data analysis.'
    }
];

const TIMELINE = [
    { year: 'Phase 1', title: 'Project Inception', desc: 'Identified the gap in proactive disaster risk assessment and initiated our core research architecture.' },
    { year: 'Phase 2', title: 'Data Aggregation', desc: 'Integrated 50+ years of FEMA disaster declarations and cleaned massive spatiotemporal datasets.' },
    { year: 'Phase 3', title: 'Model Training', desc: 'Developed and cross-validated our proprietary Machine Learning classification and regression models.' },
    { year: 'Phase 4', title: 'Platform Launch', desc: 'Deployed the proactive intelligence platform for US insurers and policymakers.' }
];

const containerVariants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.15 } } };
const itemVariants = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ backgroundColor: 'var(--bg-primary, #ffffff)', overflowX: 'hidden' }}>

            {/* 1. Opening Section (Hook) with USA Map Background */}
            <section style={{ position: 'relative', padding: '10rem 0 8rem', backgroundColor: '#000', color: 'white', overflow: 'hidden' }}>
                <div style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                    backgroundImage: 'url("https://images.unsplash.com/photo-1524334228333-0f6db392f8a1?w=1600&q=80")',
                    backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.3, filter: 'grayscale(100%) contrast(1.2)'
                }}></div>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 100%)' }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ maxWidth: '800px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                            <Map color="#78a9ff" size={28} />
                            <span className="mono-label" style={{ color: '#78a9ff', fontWeight: 600, letterSpacing: '1px' }}>About Procentric Research</span>
                        </div>
                        <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', color: 'white', lineHeight: 1.1, marginBottom: '2rem', letterSpacing: '-0.02em' }}>
                            Transforming US Disaster Risk Intelligence.
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: '#c6c6c6', lineHeight: 1.7 }}>
                            Procentric Research is a data-driven analytics platform focused on transforming how natural disaster risks are understood and managed across the United States. By combining historical disaster data with advanced machine learning models, we provide actionable insights that help insurance companies, policymakers, and organizations make smarter, faster, and more informed decisions.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2 & 3. Mission and Vision */}
            <section style={{ padding: '7rem 0', backgroundColor: 'var(--ibm-gray-10)' }}>
                <div className="container">
                    <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>

                        <motion.div variants={itemVariants} style={{ backgroundColor: 'white', padding: '4rem 3rem', borderRadius: '16px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)', position: 'relative', overflow: 'hidden' }}>
                            <div style={{ position: 'absolute', top: '-20px', right: '-20px', opacity: 0.03 }}><Target size={200} /></div>
                            <div style={{ width: '60px', height: '60px', backgroundColor: 'var(--ibm-blue-10)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                                <Target size={32} color="var(--ibm-blue)" />
                            </div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Our Mission</h2>
                            <p style={{ fontSize: '1.15rem', color: 'var(--ibm-gray-70)', lineHeight: 1.7 }}>
                                Our mission is to empower the insurance industry with predictive intelligence that minimizes financial losses, enhances risk preparedness, and enables proactive decision-making in the face of increasing natural disasters across the United States.
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} style={{ backgroundColor: 'white', padding: '4rem 3rem', borderRadius: '16px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)', position: 'relative', overflow: 'hidden' }}>
                            <div style={{ position: 'absolute', top: '-20px', right: '-20px', opacity: 0.03 }}><Eye size={200} /></div>
                            <div style={{ width: '60px', height: '60px', backgroundColor: 'rgba(250, 77, 86, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                                <Eye size={32} color="#fa4d56" />
                            </div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Our Vision</h2>
                            <p style={{ fontSize: '1.15rem', color: 'var(--ibm-gray-70)', lineHeight: 1.7 }}>
                                We envision a future where data and artificial intelligence work together to create resilient communities, optimize insurance systems, and reduce the economic impact of disasters nationwide.
                            </p>
                        </motion.div>

                    </motion.div>
                </div>
            </section>

            {/* 4. What We Do */}
            <section style={{ padding: '7rem 0', backgroundColor: 'white' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '5rem', maxWidth: '800px', margin: '0 auto 5rem' }}>
                        <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>What We Do</h2>
                        <p style={{ fontSize: '1.2rem', color: 'var(--ibm-gray-70)', lineHeight: 1.6 }}>
                            We specialize in Natural Disaster Risk Assessment using advanced analytics and predictive modeling techniques. Our platform focuses exclusively on the United States, analyzing patterns of disasters such as hurricanes, wildfires, floods, and tornadoes.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: 'Predict Occurrence', desc: 'Predict disaster occurrence probability.', icon: <Activity /> },
                            { title: 'Estimate Severity', desc: 'Estimate severity and impact levels.', icon: <AlertTriangle /> },
                            { title: 'Forecast Claims', desc: 'Forecast insurance claim volumes.', icon: <TrendingUp /> },
                            { title: 'Identify Regions', desc: 'Identify high-risk geographic regions.', icon: <Map /> },
                            { title: 'Premium Recommends', desc: 'Provide data-driven premium recommendations.', icon: <Database /> },
                            { title: 'Early Warnings', desc: 'Generate early warning alerts.', icon: <ShieldAlert /> }
                        ].map((item, i) => (
                            <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ padding: '2rem', backgroundColor: 'var(--ibm-gray-10)', borderRadius: '12px', border: '1px solid var(--ibm-gray-20)', display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
                                <div style={{ color: 'var(--ibm-blue)', background: 'white', padding: '1rem', borderRadius: '50%', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>{item.title}</h4>
                                    <p style={{ color: 'var(--ibm-gray-60)', fontSize: '0.95rem' }}>{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Our Technology & 6. Our Models */}
            <section style={{ padding: '8rem 0', backgroundColor: '#000', color: 'white' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '6rem' }}>

                        {/* Technology */}
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                                <BrainCircuit size={40} color="#78a9ff" />
                                <h2 style={{ fontSize: '2.5rem', color: 'white', margin: 0 }}>Our Technology</h2>
                            </div>
                            <p style={{ fontSize: '1.15rem', color: '#a8a8a8', lineHeight: 1.7, marginBottom: '2rem' }}>
                                Our system is built on a foundation of machine learning and data science, utilizing large-scale datasets including FEMA disaster declarations sourced from Kaggle.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {[
                                    'Predictive Modeling (Classification & Regression)',
                                    'Data Visualization & Risk Mapping',
                                    'Statistical Analysis & Forecasting',
                                    'Real-Time Risk Scoring Algorithms'
                                ].map((tech, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', backgroundColor: '#161616', padding: '1rem 1.5rem', borderRadius: '8px', border: '1px solid #262626' }}>
                                        <CheckCircle color="#24a148" size={20} /> {tech}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Models */}
                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                                <Layers size={40} color="#fa4d56" />
                                <h2 style={{ fontSize: '2.5rem', color: 'white', margin: 0 }}>Our Models</h2>
                            </div>
                            <p style={{ fontSize: '1.15rem', color: '#a8a8a8', lineHeight: 1.7, marginBottom: '2rem' }}>
                                We have developed three core predictive models driving our risk assessment engine:
                            </p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                {[
                                    { title: 'Model 1: Disaster Occurrence Prediction', desc: 'Predicts the likelihood of disasters in specific US regions.' },
                                    { title: 'Model 2: Severity & Impact Estimation', desc: 'Analyzes potential damage based on historical and environmental factors.' },
                                    { title: 'Model 3: Insurance Claim Projection', desc: 'Forecasts expected claims and financial losses for insurers.' }
                                ].map((model, i) => (
                                    <div key={i} style={{ borderLeft: '4px solid #fa4d56', paddingLeft: '1.5rem' }}>
                                        <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'white' }}>{model.title}</h4>
                                        <p style={{ color: '#8d8d8d', fontSize: '1rem', margin: 0 }}>{model.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section style={{ padding: '7rem 0', backgroundColor: 'var(--ibm-gray-10)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
                            <Clock size={32} color="var(--ibm-blue)" />
                        </div>
                        <h2 style={{ fontSize: '3rem', color: 'var(--text-primary)' }}>How We Started</h2>
                    </div>

                    <div style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto' }}>
                        {/* Center Line */}
                        <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 0, bottom: 0, width: '4px', backgroundColor: 'var(--ibm-gray-20)', borderRadius: '4px' }} className="timeline-line"></div>

                        {TIMELINE.map((item, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ display: 'flex', justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end', padding: '2rem 0', position: 'relative' }}>
                                {/* Center Dot */}
                                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '24px', height: '24px', backgroundColor: 'var(--ibm-blue)', borderRadius: '50%', border: '4px solid var(--ibm-gray-10)', zIndex: 2 }}></div>

                                <div style={{ width: '45%', backgroundColor: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', textAlign: i % 2 === 0 ? 'right' : 'left' }}>
                                    <span className="mono-label" style={{ color: 'var(--ibm-blue)', marginBottom: '0.5rem', display: 'block' }}>{item.year}</span>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{item.title}</h3>
                                    <p style={{ color: 'var(--ibm-gray-60)', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Focus on US & 8. Why It Matters & 9. What Makes Us Different */}
            <section style={{ padding: '7rem 0', backgroundColor: 'white' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>

                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <div style={{ backgroundColor: 'var(--ibm-gray-10)', padding: '3rem', borderRadius: '16px', height: '100%' }}>
                                <Globe size={40} color="var(--ibm-blue)" style={{ marginBottom: '1.5rem' }} />
                                <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Focus on the United States</h3>
                                <p style={{ fontSize: '1.1rem', color: 'var(--ibm-gray-70)', lineHeight: 1.7 }}>
                                    Our research is specifically tailored to the United States, one of the most disaster-prone regions in the world. By focusing on US-specific data, policies, and geographic patterns, we ensure highly accurate and relevant insights for insurers operating in this market.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                            <div style={{ backgroundColor: 'var(--ibm-gray-10)', padding: '3rem', borderRadius: '16px', height: '100%' }}>
                                <AlertTriangle size={40} color="#fa4d56" style={{ marginBottom: '1.5rem' }} />
                                <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Why It Matters</h3>
                                <p style={{ fontSize: '1.1rem', color: 'var(--ibm-gray-70)', lineHeight: 1.7 }}>
                                    Natural disasters in the United States result in billions of dollars in damages every year. Traditional risk assessment methods are often reactive and limited. Our approach shifts the industry toward proactive, data-driven strategies that improve financial resilience and risk mitigation.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                            <div style={{ backgroundColor: 'var(--ibm-gray-10)', padding: '3rem', borderRadius: '16px', height: '100%', color: 'var(--ibm-gray-70)' }}>
                                <CheckCircle size={40} color="var(--ibm-gray-70)" style={{ marginBottom: '1.5rem' }} />
                                <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>What Makes Us Different</h3>
                                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1.1rem' }}>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><div style={{ width: '8px', height: '8px', backgroundColor: 'var(--ibm-gray-70)', borderRadius: '50%' }}></div> AI-powered predictive insights</li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><div style={{ width: '8px', height: '8px', backgroundColor: 'var(--ibm-gray-70)', borderRadius: '50%' }}></div> US-focused disaster intelligence</li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><div style={{ width: '8px', height: '8px', backgroundColor: 'var(--ibm-gray-70)', borderRadius: '50%' }}></div> Insurance-centered risk modeling</li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><div style={{ width: '8px', height: '8px', backgroundColor: 'var(--ibm-gray-70)', borderRadius: '50%' }}></div> Real-time analytics and alerts</li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><div style={{ width: '8px', height: '8px', backgroundColor: 'var(--ibm-gray-70)', borderRadius: '50%' }}></div> Scalable and data-driven approach</li>
                                </ul>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Team Members Section */}
            <section style={{ padding: '7rem 0', backgroundColor: 'var(--ibm-gray-10)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}><Users size={32} color="var(--ibm-blue)" /></div>
                        <h2 style={{ fontSize: '3rem', color: 'var(--text-primary)' }}>Leadership Team</h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
                        {TEAM.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                style={{ textAlign: 'center' }}
                            >
                                <div style={{ width: '180px', height: '180px', margin: '0 auto 1.5rem', borderRadius: '50%', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
                                    <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>{member.name}</h3>
                                <p style={{ color: 'var(--ibm-blue)', fontWeight: 600, marginBottom: '1rem' }}>{member.role}</p>
                                <p style={{ color: 'var(--ibm-gray-60)', lineHeight: 1.5, maxWidth: '280px', margin: '0 auto' }}>{member.bio}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 10. Call to Action */}
            <section style={{ padding: '8rem 0', backgroundColor: '#000', color: 'white', textAlign: 'center', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at center, rgba(15,98,254,0.15) 0%, transparent 70%)' }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', marginBottom: '1.5rem', fontWeight: 700 }}>
                            Want to explore how data can transform disaster risk management?
                        </h2>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginTop: '3rem' }}>
                            <Link to="/dashboard" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#0f62fe', color: 'white', padding: '1rem 2rem', borderRadius: '8px', fontSize: '1.1rem', fontWeight: 600, textDecoration: 'none' }}>
                                <BarChart2 size={20} /> Explore Dashboard
                            </Link>
                            <Link to="/research" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#262626', border: '1px solid #393939', color: 'white', padding: '1rem 2rem', borderRadius: '8px', fontSize: '1.1rem', fontWeight: 600, textDecoration: 'none' }}>
                                <Play size={20} /> View Predictive Models
                            </Link>
                            <Link to="/contact" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'transparent', border: '1px solid white', color: 'white', padding: '1rem 2rem', borderRadius: '8px', fontSize: '1.1rem', fontWeight: 600, textDecoration: 'none' }}>
                                <ArrowRight size={20} /> Contact Us
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

        </div>
    );
};

export default About;
