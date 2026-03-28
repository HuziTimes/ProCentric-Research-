import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Briefcase, GraduationCap, Users } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '', type: 'general' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, send data to backend here.
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div style={{ paddingBottom: '6rem', backgroundColor: 'var(--bg-secondary, #f4f4f4)' }}>
            {/* Header */}
            <div style={{ backgroundColor: 'var(--ibm-gray-100, #161616)', color: 'white', padding: '6rem 0 4rem' }}>
                <div className="container">
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <span className="mono-label" style={{ color: 'var(--ibm-blue)', marginBottom: '1rem', display: 'inline-block' }}>Get in Touch</span>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                            Contact & Collaboration
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: '#c6c6c6', maxWidth: '800px', lineHeight: 1.6 }}>
                            Whether you're looking for research partnerships, internship opportunities, or consulting services, our team is ready to assist.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="container" style={{ marginTop: '4rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem' }}>

                    {/* Contact Info Card */}
                    <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} style={{ alignSelf: 'start' }}>
                        <div style={{ padding: 'clamp(1.5rem, 6vw, 3rem)', backgroundColor: 'white', borderRadius: '12px', height: 'fit-content', border: '1px solid var(--ibm-gray-20)', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ fontSize: '1.75rem', marginBottom: '2rem', color: 'var(--text-primary)' }}>Contact Information</h3>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ padding: '0.75rem', backgroundColor: 'var(--ibm-blue-10)', borderRadius: '8px', color: 'var(--ibm-blue)' }}><Mail size={24} /></div>
                                    <div>
                                        <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--ibm-gray-60)', fontWeight: 600 }}>Email</p>
                                        <a href="mailto:connect@procentricresearch.com" style={{ color: 'var(--text-primary)', textDecoration: 'none', wordBreak: 'break-word', fontSize: '1.1rem' }}>connect@procentricresearch.com</a>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ padding: '0.75rem', backgroundColor: 'var(--ibm-blue-10)', borderRadius: '8px', color: 'var(--ibm-blue)' }}><Phone size={24} /></div>
                                    <div>
                                        <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--ibm-gray-60)', fontWeight: 600 }}>Phone</p>
                                        <p style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-primary)' }}>+1 (555) 123-4567</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ padding: '0.75rem', backgroundColor: 'var(--ibm-blue-10)', borderRadius: '8px', color: 'var(--ibm-blue)' }}><MapPin size={24} /></div>
                                    <div>
                                        <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--ibm-gray-60)', fontWeight: 600 }}>Office</p>
                                        <p style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-primary)' }}>120 Innovation Drive, Tech City</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </motion.div>

                    {/* Contact Form */}
                    <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                        <div style={{ padding: 'clamp(1.5rem, 6vw, 3rem)', backgroundColor: 'white', borderRadius: '12px', border: '1px solid var(--ibm-gray-20)', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Send us a Message</h3>
                            <p style={{ color: 'var(--ibm-gray-60)', marginBottom: '2rem' }}>We typically respond within 24 hours.</p>

                            {submitted ? (
                                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={{ padding: '2rem', backgroundColor: 'var(--status-green-light, #e6f6ec)', color: 'var(--status-green, #198038)', borderRadius: '8px', textAlign: 'center' }}>
                                    <h3 style={{ margin: '0 0 0.5rem 0' }}>Request Submitted!</h3>
                                    <p style={{ margin: 0 }}>Thank you for reaching out. Our team will review your message shortly.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label htmlFor="name" style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--ibm-gray-80)' }}>Full Name</label>
                                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required style={{ padding: '1rem', borderRadius: '4px', border: '1px solid var(--ibm-gray-30)', fontSize: '1rem', width: '100%', outline: 'none' }} placeholder="John Doe" />
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label htmlFor="email" style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--ibm-gray-80)' }}>Email Address</label>
                                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required style={{ padding: '1rem', borderRadius: '4px', border: '1px solid var(--ibm-gray-30)', fontSize: '1rem', width: '100%', outline: 'none' }} placeholder="john@example.com" />
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label htmlFor="type" style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--ibm-gray-80)' }}>Inquiry Type</label>
                                        <select id="type" name="type" value={formData.type} onChange={handleChange} style={{ padding: '1rem', borderRadius: '4px', border: '1px solid var(--ibm-gray-30)', fontSize: '1rem', width: '100%', outline: 'none', backgroundColor: 'white' }}>
                                            <option value="general">General Inquiry</option>
                                            <option value="research">Research Partnership</option>
                                            <option value="internship">Internship Application</option>
                                            <option value="consulting">Consulting / Services</option>
                                        </select>
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label htmlFor="message" style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--ibm-gray-80)' }}>Message</label>
                                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="5" style={{ padding: '1rem', borderRadius: '4px', border: '1px solid var(--ibm-gray-30)', fontSize: '1rem', width: '100%', outline: 'none', resize: 'vertical' }} placeholder="Tell us how we can help..."></textarea>
                                    </div>

                                    <button type="submit" className="btn" style={{ padding: '1rem', fontSize: '1.1rem', marginTop: '1rem', width: '100%', cursor: 'pointer', border: 'none' }}>
                                        Send Message
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
