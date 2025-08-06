import React from 'react'
import { FaDiscord, FaArrowRight, FaGithub, FaTwitter } from 'react-icons/fa'

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Ready to Level Up?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands of developers in the most active programming community on Discord. 
            Start solving challenges, building projects, and growing your skills today!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button className="bg-white text-gray-800 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:transform hover:scale-105 flex items-center group">
              <FaDiscord className="mr-3 text-2xl text-blue-600" />
              Join Discord Server
              <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:transform hover:scale-105">
              Explore Challenges
            </button>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">
              What You'll Get:
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start">
                <div className="bg-green-500 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Daily Challenges</h4>
                  <p className="text-blue-100 text-sm">
                    Fresh coding problems every day to keep your skills sharp
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-500 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Expert Mentorship</h4>
                  <p className="text-blue-100 text-sm">
                    Get guidance from senior developers and industry professionals
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-500 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Career Support</h4>
                  <p className="text-blue-100 text-sm">
                    Resume reviews, interview prep, and job referrals
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-500 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Project Collaboration</h4>
                  <p className="text-blue-100 text-sm">
                    Work on real projects with other passionate developers
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-500 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Learning Resources</h4>
                  <p className="text-blue-100 text-sm">
                    Access to premium courses, tutorials, and study materials
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-500 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Community Events</h4>
                  <p className="text-blue-100 text-sm">
                    Hackathons, workshops, and networking opportunities
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-blue-100 mb-4">Follow us on social media:</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-white hover:text-blue-200 transition-colors duration-300">
                <FaDiscord className="text-3xl" />
              </a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors duration-300">
                <FaGithub className="text-3xl" />
              </a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors duration-300">
                <FaTwitter className="text-3xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
