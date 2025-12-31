import { motion, AnimatePresence } from 'framer-motion';
import { useState, useCallback } from 'react';
import { Shield, Sun, Moon, ChevronRight, Mail, Calendar } from 'lucide-react';
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

const PrivacyPolicy = () => {
    const [isDark, setIsDark] = useState(true);
    const toggleTheme = useCallback(() => setIsDark(prev => !prev), []);

    const sections = [
        {
            title: "Information We Collect",
            content: `We collect information you provide directly to us, such as when you create an account, make a purchase, subscribe to our newsletter, or contact us for support. This may include:
            
• Name and email address
• Payment information (processed securely through third-party providers)
• Communication preferences
• Any other information you choose to provide`
        },
        {
            title: "How We Use Your Information",
            content: `We use the information we collect to:

• Provide, maintain, and improve our services
• Process transactions and send related information
• Send technical notices, updates, and security alerts
• Respond to your comments, questions, and customer service requests
• Communicate about products, services, offers, and events
• Monitor and analyze trends, usage, and activities`
        },
        {
            title: "Information Sharing",
            content: `We do not sell, trade, or otherwise transfer your personal information to outside parties except:

• With your consent
• To trusted third-party service providers who assist us in operating our website and services
• When required by law or to protect our rights
• In connection with a merger, acquisition, or sale of assets`
        },
        {
            title: "Data Security",
            content: `We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.`
        },
        {
            title: "Your Rights (GDPR)",
            content: `If you are a resident of the European Economic Area (EEA), you have certain rights including:

• The right to access your personal data
• The right to rectification of inaccurate data
• The right to erasure ("right to be forgotten")
• The right to restrict processing
• The right to data portability
• The right to object to processing
• Rights related to automated decision-making

To exercise these rights, please contact us at contact@uthakkan.com`
        },
        {
            title: "Cookies",
            content: `We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. For more details, see our Cookie Policy.`
        },
        {
            title: "Third-Party Links",
            content: `Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read the privacy policies of any third-party sites you visit.`
        },
        {
            title: "Children's Privacy",
            content: `Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.`
        },
        {
            title: "Changes to This Policy",
            content: `We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.`
        },
        {
            title: "Contact Us",
            content: `If you have questions about this Privacy Policy, please contact us at:

Email: contact@uthakkan.com
Location: Kannur, Kerala, India`
        }
    ];

    return (
        <>
            <SEO
                title="Privacy Policy - UTHAKKAN | GDPR Compliant"
                description="Learn how UTHAKKAN collects, uses, and protects your personal information. GDPR compliant privacy policy."
                url="https://uthakkan.com/privacy"
            />
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />

            <div className={`min-h-screen pt-16 overflow-hidden transition-colors duration-500 ${isDark ? 'bg-slate-900' : 'bg-gray-50'}`}>
                {/* Hero */}
                <section className="relative py-20 overflow-hidden">
                    <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'}`} />

                    <div className="relative w-full px-4 sm:px-8 md:px-16 lg:px-24 text-center z-10">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                            className={`inline-flex items-center px-4 py-2 backdrop-blur-md rounded-full text-sm font-medium mb-6 border ${isDark ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' : 'bg-blue-100 text-blue-700 border-blue-200'}`}>
                            <Shield className="h-4 w-4 mr-2" />
                            Legal
                            <ChevronRight className="h-4 w-4 ml-1 opacity-60" />
                        </motion.div>

                        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                            className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Privacy Policy
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

export default PrivacyPolicy;
