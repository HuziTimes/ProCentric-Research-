import React, { useEffect } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Target, TrendingUp, AlertTriangle } from 'lucide-react';
import DataTerrainBackground from '../components/DataTerrainBackground';

const STATE_DATA = [
    { state: 'CA', disasters: 420 },
    { state: 'TX', disasters: 380 },
    { state: 'FL', disasters: 350 },
    { state: 'LA', disasters: 210 },
    { state: 'NY', disasters: 180 },
    { state: 'OK', disasters: 150 },
    { state: 'NC', disasters: 145 },
];

const TREND_DATA = Array.from({ length: 20 }, (_, i) => ({
    year: 2005 + i,
    count: Math.floor(100 + (i * 12) + Math.random() * 30)
}));

const TYPE_DATA = [
    { name: 'Floods', value: 45, color: '#0043ce' },
    { name: 'Hurricanes', value: 30, color: '#0f62fe' },
    { name: 'Wildfires', value: 15, color: '#fa4d56' },
    { name: 'Tornadoes', value: 10, color: '#8a3ffc' }
];

const DisasterOverview = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh', paddingBottom: '6rem' }}>
            {/* Header */}
            <div style={{ backgroundColor: '#020617', padding: '10rem 1rem 8rem 1rem', textAlign: 'center', borderBottom: '1px solid #1e293b', position: 'relative', overflow: 'hidden' }}>
                <DataTerrainBackground />
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at center, rgba(15,98,254,0.15) 0%, transparent 70%)', zIndex: 1 }}></div>
                <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: 800, color: 'white', marginBottom: '1rem' }}>US Disaster Risk Overview</h1>
                    <p style={{ fontSize: '1.25rem', color: '#94a3b8', lineHeight: 1.6 }}>
                        Analyzing decades of natural disaster data to understand regional vulnerabilities, frequency trends, and predominant threat types across the United States.
                    </p>
                </div>
            </div>

            <div className="container" style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', gap: '4rem' }}>

                {/* Intro Section */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {[
                        { title: 'Hurricanes', desc: 'Primarily impacting the Gulf Coast and Eastern Seaboard, bringing extreme wind and foundational water damage.' },
                        { title: 'Wildfires', desc: 'Concentrated in Western states like California, exacerbated by prolonged drought conditions and climate shifts.' },
                        { title: 'Tornadoes', desc: 'Frequent in Tornado Alley (Central US), causing highly localized but catastrophic property destruction.' },
                        { title: 'Floods', desc: 'The most common disaster type nationwide, affecting diverse topologies from coastal plains to inland river basins.' }
                    ].map((type, i) => (
                        <div key={i} style={{ backgroundColor: '#ffffff', padding: '2rem', borderRadius: '12px', border: '1px solid #eaeaea', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111827', marginBottom: '0.75rem' }}>{type.title}</h3>
                            <p style={{ margin: 0, color: '#6b7280', lineHeight: 1.6 }}>{type.desc}</p>
                        </div>
                    ))}
                </div>

                <hr style={{ border: 0, borderTop: '1px solid #eaeaea' }} />

                {/* Graphs Section */}
                <div>
                    <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#111827', marginBottom: '2rem' }}>Historical Analysis & Trends</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}>

                        <div style={{ backgroundColor: '#ffffff', padding: '2rem', borderRadius: '16px', border: '1px solid #eaeaea' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><TrendingUp size={20} color="#0f62fe" /> Yearly Disaster Trends (USA)</h3>
                            <div style={{ width: '100%', height: '350px' }}>
                                <ResponsiveContainer>
                                    <LineChart data={TREND_DATA}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0" />
                                        <XAxis dataKey="year" stroke="#6b7280" />
                                        <YAxis stroke="#6b7280" />
                                        <Tooltip contentStyle={{ borderRadius: '8px' }} />
                                        <Line type="monotone" dataKey="count" name="Disaster Events" stroke="#0f62fe" strokeWidth={3} activeDot={{ r: 8 }} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>

                            <div style={{ backgroundColor: '#ffffff', padding: '2rem', borderRadius: '16px', border: '1px solid #eaeaea' }}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Target size={20} color="#fa4d56" /> Disasters by State</h3>
                                <div style={{ width: '100%', height: '350px' }}>
                                    <ResponsiveContainer>
                                        <BarChart data={STATE_DATA} layout="vertical" margin={{ left: 20, right: 20 }}>
                                            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e0e0e0" />
                                            <XAxis type="number" stroke="#6b7280" />
                                            <YAxis dataKey="state" type="category" stroke="#6b7280" width={40} />
                                            <Tooltip cursor={{ fill: 'rgba(0,0,0,0.05)' }} contentStyle={{ borderRadius: '8px' }} />
                                            <Bar dataKey="disasters" name="Events" fill="#fa4d56" radius={[0, 4, 4, 0]} />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>

                            <div style={{ backgroundColor: '#ffffff', padding: '2rem', borderRadius: '16px', border: '1px solid #eaeaea' }}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><AlertTriangle size={20} color="#8a3ffc" /> Disaster Type Distribution</h3>
                                <div style={{ width: '100%', height: '350px' }}>
                                    <ResponsiveContainer>
                                        <PieChart>
                                            <Pie data={TYPE_DATA} cx="50%" cy="50%" innerRadius={80} outerRadius={120} paddingAngle={2} dataKey="value" label>
                                                {TYPE_DATA.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                                            </Pie>
                                            <Tooltip contentStyle={{ borderRadius: '8px' }} />
                                            <Legend verticalAlign="bottom" height={36} />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DisasterOverview;
