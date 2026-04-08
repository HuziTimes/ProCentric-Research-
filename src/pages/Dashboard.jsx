import React, { useEffect } from 'react';
import {
    LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
    XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend,
    ResponsiveContainer, AreaChart, Area, ScatterChart, Scatter, ZAxis
} from 'recharts';
import {
    AlertTriangle, Activity, Database, TrendingUp,
    Map as MapIcon, Bell, FileText,
    DollarSign, Zap, BarChart2, PieChart as PieChartIcon
} from 'lucide-react';
import DataAttribution from '../components/DataAttribution';

/* --- MOCK DATA --- */

const DISASTER_TRENDS = Array.from({ length: 25 }, (_, i) => ({
    year: 2000 + i,
    events: Math.floor(100 + (i * 15) + Math.random() * 50),
    climateImpact: Math.floor((i * 2) + Math.random() * 10)
}));

const DISASTER_TYPES = [
    { name: 'Hurricanes', value: 35, color: '#0f62fe' },
    { name: 'Floods', value: 40, color: '#0043ce' },
    { name: 'Wildfires', value: 15, color: '#fa4d56' },
    { name: 'Tornadoes', value: 10, color: '#8a3ffc' }
];

const RISK_SCORES = [
    { name: 'Low Risk', regions: 400, color: '#198038' },
    { name: 'Medium Risk', regions: 350, color: '#f1c21b' },
    { name: 'High Risk', regions: 250, color: '#fa4d56' }
];

const LOSS_PREDICTION = Array.from({ length: 12 }, (_, i) => {
    const isActual = i < 8;
    return {
        month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i],
        actual: isActual ? Math.floor(200 + Math.random() * 100) : undefined,
        predicted: Math.floor(210 + (i * 10) + Math.random() * 80)
    };
});

const CLAIMS_FORECAST = Array.from({ length: 5 }, (_, i) => ({
    year: 2025 + i,
    expectedClaims: Math.floor(4000 + (i * 800) + Math.random() * 500),
    upperBound: Math.floor(4500 + (i * 900) + Math.random() * 500),
    lowerBound: Math.floor(3500 + (i * 700) + Math.random() * 500)
}));

const MAP_MARKERS = [
    { name: 'California', lon: -120, lat: 37, score: 92, loss: '$4.2B', claim: '12k', color: '#fa4d56', size: 400, risk: "High Risk" },
    { name: 'Texas', lon: -99, lat: 31, score: 88, loss: '$3.8B', claim: '10k', color: '#fa4d56', size: 300, risk: "High Risk" },
    { name: 'Florida', lon: -82, lat: 28, score: 95, loss: '$5.1B', claim: '15k', color: '#fa4d56', size: 500, risk: "High Risk" },
    { name: 'Louisiana', lon: -92, lat: 31, score: 75, loss: '$1.5B', claim: '5k', color: '#f1c21b', size: 200, risk: "Medium Risk" },
    { name: 'Colorado', lon: -105, lat: 39, score: 65, loss: '$800M', claim: '2k', color: '#f1c21b', size: 150, risk: "Medium Risk" },
    { name: 'New York', lon: -75, lat: 43, score: 60, loss: '$1.2B', claim: '3.8k', color: '#f1c21b', size: 150, risk: "Medium Risk" },
    { name: 'North Dakota', lon: -100, lat: 47, score: 25, loss: '$100M', claim: '400', color: '#198038', size: 50, risk: "Low Risk" },
    { name: 'Washington', lon: -120, lat: 47, score: 35, loss: '$250M', claim: '900', color: '#198038', size: 80, risk: "Low Risk" }
];

const ALERTS = [
    { id: 1, type: 'critical', title: 'High Flood Risk – Louisiana', time: 'Next 7 Days', desc: 'Mississippi river basin showing severe localized swelling.' },
    { id: 2, type: 'critical', title: 'Wildfire Alert – California', time: 'High Probability', desc: 'Dry winds combined with high temperatures in SoCal region.' },
    { id: 3, type: 'warning', title: 'Tornado Watch – Texas', time: 'Upcoming 48hrs', desc: 'Pressure drops indicate 65% chance of vortex formation.' }
];

const PREMIUMS = [
    { state: 'California', risk: 'High Risk', adjust: '+25%', color: '#fa4d56' },
    { state: 'Texas', risk: 'High Risk', adjust: '+20%', color: '#fa4d56' },
    { state: 'Florida', risk: 'High Risk', adjust: '+30%', color: '#fa4d56' },
    { state: 'Louisiana', risk: 'Medium Risk', adjust: '+15%', color: '#f1c21b' },
    { state: 'Washington', risk: 'Low Risk', adjust: '-5%', color: '#198038' }
];

