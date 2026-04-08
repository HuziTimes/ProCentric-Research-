import React, { useEffect } from 'react';
import { Mail, MapPin, Globe, ArrowRight, Briefcase, BarChart2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import DataTerrainBackground from '../components/DataTerrainBackground';

const Contact = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message sent! Our team will respond within 24-48 hours.");
    };

    return (
        <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh', paddingBottom: '6rem' }}>

            {/* 1. Page Header */}
            <div style={{ backgroundColor: '#020617', padding: '10rem 1rem 8rem 1rem', textAlign: 'center', borderBottom: '1px solid #1e293b', position: 'relative', overflow: 'hidden' }}>
                <DataTerrainBackground />
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at center, rgba(15,98,254,0.15) 0%, transparent 70%)', zIndex: 1 }}></div>
                <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 800, color: 'white', marginBottom: '1rem', letterSpacing: '-0.02em' }}>Contact Us</h1>
                    <p style={{ fontSize: '1.25rem', color: '#94a3b8', lineHeight: 1.6 }}>
                        Get in touch with our team for inquiries, collaborations, or more information about our disaster risk intelligence platform.
                    </p>
                </div>
            </div>

            <div className="container" style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', gap: '4rem' }}>

                {/* Contact Split Layout */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem', alignItems: 'flex-start' }}>

                    {/* 2. Contact Form (Left) */}
                    <div style={{ backgroundColor: '#ffffff', padding: '3rem', borderRadius: '16px', boxShadow: '0 10px 40px rgba(0,0,0,0.04)', border: '1px solid #f3f4f6' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem', color: '#111827' }}>Send us a Message</h2>
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#374151', marginBottom: '0.5rem' }}>Full Name</label>
                                <input required type="text" placeholder="John Doe" style={{ width: '100%', padding: '0.875rem 1rem', borderRadius: '8px', border: '1px solid #d1d5db', outline: 'none', transition: 'border-color 0.2s' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#374151', marginBottom: '0.5rem' }}>Email Address</label>
                                <input required type="email" placeholder="john@company.com" style={{ width: '100%', padding: '0.875rem 1rem', borderRadius: '8px', border: '1px solid #d1d5db', outline: 'none', transition: 'border-color 0.2s' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#374151', marginBottom: '0.5rem' }}>Subject</label>
                                <input required type="text" placeholder="Data Partnership Inquiry" style={{ width: '100%', padding: '0.875rem 1rem', borderRadius: '8px', border: '1px solid #d1d5db', outline: 'none', transition: 'border-color 0.2s' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#374151', marginBottom: '0.5rem' }}>Message</label>
                                <textarea required rows="4" placeholder="How can we help you?" style={{ width: '100%', padding: '0.875rem 1rem', borderRadius: '8px', border: '1px solid #d1d5db', outline: 'none', resize: 'vertical' }}></textarea>
                            </div>
                            <button type="submit" style={{ width: '100%', padding: '1rem', backgroundColor: '#0f62fe', color: 'white', border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: 600, cursor: 'pointer', transition: 'background-color 0.2s', marginTop: '0.5rem' }}>
                                Send Message
                            </button>
                            <p style={{ textAlign: 'center', fontSize: '0.85rem', color: '#6b7280', margin: 0 }}>
                                Our team will respond within 24–48 hours.
                            </p>
                        </form>
                    </div>

                    {/* 3. Contact Info (Right) */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                        <div>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', color: '#111827' }}>Contact Information</h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ width: '48px', height: '48px', backgroundColor: '#e0e7ff', color: '#0f62fe', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p style={{ margin: 0, fontSize: '0.875rem', color: '#6b7280', fontWeight: 500 }}>Email</p>
                                        <p style={{ margin: 0, fontSize: '1rem', color: '#111827', fontWeight: 500 }}>info@procentricresearch.com</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ width: '48px', height: '48px', backgroundColor: '#e0e7ff', color: '#0f62fe', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Globe size={24} />
                                    </div>
                                    <div>
                                        <p style={{ margin: 0, fontSize: '0.875rem', color: '#6b7280', fontWeight: 500 }}>Website</p>
                                        <p style={{ margin: 0, fontSize: '1rem', color: '#111827', fontWeight: 500 }}>procentricresearch.com</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ width: '48px', height: '48px', backgroundColor: '#e0e7ff', color: '#0f62fe', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p style={{ margin: 0, fontSize: '0.875rem', color: '#6b7280', fontWeight: 500 }}>Location</p>
                                        <p style={{ margin: 0, fontSize: '1rem', color: '#111827', fontWeight: 500 }}>United States (Research Focus)</p>
                                    </div>
                                </div>
                            </div>

                            {/* Optional Map Image / Visual */}
                            <div style={{ marginTop: '2rem', width: '100%', height: '220px', backgroundColor: '#e5e7eb', borderRadius: '16px', backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/3/32/Blank_US_Map_%28states_only%29.svg")', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.8, filter: 'grayscale(1)', border: '1px solid #d1d5db' }}></div>
                        </div>

                        {/* 6. Social Links */}
                        <div>
                            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '1rem', color: '#111827' }}>Connect With Us</h3>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                {['LinkedIn', 'GitHub', 'Email'].map((social, i) => (
                                    <div key={i} style={{ padding: '0.5rem 1rem', backgroundColor: '#ffffff', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '0.875rem', fontWeight: 500, color: '#374151', cursor: 'pointer', transition: 'border-color 0.2s', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        {social}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* 4. Business & Collaboration Section */}
                <div style={{ backgroundColor: '#111827', color: 'white', padding: '4rem 2rem', borderRadius: '24px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
                    <Briefcase size={48} color="#0f62fe" style={{ opacity: 0.3, position: 'absolute', top: '-10px', right: '10%' }} />
                    <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>Partner with ProCentric</h2>
                    <p style={{ fontSize: '1.15rem', color: '#9ca3af', maxWidth: '700px', margin: '0 auto 2rem auto', lineHeight: 1.6 }}>
                        We welcome collaborations with insurance companies, data analysts, researchers, and organizations interested in disaster risk assessment and predictive analytics in the United States.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <button style={{ padding: '1rem 2rem', backgroundColor: '#0f62fe', color: 'white', border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s' }}>Request Demo</button>
                        <button style={{ padding: '1rem 2rem', backgroundColor: 'transparent', color: 'white', border: '1px solid #4b5563', borderRadius: '8px', fontSize: '1rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s' }}>Business Inquiry</button>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    {/* 7. FAQ Section */}
                    <div>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem', color: '#111827' }}>Frequently Asked Questions</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {[
                                { q: "What does your platform do?", a: "We provide AI-powered natural disaster risk intelligence to help organizations estimate insurance losses and optimize decision-making." },
                                { q: "Is your data specific to the United States?", a: "Yes, our primary focus is analyzing historical and predictive disaster metrics specifically across all 50 US states." },
                                { q: "Can businesses collaborate with you?", a: "Absolutely. We routinely partner with insurance providers, analysts, and government agencies to share APIs and data models." }
                            ].map((faq, i) => (
                                <div key={i} style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '12px', border: '1px solid #eaeaea' }}>
                                    <h4 style={{ margin: '0 0 0.5rem 0', color: '#111827', fontSize: '1rem' }}>{faq.q}</h4>
                                    <p style={{ margin: 0, color: '#6b7280', fontSize: '0.9rem', lineHeight: 1.5 }}>{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 5. Call to Action Section */}
                    <div style={{ backgroundColor: '#e0e7ff', padding: '3rem', borderRadius: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div style={{ width: '48px', height: '48px', backgroundColor: '#0f62fe', color: 'white', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                            <BarChart2 size={24} />
                        </div>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1rem', color: '#111827' }}>Interested in leveraging data-driven disaster insights?</h2>
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                            <Link to="/dashboard" style={{ padding: '0.875rem 1.5rem', backgroundColor: '#0f62fe', color: 'white', border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                                Explore Dashboard <ArrowRight size={18} />
                            </Link>
                            <Link to="/methodology" style={{ padding: '0.875rem 1.5rem', backgroundColor: '#ffffff', color: '#111827', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '1rem', fontWeight: 600, textDecoration: 'none' }}>
                                View Research
                            </Link>
                        </div>
                    </div>
                </div>

                {/* PRO TOUCH BOTTOM LINE */}
                <div style={{ textAlign: 'center', marginTop: '2rem', padding: '3rem 0', borderTop: '1px solid #eaeaea' }}>
                    <p style={{ fontSize: '1.15rem', color: '#4b5563', fontStyle: 'italic', margin: 0, fontWeight: 500 }}>
                        “Empowering smarter decisions through disaster risk intelligence in the United States.”
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
