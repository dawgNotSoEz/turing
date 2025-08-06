import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { useScrollAnimation } from '../../hooks/useAnimations';
import { DOMAINS } from '../../data/constants';
import '../../styles/index.css'

const DomainsSection = () => {
    const [domainsRef, isDomainsVisible] = useScrollAnimation(0.1);

    return (
        <section id="domains" className="section bg-gray-800">
            <div className="section-container">
                <div 
                    ref={domainsRef}
                    className={`section-header transition-all duration-1000 ${
                        isDomainsVisible 
                            ? 'opacity-100 transform translate-y-0' 
                            : 'opacity-0 transform translate-y-10'
                    }`}
                >
                    <h2 className="section-title">
                        Explore <span className="text-gradient">Tech Domains</span>
                    </h2>
                    <p className="section-subtitle">
                        Discover your passion across diverse technology domains. Each area offers unique 
                        challenges, learning paths, and opportunities to specialize.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {DOMAINS.map((domain, index) => (
                        <div 
                            key={index}
                            className={`card card-hover card-enhanced p-8 group hover-lift ${
                                isDomainsVisible 
                                    ? 'opacity-100 transform translate-y-0' 
                                    : 'opacity-0 transform translate-y-10'
                            }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="text-center mb-6">
                                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {domain.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 mb-3">
                                    {domain.name}
                                </h3>
                                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                    {domain.description}
                                </p>
                            </div>
                            
                            <div className="mb-6">
                                <div className="flex flex-wrap gap-2">
                                    {domain.skills.map((skill, skillIndex) => (
                                        <span 
                                            key={skillIndex}
                                            className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm group-hover:bg-cyan-500/20 group-hover:text-cyan-300 transition-colors duration-300"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            <button className="w-full bg-gray-700 hover:bg-cyan-600 text-white py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group-hover:transform group-hover:scale-105">
                                <span>Explore Domain</span>
                                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DomainsSection;