const TOP_ZONES = [
    { state: 'Florida', freq: 'Very High', loss: '$5.1B' },
    { state: 'California', freq: 'High', loss: '$4.2B' },
    { state: 'Texas', freq: 'High', loss: '$3.8B' },
    { state: 'Louisiana', freq: 'Medium', loss: '$1.5B' },
    { state: 'New York', freq: 'Medium', loss: '$1.2B' }
];

/* --- COMPONENTS --- */

const DashboardCard = ({ title, subtitle, icon: Icon, children }) => (
    <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        padding: '1.5rem',
        boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
        border: '1px solid #eaeaea',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        color: '#161616',
        transition: 'background-color 0.3s ease, border 0.3s ease, color 0.3s ease'
    }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
            <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 600, margin: 0 }}>{title}</h3>
                {subtitle && <p style={{ fontSize: '0.85rem', color: '#696969', margin: '0.25rem 0 0 0', lineHeight: 1.4 }}>{subtitle}</p>}
            </div>
            {Icon && <Icon size={20} color="#0f62fe" />}
        </div>
        <div style={{ flex: 1, position: 'relative' }}>
            {children}
        </div>
    </div>
);

const CustomMapTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload;
        return (
            <div style={{ backgroundColor: '#ffffff', padding: '1rem', borderRadius: '8px', border: '1px solid #eaeaea', boxShadow: '0 10px 30px rgba(0,0,0,0.15)', minWidth: '220px', color: '#161616' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {data.name} <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', backgroundColor: `${data.color}33`, color: data.color, borderRadius: '4px' }}>{data.risk}</span>
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.85rem' }}>
                    <div><span style={{ color: '#696969' }}>Risk Score</span><br /><strong>{data.score}/100</strong></div>
                    <div><span style={{ color: '#696969' }}>Total Claims</span><br /><strong>{data.claim}</strong></div>
                    <div><span style={{ color: '#696969' }}>Predicted Loss</span><br /><strong>{data.loss}</strong></div>
                    <div><span style={{ color: '#696969' }}>Coordinates</span><br /><strong>{data.lat}°, {data.lon}°</strong></div>
                </div>
            </div>
        );
    }
    return null;
};

