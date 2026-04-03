import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import DataTerrainBackground from '../components/DataTerrainBackground';
import {
    Target, AlertTriangle, ShieldCheck, TrendingUp, Map, Bell,
    Activity, Cpu, BarChart3, Database, ShieldAlert,
    ArrowRight, DollarSign, Cloud, Globe, Lightbulb, CheckCircle2, ChevronRight
} from 'lucide-react';

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
        results: 'Achieved an 89% accuracy rating in predicting localized flooding events up to 48 hours in advance.',
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
        tools_used: ['PyTorch', 'React', 'Node.js', 'PostgreSQL'],
        results: 'Demonstrating a 15% outperformance against standard benchmark indices.',
        isMock: true
    }
];

const staggerContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const Projects = () => {
    const [searchParams] = useSearchParams();
    const q = searchParams.get('search') || searchParams.get('q') || '';
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setLoading(true);
                const url = q.trim()
                    ? `${API_BASE}/api/projects/?search=${encodeURIComponent(q.trim())}`
                    : `${API_BASE}/api/projects/`;
                const res = await fetch(url);
                if (!res.ok) throw new Error('Failed to load projects');
                const data = await res.json();
                const results = data.results ?? data;
                setProjects(Array.isArray(results) ? results : []);
            } catch (err) {
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

    const allProjects = [...EXAMPLE_PROJECTS, ...projects];

    return (
        <div style={{ paddingBottom: '0', backgroundColor: '#f9fafb' }}>
            {/* HERO SECTION */}
            <div style={{
                background: '#020617',
                color: 'white',
                padding: '6rem 0 5rem',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <DataTerrainBackground />
                <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(circle at 20% 40%, rgba(255,255,255,0.4) 0%, transparent 50%)', zIndex: 1 }} />
                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1, letterSpacing: '-0.02em', background: 'linear-gradient(to right, #ffffff, #94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            Our Projects
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: '#94a3b8', maxWidth: '800px', lineHeight: 1.6 }}>
                            Data-driven research and predictive modeling projects focused on natural disaster risk and insurance analytics in the United States.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* MAIN FEATURED PROJECT */}
            <div style={{ width: '100%', backgroundColor: 'white', padding: '5rem 0', borderBottom: '1px solid #e2e8f0' }}>
                <div className="container">
                    <motion.div variants={staggerContainer} initial="hidden" animate="show">

                        {/* FEATURED BADGE & TITLE */}
                        <motion.div variants={fadeUp} style={{ marginBottom: '3rem', textAlign: 'center', maxWidth: '900px', margin: '0 auto 4rem' }}>
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#fef3c7', color: '#b45309', padding: '0.5rem 1rem', borderRadius: '40px', fontWeight: 600, fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                                <Target size={18} /> Main Featured Project
                            </div>
                            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                                Natural Disaster Risk Assessment for US Insurance
                            </h2>
                            <p style={{ fontSize: '1.2rem', color: '#475569', lineHeight: 1.7 }}>
                                This project analyzes historical disaster data across the United States to predict disaster occurrence, estimate severity, and forecast insurance-related financial losses using machine learning models.
                            </p>
                        </motion.div>

                        {/* GRID LAYOUT FOR OBJECTIVES & INSIGHTS */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
                            {/* OBJECTIVES */}
                            <motion.div variants={fadeUp} style={{ background: '#ffffff', padding: '2.5rem', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.04)', border: '1px solid #f1f5f9' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <Target size={24} color="#2563eb" /> Project Objectives
                                </h3>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    {[
                                        { text: 'Predict disaster occurrence probability by region', icon: <Map size={18} /> },
                                        { text: 'Estimate severity and impact of disasters', icon: <Activity size={18} /> },
                                        { text: 'Forecast insurance claim volumes and financial losses', icon: <TrendingUp size={18} /> },
                                        { text: 'Identify high-risk zones for premium adjustments', icon: <AlertTriangle size={18} /> },
                                        { text: 'Develop early warning insights', icon: <Bell size={18} /> }
                                    ].map((obj, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', color: '#334155', fontSize: '1.05rem', lineHeight: 1.5 }}>
                                            <span style={{ color: '#3b82f6', marginTop: '3px' }}>{obj.icon}</span>
                                            {obj.text}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* INSIGHTS */}
                            <motion.div variants={fadeUp} style={{ background: 'linear-gradient(145deg, #eff6ff 0%, #dbeafe 100%)', padding: '2.5rem', borderRadius: '24px', border: '1px solid #bfdbfe' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1e3a8a', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <Lightbulb size={24} color="#2563eb" /> Insights from the Project
                                </h3>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                                    {[
                                        'California and Texas show consistently high risk.',
                                        'Floods generate the highest claim volume.',
                                        'Disaster frequency is increasing over time.',
                                        'Coastal areas are more vulnerable.'
                                    ].map((insight, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', color: '#1e40af', fontSize: '1.05rem', lineHeight: 1.5, fontWeight: 500 }}>
                                            <CheckCircle2 size={20} style={{ color: '#2563eb', flexShrink: 0, marginTop: '2px' }} />
                                            {insight}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>

                        {/* MODULES (MINI-PROJECTS) SECTION */}
                        <motion.div variants={fadeUp} style={{ marginBottom: '5rem' }}>
                            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                                <h3 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0f172a' }}>Project Modules</h3>
                                <p style={{ color: '#64748b', fontSize: '1.1rem' }}>The core structural components powering our predictive intelligence.</p>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                                {[
                                    {
                                        title: 'Module 1: Disaster Occurrence Prediction',
                                        content: 'A classification model that predicts the likelihood of disasters in different US regions based on historical patterns.',
                                        icon: <Cpu size={32} color="#8b5cf6" />,
                                        bg: '#f5f3ff', borderColor: '#ede9fe'
                                    },
                                    {
                                        title: 'Module 2: Severity & Impact Estimation',
                                        content: 'A regression model that estimates disaster intensity and potential economic damage.',
                                        icon: <Activity size={32} color="#059669" />,
                                        bg: '#ecfdf5', borderColor: '#d1fae5'
                                    },
                                    {
                                        title: 'Module 3: Insurance Claim Projection',
                                        content: 'Predicts expected insurance claims and financial losses using past disaster data.',
                                        icon: <ShieldCheck size={32} color="#ea580c" />,
                                        bg: '#fff7ed', borderColor: '#ffedd5'
                                    }
                                ].map((mod, i) => (
                                    <motion.div key={i} whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }} style={{ background: mod.bg, border: `1px solid ${mod.borderColor}`, padding: '2.5rem 2rem', borderRadius: '24px', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column' }}>
                                        <div style={{ marginBottom: '1.5rem', background: 'white', width: '64px', height: '64px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                                            {mod.icon}
                                        </div>
                                        <h4 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>{mod.title}</h4>
                                        <p style={{ color: '#475569', lineHeight: 1.6, flex: 1, marginBottom: '1.5rem' }}>{mod.content}</p>
                                        <button style={{ background: 'white', border: 'none', padding: '0.8rem 1.5rem', borderRadius: '12px', fontWeight: 600, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', alignSelf: 'flex-start', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                                            <Link to={`/projects/disaster-prediction-model`} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                View Details <ChevronRight size={16} />
                                            </Link>
                                        </button>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* DATA & TOOLS + OUTPUTS */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', marginBottom: '5rem' }}>
                            <motion.div variants={fadeUp}>
                                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>Data & Tools Used</h3>
                                <p style={{ color: '#475569', lineHeight: 1.6, fontSize: '1.1rem', marginBottom: '2rem' }}>
                                    The project utilizes FEMA disaster declaration data sourced from Kaggle and applies advanced data science techniques.
                                </p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                    {['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Chart.js / Power BI Style'].map((tool, i) => (
                                        <span key={i} style={{ padding: '0.5rem 1.2rem', background: '#f1f5f9', color: '#334155', borderRadius: '30px', fontSize: '0.95rem', fontWeight: 600 }}>
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div variants={fadeUp}>
                                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem' }}>Key Outputs / Results</h3>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                                    {[
                                        { title: 'Risk scores for US regions', icon: <Target size={20} /> },
                                        { title: 'Disaster probability maps', icon: <Map size={20} /> },
                                        { title: 'Predicted insurance losses', icon: <DollarSign size={20} /> },
                                        { title: 'Claim forecasts', icon: <BarChart3 size={20} /> }
                                    ].map((out, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                                            <div style={{ color: '#2563eb' }}>{out.icon}</div>
                                            <span style={{ fontWeight: 600, color: '#1e293b', fontSize: '0.95rem' }}>{out.title}</span>
                                        </div>
                                    ))}
                                </div>
                                <div style={{ padding: '1.2rem 1.5rem', background: '#f8fafc', color: '#0f172a', borderRadius: '12px', borderLeft: '4px solid #38bdf8', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
                                    <p style={{ margin: 0, fontStyle: 'italic', fontSize: '1.05rem', fontWeight: 500 }}>
                                        "The models provide actionable insights for insurers to optimize decision-making."
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        {/* VISUAL RESULTS SECTION (Placeholders) */}
                        <motion.div variants={fadeUp} style={{ marginBottom: '5rem' }}>
                            <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a', textAlign: 'center', marginBottom: '3rem' }}>Visual Results Section</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                                {[
                                    { title: 'Risk Heatmap (USA)', type: 'map' },
                                    { title: 'Disaster Trend Graph', type: 'line' },
                                    { title: 'Claims Prediction Graph', type: 'bar' }
                                ].map((vis, i) => (
                                    <div key={i} style={{ background: 'white', borderRadius: '24px', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', textAlign: 'center' }}>
                                        <div style={{ width: '100%', height: '220px', background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)', borderRadius: '16px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', border: '2px dashed #cbd5e1' }}>
                                            {vis.type === 'map' ? <Map size={48} /> : vis.type === 'line' ? <Activity size={48} /> : <BarChart3 size={48} />}
                                        </div>
                                        <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#334155' }}>{vis.title}</h4>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* BUSINESS IMPACT & FUTURE ENHANCEMENTS */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
                            <motion.div variants={fadeUp} style={{ background: '#0f172a', color: 'white', padding: '3rem', borderRadius: '24px' }}>
                                <h3 style={{ color: 'white', fontSize: '1.6rem', fontWeight: 800, marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <ShieldAlert size={28} color="#38bdf8" /> Business Impact
                                </h3>
                                <p style={{ fontSize: '1.1rem', color: '#cbd5e1', marginBottom: '1.5rem' }}>This project helps insurance companies:</p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                                    {[
                                        'Adjust premiums based on risk',
                                        'Prepare for financial losses',
                                        'Improve disaster response planning',
                                        'Reduce unexpected claim surges'
                                    ].map((impact, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', color: '#f8fafc' }}>
                                            <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#38bdf8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <CheckCircle2 size={14} color="#0f172a" />
                                            </div>
                                            {impact}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            <motion.div variants={fadeUp} style={{ background: 'white', border: '1px solid #e2e8f0', padding: '3rem', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.04)' }}>
                                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '2rem', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <Globe size={28} color="#2563eb" /> Future Enhancements
                                </h3>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                                    {[
                                        { text: 'Real-time data integration', icon: <Database size={20} /> },
                                        { text: 'Live dashboard updates', icon: <Activity size={20} /> },
                                        { text: 'Integration with weather APIs', icon: <Cloud size={20} /> },
                                        { text: 'Expansion beyond the United States', icon: <Globe size={20} /> }
                                    ].map((enh, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', color: '#334155', padding: '1rem', background: '#f8fafc', borderRadius: '12px' }}>
                                            <span style={{ color: '#2563eb' }}>{enh.icon}</span>
                                            {enh.text}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>

                        {/* PRO TOUCH FOOTER LINE */}
                        <motion.div variants={fadeUp} style={{ textAlign: 'center', padding: '4rem 2rem', background: 'linear-gradient(to right, #f8fafc, #f1f5f9, #f8fafc)', borderRadius: '24px', border: '1px solid #e2e8f0' }}>
                            <p style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', fontWeight: 600, color: '#334155', fontStyle: 'italic', letterSpacing: '0.02em', margin: 0 }}>
                                "Transforming raw disaster data into predictive intelligence for smarter insurance decisions."
                            </p>
                        </motion.div>

                    </motion.div>
                </div>
            </div>

            {/* OTHER PROJECTS CATALOG */}
            <div className="container" style={{ padding: '6rem 0' }}>
                <div style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a' }}>Other Projects</h2>
                </div>
                {loading ? (
                    <div className="list-loading">Loading projects…</div>
                ) : (
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="show"
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}
                    >
                        {allProjects.map((project) => (
                            <Link to={`/projects/${project.slug}`} key={project.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <motion.div
                                    variants={fadeUp}
                                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                                    style={{
                                        backgroundColor: 'white',
                                        borderRadius: '20px',
                                        overflow: 'hidden',
                                        boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
                                        border: '1px solid #e2e8f0',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}
                                >
                                    <div style={{ height: '220px', backgroundColor: '#f1f5f9', overflow: 'hidden', position: 'relative' }}>
                                        {project.image ? (
                                            <img src={project.isMock ? project.image : (project.image.startsWith('http') ? project.image : `${API_BASE}/media${project.image}`)} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        ) : (
                                            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8' }}>No Image</div>
                                        )}
                                        <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(255,255,255,0.95)', padding: '0.4rem 1rem', borderRadius: '30px', fontSize: '0.8rem', fontWeight: 600, color: '#0f172a', backdropFilter: 'blur(4px)' }}>
                                            {getStatus(project)}
                                        </div>
                                    </div>
                                    <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem', color: '#0f172a', flex: 1 }}>{project.title}</h3>
                                        <p style={{ fontSize: '1rem', color: '#475569', marginBottom: '2rem', lineHeight: 1.6 }}>
                                            {project.short_description?.length > 120 ? project.short_description.substring(0, 120) + '...' : project.short_description}
                                        </p>
                                        <div style={{ color: '#2563eb', fontWeight: 600, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            Read More <ArrowRight size={16} />
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
