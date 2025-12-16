import { Bot, Wrench, Mail, Car, ExternalLink, Sparkles, Zap, Globe, Shield, Star, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Products = () => {
    const products = [
        {
            id: 'byte-ai',
            name: 'Byte AI',
            tagline: 'Your Intelligent AI Companion',
            description: 'A powerful AI chatbot similar to Gemini and ChatGPT. Experience natural conversations, get instant answers, generate creative content, and solve complex problems with cutting-edge artificial intelligence.',
            icon: Bot,
            color: 'from-violet-500 to-purple-600',
            glowColor: 'violet',
            url: 'https://byteai.pythonanywhere.com',
            features: ['Natural Conversations', 'Code Generation', 'Creative Writing', 'Problem Solving'],
            badge: 'AI Powered'
        },
        {
            id: 'toolpix',
            name: 'ToolPix',
            tagline: 'Your Ultimate Tool Studio',
            description: 'A comprehensive tool studio featuring digital tools, assets, utilities, AI-powered features, and online compilers. Everything you need for creative and technical work in one place.',
            icon: Wrench,
            color: 'from-emerald-500 to-teal-600',
            glowColor: 'emerald',
            url: 'https://toolpix.pythonanywhere.com',
            features: ['Digital Assets', 'AI Tools', 'Online Compilers', 'Utility Apps'],
            badge: 'All-in-One'
        },
        {
            id: 'zymail',
            name: 'Zymail',
            tagline: 'Instant Temporary Emails',
            description: 'Generate disposable email addresses instantly. Protect your privacy, avoid spam, and keep your real inbox clean with our secure temporary email service.',
            icon: Mail,
            color: 'from-blue-500 to-cyan-600',
            glowColor: 'blue',
            url: 'https://zymail.pythonanywhere.com',
            features: ['Instant Generation', 'Spam Protection', 'Privacy First', 'No Sign-up'],
            badge: 'Privacy'
        },
        {
            id: 'zyrace',
            name: 'Zyrace',
            tagline: 'Thrilling Online Racing',
            description: 'An exhilarating online car racing game. Experience high-speed action, compete with players worldwide, and race your way to the top of the leaderboards.',
            icon: Car,
            color: 'from-orange-500 to-red-600',
            glowColor: 'orange',
            url: 'https://zyrace.pythonanywhere.com',
            features: ['Multiplayer Racing', 'Custom Cars', 'Global Leaderboards', 'Exciting Tracks'],
            badge: 'Gaming'
        }
    ];

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "UTHAKKAN Products",
        "description": "Explore UTHAKKAN's flagship digital products including AI chatbots, developer tools, privacy solutions, and gaming experiences.",
        "numberOfItems": products.length,
        "itemListElement": products.map((product, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "SoftwareApplication",
                "name": product.name,
                "description": product.description,
                "url": product.url,
                "applicationCategory": product.badge === 'Gaming' ? 'GameApplication' : 'WebApplication',
                "operatingSystem": "Web Browser",
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                },
                "provider": {
                    "@type": "Organization",
                    "name": "UTHAKKAN"
                }
            }
        }))
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    return (
        <>
            <SEO
                title="UTHAKKAN Products - AI Tools, Developer Utilities & Digital Experiences"
                description="Discover UTHAKKAN's flagship products: Byte AI chatbot, ToolPix tool studio, Zymail temporary email, and Zyrace online racing game. Free, powerful, and built for everyone."
                keywords="Byte AI, ToolPix, Zymail, Zyrace, AI chatbot, online tools, temporary email, online games, developer tools, UTHAKKAN products, free AI tools, online compiler"
                url="https://uthakkan.unaux.com/#/products"
                schema={productSchema}
            />
            <div className="bg-white min-h-screen pt-16 overflow-hidden">
                {/* Hero Section */}
                <section className="relative py-24 overflow-hidden">
                    {/* Animated Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>

                    {/* Floating Orbs */}
                    <motion.div
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.3, 0.5, 0.3],
                            x: [0, 30, 0],
                            y: [0, -20, 0]
                        }}
                        transition={{ duration: 8, repeat: Infinity }}
                        className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-violet-500 rounded-full filter blur-[120px] opacity-30"
                    ></motion.div>
                    <motion.div
                        animate={{
                            scale: [1.2, 1, 1.2],
                            opacity: [0.3, 0.5, 0.3],
                            x: [0, -30, 0],
                            y: [0, 20, 0]
                        }}
                        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
                        className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-500 rounded-full filter blur-[120px] opacity-30"
                    ></motion.div>
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.2, 0.4, 0.2]
                        }}
                        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500 rounded-full filter blur-[150px] opacity-20"
                    ></motion.div>

                    {/* Grid Pattern Overlay */}
                    <div className="absolute inset-0 opacity-10" style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                        backgroundSize: '50px 50px'
                    }}></div>

                    <div className="relative w-full max-w-5xl mx-auto px-6 text-center z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium text-white/90 mb-8 border border-white/20"
                        >
                            <Sparkles className="h-4 w-4 text-yellow-400 mr-2" />
                            Explore Our Creations
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white leading-tight"
                        >
                            Our{' '}
                            <span className="relative inline-block">
                                <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                                    Products
                                </span>
                                <motion.span
                                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-violet-400 via-blue-400 to-emerald-400 rounded-full"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                ></motion.span>
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
                        >
                            Powerful digital experiences crafted with passion. From AI-powered tools to entertainment, discover what we've built for you.
                        </motion.p>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex flex-wrap justify-center gap-8 mt-12"
                        >
                            {[
                                { icon: Zap, value: '4', label: 'Products' },
                                { icon: Globe, value: '100%', label: 'Free Access' },
                                { icon: Shield, value: '24/7', label: 'Available' },
                                { icon: Star, value: '∞', label: 'Possibilities' }
                            ].map((stat, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                                        <stat.icon className="h-5 w-5 text-white/80" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-2xl font-bold text-white">{stat.value}</p>
                                        <p className="text-sm text-slate-400">{stat.label}</p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Products Grid */}
                <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
                    <div className="w-full max-w-7xl mx-auto px-6">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                        >
                            {products.map((product) => (
                                <motion.div
                                    key={product.id}
                                    variants={cardVariants}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    className="group relative"
                                >
                                    {/* Card */}
                                    <div className="relative bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">
                                        {/* Gradient Border Effect */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                                        {/* Animated Glow */}
                                        <motion.div
                                            className={`absolute -top-20 -right-20 w-40 h-40 bg-${product.glowColor}-500 rounded-full filter blur-[80px] opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                                        ></motion.div>

                                        <div className="relative z-10">
                                            {/* Header */}
                                            <div className="flex items-start justify-between mb-6">
                                                <div className="flex items-center gap-4">
                                                    <motion.div
                                                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                                                        transition={{ duration: 0.5 }}
                                                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center shadow-lg`}
                                                    >
                                                        <product.icon className="h-8 w-8 text-white" />
                                                    </motion.div>
                                                    <div>
                                                        <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                                                        <p className="text-sm text-gray-500">{product.tagline}</p>
                                                    </div>
                                                </div>
                                                <span className={`px-3 py-1 bg-gradient-to-r ${product.color} text-white text-xs font-semibold rounded-full`}>
                                                    {product.badge}
                                                </span>
                                            </div>

                                            {/* Description */}
                                            <p className="text-gray-600 leading-relaxed mb-6">
                                                {product.description}
                                            </p>

                                            {/* Features */}
                                            <div className="flex flex-wrap gap-2 mb-8">
                                                {product.features.map((feature, i) => (
                                                    <motion.span
                                                        key={i}
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: i * 0.1 }}
                                                        className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors"
                                                    >
                                                        {feature}
                                                    </motion.span>
                                                ))}
                                            </div>

                                            {/* CTA Button */}
                                            <motion.a
                                                href={product.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className={`inline-flex items-center justify-center w-full py-4 px-6 bg-gradient-to-r ${product.color} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group/btn`}
                                            >
                                                <span>Visit {product.name}</span>
                                                <motion.div
                                                    animate={{ x: [0, 4, 0] }}
                                                    transition={{ repeat: Infinity, duration: 1.5 }}
                                                    className="ml-2"
                                                >
                                                    <ExternalLink className="h-5 w-5" />
                                                </motion.div>
                                            </motion.a>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Why Our Products Section */}
                <section className="py-24 bg-white">
                    <div className="w-full max-w-4xl mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Why Choose Our Products?
                            </h2>
                            <p className="text-gray-600 max-w-xl mx-auto">
                                Built with modern technologies and designed for exceptional user experiences.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { icon: Zap, title: 'Fast & Reliable', desc: 'Optimized for speed and consistent performance', color: 'from-yellow-400 to-orange-500' },
                                { icon: Shield, title: 'Secure & Private', desc: 'Your data and privacy are always protected', color: 'from-green-400 to-emerald-500' },
                                { icon: Star, title: 'Free Forever', desc: 'All core features available at no cost', color: 'from-blue-400 to-indigo-500' }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="p-6 bg-gray-50 rounded-2xl text-center hover:bg-white hover:shadow-xl transition-all duration-300"
                                >
                                    <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                                        <item.icon className="h-7 w-7 text-white" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-500">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full"
                    ></motion.div>
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full"
                    ></motion.div>

                    <div className="relative w-full max-w-3xl mx-auto px-6 text-center z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Have an Idea? Let's Build It Together
                            </h2>
                            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
                                We're always working on new products and features. Have a suggestion or want to collaborate?
                            </p>
                            <motion.a
                                href="/#/contact"
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(99, 102, 241, 0.4)" }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg"
                            >
                                <span>Get in Touch</span>
                                <ArrowUpRight className="ml-2 h-5 w-5" />
                            </motion.a>
                        </motion.div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Products;
