import { Target, Eye, Building, Calendar, MapPin, Users, Sun, Moon, ChevronRight, Heart } from 'lucide-react';
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

const About = () => {
    const [isDark, setIsDark] = useState(true);
    const toggleTheme = useCallback(() => setIsDark(prev => !prev), []);

    const companyDetails = [
        { icon: Building, label: "Industry", value: "Software Development" },
        { icon: Users, label: "Company Size", value: "1 Member" },
        { icon: MapPin, label: "Headquarters", value: "Kannur, Kerala" },
        { icon: Calendar, label: "Founded", value: "2025" }
    ];

    return (
        <>
            <SEO
                title="About UTHAKKAN - Our Mission and Vision"
                description="Learn about UTHAKKAN, an independent technology company focused on building AI tools and digital experiences. Founded in 2025 by Ajmal U K."
                url="https://uthakkan.com/about"
            />
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />

            <div className={`min-h-screen pt-16 overflow-hidden transition-colors duration-500 ${isDark ? 'bg-slate-900' : 'bg-gray-50'}`}>
                {/* Hero */}
                <section className="relative py-32 md:py-40 overflow-hidden">
                    <div className={`absolute inset-0 transition-colors duration-500 ${isDark ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' : 'bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50'}`} />

                    <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 12, repeat: Infinity }}
                        className={`absolute top-10 right-[20%] w-[500px] h-[500px] rounded-full filter blur-[150px] ${isDark ? 'bg-teal-600 opacity-30' : 'bg-teal-400 opacity-25'}`} />
                    <motion.div animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 12, repeat: Infinity, delay: 3 }}
                        className={`absolute bottom-0 left-[15%] w-[400px] h-[400px] rounded-full filter blur-[120px] ${isDark ? 'bg-cyan-600 opacity-25' : 'bg-cyan-400 opacity-20'}`} />

                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                        className={`absolute top-20 right-20 w-80 h-80 border ${isDark ? 'border-white/10' : 'border-teal-200'} rounded-full opacity-30`} />

                    <div className="relative w-full px-8 md:px-16 lg:px-24 text-center z-10">
                        <motion.div initial={{ opacity: 0, y: 20, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.6 }}
                            className={`inline-flex items-center px-5 py-2.5 backdrop-blur-md rounded-full text-sm font-medium mb-8 border shadow-lg ${isDark ? 'bg-teal-500/20 text-teal-300 border-teal-500/30' : 'bg-teal-100 text-teal-700 border-teal-200'}`}>
                            <Heart className="h-4 w-4 mr-2" />
                            About Us
                            <ChevronRight className="h-4 w-4 ml-1 opacity-60" />
                        </motion.div>

                        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                            className={`text-6xl md:text-8xl font-bold tracking-tight leading-none mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Meet{' '}
                            <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">UTHAKKAN</span>
                        </motion.h1>

                        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
                            className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
                            An independent technology company focused on building tools that matter for the digital age.
                        </motion.p>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className={`py-24 transition-colors duration-500 ${isDark ? 'bg-slate-800' : 'bg-white'}`}>
                    <div className="w-full px-8 md:px-16 lg:px-24">
                        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                            <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} whileHover={{ y: -8 }}
                                className="bg-gradient-to-br from-teal-500 to-cyan-600 p-10 rounded-3xl text-white shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -mr-24 -mt-24" />
                                <motion.div className="relative bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm" whileHover={{ rotate: [0, -10, 10, 0] }}>
                                    <Target className="h-8 w-8 text-white" />
                                </motion.div>
                                <h2 className="text-3xl font-bold mb-6 text-white">Our Mission</h2>
                                <p className="text-teal-50 text-lg leading-relaxed">
                                    To merge creativity with technology — delivering clean, efficient, and impactful digital products that simplify work, enhance productivity, and inspire innovation.
                                </p>
                            </motion.div>

                            <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} whileHover={{ y: -8 }}
                                className="bg-gradient-to-br from-purple-500 to-indigo-600 p-10 rounded-3xl text-white shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -mr-24 -mt-24" />
                                <motion.div className="relative bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm" whileHover={{ rotate: [0, -10, 10, 0] }}>
                                    <Eye className="h-8 w-8 text-white" />
                                </motion.div>
                                <h2 className="text-3xl font-bold mb-6 text-white">Our Vision</h2>
                                <p className="text-purple-50 text-lg leading-relaxed">
                                    To innovate across AI, development, and design — shaping technology that inspires creativity and drives meaningful digital growth.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Company Details */}
                <section className={`py-24 transition-colors duration-500 ${isDark ? 'bg-slate-900' : 'bg-gray-50'}`}>
                    <div className="w-full px-8 md:px-16 lg:px-24">
                        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                            className={`max-w-5xl mx-auto rounded-3xl shadow-2xl overflow-hidden border ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100'}`}>
                            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-10">
                                <h2 className="text-3xl font-bold text-white">Company Details</h2>
                            </div>
                            <div className="p-10">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                                    {companyDetails.map((item, i) => (
                                        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -5 }} className="text-center group">
                                            <motion.div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-all ${isDark ? 'bg-slate-700 group-hover:bg-slate-600' : 'bg-gray-100 group-hover:bg-gray-200'}`}
                                                whileHover={{ rotate: [0, -5, 5, 0] }}>
                                                <item.icon className={`h-7 w-7 ${isDark ? 'text-slate-300' : 'text-gray-600'}`} />
                                            </motion.div>
                                            <span className={`text-sm block mb-2 ${isDark ? 'text-slate-500' : 'text-gray-500'}`}>{item.label}</span>
                                            <p className={`font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.value}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default About;
