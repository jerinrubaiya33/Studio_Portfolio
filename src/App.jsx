import { Component, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HeaderNav from './components/HeaderNav';
import Features from './pages/Features';
import Hero from './pages/Hero';
import Landing from './pages/Landing';
import Project from './pages/Project';
import Choose from './pages/Choose';
import People from './pages/People';
import Meet from './pages/Meet';
import About from './pages/About';
import Contact from './pages/Contact';
import FullProject from './pages/FullProject';
import ProjectDetails from './components/ProjectDetails';
import LoadingScreen from './components/LoadingScreen';
import News from './pages/News';
import Studio from './pages/Studio';
import Services from './pages/Services';
import ContactPage from './pages/ContactPage';

// Catches any runtime error in the app so the user never sees a blank page
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error('App crashed:', error, info);
  }

  render() {
    if (this.state.error) {
      return (
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            textAlign: 'center',
            fontFamily: 'monospace',
            backgroundColor: '#f4f1e8',
            color: '#333',
          }}
        >
          <h1 style={{ fontSize: 28, margin: 0 }}>Something went wrong</h1>
          <p style={{ marginTop: 12, maxWidth: 640, lineHeight: 1.6 }}>
            {String(this.state.error?.message || this.state.error)}
          </p>
          <button
            onClick={() => {
              this.setState({ error: null });
              window.location.href = '/';
            }}
            style={{
              marginTop: 24,
              padding: '12px 28px',
              background: '#5b7fc7',
              color: '#fff',
              border: 0,
              borderRadius: 6,
              cursor: 'pointer',
              fontSize: 14,
            }}
          >
            Back to Home
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Helper component to handle scrolling to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const ExteriorPortfolio = () => (
  <div className="pt-32 text-center text-2xl">
    Exterior Portfolio Page Content Under Construction
  </div>
);

const InteriorPortfolio = () => (
  <div className="pt-32 text-center text-2xl">
    Interior Portfolio Page Content Under Construction
  </div>
);

const MainLandingPage = () => (
  <>
    <div id="top" />
    {/* <Hero /> */}
    <div id="about" className="scroll-mt-0">
      <About />
    </div>
    {/* <div id="services" className="scroll-mt-0">
      <Landing />
    </div> */}
    {/* <Features /> */}
    <div id="project" className="scroll-mt-0">
      <Project />
    </div>
    <News />
    <Meet />
    {/* <Choose /> */}
    {/* <div id="who-we-are" className="scroll-mt-0">
      <People />
    </div> */}
    <div id="contact" className="scroll-mt-0">
      <Contact />
    </div>
  </>
);

function AppContent() {
  const location = useLocation();
  const isFullProjectPage = location.pathname === '/projects';
  const isProjectDetailsPage = location.pathname.startsWith('/projects/');
  const isStudioPage = location.pathname === '/studio';
  const isServicesPage = location.pathname === '/services';
  const isContactPage = location.pathname === '/contact';

  return (
    <ErrorBoundary>
      <ScrollToTop />
      {!isProjectDetailsPage && <HeaderNav />}
      {!isFullProjectPage && !isStudioPage && !isServicesPage && !isContactPage && (
        <Navbar />
      )}

      <Routes>
        <Route path="/" element={<MainLandingPage />} />
        <Route path="/projects" element={<FullProject />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/exterior-portfolio" element={<ExteriorPortfolio />} />
        <Route path="/interior-portfolio" element={<InteriorPortfolio />} />
      </Routes>
    </ErrorBoundary>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;