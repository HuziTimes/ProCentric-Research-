import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, BookOpen, Cpu, ShieldAlert, Globe, ExternalLink, ArrowRight, BarChart2, Activity } from 'lucide-react';
import { LineChart, Line, ResponsiveContainer, YAxis, Tooltip } from 'recharts';

// Import Assets
import heroImg from '../assets/images/hero_new.png';

const UNSPLASH_IMAGES = [
    'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&q=80',
    'https://images.unsplash.com/photo-1588725176140-5bfa26ed6a42?w=600&q=80',
    'https://images.unsplash.com/photo-1579383615967-df50e50d75a1?w=600&q=80',
    'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80'
];

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const MOCK_LINE_DATA = Array.from({ length: 20 }).map((_, i) => ({ val: 50 + Math.sin(i * 0.5) * 40 + Math.random() * 10 }));

const Home = () => {
    const [areas, setAreas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [demoInput, setDemoInput] = useState('');
    const [demoResult, setDemoResult] = useState(null);
    const [isPredicting, setIsPredicting] = useState(false);

    useEffect(() => {
        const fetchAreas = async () => {
            try {
                const res = await fetch(`${API_BASE}/api/research-areas/`);
                if (!res.ok) throw new Error('Failed to load research areas');
                const data = await res.json();
                const results = data.results ?? data;
                setAreas(Array.isArray(results) ? results : []);
            } catch (err) {
                console.error(err);
                setAreas([]);
            } finally {
                setLoading(false);
            }
        };
        fetchAreas();
    }, []);

    const handleDemoSubmit = (e) => {
        e.preventDefault();
        if (!demoInput) return;
        setIsPredicting(true);
        setDemoResult(null);
        setTimeout(() => {
            setIsPredicting(false);
            setDemoResult({
                confidence: 89.4 + Math.random() * 10,
                category: demoInput.length > 20 ? 'High Vulnerability' : 'Moderate Vulnerability',
                trend: 'Increasing'
            });
        }, 1500);
    };

    const getImageUrl = (imagePath) => {
        if (!imagePath) return null;
        if (imagePath.startsWith('http')) return imagePath;
        const base = API_BASE.replace(/\/$/, '');
        const path = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
        return `${base}/media${path}`;
    };

    const sortedAreas = [...areas].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
    const ICONS = [<BookOpen />, <Cpu />, <ShieldAlert />, <Globe />];
    const fallbackAreas = [
        { id: 1, title: 'AI & Machine Learning', slug: 'ai-ml', desc: 'Developing intelligent systems for real-time analytics.', image: UNSPLASH_IMAGES[0] },
        { id: 2, title: 'Disaster Analytics', slug: 'disaster-analytics', desc: 'Predicting natural calamities using satellite telemetry.', image: UNSPLASH_IMAGES[1] },
        { id: 3, title: 'Public Safety', slug: 'public-safety', desc: 'Enhancing civil response frameworks via predictive modeling.', image: UNSPLASH_IMAGES[2] },
        { id: 4, title: 'Quantitative Finance', slug: 'finance', desc: 'High-frequency sentiment-based market projections.', image: UNSPLASH_IMAGES[3] },
    ];

    const displayAreas = sortedAreas.length > 0 ? sortedAreas : fallbackAreas;

    return (
        <main style={{ backgroundColor: 'var(--bg-primary, #ffffff)', overflowX: 'hidden' }}>
            <section className="hero-with-bg" style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', backgroundColor: '#000', color: 'white' }}>
                <video autoPlay muted loop playsInline style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }} poster={heroImg}>
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-circuit-board-1510-large.mp4" type="video/mp4" />
                </video>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 100%)' }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <div style={{ maxWidth: '800px' }}>
                        <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mono-label" style={{ color: 'var(--ibm-blue)', backgroundColor: 'rgba(15,98,254,0.1)', padding: '0.5rem 1rem', borderRadius: '4px', display: 'inline-block', marginBottom: '1.5rem', fontWeight: 600 }}>
                            Advancing Intelligence & Resilience
                        </motion.span>
                        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: 1.1, marginBottom: '2rem', letterSpacing: '-0.02em', color: 'white' }}>
                            Predictive Models for a Changing World.
                        </motion.h1>
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} style={{ fontSize: '1.25rem', color: '#c6c6c6', marginBottom: '3rem', lineHeight: 1.6 }}>
                            We synthesize AI, Machine Learning, and Big Data to forge resilient public safety frameworks and advanced statistical forecasting. Look beyond the horizon.
                        </motion.p>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }} style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                            <Link to="/research" className="btn" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>Explore Research</Link>
                            <Link to="/dashboard" className="btn btn-ghost" style={{ fontSize: '1.1rem', padding: '1rem 2rem', color: 'white', borderColor: 'rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Activity size={20} /> Live Insights Dashboard
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* What We Do Section */}
            <section style={{ padding: '6rem 0', backgroundColor: 'var(--ibm-gray-10)' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <span className="mono-label" style={{ color: 'var(--ibm-blue)', marginBottom: '1rem', display: 'inline-block' }}>What We Do</span>
                        <h2 style={{ fontSize: '3rem', lineHeight: 1.2, marginBottom: '1.5rem', color: 'var(--text-primary)' }}>We turn vast complexities into actionable clarity.</h2>
                        <p style={{ fontSize: '1.15rem', color: 'var(--ibm-gray-70)', lineHeight: 1.6, marginBottom: '2rem' }}>
                            From unearthing volatile signals in financial markets to predicting localized flooding up to 48 hours in advance, ProCentric leads in mission-critical algorithmic modeling.
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {['Geospatial Risk Mapping', 'High-Frequency Quantitative Trading', 'Dynamic Public Policy Systems'].map((item, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', fontWeight: 500, color: 'var(--ibm-blue)' }}>
                                    <ArrowRight size={20} /> {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ backgroundColor: '#161616', borderRadius: '12px', padding: '3rem', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(45deg, rgba(15,98,254,0.1) 0%, transparent 100%)' }}></div>
                        <h3 style={{ color: 'white', fontSize: '1.25rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <BarChart2 color="#0f62fe" /> Live Model Telemetry
                        </h3>
                        <div style={{ height: '300px', width: '100%' }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={MOCK_LINE_DATA}>
                                    <Tooltip contentStyle={{ backgroundColor: '#393939', border: 'none', color: 'white', borderRadius: '4px' }} cursor={false} />
                                    <Line type="monotone" dataKey="val" stroke="#0f62fe" strokeWidth={3} dot={false} animationDuration={2000} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2rem' }}>
                            <div style={{ padding: '1rem', backgroundColor: '#262626', borderRadius: '8px' }}>
                                <span style={{ color: '#c6c6c6', fontSize: '0.85rem' }}>Accuracy Rating</span>
                                <div style={{ color: 'white', fontSize: '1.5rem', fontWeight: 600 }}>98.2%</div>
                            </div>
                            <div style={{ padding: '1rem', backgroundColor: '#262626', borderRadius: '8px' }}>
                                <span style={{ color: '#c6c6c6', fontSize: '0.85rem' }}>Anomalies Detected</span>
                                <div style={{ color: '#fa4d56', fontSize: '1.5rem', fontWeight: 600 }}>1,241</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Research Focus Areas Grid */}
            <section style={{ padding: '6rem 0', backgroundColor: 'white' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <span className="mono-label" style={{ color: 'var(--ibm-blue)' }}>Core Research</span>
                        <h2 style={{ fontSize: '3rem', marginTop: '1rem', color: 'var(--text-primary)' }}>Focus Areas</h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                        {displayAreas.map((area, i) => (
                            <Link to={`/research/${area.slug}`} key={area.id || i} style={{ textDecoration: 'none', display: 'block' }}>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                                    style={{ backgroundColor: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.06)', border: '1px solid var(--ibm-gray-20)', height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                                        <motion.img
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.4 }}
                                            src={area.image ? getImageUrl(area.image) : UNSPLASH_IMAGES[i % UNSPLASH_IMAGES.length]}
                                            onError={(e) => { e.target.onerror = null; e.target.src = UNSPLASH_IMAGES[i % UNSPLASH_IMAGES.length]; }}
                                            alt={area.title}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                        <div style={{ position: 'absolute', top: '1rem', left: '1rem', backgroundColor: 'white', padding: '0.5rem', borderRadius: '50%', color: 'var(--ibm-blue)', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                                            {ICONS[i % ICONS.length]}
                                        </div>
                                    </div>
                                    <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>{area.title}</h3>
                                        <p style={{ color: 'var(--ibm-gray-70)', fontSize: '1rem', lineHeight: 1.6, flex: 1 }}>{area.short_description || area.desc}</p>
                                        <div style={{ color: 'var(--ibm-blue)', fontWeight: 600, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.5rem' }}>
                                            Learn More <ArrowRight size={16} />
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* AI Demo Section */}
            <section style={{ padding: '6rem 0', backgroundColor: '#ecececff', color: 'var(--text-primary)' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <span className="mono-label" style={{ backgroundColor: 'var(--ibm-gray-20)', padding: '0.4rem 0.8rem', borderRadius: '4px', marginBottom: '1.5rem', display: 'inline-block' }}>Interactive Demo</span>
                        <h2 style={{ fontSize: '3rem', lineHeight: 1.2, marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Test our NLP Risk Engine in real-time.</h2>
                        <p style={{ fontSize: '1.25rem', opacity: 0.9, lineHeight: 1.6, marginBottom: '2rem' }}>
                            Paste a text clipping—such as a short news paragraph regarding supply chain disruptions or adverse climate events—and witness our proprietary NLP model identify inherent vulnerability risk levels.
                        </p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} style={{ backgroundColor: 'white', color: 'var(--text-primary)', padding: '3rem', borderRadius: '12px', boxShadow: '0 20px 50px rgba(0,0,0,0.2)' }}>
                        <form onSubmit={handleDemoSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'var(--ibm-gray-80)', marginBottom: '0.5rem' }}>Input Context Text</label>
                                <textarea
                                    rows="4"
                                    placeholder="E.g., Severe monsoon flooding has disabled secondary shipping routes leading out of Jakarta's primary industrial sector..."
                                    value={demoInput}
                                    onChange={(e) => setDemoInput(e.target.value)}
                                    style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--ibm-gray-30)', outline: 'none', resize: 'vertical', fontSize: '1rem' }}
                                />
                            </div>
                            <button type="submit" disabled={isPredicting || !demoInput} style={{ backgroundColor: 'var(--ibm-blue)', color: 'white', padding: '1rem', border: 'none', borderRadius: '8px', fontSize: '1.1rem', fontWeight: 600, cursor: (isPredicting || !demoInput) ? 'not-allowed' : 'pointer', opacity: (isPredicting || !demoInput) ? 0.7 : 1 }}>
                                {isPredicting ? 'Analyzing Context...' : 'Run Risk Analysis'}
                            </button>
                        </form>

                        {demoResult && (
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: 'var(--ibm-gray-10)', borderRadius: '8px', border: '1px solid var(--ibm-gray-20)' }}>
                                <h4 style={{ fontSize: '0.9rem', color: 'var(--ibm-gray-60)', margin: '0 0 1rem 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Analysis Results</h4>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div>
                                        <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--ibm-gray-70)' }}>Vulnerability Output</p>
                                        <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600, color: demoResult.category === 'High Vulnerability' ? '#fa4d56' : '#198038' }}>{demoResult.category}</p>
                                    </div>
                                    <div>
                                        <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--ibm-gray-70)' }}>Confidence Rating</p>
                                        <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600, color: 'var(--ibm-blue)' }}>{demoResult.confidence.toFixed(1)}%</p>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default Home;
