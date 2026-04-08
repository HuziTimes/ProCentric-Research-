import React from 'react';
import { Database, Link2, ShieldCheck, Info } from 'lucide-react';

const DataAttribution = () => {
    const sources = [
        {
            name: "FEMA (Federal Emergency Management Agency)",
            desc: "Historical natural disaster declarations dataset (1953–Present). Our analysis focuses on 7,000+ unique major disaster events.",
            link: "https://www.fema.gov/openfema-data-page/disaster-declarations-summaries-v2",
            type: "Primary Historical Data"
        },
        {
            name: "Swiss Re & NOAA",
            desc: "Critical metrics on insured losses and event frequency, documenting a ~240% increase in severe US disaster events over the last 20 years.",
            link: "https://www.swissre.com/institute/research/sigma-research.html",
            type: "Industry Loss Analytics"
        },
        {
            name: "NOAA (National Oceanic and Atmospheric Administration)",
            desc: "Meteorological and atmospheric data for hurricane tracking, flood depth recording, and Billion-Dollar Disaster statistics.",
            link: "https://www.ncei.noaa.gov/access/billions/",
            type: "Climate & Weather Data"
        },
        {
            name: "Kaggle Open Data",
            desc: "Aggregated and cleaned versions of FEMA datasets used for initial exploratory data analysis and model training benchmarks.",
            link: "https://www.kaggle.com/",
            type: "Curated Datasets"
        },
        {
            name: "PRPH (Proprietary Risk Analytics Hub)",
            desc: "Internal predictive markers and risk indices derived from ensemble model weights, spatiotemporal clustering, and regional vulnerability scans.",
            link: "#",
            type: "Predictive Analytics Data"
        }
    ];

    return (
        <section style={{ padding: '6rem 0', background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
            <div className="container">
                <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#0f62fe', fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem' }}>
                        <Database size={18} /> Data Integrity
                    </div>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem' }}>Data Sources & Attribution</h2>
                    <p style={{ fontSize: '1.15rem', color: '#64748b', maxWidth: '800px', margin: '0 auto' }}>
                        Our models and insights are powered by authoritative, high-integrity data from federal agencies and professional academic repositories.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                    {sources.map((source, i) => (
                        <div key={i} style={{ background: 'white', padding: '2rem', borderRadius: '20px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', gap: '1.5rem', transition: 'transform 0.2s' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <div style={{ background: '#f0f9ff', color: '#0f62fe', padding: '0.5rem 1rem', borderRadius: '30px', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase' }}>
                                    {source.type}
                                </div>
                                <ShieldCheck size={20} color="#059669" />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' }}>{source.name}</h3>
                                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>{source.desc}</p>
                            </div>
                            {source.link !== "#" && (
                                <a href={source.link} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0f62fe', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', marginTop: 'auto' }}>
                                    Official Source <Link2 size={16} />
                                </a>
                            )}
                            {source.link === "#" && (
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748b', fontWeight: 600, fontSize: '0.9rem', marginTop: 'auto' }}>
                                    <Info size={16} /> Internal Dataset
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '4rem', padding: '2rem', background: '#f1f5f9', borderRadius: '16px', border: '1px solid #e2e8f0', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                    <div style={{ width: '48px', height: '48px', background: '#0f172a', color: 'white', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Database size={24} />
                    </div>
                    <p style={{ margin: 0, fontSize: '1rem', color: '#334155', lineHeight: 1.6 }}>
                        <strong>Transparency Note:</strong> All data utilized in our predictive models is anonymized and adheres to strict US federal guidelines for data privacy and security. Our spatiotemporal indices are refreshed quarterly to ensure maximal accuracy in regional risk mapping.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default DataAttribution;
