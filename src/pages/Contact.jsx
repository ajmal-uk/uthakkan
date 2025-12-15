import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Contact = () => {
    return (
        <>
            <SEO
                title="Contact UTHAKKAN - Get in Touch"
                description="Contact UTHAKKAN for custom AI solutions, web applications, and digital projects. Based in Kannur, Kerala, India."
                url="https://uthakkan.com/contact"
            />
            <div className="bg-white min-h-screen pt-16 overflow-hidden">
                {/* Hero */}
                <section className="relative py-20">
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50"></div>
                    <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 6, repeat: Infinity }}
                        className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-rose-300 to-pink-400 rounded-full blur-3xl opacity-30"
                    ></motion.div>

                    <div className="relative w-full max-w-4xl mx-auto px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-flex items-center px-4 py-1 bg-rose-100 text-rose-700 rounded-full text-sm font-medium mb-4">
                                <MessageCircle className="h-4 w-4 mr-1" />
                                Get in Touch
                            </span>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                Let's <span className="text-rose-500">Connect</span>
                            </h1>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Have a project in mind or want to discuss a potential partnership? We'd love to hear from you.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Contact Grid */}
                <section className="py-12 bg-white">
                    <div className="w-full max-w-6xl mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Contact Info */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="space-y-6"
                            >
                                <div className="bg-gray-50 p-6 rounded-2xl">
                                    <h2 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h2>
                                    <div className="space-y-5">
                                        {[
                                            { icon: Mail, label: "Email", value: "contact@uthakkan.com", color: "from-blue-500 to-cyan-500" },
                                            { icon: Phone, label: "Phone", value: "+91 98765 43210", color: "from-emerald-500 to-teal-500" },
                                            { icon: MapPin, label: "Location", value: "Kannur, Kerala, India", color: "from-violet-500 to-purple-500" },
                                            { icon: Clock, label: "Response Time", value: "Within 24 hours", color: "from-amber-500 to-orange-500" }
                                        ].map((item, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.3 + i * 0.1 }}
                                                className="flex items-start group"
                                            >
                                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform`}>
                                                    <item.icon className="h-5 w-5 text-white" />
                                                </div>
                                                <div>
                                                    <span className="text-xs text-gray-500 block">{item.label}</span>
                                                    <p className="font-semibold text-gray-900">{item.value}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="bg-gradient-to-br from-rose-500 via-pink-500 to-orange-500 p-6 rounded-2xl text-white shadow-xl"
                                >
                                    <h2 className="text-xl font-bold mb-3 text-white">Let's Build Something Great</h2>
                                    <p className="text-rose-100 mb-4">
                                        Whether you need a custom AI solution, a web application, or just advice on your next project.
                                    </p>
                                    <div className="flex items-center space-x-2 text-sm text-rose-100">
                                        <CheckCircle className="h-4 w-4" />
                                        <span>Free initial consultation</span>
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Contact Form */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
                            >
                                <h2 className="text-xl font-bold text-gray-900 mb-6">Send a Message</h2>
                                <form className="space-y-5">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all bg-gray-50 hover:bg-white"
                                                placeholder="Your Name"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all bg-gray-50 hover:bg-white"
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                        <input
                                            type="text"
                                            id="subject"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all bg-gray-50 hover:bg-white"
                                            placeholder="Project Inquiry"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                        <textarea
                                            id="message"
                                            rows="4"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all bg-gray-50 hover:bg-white resize-none"
                                            placeholder="Tell us about your project..."
                                        ></textarea>
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.02, boxShadow: "0 15px 30px -5px rgba(244, 63, 94, 0.4)" }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        className="w-full py-4 bg-gradient-to-r from-rose-500 via-pink-500 to-orange-500 text-white font-bold rounded-xl flex items-center justify-center space-x-2 shadow-lg"
                                    >
                                        <span>Send Message</span>
                                        <Send className="h-5 w-5" />
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
