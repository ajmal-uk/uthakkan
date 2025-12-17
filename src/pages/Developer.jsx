import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Code2, Sparkles, Coffee, Sun, Moon, ChevronRight } from 'lucide-react';
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

const Developer = () => {
    const [isDark, setIsDark] = useState(true);
    const toggleTheme = useCallback(() => setIsDark(prev => !prev), []);

    const skills = ['React', 'Python', 'JavaScript', 'AI/ML', 'Node.js', 'Flask', 'Tailwind CSS', 'Firebase', 'Git', 'Vite'];

    return (
        <>
            <SEO
                title="Ajmal U K - Founder & Developer of UTHAKKAN"
                description="Meet Ajmal U K, the visionary developer behind UTHAKKAN. MCA student passionate about AI-driven tools and digital experiences."
                url="https://uthakkan.com/developer"
            />
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />

            <div className={`min-h-screen pt-16 overflow-hidden transition-colors duration-500 ${isDark ? 'bg-slate-900' : 'bg-gray-50'}`}>
                {/* Hero */}
                <section className="relative py-32 md:py-40 overflow-hidden">
                    <div className={`absolute inset-0 transition-colors duration-500 ${isDark ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' : 'bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50'}`} />

                    <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 12, repeat: Infinity }}
                        className={`absolute top-10 right-[20%] w-[500px] h-[500px] rounded-full filter blur-[150px] ${isDark ? 'bg-violet-600 opacity-35' : 'bg-violet-400 opacity-25'}`} />
                    <motion.div animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 12, repeat: Infinity, delay: 3 }}
                        className={`absolute bottom-0 left-[15%] w-[400px] h-[400px] rounded-full filter blur-[120px] ${isDark ? 'bg-fuchsia-600 opacity-30' : 'bg-fuchsia-400 opacity-20'}`} />

                    <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-32 left-32 text-7xl opacity-30">👨‍💻</motion.div>
                    <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 6, repeat: Infinity, delay: 1 }} className="absolute bottom-20 right-32 text-6xl opacity-20">🚀</motion.div>

                    <div className="relative w-full px-8 md:px-16 lg:px-24 text-center z-10">
                        <motion.div initial={{ opacity: 0, y: 20, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.6 }}
                            className={`inline-flex items-center px-5 py-2.5 backdrop-blur-md rounded-full text-sm font-medium mb-8 border shadow-lg ${isDark ? 'bg-violet-500/20 text-violet-300 border-violet-500/30' : 'bg-violet-100 text-violet-700 border-violet-200'}`}>
                            <Sparkles className="h-4 w-4 mr-2" />
                            The Creator
                            <ChevronRight className="h-4 w-4 ml-1 opacity-60" />
                        </motion.div>

                        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                            className={`text-6xl md:text-8xl font-bold tracking-tight leading-none mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Meet the{' '}
                            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">Developer</span>
                        </motion.h1>
                    </div>
                </section>

                {/* Profile Card */}
                <section className={`py-12 transition-colors duration-500 ${isDark ? 'bg-slate-800' : 'bg-white'}`}>
                    <div className="w-full px-8 md:px-16 lg:px-24">
                        <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, type: "spring" }} className="relative max-w-5xl mx-auto">
                            <div className="absolute -inset-4 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 rounded-[2.5rem] blur-lg opacity-30" />

                            <div className="relative bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 rounded-3xl p-10 md:p-14 text-white shadow-2xl overflow-hidden">
                                <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -mr-40 -mt-40" />
                                <div className="absolute bottom-0 left-0 w-60 h-60 bg-fuchsia-500/20 rounded-full blur-3xl -ml-30 -mb-30" />

                                <div className="relative grid md:grid-cols-3 gap-10 items-center">
                                    <div className="md:col-span-2">
                                        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                                            <span className="inline-flex items-center px-4 py-1.5 bg-white/20 rounded-full text-sm font-medium mb-6 backdrop-blur-sm text-white">
                                                <Code2 className="h-4 w-4 mr-2" />
                                                Founder & Developer
                                            </span>
                                            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">Ajmal U K</h2>
                                            <p className="text-violet-100 text-lg md:text-xl leading-relaxed mb-10">
                                                Visionary Developer, Founder of UTHAKKAN & MCA Student. Passionate about building AI-driven tools, lightweight web applications, and creative digital utilities. Single-handedly designs, develops, and deploys all UTHAKKAN products.
                                            </p>

                                            <div className="flex flex-wrap gap-4">
                                                <motion.a href="https://linkedin.com/in/ajmaluk" target="_blank" whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}
                                                    className="inline-flex items-center px-6 py-4 bg-white text-violet-700 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-shadow">
                                                    <Linkedin className="h-5 w-5 mr-2" />
                                                    LinkedIn
                                                </motion.a>
                                                <motion.a href="https://github.com/ajmal-uk" target="_blank" whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}
                                                    className="inline-flex items-center px-6 py-4 bg-white/20 backdrop-blur-sm text-white rounded-2xl font-semibold border border-white/30 hover:bg-white/30 transition-colors">
                                                    <Github className="h-5 w-5 mr-2" />
                                                    GitHub
                                                </motion.a>
                                                <motion.a href="#" whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}
                                                    className="inline-flex items-center px-6 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-shadow">
                                                    <Coffee className="h-5 w-5 mr-2" />
                                                    Buy Coffee
                                                </motion.a>
                                            </div>
                                        </motion.div>
                                    </div>

                                    <div className="hidden md:flex justify-center">
                                        <motion.div initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ duration: 0.8, delay: 0.5, type: "spring", bounce: 0.4 }} whileHover={{ scale: 1.08, rotate: 5 }} className="relative">
                                            <div className="w-48 h-48 bg-gradient-to-br from-white/30 to-white/10 rounded-full border-4 border-white/40 flex items-center justify-center text-8xl font-bold backdrop-blur-md shadow-2xl text-white">A</div>
                                            <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute -inset-6 border-2 border-dashed border-white/30 rounded-full" />
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Skills */}
                <section className={`py-24 transition-colors duration-500 ${isDark ? 'bg-slate-900' : 'bg-gray-50'}`}>
                    <div className="w-full px-8 md:px-16 lg:px-24">
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-12">
                            <h3 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Skills & Technologies</h3>
                            <motion.div initial={{ width: 0 }} whileInView={{ width: 100 }} viewport={{ once: true }} className="h-1 bg-gradient-to-r from-violet-500 to-purple-500 mx-auto mt-4 rounded-full" />
                        </motion.div>
                        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                            {skills.map((skill, i) => (
                                <motion.span key={skill} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} whileHover={{ scale: 1.1, y: -5 }}
                                    className={`px-6 py-3 rounded-xl text-base font-medium transition-all cursor-default shadow-lg ${isDark ? 'bg-slate-800 text-slate-200 hover:bg-violet-600 hover:text-white border border-slate-700' : 'bg-white text-gray-700 hover:bg-violet-100 hover:text-violet-700 border border-gray-200'}`}>
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Developer;
