import { FileText, Award, ExternalLink } from 'lucide-react';

const Evidence = () => (
    <div className="container section">
        <span className="mono-label animate-slide" style={{ opacity: 0 }}>Recognition</span>
        <h1 className="animate-slide delay-1" style={{ opacity: 0 }}>Evidence of Excellence</h1>
        <p className="mb-4 animate-slide delay-2" style={{ opacity: 0 }}>Documenting institutional impact, citations, and professional recognition for EB2-NIW and academic review.</p>
        <div className="section-grid">
            {[
                { title: 'Institutional Collaborations', icon: <FileText />, desc: 'Documentation of partnerships with leading universities and safety organizations.' },
                { title: 'Peer Recognition', icon: <Award />, desc: 'Reviewer roles, board memberships, and scholarly impact metrics.' },
                { title: 'Public Citations', icon: <ExternalLink />, desc: 'Mentions and implementation of research in public policy documents.' }
            ].map((item, i) => (
                <div key={i} className={`research-card animate-slide delay-${i + 2}`} style={{ opacity: 0 }}>
                    <div style={{ color: 'var(--ibm-blue)', marginBottom: '1rem' }}>{item.icon}</div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                </div>
            ))}
        </div>
    </div>
);

export default Evidence;
