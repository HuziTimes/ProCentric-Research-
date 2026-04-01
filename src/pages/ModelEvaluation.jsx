import React, { useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Target, Activity, CheckCircle, Zap } from 'lucide-react';

const ERROR_DISTRIBUTION = [
    { errorRange: '0 - 5%', frequency: 320 },
    { errorRange: '5 - 10%', frequency: 150 },
    { errorRange: '10 - 15%', frequency: 80 },
    { errorRange: '15 - 20%', frequency: 30 },
    { errorRange: '> 20%', frequency: 10 },
];

const ModelEvaluation = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh', paddingBottom: '6rem' }}>
            <div style={{ backgroundColor: '#ffffff', padding: '6rem 1rem 4rem 1rem', textAlign: 'center', borderBottom: '1px solid #eaeaea' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#111827', marginBottom: '1rem' }}>Model Evaluation</h1>
                    <p style={{ fontSize: '1.25rem', color: '#4b5563', lineHeight: 1.6 }}>
                        Rigorous statistical verification and validation metrics for our predictive classification and regression models.
                    </p>
                </div>
            </div>

            <div className="container" style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', gap: '4rem' }}>

                {/* Metrics */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr lg:1fr', gap: '3rem' }}>

                    {/* Classification */}
                    <div style={{ backgroundColor: '#ffffff', padding: '3rem', borderRadius: '16px', border: '1px solid #eaeaea' }}>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#111827', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle color="#0f62fe" /> Classification Metrics</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1.5rem' }}>
                            {[
                                { label: 'Accuracy', value: '94.2%' },
                                { label: 'Precision', value: '91.8%' },
                                { label: 'Recall', value: '93.5%' },
                                { label: 'F1 Score', value: '92.6%' }
                            ].map((metric, i) => (
                                <div key={i} style={{ padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '12px', border: '1px solid #e0e0e0', textAlign: 'center' }}>
                                    <div style={{ color: '#6b7280', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.5rem' }}>{metric.label}</div>
                                    <div style={{ color: '#0f62fe', fontSize: '2rem', fontWeight: 700 }}>{metric.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Regression */}
                    <div style={{ backgroundColor: '#ffffff', padding: '3rem', borderRadius: '16px', border: '1px solid #eaeaea' }}>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#111827', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Activity color="#fa4d56" /> Regression Metrics</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1.5rem' }}>
                            {[
                                { label: 'RMSE', value: '4.82' },
                                { label: 'MAE', value: '3.15' },
                                { label: 'R²', value: '0.89' }
                            ].map((metric, i) => (
                                <div key={i} style={{ padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '12px', border: '1px solid #e0e0e0', textAlign: 'center' }}>
                                    <div style={{ color: '#6b7280', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.5rem' }}>{metric.label}</div>
                                    <div style={{ color: '#fa4d56', fontSize: '2rem', fontWeight: 700 }}>{metric.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Visualizations */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>

                    {/* Confusion Matrix */}
                    <div style={{ backgroundColor: '#ffffff', padding: '3rem', borderRadius: '16px', border: '1px solid #eaeaea' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '1.5rem' }}>Confusion Matrix</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr 1fr', gridTemplateRows: '100px 1fr 1fr', gap: '0.5rem', alignItems: 'center', textAlign: 'center' }}>
                            <div></div>
                            <div style={{ fontWeight: 600, color: '#6b7280' }}>Predicted Low Risk</div>
                            <div style={{ fontWeight: 600, color: '#6b7280' }}>Predicted High Risk</div>

                            <div style={{ fontWeight: 600, color: '#6b7280', transform: 'rotate(-90deg)' }}>Actual Low</div>
                            <div style={{ backgroundColor: '#e0e7ff', color: '#0f62fe', padding: '2rem', borderRadius: '8px', fontSize: '1.5rem', fontWeight: 700, border: '1px solid #0f62fe' }}>845</div>
                            <div style={{ backgroundColor: '#fee2e2', color: '#b91c1c', padding: '2rem', borderRadius: '8px', fontSize: '1.5rem', fontWeight: 700, border: '1px solid #f87171' }}>42</div>

                            <div style={{ fontWeight: 600, color: '#6b7280', transform: 'rotate(-90deg)' }}>Actual High</div>
                            <div style={{ backgroundColor: '#fee2e2', color: '#b91c1c', padding: '2rem', borderRadius: '8px', fontSize: '1.5rem', fontWeight: 700, border: '1px solid #f87171' }}>28</div>
                            <div style={{ backgroundColor: '#e0e7ff', color: '#0f62fe', padding: '2rem', borderRadius: '8px', fontSize: '1.5rem', fontWeight: 700, border: '1px solid #0f62fe' }}>310</div>
                        </div>
                    </div>

                    {/* Error Distribution */}
                    <div style={{ backgroundColor: '#ffffff', padding: '3rem', borderRadius: '16px', border: '1px solid #eaeaea' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '1.5rem' }}>Error Distribution Graph</h2>
                        <div style={{ width: '100%', height: '300px' }}>
                            <ResponsiveContainer>
                                <BarChart data={ERROR_DISTRIBUTION}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                    <XAxis dataKey="errorRange" stroke="#6b7280" />
                                    <YAxis stroke="#6b7280" />
                                    <Tooltip cursor={{ fill: 'rgba(0,0,0,0.05)' }} contentStyle={{ borderRadius: '8px' }} />
                                    <Bar dataKey="frequency" fill="#8a3ffc" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ModelEvaluation;
