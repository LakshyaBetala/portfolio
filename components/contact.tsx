"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Linkedin, Github, Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="section-padding container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
        Let's Connect
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-purple-300">Get In Touch</h3>
          <p className="text-gray-300 mb-8">
            I'm always open to new opportunities, collaborations, or just a friendly chat about technology. Feel free to
            reach out through the form or any of my social platforms.
          </p>

          <div className="flex flex-col gap-6">
            <a
              href="https://www.linkedin.com/in/lakshya-betala-662991326"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-gray-300 hover:text-purple-300 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center">
                <Linkedin className="h-5 w-5" />
              </div>
              <span>linkedin.com/in/lakshya-betala-662991326</span>
            </a>

            <a
              href="https://github.com/LakshyaBetala"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-gray-300 hover:text-purple-300 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center">
                <Github className="h-5 w-5" />
              </div>
              <span>github.com/LakshyaBetala</span>
            </a>

            <a
              href="mailto:lakshbetala15@gmail.com"
              className="flex items-center gap-4 text-gray-300 hover:text-purple-300 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center">
                <Mail className="h-5 w-5" />
              </div>
              <span>lakshbetala15@gmail.com</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div className="mb-4">
              <Label htmlFor="name" className="text-gray-200 mb-2">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="bg-gray-700/50 border-gray-600 focus-visible:ring-purple-500"
                required
              />
            </div>

            <div className="mb-4">
              <Label htmlFor="email" className="text-gray-200 mb-2">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                className="bg-gray-700/50 border-gray-600 focus-visible:ring-purple-500"
                required
              />
            </div>

            <div className="mb-6">
              <Label htmlFor="message" className="text-gray-200 mb-2">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                className="bg-gray-700/50 border-gray-600 focus-visible:ring-purple-500 min-h-[120px]"
                required
              />
            </div>

            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
              Send Message <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
