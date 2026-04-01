import React, { useEffect } from 'react';
import { ScatterChart, Scatter, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ZAxis } from 'recharts';
import { Target, Activity, Shield } from 'lucide-react';

const HEATMAP_DATA = Array.from({ length: 150 }, () => ({
    x: Math.floor(Math.random() * 100),
    y: Math.floor(Math.random() * 100),
    z: Math.floor(Math.random() * 1000)
}));

const SEVERITY_DATA = Array.from({ length: 50 }, (_, i) => ({
    severityIndex: Math.random() * 10,
    economicDamage: Math.pow(Math.random() * 10, 2) * 5 + (Math.random() * 50)
}));

const CLAIM_PROJECTION = Array.from({ length: 12 }, (_, i) => ({
    month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i],
    actual: i < 7 ? Math.floor(1000 + Math.random() * 500) : undefined,
    predicted: Math.floor(1100 + (i * 100) + Math.random() * 400)
}));

const PredictiveModeling = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh', paddingBottom: '6rem' }}>
            <div style={{ backgroundColor: '#ffffff', padding: '6rem 1rem 4rem 1rem', textAlign: 'center', borderBottom: '1px solid #eaeaea' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#111827', marginBottom: '1rem' }}>Predictive Modeling</h1>
                    <p style={{ fontSize: '1.25rem', color: '#4b5563', lineHeight: 1.6 }}>
                        Leveraging advanced machine learning architectures to output precise probabilities for occurrence, severity vectors, and insurance claim volume projections.
                    </p>
                </div>
            </div>

            <div className="container" style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', gap: '4rem' }}>

                {/* Model 1 */}
                <div style={{ backgroundColor: '#ffffff', padding: '3rem', borderRadius: '16px', border: '1px solid #eaeaea', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
                    <div style={{ marginBottom: '2rem' }}>
                        <div style={{ display: 'inline-block', padding: '0.4rem 1rem', backgroundColor: '#e0e7ff', color: '#0f62fe', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1rem' }}>Model 1</div>
                        <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#111827', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Target color="#0f62fe" /> Disaster Occurrence Prediction
                        </h2>
                        <p style={{ color: '#6b7280', fontSize: '1.1rem', marginTop: '0.5rem', maxWidth: '700px' }}>
                            Simulated probability heatmap modeling the geographic likelihood of a major natural disaster over a 24-month horizon.
                        </p>
                    </div>
                    <div style={{ width: '100%', height: '400px', backgroundColor: '#f8f9fa', borderRadius: '12px', padding: '1rem', border: '1px solid #eaeaea' }}>
                        <ResponsiveContainer>
                            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis type="number" dataKey="x" name="Longitude" hide />
                                <YAxis type="number" dataKey="y" name="Latitude" hide />
                                <ZAxis type="number" dataKey="z" range={[20, 400]} />
                                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                                <Scatter name="Probability Cluster" data={HEATMAP_DATA} fill="#fa4d56" fillOpacity={0.6} />
                            </ScatterChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Model 2 */}
                <div style={{ backgroundColor: '#ffffff', padding: '3rem', borderRadius: '16px', border: '1px solid #eaeaea', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
                    <div style={{ marginBottom: '2rem' }}>
                        <div style={{ display: 'inline-block', padding: '0.4rem 1rem', backgroundColor: '#ffe5e8', color: '#fa4d56', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1rem' }}>Model 2</div>
                        <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#111827', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Activity color="#fa4d56" /> Severity & Economic Impact
                        </h2>
                        <p style={{ color: '#6b7280', fontSize: '1.1rem', marginTop: '0.5rem', maxWidth: '700px' }}>
                            Evaluating the exponential correlation between physical disaster severity index and resultant economic/structural damage.
                        </p>
                    </div>
                    <div style={{ width: '100%', height: '400px' }}>
                        <ResponsiveContainer>
                            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis type="number" dataKey="severityIndex" name="Severity Index" unit="/10" stroke="#6b7280" />
                                <YAxis type="number" dataKey="economicDamage" name="Economic Damage" unit="M$" stroke="#6b7280" />
                                <Tooltip cursor={{ strokeDasharray: '3 3' }} contentStyle={{ borderRadius: '8px' }} />
                                <Scatter name="Impact Correlates" data={SEVERITY_DATA} fill="#fa4d56" />
                            </ScatterChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Model 3 */}
                <div style={{ backgroundColor: '#ffffff', padding: '3rem', borderRadius: '16px', border: '1px solid #eaeaea', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
                    <div style={{ marginBottom: '2rem' }}>
                        <div style={{ display: 'inline-block', padding: '0.4rem 1rem', backgroundColor: '#e0f3e8', color: '#198038', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1rem' }}>Model 3</div>
                        <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#111827', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Shield color="#198038" /> Insurance Claim Projection
                        </h2>
                        <p style={{ color: '#6b7280', fontSize: '1.1rem', marginTop: '0.5rem', maxWidth: '700px' }}>
                            Time-series forecasting model to project optimal liquidity reserves against expected actual policyholder claims.
                        </p>
                    </div>
                    <div style={{ width: '100%', height: '400px' }}>
                        <ResponsiveContainer>
                            <LineChart data={CLAIM_PROJECTION} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="month" stroke="#6b7280" />
                                <YAxis stroke="#6b7280" />
                                <Tooltip contentStyle={{ borderRadius: '8px' }} />
                                <Legend />
                                <Line type="monotone" dataKey="predicted" name="Predicted Claims" stroke="#198038" strokeWidth={3} strokeDasharray="5 5" />
                                <Line type="monotone" dataKey="actual" name="Actual Claims" stroke="#111827" strokeWidth={3} activeDot={{ r: 8 }} connectNulls={false} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PredictiveModeling;
