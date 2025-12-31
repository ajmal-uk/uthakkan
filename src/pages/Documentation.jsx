import { motion, AnimatePresence } from 'framer-motion';
import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Book, Sun, Moon, ChevronRight, ExternalLink, Code, Rocket, Zap, Terminal, FileCode, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const ThemeToggle = ({ isDark, toggleTheme }) => (
    <motion.button onClick={toggleTheme} whileHover={{ scale: 1.1, rotate: 15 }} whileTap={{ scale: 0.9 }}
        className={`fixed top-24 right-6 z-50 p-3.5 rounded-full shadow-xl backdrop-blur-md border transition-all duration-300 ${isDark ? 'bg-slate-800/90 border-slate-600 text-yellow-400 hover:bg-slate-700' : 'bg-white/90 border-gray-200 text-slate-700 hover:bg-gray-50'}`}>
        <AnimatePresence mode="wait">
            <motion.div key={isDark ? 'moon' : 'sun'} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </motion.div>
        </AnimatePresence>
    </motion.button>
);

const products = [
    {
        name: 'Byte AI',
        description: 'AI-powered assistance platform for productivity',
        icon: Zap,
        color: 'from-blue-500 to-cyan-500',
        docs: [
            { title: 'Getting Started', desc: 'Quick start guide for new users' },
            { title: 'API Reference', desc: 'Complete API documentation' },
            { title: 'Integration Guide', desc: 'Connect with your tools' },
            { title: 'Best Practices', desc: 'Tips for optimal usage' }
        ]
    },
    {
        name: 'ToolPix',
        description: 'Collection of practical digital tools',
        icon: Terminal,
        color: 'from-green-500 to-emerald-500',
        docs: [
            { title: 'Tool Overview', desc: 'All available tools explained' },
            { title: 'Usage Examples', desc: 'Real-world use cases' },
            { title: 'Customization', desc: 'Personalize your experience' }
        ]
    },
    {
        name: 'Zymail',
        description: 'Lightweight email utility',
        icon: FileCode,
        color: 'from-purple-500 to-pink-500',
        docs: [
            { title: 'Setup Guide', desc: 'Configuration and setup' },
            { title: 'Features', desc: 'Explore all features' }
        ]
    }
];

const Documentation = () => {
    const [isDark, setIsDark] = useState(true);
    const toggleTheme = useCallback(() => setIsDark(prev => !prev), []);

    return (
        <>
            <SEO
                title="Documentation - UTHAKKAN"
                description="Documentation and guides for UTHAKKAN products. Get started with Byte AI, ToolPix, and other digital tools."
                url="https://uthakkan.com/docs"
            />
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />

            <div className={`min-h-screen pt-16 overflow-hidden transition-colors duration-500 ${isDark ? 'bg-slate-900' : 'bg-gray-50'}`}>
                {/* Hero */}
                <section className="relative py-20 overflow-hidden">
                    <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' : 'bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50'}`} />

                    <div className="relative w-full px-4 sm:px-8 md:px-16 lg:px-24 text-center z-10">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                            className={`inline-flex items-center px-4 py-2 backdrop-blur-md rounded-full text-sm font-medium mb-6 border ${isDark ? 'bg-green-500/20 text-green-300 border-green-500/30' : 'bg-green-100 text-green-700 border-green-200'}`}>
                            <Book className="h-4 w-4 mr-2" />
                            Documentation
                            <ChevronRight className="h-4 w-4 ml-1 opacity-60" />
                        </motion.div>

                        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                            className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Product <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Docs</span>
                        </motion.h1>

                        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                            className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
                            Explore guides, references, and tutorials for all UTHAKKAN products.
                        </motion.p>
                    </div>
                </section>

                {/* Quick Start */}
                <section className={`py-12 ${isDark ? 'bg-slate-800' : 'bg-white'}`}>
                    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            className={`p-8 rounded-3xl border ${isDark ? 'bg-gradient-to-br from-green-900/30 to-emerald-900/30 border-green-800/50' : 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-200'}`}>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                                    <Rocket className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Quick Start</h2>
                                    <p className={isDark ? 'text-slate-400' : 'text-gray-600'}>Get up and running in minutes</p>
                                </div>
                            </div>
                            <div className={`p-4 rounded-xl font-mono text-sm ${isDark ? 'bg-slate-900 text-green-400' : 'bg-gray-900 text-green-400'}`}>
                                <Code className="inline h-4 w-4 mr-2" />
                                Visit our products page and choose a tool to get started →
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Product Docs */}
                <section className={`py-12 ${isDark ? 'bg-slate-900' : 'bg-gray-50'}`}>
                    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
                        <h2 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>Product Documentation</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {products.map((product, i) => {
                                const Icon = product.icon;
                                return (
                                    <motion.div key={product.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                        className={`p-6 rounded-2xl border ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'}`}>
                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-4`}>
                                            <Icon className="h-6 w-6 text-white" />
                                        </div>
                                        <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{product.name}</h3>
                                        <p className={`text-sm mb-4 ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>{product.description}</p>
                                        <div className="space-y-2">
                                            {product.docs.map((doc, j) => (
                                                <div key={j} className={`p-3 rounded-lg cursor-pointer transition-all ${isDark ? 'bg-slate-700/50 hover:bg-slate-700' : 'bg-gray-50 hover:bg-gray-100'}`}>
                                                    <div className={`font-medium text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>{doc.title}</div>
                                                    <div className={`text-xs ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>{doc.desc}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Help */}
                <section className={`py-16 ${isDark ? 'bg-slate-800' : 'bg-white'}`}>
                    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 text-center">
                        <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Need Help?</h2>
                        <p className={`mb-6 ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>Can't find what you're looking for? Contact our support team.</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link to="/contact">
                                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                                    className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-medium rounded-xl flex items-center">
                                    Contact Support <ArrowRight className="h-4 w-4 ml-2" />
                                </motion.button>
                            </Link>
                            <Link to="/faq">
                                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                                    className={`px-6 py-3 rounded-xl font-medium flex items-center border ${isDark ? 'border-slate-600 text-white hover:bg-slate-700' : 'border-gray-300 text-gray-700 hover:bg-gray-100'}`}>
                                    View FAQ
                                </motion.button>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Documentation;
