import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import DataTerrainBackground from '../components/DataTerrainBackground';
const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const Search = () => {
    const [searchParams] = useSearchParams();
    const q = searchParams.get('q') || searchParams.get('search') || '';
    const [results, setResults] = useState({ research: [], projects: [], news: [], publications: [] });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const searchAll = async () => {
            if (!q.trim()) {
                setResults({ research: [], projects: [], news: [], publications: [] });
                setLoading(false);
                return;
            }
            try {
                setLoading(true);
                setError(null);
                const term = encodeURIComponent(q.trim());
                const [resResearch, resProjects, resNews, resPubs] = await Promise.all([
                    fetch(`${API_BASE}/api/research-areas/?search=${term}`),
                    fetch(`${API_BASE}/api/projects/?search=${term}`),
                    fetch(`${API_BASE}/api/news/?search=${term}`),
                    fetch(`${API_BASE}/api/publications/?search=${term}`),
                ]);
                const getResults = (r) => {
                    if (!r.ok) return [];
                    return r.json().then((d) => (d.results ?? d) || []);
                };
                const [research, projects, news, publications] = await Promise.all([
                    getResults(resResearch),
                    getResults(resProjects),
                    getResults(resNews),
                    getResults(resPubs),
                ]);
                setResults({
                    research: Array.isArray(research) ? research : [],
                    projects: Array.isArray(projects) ? projects : [],
                    news: Array.isArray(news) ? news : [],
                    publications: Array.isArray(publications) ? publications : [],
                });
            } catch (err) {
                setError(err.message || 'Search failed');
                setResults({ research: [], projects: [], news: [], publications: [] });
            } finally {
                setLoading(false);
            }
        };
        searchAll();
    }, [q]);

    const total = results.research.length + results.projects.length + results.news.length + results.publications.length;

    if (!q.trim()) {
        return (
            <div className="list-page">
            <div style={{ backgroundColor: '#020617', padding: '10rem 0 8rem', textAlign: 'center', borderBottom: '1px solid #1e293b', position: 'relative', overflow: 'hidden', color: 'white' }}>
                <DataTerrainBackground />
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(15,98,254,0.1) 0%, transparent 70%)', zIndex: 1 }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <span className="mono-label" style={{ color: '#78a9ff' }}>Search</span>
                    <h1 style={{ color: 'white', marginBottom: '1rem', fontSize: '3.5rem', fontWeight: 700 }}>Search</h1>
                    <p style={{ marginTop: '0.5rem', color: '#94a3b8' }}>
                        Enter a term in the search bar above to find research areas, projects, news, and publications.
                    </p>
                </div>
            </div>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="list-page">
            <div style={{ backgroundColor: '#020617', padding: '10rem 0 8rem', textAlign: 'center', borderBottom: '1px solid #1e293b', position: 'relative', overflow: 'hidden', color: 'white' }}>
                <DataTerrainBackground />
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(15,98,254,0.1) 0%, transparent 70%)', zIndex: 1 }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <span className="mono-label" style={{ color: '#78a9ff' }}>Search</span>
                    <h1 style={{ color: 'white', marginBottom: 0, fontSize: '3.5rem', fontWeight: 700 }}>Search results for "{q}"</h1>
                </div>
            </div>
                <div className="container list-page-content">
                    <div className="list-loading">Searching…</div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="list-page">
                <div className="list-page-header">
                    <div className="container">
                        <span className="mono-label">Search</span>
                        <h1>Search</h1>
                    </div>
                </div>
                <div className="container list-page-content">
                    <div className="list-error">{error}</div>
                </div>
            </div>
        );
    }

    const Section = ({ title, items, toLink, renderTitle, renderMeta }) => (
        items.length > 0 && (
            <div className="search-section">
                <h2 className="search-section-title">{title}</h2>
                <ul className="search-list">
                    {items.map((item) => (
                        <li key={item.id}>
                            <Link to={toLink(item)} className="search-item">
                                <span className="search-item-title">{renderTitle(item)}</span>
                                {renderMeta && <span className="search-item-meta">{renderMeta(item)}</span>}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    );

    const formatDate = (d) => d ? new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : '';

    return (
        <div className="list-page">
            <div style={{ backgroundColor: '#020617', padding: '10rem 0 8rem', textAlign: 'center', borderBottom: '1px solid #1e293b', position: 'relative', overflow: 'hidden', color: 'white' }}>
                <DataTerrainBackground />
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(15,98,254,0.1) 0%, transparent 70%)', zIndex: 1 }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <span className="mono-label" style={{ color: '#78a9ff' }}>Search</span>
                    <h1 style={{ color: 'white', marginBottom: 0, fontSize: '3.5rem', fontWeight: 700 }}>Search results for "{q}"</h1>
                    <p style={{ marginTop: '0.5rem', fontSize: 'var(--font-size-body-compact)', color: '#94a3b8' }}>
                        {total} result{total !== 1 ? 's' : ''} found
                    </p>
                </div>
            </div>
            <div className="container list-page-content">
                {total === 0 ? (
                    <p style={{ padding: '3rem 0', color: 'var(--text-secondary)' }}>
                        No results found for "{q}". Try different keywords.
                    </p>
                ) : (
                    <>
                        <Section
                            title="Research Areas"
                            items={results.research}
                            toLink={(r) => `/research/${r.slug}`}
                            renderTitle={(r) => r.title}
                            renderMeta={(r) => r.short_description}
                        />
                        <Section
                            title="Projects"
                            items={results.projects}
                            toLink={(r) => `/projects/${r.slug}`}
                            renderTitle={(r) => r.title}
                            renderMeta={(r) => r.short_description}
                        />
                        <Section
                            title="News"
                            items={results.news}
                            toLink={(r) => `/news/${r.slug}`}
                            renderTitle={(r) => r.title}
                            renderMeta={(r) => formatDate(r.date || r.created_at)}
                        />
                        <Section
                            title="Publications"
                            items={results.publications}
                            toLink={(r) => `/publications/${r.id}`}
                            renderTitle={(r) => r.title}
                            renderMeta={(r) => r.authors}
                        />
                    </>
                )}
            </div>
        </div>
    );
};

export default Search;
