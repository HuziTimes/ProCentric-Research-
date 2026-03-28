import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, FileText, ArrowRight } from 'lucide-react';

const ARTICLES = [
    {
        id: 'ai-risk',
        category: 'Artificial Intelligence',
        title: 'The Future of AI in Dynamic Risk Modeling',
        summary: 'How neural networks are disrupting traditional actuarial tables by incorporating real-time geographic variables.',
        date: 'Oct 15, 2025',
        readTime: '6 min read',
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80',
    },
    {
        id: 'ml-finance',
        category: 'Financial Forecasting',
        title: 'Machine Learning for Institutional Finance',
        summary: 'Leveraging transformer models to extract market sentiment and drive alpha generation strategies.',
        date: 'Sep 22, 2025',
        readTime: '8 min read',
        image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
    },
    {
        id: 'climate-analytics',
        category: 'Climate Analytics',
        title: 'Redefining Flood Risk with Satellite Imagery',
        summary: 'Integrating high-resolution Earth observation data to predict localized flooding severity accurately.',
        date: 'Aug 04, 2025',
        readTime: '5 min read',
        image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80',
    }
];

const CASE_STUDIES = [
    {
        id: 'cs-1',
        title: 'Optimizing Emergency Response the Smart Way',
        client: 'Regional Govt Initiative',
        problem: 'Emergency services suffered from slow response times due to poorly optimized routing during severe weather events.',
        approach: 'Deployed a Reinforcement Learning agent mapping real-time weather phenomena to traffic grid patterns.',
        impact: 'Reduced mean deployment time by 18%, resulting in an estimated 12% increase in critical incident survival rates.'
    },
    {
        id: 'cs-2',
        title: 'Fraud Detection in Micro-Lending',
        client: 'FinTech Startup',
        problem: 'Client experienced a 15% default rate on micro-loans due to sophisticated synthetic identity fraud.',
        approach: 'Designed a multi-modal anomaly detection model using graph neural networks to map subtle relationship incongruities.',
        impact: 'Slashed fraud-related defaults by 60% within 3 months while accelerating approval times for valid applicants.'
    }
];

const containerVariants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.15 } } };
const itemVariants = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const Insights = () => {
    return (
        <div style={{ paddingBottom: '6rem', backgroundColor: 'var(--bg-secondary, #f4f4f4)', minHeight: '100vh' }}>
            {/* Header Section */}
            <div style={{ backgroundColor: 'black', color: 'white', padding: '6rem 0 4rem' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                    <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                        <span className="mono-label" style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.4rem 0.8rem', borderRadius: '4px', display: 'inline-block', marginBottom: '1.5rem', fontSize: '0.85rem' }}>Thought Leadership</span>
                        <h1 style={{ color: 'white', fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                            Research & Insights
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.8)', maxWidth: '600px', lineHeight: 1.6 }}>
                            Deep-dive into our technical articles, thought leadership on Artificial Intelligence, and detailed case studies demonstrating real-world impact.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="container" style={{ marginTop: '4rem' }}>
                <motion.div variants={containerVariants} initial="hidden" animate="show">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                        <BookOpen size={28} color="var(--ibm-blue)" />
                        <h2 style={{ fontSize: '2.25rem', fontWeight: 600, margin: 0 }}>Latest Articles</h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '6rem' }}>
                        {ARTICLES.map((article, index) => (
                            <motion.div key={article.id} variants={itemVariants} whileHover={{ y: -8, transition: { duration: 0.2 } }} style={{ backgroundColor: 'white', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--ibm-gray-20)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', cursor: 'pointer' }}>
                                <div style={{ height: '220px', overflow: 'hidden' }}>
                                    <img src={article.image} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="article-img" />
                                </div>
                                <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <span style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--ibm-blue)', marginBottom: '1rem' }}>{article.category}</span>
                                    <h3 style={{ fontSize: '1.35rem', lineHeight: 1.3, marginBottom: '1rem', flex: 1, color: 'var(--text-primary)' }}>{article.title}</h3>
                                    <p style={{ color: 'var(--ibm-gray-60)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>{article.summary}</p>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid var(--ibm-gray-10)', fontSize: '0.85rem', color: 'var(--ibm-gray-50)' }}>
                                        <span>{article.date}</span>
                                        <span>{article.readTime}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Case Studies Section */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                        <FileText size={28} color="var(--ibm-blue)" />
                        <h2 style={{ fontSize: '2.25rem', fontWeight: 600, margin: 0 }}>Detailed Case Studies</h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
                        {CASE_STUDIES.map((cs) => (
                            <motion.div key={cs.id} variants={itemVariants} style={{ backgroundColor: 'white', padding: '2.5rem', borderRadius: '12px', border: '1px solid var(--ibm-gray-20)', boxShadow: '0 4px 15px rgba(0,0,0,0.02)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                    <span style={{ fontSize: '0.85rem', fontWeight: 600, backgroundColor: 'var(--ibm-gray-10)', padding: '0.3rem 0.8rem', borderRadius: '20px', color: 'var(--ibm-gray-70)' }}>Client: {cs.client}</span>
                                </div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', lineHeight: 1.3, color: 'var(--ibm-blue)' }}>{cs.title}</h3>

                                <div style={{ marginBottom: '1.5rem' }}>
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>The Problem</h4>
                                    <p style={{ color: 'var(--ibm-gray-70)', fontSize: '1rem', lineHeight: 1.6 }}>{cs.problem}</p>
                                </div>

                                <div style={{ marginBottom: '1.5rem' }}>
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Our Approach</h4>
                                    <p style={{ color: 'var(--ibm-gray-70)', fontSize: '1rem', lineHeight: 1.6 }}>{cs.approach}</p>
                                </div>

                                <div style={{ padding: '1.25rem', backgroundColor: 'var(--status-green-light, #e6f6ec)', borderLeft: '4px solid var(--status-green, #198038)', borderRadius: '0 8px 8px 0' }}>
                                    <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.25rem', color: 'var(--status-green, #198038)' }}>Result & Impact</h4>
                                    <p style={{ color: 'var(--status-green, #198038)', fontSize: '1rem', lineHeight: 1.5, margin: 0 }}>{cs.impact}</p>
                                </div>

                                <div style={{ marginTop: '2rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--ibm-blue)', fontWeight: 500, fontSize: '0.95rem' }}>
                                    Download Full Report <ArrowRight size={16} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            <style>{`
                .article-img:hover {
                    transform: scale(1.05);
                }
            `}</style>
        </div>
    );
};

export default Insights;
