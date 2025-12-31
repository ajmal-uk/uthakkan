import { Code, Video, Brain, Lightbulb, Rocket, Send, CheckCircle, Star, ArrowRight, Sun, Moon, ChevronRight, Sparkles, ExternalLink, Bot, Wrench, Mail as MailIcon, Car, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useCallback } from 'react';
import SEO from '../components/SEO';
import ceoImage from '../assets/ceo.png';

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

const Freelancing = () => {
    const [isDark, setIsDark] = useState(true);
    const toggleTheme = useCallback(() => setIsDark(prev => !prev), []);

    const services = [
        { icon: Code, title: "Web Development", desc: "Custom websites, web apps, React/Next.js, performance optimization.", color: "from-blue-500 to-indigo-600", price: "Starting ₹5,000" },
        { icon: Video, title: "Video Editing", desc: "YouTube videos, Reels/Shorts, tech tutorials, and engaging content.", color: "from-pink-500 to-rose-600", price: "Starting ₹2,000" },
        { icon: Brain, title: "AI & Automation", desc: "Custom AI tools, workflow automation, and productivity scripts.", color: "from-emerald-500 to-teal-600", price: "Starting ₹8,000" },
        { icon: Lightbulb, title: "Digital Consulting", desc: "Tech strategy, tool selection, productivity setup, and optimization.", color: "from-amber-500 to-orange-600", price: "Starting ₹1,500/hr" }
    ];

    const recentProducts = [
        { name: 'Byte AI', tagline: 'AI-powered assistance platform', icon: Bot, color: 'from-violet-500 to-purple-600', url: 'https://byteai.pythonanywhere.com' },
        { name: 'ToolPix', tagline: 'Practical digital tools studio', icon: Wrench, color: 'from-emerald-500 to-teal-600', url: 'https://toolpix.pythonanywhere.com' },
        { name: 'Zymail', tagline: 'Lightweight email utility', icon: MailIcon, color: 'from-blue-500 to-cyan-600', url: 'https://zymail.pythonanywhere.com' },
        { name: 'Zyrace', tagline: 'Experimental racing platform', icon: Car, color: 'from-orange-500 to-red-600', url: 'https://zyrace.pythonanywhere.com' }
    ];

    const whyChoose = [
        { title: "Fast Delivery", desc: "Quick turnaround without compromising quality." },
        { title: "Transparent Pricing", desc: "Clear quotes upfront, no hidden costs." },
        { title: "Direct Communication", desc: "Work directly with the developer, not middlemen." },
        { title: "Ongoing Support", desc: "Continued support and revisions as needed." }
    ];

    const freelanceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Freelance Development Services",
        "provider": {
            "@type": "Person",
            "name": "Ajmal U K",
            "jobTitle": "Freelance Developer",
            "url": "https://uthakkan.com/developer"
        },
        "areaServed": {
            "@type": "Country",
            "name": "Worldwide"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Freelance Services",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web Development", "description": "Custom websites, web apps, React, Next.js" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Video Editing", "description": "YouTube videos, Reels, Shorts editing" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Solutions", "description": "AI tools, chatbots, automation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Consulting", "description": "Tech consulting, workflow optimization" } }
            ]
        }
    };

    return (
        <>
            <SEO
                title="Hire UTHAKKAN - Freelance Web Development, Video Editing & AI Solutions | Kerala, India"
                description="Hire Ajmal U K for freelance web development, React apps, video editing, AI automation, and digital consulting. Fast delivery, transparent pricing, direct communication. Based in Kerala, India - serving worldwide."
                keywords="hire freelance developer India, freelance web developer Kerala, React developer for hire, video editing services, AI automation consultant, hire developer India, freelance programmer, website developer Kerala, freelance video editor, web app developer, Next.js developer India"
                url="https://uthakkan.com/freelancing"
                type="website"
                schema={freelanceSchema}
            />
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />

            <div className={`min-h-screen pt-16 overflow-hidden transition-colors duration-500 ${isDark ? 'bg-slate-900' : 'bg-gray-50'}`}>
                {/* Hero */}
                <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                    <div className={`absolute inset-0 transition-colors duration-500 ${isDark ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' : 'bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50'}`} />

                    <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 12, repeat: Infinity }}
                        className={`absolute top-10 right-[20%] w-[500px] h-[500px] rounded-full filter blur-[150px] ${isDark ? 'bg-indigo-600 opacity-30' : 'bg-indigo-400 opacity-25'}`} />
                    <motion.div animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 12, repeat: Infinity, delay: 3 }}
                        className={`absolute bottom-0 left-[15%] w-[400px] h-[400px] rounded-full filter blur-[120px] ${isDark ? 'bg-purple-600 opacity-25' : 'bg-purple-400 opacity-20'}`} />

                    <div className="relative w-full px-4 sm:px-8 md:px-16 lg:px-24 text-center z-10">
                        <motion.div initial={{ opacity: 0, y: 20, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.6 }}
                            className={`inline-flex items-center px-5 py-2.5 backdrop-blur-md rounded-full text-sm font-medium mb-8 border shadow-lg ${isDark ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30' : 'bg-indigo-100 text-indigo-700 border-indigo-200'}`}>
                            <Rocket className="h-4 w-4 mr-2" />
                            Freelance Services
                            <ChevronRight className="h-4 w-4 ml-1 opacity-60" />
                        </motion.div>

                        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                            className={`text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Hire{' '}
                            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">UTHAKKAN</span>
                        </motion.h1>

                        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
                            className={`text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
                            Quality freelance services for web development, video editing, AI solutions, and digital consulting. Fast. Reliable. Affordable.
                        </motion.p>

                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-col sm:flex-row justify-center gap-4">
                            <motion.button
                                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                                whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(99, 102, 241, 0.5)" }} whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-lg rounded-xl flex items-center justify-center shadow-2xl cursor-pointer">
                                <span>Get a Quote</span>
                                <ArrowRight className="h-5 w-5 ml-2" />
                            </motion.button>
                            <Link to="/products">
                                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                                    className={`w-full px-8 py-4 font-semibold text-lg rounded-xl border-2 transition-colors ${isDark ? 'bg-white/10 text-white border-white/20 hover:bg-white/20' : 'bg-white text-gray-700 border-gray-200 hover:border-indigo-300'}`}>
                                    View Products
                                </motion.button>
                            </Link>
                        </motion.div>
                    </div>
                </section>

                {/* Services */}
                <section className={`min-h-screen flex flex-col justify-center py-20 transition-colors duration-500 ${isDark ? 'bg-slate-800' : 'bg-white'}`}>
                    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-14">
                            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Services Offered</h2>
                            <motion.div initial={{ width: 0 }} whileInView={{ width: 100 }} viewport={{ once: true }} className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                            {services.map((service, i) => (
                                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -8, scale: 1.02 }}
                                    className={`p-6 rounded-2xl border transition-all duration-300 ${isDark ? 'bg-slate-700/50 border-slate-600/50 hover:bg-slate-700' : 'bg-gray-50 hover:bg-white hover:shadow-xl border-gray-100'}`}>
                                    <motion.div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-lg`} whileHover={{ rotate: [0, -10, 10, 0] }}>
                                        <service.icon className="h-7 w-7 text-white" />
                                    </motion.div>
                                    <h3 className={`font-bold text-lg mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{service.title}</h3>
                                    <p className={`text-sm mb-4 ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>{service.desc}</p>
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${isDark ? 'bg-indigo-500/20 text-indigo-300' : 'bg-indigo-100 text-indigo-700'}`}>{service.price}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Recent Products */}
                <section className={`min-h-screen flex flex-col justify-center py-20 transition-colors duration-500 ${isDark ? 'bg-slate-900' : 'bg-gray-50'}`}>
                    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-14">
                            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Recent Products</h2>
                            <p className={`text-base max-w-xl mx-auto ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>Check out our latest digital products — built with the same quality we bring to freelance projects.</p>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {recentProducts.map((product, i) => (
                                <motion.a key={i} href={product.url} target="_blank" rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -5, scale: 1.03 }}
                                    className={`group p-5 rounded-2xl border transition-all duration-300 ${isDark ? 'bg-slate-800 border-slate-700 hover:border-slate-600' : 'bg-white border-gray-100 hover:shadow-lg'}`}>
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-4 shadow-md`}>
                                        <product.icon className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className={`font-bold text-base mb-1 flex items-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                        {product.name}
                                        <ExternalLink className="h-3 w-3 ml-1.5 opacity-0 group-hover:opacity-60 transition-opacity" />
                                    </h3>
                                    <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>{product.tagline}</p>
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className={`min-h-screen flex flex-col justify-center py-20 transition-colors duration-500 ${isDark ? 'bg-slate-800' : 'bg-white'}`}>
                    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                                <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Why Hire Me?</h2>
                                <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
                                    I'm Ajmal U K, founder of UTHAKKAN. When you hire me, you get direct access to a developer who cares about quality, speed, and your success. No agency overhead, just results.
                                </p>
                                <div className="space-y-4">
                                    {whyChoose.map((item, i) => (
                                        <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                            className="flex items-start">
                                            <CheckCircle className={`h-5 w-5 mr-3 mt-0.5 ${isDark ? 'text-emerald-400' : 'text-emerald-500'}`} />
                                            <div>
                                                <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.title}</h4>
                                                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>{item.desc}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                                className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-8 rounded-3xl text-white shadow-2xl relative overflow-hidden flex flex-col justify-center items-center">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20" />
                                <img src={ceoImage} alt="Ajmal U K" className="w-28 h-28 rounded-full border-4 border-white/40 object-cover shadow-2xl mb-4" />
                                <h3 className="text-2xl font-bold mb-2">Ajmal U K</h3>
                                <p className="text-indigo-100 text-sm text-center mb-4">
                                    Founder & Developer at UTHAKKAN. Your project is not complete until you're happy.
                                </p>
                                <div className="flex items-center space-x-1 text-yellow-300">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Contact Form */}
                <section id="contact-form" className={`py-24 transition-colors duration-500 ${isDark ? 'bg-slate-900' : 'bg-gray-50'}`}>
                    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-14">
                            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring" }}
                                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white mb-6 shadow-2xl">
                                <Sparkles className="h-8 w-8" />
                            </motion.div>
                            <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Let's Build Something Amazing</h2>
                            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>
                                Share your project details and I'll get back within 24 hours with a personalized quote. No commitment, just a conversation.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                            {/* Left Side - Benefits */}
                            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2 space-y-6">
                                <div className={`p-6 rounded-2xl ${isDark ? 'bg-slate-800' : 'bg-white shadow-lg'}`}>
                                    <h3 className={`font-bold text-lg mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>What You Get</h3>
                                    <ul className="space-y-3">
                                        {['Free consultation call', 'Detailed project breakdown', 'Transparent pricing', 'Flexible timeline options', 'Ongoing support included'].map((item, i) => (
                                            <li key={i} className="flex items-center">
                                                <CheckCircle className={`h-5 w-5 mr-3 ${isDark ? 'text-emerald-400' : 'text-emerald-500'}`} />
                                                <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-6 rounded-2xl text-white">
                                    <h3 className="font-bold text-lg mb-2">Quick Response</h3>
                                    <p className="text-sm text-indigo-100 mb-3">Most inquiries receive a response within 12 hours. Complex projects may take up to 24 hours for a detailed quote.</p>
                                    <div className="flex items-center text-xs text-indigo-200">
                                        <Clock className="h-4 w-4 mr-1" />
                                        <span>Avg. response: 8 hours</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Right Side - Form */}
                            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                                className={`lg:col-span-3 p-8 rounded-3xl shadow-2xl border ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100'}`}>
                                <form className="space-y-5">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <label htmlFor="name" className={`block text-sm font-medium mb-2 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>Full Name *</label>
                                            <input type="text" id="name" placeholder="John Doe" required
                                                className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all ${isDark ? 'bg-slate-700 border-slate-600 text-white placeholder-slate-400' : 'bg-gray-50 border-gray-200 text-gray-900'}`} />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className={`block text-sm font-medium mb-2 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>Email Address *</label>
                                            <input type="email" id="email" placeholder="john@example.com" required
                                                className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all ${isDark ? 'bg-slate-700 border-slate-600 text-white placeholder-slate-400' : 'bg-gray-50 border-gray-200 text-gray-900'}`} />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <label htmlFor="service" className={`block text-sm font-medium mb-2 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>Service Needed *</label>
                                            <select id="service" required
                                                className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all ${isDark ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-50 border-gray-200 text-gray-900'}`}>
                                                <option value="">Select a service</option>
                                                <option>🌐 Website Development</option>
                                                <option>📱 Web Application</option>
                                                <option>🎬 YouTube Video Editing</option>
                                                <option>📹 Short-Form Content (Reels/Shorts)</option>
                                                <option>🤖 AI Tool Development</option>
                                                <option>⚡ Workflow Automation</option>
                                                <option>💡 Digital Consulting</option>
                                                <option>🛠️ Custom Solution</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="timeline" className={`block text-sm font-medium mb-2 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>Timeline</label>
                                            <select id="timeline"
                                                className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all ${isDark ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-50 border-gray-200 text-gray-900'}`}>
                                                <option>ASAP (Rush)</option>
                                                <option>1-2 Weeks</option>
                                                <option>2-4 Weeks</option>
                                                <option>1-2 Months</option>
                                                <option>Flexible / No Rush</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="budget" className={`block text-sm font-medium mb-2 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>Budget Range</label>
                                        <select id="budget"
                                            className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all ${isDark ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-50 border-gray-200 text-gray-900'}`}>
                                            <option>₹2,000 - ₹5,000 (Small Project)</option>
                                            <option>₹5,000 - ₹15,000 (Medium Project)</option>
                                            <option>₹15,000 - ₹30,000 (Standard Project)</option>
                                            <option>₹30,000 - ₹50,000 (Large Project)</option>
                                            <option>₹50,000+ (Enterprise)</option>
                                            <option>Let's Discuss Based on Scope</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="details" className={`block text-sm font-medium mb-2 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>Project Details *</label>
                                        <textarea id="details" rows="4" required placeholder="Tell me about your project: What do you want to build? Who is your target audience? Any specific features or references?"
                                            className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all resize-none ${isDark ? 'bg-slate-700 border-slate-600 text-white placeholder-slate-400' : 'bg-gray-50 border-gray-200 text-gray-900'}`} />
                                    </div>

                                    <motion.button whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(99, 102, 241, 0.5)" }} whileTap={{ scale: 0.98 }} type="submit"
                                        className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg rounded-xl flex items-center justify-center shadow-xl relative overflow-hidden">
                                        <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12" initial={{ x: '-100%' }} whileHover={{ x: '100%' }} transition={{ duration: 0.6 }} />
                                        <span className="relative">Send Request</span>
                                        <Send className="h-5 w-5 ml-2 relative" />
                                    </motion.button>

                                    <p className={`text-xs text-center ${isDark ? 'text-slate-500' : 'text-gray-400'}`}>
                                        By submitting, you agree to be contacted about your project. No spam, ever.
                                    </p>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Freelancing;
