'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

const screenshots = [
  { title: "Dashboard Overview", image: "/dashboard.png", description: "Comprehensive recruitment analytics" },
  { title: "Candidate Profiles", image: "/candidates.png", description: "Detailed applicant information" },
  { title: "Interview Schedule", image: "/schedule.png", description: "Easy interview management" }
]

export default function Screenshots() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Platform Preview
        </motion.h2>
        <div className="relative">
          <div className="flex overflow-hidden rounded-3xl shadow-2xl justify-center">
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{
                  opacity: index === activeIndex ? 1 : 0,
                  scale: index === activeIndex ? 1 : 0.97
                }}
                transition={{ duration: 0.6, type: "spring" }}
                className={`w-full flex-shrink-0 ${index === activeIndex ? 'z-10' : 'z-0'}`}
                style={{ display: index === activeIndex ? 'block' : 'none' }}
              >
                <div className="aspect-video bg-white dark:bg-gray-800 rounded-3xl flex items-center justify-center border border-gray-200 dark:border-gray-700 shadow-lg">
                  {/* Replace with actual screenshot image */}
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">{screenshot.title}</p>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{screenshot.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{screenshot.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-8 gap-3">
            {screenshots.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                animate={index === activeIndex ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                transition={{ duration: 0.8, repeat: index === activeIndex ? Infinity : 0, repeatType: "reverse" }}
                className={`w-4 h-4 rounded-full border-2 border-gray-200 dark:border-gray-700 shadow-md transition-all duration-300
                  ${index === activeIndex
                    ? 'bg-blue-500'
                    : 'bg-gray-300 dark:bg-gray-700'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}