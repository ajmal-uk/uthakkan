import { Github, Linkedin, Twitter, Coffee, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-slate-900 text-white">
            <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-6xl mx-auto">
                    {/* Main Footer Content */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        {/* Brand */}
                        <div className="sm:col-span-2 lg:col-span-1">
                            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                                UTHAKKAN
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                Merging creativity with technology to build smart, scalable solutions for the modern web.
                            </p>
                            <div className="flex items-center text-slate-400 text-sm">
                                <MapPin className="h-4 w-4 mr-2" />
                                <span>Kannur, Kerala, India</span>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="font-semibold text-lg mb-4 text-slate-200">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><Link to="/" className="text-slate-400 hover:text-white text-sm transition-colors">Home</Link></li>
                                <li><Link to="/about" className="text-slate-400 hover:text-white text-sm transition-colors">About Us</Link></li>
                                <li><Link to="/services" className="text-slate-400 hover:text-white text-sm transition-colors">Services</Link></li>
                                <li><Link to="/developer" className="text-slate-400 hover:text-white text-sm transition-colors">Developer</Link></li>
                                <li><Link to="/contact" className="text-slate-400 hover:text-white text-sm transition-colors">Contact</Link></li>
                            </ul>
                        </div>

                        {/* Connect */}
                        <div>
                            <h4 className="font-semibold text-lg mb-4 text-slate-200">Connect</h4>
                            <div className="flex space-x-3 mb-4">
                                <a href="https://github.com/ajmal-uk" target="_blank" rel="noopener noreferrer"
                                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all">
                                    <Github size={18} />
                                </a>
                                <a href="https://www.linkedin.com/company/uthakkan/" target="_blank" rel="noopener noreferrer"
                                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all">
                                    <Linkedin size={18} />
                                </a>
                                <a href="https://x.com/ajmal_uk_" target="_blank" rel="noopener noreferrer"
                                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all">
                                    <Twitter size={18} />
                                </a>
                            </div>
                            <a href="mailto:contact@uthakkan.com" className="flex items-center text-slate-400 hover:text-white text-sm transition-colors">
                                <Mail className="h-4 w-4 mr-2" />
                                contact@uthakkan.com
                            </a>
                        </div>

                        {/* Support */}
                        <div>
                            <h4 className="font-semibold text-lg mb-4 text-slate-200">Support</h4>
                            <a
                                href="https://buymeacoffee.com/ajmal.uk"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-2 bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-4 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105"
                            >
                                <Coffee size={16} />
                                <span>Buy me a coffee</span>
                            </a>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-slate-800 pt-6">
                        <div className="flex flex-col sm:flex-row justify-between items-center text-slate-500 text-sm gap-4">
                            <p>© {currentYear} UTHAKKAN. All rights reserved.</p>
                            <div className="flex space-x-6">
                                <span className="hover:text-slate-300 transition-colors cursor-pointer">Privacy Policy</span>
                                <span className="hover:text-slate-300 transition-colors cursor-pointer">Terms of Service</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
