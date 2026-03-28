import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Download } from 'lucide-react';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const ResearchAreaDetail = () => {
    const { slug } = useParams();
    const [area, setArea] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    useEffect(() => {
        const fetchArea = async () => {
            if (!slug) return;
            try {
                setLoading(true);
                setError(null);
                const res = await fetch(`${API_BASE}/api/research-areas/${slug}/`);
                if (!res.ok) throw new Error('Research area not found');
                const data = await res.json();
                setArea(data);
            } catch (err) {
                setError(err.message || 'Something went wrong');
                setArea(null);
            } finally {
                setLoading(false);
            }
        };
        fetchArea();
    }, [slug]);

    const getMediaUrl = (path) => {
        if (!path) return null;
        if (path.startsWith('http')) return path;
        const base = API_BASE.replace(/\/$/, '');
        const p = path.startsWith('/') ? path : `/${path}`;
        return `${base}/media${p}`;
    };

    if (loading) {
        return (
            <div className="container section">
                <p>Loading...</p>
            </div>
        );
    }

    if (error || !area) {
        return (
            <div className="container section">
                <h1 className="animate-slide">Research Area Not Found</h1>
                <Link to="/research" style={{ color: 'var(--ibm-blue)', textDecoration: 'none' }}>&larr; Back to Research Areas</Link>
            </div>
        );
    }

    return (
        <div style={{ paddingBottom: '4rem' }}>
            {/* Header Section */}
            <div style={{ backgroundColor: 'var(--ibm-gray-10)', padding: '6rem 0 4rem' }}>
                <div className="container">
                    <Link to="/research" className="mono-label animate-slide" style={{ opacity: 0, color: 'var(--ibm-blue)', textDecoration: 'none', display: 'inline-block', marginBottom: '2rem' }}>
                        &larr; Back to Research Areas
                    </Link>

                    <h1 className="animate-slide delay-2" style={{ opacity: 0, fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.2, marginBottom: '1rem' }}>
                        {area.title}
                    </h1>

                    {area.short_description && (
                        <p className="animate-slide delay-3" style={{ opacity: 0, fontSize: '1.2rem', color: 'var(--ibm-gray-80)', maxWidth: '800px' }}>
                            {area.short_description}
                        </p>
                    )}
                </div>
            </div>

            {/* Content Section */}
            <div className="container" style={{ marginTop: '4rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: area.image ? 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))' : '1fr', gap: '4rem' }}>

                    {/* Main Description */}
                    <div>
                        {area.image && (
                            <div className="animate-slide delay-4" style={{ opacity: 0, marginBottom: '2rem', borderRadius: '4px', overflow: 'hidden' }}>
                                <img
                                    src={getMediaUrl(area.image)}
                                    alt={area.title}
                                    style={{ width: '100%', height: 'auto', display: 'block' }}
                                />
                            </div>
                        )}

                        <div className="animate-slide delay-5" style={{ opacity: 0 }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontWeight: 400 }}>Overview</h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--ibm-gray-80)', whiteSpace: 'pre-wrap' }}>
                                {area.description || area.short_description || ''}
                            </p>
                        </div>
                    </div>

                    {/* Metadata Sidebar */}
                    <div className="animate-slide delay-6" style={{ opacity: 0 }}>
                        <div style={{ backgroundColor: 'white', border: '1px solid var(--ibm-gray-20)', padding: '2rem', borderRadius: '4px' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', fontWeight: 600 }}>Research Area</h3>

                            {area.paper && (
                                <div style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--ibm-gray-10)' }}>
                                    <a
                                        href={getMediaUrl(area.paper)}
                                        download
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn"
                                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', width: '100%', justifyContent: 'center' }}
                                    >
                                        <Download size={18} />
                                        Download Research Paper
                                    </a>
                                </div>
                            )}

                            <div style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--ibm-gray-10)' }}>
                                <div className="mono-label" style={{ color: 'var(--ibm-gray-60)', marginBottom: '0.4rem' }}>Slug</div>
                                <div style={{ fontSize: '1rem' }} className="mono-label">{area.slug}</div>
                            </div>

                            {area.updated_at && (
                                <div>
                                    <div className="mono-label" style={{ color: 'var(--ibm-gray-60)', marginBottom: '0.4rem' }}>Last Updated</div>
                                    <div style={{ fontSize: '1rem' }}>{new Date(area.updated_at).toLocaleDateString()}</div>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ResearchAreaDetail;
