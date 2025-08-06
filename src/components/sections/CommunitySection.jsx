import { StarIcon, UsersIcon, BriefcaseIcon } from '../../assets/icons';
import { useScrollAnimation } from '../../hooks/useAnimations';
import { COMMUNITY_FEATURES } from '../../data/constants';

const CommunitySection = () => {
    const [communityRef, isCommunityVisible] = useScrollAnimation(0.1);

    const getFeatureIcon = (index) => {
        const icons = [StarIcon, BriefcaseIcon, UsersIcon];
        const IconComponent = icons[index % icons.length];
        return <IconComponent className="w-8 h-8 text-purple-400" />;
    };

    return (
        <section id="community" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div 
                    ref={communityRef}
                    className={`text-center mb-16 transition-all duration-1000 ${
                        isCommunityVisible 
                            ? 'opacity-100 transform translate-y-0' 
                            : 'opacity-0 transform translate-y-10'
                    }`}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Community</span> Features
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Beyond coding challenges, we offer comprehensive support for your entire 
                        tech journey - from project development to career advancement.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {COMMUNITY_FEATURES.map((feature, index) => (
                        <div 
                            key={index}
                            className={`group bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 ${
                                isCommunityVisible 
                                    ? 'opacity-100 transform translate-y-0' 
                                    : 'opacity-0 transform translate-y-10'
                            }`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {getFeatureIcon(index)}
                                </div>
                                <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300 mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 mb-6">
                                    {feature.description}
                                </p>
                                <div className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-semibold border border-purple-500/30">
                                    {feature.highlight}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Community Stats */}
                <div className={`mt-16 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-purple-500/30 transition-all duration-1000 delay-600 ${
                    isCommunityVisible 
                        ? 'opacity-100 transform translate-y-0' 
                        : 'opacity-0 transform translate-y-10'
                }`}>
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-white mb-8">Community Impact</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-purple-400 mb-2">150+</div>
                                <div className="text-gray-300">Projects Showcased</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-purple-400 mb-2">80%</div>
                                <div className="text-gray-300">Job Placement Rate</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
                                <div className="text-gray-300">Peer Connections</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CommunitySection;
