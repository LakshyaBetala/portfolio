"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDown, FileText } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const [currentSkill, setCurrentSkill] = useState(0)
  const skills = ["AI Developer", "IoT Innovator", "Web & Game Enthusiast", "Fast Learner"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 animate-gradient opacity-50"></div>

      <motion.div
        className="z-10 text-center px-4 max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Lakshya Betala
        </h1>

        <h2 className="text-xl md:text-2xl mb-6 text-gray-200">
          AI/ML Engineer | IoT | Web & Game Developer | Samsung R&D Intern
        </h2>

        <div className="h-16 mb-8">
          <motion.p
            key={currentSkill}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-light text-purple-300"
          >
            {skills[currentSkill]}
          </motion.p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="https://drive.google.com/file/d/1cobEYtAitX7YIHQqkrawG7zxfV481ZWb/view?usp=drive_link"
          target="_blank"
        rel="noopener noreferrer"
      >
        <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
        <FileText className="mr-2 h-5 w-5" /> View Resume
        </Button>
</a>

          <Button
            size="lg"
            variant="outline"
            className="border-purple-500 text-purple-300 hover:bg-purple-900/30"
            asChild
          >
            <Link href="#contact">
              Let's Connect <ArrowDown className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-8 w-8 text-purple-300" />
      </div>
    </section>
  )
}
