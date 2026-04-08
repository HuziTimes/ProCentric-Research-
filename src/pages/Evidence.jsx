import { FileText, Award, ExternalLink } from 'lucide-react';
import DataTerrainBackground from '../components/DataTerrainBackground';

const Evidence = () => (
    <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh', paddingBottom: '6rem' }}>
        <div style={{ backgroundColor: '#020617', padding: '10rem 0 8rem', textAlign: 'center', borderBottom: '1px solid #1e293b', position: 'relative', overflow: 'hidden', color: 'white' }}>
            <DataTerrainBackground />
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(15,98,254,0.1) 0%, transparent 70%)', zIndex: 1 }}></div>
            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <span className="mono-label" style={{ color: '#78a9ff' }}>Recognition</span>
                <h1 style={{ color: 'white', marginBottom: '1rem', fontSize: '3.5rem', fontWeight: 700 }}>Evidence of Excellence</h1>
                <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', color: '#94a3b8' }}>
                    Documenting institutional impact, citations, and professional recognition for academic and professional excellence.
                </p>
            </div>
        </div>

        <div className="container" style={{ marginTop: '4rem' }}>
            <div className="section-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {[
                    { title: 'Institutional Collaborations', icon: <FileText size={32} />, desc: 'Documentation of partnerships with leading universities and safety organizations.' },
                    { title: 'Peer Recognition', icon: <Award size={32} />, desc: 'Reviewer roles, board memberships, and scholarly impact metrics.' },
                    { title: 'Public Citations', icon: <ExternalLink size={32} />, desc: 'Mentions and implementation of research in public policy documents.' }
                ].map((item, i) => (
                    <div key={i} className="research-card" style={{ backgroundColor: 'white', padding: '2.5rem', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
                        <div style={{ color: '#0f62fe', marginBottom: '1.5rem' }}>{item.icon}</div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: '#0f172a' }}>{item.title}</h3>
                        <p style={{ color: '#475569', lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default Evidence;
