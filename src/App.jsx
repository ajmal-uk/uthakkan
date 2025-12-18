import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, memo, Component, Suspense, lazy } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

// Direct imports for light pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Developer from './pages/Developer';
import Contact from './pages/Contact';

// Lazy load heavy pages to prevent navigation freeze
const Products = lazy(() => import('./pages/Products'));

// Loading fallback for lazy pages
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-900">
    <div className="text-center">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-slate-400 text-sm">Loading...</p>
    </div>
  </div>
);

// Scroll to top on route change
const ScrollToTop = memo(() => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
});

// Error Boundary
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900">
          <div className="text-center p-8">
            <h1 className="text-4xl font-bold text-white mb-4">Oops!</h1>
            <p className="text-slate-400 mb-6">Something went wrong.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium hover:shadow-lg transition-all"
            >
              Refresh
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// Memoized Footer
const MemoizedFooter = memo(Footer);
const MemoizedNavbar = memo(Navbar);

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="flex flex-col min-h-screen">
          <ScrollToTop />
          <MemoizedNavbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/products" element={<Suspense fallback={<PageLoader />}><Products /></Suspense>} />
              <Route path="/developer" element={<Developer />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <MemoizedFooter />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
