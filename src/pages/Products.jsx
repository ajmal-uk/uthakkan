import { Bot, Wrench, Mail, Car, ExternalLink, Sparkles, Zap, Globe, Shield, Star, ArrowUpRight, Rocket, ChevronRight, Sun, Moon, Layers, Target, Heart } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';
import SEO from '../components/SEO';

// Interactive Wave Canvas Component - Full Width
const WaveCanvas = ({ isDark }) => {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const animationRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let width = window.innerWidth;
        let height = 300;

        canvas.width = width;
        canvas.height = height;

        const waves = [
            { amplitude: 30, frequency: 0.015, speed: 0.012, phase: 0, color: isDark ? 'rgba(99, 102, 241, 0.4)' : 'rgba(99, 102, 241, 0.2)' },
            { amplitude: 40, frequency: 0.012, speed: 0.018, phase: 2, color: isDark ? 'rgba(139, 92, 246, 0.35)' : 'rgba(139, 92, 246, 0.15)' },
            { amplitude: 25, frequency: 0.02, speed: 0.008, phase: 4, color: isDark ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.12)' },
            { amplitude: 35, frequency: 0.018, speed: 0.015, phase: 6, color: isDark ? 'rgba(168, 85, 247, 0.25)' : 'rgba(168, 85, 247, 0.1)' },
        ];

        const handleMouseMove = (e) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        const handleResize = () => {
            width = window.innerWidth;
            canvas.width = width;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            waves.forEach((wave) => {
                wave.phase += wave.speed;

                ctx.beginPath();
                ctx.moveTo(0, height);

                for (let x = 0; x <= width; x += 3) {
                    const distFromMouse = Math.abs(x - mouseRef.current.x);
                    const mouseInfluence = Math.max(0, 1 - distFromMouse / 250) * 40;

                    const y = height / 2 + 50 +
                        Math.sin(x * wave.frequency + wave.phase) * (wave.amplitude + mouseInfluence) +
                        Math.sin(x * wave.frequency * 0.5 + wave.phase * 1.5) * wave.amplitude * 0.4;

                    ctx.lineTo(x, y);
                }

                ctx.lineTo(width, height);
                ctx.closePath();
                ctx.fillStyle = wave.color;
                ctx.fill();
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [isDark]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute bottom-0 left-0 w-full pointer-events-auto"
            style={{ height: '300px' }}
        />
    );
};

// Theme toggle button
const ThemeToggle = ({ isDark, toggleTheme }) => (
    <motion.button
        onClick={toggleTheme}
        whileHover={{ scale: 1.1, rotate: 15 }}
        whileTap={{ scale: 0.9 }}
        className={`fixed top-24 right-6 z-50 p-3.5 rounded-full shadow-xl backdrop-blur-md border transition-all duration-300 ${isDark
                ? 'bg-slate-800/90 border-slate-600 text-yellow-400 hover:bg-slate-700'
                : 'bg-white/90 border-gray-200 text-slate-700 hover:bg-gray-50'
            }`}
    >
        <AnimatePresence mode="wait">
            <motion.div
                key={isDark ? 'moon' : 'sun'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </motion.div>
        </AnimatePresence>
    </motion.button>
);

// Floating orbs background
const FloatingOrbs = ({ isDark }) => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
            animate={{
                scale: [1, 1.4, 1],
                opacity: [0.4, 0.6, 0.4],
                x: [0, 60, 0],
                y: [0, -40, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute top-10 right-[20%] w-[600px] h-[600px] rounded-full filter blur-[180px] ${isDark ? 'bg-violet-600' : 'bg-violet-400'
                }`}
            style={{ opacity: isDark ? 0.4 : 0.25 }}
        />
        <motion.div
            animate={{
                scale: [1.3, 1, 1.3],
                opacity: [0.3, 0.5, 0.3],
                x: [0, -50, 0],
                y: [0, 40, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, delay: 4, ease: "easeInOut" }}
            className={`absolute bottom-0 left-[15%] w-[500px] h-[500px] rounded-full filter blur-[150px] ${isDark ? 'bg-blue-600' : 'bg-blue-400'
                }`}
            style={{ opacity: isDark ? 0.35 : 0.2 }}
        />
        <motion.div
            animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 15, repeat: Infinity, delay: 2, ease: "easeInOut" }}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full filter blur-[200px] ${isDark ? 'bg-emerald-600' : 'bg-emerald-400'
                }`}
            style={{ opacity: isDark ? 0.2 : 0.1 }}
        />
    </div>
);

// Full width product card
const ProductCard = ({ product, index, isDark }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setMousePos({
            x: (e.clientX - rect.left) / rect.width,
            y: (e.clientY - rect.top) / rect.height
        });
    };

    const Icon = product.icon;

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative"
        >
            {/* Glow effect */}
            <motion.div
                className={`absolute -inset-1 bg-gradient-to-r ${product.color} rounded-3xl opacity-0 group-hover:opacity-70 blur-xl transition-opacity duration-500`}
            />

            {/* Card */}
            <motion.div
                className={`relative rounded-3xl p-8 md:p-10 border shadow-2xl transition-all duration-500 overflow-hidden h-full ${isDark
                        ? 'bg-slate-800/80 border-slate-700/50 hover:bg-slate-800/95 backdrop-blur-xl'
                        : 'bg-white/90 border-gray-200/50 hover:bg-white hover:shadow-3xl backdrop-blur-xl'
                    }`}
                whileHover={{ y: -8, scale: 1.01 }}
                style={{
                    transform: isHovered ? `perspective(1000px) rotateX(${(mousePos.y - 0.5) * -8}deg) rotateY(${(mousePos.x - 0.5) * 8}deg)` : 'none'
                }}
            >
                {/* Spotlight effect */}
                <div
                    className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                    style={{
                        background: isHovered
                            ? `radial-gradient(800px circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, ${isDark ? 'rgba(99, 102, 241, 0.15)' : 'rgba(99, 102, 241, 0.08)'}, transparent 40%)`
                            : 'none',
                        opacity: isHovered ? 1 : 0
                    }}
                />

                {/* Top gradient glow */}
                <motion.div
                    className={`absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br ${product.color} rounded-full filter blur-3xl`}
                    animate={{ opacity: isHovered ? 0.6 : 0.2 }}
                    transition={{ duration: 0.4 }}
                />

                <div className="relative z-10">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                        <div className="flex items-center gap-5">
                            <motion.div
                                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                                transition={{ duration: 0.5 }}
                                className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center shadow-2xl`}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} rounded-2xl blur-xl opacity-60`} />
                                <Icon className="relative h-10 w-10 text-white" />
                            </motion.div>
                            <div>
                                <motion.h3
                                    className={`text-2xl md:text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}
                                >
                                    {product.name}
                                </motion.h3>
                                <p className={`text-base ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>
                                    {product.tagline}
                                </p>
                            </div>
                        </div>
                        <motion.span
                            className={`self-start px-4 py-1.5 bg-gradient-to-r ${product.color} text-white text-sm font-semibold rounded-full shadow-lg`}
                            whileHover={{ scale: 1.05 }}
                        >
                            {product.badge}
                        </motion.span>
                    </div>

                    {/* Description */}
                    <p className={`text-base md:text-lg leading-relaxed mb-8 ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
                        {product.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-3 mb-8">
                        {product.features.map((feature, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + i * 0.08 }}
                                whileHover={{ scale: 1.05, y: -3 }}
                                className={`px-4 py-2 text-sm font-medium rounded-xl transition-all cursor-default ${isDark
                                        ? 'bg-slate-700/60 text-slate-200 hover:bg-slate-700 border border-slate-600/30'
                                        : 'bg-gray-100 text-gray-700 hover:bg-white hover:shadow-lg border border-gray-200'
                                    }`}
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
                        className={`relative inline-flex items-center justify-center w-full py-4 md:py-5 px-8 bg-gradient-to-r ${product.color} text-white font-semibold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden`}
                    >
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                            initial={{ x: '-100%', skewX: '-15deg' }}
                            whileHover={{ x: '100%' }}
                            transition={{ duration: 0.7 }}
                        />
                        <span className="relative z-10 flex items-center">
                            Visit {product.name}
                            <motion.span
                                animate={{ x: [0, 5, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                                className="ml-3"
                            >
                                <ExternalLink className="h-5 w-5" />
                            </motion.span>
                        </span>
                    </motion.a>
                </div>
            </motion.div>
        </motion.div>
    );
};

const Products = () => {
    const [isDark, setIsDark] = useState(true);
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

    const toggleTheme = useCallback(() => setIsDark(prev => !prev), []);

    const products = [
        {
            id: 'byte-ai',
            name: 'Byte AI',
            tagline: 'Your Intelligent AI Companion',
            description: 'A powerful AI chatbot similar to Gemini and ChatGPT. Experience natural conversations, get instant answers, generate creative content, and solve complex problems with cutting-edge artificial intelligence.',
            icon: Bot,
            color: 'from-violet-500 to-purple-600',
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
                "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
                "provider": { "@type": "Organization", "name": "UTHAKKAN" }
            }
        }))
    };

    const stats = [
        { icon: Zap, value: '4', label: 'Products' },
        { icon: Globe, value: '100%', label: 'Free Access' },
        { icon: Shield, value: '24/7', label: 'Available' },
        { icon: Star, value: '∞', label: 'Possibilities' }
    ];

    const promises = [
        { num: '01', label: 'Quality', gradient: 'from-blue-400 to-blue-600' },
        { num: '02', label: 'Creativity', gradient: 'from-violet-400 to-purple-600' },
        { num: '03', label: 'User-first', gradient: 'from-pink-400 to-rose-600' },
        { num: '04', label: 'Automation', gradient: 'from-cyan-400 to-blue-600' },
        { num: '05', label: 'Utility', gradient: 'from-indigo-400 to-violet-600' }
    ];

    const features = [
        { icon: Zap, title: 'Lightning Fast', desc: 'Optimized for speed and performance', color: 'from-yellow-400 to-orange-500' },
        { icon: Shield, title: 'Secure & Private', desc: 'Your data is always protected', color: 'from-green-400 to-emerald-500' },
        { icon: Heart, title: 'Built with Love', desc: 'Crafted with attention to detail', color: 'from-pink-400 to-rose-500' },
        { icon: Target, title: 'User Focused', desc: 'Designed for real-world needs', color: 'from-blue-400 to-indigo-500' }
    ];

    return (
        <>
            <SEO
                title="UTHAKKAN Products - AI Tools, Developer Utilities & Digital Experiences"
                description="Discover UTHAKKAN's flagship products: Byte AI chatbot, ToolPix tool studio, Zymail temporary email, and Zyrace online racing game. Free, powerful, and built for everyone."
                keywords="Byte AI, ToolPix, Zymail, Zyrace, AI chatbot, online tools, temporary email, online games, developer tools, UTHAKKAN products, free AI tools, online compiler"
                url="https://uthakkan.unaux.com/#/products"
                schema={productSchema}
            />

            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />

            <div
                ref={containerRef}
                className={`min-h-screen pt-16 overflow-hidden transition-colors duration-500 ${isDark ? 'bg-slate-900' : 'bg-gray-50'
                    }`}
            >
                {/* Hero Section - Full Width */}
                <motion.section
                    style={{ opacity: heroOpacity, scale: heroScale }}
                    className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
                >
                    {/* Background */}
                    <div className={`absolute inset-0 transition-colors duration-500 ${isDark
                            ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'
                            : 'bg-gradient-to-br from-gray-50 via-indigo-50/50 to-purple-50/50'
                        }`} />

                    {/* Floating orbs */}
                    <FloatingOrbs isDark={isDark} />

                    {/* Grid pattern */}
                    <motion.div
                        animate={{ opacity: [0.02, 0.05, 0.02] }}
                        transition={{ duration: 6, repeat: Infinity }}
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `linear-gradient(${isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)'} 1px, transparent 1px)`,
                            backgroundSize: '80px 80px'
                        }}
                    />

                    {/* Content - Full Width */}
                    <div className="relative w-full px-8 md:px-16 lg:px-24 text-center z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className={`inline-flex items-center px-6 py-3 backdrop-blur-md rounded-full text-sm font-medium mb-10 border shadow-xl ${isDark
                                    ? 'bg-white/10 text-white/90 border-white/20'
                                    : 'bg-white/80 text-gray-700 border-gray-200'
                                }`}
                        >
                            <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
                                <Sparkles className={`h-4 w-4 mr-2 ${isDark ? 'text-yellow-400' : 'text-yellow-500'}`} />
                            </motion.div>
                            Explore Our Creations
                            <ChevronRight className="h-4 w-4 ml-1 opacity-60" />
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className={`text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none mb-8 ${isDark ? 'text-white' : 'text-gray-900'
                                }`}
                        >
                            Our{' '}
                            <span className="relative inline-block">
                                <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                                    Products
                                </span>
                                <motion.span
                                    className="absolute -bottom-3 left-0 right-0 h-2 bg-gradient-to-r from-violet-400 via-blue-400 to-emerald-400 rounded-full"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                />
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className={`text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-16 ${isDark ? 'text-slate-300' : 'text-gray-600'
                                }`}
                        >
                            Powerful digital experiences crafted with passion. From AI-powered tools to entertainment, discover what we've built for you.
                        </motion.p>

                        {/* Stats - Full Width */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-wrap justify-center gap-8 md:gap-16"
                        >
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    className="flex items-center gap-4 group"
                                    whileHover={{ scale: 1.08, y: -5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <motion.div
                                        className={`w-14 h-14 rounded-2xl backdrop-blur-sm flex items-center justify-center border transition-all duration-300 ${isDark
                                                ? 'bg-white/10 border-white/10 group-hover:bg-white/20 group-hover:border-white/30'
                                                : 'bg-white border-gray-200 group-hover:bg-gray-50 shadow-lg'
                                            }`}
                                        whileHover={{ rotate: [0, -8, 8, 0] }}
                                    >
                                        <stat.icon className={`h-6 w-6 transition-colors ${isDark ? 'text-white/80 group-hover:text-white' : 'text-gray-600 group-hover:text-indigo-600'
                                            }`} />
                                    </motion.div>
                                    <div className="text-left">
                                        <p className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                            {stat.value}
                                        </p>
                                        <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>
                                            {stat.label}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Interactive Wave */}
                    <WaveCanvas isDark={isDark} />
                </motion.section>

                {/* Products Grid - Full Width */}
                <section className={`py-24 md:py-40 relative transition-colors duration-500 ${isDark
                        ? 'bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800'
                        : 'bg-gradient-to-b from-white via-gray-50 to-white'
                    }`}>
                    <div className="w-full px-8 md:px-16 lg:px-24 relative z-10">
                        {/* Section header */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-20"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, type: "spring" }}
                                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 text-white mb-8 shadow-2xl"
                            >
                                <Rocket className="h-8 w-8" />
                            </motion.div>
                            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                Explore Our Products
                            </h2>
                            <p className={`text-xl max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>
                                Each product is designed with care to solve real problems and deliver exceptional experiences.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 lg:gap-12">
                            {products.map((product, index) => (
                                <ProductCard key={product.id} product={product} index={index} isDark={isDark} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Features Section - Full Width */}
                <section className={`py-24 md:py-32 relative overflow-hidden transition-colors duration-500 ${isDark
                        ? 'bg-slate-900'
                        : 'bg-white'
                    }`}>
                    <div className="w-full px-8 md:px-16 lg:px-24">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                Why Choose Us?
                            </h2>
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: 120 }}
                                viewport={{ once: true }}
                                className="h-1.5 bg-gradient-to-r from-violet-500 via-blue-500 to-emerald-500 mx-auto rounded-full"
                            />
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                            {features.map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    className={`group p-8 rounded-3xl text-center transition-all duration-500 ${isDark
                                            ? 'bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50'
                                            : 'bg-gray-50 hover:bg-white hover:shadow-2xl'
                                        }`}
                                >
                                    <motion.div
                                        className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-xl`}
                                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                                    >
                                        <feature.icon className="h-8 w-8 text-white" />
                                    </motion.div>
                                    <h3 className={`font-bold text-xl mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                        {feature.title}
                                    </h3>
                                    <p className={isDark ? 'text-slate-400' : 'text-gray-600'}>
                                        {feature.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Our Promise Section - Full Width */}
                <section className={`py-24 md:py-40 relative overflow-hidden transition-colors duration-500 ${isDark
                        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'
                        : 'bg-gradient-to-br from-indigo-50 via-white to-purple-50'
                    }`}>
                    {/* Background glows */}
                    <motion.div
                        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
                        transition={{ duration: 20, repeat: Infinity }}
                        className={`absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full filter blur-[150px] ${isDark ? 'bg-blue-600/30' : 'bg-blue-400/20'
                            }`}
                    />
                    <motion.div
                        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
                        transition={{ duration: 20, repeat: Infinity, delay: 5 }}
                        className={`absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full filter blur-[150px] ${isDark ? 'bg-purple-600/30' : 'bg-purple-400/20'
                            }`}
                    />

                    <div className="relative w-full px-8 md:px-16 lg:px-24">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-20"
                        >
                            <h2 className={`text-4xl md:text-6xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                Our Promise
                            </h2>
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: 120 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"
                            />
                        </motion.div>

                        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 text-center max-w-7xl mx-auto">
                            {promises.map((promise, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 40, scale: 0.8 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                    whileHover={{ scale: 1.15, y: -10 }}
                                    className="p-6 group cursor-default"
                                >
                                    <motion.p
                                        className={`text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r ${promise.gradient} bg-clip-text text-transparent mb-4`}
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        {promise.num}
                                    </motion.p>
                                    <h3 className={`text-lg md:text-xl font-semibold tracking-wide ${isDark ? 'text-white group-hover:text-violet-300' : 'text-gray-800 group-hover:text-indigo-600'
                                        } transition-colors`}>
                                        {promise.label}
                                    </h3>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section - Full Width */}
                <section className={`py-24 md:py-40 relative overflow-hidden transition-colors duration-500 ${isDark
                        ? 'bg-gradient-to-br from-slate-900 via-indigo-900/50 to-slate-900'
                        : 'bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700'
                    }`}>
                    {/* Animated circles */}
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-white/5 rounded-full" />
                    <motion.div animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-white/5 rounded-full" />
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/10 rounded-full" />

                    <div className="relative w-full px-8 md:px-16 lg:px-24 text-center z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, type: "spring" }}
                                className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl text-white mb-10 shadow-2xl ${isDark ? 'bg-gradient-to-br from-violet-500 to-indigo-600' : 'bg-white/20 backdrop-blur-sm'
                                    }`}
                            >
                                <Sparkles className="h-10 w-10" />
                            </motion.div>

                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                                Have an Idea?{' '}
                                <span className={isDark ? 'bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent' : ''}>
                                    Let's Build It Together
                                </span>
                            </h2>
                            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto">
                                We're always working on new products and features. Have a suggestion or want to collaborate?
                            </p>

                            <motion.a
                                href="/#/contact"
                                whileHover={{ scale: 1.05, boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.5)" }}
                                whileTap={{ scale: 0.95 }}
                                className={`relative inline-flex items-center px-12 py-6 font-semibold text-xl rounded-2xl shadow-2xl overflow-hidden ${isDark
                                        ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white'
                                        : 'bg-white text-indigo-600'
                                    }`}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                                    initial={{ x: '-100%' }}
                                    whileHover={{ x: '100%' }}
                                    transition={{ duration: 0.7 }}
                                />
                                <span className="relative z-10 flex items-center">
                                    Get in Touch
                                    <motion.span
                                        animate={{ x: [0, 5, 0], y: [0, -3, 0] }}
                                        transition={{ repeat: Infinity, duration: 1.5 }}
                                        className="ml-3"
                                    >
                                        <ArrowUpRight className="h-6 w-6" />
                                    </motion.span>
                                </span>
                            </motion.a>
                        </motion.div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Products;
