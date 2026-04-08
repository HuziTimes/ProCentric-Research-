import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Wrench as Tool, Target, Image as ImageIcon } from 'lucide-react';
import DataTerrainBackground from '../components/DataTerrainBackground';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const EXAMPLE_PROJECTS = {
    'disaster-prediction-model': {
        id: 'example-1',
        slug: 'disaster-prediction-model',
        title: 'Disaster Prediction Model',
        short_description: 'An AI-driven model that forecasts natural disasters like floods and earthquakes with high accuracy.',
        description: 'This project aims to leverage deep learning networks on multi-modal geospatial data to predict disasters. We collated decades of climate patterns and tectonic activity to model precursors effectively.',
        status: 'Completed',
        start_date: '2023-01-15',
        end_date: '2024-06-20',
        image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&q=80',
        problem_statement: 'Natural disasters cause billions of dollars in damages and thousands of casualties each year due to lack of early warning systems. Traditional meteorological models often fail to capture complex non-linear precursors at a localized level.',
        tools_used: ['Python', 'TensorFlow', 'Geospatial Analysis (QGIS)', 'AWS EC2', 'React for Dashboard'],
        results: 'Achieved an 89% accuracy rating in predicting localized flooding events up to 48 hours in advance. The model was successfully tested in 5 pilot cities across South Asia, reducing emergency response time by an average of 3 hours.',
        screenshots: [
            'https://images.unsplash.com/photo-1588725176140-5bfa26ed6a42?w=600&q=80',
            'https://images.unsplash.com/photo-1622353347573-d5dca8a64483?w=600&q=80'
        ]
    },
    'stock-market-predictor': {
        id: 'example-2',
        slug: 'stock-market-predictor',
        title: 'Algorithmic Stock Market Predictor',
        short_description: 'A quantitative trading model integrating sentiment analysis and historical market trends.',
        description: 'We developed a high-frequency trading algorithm that processes millions of news articles contextually alongside time-series data of S&P 500 stocks to identify short-term arbitrage opportunities.',
        status: 'Ongoing',
        start_date: '2024-02-01',
        end_date: null,
        image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80',
        problem_statement: 'Retail investors and smaller funds lack access to high-frequency sentiment data combined with historical technical indicators, putting them at a disadvantage against large institutional quants.',
        tools_used: ['PyTorch', 'React', 'Node.js', 'PostgreSQL', 'HuggingFace Transformers (NLP)', 'AlphaVantage API'],
        results: 'Currently demonstrating a 15% outperformance against standard benchmark indices in simulated backtesting environments over a 10-year period. Real-time paper trading has shown a Sharpe ratio of 1.4.',
        screenshots: [
            'https://images.unsplash.com/photo-1590283603385-18ffb2a40c43?w=600&q=80'
        ]
    }
};

