import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { useScrollAnimation } from '../../hooks/useAnimations'

const AboutSection = () => {
    const [aboutRef, isAboutVisible] = useScrollAnimation(0.1);

    return (
        <section id="about" className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div 
                    ref={aboutRef}
                    className={`text-center mb-16 transition-all duration-1000 ${
                        isAboutVisible 
                            ? 'opacity-100 transform translate-y-0' 
                            : 'opacity-0 transform translate-y-10'
                    }`}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Why Choose <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Turing Community?</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        We're more than just a Discord server - we're a supportive ecosystem designed to accelerate 
                        your coding journey through collaboration, challenges, and continuous learning.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ABOUT_FEATURES.map((feature, index) => (
                        <div 
                            key={index}
                            className={`group bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 ${
                                isAboutVisible 
                                    ? 'opacity-100 transform translate-y-0' 
                                    : 'opacity-0 transform translate-y-10'
                            }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                                    <FaCheck className="w-5 h-5 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                                    {feature.title}
                                </h3>
                            </div>
                            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
