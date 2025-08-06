import { useState, useEffect } from 'react';
import { DiscordIcon } from '../../assets/icons';
import { NAVIGATION_LINKS, DISCORD_INVITE_LINK } from '../../data/constants';

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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">TC</span>
                        </div>
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
                            href={DISCORD_INVITE_LINK}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2"
                        >
                            <DiscordIcon className="w-5 h-5" />
                            <span>Join Server</span>
                        </a>
                    </nav>
                    
                    <div className="md:hidden">
                        <button className="text-gray-300 hover:text-white">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
