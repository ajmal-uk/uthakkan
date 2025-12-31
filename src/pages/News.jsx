import { motion, AnimatePresence } from 'framer-motion';
import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Newspaper, Sun, Moon, ChevronRight, Calendar, ArrowRight, Sparkles, Rocket, Award, Users } from 'lucide-react';
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

const newsItems = [
    {
        slug: 'uthakkan-launch-2025',
        title: 'UTHAKKAN Officially Launches',
        excerpt: 'We are excited to announce the official launch of UTHAKKAN, a new technology company focused on AI-powered tools and digital experiences.',
        date: '2025-01-01',
        type: 'announcement',
        icon: Rocket
    },
    {
        slug: 'byte-ai-release',
        title: 'Byte AI Platform Now Available',
        excerpt: 'Our flagship AI-powered assistance platform is now live. Experience the future of AI-driven productivity.',
        date: '2025-01-05',
        type: 'product',
        icon: Sparkles
    },
    {
        slug: 'freelance-services-open',
        title: 'Freelance Services Now Open',
        excerpt: 'We are now accepting freelance projects for web development, video editing, AI solutions, and digital consulting.',
        date: '2025-01-10',
        type: 'service',
        icon: Users
    },
    {
        slug: 'toolpix-launch',
        title: 'ToolPix Digital Tools Suite Released',
        excerpt: 'ToolPix, our collection of practical digital tools for everyday tasks, is now available to everyone.',
        date: '2025-01-15',
        type: 'product',
        icon: Award
    }
];

const News = () => {
    const [isDark, setIsDark] = useState(true);
    const toggleTheme = useCallback(() => setIsDark(prev => !prev), []);

    const getTypeColor = (type) => {
        const colors = {
            announcement: { bg: 'bg-blue-500/20', text: 'text-blue-400', border: 'border-blue-500/30' },
            product: { bg: 'bg-green-500/20', text: 'text-green-400', border: 'border-green-500/30' },
            service: { bg: 'bg-purple-500/20', text: 'text-purple-400', border: 'border-purple-500/30' }
        };
        return colors[type] || colors.announcement;
    };

    return (
        <>
            <SEO
                title="News & Announcements - UTHAKKAN"
                description="Stay updated with the latest news, product launches, and announcements from UTHAKKAN."
                url="https://uthakkan.com/news"
            />
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />

            <div className={`min-h-screen pt-16 overflow-hidden transition-colors duration-500 ${isDark ? 'bg-slate-900' : 'bg-gray-50'}`}>
                {/* Hero */}
                <section className="relative py-20 overflow-hidden">
                    <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' : 'bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50'}`} />

                    <div className="relative w-full px-4 sm:px-8 md:px-16 lg:px-24 text-center z-10">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                            className={`inline-flex items-center px-4 py-2 backdrop-blur-md rounded-full text-sm font-medium mb-6 border ${isDark ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30' : 'bg-cyan-100 text-cyan-700 border-cyan-200'}`}>
                            <Newspaper className="h-4 w-4 mr-2" />
                            News
                            <ChevronRight className="h-4 w-4 ml-1 opacity-60" />
                        </motion.div>

                        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                            className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            News & <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Updates</span>
                        </motion.h1>

                        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                            className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
                            The latest announcements, product launches, and company updates.
                        </motion.p>
                    </div>
                </section>

                {/* Timeline */}
                <section className={`py-16 ${isDark ? 'bg-slate-800' : 'bg-white'}`}>
                    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
                        <div className="max-w-4xl mx-auto">
                            <div className="relative">
                                {/* Timeline line */}
                                <div className={`absolute left-8 top-0 bottom-0 w-0.5 ${isDark ? 'bg-slate-700' : 'bg-gray-200'}`} />

                                {/* News items */}
                                <div className="space-y-8">
                                    {newsItems.map((news, i) => {
                                        const typeColor = getTypeColor(news.type);
                                        const Icon = news.icon;
                                        return (
                                            <motion.div key={news.slug} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                                className="relative pl-20">
                                                {/* Icon */}
                                                <div className={`absolute left-0 w-16 h-16 rounded-2xl flex items-center justify-center ${typeColor.bg} border ${typeColor.border}`}>
                                                    <Icon className={`h-6 w-6 ${typeColor.text}`} />
                                                </div>

                                                {/* Content */}
                                                <div className={`p-6 rounded-2xl border transition-all hover:shadow-lg ${isDark ? 'bg-slate-700/50 border-slate-600 hover:border-slate-500' : 'bg-gray-50 border-gray-200 hover:border-gray-300'}`}>
                                                    <div className={`flex items-center gap-3 mb-3 text-sm ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>
                                                        <span className="flex items-center"><Calendar className="h-4 w-4 mr-1" />{news.date}</span>
                                                        <span className={`px-2 py-0.5 rounded-full text-xs capitalize ${typeColor.bg} ${typeColor.text}`}>{news.type}</span>
                                                    </div>
                                                    <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{news.title}</h3>
                                                    <p className={`${isDark ? 'text-slate-300' : 'text-gray-600'}`}>{news.excerpt}</p>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Subscribe */}
                <section className={`py-16 ${isDark ? 'bg-slate-900' : 'bg-gray-50'}`}>
                    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 text-center">
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            className={`max-w-2xl mx-auto p-8 rounded-3xl ${isDark ? 'bg-gradient-to-br from-cyan-900/50 to-blue-900/50 border border-cyan-800/50' : 'bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200'}`}>
                            <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Stay Updated</h2>
                            <p className={`mb-6 ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>Follow us on social media for the latest news and updates.</p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <a href="https://x.com/ajmal_uk_" target="_blank" rel="noopener noreferrer">
                                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                                        className={`px-6 py-3 rounded-xl font-medium flex items-center ${isDark ? 'bg-slate-700 text-white hover:bg-slate-600' : 'bg-white text-gray-700 hover:bg-gray-100 shadow'}`}>
                                        Twitter/X <ArrowRight className="h-4 w-4 ml-2" />
                                    </motion.button>
                                </a>
                                <a href="https://github.com/ajmal-uk" target="_blank" rel="noopener noreferrer">
                                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                                        className={`px-6 py-3 rounded-xl font-medium flex items-center ${isDark ? 'bg-slate-700 text-white hover:bg-slate-600' : 'bg-white text-gray-700 hover:bg-gray-100 shadow'}`}>
                                        GitHub <ArrowRight className="h-4 w-4 ml-2" />
                                    </motion.button>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default News;
