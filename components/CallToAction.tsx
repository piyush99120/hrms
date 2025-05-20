'use client'
import { motion } from 'framer-motion'

export default function CallToAction() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Ready to Upgrade Your Hiring?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-white/90 mb-8"
          >
            Join thousands of companies that have transformed their recruitment process
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
              Start Your Free Trial
            </button>
            <button className="bg-transparent text-white px-8 py-3 rounded-lg border-2 border-white hover:bg-white/10 transition-colors font-semibold">
              Schedule a Live Demo
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}