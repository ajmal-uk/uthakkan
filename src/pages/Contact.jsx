import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle, Sun, Moon, ChevronRight } from 'lucide-react';
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

const Contact = () => {
    const [isDark, setIsDark] = useState(true);
    const toggleTheme = useCallback(() => setIsDark(prev => !prev), []);

    const contactInfo = [
        { icon: Mail, label: "Email", value: "contact@uthakkan.com", color: "from-blue-500 to-cyan-500" },
        { icon: Phone, label: "Phone", value: "+91 98765 43210", color: "from-emerald-500 to-teal-500" },
        { icon: MapPin, label: "Location", value: "Kannur, Kerala, India", color: "from-violet-500 to-purple-500" },
        { icon: Clock, label: "Response Time", value: "Within 24 hours", color: "from-amber-500 to-orange-500" }
    ];

    return (
        <>
            <SEO
                title="Contact UTHAKKAN - Get in Touch"
                description="Contact UTHAKKAN for custom AI solutions, web applications, and digital projects. Based in Kannur, Kerala, India."
                url="https://uthakkan.com/contact"
            />
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />

            <div className={`min-h-screen pt-16 overflow-hidden transition-colors duration-500 ${isDark ? 'bg-slate-900' : 'bg-gray-50'}`}>
                {/* Hero */}
                <section className="relative py-32 md:py-40 overflow-hidden">
                    <div className={`absolute inset-0 transition-colors duration-500 ${isDark ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' : 'bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50'}`} />

                    <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 12, repeat: Infinity }}
                        className={`absolute top-10 right-[20%] w-[500px] h-[500px] rounded-full filter blur-[150px] ${isDark ? 'bg-rose-600 opacity-30' : 'bg-rose-400 opacity-25'}`} />
                    <motion.div animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 12, repeat: Infinity, delay: 3 }}
                        className={`absolute bottom-0 left-[15%] w-[400px] h-[400px] rounded-full filter blur-[120px] ${isDark ? 'bg-pink-600 opacity-25' : 'bg-pink-400 opacity-20'}`} />

                    <div className="relative w-full px-8 md:px-16 lg:px-24 text-center z-10">
                        <motion.div initial={{ opacity: 0, y: 20, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.6 }}
                            className={`inline-flex items-center px-5 py-2.5 backdrop-blur-md rounded-full text-sm font-medium mb-8 border shadow-lg ${isDark ? 'bg-rose-500/20 text-rose-300 border-rose-500/30' : 'bg-rose-100 text-rose-700 border-rose-200'}`}>
                            <MessageCircle className="h-4 w-4 mr-2" />
                            Get in Touch
                            <ChevronRight className="h-4 w-4 ml-1 opacity-60" />
                        </motion.div>

                        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                            className={`text-6xl md:text-8xl font-bold tracking-tight leading-none mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Let's{' '}
                            <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">Connect</span>
                        </motion.h1>

                        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
                            className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
                            Have a project in mind or want to discuss a potential partnership? We'd love to hear from you.
                        </motion.p>
                    </div>
                </section>

                {/* Contact Grid */}
                <section className={`py-20 transition-colors duration-500 ${isDark ? 'bg-slate-800' : 'bg-white'}`}>
                    <div className="w-full px-8 md:px-16 lg:px-24">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
                            {/* Contact Info */}
                            <motion.div initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="space-y-8">
                                <div className={`p-8 rounded-3xl ${isDark ? 'bg-slate-700/50' : 'bg-gray-50'}`}>
                                    <h2 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>Contact Information</h2>
                                    <div className="space-y-6">
                                        {contactInfo.map((item, i) => (
                                            <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.1 }} whileHover={{ x: 5 }} className="flex items-center group">
                                                <motion.div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mr-5 shadow-xl`} whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}>
                                                    <item.icon className="h-6 w-6 text-white" />
                                                </motion.div>
                                                <div>
                                                    <span className={`text-sm block ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>{item.label}</span>
                                                    <p className={`font-semibold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.value}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
                                    className="bg-gradient-to-br from-rose-500 via-pink-500 to-orange-500 p-8 rounded-3xl text-white shadow-2xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20" />
                                    <h2 className="text-2xl font-bold mb-4 text-white">Let's Build Something Great</h2>
                                    <p className="text-rose-100 text-lg mb-5">
                                        Whether you need a custom AI solution, a web application, or just advice on your next project.
                                    </p>
                                    <div className="flex items-center space-x-2 text-base text-rose-100">
                                        <CheckCircle className="h-5 w-5" />
                                        <span>Free initial consultation</span>
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Contact Form */}
                            <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
                                className={`p-10 rounded-3xl shadow-2xl border ${isDark ? 'bg-slate-700/50 border-slate-600' : 'bg-white border-gray-100'}`}>
                                <h2 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>Send a Message</h2>
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className={`block text-sm font-medium mb-2 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>Name</label>
                                            <input type="text" id="name" placeholder="Your Name"
                                                className={`w-full px-5 py-4 rounded-2xl border focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all ${isDark ? 'bg-slate-600 border-slate-500 text-white placeholder-slate-400' : 'bg-gray-50 border-gray-200 text-gray-900 hover:bg-white'}`} />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className={`block text-sm font-medium mb-2 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>Email</label>
                                            <input type="email" id="email" placeholder="your@email.com"
                                                className={`w-full px-5 py-4 rounded-2xl border focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all ${isDark ? 'bg-slate-600 border-slate-500 text-white placeholder-slate-400' : 'bg-gray-50 border-gray-200 text-gray-900 hover:bg-white'}`} />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className={`block text-sm font-medium mb-2 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>Subject</label>
                                        <input type="text" id="subject" placeholder="Project Inquiry"
                                            className={`w-full px-5 py-4 rounded-2xl border focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all ${isDark ? 'bg-slate-600 border-slate-500 text-white placeholder-slate-400' : 'bg-gray-50 border-gray-200 text-gray-900 hover:bg-white'}`} />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className={`block text-sm font-medium mb-2 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>Message</label>
                                        <textarea id="message" rows="5" placeholder="Tell us about your project..."
                                            className={`w-full px-5 py-4 rounded-2xl border focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all resize-none ${isDark ? 'bg-slate-600 border-slate-500 text-white placeholder-slate-400' : 'bg-gray-50 border-gray-200 text-gray-900 hover:bg-white'}`} />
                                    </div>

                                    <motion.button whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(244, 63, 94, 0.5)" }} whileTap={{ scale: 0.98 }} type="submit"
                                        className="w-full py-5 bg-gradient-to-r from-rose-500 via-pink-500 to-orange-500 text-white font-bold text-lg rounded-2xl flex items-center justify-center space-x-3 shadow-xl relative overflow-hidden">
                                        <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12" initial={{ x: '-100%' }} whileHover={{ x: '100%' }} transition={{ duration: 0.6 }} />
                                        <span className="relative">Send Message</span>
                                        <Send className="h-5 w-5 relative" />
                                    </motion.button>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Contact;
