import React from 'react'
import { FaDiscord, FaCode } from 'react-icons/fa';
import { LINKS, FOOTER_LINKS } from '../../config/links.js';
import '../../styles/index.css'
import TuringLogo from '../../assets/TuringLogo.svg';

const Footer = () => {
    return (
        <footer className="bg-gray-900 border-t border-gray-800">
            <div className="section-container py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-2">
                        <div className="flex items-center space-x-3 mb-4">
                            <img src={TuringLogo} alt="Turing Community Logo" className="w-10 h-10" />
                            <span className="text-2xl font-bold text-white">Turing Community</span>
                        </div>
                        <p className="text-gray-400 mb-6 max-w-md">
                            Join our thriving Discord community where coding enthusiasts collaborate, 
                            learn, and grow together through challenges and peer support.
                        </p>
                        <div className="flex space-x-4">
                            <a 
                                href={LINKS.discord.invite}
                                className="btn btn-primary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaDiscord className="w-5 h-5" />
                                <span>Join Our Discord</span>
                            </a>
                        </div>
                    </div>
                    
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {FOOTER_LINKS.quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a 
                                        href={link.href} 
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        {link.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="text-white font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2">
                            {FOOTER_LINKS.resources.map((link, index) => (
                                <li key={index}>
                                    <a 
                                        href={link.href} 
                                        className="text-gray-400 hover:text-white transition-colors"
                                        target={link.href.startsWith('http') ? "_blank" : undefined}
                                        rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                                    >
                                        {link.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                
                <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        © 2024 Turing Community. Built with ❤️ for the coding community.
                    </p>
                    <div className="flex items-center space-x-2 mt-4 md:mt-0">
                        <FaCode className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-400 text-sm">Made by students, for students</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
