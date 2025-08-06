import { DiscordIcon, CodeIcon } from '../../assets/icons';
import { DISCORD_INVITE_LINK } from '../../data/constants';

const Footer = () => {
    return (
        <footer className="bg-gray-900 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-2">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">TC</span>
                            </div>
                            <span className="text-2xl font-bold text-white">Turing Community</span>
                        </div>
                        <p className="text-gray-400 mb-6 max-w-md">
                            Join our thriving Discord community where coding enthusiasts collaborate, 
                            learn, and grow together through challenges and peer support.
                        </p>
                        <div className="flex space-x-4">
                            <a 
                                href={DISCORD_INVITE_LINK}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 flex items-center space-x-2"
                            >
                                <DiscordIcon className="w-5 h-5" />
                                <span>Join Our Discord</span>
                            </a>
                        </div>
                    </div>
                    
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                            <li><a href="#challenges" className="text-gray-400 hover:text-white transition-colors">Challenges</a></li>
                            <li><a href="#domains" className="text-gray-400 hover:text-white transition-colors">Domains</a></li>
                            <li><a href="#community" className="text-gray-400 hover:text-white transition-colors">Community</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="text-white font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2">
                            <li><a href="#team" className="text-gray-400 hover:text-white transition-colors">Team</a></li>
                            <li><a href="/bot" className="text-gray-400 hover:text-white transition-colors">Discord Bot</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Guidelines</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help</a></li>
                        </ul>
                    </div>
                </div>
                
                <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        © 2024 Turing Community. Built with ❤️ for the coding community.
                    </p>
                    <div className="flex items-center space-x-2 mt-4 md:mt-0">
                        <CodeIcon className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-400 text-sm">Made by students, for students</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
