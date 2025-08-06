import { ArrowRightIcon } from '../../assets/icons';
import { useScrollAnimation } from '../../hooks/useAnimations';
import { DOMAINS } from '../../data/constants';

const DomainsSection = () => {
    const [domainsRef, isDomainsVisible] = useScrollAnimation(0.1);

    return (
        <section id="domains" className="py-20 bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div 
                    ref={domainsRef}
                    className={`text-center mb-16 transition-all duration-1000 ${
                        isDomainsVisible 
                            ? 'opacity-100 transform translate-y-0' 
                            : 'opacity-0 transform translate-y-10'
                    }`}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Explore <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Tech Domains</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Discover your passion across diverse technology domains. Each area offers unique 
                        challenges, learning paths, and opportunities to specialize.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {DOMAINS.map((domain, index) => (
                        <div 
                            key={index}
                            className={`group bg-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 ${
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
                                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DomainsSection;
