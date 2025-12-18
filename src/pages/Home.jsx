import { ArrowRight, Sparkles, Zap, Shield, Users, TrendingUp, ChevronRight, Sun, Moon, Rocket, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useCallback, useRef, useEffect } from 'react';
import SEO from '../components/SEO';

// Lightweight Wave Component - CSS-only (no canvas animation)
const WaveCanvas = ({ isDark }) => {
    return (
        <div className="absolute bottom-0 left-0 w-full h-[180px] overflow-hidden pointer-events-none">
            <svg
                className="absolute bottom-0 w-full h-full"
                viewBox="0 0 1440 180"
                preserveAspectRatio="none"
            >
                <path
                    fill={isDark ? 'rgba(99, 102, 241, 0.12)' : 'rgba(99, 102, 241, 0.06)'}
                    d="M0,90 C360,130 720,50 1080,90 C1260,110 1380,70 1440,90 L1440,180 L0,180 Z"
                />
                <path
                    fill={isDark ? 'rgba(139, 92, 246, 0.1)' : 'rgba(139, 92, 246, 0.05)'}
                    d="M0,110 C240,70 480,150 720,110 C960,70 1200,150 1440,110 L1440,180 L0,180 Z"
                />
                <path
                    fill={isDark ? 'rgba(59, 130, 246, 0.08)' : 'rgba(59, 130, 246, 0.04)'}
                    d="M0,130 C180,160 360,100 540,130 C720,160 900,100 1080,130 C1260,160 1380,100 1440,130 L1440,180 L0,180 Z"
                />
            </svg>
        </div>
    );
};

// Theme toggle
const ThemeToggle = ({ isDark, toggleTheme }) => (
    <motion.button
        onClick={toggleTheme}
        whileHover={{ scale: 1.1, rotate: 15 }}
        whileTap={{ scale: 0.9 }}
        className={`fixed top-24 right-6 z-50 p-3.5 rounded-full shadow-xl backdrop-blur-md border transition-all duration-300 ${isDark ? 'bg-slate-800/90 border-slate-600 text-yellow-400 hover:bg-slate-700' : 'bg-white/90 border-gray-200 text-slate-700 hover:bg-gray-50'
            }`}
    >
        <AnimatePresence mode="wait">
            <motion.div key={isDark ? 'moon' : 'sun'} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </motion.div>
        </AnimatePresence>
    </motion.button>
);

