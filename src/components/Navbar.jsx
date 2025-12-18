import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Rocket, Menu, X, Home, Info, Briefcase, Package, User, Mail, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    const isActive = (path) => location.pathname === path;

    const navLinks = [
        { path: '/', label: 'Home', icon: Home },
        { path: '/about', label: 'About', icon: Info },
        { path: '/services', label: 'Services', icon: Briefcase },
        { path: '/products', label: 'Products', icon: Package },
        { path: '/developer', label: 'Developer', icon: User },
        { path: '/contact', label: 'Contact', icon: Mail },
    ];

    return (
        <>
            {/* Desktop & Mobile Navbar */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-lg shadow-gray-200/20'
                    : 'bg-white/60 backdrop-blur-md'
                    }`}
            >
                <div className="w-full px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 lg:h-18 max-w-7xl mx-auto">
                        {/* Logo */}
                        <Link to="/" className="flex items-center space-x-3 flex-shrink-0 group">
                            <motion.div
                                whileHover={{ rotate: 12, scale: 1.1 }}
                                whileTap={{ scale: 0.92 }}
                                className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-2.5 rounded-xl shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-shadow duration-300"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity" />
                                <Rocket className="relative h-5 w-5 text-white" />
                            </motion.div>
                            <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                                UTHAKKAN
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center">
                            <div className="flex items-center bg-gray-100/80 backdrop-blur-sm rounded-2xl p-1.5 border border-gray-200/50">
                                {navLinks.slice(0, 5).map((link) => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        className="relative px-4 py-2 rounded-xl transition-all duration-300"
                                    >
                                        {isActive(link.path) && (
                                            <motion.div
                                                layoutId="activeNav"
                                                className="absolute inset-0 bg-white rounded-xl shadow-md shadow-gray-200/50"
                                                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                            />
                                        )}
                                        <span className={`relative z-10 text-sm font-medium transition-colors duration-200 ${isActive(link.path)
                                            ? 'text-gray-900'
                                            : 'text-gray-600 hover:text-gray-900'
                                            }`}>
                                            {link.label}
                                        </span>
                                    </Link>
                                ))}
                            </div>

                            {/* Contact CTA Button */}
                            <Link to="/contact" className="ml-4">
                                <motion.button
                                    whileHover={{ scale: 1.03, y: -1 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="group relative px-6 py-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white text-sm font-semibold rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                                    <span className="relative flex items-center">
                                        Contact
                                        <ArrowUpRight className="h-4 w-4 ml-1.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </span>
                                </motion.button>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden">
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="relative p-2.5 text-gray-700 rounded-xl bg-gray-100/80 backdrop-blur-sm border border-gray-200/50 hover:bg-gray-200/80 transition-colors"
                            >
                                <Menu className="h-5 w-5" />
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden"
                        />

                        {/* Sidebar Panel */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
                            className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white/95 backdrop-blur-xl shadow-2xl z-[70] lg:hidden overflow-hidden"
                        >
                            {/* Header with gradient */}
                            <div className="relative px-6 py-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
                                <div className="relative flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <div className="bg-white/20 backdrop-blur-sm p-2 rounded-xl">
                                            <Rocket className="h-5 w-5 text-white" />
                                        </div>
                                        <div>
                                            <span className="font-bold text-white text-lg">UTHAKKAN</span>
                                            <p className="text-white/70 text-xs">Digital Excellence</p>
                                        </div>
                                    </div>
                                    <motion.button
                                        whileTap={{ scale: 0.9, rotate: 90 }}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="p-2 text-white/80 hover:text-white rounded-xl hover:bg-white/10 transition-colors"
                                    >
                                        <X className="h-5 w-5" />
                                    </motion.button>
                                </div>
                            </div>

                            {/* Navigation Links */}
                            <div className="p-4 space-y-1.5 overflow-y-auto" style={{ height: 'calc(100% - 180px)' }}>
                                <div className="flex items-center px-3 py-2 mb-2">
                                    <Sparkles className="h-4 w-4 text-indigo-500 mr-2" />
                                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Navigation</span>
                                </div>

                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.path}
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05, duration: 0.3 }}
                                    >
                                        <Link
                                            to={link.path}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className={`flex items-center space-x-4 px-4 py-3.5 rounded-2xl text-base font-medium transition-all duration-300 ${isActive(link.path)
                                                ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30'
                                                : 'text-gray-700 hover:bg-gray-100 active:bg-gray-200'
                                                }`}
                                        >
                                            <div className={`p-2 rounded-xl transition-colors ${isActive(link.path)
                                                ? 'bg-white/20'
                                                : 'bg-gray-100'
                                                }`}>
                                                <link.icon className={`h-5 w-5 ${isActive(link.path) ? 'text-white' : 'text-gray-600'}`} />
                                            </div>
                                            <span>{link.label}</span>
                                            {isActive(link.path) && (
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    className="ml-auto w-2 h-2 bg-white rounded-full"
                                                />
                                            )}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Footer */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-50 to-transparent">
                                <div className="bg-gray-100/80 backdrop-blur-sm rounded-2xl p-4 border border-gray-200/50">
                                    <p className="text-xs text-gray-500 text-center mb-2">
                                        © 2025 UTHAKKAN. All rights reserved.
                                    </p>
                                    <p className="text-xs text-gray-400 text-center">
                                        Built with ❤️ by Ajmal U K
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
