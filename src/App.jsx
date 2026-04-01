import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Publications from './pages/Publications';
import PublicationDetails from './pages/PublicationDetails';
import Evidence from './pages/Evidence';
import ResearchAreas from './pages/ResearchAreas';
import ResearchAreaDetail from './pages/ResearchAreaDetail';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import News from './pages/News';
import NewsDetails from './pages/NewsDetails';
import Search from './pages/Search';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Insights from './pages/Insights';
import DisasterOverview from './pages/DisasterOverview';
import PredictiveModeling from './pages/PredictiveModeling';
import ModelEvaluation from './pages/ModelEvaluation';
import Methodology from './pages/Methodology';
import WhyItMatters from './pages/WhyItMatters';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/publications/:id" element={<PublicationDetails />} />
          <Route path="/evidence" element={<Evidence />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/research" element={<ResearchAreas />} />
          <Route path="/research/:slug" element={<ResearchAreaDetail />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:slug" element={<NewsDetails />} />
          <Route path="/search" element={<Search />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/overview" element={<DisasterOverview />} />
          <Route path="/modeling" element={<PredictiveModeling />} />
          <Route path="/evaluation" element={<ModelEvaluation />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="/why-it-matters" element={<WhyItMatters />} />
          <Route path="/privacy" element={<div>Privacy Policy</div>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
