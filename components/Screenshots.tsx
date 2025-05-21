'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const screenshots = [
  { title: "Dashboard Overview", image: "/dashboard.png", description: "Comprehensive recruitment analytics" },
  { title: "Candidate Profiles", image: "/candidates.png", description: "Detailed applicant information" },
  { title: "Interview Schedule", image: "/schedule.png", description: "Easy interview management" }
]

export default function Screenshots() {
  const [activeIndex, setActiveIndex] = useState(0)

  // Auto-loop through screenshots every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % screenshots.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-pink-50 to-yellow-50 pt-22">
      <div className="container mx-auto px-4 py-16 max-w-4xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900"
        >
          Platform Preview
        </motion.h2>
        <div className="flex flex-col items-center">
          {/* Computer monitor frame with animated screenshot */}
          <div className="relative w-full max-w-3xl mx-auto flex flex-col items-center"> {/* Increased max-w-2xl to max-w-4xl */}
            {/* Monitor body */}
            <div className="relative w-full aspect-[16/9] bg-gray-200 rounded-t-3xl rounded-b-lg shadow-2xl border-4 border-gray-300 overflow-hidden flex items-center justify-center" style={{ minHeight: 400 }}> {/* Added minHeight */}
              {/* Screen area */}
              <div className="absolute left-[5%] top-[6%] w-[90%] h-[80%] bg-white rounded-xl overflow-hidden flex items-center justify-center z-10 shadow-inner">
                {screenshots.map((screenshot, index) => (
                  <motion.img
                    key={index}
                    src={screenshot.image}
                    alt={screenshot.title}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{
                      opacity: index === activeIndex ? 1 : 0,
                      scale: index === activeIndex ? 1 : 0.97
                    }}
                    transition={{ duration: 0.6, type: "spring" }}
                    className={`absolute w-full h-full object-contain transition-all duration-500 ${index === activeIndex ? 'z-10' : 'z-0'}`}
                    style={{ display: index === activeIndex ? 'block' : 'none' }}
                  />
                ))}
              </div>
              {/* Monitor bezel */}
              <div className="absolute inset-0 border-8 border-gray-300 rounded-t-3xl rounded-b-lg pointer-events-none" />
              {/* Monitor camera */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-1.5 bg-gray-400 rounded-full opacity-60" />
            </div>
            {/* Monitor stand */}
            <div className="w-32 h-5 bg-gray-300 rounded-b-xl mx-auto -mt-2 shadow" /> {/* Increased width and height */}
            <div className="w-16 h-3 bg-gray-400 rounded-b-lg mx-auto mt-1" /> {/* Increased width and height */}
          </div>
          {/* Screenshot info */}
          <div className="mt-8 text-center">
            <motion.h3
              key={screenshots[activeIndex].title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold text-blue-700 mb-2"
            >
              {screenshots[activeIndex].title}
            </motion.h3>
            <motion.p
              key={screenshots[activeIndex].description}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-600"
            >
              {screenshots[activeIndex].description}
            </motion.p>
          </div>
          {/* Dots navigation */}
          <div className="flex justify-center mt-8 gap-3">
            {screenshots.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                animate={index === activeIndex ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                transition={{ duration: 0.8, repeat: index === activeIndex ? Infinity : 0, repeatType: "reverse" }}
                className={`w-4 h-4 rounded-full border-2 border-gray-200 shadow-md transition-all duration-300
                  ${index === activeIndex
                    ? 'bg-blue-500'
                    : 'bg-gray-300'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}