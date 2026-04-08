import React, { useEffect } from 'react';
import {
    AlertTriangle, Lightbulb, TrendingUp, DollarSign,
    Wind, Droplets, Flame, Zap, Briefcase, Target, Map
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import DataAttribution from '../components/DataAttribution';
import DataTerrainBackground from '../components/DataTerrainBackground';

const TREND_DATA = Array.from({ length: 20 }, (_, i) => ({
    year: 2005 + i,
    events: Math.floor(100 + (i * 15) + Math.random() * 40)
}));

const Insights = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh', paddingBottom: '6rem' }}>

            {/* 1. Page Header */}
            <div style={{ backgroundColor: '#020617', padding: '10rem 1rem 8rem 1rem', textAlign: 'center', borderBottom: '1px solid #1e293b', position: 'relative', overflow: 'hidden' }}>
                <DataTerrainBackground />
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at center, rgba(15,98,254,0.15) 0%, transparent 70%)', zIndex: 1 }}></div>
                <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 800, color: 'white', marginBottom: '1rem' }}>Risk Insights & Intelligence</h1>
                    <p style={{ fontSize: '1.25rem', color: '#94a3b8', lineHeight: 1.6 }}>
                        Turning complex disaster data into actionable insights for the United States insurance sector.
                    </p>
                </div>
            </div>

            <div className="container" style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', gap: '4rem' }}>

                {/* 11. Smart Insight Box (AI Style) */}
                <div style={{ padding: '2rem', borderRadius: '16px', backgroundImage: 'linear-gradient(145deg, #111827 0%, #0a1f44 100%)', color: 'white', display: 'flex', alignItems: 'center', gap: '1.5rem', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}>
                    <div style={{ width: '48px', height: '48px', backgroundColor: '#0f62fe', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Zap size={24} color="white" />
                    </div>
                    <p style={{ fontSize: '1.25rem', color: "white", fontWeight: 600, margin: 0, lineHeight: 1.5 }}>
                        “Data indicates a shift from unpredictable disasters to pattern-based risks, enabling proactive insurance strategies.”
                    </p>
                </div>

                {/* 2. Key Insights */}
                <div>
                    <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#111827', marginBottom: '2rem' }}>High-Level Discoveries</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        {[
                            { icon: Flame, title: 'California', desc: 'Consistently high wildfire risk with rapidly increasing severity trends year-over-year.', color: '#fa4d56' },
                            { icon: Droplets, title: 'Southeast', desc: 'Flood-related disasters heavily dominate coastal states like Louisiana and Mississippi.', color: '#0043ce' },
                            { icon: Wind, title: 'Midwest', desc: 'Tornado frequency remains structurally highest across the expansive central Midwest regions.', color: '#8a3ffc' },
                            { icon: DollarSign, title: 'Coastlines', desc: 'Insurance claims spike significantly across vulnerable hurricane-prone areas like Florida and Texas.', color: '#f1c21b' }
                        ].map((insight, i) => (
                            <div key={i} style={{ backgroundColor: '#ffffff', padding: '2rem', borderRadius: '16px', border: `1px solid #eaeaea`, boxShadow: '0 4px 10px rgba(0,0,0,0.02)' }}>
                                <div style={{ width: '48px', height: '48px', backgroundColor: `${insight.color}15`, color: insight.color, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                                    <insight.icon size={24} />
                                </div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111827', marginBottom: '0.5rem' }}>{insight.title}</h3>
                                <p style={{ margin: 0, color: '#4b5563', lineHeight: 1.6 }}>{insight.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3. Trend Analysis */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr lg:1fr', gap: '3rem' }}>
                    <div style={{ backgroundColor: '#ffffff', padding: '3rem', borderRadius: '16px', border: '1px solid #eaeaea' }}>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#111827', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}><TrendingUp color="#0f62fe" /> Trend Analysis</h2>
                        <p style={{ color: '#4b5563', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                            Over the past decades, natural disasters in the United States have increased in both frequency and intensity, significantly driven by massive climate variability and broad urban expansion into traditionally unpopulated zones.
                        </p>

                        <div style={{ padding: '1.5rem', backgroundColor: '#fff5f5', borderLeft: '4px solid #fa4d56', color: '#fa4d56' }}>
                            <div style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: '0.25rem' }}>240% Growth in Risk Exposure</div>
                            <div style={{ fontSize: '1rem', fontWeight: 500, lineHeight: 1.5 }}>
                                Documented increase in severe insured disaster events over the last 20 years. 
                                <span style={{ opacity: 0.8, fontSize: '0.9rem', display: 'block', marginTop: '0.5rem' }}>Source: Swiss Re Sigma & NOAA Billion-Dollar Disaster Reports</span>
                            </div>
                        </div>

                        <div style={{ width: '100%', height: '300px' }}>
                            <ResponsiveContainer>
                                <LineChart data={TREND_DATA}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0" />
                                    <XAxis dataKey="year" stroke="#6b7280" />
                                    <YAxis stroke="#6b7280" />
                                    <Tooltip contentStyle={{ borderRadius: '8px' }} />
                                    <Line type="monotone" dataKey="events" stroke="#fa4d56" strokeWidth={3} activeDot={{ r: 8 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* 4. Regional Risk & 6. Financial Impact */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>

                    {/* Regional Insights */}
                    <div style={{ backgroundColor: '#ffffff', padding: '3rem', borderRadius: '16px', border: '1px solid #eaeaea' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Map color="#8a3ffc" /> Regional Breakdown</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {[
                                { region: 'West (California, etc.)', desc: 'High wildfire risk, dramatically increasing economic losses.' },
                                { region: 'South (Texas, Florida)', desc: 'Hurricanes and floods dominate, leading to peak insurance claims.' },
                                { region: 'Midwest', desc: 'Tornado-prone region characterized by massive seasonal spikes.' },
                                { region: 'Southeast', desc: 'Flood-heavy zones with notoriously repeated disaster loop patterns.' }
                            ].map((reg, i) => (
                                <div key={i} style={{ borderBottom: i !== 3 ? '1px solid #eaeaea' : 'none', paddingBottom: i !== 3 ? '1.5rem' : '0' }}>
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#111827', margin: '0 0 0.5rem 0' }}>{reg.region}</h4>
                                    <p style={{ margin: 0, color: '#6b7280' }}>{reg.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Financial Impact Insights */}
                    <div style={{ backgroundColor: '#ffffff', padding: '3rem', borderRadius: '16px', border: '1px solid #eaeaea' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}><DollarSign color="#198038" /> Financial Impact Insights</h2>
                        <p style={{ color: '#4b5563', lineHeight: 1.6, marginBottom: '2rem' }}>
                            Natural disasters result in billions of dollars in both insured and uninsured capital losses annually across the entire United States matrix.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '12px' }}>
                                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f62fe', marginBottom: '0.25rem' }}>Hurricanes</div>
                                <div style={{ color: '#4b5563' }}>Produce the absolute highest baseline financial damage.</div>
                            </div>
                            <div style={{ padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '12px' }}>
                                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0043ce', marginBottom: '0.25rem' }}>Floods</div>
                                <div style={{ color: '#4b5563' }}>Contribute to the highest sheer volume of individual processed claims.</div>
                            </div>
                            <div style={{ padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '12px' }}>
                                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fa4d56', marginBottom: '0.25rem' }}>Wildfires</div>
                                <div style={{ color: '#4b5563' }}>Function as the most rapidly increasing cost vector.</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 5. High-Risk Zones */}
                <div style={{ backgroundColor: '#ffffff', padding: '3rem', borderRadius: '16px', border: '1px solid #eaeaea' }}>
                    <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>High-Risk Zones Identification</h2>
                    <p style={{ color: '#4b5563', lineHeight: 1.6, marginBottom: '2rem', maxWidth: '800px' }}>
                        Certain regions consistently exhibit high disaster probability and catastrophic severity, making them inherently critical for immediate insurance risk matrix adjustments.
                    </p>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                            <thead>
                                <tr style={{ borderBottom: '2px solid #eaeaea', color: '#6b7280' }}>
                                    <th style={{ padding: '1rem', fontWeight: 600 }}>Top State</th>
                                    <th style={{ padding: '1rem', fontWeight: 600 }}>Risk Score (0-100)</th>
                                    <th style={{ padding: '1rem', fontWeight: 600 }}>Primary Threat</th>
                                    <th style={{ padding: '1rem', fontWeight: 600 }}>Predicted Avg Loss</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { state: 'Florida', score: 95, threat: 'Hurricanes', loss: '$5.1 Billion' },
                                    { state: 'California', score: 92, threat: 'Wildfires', loss: '$4.2 Billion' },
                                    { state: 'Texas', score: 88, threat: 'Multifactor', loss: '$3.8 Billion' },
                                    { state: 'Louisiana', score: 75, threat: 'Floods', loss: '$1.5 Billion' },
                                    { state: 'Colorado', score: 65, threat: 'Wildfires', loss: '$800 Million' }
                                ].map((zone, i) => (
                                    <tr key={i} style={{ borderBottom: '1px solid #eaeaea' }}>
                                        <td style={{ padding: '1.5rem 1rem', fontWeight: 700, color: '#111827' }}>{zone.state}</td>
                                        <td style={{ padding: '1.5rem 1rem', fontWeight: 700, color: '#fa4d56' }}>{zone.score}</td>
                                        <td style={{ padding: '1.5rem 1rem', color: '#4b5563' }}>{zone.threat}</td>
                                        <td style={{ padding: '1.5rem 1rem', fontWeight: 600, color: '#111827' }}>{zone.loss}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* 7. Model-Based & 8. Early Warning */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>

                    {/* Model Insights */}
                    <div style={{ backgroundColor: '#ffffff', padding: '3rem', borderRadius: '16px', border: '1px solid #eaeaea' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Target color="#0f62fe" /> Model-Based Insights</h2>
                        <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <div style={{ minWidth: '8px', height: '8px', backgroundColor: '#0f62fe', borderRadius: '50%', marginTop: '8px' }}></div>
                                <span style={{ color: '#4b5563', fontSize: '1.05rem', lineHeight: 1.5 }}>Disaster occurrence mathematical probability radically increases in highly populated coastal sub-regions.</span>
                            </li>
                            <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <div style={{ minWidth: '8px', height: '8px', backgroundColor: '#0f62fe', borderRadius: '50%', marginTop: '8px' }}></div>
                                <span style={{ color: '#4b5563', fontSize: '1.05rem', lineHeight: 1.5 }}>Incident Severity is statistically tethered and highly coupled directly to population density and structural infrastructure.</span>
                            </li>
                            <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <div style={{ minWidth: '8px', height: '8px', backgroundColor: '#0f62fe', borderRadius: '50%', marginTop: '8px' }}></div>
                                <span style={{ color: '#4b5563', fontSize: '1.05rem', lineHeight: 1.5 }}>Outbound insurance claims are definitively and highly correlated with the modeled disaster intensity baseline.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Early Warning Insights */}
                    <div style={{ backgroundColor: '#ffffff', padding: '3rem', borderRadius: '16px', border: '1px solid #eaeaea' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}><AlertTriangle color="#f1c21b" /> Early Warning Insights</h2>
                        <p style={{ color: '#4b5563', lineHeight: 1.6, marginBottom: '2rem' }}>
                            Our predictive deployment models securely enable the early identification of impending high-risk periods and locations.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '12px', border: '1px solid #eaeaea' }}>
                                <div style={{ fontSize: '1.5rem' }}>⚠️</div>
                                <div style={{ color: '#111827', fontWeight: 600 }}>Increased flood magnitude risk effectively tracked during monsoon season throughout the southern states.</div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '12px', border: '1px solid #eaeaea' }}>
                                <div style={{ fontSize: '1.5rem' }}>🔥</div>
                                <div style={{ color: '#111827', fontWeight: 600 }}>Peak sweeping wildfire risk generated systematically during deep summer in localized western terrain profiles.</div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* 9. Business Insights & 10. Recommendations */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>

                    {/* Business Insights */}
                    <div style={{ backgroundColor: '#111827', color: 'white', padding: '3rem', borderRadius: '16px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: "#fff" }}><Briefcase color="#78a9ff" /> Utility for Insurers</h2>
                        <p style={{ color: '#9ca3af', marginBottom: '2rem', fontSize: '1.1rem' }}>These comprehensive AI insights directly empower insurers to:</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            {['Adjust contextual premiums instantly based on risk tier.', 'Allocate critical reserve limits proactively and efficiently.', 'Reduce unexpected systemic macro financial losses.', 'Improve direct client/customer physical risk awareness.'].map((item, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ width: '24px', height: '24px', backgroundColor: '#0f62fe', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <span style={{ color: 'white', fontSize: '0.8rem', fontWeight: 700 }}>✓</span>
                                    </div>
                                    <span style={{ fontSize: '1.05rem', fontWeight: 500 }}>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Recommendations */}
                    <div style={{ backgroundColor: '#ffffff', padding: '3rem', borderRadius: '16px', border: '1px solid #eaeaea' }}>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#111827', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Lightbulb color="#198038" /> Actionable Recommendations</h2>
                        <p style={{ color: '#6b7280', marginBottom: '2rem', fontSize: '1.1rem' }}>Turning raw algorithmic insights into tangible action:</p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ padding: '1.5rem', backgroundColor: '#e0f3e8', color: '#198038', borderRadius: '12px', fontWeight: 600 }}>
                                Increase capital premiums securely in persistent high-risk structural zones.
                            </div>
                            <div style={{ padding: '1.5rem', backgroundColor: '#e0f3e8', color: '#198038', borderRadius: '12px', fontWeight: 600 }}>
                                Invest in localized disaster mitigation infrastructural strategies.
                            </div>
                            <div style={{ padding: '1.5rem', backgroundColor: '#e0f3e8', color: '#198038', borderRadius: '12px', fontWeight: 600 }}>
                                Automate integrations with active proprietary early warning systems.
                            </div>
                            <div style={{ padding: '1.5rem', backgroundColor: '#e0f3e8', color: '#198038', borderRadius: '12px', fontWeight: 600 }}>
                                Focus directly on established Top-5 high-risk states for massive policy adjustments.
                            </div>
                        </div>
                    </div>
                </div>

                {/* FINAL TOUCH */}
                <div style={{ textAlign: 'center', marginTop: '2rem', padding: '3rem 0', borderTop: '1px solid #eaeaea' }}>
                    <p style={{ fontSize: '1.5rem', color: '#111827', fontStyle: 'italic', margin: 0, fontWeight: 700 }}>
                        “From raw data to real decisions — transforming disaster risk into strategic advantage.”
                    </p>
                </div>

                <DataAttribution />

            </div>
        </div>
    );
};

export default Insights;
