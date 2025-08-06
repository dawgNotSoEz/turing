import React from 'react'
import { FaCode, FaUsers, FaTrophy, FaGraduationCap } from 'react-icons/fa'
import '../../styles/index.css'

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaCode className="text-4xl text-blue-400" />,
      title: "Coding Challenges",
      description: "Daily coding problems and competitive programming challenges to sharpen your skills."
    },
    {
      icon: <FaUsers className="text-4xl text-green-400" />,
      title: "Community Support",
      description: "Get help from experienced developers and collaborate on exciting projects."
    },
    {
      icon: <FaTrophy className="text-4xl text-yellow-400" />,
      title: "Competitions",
      description: "Participate in coding contests and hackathons with amazing prizes."
    },
    {
      icon: <FaGraduationCap className="text-4xl text-purple-400" />,
      title: "Learning Resources",
      description: "Access curated tutorials, courses, and study materials for all skill levels."
    }
  ]

  return (
    <section className="section bg-gray-900">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">
            Why Choose <span className="text-gradient">Turing Community?</span>
          </h2>
          <p className="section-subtitle">
            Discover the features that make our community the perfect place for developers to grow and excel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card card-hover card-enhanced p-8 text-center hover-lift"
            >
              <div className="flex justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
