import { motion, AnimatePresence } from 'framer-motion';
import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, Sun, Moon, ChevronRight, ChevronDown, Search, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

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

const faqCategories = [
    {
        name: 'General',
        questions: [
            { q: 'What is UTHAKKAN?', a: 'UTHAKKAN is a modern technology company specializing in AI-powered tools, developer utilities, web applications, and freelance development services. Founded in 2025 by Ajmal U K, we focus on building innovative digital products that solve real-world problems.' },
            { q: 'Where is UTHAKKAN located?', a: 'UTHAKKAN is based in Kannur, Kerala, India. However, we serve clients worldwide and work remotely with teams across different time zones.' },
            { q: 'How can I contact UTHAKKAN?', a: 'You can reach us through our Contact page, email us at contact@uthakkan.com, or connect with us on social media platforms like Twitter/X, LinkedIn, and GitHub.' }
        ]
    },
    {
        name: 'Products',
        questions: [
            { q: 'What products does UTHAKKAN offer?', a: 'We offer a range of digital products including Byte AI (AI-powered assistance platform), ToolPix (digital tools suite), Zymail (email utility), and Zyrace (gaming platform). Check our Products page for the full list.' },
            { q: 'Are your products free to use?', a: 'Many of our tools offer free tiers with basic functionality. Premium features may require a subscription or one-time payment. Each product page has detailed pricing information.' },
            { q: 'How do I get support for a product?', a: 'You can access our Documentation page for guides and tutorials, or contact our support team through the Contact page for personalized assistance.' }
        ]
    },
    {
        name: 'Freelance Services',
        questions: [
            { q: 'What freelance services do you offer?', a: 'We offer web development (React, Next.js, full-stack), video editing (YouTube, Reels, Shorts), AI solutions (chatbots, automation), and digital consulting services.' },
            { q: 'How much do freelance services cost?', a: 'Pricing varies based on project scope and complexity. We offer packages starting from ₹5,000 for basic projects. Contact us for a custom quote tailored to your needs.' },
            { q: 'What is the typical turnaround time?', a: 'Delivery times depend on project complexity. Basic websites take 7-14 days, while complex applications may take 4-8 weeks. We always provide clear timelines before starting work.' },
            { q: 'Do you offer revisions?', a: 'Yes! All our packages include revision rounds. The number of revisions depends on the package chosen. We work closely with clients to ensure satisfaction.' },
            { q: 'How do I start a project?', a: 'Visit our Hire Me page and fill out the quote request form. We\'ll review your requirements and get back to you within 24-48 hours with a proposal.' }
        ]
    },
    {
        name: 'Payments & Billing',
        questions: [
            { q: 'What payment methods do you accept?', a: 'We accept bank transfers (NEFT/IMPS/UPI), PayPal, and major credit/debit cards through secure payment gateways.' },
            { q: 'Do you require upfront payment?', a: 'For larger projects, we typically require a 50% advance before starting work, with the remaining 50% due upon completion. Smaller projects may require full payment upfront.' },
            { q: 'What is your refund policy?', a: 'Refunds are handled on a case-by-case basis. If we\'re unable to deliver what was agreed upon, we offer partial or full refunds depending on the work completed.' }
        ]
    }
];

