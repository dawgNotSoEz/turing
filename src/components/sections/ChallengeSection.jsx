import React from 'react'
import { FaTrophy, FaFire, FaClock } from 'react-icons/fa'
import { useScrollAnimation } from '../../hooks/useAnimations';
import { RANK_SYSTEM, POINT_SYSTEM } from '../../data/constants';
import '../../styles/index.css'

const ChallengeSection = () => {
    const [challengeRef, isChallengeVisible] = useScrollAnimation(0.1);

    return (
        <section id="challenges" className="section bg-gradient-to-b from-gray-900 to-gray-800">
            <div className="section-container">
                <div 
                    ref={challengeRef}
                    className={`section-header transition-all duration-1000 ${
                        isChallengeVisible 
                            ? 'opacity-100 transform translate-y-0' 
                            : 'opacity-0 transform translate-y-10'
                    }`}
                >
                    <h2 className="section-title">
                        <span className="text-gradient">Weekly Challenges</span> & Rankings
                    </h2>
                    <p className="section-subtitle">
                        Compete in weekly coding challenges, earn points, climb the leaderboard, 
                        and unlock exclusive ranks as you progress in your coding journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    {/* Rank System */}
                    <div className={`transition-all duration-1000 delay-200 ${
                        isChallengeVisible 
                            ? 'opacity-100 transform translate-x-0' 
                            : 'opacity-0 transform -translate-x-10'
                    }`}>
                        <div className="card card-enhanced p-8">
                            <div className="flex items-center mb-6">
                                <FaTrophy className="w-8 h-8 text-yellow-400 mr-4" />
                                <h3 className="text-2xl font-bold text-white">Rank System</h3>
                            </div>
                            <div className="space-y-4">
                                {RANK_SYSTEM.map((rank, index) => (
                                    <div key={index} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300">
                                        <div className="flex items-center">
                                            <div className={`w-4 h-4 rounded-full ${rank.color} mr-4`}></div>
                                            <div>
                                                <div className="text-white font-semibold">{rank.name}</div>
                                                <div className="text-gray-400 text-sm">{rank.points}</div>
                                            </div>
                                        </div>
                                        <div className="text-gray-300 text-sm">{rank.members}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Point System */}
                    <div className={`transition-all duration-1000 delay-400 ${
                        isChallengeVisible 
                            ? 'opacity-100 transform translate-x-0' 
                            : 'opacity-0 transform translate-x-10'
                    }`}>
                        <div className="card card-enhanced p-8">
                            <div className="flex items-center mb-6">
                                <FaFire className="w-8 h-8 text-orange-400 mr-4" />
                                <h3 className="text-2xl font-bold text-white">Point System</h3>
                            </div>
                            <div className="space-y-3">
                                {POINT_SYSTEM.map((item, index) => (
                                    <div key={index} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300">
                                        <span className="text-gray-300">{item.activity}</span>
                                        <span className="text-green-400 font-semibold">{item.points}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Current Challenge Highlight */}
                <div className={`bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/30 transition-all duration-1000 delay-600 ${
                    isChallengeVisible 
                        ? 'opacity-100 transform translate-y-0' 
                        : 'opacity-0 transform translate-y-10'
                }`}>
                    <div className="text-center">
                        <div className="flex items-center justify-center mb-6">
                            <FaClock className="w-8 h-8 text-blue-400 mr-4" />
                            <h3 className="text-2xl font-bold text-white">This Week's Challenge</h3>
                        </div>
                        <h4 className="text-xl font-semibold text-blue-400 mb-4">Binary Tree Maximum Path Sum</h4>
                        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                            Given a binary tree, find the maximum path sum. The path may start and end at any node in the tree 
                            and must contain at least one node.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <div className="flex items-center text-gray-400">
                                <span className="text-yellow-400 font-semibold mr-2">Difficulty:</span>
                                Hard
                            </div>
                            <div className="flex items-center text-gray-400">
                                <span className="text-green-400 font-semibold mr-2">Points:</span>
                                100
                            </div>
                            <div className="flex items-center text-gray-400">
                                <span className="text-red-400 font-semibold mr-2">Deadline:</span>
                                3 days left
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChallengeSection;
