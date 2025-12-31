import { motion, AnimatePresence } from 'framer-motion';
import { useState, useCallback } from 'react';
import { FileText, Sun, Moon, ChevronRight, Calendar } from 'lucide-react';
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

const Terms = () => {
    const [isDark, setIsDark] = useState(true);
    const toggleTheme = useCallback(() => setIsDark(prev => !prev), []);

    const sections = [
        {
            title: "Acceptance of Terms",
            content: `By accessing or using UTHAKKAN's website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.`
        },
        {
            title: "Description of Services",
            content: `UTHAKKAN provides digital products, software tools, web applications, and freelance development services. These include but are not limited to AI-powered tools, developer utilities, and custom software solutions.`
        },
        {
            title: "User Accounts",
            content: `Some services may require you to create an account. You are responsible for:

• Maintaining the confidentiality of your account credentials
• All activities that occur under your account
• Notifying us immediately of any unauthorized use
• Providing accurate and complete information`
        },
        {
            title: "Intellectual Property",
            content: `All content, features, and functionality on UTHAKKAN websites and products are owned by UTHAKKAN and are protected by international copyright, trademark, and other intellectual property laws.

You may not:
• Copy, modify, or distribute our content without permission
• Use our trademarks without written consent
• Reverse engineer our software products
• Create derivative works without authorization`
        },
        {
            title: "User Conduct",
            content: `You agree not to:

• Violate any applicable laws or regulations
• Infringe on the rights of others
• Transmit harmful code or malware
• Attempt to gain unauthorized access to our systems
• Use our services for illegal or unauthorized purposes
• Harass, abuse, or harm another person`
        },
        {
            title: "Payment Terms",
            content: `For paid services:

• Prices are as stated at the time of purchase
• Payments are processed through secure third-party providers
• Refunds are handled on a case-by-case basis
• We reserve the right to change pricing with notice`
        },
        {
            title: "Freelance Services",
            content: `For freelance and custom development services:

• Project scope, timeline, and pricing are agreed upon before work begins
• Payment milestones may be required for larger projects
• All work remains property of UTHAKKAN until full payment is received
• Upon full payment, ownership transfers to the client as agreed`
        },
        {
            title: "Limitation of Liability",
            content: `UTHAKKAN and its affiliates shall not be liable for:

• Any indirect, incidental, special, or consequential damages
• Loss of profits, data, or business opportunities
• Damages arising from use or inability to use our services
• Any third-party actions or content

Our total liability shall not exceed the amount paid by you for the service in question.`
        },
        {
            title: "Disclaimer of Warranties",
            content: `Our services are provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to:

• Implied warranties of merchantability
• Fitness for a particular purpose
• Non-infringement
• That services will be uninterrupted or error-free`
        },
        {
            title: "Termination",
            content: `We may terminate or suspend your access to our services immediately, without prior notice, for any reason, including breach of these Terms. Upon termination, your right to use the services will immediately cease.`
        },
        {
            title: "Governing Law",
            content: `These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of Kerala, India.`
        },
        {
            title: "Changes to Terms",
            content: `We reserve the right to modify these Terms at any time. We will notify users of significant changes by posting a notice on our website. Continued use of services after changes constitutes acceptance of new terms.`
        },
        {
            title: "Contact Information",
            content: `For questions about these Terms of Service, please contact us at:

Email: contact@uthakkan.com
Location: Kannur, Kerala, India`
        }
    ];

    return (
        <>
            <SEO
                title="Terms of Service - UTHAKKAN"
                description="Read UTHAKKAN's Terms of Service. Understand the rules and regulations for using our website and services."
                url="https://uthakkan.com/terms"
            />
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />

            <div className={`min-h-screen pt-16 overflow-hidden transition-colors duration-500 ${isDark ? 'bg-slate-900' : 'bg-gray-50'}`}>
                {/* Hero */}
                <section className="relative py-20 overflow-hidden">
                    <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' : 'bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50'}`} />

                    <div className="relative w-full px-4 sm:px-8 md:px-16 lg:px-24 text-center z-10">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                            className={`inline-flex items-center px-4 py-2 backdrop-blur-md rounded-full text-sm font-medium mb-6 border ${isDark ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' : 'bg-emerald-100 text-emerald-700 border-emerald-200'}`}>
                            <FileText className="h-4 w-4 mr-2" />
                            Legal
                            <ChevronRight className="h-4 w-4 ml-1 opacity-60" />
                        </motion.div>

                        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                            className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Terms of Service
                        </motion.h1>

                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                            className={`flex items-center justify-center gap-4 text-sm ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>
                            <span className="flex items-center"><Calendar className="h-4 w-4 mr-1" /> Last Updated: January 2025</span>
                        </motion.div>
                    </div>
                </section>

                {/* Content */}
                <section className={`py-16 ${isDark ? 'bg-slate-800' : 'bg-white'}`}>
                    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
                        <div className="max-w-4xl mx-auto space-y-10">
                            {sections.map((section, i) => (
                                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                                    <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{section.title}</h2>
                                    <div className={`whitespace-pre-line leading-relaxed ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
                                        {section.content}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Terms;
