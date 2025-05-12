"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="section-padding container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          About Me
        </h2>

        <div className="bg-gray-800/50 rounded-xl p-6 md:p-8 shadow-xl border border-gray-700">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <div className="relative w-48 h-48 mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse"></div>
                <div className="absolute inset-1 rounded-full bg-gray-900 flex items-center justify-center">
                <Image
                    src="/profile.png"
                    alt="Lakshya Betala"
                    width={180}
                    height={180}
                    className="rounded-full"
                    priority
                    placeholder="blur"
                    blurDataURL="/profile.png"
                  />

                </div>
              </div>
            </div>

            <div className="md:w-2/3">
              <p className="text-lg text-gray-300 mb-6">
                I'm a passionate Computer Science Engineering student with a keen interest in AI/ML, IoT, and web
                development. I love building innovative solutions that solve real-world problems and am constantly
                exploring new technologies to expand my skill set.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center mr-3">
                    <Image src="/placeholder.svg?height=32&width=32" alt="SRMIST" width={32} height={32} />
                  </div>
                  <span className="text-gray-200">B.Tech CSE at SRMIST | 9.65 CGPA</span>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center mr-3">
                    <Image src="/placeholder.svg?height=32&width=32" alt="Samsung" width={32} height={32} />
                  </div>
                  <span className="text-gray-200">Intern @ Samsung R&D</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
