'use client'
import { motion } from 'framer-motion'

const benefits = [
  { title: "Save Time & Resources", description: "Automate repetitive tasks and focus on strategic decisions", icon: "⏱️" },
  { title: "Centralized Hiring Dashboard", description: "All recruitment data in one accessible platform", icon: "📊" },
  { title: "Automate Follow-Ups", description: "Never miss important candidate communications", icon: "🔄" },
  { title: "Enhance Candidate Experience", description: "Provide a smooth and professional hiring process", icon: "🌟" },
  { title: "Reduce Manual Workload", description: "Streamline operations with automated workflows", icon: "📱" },
  { title: "Real-Time Reporting & Insights", description: "Make data-driven hiring decisions", icon: "📈" }
]

export default function Benefits() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Why Choose Our HRMS
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="flex flex-col items-center text-center space-y-4"
            >
              <motion.div
                animate={{ scale: [1, 1.12, 1] }}
                transition={{ repeat: Infinity, duration: 1.6, delay: index * 0.1 }}
              >
                <span
                  className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 text-3xl"
                >
                  {benefit.icon}
                </span>
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}