import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
        }
    };

    return (
        <header className="header">
            <div className="container nav-container">
                <Link to="/" className="logo">ProCentric <span>Research</span></Link>

                {/* Desktop Nav */}
                <nav className="nav-links">
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/research">Research Areas</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                    <NavLink to="/insights">Insights</NavLink>
                    <NavLink to="/publications">Publications</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </nav>

                {/* Search bar */}
                <form onSubmit={handleSearch} className="nav-search desktop-only" role="search">
                    <Search size={18} strokeWidth={2} />
                    <input
                        type="search"
                        placeholder="Search research, projects, news…"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        aria-label="Search"
                    />
                </form>

                {/* Mobile Nav Overlay */}
                {isMenuOpen && (
                    <div className="mobile-nav-overlay animate-fade" style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100vh',
                        background: 'white',
                        zIndex: 1000,
                        padding: '2rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '2rem'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Link to="/" className="logo" onClick={() => setIsMenuOpen(false)}>ProCentric <span>Research</span></Link>
                            <button onClick={() => setIsMenuOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                                <X size={24} />
                            </button>
                        </div>
                        <nav style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.25rem' }}>
                            <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</NavLink>
                            <NavLink to="/research" onClick={() => setIsMenuOpen(false)}>Research Areas</NavLink>
                            <NavLink to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</NavLink>
                            <NavLink to="/dashboard" onClick={() => setIsMenuOpen(false)}>Dashboard</NavLink>
                            <NavLink to="/insights" onClick={() => setIsMenuOpen(false)}>Insights</NavLink>
                            <NavLink to="/publications" onClick={() => setIsMenuOpen(false)}>Publications</NavLink>
                            <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
                        </nav>
                    </div>
                )}

                <button
                    className="mobile-toggle"
                    onClick={() => setIsMenuOpen(true)}
                    style={{ padding: '0.5rem', marginLeft: 'auto' }}
                    aria-label="Open menu"
                >
                    <Menu size={24} />
                </button>
            </div>
        </header>
    );
};

export default Navbar;
