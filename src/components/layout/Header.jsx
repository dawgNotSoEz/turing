import React, { useState, useEffect } from 'react';
import { FaDiscord, FaBars } from 'react-icons/fa';
import { NAVIGATION_LINKS, LINKS } from '../../config/links.js';
import '../../styles/index.css'
import TuringLogo from '../../assets/TuringLogo.svg';

const Header = ({ onDiscordBotClick }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${
            isScrolled 
                ? 'bg-gray-900/80 backdrop-blur-md border-b border-gray-700/50' 
                : 'bg-transparent'
        }`}>
            <div className="section-container">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center space-x-3">
                        <img src={TuringLogo} alt="Turing Community Logo" className="w-10 h-10" />
                        <span className="text-2xl font-bold text-white">Turing Community</span>
                    </div>
                    
                    <nav className="hidden md:flex items-center space-x-8">
                        {NAVIGATION_LINKS.map((link) => {
                            if (link.text === "Discord Bot") {
                                return (
                                    <button
                                        key={link.text}
                                        onClick={onDiscordBotClick}
                                        className="text-gray-300 hover:text-blue-400 transition-colors duration-200 cursor-pointer"
                                    >
                                        {link.text}
                                    </button>
                                );
                            }
                            return (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                                >
                                    {link.text}
                                </a>
                            );
                        })}
                        <a
                            href={LINKS.discord.invite}
                            className="btn btn-primary"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaDiscord className="w-5 h-5" />
                            <span>Join Server</span>
                        </a>
                    </nav>
                    
                    <div className="md:hidden">
                        <button className="text-gray-300 hover:text-white">
                            <FaBars className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
