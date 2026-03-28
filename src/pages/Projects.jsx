import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const EXAMPLE_PROJECTS = [
    {
        id: 'example-1',
        slug: 'disaster-prediction-model',
        title: 'Disaster Prediction Model',
        short_description: 'An AI-driven model that forecasts natural disasters like floods and earthquakes with high accuracy.',
        status: 'Completed',
        start_date: '2023-01-15',
        end_date: '2024-06-20',
        image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80',
        problem_statement: 'Natural disasters cause billions of dollars in damages and thousands of casualties each year due to lack of early warning systems.',
        tools_used: ['Python', 'TensorFlow', 'Geospatial Analysis', 'AWS'],
        results: 'Achieved an 89% accuracy rating in predicting localized flooding events up to 48 hours in advance, successfully tested in pilot cities.',
        isMock: true
    },
    {
        id: 'example-2',
        slug: 'stock-market-predictor',
        title: 'Algorithmic Stock Market Predictor',
        short_description: 'A quantitative trading model integrating sentiment analysis and historical market trends.',
        status: 'Ongoing',
        start_date: '2024-02-01',
        end_date: null,
        image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
        problem_statement: 'Retail investors lack access to high-frequency sentiment data combined with historical technical indicators.',
        tools_used: ['PyTorch', 'React', 'Node.js', 'PostgreSQL', 'Natural Language Processing'],
        results: 'Currently demonstrating a 15% outperformance against standard benchmark indices in simulated backtesting environments.',
        isMock: true
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const Projects = () => {
    const [searchParams] = useSearchParams();
    const q = searchParams.get('search') || searchParams.get('q') || '';
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setLoading(true);
                setError(null);
                const url = q.trim()
                    ? `${API_BASE}/api/projects/?search=${encodeURIComponent(q.trim())}`
                    : `${API_BASE}/api/projects/`;
                const res = await fetch(url);
                if (!res.ok) throw new Error('Failed to load projects');
                const data = await res.json();
                const results = data.results ?? data;
                setProjects(Array.isArray(results) ? results : []);
            } catch (err) {
                // Ignore API failure and fallback gracefully to mock data
                console.warn(err);
                setProjects([]);
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, [q]);

    const getStatus = (project) => {
        if (project.isMock) return project.status;
        if (!project.end_date) return 'Ongoing';
        const end = new Date(project.end_date);
        return end >= new Date() ? 'Ongoing' : 'Completed';
    };

    const formatDate = (dateStr) => {
        if (!dateStr) return '';
        return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
    };

    const allProjects = [...EXAMPLE_PROJECTS, ...projects];

    return (
        <div className="list-page" style={{ paddingBottom: '4rem' }}>
            <div className="list-page-header" style={{ padding: '4rem 0' }}>
                <div className="container">
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <span className="mono-label" style={{ color: 'var(--ibm-blue)', marginBottom: '1rem', display: 'inline-block' }}>Portfolio</span>
                        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Completed & Ongoing Projects</h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--ibm-gray-60)', maxWidth: '800px' }}>
                            Showcasing our problem-solving approach, technical expertise, and measurable impact across various domains.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="container" style={{ marginTop: '2rem' }}>
                {loading ? (
                    <div className="list-loading">Loading projects…</div>
                ) : (
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}
                    >
                        {allProjects.map((project) => (
                            <Link to={`/projects/${project.slug}`} key={project.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <motion.div 
                                    variants={itemVariants} 
                                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                    style={{ 
                                        backgroundColor: 'white', 
                                        borderRadius: '12px', 
                                        overflow: 'hidden', 
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                                        border: '1px solid var(--ibm-gray-20)',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}
                                >
                                    <div style={{ height: '200px', backgroundColor: 'var(--ibm-gray-10)', overflow: 'hidden', position: 'relative' }}>
                                        {project.image ? (
                                            <img src={project.isMock ? project.image : (project.image.startsWith('http') ? project.image : `${API_BASE}/media${project.image}`)} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        ) : (
                                            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ibm-gray-50)' }}>No Image</div>
                                        )}
                                        <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(255,255,255,0.9)', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600 }}>
                                            {getStatus(project)}
                                        </div>
                                    </div>
                                    <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        <div style={{ fontSize: '0.875rem', color: 'var(--ibm-gray-60)', marginBottom: '0.5rem' }}>
                                            {(project.start_date || project.end_date) ? (
                                                <>{formatDate(project.start_date)} {project.start_date && project.end_date && ' – '} {formatDate(project.end_date)}</>
                                            ) : 'Timeline not specified'}
                                        </div>
                                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', flex: 1 }}>{project.title}</h3>
                                        <p style={{ fontSize: '0.95rem', color: 'var(--ibm-gray-70)', marginBottom: '1.5rem' }}>
                                            {project.short_description?.length > 100 ? project.short_description.substring(0, 100) + '...' : project.short_description}
                                        </p>
                                        <div style={{ color: 'var(--ibm-blue)', fontWeight: 500, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            View Project Details &rarr;
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Projects;
