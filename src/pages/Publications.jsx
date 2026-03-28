import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const Publications = () => {
    const [searchParams] = useSearchParams();
    const q = searchParams.get('search') || searchParams.get('q') || '';
    const [publications, setPublications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPublications = async () => {
            try {
                setLoading(true);
                setError(null);
                const url = q.trim()
                    ? `${API_BASE}/api/publications/?search=${encodeURIComponent(q.trim())}`
                    : `${API_BASE}/api/publications/`;
                const res = await fetch(url);
                if (!res.ok) throw new Error('Failed to load publications');
                const data = await res.json();
                const results = data.results ?? data;
                setPublications(Array.isArray(results) ? results : []);
            } catch (err) {
                setError(err.message || 'Something went wrong');
                setPublications([]);
            } finally {
                setLoading(false);
            }
        };
        fetchPublications();
    }, [q]);

    if (loading) {
        return (
            <div className="list-page">
                <div className="list-page-header">
                    <div className="container">
                        <span className="mono-label">Scholarly Output</span>
                        <h1>Publications & Papers</h1>
                    </div>
                </div>
                <div className="container list-page-content">
                    <div className="list-loading">Loading publications…</div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="list-page">
                <div className="list-page-header">
                    <div className="container">
                        <span className="mono-label">Scholarly Output</span>
                        <h1>Publications & Papers</h1>
                    </div>
                </div>
                <div className="container list-page-content">
                    <div className="list-error">{error}</div>
                </div>
            </div>
        );
    }

    return (
        <div className="list-page">
            <div className="list-page-header">
                <div className="container">
                    <span className="mono-label">Scholarly Output</span>
                    <h1>Publications & Papers</h1>
                    {q && (
                        <p style={{ marginTop: '0.5rem', fontSize: 'var(--font-size-body-compact)', color: 'var(--text-secondary)' }}>
                            {publications.length} result{publications.length !== 1 ? 's' : ''} for "{q}"
                        </p>
                    )}
                </div>
            </div>
            <div className="container list-page-content">
                <div style={{ borderTop: '1px solid var(--ibm-gray-20)' }}>
                    {publications.length === 0 ? (
                        <p style={{ padding: '3rem 0', color: 'var(--text-secondary)' }}>No publications found.</p>
                    ) : (
                        publications.map((pub) => (
                            <Link
                                key={pub.id}
                                to={`/publications/${pub.id}`}
                                className="list-row"
                            >
                                <span className="list-row-date">{pub.year || '—'}</span>
                                <div>
                                    <h3 className="list-row-title">{pub.title}</h3>
                                    <p className="list-card-desc" style={{ marginTop: '0.25rem', marginBottom: 0 }}>
                                        {pub.authors}
                                    </p>
                                </div>
                                <span className="list-row-arrow" style={{ fontStyle: 'italic', fontSize: 'var(--font-size-body-compact)' }}>
                                    {pub.venue || 'View'}
                                </span>
                            </Link>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Publications;
