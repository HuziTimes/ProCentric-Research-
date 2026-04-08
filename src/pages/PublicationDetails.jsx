import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DataTerrainBackground from '../components/DataTerrainBackground';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const PublicationDetails = () => {
    const { id } = useParams();
    const [publication, setPublication] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    useEffect(() => {
        const fetchPublication = async () => {
            if (!id) return;
            try {
                setLoading(true);
                setError(null);

                // Handle mock featured publication
                if (id === 'featured-2026') {
                    setPublication({
                        id: 'featured-2026',
                        title: 'Natural Disaster Risk Assessment and Insurance Loss Prediction in the United States',
                        authors: 'Procentric Research Team',
                        year: '2026',
                        venue: 'Technical Report v1.0',
                        abstract: 'This comprehensive study explores the intersection of AI-driven predictive modeling and natural disaster risk assessment. By leveraging over 50 years of FEMA and NOAA data, the research identifies critical vulnerabilities in the US insurance sector and proposes a novel framework for dynamic loss estimation. Key findings suggest that proactive risk mapping can reduce capital exposure by up to 15% during peak catastrophic seasons.',
                        url: '/papers/disaster-risk-assessment-2026.pdf'
                    });
                    setLoading(false);
                    return;
                }

                const res = await fetch(`${API_BASE}/api/publications/${id}/`);
                if (!res.ok) throw new Error('Publication not found');
                const data = await res.json();
                setPublication(data);
            } catch (err) {
                setError(err.message || 'Something went wrong');
                setPublication(null);
            } finally {
                setLoading(false);
            }
        };
        fetchPublication();
    }, [id]);

    if (loading) {
        return (
            <div className="container section">
                <p>Loading…</p>
            </div>
        );
    }

    if (error || !publication) {
        return (
            <div className="container section">
                <h1>Publication Not Found</h1>
                <Link to="/publications" style={{ color: 'var(--ibm-blue)', textDecoration: 'none' }}>&larr; Back to Publications</Link>
            </div>
        );
    }

    return (
        <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', paddingBottom: '6rem' }}>
            {/* Header / Hero Section */}
            <div style={{ 
                backgroundColor: '#020617', 
                padding: '12rem 0 8rem', 
                borderBottom: '1px solid #1e293b', 
                position: 'relative', 
                overflow: 'hidden', 
                color: 'white' 
            }}>
                <DataTerrainBackground />
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(37, 99, 235, 0.1) 0%, transparent 70%)', zIndex: 1 }}></div>
                
                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <Link to="/publications" style={{ 
                        color: '#78a9ff', 
                        textDecoration: 'none', 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        gap: '0.5rem',
                        marginBottom: '3rem',
                        fontWeight: 600,
                        fontSize: '0.95rem',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                    }}>
                        &larr; Scholarly Archive
                    </Link>

                    <div style={{ maxWidth: '900px' }}>
                        <div style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                            {publication.year && (
                                <span style={{ 
                                    backgroundColor: 'rgba(255,255,255,0.05)', 
                                    padding: '0.4rem 1rem', 
                                    border: '1px solid rgba(255,255,255,0.1)', 
                                    borderRadius: '100px', 
                                    color: 'white',
                                    fontSize: '0.85rem',
                                    fontWeight: 700,
                                    letterSpacing: '1px'
                                }}>
                                    CLASS OF {publication.year}
                                </span>
                            )}
                            {publication.venue && (
                                <span style={{ color: '#94a3b8', fontSize: '0.95rem', fontWeight: 600, letterSpacing: '0.5px' }}>
                                    {publication.venue}
                                </span>
                            )}
                        </div>

                        <h1 style={{ 
                            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
                            lineHeight: 1.1, 
                            marginBottom: '2.5rem', 
                            color: 'white',
                            fontWeight: 800,
                            letterSpacing: '-0.03em'
                        }}>
                            {publication.title}
                        </h1>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#cbd5e1' }}>
                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: 'white' }}>
                                {publication.authors?.charAt(0) || 'P'}
                            </div>
                            <div style={{ fontSize: '1.2rem', fontWeight: 500 }}>
                                <span style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#64748b', marginBottom: '0.2rem' }}>Principal Author(s)</span>
                                {publication.authors}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container" style={{ marginTop: '-4rem', position: 'relative', zIndex: 20 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'flex-start' }}>
                    
                    {/* Main Content Area */}
                    <div style={{ background: 'white', padding: '4rem', borderRadius: '32px', boxShadow: '0 20px 50px -10px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
                        <div style={{ marginBottom: '5rem' }}>
                            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', marginBottom: '2rem', letterSpacing: '-0.01em' }}>Project Abstract</h2>
                            <p style={{ fontSize: '1.25rem', lineHeight: 2, color: '#334155', fontWeight: 400, fontStyle: 'italic' }}>
                                "{publication.abstract || 'The abstract is currently being finalized for digital distribution.'}"
                            </p>
                        </div>

                        <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '4rem' }}>
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#0f172a', marginBottom: '1.5rem' }}>Key Research Objectives</h3>
                            <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                                {[
                                    'Quantification of catastrophe-driven risk matrices.',
                                    'Optimization of insurance liquidity response models.',
                                    'Cross-validation with historical geospatial disaster data.'
                                ].map((obj, i) => (
                                    <li key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center', color: '#475569', fontSize: '1.1rem' }}>
                                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#2563eb' }} />
                                        {obj}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Sidebar / Metadata */}
                    <div style={{ position: 'sticky', top: '100px' }}>
                        <div style={{ backgroundColor: '#0f172a', padding: '3rem', borderRadius: '32px', color: 'white', boxShadow: '0 30px 60px -15px rgba(15, 23, 42, 0.2)' }}>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '2.5rem', fontWeight: 700, color: 'white', borderLeft: '4px solid #2563eb', paddingLeft: '1.5rem' }}>Document Index</h3>
                            
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                                {[
                                    { label: 'Release Date', val: publication.year || 'Projected 2026' },
                                    { label: 'Journal/Venue', val: publication.venue || 'Technical Report' },
                                    { label: 'Document Type', val: 'Scholarly Article' }
                                ].map((item, i) => (
                                    <div key={i}>
                                        <div style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.5rem' }}>{item.label}</div>
                                        <div style={{ fontSize: '1.1rem', color: '#f8fafc', fontWeight: 600 }}>{item.val}</div>
                                    </div>
                                ))}

                                {publication.url && (
                                    <div style={{ paddingTop: '1rem' }}>
                                        <a 
                                            href={publication.url} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            style={{ 
                                                display: 'flex', 
                                                alignItems: 'center', 
                                                justifyContent: 'center',
                                                gap: '0.8rem',
                                                padding: '1.2rem',
                                                backgroundColor: '#2563eb',
                                                color: 'white',
                                                borderRadius: '16px',
                                                fontWeight: 700,
                                                textDecoration: 'none',
                                                transition: 'all 0.3s',
                                                fontSize: '1rem'
                                            }}
                                            onMouseOver={e => e.currentTarget.style.backgroundColor = '#1d4ed8'}
                                            onMouseOut={e => e.currentTarget.style.backgroundColor = '#2563eb'}
                                        >
                                            Secure Access (PDF) &rarr;
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div style={{ marginTop: '2rem', padding: '2rem', borderRadius: '24px', border: '1px dashed #cbd5e1', textAlign: 'center' }}>
                            <p style={{ fontSize: '0.9rem', color: '#64748b', margin: 0, fontWeight: 500 }}>
                                Need a specialized citation format? <br />
                                <span style={{ color: '#2563eb', cursor: 'pointer', fontWeight: 600 }}>Contact support</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PublicationDetails;
