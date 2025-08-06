import { useScrollAnimation } from '../../hooks/useAnimations';
import { TEAM_MEMBERS } from '../../data/constants';

const TeamSection = () => {
    const [teamRef, isTeamVisible] = useScrollAnimation(0.1);

    return (
        <section id="team" className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div 
                    ref={teamRef}
                    className={`text-center mb-16 transition-all duration-1000 ${
                        isTeamVisible 
                            ? 'opacity-100 transform translate-y-0' 
                            : 'opacity-0 transform translate-y-10'
                    }`}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Meet Our <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Team</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Our passionate team of students and mentors work together to create an 
                        inclusive learning environment where everyone can thrive.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {TEAM_MEMBERS.map((member, index) => (
                        <div 
                            key={index}
                            className={`group bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-yellow-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/20 text-center ${
                                isTeamVisible 
                                    ? 'opacity-100 transform translate-y-0' 
                                    : 'opacity-0 transform translate-y-10'
                            }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="mb-6">
                                <img 
                                    src={member.avatar}
                                    alt={member.name}
                                    className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-600 group-hover:border-yellow-400 transition-colors duration-300"
                                />
                                <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300 mb-2">
                                    {member.name}
                                </h3>
                                <div className="text-yellow-400 font-semibold mb-3">
                                    {member.role}
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                    {member.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Join Team CTA */}
                <div className={`mt-16 text-center transition-all duration-1000 delay-400 ${
                    isTeamVisible 
                        ? 'opacity-100 transform translate-y-0' 
                        : 'opacity-0 transform translate-y-10'
                }`}>
                    <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-2xl p-8 border border-yellow-500/30">
                        <h3 className="text-2xl font-bold text-white mb-4">Want to Join Our Team?</h3>
                        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                            We're always looking for passionate students who want to help others grow. 
                            If you're interested in mentoring, organizing events, or contributing to our community, we'd love to hear from you!
                        </p>
                        <button className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                            Apply to Join
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