const Home = () => {
    const [isDark, setIsDark] = useState(true);
    const toggleTheme = useCallback(() => setIsDark(prev => !prev), []);

    const features = [
        { icon: Zap, title: "Lightning Fast", desc: "Optimized for speed", color: "from-yellow-400 to-orange-500" },
        { icon: Shield, title: "Secure", desc: "Enterprise-grade security", color: "from-green-400 to-emerald-500" },
        { icon: Users, title: "User-First", desc: "Designed for humans", color: "from-blue-400 to-cyan-500" },
        { icon: TrendingUp, title: "Scalable", desc: "Grows with your needs", color: "from-purple-400 to-pink-500" }
    ];

    const promises = [
        { num: '01', label: 'Quality', gradient: 'from-blue-400 to-blue-600' },
        { num: '02', label: 'Creativity', gradient: 'from-violet-400 to-purple-600' },
        { num: '03', label: 'User-first', gradient: 'from-pink-400 to-rose-600' },
        { num: '04', label: 'Automation', gradient: 'from-cyan-400 to-blue-600' },
        { num: '05', label: 'Utility', gradient: 'from-indigo-400 to-violet-600' }
    ];

    return (
        <>
            <SEO
                title="UTHAKKAN - Building the Future of Digital Experiences"
                description="UTHAKKAN is a modern technology company specializing in AI-powered tools, developer utilities, and digital experiences. Founded by Ajmal U K."
                url="https://uthakkan.com/"
            />
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />

            <div className={`min-h-screen pt-16 overflow-hidden transition-colors duration-500 ${isDark ? 'bg-slate-900' : 'bg-gray-50'}`}>
                {/* Hero Section */}
                <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
                    <div className={`absolute inset-0 transition-colors duration-500 ${isDark ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' : 'bg-gradient-to-br from-gray-50 via-indigo-50/50 to-purple-50/50'}`} />

                    {/* Static orbs - no animations for performance */}
                    <div className={`absolute top-20 right-[15%] w-[400px] h-[400px] rounded-full filter blur-[120px] ${isDark ? 'bg-blue-600 opacity-30' : 'bg-blue-400 opacity-20'}`} />
                    <div className={`absolute bottom-0 left-[10%] w-[350px] h-[350px] rounded-full filter blur-[100px] ${isDark ? 'bg-purple-600 opacity-25' : 'bg-purple-400 opacity-15'}`} />

                    {/* Grid pattern - static */}
                    <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(${isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)'} 1px, transparent 1px)`, backgroundSize: '80px 80px', opacity: 0.03 }} />

                    <div className="relative w-full px-8 md:px-16 lg:px-24 text-center z-10">
                        <motion.div initial={{ opacity: 0, y: 20, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.6 }}
                            className={`inline-flex items-center px-6 py-3 backdrop-blur-md rounded-full text-sm font-medium mb-10 border shadow-xl ${isDark ? 'bg-white/10 text-white/90 border-white/20' : 'bg-white/80 text-gray-700 border-gray-200'}`}>
                            <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
                                <Sparkles className={`h-4 w-4 mr-2 ${isDark ? 'text-yellow-400' : 'text-yellow-500'}`} />
                            </motion.div>
                            Crafting Digital Excellence
                            <ChevronRight className="h-4 w-4 ml-1 opacity-60" />
                        </motion.div>

                        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                            className={`text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Building the{' '}
                            <span className="relative inline-block">
                                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Future</span>
                                <motion.span className="absolute -bottom-3 left-0 right-0 h-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 rounded-full" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.6 }} />
                            </span>
                            <br />
                            <span className={isDark ? 'text-slate-300' : 'text-gray-700'}>of Digital Experiences.</span>
                        </motion.h1>

                        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
                            className={`text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-12 ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
                            UTHAKKAN is a modern technology company driven by creativity and innovation. Independently built, managed, and operated by <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Ajmal U K</span>.
                        </motion.p>

                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-col sm:flex-row justify-center gap-5">
                            <Link to="/services">
                                <motion.button whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(79, 70, 229, 0.5)" }} whileTap={{ scale: 0.95 }}
                                    className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-lg rounded-2xl flex items-center justify-center shadow-2xl">
                                    <span>Explore Services</span>
                                    <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="ml-3">
                                        <ArrowRight className="h-5 w-5" />
                                    </motion.div>
                                </motion.button>
                            </Link>
                            <Link to="/about">
                                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                                    className={`px-10 py-5 font-semibold text-lg rounded-2xl border-2 transition-colors ${isDark ? 'bg-white/10 text-white border-white/20 hover:bg-white/20' : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:text-blue-600'}`}>
                                    Learn More
                                </motion.button>
                            </Link>
                        </motion.div>
                    </div>

                    <WaveCanvas isDark={isDark} />
                </section>

                {/* Features Section */}
                <section className={`py-32 transition-colors duration-500 ${isDark ? 'bg-slate-800' : 'bg-white'}`}>
                    <div className="w-full px-8 md:px-16 lg:px-24">
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
                            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring" }}
                                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white mb-6 shadow-2xl">
                                <Rocket className="h-8 w-8" />
                            </motion.div>
                            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Why Choose Us</h2>
                            <p className={`text-xl max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>We deliver excellence through innovation and dedication.</p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
                            {features.map((feature, i) => (
                                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -10, scale: 1.02 }}
                                    className={`p-8 rounded-3xl text-center transition-all duration-300 ${isDark ? 'bg-slate-700/50 hover:bg-slate-700 border border-slate-600/50' : 'bg-gray-50 hover:bg-white hover:shadow-2xl'}`}>
                                    <motion.div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-xl`} whileHover={{ rotate: [0, -10, 10, 0] }}>
                                        <feature.icon className="h-8 w-8 text-white" />
                                    </motion.div>
                                    <h3 className={`font-bold text-xl mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{feature.title}</h3>
                                    <p className={isDark ? 'text-slate-400' : 'text-gray-600'}>{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Promise Section */}
                <section className={`py-32 relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' : 'bg-gradient-to-br from-indigo-50 via-white to-purple-50'}`}>
                    <motion.div animate={{ x: [0, 40, 0], y: [0, -30, 0] }} transition={{ duration: 20, repeat: Infinity }}
                        className={`absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full filter blur-[150px] ${isDark ? 'bg-blue-600/30' : 'bg-blue-400/20'}`} />
                    <motion.div animate={{ x: [0, -40, 0], y: [0, 30, 0] }} transition={{ duration: 20, repeat: Infinity, delay: 5 }}
                        className={`absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full filter blur-[150px] ${isDark ? 'bg-purple-600/30' : 'bg-purple-400/20'}`} />

                    <div className="relative w-full px-8 md:px-16 lg:px-24">
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-20">
                            <h2 className={`text-4xl md:text-6xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>Our Promise</h2>
                            <motion.div initial={{ width: 0 }} whileInView={{ width: 120 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full" />
                        </motion.div>

                        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 text-center max-w-7xl mx-auto">
                            {promises.map((promise, i) => (
                                <motion.div key={i} initial={{ opacity: 0, y: 40, scale: 0.8 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} whileHover={{ scale: 1.15, y: -10 }} className="p-6 group cursor-default">
                                    <motion.p className={`text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r ${promise.gradient} bg-clip-text text-transparent mb-4`} whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
                                        {promise.num}
                                    </motion.p>
                                    <h3 className={`text-lg md:text-xl font-semibold tracking-wide ${isDark ? 'text-white group-hover:text-violet-300' : 'text-gray-800 group-hover:text-indigo-600'} transition-colors`}>{promise.label}</h3>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Home;
