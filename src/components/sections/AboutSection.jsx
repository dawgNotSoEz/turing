import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { useScrollAnimation } from '../../hooks/useAnimations'
import { ABOUT_FEATURES } from '../../data/constants'
import '../../styles/index.css'

const AboutSection = () => {
    const [aboutRef, isAboutVisible] = useScrollAnimation(0.1);

    return (
        <section id="about" className="section bg-gray-900">
            <div className="section-container">
                <div 
                    ref={aboutRef}
                    className={`section-header transition-all duration-1000 ${
                        isAboutVisible 
                            ? 'opacity-100 transform translate-y-0' 
                            : 'opacity-0 transform translate-y-10'
                    }`}
                >
                    <h2 className="section-title">
                        Why Choose <span className="text-gradient">Turing Community?</span>
                    </h2>
                    <p className="section-subtitle">
                        We're more than just a Discord server - we're a supportive ecosystem designed to accelerate 
                        your coding journey through collaboration, challenges, and continuous learning.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ABOUT_FEATURES.map((feature, index) => (
                        <div 
                            key={index}
                            className={`card card-hover card-enhanced p-6 text-center ${
                                isAboutVisible 
                                    ? 'pop-in' 
                                    : 'opacity-0'
                            }`}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="flex items-center mb-4 justify-center">
                                <div className="icon-wrapper icon-primary mr-4 hover-scale">
                                    <FaCheck className="w-5 h-5 text-white" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-4 hover:text-blue-400 transition-colors duration-300">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed hover:text-gray-300 transition-colors duration-300">
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