const Dashboard = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const theme = {
        bg: '#f4f4f4',
        text: '#161616',
        textMuted: '#696969',
        cardBorder: '#eaeaea',
        cardBg: '#ffffff',
        gridLine: '#e0e0e0',
        tooltipBg: '#ffffff',
        blue: '#0f62fe',
    };

    return (
        <div style={{ backgroundColor: theme.bg, color: theme.text, minHeight: '100vh', transition: 'background-color 0.3s ease, color 0.3s ease', paddingBottom: '6rem' }}>

            {/* Header / Top Intro */}
            <div style={{ borderBottom: `1px solid ${theme.cardBorder}`, backgroundColor: '#ffffff', paddingTop: '6rem', paddingBottom: '2rem' }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
                        <div>
                            <span className="mono-label" style={{ color: theme.blue, backgroundColor: 'rgba(15,98,254,0.1)', padding: '0.4rem 0.8rem', borderRadius: '4px', display: 'inline-block', marginBottom: '1rem' }}>
                                Real-time AI-powered disaster intelligence dashboard for the United States insurance sector.
                            </span>
                            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', margin: 0, fontWeight: 700 }}>Risk Intelligence Center</h1>
                            <p style={{ color: theme.textMuted, fontSize: '1.1rem', marginTop: '0.5rem', maxWidth: '800px' }}>
                                Over 7,000+ unique major disaster events analyzed across the United States with billions in projected insurance losses.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container dashboard-fade-in" style={{ paddingTop: '3rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                {/* 1. KPI Cards Row */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                    {[
                        { title: 'Major Disasters (USA)', value: '7,450+', sub: 'Since 1953', icon: Database, color: '#0f62fe' },
                        { title: 'Highest Risk State', value: 'California', sub: 'Critical Wildfire', icon: MapIcon, color: '#fa4d56' },
                        { title: 'Estimated Total Loss', value: '$14.2B', sub: 'Projected 2025', icon: DollarSign, color: '#f1c21b' },
                        { title: 'Avg Claims / Event', value: '4,120', sub: '+12% vs 2023', icon: FileText, color: '#8a3ffc' },
                        { title: 'Active Risk Alerts', value: '12', sub: '3 Critical', icon: AlertTriangle, color: '#fa4d56' }
                    ].map((kpi, i) => (
                        <div key={i} style={{ backgroundColor: theme.cardBg, borderRadius: '16px', padding: '1.5rem', border: `1px solid ${theme.cardBorder}`, boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                <span style={{ color: theme.textMuted, fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{kpi.title}</span>
                                <kpi.icon size={18} color={kpi.color} />
                            </div>
                            <div style={{ fontSize: '2rem', fontWeight: 700, margin: '0.5rem 0' }}>{kpi.value}</div>
                            <div style={{ fontSize: '0.85rem', color: kpi.color, fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Activity size={14} /> {kpi.sub}</div>
                        </div>
                    ))}
                </div>

                {/* 2. Map & Insights Row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
                    <DashboardCard
                        title="Interactive USA Risk Map"
                        subtitle="Disaster risk distribution mapped actively by geographical coordinates."
                        icon={MapIcon}
                    >
                        <div style={{ width: '100%', height: '400px', backgroundColor: '#f8f9fa', borderRadius: '12px', border: `1px solid ${theme.cardBorder}`, marginTop: '1rem', padding: '1rem' }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                                    <XAxis type="number" dataKey="lon" name="Longitude" unit="°" domain={[-125, -65]} tick={false} axisLine={false} />
                                    <YAxis type="number" dataKey="lat" name="Latitude" unit="°" domain={[25, 50]} tick={false} axisLine={false} />
                                    <ZAxis type="number" dataKey="size" range={[50, 600]} name="Loss Volume" />
                                    <RechartsTooltip cursor={{ strokeDasharray: '3 3' }} content={<CustomMapTooltip />} />
                                    <Scatter name="Risk Regions" data={MAP_MARKERS}>
                                        {MAP_MARKERS.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} fillOpacity={0.7} />
                                        ))}
                                    </Scatter>
                                </ScatterChart>
                            </ResponsiveContainer>
                        </div>
                    </DashboardCard>
                </div>

                {/* 3. Alerts & Insights & Trends */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                    <DashboardCard title="Early Warning Alerts" subtitle="Real-time alerts generated using predictive analytics." icon={Bell}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
                            {ALERTS.map(alert => (
                                <div key={alert.id} style={{ padding: '1rem', borderRadius: '8px', backgroundColor: '#f9f9f9', borderLeft: `4px solid ${alert.type === 'critical' ? '#fa4d56' : '#f1c21b'}` }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                                        <span style={{ fontWeight: 600, color: alert.type === 'critical' ? '#fa4d56' : '#f1c21b' }}>{alert.title}</span>
                                        <span style={{ fontSize: '0.8rem', color: theme.textMuted, padding: '0.1rem 0.5rem', background: '#eee', borderRadius: '4px' }}>{alert.time}</span>
                                    </div>
                                    <p style={{ margin: 0, fontSize: '0.9rem', color: theme.textMuted }}>{alert.desc}</p>
                                </div>
                            ))}
                        </div>
                    </DashboardCard>

                    <DashboardCard title="AI Analyst Insights" subtitle="Automated deductions from Model Data." icon={Zap}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
                            <div style={{ padding: '1.25rem', borderRadius: '8px', backgroundImage: 'linear-gradient(145deg, #f4f4f4 0%, #e6f0ff 100%)', border: '1px solid #0f62fe33' }}>
                                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                                    <Database color="#0f62fe" size={24} style={{ flexShrink: 0 }} />
                                    <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.5, color: theme.text }}>
                                        <strong>California and Texas</strong> consistently rank as high-risk zones due to immense overlapping wildfire and hurricane exposure timelines.
                                    </p>
                                </div>
                            </div>
                            <div style={{ padding: '1.25rem', borderRadius: '8px', backgroundImage: 'linear-gradient(145deg, #f4f4f4 0%, #ffe6e8 100%)', border: '1px solid #fa4d5633' }}>
                                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                                    <AlertTriangle color="#fa4d56" size={24} style={{ flexShrink: 0 }} />
                                    <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.5, color: theme.text }}>
                                        <strong>Flood-related disasters</strong> contribute to the highest overall claim volumes in southeastern states, stressing Q3 liquidity pools.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </DashboardCard>

                    <DashboardCard title="Disaster Trends" subtitle="Disaster occurrences have shown a upward trend." icon={TrendingUp}>
                        <div style={{ width: '100%', height: '300px', marginTop: '1rem' }}>
                            <ResponsiveContainer>
                                <LineChart data={DISASTER_TRENDS}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={theme.gridLine} />
                                    <XAxis dataKey="year" stroke={theme.textMuted} tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                                    <YAxis stroke={theme.textMuted} tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                                    <RechartsTooltip contentStyle={{ backgroundColor: theme.tooltipBg, border: `1px solid ${theme.cardBorder}`, borderRadius: '8px', color: theme.text }} />
                                    <Line type="basis" dataKey="events" name="Annual Events" stroke="#0f62fe" strokeWidth={3} dot={false} activeDot={{ r: 6 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </DashboardCard>
                </div>

                {/* 4. Distribution Row */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <DashboardCard title="Disaster Types" subtitle="Distribution of events." icon={PieChartIcon}>
                        <div style={{ width: '100%', height: '280px', marginTop: '1rem' }}>
                            <ResponsiveContainer>
                                <PieChart>
                                    <Pie data={DISASTER_TYPES} cx="50%" cy="50%" innerRadius={60} outerRadius={90} paddingAngle={5} dataKey="value">
                                        {DISASTER_TYPES.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                                    </Pie>
                                    <RechartsTooltip />
                                    <Legend verticalAlign="bottom" height={36} />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </DashboardCard>

                    <DashboardCard title="Risk Scores" subtitle="Regions by danger tier." icon={BarChart2}>
                        <div style={{ width: '100%', height: '280px', marginTop: '1rem' }}>
                            <ResponsiveContainer>
                                <BarChart data={RISK_SCORES} layout="vertical">
                                    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke={theme.gridLine} />
                                    <XAxis type="number" stroke={theme.textMuted} />
                                    <YAxis dataKey="name" type="category" stroke={theme.textMuted} />
                                    <RechartsTooltip />
                                    <Bar dataKey="regions" radius={[0, 4, 4, 0]}>
                                        {RISK_SCORES.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </DashboardCard>

                    <DashboardCard title="Premium Adjustments" subtitle="Rec. adjustments based on risk." icon={DollarSign}>
                        <div style={{ marginTop: '1rem', overflowX: 'auto' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                                <thead>
                                    <tr style={{ borderBottom: `1px solid ${theme.cardBorder}`, color: theme.textMuted }}>
                                        <th style={{ padding: '0.5rem', textAlign: 'left' }}>State</th>
                                        <th style={{ padding: '0.5rem', textAlign: 'left' }}>Risk</th>
                                        <th style={{ padding: '0.5rem', textAlign: 'left' }}>Adjust</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {PREMIUMS.map((p, i) => (
                                        <tr key={i} style={{ borderBottom: `1px solid ${theme.cardBorder}` }}>
                                            <td style={{ padding: '0.5rem' }}>{p.state}</td>
                                            <td style={{ padding: '0.5rem' }}><span style={{ color: p.color, fontWeight: 700 }}>{p.risk}</span></td>
                                            <td style={{ padding: '0.5rem', fontWeight: 700 }}>{p.adjust}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </DashboardCard>
                </div>

                {/* 5. Forecasts */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
                    <DashboardCard title="Insurance Loss Prediction" subtitle="Reserve preparation estimation." icon={Activity}>
                        <div style={{ width: '100%', height: '300px', marginTop: '1rem' }}>
                            <ResponsiveContainer>
                                <AreaChart data={LOSS_PREDICTION}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={theme.gridLine} />
                                    <XAxis dataKey="month" stroke={theme.textMuted} />
                                    <YAxis stroke={theme.textMuted} />
                                    <RechartsTooltip />
                                    <Area type="monotone" dataKey="predicted" stroke="#fa4d56" fill="#fa4d5633" />
                                    <Line type="step" dataKey="actual" stroke="#0f62fe" strokeWidth={2} />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </DashboardCard>

                    <DashboardCard title="Claims Forecast" subtitle="Projected insurance claims." icon={TrendingUp}>
                        <div style={{ width: '100%', height: '300px', marginTop: '1rem' }}>
                            <ResponsiveContainer>
                                <LineChart data={CLAIMS_FORECAST}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={theme.gridLine} />
                                    <XAxis dataKey="year" stroke={theme.textMuted} />
                                    <YAxis stroke={theme.textMuted} />
                                    <RechartsTooltip />
                                    <Line type="monotone" dataKey="expectedClaims" stroke="#0f62fe" strokeWidth={3} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </DashboardCard>
                </div>

                {/* Data Attribution Section */}
                <div style={{ marginTop: '4rem' }}>
                    <DataAttribution />
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .dashboard-fade-in { animation: dashFade 0.6s ease-out forwards; }
                @keyframes dashFade { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
            `}} />
        </div>
    );
};

export default Dashboard;
