import { Code, Brain, Monitor, Globe, Gamepad2, Layers, ArrowUpRight, Sun, Moon, ChevronRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useCallback } from 'react';
import SEO from '../components/SEO';

// Theme toggle
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

const Services = () => {
    const [isDark, setIsDark] = useState(true);
    const toggleTheme = useCallback(() => setIsDark(prev => !prev), []);

    const services = [
        { icon: Code, title: "Software & Web Development", desc: "Custom websites, web apps, frontend & backend development, and performance optimization.", color: "from-blue-500 to-indigo-600" },
        { icon: Monitor, title: "Video Editing & Content", desc: "YouTube video editing, short-form content (Reels/Shorts), and tech workflow visualization.", color: "from-pink-500 to-rose-600" },
        { icon: Brain, title: "Automation & AI Solutions", desc: "Task automation, AI-powered tools for creators, and business workflow optimization.", color: "from-emerald-500 to-teal-600" },
        { icon: Sparkles, title: "Digital Consulting", desc: "Productivity system setup, tool selection, optimization, and creator-focused tech consulting.", color: "from-amber-500 to-orange-600" },
        { icon: Globe, title: "YouTube & Content Ecosystem", desc: "Educational content across productivity, gaming, tech tutorials, and AI automation.", color: "from-purple-500 to-violet-600" },
        { icon: Layers, title: "SaaS & Product Building", desc: "Developing lightweight, scalable software-as-a-service solutions for modern needs.", color: "from-cyan-500 to-blue-600" }
    ];

    const tags = ['AI Tools', 'Developer Utilities', 'Web Apps', 'Automation', 'Chatbots', 'SaaS', 'Web Design', 'API Integration', 'Frontend Development', 'Cloud-Based Tools'];

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "UTHAKKAN Services",
        "description": "Professional software development services including AI applications, web development, and SaaS solutions.",
        "itemListElement": services.map((s, i) => ({
            "@type": "ListItem", "position": i + 1,
            "item": { "@type": "Service", "name": s.title, "description": s.desc, "provider": { "@type": "Organization", "name": "UTHAKKAN" } }
        }))
    };

    return (
        <>
            <SEO
                title="UTHAKKAN Services - AI Tools, Web Development & SaaS Solutions"
                description="Explore UTHAKKAN's comprehensive services: AI-powered applications, developer tools, web experiences, SaaS products, and custom software solutions in Kerala, India."
                keywords="AI development services, web application development, SaaS products, developer tools, custom software, chatbot development, API integration, frontend development, Kerala software company"
                url="https://uthakkan.com/services"
                schema={serviceSchema}
            />
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />

            <div className={`min-h-screen pt-16 overflow-hidden transition-colors duration-500 ${isDark ? 'bg-slate-900' : 'bg-gray-50'}`}>
                {/* Hero */}
                <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                    <div className={`absolute inset-0 transition-colors duration-500 ${isDark ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' : 'bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50'}`} />

                    <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 12, repeat: Infinity }}
                        className={`absolute top-10 right-[20%] w-[500px] h-[500px] rounded-full filter blur-[150px] ${isDark ? 'bg-orange-600 opacity-30' : 'bg-orange-400 opacity-25'}`} />
                    <motion.div animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 12, repeat: Infinity, delay: 3 }}
                        className={`absolute bottom-0 left-[15%] w-[400px] h-[400px] rounded-full filter blur-[120px] ${isDark ? 'bg-amber-600 opacity-25' : 'bg-amber-400 opacity-20'}`} />

                    <motion.div animate={{ rotate: [12, 25, 12] }} transition={{ duration: 8, repeat: Infinity }}
                        className={`absolute top-32 right-32 w-40 h-40 rounded-3xl opacity-20 ${isDark ? 'bg-gradient-to-br from-orange-500 to-amber-500' : 'bg-gradient-to-br from-orange-400 to-amber-500'}`} />

                    <div className="relative w-full px-4 sm:px-8 md:px-16 lg:px-24 text-center z-10">
                        <motion.div initial={{ opacity: 0, y: 20, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.6 }}
                            className={`inline-flex items-center px-5 py-2.5 backdrop-blur-md rounded-full text-sm font-medium mb-8 border shadow-lg ${isDark ? 'bg-orange-500/20 text-orange-300 border-orange-500/30' : 'bg-orange-100 text-orange-700 border-orange-200'}`}>
                            <Sparkles className="h-4 w-4 mr-2" />
                            Our Services
                            <ChevronRight className="h-4 w-4 ml-1 opacity-60" />
                        </motion.div>

                        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                            className={`text-6xl md:text-8xl font-bold tracking-tight leading-none mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            What We{' '}
                            <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">Build</span>
                        </motion.h1>

                        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
                            className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
                            Comprehensive digital solutions ranging from AI tools to modern web applications.
                        </motion.p>
                    </div>
                </section>

                {/* Services Grid */}
                <section className={`min-h-screen flex flex-col justify-center py-24 transition-colors duration-500 ${isDark ? 'bg-slate-800' : 'bg-white'}`}>
                    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} whileHover={{ y: -10, scale: 1.02 }}
                                    className={`group relative p-8 rounded-3xl border shadow-lg transition-all duration-300 cursor-pointer overflow-hidden ${isDark ? 'bg-slate-700/50 border-slate-600/50 hover:bg-slate-700' : 'bg-white border-gray-100 hover:shadow-2xl'}`}>

                                    <motion.div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                                    <motion.div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${service.color} rounded-full filter blur-3xl opacity-0 group-hover:opacity-30 transition-opacity`} />

                                    <motion.div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-xl`} whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}>
                                        <service.icon className="h-8 w-8 text-white" />
                                    </motion.div>

                                    <h3 className={`text-xl font-bold mb-4 flex items-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                        {service.title}
                                        <ArrowUpRight className="h-5 w-5 ml-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-gray-400" />
                                    </h3>
                                    <p className={`leading-relaxed ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>{service.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Specialties */}
                <section className={`min-h-screen flex flex-col justify-center py-24 transition-colors duration-500 ${isDark ? 'bg-slate-900' : 'bg-gray-50'}`}>
                    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                            className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-full blur-3xl -mr-32 -mt-32" />

                            <h2 className="text-3xl font-bold text-white mb-10">Our Specialties</h2>
                            <div className="flex flex-wrap justify-center gap-4">
                                {tags.map((tag, i) => (
                                    <motion.span key={tag} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} whileHover={{ scale: 1.1, y: -3 }}
                                        className="px-5 py-2.5 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition-all cursor-default">
                                        {tag}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Services;
