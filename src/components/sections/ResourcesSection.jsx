import React from 'react'
import { FaBook, FaVideo, FaFileCode, FaDownload } from 'react-icons/fa'

const ResourcesSection = () => {
  const resourceCategories = [
    {
      icon: <FaBook className="text-4xl text-blue-400" />,
      title: "Study Guides",
      description: "Comprehensive guides for various programming topics",
      resources: [
        "Data Structures & Algorithms",
        "System Design Fundamentals", 
        "Web Development Roadmap",
        "Database Design Principles"
      ]
    },
    {
      icon: <FaVideo className="text-4xl text-red-400" />,
      title: "Video Tutorials", 
      description: "Curated video content from our community experts",
      resources: [
        "React Advanced Patterns",
        "Node.js Best Practices",
        "Python for Beginners",
        "DevOps Essentials"
      ]
    },
    {
      icon: <FaFileCode className="text-4xl text-green-400" />,
      title: "Code Templates",
      description: "Ready-to-use code templates and boilerplates",
      resources: [
        "React Project Starter",
        "Express.js API Template", 
        "Python Flask Boilerplate",
        "Mobile App Templates"
      ]
    }
  ]

  const featuredResources = [
    {
      title: "Complete Web Development Guide 2025",
      description: "A comprehensive guide covering frontend, backend, and deployment strategies.",
      downloads: "2.5k",
      type: "PDF"
    },
    {
      title: "Algorithm Cheat Sheet Collection",
      description: "Quick reference for common algorithms and data structures.",
      downloads: "1.8k", 
      type: "PDF"
    },
    {
      title: "Interview Preparation Kit",
      description: "Practice problems and solutions for technical interviews.",
      downloads: "3.2k",
      type: "ZIP"
    }
  ]

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Learning Resources
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Access our carefully curated collection of learning materials, guides, and tools to accelerate your development journey.
          </p>
        </div>

        {/* Resource Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {resourceCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-all duration-300"
            >
              <div className="flex justify-center mb-6">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 text-center">
                {category.title}
              </h3>
              <p className="text-gray-400 text-center mb-6">
                {category.description}
              </p>
              <ul className="space-y-2">
                {category.resources.map((resource, resourceIndex) => (
                  <li key={resourceIndex} className="text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    {resource}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Featured Downloads */}
        <div className="bg-gray-800 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Featured Downloads
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredResources.map((resource, index) => (
              <div
                key={index}
                className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-semibold text-white">
                    {resource.title}
                  </h4>
                  <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm">
                    {resource.type}
                  </span>
                </div>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {resource.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">
                    {resource.downloads} downloads
                  </span>
                  <button className="flex items-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors duration-300">
                    <FaDownload className="mr-2" />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 px-8 rounded-lg transition-all duration-300 font-semibold">
            Browse All Resources
          </button>
        </div>
      </div>
    </section>
  )
}

export default ResourcesSection
