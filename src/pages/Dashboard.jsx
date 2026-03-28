import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { AlertTriangle, Activity, Database, TrendingUp } from 'lucide-react';

const FLOOD_RISK_DATA = [
    { year: '2020', probability: 15, severity: 20 },
    { year: '2021', probability: 25, severity: 35 },
    { year: '2022', probability: 45, severity: 50 },
    { year: '2023', probability: 60, severity: 75 },
    { year: '2024', probability: 80, severity: 90 },
    { year: '2025 (Forecast)', probability: 95, severity: 110 }
];

const AI_ACCURACY_DATA = [
    { name: 'Jan', traditional: 65, aiModel: 82 },
    { name: 'Feb', traditional: 68, aiModel: 85 },
    { name: 'Mar', traditional: 64, aiModel: 88 },
    { name: 'Apr', traditional: 70, aiModel: 86 },
    { name: 'May', traditional: 72, aiModel: 92 },
    { name: 'Jun', traditional: 75, aiModel: 95 }
];

const RISK_DISTRIBUTION = [
    { name: 'Floods', value: 45 },
    { name: 'Earthquakes', value: 25 },
    { name: 'Wildfires', value: 20 },
    { name: 'Cyclones', value: 10 }
];

const COLORS = ['#0f62fe', '#fa4d56', '#8a3ffc', '#198038'];

const MotionCard = ({ delay, children, title, subtitle, icon: Icon }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '1.5rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
            border: '1px solid var(--ibm-gray-20)',
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
        }}
    >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
            <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 600, margin: 0, color: 'var(--text-primary)' }}>{title}</h3>
                {subtitle && <p style={{ fontSize: '0.9rem', color: 'var(--ibm-gray-60)', margin: '0.25rem 0 0 0' }}>{subtitle}</p>}
            </div>
            {Icon && <div style={{ padding: '0.5rem', backgroundColor: 'var(--ibm-blue-10)', borderRadius: '8px', color: 'var(--ibm-blue)' }}><Icon size={20} /></div>}
        </div>
        <div style={{ flex: 1, minHeight: '300px' }}>
            {children}
        </div>
    </motion.div>
);

const Dashboard = () => {
    return (
        <div style={{ paddingBottom: '6rem', backgroundColor: 'var(--ibm-gray-10)', minHeight: '100vh' }}>
            <div style={{ backgroundColor: 'black', color: 'white', padding: '6rem 0 4rem' }}>
                <div className="container">
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <span className="mono-label" style={{ color: 'var(--ibm-blue)', marginBottom: '1rem', display: 'inline-block' }}>Real-time Intelligence</span>
                        <h1 style={{ color: 'white', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '1rem', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                            Interactive Overview
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--ibm-gray-30)', maxWidth: '800px', lineHeight: 1.6 }}>
                            Dive into predictive trendlines, monitor real-time disaster probabilities, and evaluate the superior forecasting accuracy of our deep learning models.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="container" style={{ marginTop: '-2rem', position: 'relative', zIndex: 10 }}>
                {/* Stats Row */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                    {[
                        { title: 'Global Data Nodes', value: '45,201', change: '+12% this month', icon: Database, color: '#8a3ffc' },
                        { title: 'Active ML Models', value: '142', change: '99.9% uptime', icon: Activity, color: '#0f62fe' },
                        { title: 'Predicted Anomalies', value: '8.4k', change: '+5% precision', icon: AlertTriangle, color: '#fa4d56' },
                        { title: 'Financial Forecasting', value: '94%', change: 'Confidence rating', icon: TrendingUp, color: '#198038' }
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * i, duration: 0.4 }}
                            style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--ibm-gray-20)', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                <span style={{ color: 'var(--ibm-gray-60)', fontSize: '0.95rem', fontWeight: 500 }}>{stat.title}</span>
                                <stat.icon size={20} color={stat.color} />
                            </div>
                            <div style={{ fontSize: '2.5rem', fontWeight: 600, lineHeight: 1, marginBottom: '0.5rem' }}>{stat.value}</div>
                            <div style={{ fontSize: '0.85rem', color: 'var(--status-green)', fontWeight: 500 }}>{stat.change}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Charts Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '2rem' }}>

                    {/* Area Chart: Flood Risk Trends */}
                    <MotionCard delay={0.3} title="Flood Risk Trends" subtitle="Probability vs Severity index across monitored coastal regions" icon={AlertTriangle}>
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={FLOOD_RISK_DATA} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorProb" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#0f62fe" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#0f62fe" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorSev" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#fa4d56" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#fa4d56" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0" />
                                <XAxis dataKey="year" axisLine={false} tickLine={false} />
                                <YAxis axisLine={false} tickLine={false} />
                                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
                                <Legend verticalAlign="top" height={36} />
                                <Area type="monotone" dataKey="probability" name="Risk Probability (%)" stroke="#0f62fe" fillOpacity={1} fill="url(#colorProb)" />
                                <Area type="monotone" dataKey="severity" name="Severity Index" stroke="#fa4d56" fillOpacity={1} fill="url(#colorSev)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </MotionCard>

                    {/* Bar Chart: AI Model Accuracy */}
                    <MotionCard delay={0.4} title="AI Model Optimization" subtitle="Traditional regression vs Deep Learning accuracy over 6 months" icon={Activity}>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={AI_ACCURACY_DATA} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                                <YAxis domain={[50, 100]} axisLine={false} tickLine={false} />
                                <Tooltip cursor={{ fill: 'var(--ibm-gray-10)' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
                                <Legend verticalAlign="top" height={36} />
                                <Bar dataKey="traditional" name="Traditional Model" fill="#c6c6c6" radius={[4, 4, 0, 0]} />
                                <Bar dataKey="aiModel" name="ProCentric AI" fill="#8a3ffc" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </MotionCard>

                    {/* Pie Chart: Risk Distribution */}
                    <MotionCard delay={0.5} title="Systematic Risk Distribution" subtitle="Resource allocation across identified threat vectors" icon={Database}>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={RISK_DISTRIBUTION}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={80}
                                    outerRadius={110}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {RISK_DISTRIBUTION.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
                                <Legend layout="vertical" verticalAlign="middle" align="right" />
                            </PieChart>
                        </ResponsiveContainer>
                    </MotionCard>

                    {/* Line Chart: Financial Forecasting */}
                    <MotionCard delay={0.6} title="Financial Asset Volatility" subtitle="Predictive bounds for standard market deviations" icon={TrendingUp}>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={AI_ACCURACY_DATA} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                                <YAxis axisLine={false} tickLine={false} />
                                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
                                <Legend verticalAlign="top" height={36} />
                                <Line type="monotone" dataKey="traditional" name="Historical Volatility" stroke="#fa4d56" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                                <Line type="monotone" dataKey="aiModel" name="AI Adjusted Forecast" stroke="#0f62fe" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 8 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </MotionCard>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
