import { motion, AnimatePresence } from 'framer-motion';
import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Gift, Sun, Moon, ChevronRight, Sparkles, Clock, ArrowRight, Tag, Percent, Star } from 'lucide-react';
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

const promotions = [
    {
        title: 'Launch Special',
        description: 'Get 20% off on all freelance development projects booked in January 2025!',
        discount: '20% OFF',
        validUntil: 'January 31, 2025',
        code: 'LAUNCH2025',
        featured: true,
        gradient: 'from-purple-500 to-pink-500'
    },
    {
        title: 'First Project Discount',
        description: 'New clients get 15% off their first web development or AI project.',
        discount: '15% OFF',
        validUntil: 'Ongoing',
        code: 'FIRST15',
        featured: false,
        gradient: 'from-blue-500 to-cyan-500'
    },
    {
        title: 'Bundle Package',
        description: 'Book web development + video editing together and save ₹2,000.',
        discount: '₹2,000 OFF',
        validUntil: 'Limited Time',
        code: 'BUNDLE2K',
        featured: false,
        gradient: 'from-green-500 to-emerald-500'
    }
];

const packages = [
    {
        name: 'Starter',
        price: '₹5,000',
        description: 'Perfect for small projects',
        features: ['Basic website (up to 5 pages)', 'Mobile responsive', '1 revision round', 'Delivery in 7 days'],
        popular: false
    },
    {
        name: 'Professional',
        price: '₹15,000',
        description: 'For growing businesses',
        features: ['Full website (up to 15 pages)', 'Mobile responsive', 'SEO optimization', '3 revision rounds', 'Delivery in 14 days', 'Basic analytics setup'],
        popular: true
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        description: 'Large-scale solutions',
        features: ['Custom web application', 'Full SEO & analytics', 'Unlimited revisions', 'Priority support', 'Ongoing maintenance', 'Performance optimization'],
        popular: false
    }
];

const Promotions = () => {
    const [isDark, setIsDark] = useState(true);
    const toggleTheme = useCallback(() => setIsDark(prev => !prev), []);

    return (
        <>
            <SEO
                title="Promotions & Offers - UTHAKKAN"
                description="Check out current promotions, discounts, and special offers on UTHAKKAN's freelance development services."
                url="https://uthakkan.com/promotions"
            />
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />

            <div className={`min-h-screen pt-16 overflow-hidden transition-colors duration-500 ${isDark ? 'bg-slate-900' : 'bg-gray-50'}`}>
                {/* Hero */}
                <section className="relative py-20 overflow-hidden">
                    <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900' : 'bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50'}`} />

                    <div className="relative w-full px-4 sm:px-8 md:px-16 lg:px-24 text-center z-10">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                            className={`inline-flex items-center px-4 py-2 backdrop-blur-md rounded-full text-sm font-medium mb-6 border ${isDark ? 'bg-pink-500/20 text-pink-300 border-pink-500/30' : 'bg-pink-100 text-pink-700 border-pink-200'}`}>
                            <Gift className="h-4 w-4 mr-2" />
                            Special Offers
                            <ChevronRight className="h-4 w-4 ml-1 opacity-60" />
                        </motion.div>

                        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                            className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Promotions & <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Offers</span>
                        </motion.h1>

                        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                            className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
                            Exclusive deals on development services and digital products.
                        </motion.p>
                    </div>
                </section>

                {/* Active Promotions */}
                <section className={`py-12 ${isDark ? 'bg-slate-800' : 'bg-white'}`}>
                    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
                        <h2 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            <Sparkles className="inline h-6 w-6 mr-2 text-yellow-400" />Active Promotions
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {promotions.map((promo, i) => (
                                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                    className={`relative p-6 rounded-2xl border overflow-hidden ${promo.featured ? `bg-gradient-to-br ${promo.gradient} text-white` : isDark ? 'bg-slate-700 border-slate-600' : 'bg-gray-50 border-gray-200'}`}>
                                    {promo.featured && (
                                        <div className="absolute top-3 right-3 px-2 py-1 bg-white/20 rounded-full text-xs font-medium backdrop-blur-sm">
                                            <Star className="inline h-3 w-3 mr-1" />Featured
                                        </div>
                                    )}
                                    <div className={`text-3xl font-bold mb-2 ${promo.featured ? 'text-white' : isDark ? 'text-white' : 'text-gray-900'}`}>
                                        <Percent className="inline h-6 w-6 mr-1" />{promo.discount}
                                    </div>
                                    <h3 className={`text-xl font-bold mb-2 ${promo.featured ? 'text-white' : isDark ? 'text-white' : 'text-gray-900'}`}>{promo.title}</h3>
                                    <p className={`text-sm mb-4 ${promo.featured ? 'text-white/90' : isDark ? 'text-slate-300' : 'text-gray-600'}`}>{promo.description}</p>
                                    <div className={`flex items-center gap-2 text-sm mb-4 ${promo.featured ? 'text-white/80' : isDark ? 'text-slate-400' : 'text-gray-500'}`}>
                                        <Clock className="h-4 w-4" />Valid until: {promo.validUntil}
                                    </div>
                                    <div className={`p-3 rounded-xl text-center font-mono font-bold ${promo.featured ? 'bg-white/20' : isDark ? 'bg-slate-600' : 'bg-gray-200'}`}>
                                        <Tag className="inline h-4 w-4 mr-2" />{promo.code}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing Packages */}
                <section className={`py-12 ${isDark ? 'bg-slate-900' : 'bg-gray-50'}`}>
                    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
                        <div className="text-center mb-12">
                            <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Service Packages</h2>
                            <p className={isDark ? 'text-slate-400' : 'text-gray-600'}>Choose the right package for your project</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            {packages.map((pkg, i) => (
                                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                    className={`relative p-6 rounded-2xl border ${pkg.popular ? 'border-purple-500 ring-2 ring-purple-500/20' : isDark ? 'border-slate-700' : 'border-gray-200'} ${isDark ? 'bg-slate-800' : 'bg-white'}`}>
                                    {pkg.popular && (
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-purple-500 text-white text-xs font-medium rounded-full">
                                            Most Popular
                                        </div>
                                    )}
                                    <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{pkg.name}</h3>
                                    <div className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{pkg.price}</div>
                                    <p className={`text-sm mb-6 ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>{pkg.description}</p>
                                    <ul className="space-y-2 mb-6">
                                        {pkg.features.map((feature, j) => (
                                            <li key={j} className={`text-sm flex items-start ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
                                                <ChevronRight className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />{feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link to="/freelancing">
                                        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                                            className={`w-full py-3 rounded-xl font-medium ${pkg.popular ? 'bg-purple-500 text-white' : isDark ? 'bg-slate-700 text-white hover:bg-slate-600' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                                            Get Started
                                        </motion.button>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className={`py-16 ${isDark ? 'bg-slate-800' : 'bg-white'}`}>
                    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 text-center">
                        <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Ready to get started?</h2>
                        <p className={`mb-6 ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>Contact us to discuss your project and apply your discount code.</p>
                        <Link to="/freelancing">
                            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-xl flex items-center mx-auto">
                                Get a Quote <ArrowRight className="h-5 w-5 ml-2" />
                            </motion.button>
                        </Link>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Promotions;