const ProjectDetails = () => {
    const { slug } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    useEffect(() => {
        const fetchProject = async () => {
            if (!slug) return;
            try {
                setLoading(true);
                setError(null);

                // Check if it's our mock data first
                if (EXAMPLE_PROJECTS[slug]) {
                    setProject(EXAMPLE_PROJECTS[slug]);
                    setLoading(false);
                    return;
                }

                const res = await fetch(`${API_BASE}/api/projects/${slug}/`);
                if (!res.ok) throw new Error('Project not found');
                const data = await res.json();
                setProject({ ...data, isMock: false });
            } catch (err) {
                setError(err.message || 'Something went wrong');
                setProject(null);
            } finally {
                setLoading(false);
            }
        };
        fetchProject();
    }, [slug]);

    const getImageUrl = (imagePath, isMock) => {
        if (!imagePath) return null;
        if (isMock) return imagePath;
        if (imagePath.startsWith('http')) return imagePath;
        const base = API_BASE.replace(/\/$/, '');
        const path = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
        return `${base}/media${path}`;
    };

    const getStatus = (p) => {
        if (p?.isMock) return p.status;
        if (!p?.end_date) return 'Ongoing';
        return new Date(p.end_date) >= new Date() ? 'Ongoing' : 'Completed';
    };

    const formatDate = (dateStr) => {
        if (!dateStr) return '';
        return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    };

    if (loading) {
        return (
            <div className="container section">
                <p>Loading...</p>
            </div>
        );
    }

    if (error || !project) {
        return (
            <div className="container section">
                <h1>Project Not Found</h1>
                <Link to="/projects" style={{ color: 'var(--ibm-blue)', textDecoration: 'none' }}>&larr; Back to Projects</Link>
            </div>
        );
    }

    return (
        <div style={{ paddingBottom: '6rem' }}>
            <div style={{ backgroundColor: '#020617', borderBottom: '1px solid #1e293b', padding: '10rem 0 6rem', position: 'relative', overflow: 'hidden', color: 'white' }}>
                <DataTerrainBackground />
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 20% 50%, rgba(15,98,254,0.1) 0%, transparent 50%)', zIndex: 1 }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <Link to="/projects" className="mono-label" style={{ color: '#78a9ff', textDecoration: 'none', display: 'inline-block', marginBottom: '2rem' }}>
                        &larr; Back to Portfolio
                    </Link>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <span className="mono-label" style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: 'white', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600, border: '1px solid rgba(255,255,255,0.2)', marginBottom: '1.5rem', display: 'inline-block' }}>
                            {getStatus(project)}
                        </span>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '2rem', letterSpacing: '-0.02em', color: 'white' }}>
                            {project.title}
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: '#94a3b8', maxWidth: '800px', lineHeight: 1.6 }}>
                            {project.short_description}
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="container" style={{ marginTop: '4rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: '4rem' }}>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }}>
                        {project.image && (
                            <div style={{ marginBottom: '3rem', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                                <img src={getImageUrl(project.image, project.isMock)} alt={project.title} style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '500px', objectFit: 'cover' }} />
                            </div>
                        )}

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                            {/* Problem Statement Section */}
                            {(project.problem_statement || project.description) && (
                                <div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                                        <div style={{ padding: '0.5rem', background: 'var(--ibm-blue-10)', color: 'var(--ibm-blue)', borderRadius: '8px' }}><Target size={24} /></div>
                                        <h2 style={{ fontSize: '1.75rem', fontWeight: 600, margin: 0 }}>Problem Statement</h2>
                                    </div>
                                    <p style={{ fontSize: '1.15rem', lineHeight: 1.8, color: 'var(--ibm-gray-80)', paddingLeft: '3.5rem' }}>
                                        {project.problem_statement || project.description}
                                    </p>
                                </div>
                            )}

                            {/* Approach / General Description */}
                            {project.description && project.problem_statement && (
                                <div>
                                    <h2 style={{ fontSize: '1.75rem', fontWeight: 600, marginBottom: '1.25rem' }}>Approach</h2>
                                    <p style={{ fontSize: '1.15rem', lineHeight: 1.8, color: 'var(--ibm-gray-80)', whiteSpace: 'pre-wrap' }}>
                                        {project.description}
                                    </p>
                                </div>
                            )}

                            {/* Results & Impact Section */}
                            {project.results && (
                                <div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                                        <div style={{ padding: '0.5rem', background: 'var(--status-green-light, #e6f6ec)', color: 'var(--status-green, #198038)', borderRadius: '8px' }}><CheckCircle size={24} /></div>
                                        <h2 style={{ fontSize: '1.75rem', fontWeight: 600, margin: 0 }}>Results & Impact</h2>
                                    </div>
                                    <div style={{ padding: '1.5rem', background: 'var(--ibm-gray-10)', borderRadius: '12px', borderLeft: '4px solid var(--status-green, #198038)', marginLeft: '3.5rem' }}>
                                        <p style={{ fontSize: '1.15rem', lineHeight: 1.8, margin: 0, color: 'var(--ibm-gray-80)' }}>
                                            {project.results}
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Screenshots Section */}
                            {project.screenshots && project.screenshots.length > 0 && (
                                <div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                                        <div style={{ padding: '0.5rem', background: 'var(--ibm-gray-20)', color: 'var(--ibm-gray-80)', borderRadius: '8px' }}><ImageIcon size={24} /></div>
                                        <h2 style={{ fontSize: '1.75rem', fontWeight: 600, margin: 0 }}>Project Screenshots</h2>
                                    </div>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '2rem' }}>
                                        {project.screenshots.map((src, i) => (
                                            <div key={i} style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--ibm-gray-20)' }}>
                                                <img src={src} alt={`Screenshot ${i + 1}`} style={{ width: '100%', display: 'block', height: '100%', objectFit: 'cover' }} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.5 }}>
                        <div style={{ position: 'sticky', top: '100px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div style={{ backgroundColor: 'var(--ibm-gray-10)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--ibm-gray-20)' }}>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', fontWeight: 600 }}>Project Information</h3>

                                {(project.start_date || project.end_date) && (
                                    <div style={{ marginBottom: '1.5rem' }}>
                                        <div className="mono-label" style={{ color: 'var(--ibm-gray-60)', marginBottom: '0.5rem' }}>Timeline</div>
                                        <div style={{ fontSize: '1.1rem', fontWeight: 500 }}>
                                            {formatDate(project.start_date)}
                                            {project.start_date && project.end_date && ' – '}
                                            {formatDate(project.end_date)}
                                        </div>
                                    </div>
                                )}

                                {project.tools_used && project.tools_used.length > 0 && (
                                    <div style={{ marginBottom: '1.5rem' }}>
                                        <div className="mono-label" style={{ color: 'var(--ibm-gray-60)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <Tool size={16} /> Tools & Technologies
                                        </div>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                            {project.tools_used.map((tool, i) => (
                                                <span key={i} style={{ padding: '0.4rem 0.8rem', backgroundColor: 'white', border: '1px solid var(--ibm-gray-20)', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 500 }}>
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {project.research_areas && project.research_areas.length > 0 && (
                                    <div>
                                        <div className="mono-label" style={{ color: 'var(--ibm-gray-60)', marginBottom: '1rem' }}>Research Areas</div>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                            {project.research_areas.map((ra) => (
                                                <Link key={ra.id} to={`/research/${ra.slug}`} style={{ padding: '0.4rem 0.8rem', backgroundColor: 'white', border: '1px solid var(--ibm-gray-20)', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 500, textDecoration: 'none', color: 'inherit' }}>
                                                    {ra.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
