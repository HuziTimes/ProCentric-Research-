import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { BookOpen, Cpu, ShieldAlert, Globe } from 'lucide-react';

// Import Assets
import insuranceImg from '../assets/images/insurance_new.png';
import aimlImg from '../assets/images/aiml_new.png';
import safetyImg from '../assets/images/safety_new.png';
import disasterImg from '../assets/images/disaster_new.png';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const ResearchAreas = () => {
    const [searchParams] = useSearchParams();
    const q = searchParams.get('search') || searchParams.get('q') || '';
    const [areas, setAreas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAreas = async () => {
            try {
                setLoading(true);
                setError(null);
                const url = q.trim()
                    ? `${API_BASE}/api/research-areas/?search=${encodeURIComponent(q.trim())}`
                    : `${API_BASE}/api/research-areas/`;
                const res = await fetch(url);
                if (!res.ok) throw new Error('Failed to load research areas');
                const data = await res.json();
                const results = data.results ?? data;
                setAreas(Array.isArray(results) ? results : []);
            } catch (err) {
                setError(err.message || 'Something went wrong');
                setAreas([]);
            } finally {
                setLoading(false);
            }
        };
        fetchAreas();
    }, [q]);

    const getImageUrl = (imagePath) => {
        if (!imagePath) return null;
        if (imagePath.startsWith('http')) return imagePath;
        const base = API_BASE.replace(/\/$/, '');
        const path = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
        return `${base}/media${path}`;
    };

    const sortedAreas = [...areas].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
    const ICONS = [<BookOpen />, <Cpu />, <ShieldAlert />, <Globe />];
    const LOCAL_IMAGES = [insuranceImg, aimlImg, safetyImg, disasterImg];

    if (loading) {
        return (
            <div className="list-page">
                <div className="list-page-header">
                    <div className="container">
                        <span className="mono-label">Areas of Investigation</span>
                        <h1>Research Areas</h1>
                    </div>
                </div>
                <div className="container list-page-content">
                    <div className="list-loading">Loading research areas…</div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="list-page">
                <div className="list-page-header">
                    <div className="container">
                        <span className="mono-label">Areas of Investigation</span>
                        <h1>Research Areas</h1>
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
                    <span className="mono-label">Areas of Investigation</span>
                    <h1>Research Areas</h1>
                    {q && (
                        <p style={{ marginTop: '0.5rem', fontSize: 'var(--font-size-body-compact)', color: 'var(--text-secondary)' }}>
                            {areas.length} result{areas.length !== 1 ? 's' : ''} for "{q}"
                        </p>
                    )}
                </div>
            </div>
            <div className="container list-page-content">
                <div className="section-grid">
                    {sortedAreas.map((area, i) => (
                        <Link to={`/research/${area.slug}`} key={area.id || i} className={`research-card animate-slide delay-${(i % 4) + 1}`} style={{ padding: 0, overflow: 'hidden', opacity: 0 }}>
                            <img
                                src={area.image ? getImageUrl(area.image) : LOCAL_IMAGES[i % LOCAL_IMAGES.length]}
                                alt={area.title}
                                className="card-image"
                            />
                            <div style={{ padding: '1.5rem' }}>
                                <div style={{ color: 'var(--ibm-blue)', marginBottom: '1rem' }}>
                                    {ICONS[i % ICONS.length]}
                                </div>
                                <h3>{area.title}</h3>
                                <p>{area.short_description || area.desc}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ResearchAreas;
