import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

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
        <div style={{ paddingBottom: '4rem' }}>
            <div style={{ backgroundColor: 'var(--ibm-gray-10)', padding: '6rem 0 4rem' }}>
                <div className="container">
                    <Link to="/publications" className="mono-label" style={{ color: 'var(--ibm-blue)', textDecoration: 'none', display: 'inline-block', marginBottom: '2rem' }}>
                        &larr; Back to Publications
                    </Link>
                    <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                        {publication.year && (
                            <span className="mono-label" style={{ backgroundColor: 'white', padding: '0.25rem 0.5rem', border: '1px solid var(--ibm-gray-20)', borderRadius: '4px' }}>
                                {publication.year}
                            </span>
                        )}
                        {publication.venue && (
                            <span className="mono-label" style={{ color: 'var(--ibm-gray-60)' }}>
                                {publication.venue}
                            </span>
                        )}
                    </div>
                    <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.2, marginBottom: '2rem' }}>
                        {publication.title}
                    </h1>
                    <div style={{ fontSize: '1.1rem', color: 'var(--ibm-gray-80)' }}>
                        <span className="mono-label" style={{ marginRight: '1rem', color: 'var(--ibm-gray-60)' }}>Authors:</span>
                        {publication.authors}
                    </div>
                </div>
            </div>

            <div className="container" style={{ marginTop: '4rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: '4rem' }}>
                    <div>
                        <div style={{ marginBottom: '4rem' }}>
                            <h2 style={{ fontSize: 'var(--font-size-heading-2)', marginBottom: '1.5rem', fontWeight: 400 }}>Abstract & Overview</h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--ibm-gray-80)' }}>
                                {publication.abstract || 'No abstract available.'}
                            </p>
                        </div>
                    </div>

                    <div>
                        <div style={{ backgroundColor: 'white', border: '1px solid var(--ibm-gray-20)', padding: '2rem', borderRadius: '4px' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', fontWeight: 600 }}>Publication Details</h3>
                            {publication.year && (
                                <div style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--ibm-gray-10)' }}>
                                    <div className="mono-label" style={{ color: 'var(--ibm-gray-60)', marginBottom: '0.4rem' }}>Year</div>
                                    <div style={{ fontSize: '1rem' }}>{publication.year}</div>
                                </div>
                            )}
                            {publication.venue && (
                                <div style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--ibm-gray-10)' }}>
                                    <div className="mono-label" style={{ color: 'var(--ibm-gray-60)', marginBottom: '0.4rem' }}>Venue</div>
                                    <div style={{ fontSize: '1rem' }}>{publication.venue}</div>
                                </div>
                            )}
                            {publication.url && (
                                <div>
                                    <div className="mono-label" style={{ color: 'var(--ibm-gray-60)', marginBottom: '0.4rem' }}>Link</div>
                                    <a href={publication.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: '1rem', color: 'var(--ibm-blue)', wordBreak: 'break-all' }}>
                                        {publication.url}
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PublicationDetails;
