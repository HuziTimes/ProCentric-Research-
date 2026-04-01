import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, Database, Globe, ArrowRight, Activity, TrendingUp } from 'lucide-react';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

            {/* Hero Section */}
            <div style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#0a0a0a', color: 'white', padding: '8rem 1rem 6rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {/* Visual Banner Background */}
                <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                    backgroundImage: 'url("https://images.unsplash.com/photo-1542382103-9d107a67e45d?auto=format&fit=crop&q=80")',
                    backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.25, zIndex: 0
                }}></div>
                <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                    background: 'linear-gradient(to bottom, transparent, #0a0a0a)', zIndex: 1
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(15, 98, 254, 0.15)', color: '#78a9ff', padding: '0.5rem 1rem', borderRadius: '4px', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '1.5rem', border: '1px solid rgba(15, 98, 254, 0.3)' }}>
                        <Globe size={16} /> NATIONAL RESEARCH INITIATIVE
                    </div>

                    <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', maxWidth: '1000px', margin: '0 auto' }}>
                        AI-Powered Natural Disaster Risk Intelligence for the United States.
                    </h1>

                    <p style={{ fontSize: '1.25rem', color: '#a8a8a8', maxWidth: '800px', margin: '1.5rem auto 3rem auto', lineHeight: 1.6 }}>
                        This platform leverages advanced predictive modeling and historical FEMA data to forecast disasters, estimate insurance losses, and optimize risk-based decision-making.
                    </p>

                    {/* CTAs */}
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/dashboard" style={{
                            padding: '1rem 2rem', backgroundColor: '#0f62fe', color: 'white', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.2s'
                        }}>
                            Explore Dashboard <ArrowRight size={20} />
                        </Link>
                        <Link to="/modeling" style={{
                            padding: '1rem 2rem', backgroundColor: 'transparent', color: 'white', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '1.1rem', border: '1px solid rgba(255,255,255,0.2)', transition: 'all 0.2s'
                        }}>
                            View Models
                        </Link>
                    </div>
                </div>
            </div>

            {/* Key Stats Section */}
            <div style={{ backgroundColor: '#ffffff', padding: '4rem 1rem', borderBottom: '1px solid #eaeaea' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', textAlign: 'center' }}>
                        {[
                            { value: '50+ Years', label: 'US Disaster Data Coverage', icon: Database },
                            { value: '1,000+', label: 'Counties Analyzed', icon: Globe },
                            { value: '94.2%', label: 'Classification Accuracy', icon: ShieldAlert },
                            { value: '$14B+', label: 'Loss Forecasting Capability', icon: TrendingUp }
                        ].map((stat, i) => (
                            <div key={i} style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div style={{ width: '48px', height: '48px', backgroundColor: '#e0e7ff', color: '#0f62fe', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                                    <stat.icon size={24} />
                                </div>
                                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#111827', marginBottom: '0.5rem' }}>{stat.value}</div>
                                <div style={{ color: '#6b7280', fontSize: '1rem', fontWeight: 500 }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Platform Intro Grid */}
            <div className="container" style={{ padding: '6rem 1rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#111827', marginBottom: '1rem' }}>Comprehensive Data Hub</h2>
                    <p style={{ fontSize: '1.2rem', color: '#6b7280', maxWidth: '700px', margin: '0 auto' }}>Navigate through our distinct research sections to fully comprehend the scale of localized risk intelligence.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {[
                        { title: 'Overview & Trends', desc: 'Regional vulnerability plotting natively aggregated across historical occurrences.', link: '/overview', text: 'View Overview' },
                        { title: 'Interactive Dashboard', desc: 'Access real-time matrices and live geospatial datasets instantly.', link: '/dashboard', text: 'Open Dashboard' },
                        { title: 'Model Evaluation', desc: 'Review precision, recall, and regression matrices validating our algorithms.', link: '/evaluation', text: 'See Metrics' },
                        { title: 'Insurance Insights', desc: 'Financial implications, actual alert monitoring, and capital allocations.', link: '/insights', text: 'View Insights' },
                        { title: 'Methodology', desc: 'Raw underlying process data tracking FEMA datasets to algorithmic processing.', link: '/methodology', text: 'Read Methods' },
                        { title: 'Why it Matters', desc: 'The catastrophic financial reasoning dictating necessity for proactive intelligence.', link: '/why-it-matters', text: 'Explore Reasoning' }
                    ].map((card, i) => (
                        <div key={i} style={{ padding: '2rem', borderRadius: '16px', border: '1px solid #eaeaea', backgroundColor: '#f9fafb', display: 'flex', flexDirection: 'column' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111827', marginBottom: '0.5rem' }}>{card.title}</h3>
                            <p style={{ color: '#4b5563', lineHeight: 1.6, flex: 1 }}>{card.desc}</p>
                            <Link to={card.link} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#0f62fe', fontWeight: 600, textDecoration: 'none', marginTop: '1.5rem' }}>
                                {card.text} <ArrowRight size={16} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Home;
