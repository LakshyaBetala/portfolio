"use client"

import { motion } from "framer-motion"
import { Gamepad, Network, Calendar } from "lucide-react"

const extracurriculars = [
  {
    title: "Game Developer",
    description: "Created VR and Java games for various platforms and competitions.",
    icon: <Gamepad className="h-6 w-6" />,
  },
  {
    title: "Head of Operations – Networking Nexus",
    description: "Led a team of students focused on networking technologies and innovations.",
    icon: <Network className="h-6 w-6" />,
  },
  {
    title: "Aaruush Event Coordinator",
    description: "Organized and coordinated technical events for SRMIST's annual tech fest.",
    icon: <Calendar className="h-6 w-6" />,
  },
]

export default function Extracurriculars() {
  return (
    <section id="extracurriculars" className="section-padding container mx-auto px-4 bg-gray-900/50">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
        Extracurriculars
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {extracurriculars.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-800/70 rounded-xl p-6 border border-gray-700 card-hover"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-blue-900/50 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-purple-300">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
