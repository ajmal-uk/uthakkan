import { Target, Eye, Building, Calendar, MapPin, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const About = () => {
    return (
        <>
            <SEO
                title="About UTHAKKAN - Our Mission and Vision"
                description="Learn about UTHAKKAN, an independent technology company focused on building AI tools and digital experiences. Founded in 2025 by Ajmal U K."
                url="https://uthakkan.com/about"
            />
            <div className="bg-white min-h-screen pt-16 overflow-hidden">
                {/* Hero */}
                <section className="relative py-20">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50"></div>
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                        className="absolute top-10 right-10 w-72 h-72 border border-teal-200 rounded-full opacity-30"
                    ></motion.div>

                    <div className="relative w-full max-w-4xl mx-auto px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block px-4 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-4">About Us</span>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                Meet <span className="text-teal-600">UTHAKKAN</span>
                            </h1>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                An independent technology company focused on building tools that matter for the digital age.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="py-20 bg-white">
                    <div className="w-full max-w-6xl mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-8">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                whileHover={{ y: -5 }}
                                className="bg-gradient-to-br from-teal-500 to-cyan-600 p-8 rounded-3xl text-white shadow-2xl shadow-teal-500/20"
                            >
                                <div className="bg-white/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                                    <Target className="h-7 w-7 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold mb-4 text-white">Our Mission</h2>
                                <p className="text-teal-50 leading-relaxed">
                                    To merge creativity with technology — delivering clean, efficient, and impactful digital products that simplify work, enhance productivity, and inspire innovation.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                whileHover={{ y: -5 }}
                                className="bg-gradient-to-br from-purple-500 to-indigo-600 p-8 rounded-3xl text-white shadow-2xl shadow-purple-500/20"
                            >
                                <div className="bg-white/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                                    <Eye className="h-7 w-7 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold mb-4 text-white">Our Vision</h2>
                                <p className="text-purple-50 leading-relaxed">
                                    To innovate across AI, development, and design — shaping technology that inspires creativity and drives meaningful digital growth.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Company Details */}
                <section className="py-20 bg-gray-50">
                    <div className="w-full max-w-4xl mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
                        >
                            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8">
                                <h2 className="text-2xl font-bold text-white">Company Details</h2>
                            </div>
                            <div className="p-8">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                    {[
                                        { icon: Building, label: "Industry", value: "Software Development" },
                                        { icon: Users, label: "Company Size", value: "1 Member" },
                                        { icon: MapPin, label: "Headquarters", value: "Kannur, Kerala" },
                                        { icon: Calendar, label: "Founded", value: "2025" }
                                    ].map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 }}
                                            className="text-center"
                                        >
                                            <div className="w-12 h-12 mx-auto mb-3 bg-gray-100 rounded-xl flex items-center justify-center">
                                                <item.icon className="h-6 w-6 text-gray-600" />
                                            </div>
                                            <span className="text-xs text-gray-500 block mb-1">{item.label}</span>
                                            <p className="font-semibold text-gray-900">{item.value}</p>
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
