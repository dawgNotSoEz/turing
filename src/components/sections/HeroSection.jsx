import React from 'react'
import { FaArrowRight, FaStar, FaDiscord } from 'react-icons/fa'
import { useScrollAnimation } from '../../hooks/useAnimations';
import { LINKS, CTA_BUTTONS } from '../../config/links.js';
import { COMMUNITY_STATS } from '../../data/constants';
import '../../styles/index.css'

const HeroSection = () => {
    const [heroRef, isHeroVisible] = useScrollAnimation(0.1);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>
            </div>

            {/* Floating Code Snippets */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 text-green-400 text-sm opacity-30 animate-float">
                    {'{ "language": "javascript" }'}
                </div>
                <div className="absolute top-32 right-20 text-blue-400 text-sm opacity-30 animate-float-delayed">
                    {'function solve() {'}
                </div>
                <div className="absolute bottom-40 left-20 text-purple-400 text-sm opacity-30 animate-float">
                    {'return "Hello, World!";'}
                </div>
                <div className="absolute bottom-20 right-10 text-yellow-400 text-sm opacity-30 animate-float-delayed">
                    {'console.log("Join us!");'}
                </div>
            </div>

            <div className="relative z-10 section-container text-center">
                <div 
                    ref={heroRef}
                    className={`transition-all duration-1000 ${
                        isHeroVisible 
                            ? 'opacity-100 transform translate-y-0' 
                            : 'opacity-0 transform translate-y-10'
                    }`}
                >
                    <div className="mb-6">
                        <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium">
                            <FaStar className="w-4 h-4 mr-2" />
                            Discord Community for Coders
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        <span className="text-gradient">
                            Turing Community
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Join a thriving Discord community where <span className="text-blue-400 font-semibold">passionate coders</span> collaborate, 
                        tackle <span className="text-purple-400 font-semibold">weekly challenges</span>, and grow together through 
                        <span className="text-cyan-400 font-semibold"> peer learning</span>.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                        <a
                            href={CTA_BUTTONS.primary.discord.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-lg group transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            <FaDiscord className="w-6 h-6" />
                            <span>{CTA_BUTTONS.primary.discord.text}</span>
                            <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href={CTA_BUTTONS.secondary.learnMore.href}
                            className="btn btn-secondary btn-lg group"
                        >
                            <span>{CTA_BUTTONS.secondary.learnMore.text}</span>
                            <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {COMMUNITY_STATS.map((stat, index) => (
                            <div 
                                key={index}
                                className={`text-center transition-all duration-1000 delay-${index * 100} ${
                                    isHeroVisible 
                                        ? 'opacity-100 transform translate-y-0' 
                                        : 'opacity-0 transform translate-y-10'
                                }`}
                            >
                                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-gray-400 text-sm font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