const FAQ = () => {
    const [isDark, setIsDark] = useState(true);
    const [activeCategory, setActiveCategory] = useState('General');
    const [openQuestions, setOpenQuestions] = useState({});
    const [searchQuery, setSearchQuery] = useState('');
    const toggleTheme = useCallback(() => setIsDark(prev => !prev), []);

    const toggleQuestion = (index) => {
        setOpenQuestions(prev => ({ ...prev, [index]: !prev[index] }));
    };

    const currentCategory = faqCategories.find(cat => cat.name === activeCategory);
    const filteredQuestions = searchQuery
        ? faqCategories.flatMap(cat => cat.questions.filter(q =>
            q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
            q.a.toLowerCase().includes(searchQuery.toLowerCase())
        ))
        : currentCategory?.questions || [];

    // FAQ Schema for SEO
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqCategories.flatMap(cat => cat.questions.map(q => ({
            "@type": "Question",
            "name": q.q,
            "acceptedAnswer": { "@type": "Answer", "text": q.a }
        })))
    };

    return (
        <>
            <SEO
                title="FAQ - Frequently Asked Questions | UTHAKKAN"
                description="Find answers to common questions about UTHAKKAN's products, services, pricing, and more."
                url="https://uthakkan.com/faq"
                schema={faqSchema}
            />
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />

            <div className={`min-h-screen pt-16 overflow-hidden transition-colors duration-500 ${isDark ? 'bg-slate-900' : 'bg-gray-50'}`}>
                {/* Hero */}
                <section className="relative py-20 overflow-hidden">
                    <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' : 'bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50'}`} />

                    <div className="relative w-full px-4 sm:px-8 md:px-16 lg:px-24 text-center z-10">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                            className={`inline-flex items-center px-4 py-2 backdrop-blur-md rounded-full text-sm font-medium mb-6 border ${isDark ? 'bg-orange-500/20 text-orange-300 border-orange-500/30' : 'bg-orange-100 text-orange-700 border-orange-200'}`}>
                            <HelpCircle className="h-4 w-4 mr-2" />
                            FAQ
                            <ChevronRight className="h-4 w-4 ml-1 opacity-60" />
                        </motion.div>

                        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                            className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Frequently Asked <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Questions</span>
                        </motion.h1>

                        {/* Search */}
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                            className="max-w-xl mx-auto mt-8">
                            <div className={`relative ${isDark ? 'bg-slate-800' : 'bg-white'} rounded-2xl shadow-lg`}>
                                <Search className={`absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 ${isDark ? 'text-slate-400' : 'text-gray-400'}`} />
                                <input type="text" placeholder="Search questions..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                                    className={`w-full pl-12 pr-4 py-4 rounded-2xl outline-none ${isDark ? 'bg-slate-800 text-white placeholder-slate-400' : 'bg-white text-gray-900 placeholder-gray-400'}`} />
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Categories */}
                {!searchQuery && (
                    <section className={`py-4 sticky top-16 z-30 backdrop-blur-lg ${isDark ? 'bg-slate-900/90' : 'bg-white/90'}`}>
                        <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
                            <div className="flex gap-3 overflow-x-auto pb-2">
                                {faqCategories.map(cat => (
                                    <button key={cat.name} onClick={() => setActiveCategory(cat.name)}
                                        className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all ${activeCategory === cat.name
                                            ? 'bg-orange-500 text-white'
                                            : isDark ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                            }`}>
                                        {cat.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Questions */}
                <section className={`py-12 ${isDark ? 'bg-slate-800' : 'bg-white'}`}>
                    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
                        <div className="max-w-3xl mx-auto space-y-4">
                            {filteredQuestions.map((item, i) => (
                                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                                    className={`rounded-2xl border overflow-hidden ${isDark ? 'bg-slate-700/50 border-slate-600' : 'bg-gray-50 border-gray-200'}`}>
                                    <button onClick={() => toggleQuestion(i)}
                                        className={`w-full p-5 flex items-center justify-between text-left ${isDark ? 'hover:bg-slate-700' : 'hover:bg-gray-100'}`}>
                                        <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.q}</span>
                                        <ChevronDown className={`h-5 w-5 transition-transform ${openQuestions[i] ? 'rotate-180' : ''} ${isDark ? 'text-slate-400' : 'text-gray-500'}`} />
                                    </button>
                                    <AnimatePresence>
                                        {openQuestions[i] && (
                                            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}>
                                                <div className={`px-5 pb-5 ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
                                                    {item.a}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Still have questions */}
                <section className={`py-16 ${isDark ? 'bg-slate-900' : 'bg-gray-50'}`}>
                    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 text-center">
                        <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Still have questions?</h2>
                        <p className={`mb-6 ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>Can't find what you're looking for? Get in touch with us.</p>
                        <Link to="/contact">
                            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium rounded-xl flex items-center mx-auto">
                                Contact Us <ArrowRight className="h-4 w-4 ml-2" />
                            </motion.button>
                        </Link>
                    </div>
                </section>
            </div>
        </>
    );
};

export default FAQ;
