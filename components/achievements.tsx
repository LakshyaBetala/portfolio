"use client"

import { motion } from "framer-motion"
import { Award, Trophy, Medal } from "lucide-react"

const achievements = [
  {
    title: "Winner – Data Vortex ML competition",
    icon: <Trophy className="h-6 w-6" />,
    color: "from-yellow-400 to-yellow-600",
  },
  {
    title: "2nd Runner-up – SRMHackFeb (Saarthi)",
    icon: <Award className="h-6 w-6" />,
    color: "from-blue-400 to-blue-600",
  },
  {
    title: "2nd Prize – Project Expo (Eco-campus)",
    icon: <Medal className="h-6 w-6" />,
    color: "from-purple-400 to-purple-600",
  },
]

export default function Achievements() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  }

  return (
    <section id="achievements" className="section-padding container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
        Achievements
      </h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto"
      >
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            variants={item}
            className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] card-hover"
          >
            <div className="flex items-center mb-4">
              <div
                className={`w-12 h-12 rounded-full bg-gradient-to-br ${achievement.color} flex items-center justify-center mr-4 shadow-lg`}
              >
                {achievement.icon}
              </div>
              <h3 className="text-lg font-medium text-gray-200">{achievement.title}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
