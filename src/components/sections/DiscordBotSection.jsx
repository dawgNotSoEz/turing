import { useState } from 'react';
import { ArrowLeftIcon, BotIcon, CommandLineIcon, TrophyIcon, BookOpenIcon } from '../../assets/icons';
import { BOT_FEATURES, BOT_COMMANDS } from '../../data/constants';

const DiscordBotSection = ({ onBackClick }) => {
    const [selectedTab, setSelectedTab] = useState('features');

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header with Back Button */}
                <div className="flex items-center mb-8">
                    <button
                        onClick={onBackClick}
                        className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 mb-4"
                    >
                        <ArrowLeftIcon className="w-5 h-5" />
                        <span>Back to Main Site</span>
                    </button>
                </div>

                {/* Hero Section */}
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                            <BotIcon className="w-12 h-12 text-white" />
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Turing Bot
                        </span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                        Your intelligent Discord companion that automates challenge management, 
                        tracks rankings, and enhances community engagement with powerful moderation tools.
                    </p>
                    <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg px-6 py-3 inline-block">
                        <span className="text-blue-300 font-semibold">🤖 Status: Online & Ready</span>
                    </div>
                </div>

                {/* Tab Navigation */}
                <div className="flex justify-center mb-12">
                    <div className="bg-gray-800 rounded-lg p-1 flex space-x-1">
                        <button
                            onClick={() => setSelectedTab('features')}
                            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                                selectedTab === 'features'
                                    ? 'bg-blue-600 text-white'
                                    : 'text-gray-400 hover:text-white'
                            }`}
                        >
                            Features
                        </button>
                        <button
                            onClick={() => setSelectedTab('commands')}
                            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                                selectedTab === 'commands'
                                    ? 'bg-blue-600 text-white'
                                    : 'text-gray-400 hover:text-white'
                            }`}
                        >
                            Commands
                        </button>
                        <button
                            onClick={() => setSelectedTab('setup')}
                            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                                selectedTab === 'setup'
                                    ? 'bg-blue-600 text-white'
                                    : 'text-gray-400 hover:text-white'
                            }`}
                        >
                            Setup
                        </button>
                    </div>
                </div>

                {/* Tab Content */}
                {selectedTab === 'features' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {BOT_FEATURES.map((feature, index) => (
                            <div 
                                key={index}
                                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
                            >
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                                        {index === 0 && <TrophyIcon className="w-6 h-6 text-white" />}
                                        {index === 1 && <CommandLineIcon className="w-6 h-6 text-white" />}
                                        {index === 2 && <BotIcon className="w-6 h-6 text-white" />}
                                        {index === 3 && <BookOpenIcon className="w-6 h-6 text-white" />}
                                    </div>
                                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                                </div>
                                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                )}

                {selectedTab === 'commands' && (
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                            <h3 className="text-2xl font-bold text-white mb-6 text-center">Bot Commands</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {BOT_COMMANDS.map((cmd, index) => (
                                    <div key={index} className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors duration-300">
                                        <div className="flex items-center justify-between">
                                            <code className="text-blue-400 font-mono text-lg">{cmd.command}</code>
                                        </div>
                                        <p className="text-gray-300 mt-2">{cmd.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {selectedTab === 'setup' && (
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                            <h3 className="text-2xl font-bold text-white mb-6 text-center">Setup Instructions</h3>
                            <div className="space-y-6">
                                <div className="bg-gray-700 rounded-lg p-6">
                                    <h4 className="text-lg font-semibold text-white mb-3">1. Invite the Bot</h4>
                                    <p className="text-gray-300 mb-4">Add Turing Bot to your Discord server with the required permissions.</p>
                                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-200">
                                        Invite Bot
                                    </button>
                                </div>
                                <div className="bg-gray-700 rounded-lg p-6">
                                    <h4 className="text-lg font-semibold text-white mb-3">2. Configure Channels</h4>
                                    <p className="text-gray-300">Set up dedicated channels for challenges, leaderboards, and announcements.</p>
                                </div>
                                <div className="bg-gray-700 rounded-lg p-6">
                                    <h4 className="text-lg font-semibold text-white mb-3">3. Start Using</h4>
                                    <p className="text-gray-300">Use <code className="bg-gray-600 px-2 py-1 rounded text-blue-400">/help</code> to get started with available commands.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Stats Section */}
                <div className="mt-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/30">
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">Bot Statistics</h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                            <div className="text-gray-300">Servers</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-blue-400 mb-2">1000+</div>
                            <div className="text-gray-300">Users</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-blue-400 mb-2">5000+</div>
                            <div className="text-gray-300">Commands Used</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
                            <div className="text-gray-300">Uptime</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscordBotSection;
