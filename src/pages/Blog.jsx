import { motion, AnimatePresence } from 'framer-motion';
import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Sun, Moon, ChevronRight, Calendar, Clock, Tag, ArrowRight } from 'lucide-react';
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

const blogPosts = [
    {
        slug: 'building-ai-tools-2025',
        title: 'Building AI Tools in 2025: A Developer\'s Perspective',
        excerpt: 'Explore the latest trends in AI development and how we approach building intelligent tools at UTHAKKAN.',
        date: '2025-01-15',
        category: 'AI',
        readTime: '5 min',
        featured: true
    },
    {
        slug: 'react-performance-tips',
        title: '10 React Performance Tips for Modern Web Apps',
        excerpt: 'Learn how to optimize your React applications for better performance and user experience.',
        date: '2025-01-10',
        category: 'Development',
        readTime: '8 min',
        featured: false
    },
    {
        slug: 'freelancing-india-guide',
        title: 'The Ultimate Guide to Freelancing in India',
        excerpt: 'Everything you need to know about starting and growing a successful freelance career in India.',
        date: '2025-01-05',
        category: 'Career',
        readTime: '12 min',
        featured: true
    },
    {
        slug: 'launching-uthakkan',
        title: 'Launching UTHAKKAN: Our Journey Begins',
        excerpt: 'The story behind UTHAKKAN and our vision for building the future of digital experiences.',
        date: '2025-01-01',
        category: 'Company',
        readTime: '4 min',
        featured: false
    }
];

const categories = ['All', 'AI', 'Development', 'Career', 'Company'];

const Blog = () => {
    const [isDark, setIsDark] = useState(true);
    const [activeCategory, setActiveCategory] = useState('All');
    const toggleTheme = useCallback(() => setIsDark(prev => !prev), []);

    const filteredPosts = activeCategory === 'All'
        ? blogPosts
        : blogPosts.filter(post => post.category === activeCategory);

    const featuredPosts = blogPosts.filter(post => post.featured);

    return (
        <>
            <SEO
                title="Blog - UTHAKKAN | AI, Development & Tech Insights"
                description="Read the latest articles on AI, web development, freelancing, and technology from UTHAKKAN. Tips, tutorials, and insights for developers."
                url="https://uthakkan.com/blog"
            />
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />

            <div className={`min-h-screen pt-16 overflow-hidden transition-colors duration-500 ${isDark ? 'bg-slate-900' : 'bg-gray-50'}`}>
                {/* Hero */}
                <section className="relative py-20 overflow-hidden">
                    <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' : 'bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50'}`} />

                    <div className="relative w-full px-4 sm:px-8 md:px-16 lg:px-24 text-center z-10">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                            className={`inline-flex items-center px-4 py-2 backdrop-blur-md rounded-full text-sm font-medium mb-6 border ${isDark ? 'bg-purple-500/20 text-purple-300 border-purple-500/30' : 'bg-purple-100 text-purple-700 border-purple-200'}`}>
                            <BookOpen className="h-4 w-4 mr-2" />
                            Blog
                            <ChevronRight className="h-4 w-4 ml-1 opacity-60" />
                        </motion.div>

                        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                            className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Insights & <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Articles</span>
                        </motion.h1>

                        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                            className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
                            Thoughts on AI, development, and building digital products.
                        </motion.p>
                    </div>
                </section>

                {/* Categories */}
                <section className={`py-8 sticky top-16 z-30 backdrop-blur-lg ${isDark ? 'bg-slate-900/90' : 'bg-white/90'}`}>
                    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
                        <div className="flex gap-3 overflow-x-auto pb-2">
                            {categories.map(cat => (
                                <button key={cat} onClick={() => setActiveCategory(cat)}
                                    className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all ${activeCategory === cat
                                        ? 'bg-purple-500 text-white'
                                        : isDark ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}>
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Featured Posts */}
                {activeCategory === 'All' && (
                    <section className={`py-12 ${isDark ? 'bg-slate-800' : 'bg-white'}`}>
                        <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
                            <h2 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>Featured Articles</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {featuredPosts.map((post, i) => (
                                    <motion.div key={post.slug} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                                        className={`group p-6 rounded-2xl border transition-all hover:shadow-xl ${isDark ? 'bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-800/50 hover:border-purple-600' : 'bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 hover:border-purple-400'}`}>
                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${isDark ? 'bg-purple-500/30 text-purple-300' : 'bg-purple-100 text-purple-700'}`}>
                                            <Tag className="inline h-3 w-3 mr-1" />{post.category}
                                        </span>
                                        <h3 className={`text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                            {post.title}
                                        </h3>
                                        <p className={`mb-4 line-clamp-2 ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>{post.excerpt}</p>
                                        <div className={`flex items-center justify-between text-sm ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>
                                            <span className="flex items-center"><Calendar className="h-4 w-4 mr-1" />{post.date}</span>
                                            <span className="flex items-center"><Clock className="h-4 w-4 mr-1" />{post.readTime}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* All Posts */}
                <section className={`py-12 ${isDark ? 'bg-slate-900' : 'bg-gray-50'}`}>
                    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
                        <h2 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            {activeCategory === 'All' ? 'All Articles' : `${activeCategory} Articles`}
                        </h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredPosts.map((post, i) => (
                                <motion.div key={post.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                                    className={`group p-6 rounded-2xl border transition-all hover:shadow-lg ${isDark ? 'bg-slate-800 border-slate-700 hover:border-slate-600' : 'bg-white border-gray-200 hover:border-gray-300'}`}>
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${isDark ? 'bg-slate-700 text-slate-300' : 'bg-gray-100 text-gray-600'}`}>
                                        {post.category}
                                    </span>
                                    <h3 className={`text-lg font-bold mb-3 group-hover:text-purple-400 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                        {post.title}
                                    </h3>
                                    <p className={`mb-4 text-sm line-clamp-2 ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>{post.excerpt}</p>
                                    <div className={`flex items-center justify-between text-xs ${isDark ? 'text-slate-500' : 'text-gray-400'}`}>
                                        <span>{post.date}</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className={`py-16 ${isDark ? 'bg-slate-800' : 'bg-white'}`}>
                    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 text-center">
                        <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Want to contribute?</h2>
                        <p className={`mb-6 ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>Have an idea for an article? Get in touch with us.</p>
                        <Link to="/contact">
                            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-xl flex items-center mx-auto">
                                Contact Us <ArrowRight className="h-4 w-4 ml-2" />
                            </motion.button>
                        </Link>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Blog;
