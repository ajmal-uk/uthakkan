import { motion } from 'framer-motion';
import { Github, Linkedin, Code2, Sparkles, Coffee } from 'lucide-react';
import SEO from '../components/SEO';

const Developer = () => {
    return (
        <>
            <SEO
                title="Ajmal U K - Founder & Developer of UTHAKKAN"
                description="Meet Ajmal U K, the visionary developer behind UTHAKKAN. MCA student passionate about AI-driven tools and digital experiences."
                url="https://uthakkan.com/developer"
            />
            <div className="bg-white min-h-screen pt-16 overflow-hidden">
                {/* Hero */}
                <section className="relative py-20">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50"></div>
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute top-20 left-20 text-6xl opacity-20"
                    >
                        👨‍💻
                    </motion.div>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                        className="absolute bottom-10 right-20 text-5xl opacity-20"
                    >
                        🚀
                    </motion.div>

                    <div className="relative w-full max-w-4xl mx-auto px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-flex items-center px-4 py-1 bg-violet-100 text-violet-700 rounded-full text-sm font-medium mb-4">
                                <Sparkles className="h-4 w-4 mr-1" />
                                The Creator
                            </span>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                Meet the <span className="text-violet-600">Developer</span>
                            </h1>
                        </motion.div>
                    </div>
                </section>

                {/* Profile Card */}
                <section className="py-8 bg-white">
                    <div className="w-full max-w-4xl mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, type: "spring" }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 rounded-[2rem] blur opacity-20"></div>

                            <div className="relative bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white shadow-2xl overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                                <div className="absolute bottom-0 left-0 w-48 h-48 bg-fuchsia-500/20 rounded-full blur-3xl -ml-24 -mb-24"></div>

                                <div className="relative grid md:grid-cols-3 gap-8 items-center">
                                    <div className="md:col-span-2">
                                        <motion.div
                                            initial={{ opacity: 0, x: -30 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.3 }}
                                        >
                                            <span className="inline-flex items-center px-3 py-1 bg-white/20 rounded-full text-xs font-medium mb-4 backdrop-blur-sm text-white">
                                                <Code2 className="h-3 w-3 mr-1" />
                                                Founder & Developer
                                            </span>
                                            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Ajmal U K</h2>
                                            <p className="text-violet-100 text-lg leading-relaxed mb-8">
                                                Visionary Developer, Founder of UTHAKKAN & MCA Student. Passionate about building AI-driven tools, lightweight web applications, and creative digital utilities. Single-handedly designs, develops, and deploys all UTHAKKAN products.
                                            </p>

                                            <div className="flex flex-wrap gap-3">
                                                <motion.a
                                                    href="https://linkedin.com/in/ajmaluk"
                                                    target="_blank"
                                                    whileHover={{ scale: 1.05, y: -2 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="inline-flex items-center px-5 py-3 bg-white text-violet-700 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow"
                                                >
                                                    <Linkedin className="h-5 w-5 mr-2" />
                                                    LinkedIn
                                                </motion.a>
                                                <motion.a
                                                    href="https://github.com/ajmal-uk"
                                                    target="_blank"
                                                    whileHover={{ scale: 1.05, y: -2 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="inline-flex items-center px-5 py-3 bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold border border-white/30 hover:bg-white/30 transition-colors"
                                                >
                                                    <Github className="h-5 w-5 mr-2" />
                                                    GitHub
                                                </motion.a>
                                                <motion.a
                                                    href="#"
                                                    whileHover={{ scale: 1.05, y: -2 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow"
                                                >
                                                    <Coffee className="h-5 w-5 mr-2" />
                                                    Buy Coffee
                                                </motion.a>
                                            </div>
                                        </motion.div>
                                    </div>

                                    <div className="hidden md:flex justify-center">
                                        <motion.div
                                            initial={{ scale: 0, rotate: -180 }}
                                            animate={{ scale: 1, rotate: 0 }}
                                            transition={{ duration: 0.8, delay: 0.5, type: "spring", bounce: 0.4 }}
                                            whileHover={{ scale: 1.05, rotate: 5 }}
                                            className="relative"
                                        >
                                            <div className="w-40 h-40 bg-gradient-to-br from-white/30 to-white/10 rounded-full border-4 border-white/30 flex items-center justify-center text-7xl font-bold backdrop-blur-md shadow-2xl text-white">
                                                A
                                            </div>
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                                className="absolute -inset-4 border-2 border-dashed border-white/20 rounded-full"
                                            ></motion.div>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Skills */}
                <section className="py-20 bg-gray-50">
                    <div className="w-full max-w-4xl mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-center mb-8"
                        >
                            <h3 className="text-2xl font-bold text-gray-900">Skills & Technologies</h3>
                        </motion.div>
                        <div className="flex flex-wrap justify-center gap-3">
                            {['React', 'Python', 'JavaScript', 'AI/ML', 'Node.js', 'Flask', 'Tailwind CSS', 'Firebase', 'Git', 'Vite'].map((skill, i) => (
                                <motion.span
                                    key={skill}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    className="px-4 py-2 bg-white text-gray-700 rounded-lg text-sm font-medium hover:bg-violet-100 hover:text-violet-700 transition-colors cursor-default shadow-sm border border-gray-100"
                                >
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
