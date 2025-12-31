import { motion, AnimatePresence } from 'framer-motion';
import { useState, useCallback } from 'react';
import { Cookie, Sun, Moon, ChevronRight, Calendar, Settings } from 'lucide-react';
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

const CookiePolicy = () => {
    const [isDark, setIsDark] = useState(true);
    const toggleTheme = useCallback(() => setIsDark(prev => !prev), []);

    const cookieTypes = [
        {
            name: "Essential Cookies",
            description: "These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.",
            examples: ["Session cookies", "Authentication cookies", "Security cookies"],
            required: true
        },
        {
            name: "Preference Cookies",
            description: "These cookies allow the website to remember choices you make (such as your language preference or theme selection) and provide enhanced, more personal features.",
            examples: ["Language settings", "Theme preferences", "Display settings"],
            required: false
        },
        {
            name: "Analytics Cookies",
            description: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website and services.",
            examples: ["Google Analytics", "Page view tracking", "Feature usage metrics"],
            required: false
        },
        {
            name: "Marketing Cookies",
            description: "These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user.",
            examples: ["Advertising cookies", "Social media tracking", "Retargeting cookies"],
            required: false
        }
    ];

    return (
        <>
            <SEO
                title="Cookie Policy - UTHAKKAN"
                description="Learn about how UTHAKKAN uses cookies and similar technologies on our website."
                url="https://uthakkan.com/cookies"
            />
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />

            <div className={`min-h-screen pt-16 overflow-hidden transition-colors duration-500 ${isDark ? 'bg-slate-900' : 'bg-gray-50'}`}>
                {/* Hero */}
                <section className="relative py-20 overflow-hidden">
                    <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' : 'bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50'}`} />

                    <div className="relative w-full px-4 sm:px-8 md:px-16 lg:px-24 text-center z-10">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                            className={`inline-flex items-center px-4 py-2 backdrop-blur-md rounded-full text-sm font-medium mb-6 border ${isDark ? 'bg-amber-500/20 text-amber-300 border-amber-500/30' : 'bg-amber-100 text-amber-700 border-amber-200'}`}>
                            <Cookie className="h-4 w-4 mr-2" />
                            Legal
                            <ChevronRight className="h-4 w-4 ml-1 opacity-60" />
                        </motion.div>

                        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                            className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Cookie Policy
                        </motion.h1>

                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                            className={`flex items-center justify-center gap-4 text-sm ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>
                            <span className="flex items-center"><Calendar className="h-4 w-4 mr-1" /> Last Updated: January 2025</span>
                        </motion.div>
                    </div>
                </section>

                {/* Content */}
                <section className={`py-16 ${isDark ? 'bg-slate-800' : 'bg-white'}`}>
                    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
                        <div className="max-w-4xl mx-auto space-y-12">
                            {/* What Are Cookies */}
                            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>What Are Cookies?</h2>
                                <p className={`leading-relaxed ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
                                    Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners. Cookies can be "persistent" or "session" cookies.
                                </p>
                            </motion.div>

                            {/* Cookie Types */}
                            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Types of Cookies We Use</h2>
                                <div className="grid gap-6">
                                    {cookieTypes.map((cookie, i) => (
                                        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                            className={`p-6 rounded-2xl border ${isDark ? 'bg-slate-700/50 border-slate-600' : 'bg-gray-50 border-gray-200'}`}>
                                            <div className="flex items-center justify-between mb-3">
                                                <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{cookie.name}</h3>
                                                {cookie.required && (
                                                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/20 text-blue-400">Required</span>
                                                )}
                                            </div>
                                            <p className={`mb-4 ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>{cookie.description}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {cookie.examples.map((ex, j) => (
                                                    <span key={j} className={`px-3 py-1 text-xs rounded-full ${isDark ? 'bg-slate-600 text-slate-300' : 'bg-gray-200 text-gray-600'}`}>{ex}</span>
                                                ))}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Managing Cookies */}
                            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                    <Settings className="inline h-6 w-6 mr-2" />Managing Cookies
                                </h2>
                                <p className={`leading-relaxed mb-4 ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
                                    Most web browsers allow you to control cookies through their settings. You can set your browser to:
                                </p>
                                <ul className={`list-disc list-inside space-y-2 ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
                                    <li>Block all cookies</li>
                                    <li>Accept only first-party cookies</li>
                                    <li>Delete cookies when you close your browser</li>
                                    <li>Browse in "private" or "incognito" mode</li>
                                </ul>
                                <p className={`mt-4 leading-relaxed ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
                                    Please note that blocking cookies may impact your experience on our website and limit certain functionality.
                                </p>
                            </motion.div>

                            {/* Contact */}
                            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Contact Us</h2>
                                <p className={`leading-relaxed ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
                                    If you have any questions about our Cookie Policy, please contact us at contact@uthakkan.com
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default CookiePolicy;
