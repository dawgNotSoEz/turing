import React from 'react'
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa'

const EventsSection = () => {
  const events = [
    {
      title: "Weekly Coding Challenge",
      date: "Every Monday",
      time: "8:00 PM EST",
      location: "Discord Voice Chat",
      description: "Join us for our weekly coding challenge where we solve interesting problems together.",
      type: "weekly",
      color: "bg-blue-500"
    },
    {
      title: "Tech Talk: AI & Machine Learning",
      date: "August 15, 2025",
      time: "7:00 PM EST",
      location: "Discord Stage Channel",
      description: "Guest speaker will discuss the latest trends in AI and ML development.",
      type: "special",
      color: "bg-purple-500"
    },
    {
      title: "Hackathon 2025",
      date: "September 20-22, 2025",
      time: "48 Hours",
      location: "Virtual Event",
      description: "Our annual hackathon with exciting themes and amazing prizes!",
      type: "hackathon",
      color: "bg-green-500"
    }
  ]

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Upcoming Events
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Stay updated with our latest events, challenges, and community gatherings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className={`h-2 ${event.color}`}></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {event.title}
                </h3>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-gray-300">
                    <FaCalendarAlt className="mr-3 text-blue-400" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <FaClock className="mr-3 text-green-400" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <FaMapMarkerAlt className="mr-3 text-red-400" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {event.description}
                </p>

                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-semibold">
                  Join Event
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gray-700 hover:bg-gray-600 text-white py-3 px-8 rounded-lg transition-colors duration-300">
            View All Events
          </button>
        </div>
      </div>
    </section>
  )
}

export default EventsSection
