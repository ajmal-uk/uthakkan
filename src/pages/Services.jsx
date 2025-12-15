import { Code, Brain, Monitor, Globe, Gamepad2, Layers, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Services = () => {
    const services = [
        { icon: Brain, title: "AI-based Web Applications", desc: "Intelligent chat systems, AI assistants, and automation tools powered by cutting-edge machine learning and natural language processing.", color: "from-blue-500 to-indigo-600" },
        { icon: Code, title: "Developer Tools", desc: "Powerful utilities, productivity applications, and development workflows designed to streamline coding and boost efficiency.", color: "from-emerald-500 to-teal-600" },
        { icon: Gamepad2, title: "Interactive Games", desc: "Fun, accessible, and engaging web games built with modern technologies for entertainment and learning.", color: "from-pink-500 to-rose-600" },
        { icon: Monitor, title: "Web Experiences", desc: "Creative, interactive, and responsive web designs that captivate users and deliver exceptional digital experiences.", color: "from-purple-500 to-violet-600" },
        { icon: Layers, title: "SaaS Products", desc: "Lightweight, scalable software-as-a-service solutions for modern businesses, startups, and entrepreneurs.", color: "from-amber-500 to-orange-600" },
        { icon: Globe, title: "Custom Solutions", desc: "Tailored digital solutions including API integrations, freelance development, and bespoke software projects.", color: "from-cyan-500 to-blue-600" }
    ];

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "UTHAKKAN Services",
        "description": "Professional software development services including AI applications, web development, and SaaS solutions.",
        "itemListElement": services.map((s, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "item": {
                "@type": "Service",
                "name": s.title,
                "description": s.desc,
                "provider": {
                    "@type": "Organization",
                    "name": "UTHAKKAN"
                }
            }
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
            <div className="bg-white min-h-screen pt-16 overflow-hidden">
                {/* Hero */}
                <section className="relative py-20">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50"></div>
                    <motion.div
                        className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-orange-400 to-amber-500 rounded-3xl rotate-12 opacity-20"
                        animate={{ rotate: [12, 20, 12] }}
                        transition={{ duration: 6, repeat: Infinity }}
                    ></motion.div>

                    <div className="relative w-full max-w-4xl mx-auto px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block px-4 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-4">Our Services</span>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                What We <span className="text-orange-500">Build</span>
                            </h1>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Comprehensive digital solutions ranging from AI tools to modern web applications.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-20 bg-white">
                    <div className="w-full max-w-6xl mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    className="group relative bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-lg`}>
                                        <service.icon className="h-7 w-7 text-white" />
                                    </div>

                                    <h3 className="text-xl font-bold mb-3 text-gray-900 flex items-center">
                                        {service.title}
                                        <ArrowUpRight className="h-5 w-5 ml-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-gray-400" />
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Specialties */}
                <section className="py-20 bg-gray-50">
                    <div className="w-full max-w-4xl mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-10 text-center"
                        >
                            <h2 className="text-2xl font-bold text-white mb-8">Our Specialties</h2>
                            <div className="flex flex-wrap justify-center gap-3">
                                {['AI Tools', 'Developer Utilities', 'Web Apps', 'Automation', 'Chatbots', 'SaaS', 'Web Design', 'API Integration', 'Frontend Development', 'Cloud-Based Tools'].map((tag, i) => (
                                    <motion.span
                                        key={tag}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.05 }}
                                        whileHover={{ scale: 1.1 }}
                                        className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition-colors cursor-default"
                                    >
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
