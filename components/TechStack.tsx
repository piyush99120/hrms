'use client'
import { motion } from 'framer-motion'

const technologies = [
  { name: "Next.js", icon: "⚡" },
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Firebase", icon: "🔥" },
  { name: "REST API", icon: "🔌" }
]

export default function TechStack() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Powered by Modern Technology
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-50"
            >
              <div className="text-4xl mb-2">{tech.icon}</div>
              <p className="font-medium">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}