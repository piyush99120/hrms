'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
              Smart Hiring <span className="text-blue-600 dark:text-blue-400">Starts Here.</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg">
              Streamline recruitment from enquiry to onboarding — all in one platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105">
                Book a Demo
              </button>
              <button className="group flex items-center justify-center gap-2 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-lg border border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
                <svg className="w-6 h-6 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                </svg>
                Watch Video
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hidden md:block"
          >
            {/* Add your dashboard mockup image here */}
                <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" 
                alt="HR Management Platform" 
                className="w-full h-[400px] bg-white rounded-lg shadow-x9"
              />
          </motion.div>
        </div>
      </div>
    </section>
  )
}