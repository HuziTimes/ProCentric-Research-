import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Calendar, ArrowLeft } from 'lucide-react';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const NewsDetails = () => {
    const { slug } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    useEffect(() => {
        const fetchArticle = async () => {
            if (!slug) return;
            try {
                setLoading(true);
                setError(null);
                const res = await fetch(`${API_BASE}/api/news/${slug}/`);
                if (!res.ok) throw new Error('News article not found');
                const data = await res.json();
                setArticle(data);
            } catch (err) {
                setError(err.message || 'Something went wrong');
                setArticle(null);
            } finally {
                setLoading(false);
            }
        };
        fetchArticle();
    }, [slug]);

    const getImageUrl = (imagePath) => {
        if (!imagePath) return null;
        if (imagePath.startsWith('http')) return imagePath;
        const base = API_BASE.replace(/\/$/, '');
        const path = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
        return `${base}/media${path}`;
    };

    const formatDate = (dateStr) => {
        if (!dateStr) return '';
        return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    };

    if (loading) {
        return (
            <div className="news-detail-page">
                <div className="container" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
                    <p>Loading…</p>
                </div>
            </div>
        );
    }

    if (error || !article) {
        return (
            <div className="news-detail-page">
                <div className="container" style={{ padding: '4rem 2rem' }}>
                    <h1>News Article Not Found</h1>
                    <Link to="/news" className="news-back-link">
                        <ArrowLeft size={16} /> Back to News
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="news-detail-page">
            {/* Hero with featured image */}
            <div className="news-detail-hero">
                {article.image ? (
                    <div className="news-detail-hero-image">
                        <img src={getImageUrl(article.image)} alt={article.title} />
                        <div className="news-detail-hero-overlay" />
                    </div>
                ) : (
                    <div className="news-detail-hero-placeholder" />
                )}
                <div className="news-detail-hero-content">
                    <div className="container">
                        <Link to="/news" className="news-back-link">
                            <ArrowLeft size={16} /> Back to News
                        </Link>
                        <div className="news-detail-meta">
                            <Calendar size={14} />
                            <span>{formatDate(article.date || article.created_at)}</span>
                        </div>
                        <h1 className="news-detail-title">{article.title}</h1>
                        {article.excerpt && (
                            <p className="news-detail-excerpt">{article.excerpt}</p>
                        )}
                    </div>
                </div>
            </div>

            {/* Article content */}
            <div className="news-detail-content">
                <div className="container">
                    <div className="news-detail-grid">
                        <article className="news-detail-article">
                            <div className="news-detail-body">
                                <p className="news-detail-text">
                                    {article.content || article.excerpt || ''}
                                </p>
                            </div>
                        </article>

                        <aside className="news-detail-sidebar">
                            <div className="news-detail-sidebar-card">
                                <h3>Article Info</h3>
                                <div className="news-detail-sidebar-item">
                                    <span className="mono-label">Published</span>
                                    <span>{formatDate(article.date || article.created_at)}</span>
                                </div>
                                {article.updated_at && (
                                    <div className="news-detail-sidebar-item">
                                        <span className="mono-label">Last Updated</span>
                                        <span>{formatDate(article.updated_at)}</span>
                                    </div>
                                )}
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;
