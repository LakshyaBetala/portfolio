"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    company: "Samsung R&D",
    position: "AI Intern",
    period: "Feb 2025 – Ongoing",
    description: "Working on Soltuion related to samsung health and ai services",
    location: "Bangalore, India",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-padding container mx-auto px-4 bg-gray-900/50">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
        Experience
      </h2>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative mb-12"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-6 h-6 rounded-full bg-purple-600 border-4 border-gray-900 z-10"></div>

              {/* Content card */}
              <div className={`ml-10 md:ml-0 ${index % 2 === 0 ? "md:mr-[50%] md:pr-12" : "md:ml-[50%] md:pl-12"}`}>
                <div className="bg-gray-800/70 rounded-xl p-6 border border-gray-700 card-hover">
                  <h3 className="text-xl font-semibold text-purple-300">{exp.company}</h3>
                  <h4 className="text-lg font-medium text-gray-200 mb-2">{exp.position}</h4>

                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-300">
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4 text-purple-400" />
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4 text-purple-400" />
                      {exp.location}
                    </div>
                  </div>

                  <p className="text-gray-300">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
