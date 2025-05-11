"use client"

import { motion } from "framer-motion"
import { Code, Brain, Globe, Cpu, Gamepad } from "lucide-react"

const skillCategories = [
  {
    title: "Languages",
    icon: <Code className="h-6 w-6" />,
    skills: ["Python", "C++", "Java", "JavaScript"],
  },
  {
    title: "ML/AI",
    icon: <Brain className="h-6 w-6" />,
    skills: ["TensorFlow", "CNN", "NLP", "Computer Vision"],
  },
  {
    title: "Web Dev",
    icon: <Globe className="h-6 w-6" />,
    skills: ["Node.js", "Express", "React", "Next.js"],
  },
  {
    title: "IoT",
    icon: <Cpu className="h-6 w-6" />,
    skills: ["ESP8266", "Arduino", "Raspberry Pi", "Sensors"],
  },
  {
    title: "Game Dev",
    icon: <Gamepad className="h-6 w-6" />,
    skills: ["Unity", "VR", "3D Modeling", "Game Design"],
  },
]

export default function Skills() {
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="section-padding container mx-auto px-4 bg-gray-900/50">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
        Skills
      </h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            variants={item}
            className="bg-gray-800/70 rounded-xl p-6 border border-gray-700 card-hover"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center mr-3">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-purple-300">{category.title}</h3>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="bg-gray-700/50 rounded-lg px-3 py-2 text-sm text-gray-200 border border-gray-600 hover:border-purple-500 transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
