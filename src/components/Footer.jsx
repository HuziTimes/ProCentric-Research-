import { Link } from 'react-router-dom';

const Footer = () => (
    <footer className="footer">
        <div className="container">
            <div className="footer-grid">
                <div>
                    <h3 className="mb-4">ProCentric Research Division</h3>
                    <p style={{ fontSize: '0.875rem', maxWidth: '300px' }}>
                        Advancing the frontiers of Insurance Analytics, Artificial Intelligence, and Disaster Preparedness for public benefit.
                    </p>
                </div>
                <div className="footer-links">
                    <h4>Navigation</h4>
                    <Link to="/research">Research Areas</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/publications">Publications</Link>
                </div>
                <div className="footer-links">
                    <h4>Resources</h4>
                    <Link to="/evidence">Recognition</Link>
                    <Link to="/news">Updates</Link>
                    <Link to="/privacy">Privacy Policy</Link>
                </div>
                <div className="footer-links">
                    <h4>Collaborate</h4>
                    <Link to="/contact">Contact Us</Link>
                    <a href="#">Institutional Login</a>
                </div>
            </div>
            <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #393939', fontSize: '0.75rem', color: 'rgba(244, 244, 244, 0.8)' }}>
                &copy; {new Date().getFullYear()} ProCentric Research Division. Documentation for Academic Review & Institutional Collaboration.
            </div>
        </div>
    </footer>
);

export default Footer;
