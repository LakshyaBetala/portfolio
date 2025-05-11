"use client"

import { motion } from "framer-motion"
import { ExternalLink, Eye } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "SAARTHI – BHARAT",
    description: "Real-time AI voice assistant with object detection and emotion analysis capabilities.",
    image: "/placeholder.svg?height=300&width=500",
    link: "#",
  },
  {
    title: "Nutri-Snap",
    description: "CNN-based food recognition mobile app that provides nutritional information.",
    image: "/placeholder.svg?height=300&width=500",
    link: "#",
  },
  {
    title: "Eco-Campus",
    description: "IoT + OpenCV energy optimization system with React dashboard for monitoring.",
    image: "/placeholder.svg?height=300&width=500",
    link: "#",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section-padding container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 card-hover"
          >
            <div className="relative overflow-hidden h-48">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-purple-300">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              <Button
                asChild
                variant="outline"
                className="w-full border-purple-500 text-purple-300 hover:bg-purple-900/30"
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Eye className="mr-2 h-4 w-4" /> View Project <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
