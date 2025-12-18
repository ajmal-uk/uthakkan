import { Github, Linkedin, Twitter, Coffee, Mail, MapPin, Heart, ArrowUpRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const products = [
        { name: 'Byte AI', url: 'https://byteai.pythonanywhere.com' },
        { name: 'ToolPix', url: 'https://toolpix.pythonanywhere.com' },
        { name: 'Zymail', url: 'https://zymail.pythonanywhere.com' },
        { name: 'Zyrace', url: 'https://zyrace.pythonanywhere.com' }
    ];

    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Products', path: '/products' },
        { name: 'Developer', path: '/developer' },
        { name: 'Contact', path: '/contact' }
    ];

    const socials = [
        { icon: Github, url: 'https://github.com/ajmal-uk', label: 'GitHub' },
        { icon: Linkedin, url: 'https://www.linkedin.com/company/uthakkan/', label: 'LinkedIn' },
        { icon: Twitter, url: 'https://x.com/ajmal_uk_', label: 'Twitter' }
    ];

    return (
        <footer className="w-full bg-slate-900 text-white border-t border-slate-800">
            <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24 pt-16 pb-8">
                <div className="max-w-7xl mx-auto">
                    {/* Main Footer Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
                        {/* Brand Section */}
                        <div className="lg:col-span-4 space-y-5">
                            <Link to="/" className="inline-block">
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                                    UTHAKKAN
                                </h3>
                            </Link>
                            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                                Building smart, scalable digital solutions with creativity and cutting-edge technology.
                            </p>
                            <div className="flex items-center text-slate-500 text-sm">
                                <MapPin className="h-4 w-4 mr-2 text-slate-600" />
                                <span>Kannur, Kerala, India</span>
                            </div>

                            {/* Social Links */}
                            <div className="flex gap-2.5 pt-2">
                                {socials.map((social, i) => (
                                    <a
                                        key={i}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-colors duration-200 border border-slate-700/50"
                                        aria-label={social.label}
                                    >
                                        <social.icon size={17} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="lg:col-span-2">
                            <h4 className="font-semibold text-sm text-slate-200 mb-4">Navigation</h4>
                            <ul className="space-y-2.5">
                                {quickLinks.map((link, i) => (
                                    <li key={i}>
                                        <Link
                                            to={link.path}
                                            className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Products */}
                        <div className="lg:col-span-3">
                            <h4 className="font-semibold text-sm text-slate-200 mb-4">Products</h4>
                            <ul className="space-y-2.5">
                                {products.map((product, i) => (
                                    <li key={i}>
                                        <a
                                            href={product.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center text-slate-400 hover:text-white text-sm transition-colors duration-200"
                                        >
                                            {product.name}
                                            <ExternalLink className="w-3 h-3 ml-1.5 opacity-0 group-hover:opacity-50 transition-opacity" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact & Support */}
                        <div className="lg:col-span-3 space-y-5">
                            <div>
                                <h4 className="font-semibold text-sm text-slate-200 mb-4">Get in Touch</h4>
                                <a
                                    href="mailto:contact@uthakkan.com"
                                    className="flex items-center text-slate-400 hover:text-white text-sm transition-colors duration-200"
                                >
                                    <Mail className="h-4 w-4 mr-2 text-slate-500" />
                                    contact@uthakkan.com
                                </a>
                            </div>

                            {/* Support Button */}
                            <a
                                href="https://buymeacoffee.com/ajmal.uk"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-200"
                            >
                                <Coffee size={16} />
                                <span>Buy me a coffee</span>
                                <ArrowUpRight size={14} className="opacity-70" />
                            </a>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="pt-8 border-t border-slate-800">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
                            <div className="flex items-center gap-1.5">
                                <span>© {currentYear} UTHAKKAN. Made with</span>
                                <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500" />
                                <span>in India</span>
                            </div>

                            <div className="flex items-center gap-6">
                                <Link to="/privacy" className="hover:text-slate-300 transition-colors duration-200">Privacy Policy</Link>
                                <Link to="/terms" className="hover:text-slate-300 transition-colors duration-200">Terms of Service</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
