import React from 'react'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Alex Chen",
      role: "Full Stack Developer",
      company: "Tech Startup",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Turing Community transformed my coding journey. The daily challenges and supportive community helped me land my dream job as a full stack developer!"
    },
    {
      name: "Sarah Johnson",
      role: "Software Engineer",
      company: "Google",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The quality of discussions and the expertise shared in this community is unmatched. I've learned more here than in many paid courses."
    },
    {
      name: "Michael Rodriguez",
      role: "Data Scientist",
      company: "Microsoft",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "From beginner to data scientist - this community guided me every step of the way. The mentorship and resources are incredible."
    },
    {
      name: "Emily Davis",
      role: "Frontend Developer",
      company: "Netflix",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The collaborative projects and code reviews helped me improve my skills rapidly. Best programming community I've ever been part of!"
    },
    {
      name: "David Kim",
      role: "DevOps Engineer",
      company: "Amazon",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The technical depth and real-world experience shared here is amazing. It's like having senior developers mentoring you 24/7."
    },
    {
      name: "Lisa Wang",
      role: "Mobile Developer",
      company: "Spotify",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The hackathons and challenges pushed me to learn new technologies. I discovered my passion for mobile development through this community."
    }
  ]

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            What Our Members Say
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Hear from developers who have grown their careers and skills with Turing Community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-xl hover:transform hover:scale-105 transition-all duration-300 relative"
            >
              <FaQuoteLeft className="text-3xl text-blue-400 mb-6 opacity-50" />
              
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <FaStar key={starIndex} className="text-yellow-400 mr-1" />
                ))}
              </div>

              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=6366f1&color=ffffff&size=48`
                  }}
                />
                <div>
                  <h4 className="text-white font-semibold">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gray-900 inline-block px-8 py-6 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-2">
              Join 10,000+ Developers
            </h3>
            <p className="text-gray-300 mb-4">
              Ready to accelerate your coding journey?
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 px-8 rounded-lg transition-all duration-300 font-semibold">
              Join Our Community
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
