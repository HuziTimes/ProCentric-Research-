import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Cpu, BrainCircuit, DatabaseZap } from 'lucide-react';
import aboutImg from '../assets/images/about_new.png';

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

const SKILLS = [
    { name: 'Artificial Intelligence', color: 'white', icon: BrainCircuit, desc: 'Developing autonomous decision-making algorithms.' },
    { name: 'Machine Learning', color: 'white', icon: Cpu, desc: 'Training highly accurate models on complex datasets.' },
    { name: 'Data Science', color: 'white', icon: DatabaseZap, desc: 'Extracting actionable insights from messy, unstructured data.' }
];

const containerVariants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.15 } } };
const itemVariants = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const About = () => {
    return (
        <div style={{ paddingBottom: '6rem', backgroundColor: 'var(--bg-primary, #ffffff)' }}>
            {/* Hero Section */}
            <div style={{ backgroundColor: 'var(--ibm-gray-10)', padding: '6rem 0 4rem', borderBottom: '1px solid var(--ibm-gray-20)' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                    <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                        <span className="mono-label" style={{ color: 'var(--ibm-blue)', marginBottom: '1.5rem', display: 'inline-block' }}>About Us</span>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                            Pioneering the Future of Intelligence.
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--ibm-gray-70)', lineHeight: 1.6 }}>
                            We are an interdisciplinary team dedicated to solving high-stakes challenges at the intersection of information technology, finance, and public safety.
                        </p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.6 }}>
                        <img src={aboutImg} alt="ProCentric Research" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
                    </motion.div>
                </div>
            </div>

            {/* Mission & Vision Section */}
            <div className="container" style={{ marginTop: '6rem' }}>
                <motion.div variants={containerVariants} initial="hidden" animate="show" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem' }}>
                    <motion.div variants={itemVariants} style={{ backgroundColor: 'var(--ibm-gray-10)', color: 'var(--text-primary)', padding: '3rem', borderRadius: '12px' }}>
                        <span className="mono-label" style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '0.2rem 0.6rem', borderRadius: '4px', marginBottom: '1rem', display: 'inline-block' }}>01</span>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Our Mission</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.7, opacity: 0.9 }}>
                            To democratize advanced predictive modeling. We empower organizations and governments with the tools to foresee risks, mitigate disasters, and optimize financial strategies through ethical, robust Artificial Intelligence.
                        </p>
                    </motion.div>
                    <motion.div variants={itemVariants} style={{ backgroundColor: 'var(--ibm-gray-10)', padding: '3rem', borderRadius: '12px', border: '1px solid var(--ibm-gray-20)' }}>
                        <span className="mono-label" style={{ backgroundColor: 'var(--ibm-gray-30)', padding: '0.2rem 0.6rem', borderRadius: '4px', marginBottom: '1rem', display: 'inline-block' }}>02</span>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--ibm-blue)' }}>Our Vision</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--ibm-gray-80)' }}>
                            A world where data-driven insights eliminate uncertainty. We envision a future where systemic risks are neutralized before they occur, ensuring societal resilience and sustainable economic growth.
                        </p>
                    </motion.div>
                </motion.div>
            </div>

            {/* Core Competencies (Skills) */}
            <div style={{ backgroundColor: '#000', color: 'white', marginTop: '6rem', padding: '6rem 0' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <span className="mono-label" style={{ color: 'var(--ibm-blue)' }}>Expertise</span>
                        <h2 style={{ color: 'white', fontSize: '2.5rem', marginTop: '1rem' }}>Our Core Competencies</h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {SKILLS.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                style={{ padding: '2.5rem', backgroundColor: '#161616', borderRadius: '12px', border: '1px solid #393939' }}
                            >
                                <skill.icon size={40} color="var(--ibm-blue)" style={{ marginBottom: '1.5rem' }} />
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>{skill.name}</h3>
                                <p style={{ color: 'white', lineHeight: 1.6 }}>{skill.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Team Members Section */}
            <div className="container" style={{ marginTop: '6rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span className="mono-label" style={{ color: 'var(--ibm-blue)' }}>Leadership</span>
                    <h2 style={{ fontSize: '2.5rem', marginTop: '1rem' }}>Meet the Team</h2>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    {TEAM.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            style={{ textAlign: 'center' }}
                            whileHover={{ y: -10 }}
                        >
                            <div style={{ width: '200px', height: '200px', margin: '0 auto 1.5rem', borderRadius: '50%', overflow: 'hidden', border: '4px solid var(--ibm-blue-10)' }}>
                                <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>{member.name}</h3>
                            <p style={{ color: 'var(--ibm-blue)', fontWeight: 600, marginBottom: '1rem' }}>{member.role}</p>
                            <p style={{ color: 'var(--ibm-gray-60)', lineHeight: 1.5, maxWidth: '280px', margin: '0 auto' }}>{member.bio}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '6rem' }}>
                <Link to="/contact" className="btn" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>Collaborate With Us</Link>
            </div>
        </div>
    );
};

export default About;
