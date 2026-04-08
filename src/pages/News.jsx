import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import DataTerrainBackground from '../components/DataTerrainBackground';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const News = () => {
    const [searchParams] = useSearchParams();
    const q = searchParams.get('search') || searchParams.get('q') || '';
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                setLoading(true);
                setError(null);
                const url = q.trim()
                    ? `${API_BASE}/api/news/?search=${encodeURIComponent(q.trim())}`
                    : `${API_BASE}/api/news/`;
                const res = await fetch(url);
                if (!res.ok) throw new Error('Failed to load news');
                const data = await res.json();
                const results = data.results ?? data;
                setNews(Array.isArray(results) ? results : []);
            } catch (err) {
                setError(err.message || 'Something went wrong');
                setNews([]);
            } finally {
                setLoading(false);
            }
        };
        fetchNews();
    }, []);

    const getImageUrl = (imagePath) => {
        if (!imagePath) return null;
        if (imagePath.startsWith('http')) return imagePath;
        const base = API_BASE.replace(/\/$/, '');
        const path = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
        return `${base}/media${path}`;
    };

    const formatDate = (dateStr) => {
        if (!dateStr) return '';
        return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    };

    if (loading) {
        return (
            <div className="list-page">
                <div style={{ backgroundColor: '#020617', padding: '10rem 0 8rem', textAlign: 'center', borderBottom: '1px solid #1e293b', position: 'relative', overflow: 'hidden', color: 'white' }}>
                    <DataTerrainBackground />
                    <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(15,98,254,0.1) 0%, transparent 70%)', zIndex: 1 }}></div>
                    <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                        <span className="mono-label" style={{ color: '#78a9ff' }}>Updates</span>
                        <h1 style={{ color: 'white', marginBottom: 0, fontSize: '3.5rem', fontWeight: 700 }}>Division News</h1>
                    </div>
                </div>
                <div className="container list-page-content">
                    <div className="list-loading">Loading news…</div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="list-page">
                <div className="list-page-header">
                    <div className="container">
                        <span className="mono-label">Updates</span>
                        <h1>Division News</h1>
                    </div>
                </div>
                <div className="container list-page-content">
                    <div className="list-error">{error}</div>
                </div>
            </div>
        );
    }

    const sortedNews = [...news].sort((a, b) => new Date(b.date || b.created_at) - new Date(a.date || a.created_at));

    return (
        <div className="list-page">
            <div style={{ backgroundColor: '#020617', padding: '10rem 0 8rem', textAlign: 'center', borderBottom: '1px solid #1e293b', position: 'relative', overflow: 'hidden', color: 'white' }}>
                <DataTerrainBackground />
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(15,98,254,0.1) 0%, transparent 70%)', zIndex: 1 }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <span className="mono-label" style={{ color: '#78a9ff' }}>Updates</span>
                    <h1 style={{ color: 'white', marginBottom: 0, fontSize: '3.5rem', fontWeight: 700 }}>Division News</h1>
                    {q && (
                        <p style={{ marginTop: '0.5rem', fontSize: 'var(--font-size-body-compact)', color: '#94a3b8' }}>
                            {news.length} result{news.length !== 1 ? 's' : ''} for "{q}"
                        </p>
                    )}
                </div>
            </div>
            <div className="container list-page-content">
                <div className="news-grid">
                    {sortedNews.map((item) => (
                        <Link key={item.id} to={`/news/${item.slug}`} className="news-card">
                            <div className="news-card-image-wrap">
                                {item.image ? (
                                    <img
                                        src={getImageUrl(item.image)}
                                        alt={item.title}
                                        className="news-card-image"
                                    />
                                ) : (
                                    <div className="news-card-image-placeholder">
                                        <Calendar size={32} strokeWidth={1.5} />
                                    </div>
                                )}
                                <span className="news-card-date">{formatDate(item.date || item.created_at)}</span>
                            </div>
                            <div className="news-card-body">
                                <h3 className="news-card-title">{item.title}</h3>
                                {item.excerpt && (
                                    <p className="news-card-excerpt">{item.excerpt}</p>
                                )}
                                <span className="news-card-link">Read article →</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default News;
