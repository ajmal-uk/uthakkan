import { ArrowRight, Sparkles, Zap, Shield, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Home = () => {
    return (
        <>
            <SEO
                title="UTHAKKAN - Building the Future of Digital Experiences"
                description="UTHAKKAN is a modern technology company specializing in AI-powered tools, developer utilities, and digital experiences. Founded by Ajmal U K."
                url="https://uthakkan.com/"
            />
            <div className="bg-white min-h-screen pt-16 overflow-hidden">
                {/* Hero Section - Full Width */}
                <section className="relative min-h-[90vh] flex items-center justify-center">
                    {/* Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.2, 0.4, 0.2]
                        }}
                        transition={{ duration: 8, repeat: Infinity }}
                        className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-400 rounded-full filter blur-[100px] opacity-20"
                    ></motion.div>
                    <motion.div
                        animate={{
                            scale: [1.2, 1, 1.2],
                            opacity: [0.2, 0.4, 0.2]
                        }}
                        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
                        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-400 rounded-full filter blur-[100px] opacity-20"
                    ></motion.div>

                    <div className="relative w-full max-w-5xl mx-auto px-6 text-center z-10 py-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 mb-8 shadow-sm border border-gray-200"
                        >
                            <Sparkles className="h-4 w-4 text-yellow-500 mr-2" />
                            Crafting Digital Excellence
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-gray-900 leading-tight"
                        >
                            Building the{' '}
                            <span className="relative inline-block">
                                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                    Future
                                </span>
                                <motion.span
                                    className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-blue-200 to-purple-200 -z-10 rounded"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                ></motion.span>
                            </span>
                            {' '}of
                            <br />
                            Digital Experiences.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10"
                        >
                            UTHAKKAN is a modern technology company driven by creativity and innovation.
                            Independently built, managed, and operated by <span className="font-semibold text-gray-900">Ajmal U K</span>.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex flex-col sm:flex-row justify-center gap-4"
                        >
                            <Link to="/services">
                                <motion.button
                                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(79, 70, 229, 0.4)" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl flex items-center justify-center shadow-lg"
                                >
                                    <span>Explore Services</span>
                                    <motion.div
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ repeat: Infinity, duration: 1.5 }}
                                        className="ml-2"
                                    >
                                        <ArrowRight className="h-5 w-5" />
                                    </motion.div>
                                </motion.button>
                            </Link>
                            <Link to="/about">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-colors shadow-sm"
                                >
                                    Learn More
                                </motion.button>
                            </Link>
                        </motion.div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-24 bg-white">
                    <div className="w-full max-w-6xl mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
                            <p className="text-gray-600 max-w-xl mx-auto">We deliver excellence through innovation and dedication.</p>
                        </motion.div>

                        <div className="grid md:grid-cols-4 gap-6">
                            {[
                                { icon: Zap, title: "Fast Delivery", desc: "Quick turnaround times", color: "from-yellow-400 to-orange-500" },
                                { icon: Shield, title: "Secure", desc: "Enterprise-grade security", color: "from-green-400 to-emerald-500" },
                                { icon: Users, title: "User-First", desc: "Designed for humans", color: "from-blue-400 to-cyan-500" },
                                { icon: TrendingUp, title: "Scalable", desc: "Grows with your needs", color: "from-purple-400 to-pink-500" }
                            ].map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="p-6 bg-gray-50 rounded-2xl text-center group hover:bg-white hover:shadow-xl transition-all duration-300"
                                >
                                    <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg`}>
                                        <feature.icon className="h-7 w-7 text-white" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                                    <p className="text-sm text-gray-500">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Promise Section */}
                <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden relative">
                    <div className="absolute inset-0 opacity-30">
                        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500 rounded-full filter blur-[100px]"></div>
                        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500 rounded-full filter blur-[100px]"></div>
                    </div>

                    <div className="relative w-full max-w-6xl mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl font-bold mb-4">Our Promise</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                        </motion.div>

                        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
                            {['Quality', 'Creativity', 'User-first', 'Automation', 'Utility'].map((promise, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    whileHover={{ scale: 1.1 }}
                                    className="p-6"
                                >
                                    <p className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">0{i + 1}</p>
                                    <h3 className="text-lg font-semibold tracking-wide text-white">{promise}</h3>
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
