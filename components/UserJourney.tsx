'use client'
import { motion } from 'framer-motion'

const steps = [
  { title: "Receive Enquiry", icon: "📥", description: "Handle incoming recruitment requests" },
  { title: "Post Jobs", icon: "📢", description: "Create and publish job listings" },
  { title: "Manage Applications", icon: "📝", description: "Process candidate applications" },
  { title: "Schedule Interviews", icon: "📅", description: "Coordinate interview timings" },
  { title: "Send Offers", icon: "📨", description: "Generate and send offer letters" },
  { title: "Verify Candidates", icon: "✅", description: "Complete background checks" }
]

export default function UserJourney() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          How It Works
        </motion.h2>
        <div className="relative flex flex-col md:flex-row gap-8 md:gap-0 justify-between items-center">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="flex flex-col items-center text-center relative z-10 w-full md:w-auto"
            >
              {/* Animated icon with subtle accent ring */}
              <motion.div
                animate={{ scale: [1, 1.12, 1] }}
                transition={{ repeat: Infinity, duration: 1.6, delay: index * 0.1 }}
                className="mb-4"
              >
                <span className="flex items-center justify-center w-16 h-16 rounded-full bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700 text-3xl ring-2 ring-blue-100 dark:ring-blue-900">
                  {step.icon}
                </span>
              </motion.div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              {/* Arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                  <svg className="w-7 h-7 text-gray-300 dark:text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}