import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useEffect, memo, Component } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Products = lazy(() => import('./pages/Products'));
const Developer = lazy(() => import('./pages/Developer'));
const Contact = lazy(() => import('./pages/Contact'));

// Prefetch routes on idle
const prefetchRoutes = () => {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      import('./pages/About');
      import('./pages/Services');
      import('./pages/Products');
      import('./pages/Developer');
      import('./pages/Contact');
    });
  }
};

// Loading fallback - memoized
const PageLoader = memo(() => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="flex flex-col items-center space-y-3">
      <div className="w-10 h-10 border-3 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-400 text-sm">Loading...</p>
    </div>
  </div>
));

// Scroll to top on route change
const ScrollToTop = memo(() => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
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
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Oops!</h1>
            <p className="text-gray-600 mb-6">Something went wrong.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
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

function App() {
  // Prefetch routes after initial load
  useEffect(() => {
    prefetchRoutes();
  }, []);

  return (
    <ErrorBoundary>
      <Router>
        <div className="flex flex-col min-h-screen">
          <ScrollToTop />
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/products" element={<Products />} />
                <Route path="/developer" element={<Developer />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </main>
          <MemoizedFooter />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
