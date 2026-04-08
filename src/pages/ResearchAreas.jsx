import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    CloudLightning, BrainCircuit, ShieldAlert, Map,
    DollarSign, Bell, Database, Briefcase, Network, ArrowRight
} from 'lucide-react';
import DataTerrainBackground from '../components/DataTerrainBackground';

const ResearchAreas = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const AREAS = [
        {
            title: 'Natural Disaster Risk Analysis',
            icon: CloudLightning,
            color: '#0f62fe',
            desc: 'We analyze historical disaster patterns across the United States to understand frequency, distribution, and long-term trends. This includes hurricanes, floods, wildfires, and tornadoes.',
            highlights: ['Disaster frequency by region', 'Seasonal patterns', 'Long-term climate trends']
        },
        {
            title: 'Predictive Modeling & ML',
            icon: BrainCircuit,
            color: '#8a3ffc',
            desc: 'Our research leverages advanced machine learning techniques to predict disaster occurrence, estimate severity, and forecast potential impacts.',
            highlights: ['Classification models', 'Regression models (loss estimation)', 'Time-series forecasting']
        },
        {
            title: 'Insurance Risk Modeling',
            icon: ShieldAlert,
            color: '#198038',
            desc: 'We develop data-driven models to assess insurance risk, estimate claim volumes, and project financial losses based on disaster patterns.',
            highlights: ['Claim prediction models', 'Loss estimation', 'Risk-based pricing strategies']
        },
        {
            title: 'Geospatial Risk Mapping',
            icon: Map,
            color: '#0043ce',
            desc: 'Using geospatial analytics, we map disaster risks across the United States to identify high-risk zones and visualize regional vulnerabilities.',
            highlights: ['Risk heatmaps', 'Geographic clustering', 'State-level analysis']
        },
        {
            title: 'Financial Impact Analysis',
            icon: DollarSign,
            color: '#f1c21b',
            desc: 'Our research evaluates the economic impact of disasters, focusing on insurance losses and expansive financial risk exposure.',
            highlights: ['Billion-dollar disaster events', 'Cost trends over time', 'High-loss regions']
        },
        {
            title: 'Early Warning & Forecasting',
            icon: Bell,
            color: '#fa4d56',
            desc: 'We design systems that provide early warnings for potential disasters using predictive analytics, enabling proactive response and preparedness.',
            highlights: ['Short-term risk alerts', 'Seasonal predictions', 'Preventive insights']
        },
        {
            title: 'Data Engineering & Processing',
            icon: Database,
            color: '#393939',
            desc: 'Our models are powered by large-scale datasets including FEMA disaster declarations sourced natively, processed through advanced data pipelines.',
            highlights: ['Data cleaning & preprocessing', 'Feature engineering', 'Dataset integration']
        },
        {
            title: 'Decision Support Systems',
            icon: Briefcase,
            color: '#0f62fe',
            desc: 'We translate complex topological data safely into actionable insights that support massive commercial insurers and policymakers directly in making informed decisions.',
            highlights: ['Premium recommendations', 'Risk scoring systems', 'Strategic planning']
        },
        {
            title: 'Interdisciplinary Work',
            icon: Network,
            color: '#8a3ffc',
            desc: 'Our structural methodology systematically combines raw data science, geographical climate analysis, and insurance algorithms to deliver totally comprehensive risk intelligence.',
            highlights: ['Data science scaling', 'Geographical analytics', 'Insurance statistics']
        }
    ];

    return (
        <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh', paddingBottom: '6rem' }}>

            {/* 1. Page Header */}
            <div style={{ backgroundColor: '#020617', color: 'white', padding: '10rem 1rem 8rem', textAlign: 'center', borderBottom: '1px solid #1e293b', position: 'relative', overflow: 'hidden' }}>
                <DataTerrainBackground />
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at center, rgba(15,98,254,0.15) 0%, transparent 70%)', zIndex: 1 }}></div>
                <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 800, color: 'white', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>Our Research Areas</h1>
                    <p style={{ fontSize: '1.25rem', color: '#94a3b8', lineHeight: 1.6 }}>
                        Focused research domains driving innovation in natural disaster risk assessment and insurance intelligence across the United States.
                    </p>
                </div>
            </div>

            {/* Bold One-Liner */}
            <div style={{ backgroundColor: '#111827', color: 'white', padding: '2.5rem 1rem', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <p style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0, fontStyle: 'italic', letterSpacing: '0.02em', color: "white" }}>
                    “Where data meets disaster intelligence — transforming uncertainty into strategy.”
                </p>
            </div>

            <div className="container" style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', gap: '5rem' }}>

                {/* Grid Layout (Areas 2-10) */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
                    {AREAS.map((area, i) => (
                        <Link to={`/research/${area.title.toLowerCase().replace(/ /g, '-').replace(/&/g, 'and')}`} key={i} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div style={{
                                backgroundColor: '#ffffff',
                                padding: '2.5rem',
                                borderRadius: '16px',
                                border: '1px solid #eaeaea',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                cursor: 'pointer',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.02)'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-8px)';
                                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.08)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.02)';
                                }}>
                                <div style={{ width: '56px', height: '56px', backgroundColor: `${area.color}15`, color: area.color, borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                                    <area.icon size={28} />
                                </div>
                                <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>{area.title}</h2>
                                <p style={{ color: '#4b5563', lineHeight: 1.6, marginBottom: '2rem', flex: 1 }}>{area.desc}</p>

                                <div style={{ borderTop: '1px solid #eaeaea', paddingTop: '1.5rem' }}>
                                    <h4 style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: '#9ca3af', marginBottom: '1rem', letterSpacing: '0.05em' }}>Key Focus</h4>
                                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                        {area.highlights.map((hilite, j) => (
                                            <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                                <div style={{ width: '6px', height: '6px', backgroundColor: area.color, borderRadius: '50%', marginTop: '8px' }}></div>
                                                <span style={{ color: '#374151', fontSize: '0.95rem', fontWeight: 500 }}>{hilite}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Our Research Impact Section */}
                <div style={{ backgroundColor: '#e0e7ff', padding: '4rem', borderRadius: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: '-10%', right: '-5%', opacity: 0.1 }}>
                        <CloudLightning size={400} color="#0f62fe" />
                    </div>
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <div style={{ display: 'inline-block', padding: '0.5rem 1.5rem', backgroundColor: '#0f62fe', color: 'white', borderRadius: '30px', fontWeight: 700, fontSize: '0.9rem', marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
                            OUR RESEARCH IMPACT
                        </div>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#111827', marginBottom: '1.5rem', maxWidth: '800px', margin: '0 auto 1.5rem auto' }}>
                            Redefining Institutional Stability
                        </h2>
                        <p style={{ fontSize: '1.25rem', color: '#4b5563', lineHeight: 1.7, maxWidth: '900px', margin: '0 auto' }}>
                            Our research actively enables massive corporate insurers to shift from a legacy stance of reactive loss handling to a new baseline of <strong>proactive risk management</strong>—fundamentally improving infrastructure resilience and financial stability across the entire United States.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ResearchAreas;
