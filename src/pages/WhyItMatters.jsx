import React, { useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Target, ShieldCheck, TrendingDown, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const SAVINGS_DATA = Array.from({ length: 15 }, (_, i) => ({
    year: 2010 + i,
    reactiveCost: Math.floor(1000 + (i * 120) + Math.random() * 200),
    proactiveCost: Math.floor(1000 + (i * 40) + Math.random() * 50)
}));

const WhyItMatters = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh', paddingBottom: '6rem' }}>
            <div style={{ backgroundColor: '#ffffff', padding: '6rem 1rem 4rem 1rem', textAlign: 'center', borderBottom: '1px solid #eaeaea' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#111827', marginBottom: '1rem' }}>Why This Matters</h1>
                    <p style={{ fontSize: '1.25rem', color: '#4b5563', lineHeight: 1.6 }}>
                        Understanding the existential importance of shifting the United States insurance model from reactive compensation to proactive predictive management.
                    </p>
                </div>
            </div>

            <div className="container" style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', gap: '4rem' }}>

                {/* Core Benefits */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {[
                        { title: 'The Importance of Prediction', icon: Target, desc: 'With the intensity and frequency of natural disasters escalating across the USA, standard historical models are obsolete. Predictive analytics allows institutions to brace for impact logically instead of guessing blindly.' },
                        { title: 'Financial Impact on Insurance', icon: Activity, desc: 'Unpredicted extreme events wipe out regional liquidity reserves in weeks. Accurate loss approximations allow corporations to adjust capital pools rapidly, preventing sector-wide financial collapse during peak hurricane and wildfire seasons.' },
                        { title: 'Proactive Risk Management', icon: ShieldCheck, desc: 'Rather than solely paying for devastation, organizations can intelligently incentivize homeowners to reinforce properties in statistically modeled high-risk hotzones, saving overall lives and dollars.' }
                    ].map((item, i) => (
                        <div key={i} style={{ backgroundColor: '#ffffff', padding: '2.5rem', borderRadius: '16px', border: '1px solid #eaeaea', textAlign: 'center' }}>
                            <div style={{ width: '64px', height: '64px', backgroundColor: '#e0e7ff', color: '#0f62fe', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                                <item.icon size={32} />
                            </div>
                            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>{item.title}</h3>
                            <p style={{ color: '#4b5563', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Financial Graph */}
                <div style={{ backgroundColor: '#ffffff', padding: '3rem', borderRadius: '16px', border: '1px solid #eaeaea' }}>
                    <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#111827', marginBottom: '0.5rem' }}>Financial Trajectory (Reactive vs Proactive)</h2>
                    <p style={{ color: '#6b7280', marginBottom: '2rem' }}>Projected industry-wide damages demonstrating the massive variance when ignoring predictive mitigation.</p>
                    <div style={{ width: '100%', height: '400px' }}>
                        <ResponsiveContainer>
                            <AreaChart data={SAVINGS_DATA}>
                                <defs>
                                    <linearGradient id="colorReactive" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#fa4d56" stopOpacity={0.5} />
                                        <stop offset="95%" stopColor="#fa4d56" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorProactive" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#0f62fe" stopOpacity={0.5} />
                                        <stop offset="95%" stopColor="#0f62fe" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="year" stroke="#6b7280" />
                                <YAxis stroke="#6b7280" unit="M$" />
                                <Tooltip contentStyle={{ borderRadius: '8px' }} />
                                <Area type="monotone" dataKey="reactiveCost" name="Reactive Sector Damage" stroke="#fa4d56" strokeWidth={3} fillOpacity={1} fill="url(#colorReactive)" />
                                <Area type="monotone" dataKey="proactiveCost" name="Proactive Protected Exposure" stroke="#0f62fe" strokeWidth={3} fillOpacity={1} fill="url(#colorProactive)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* CTA */}
                <div style={{ backgroundColor: '#111827', color: 'white', padding: '4rem 2rem', borderRadius: '24px', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem' }}>Become part of the solution.</h2>
                    <Link to="/contact" style={{ display: 'inline-block', padding: '1rem 2.5rem', backgroundColor: '#0f62fe', color: 'white', textDecoration: 'none', borderRadius: '8px', fontWeight: 600, fontSize: '1.1rem' }}>Get in Touch</Link>
                </div>

            </div>
        </div>
    );
};

export default WhyItMatters;
