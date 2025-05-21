'use client'
import { motion } from 'framer-motion'

const benefits = [
  { title: "Save Time & Resources", description: "Automate repetitive tasks such as screening, scheduling, and follow-ups, so your HR team can focus on what matters most.", icon: "⏱️" },
  { title: "Centralized Hiring Dashboard", description: "Access all recruitment data, candidate profiles, and job postings in one unified platform for better collaboration and transparency.", icon: "📊" },
  { title: "Automate Follow-Ups", description: "Set up automated reminders and communication workflows to ensure timely follow-ups with candidates and managers.", icon: "🔄" },
  { title: "Enhance Candidate Experience", description: "Provide a seamless and professional hiring journey for every applicant, from application to onboarding.", icon: "🌟" },
  { title: "Reduce Manual Workload", description: "Leverage automation to handle repetitive administrative tasks, freeing up your HR team for strategic work.", icon: "📱" },
  { title: "Real-Time Reporting & Insights", description: "Gain actionable insights with real-time analytics and reporting tools to make smarter hiring decisions.", icon: "📈" }
]

const lineVariants = {
  initial: { height: 0 },
  animate: { height: "100%" }
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.13, type: "spring", stiffness: 80 }
  })
}

export default function Benefits() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
        >
          Why Choose Our HRMS
        </motion.h2>
        {/* Vertical Workflow Timeline */}
        <div className="relative flex flex-col items-center">
          {/* Vertical line */}
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={lineVariants}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-1 bg-blue-200 dark:bg-blue-800 z-0"
            style={{ minHeight: "calc(100% - 4rem)" }}
          />
          <div className="flex flex-col gap-16 w-full z-10">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
                className={`relative flex md:flex-row flex-col items-center w-full`}
              >
                {/* Icon on the line */}
                <div className="flex flex-col items-center md:w-1/5 w-full mb-4 md:mb-0">
                  <span className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 text-3xl shadow-lg border-4 border-white dark:border-gray-900 z-10">
                    {benefit.icon}
                  </span>
                  {/* Connector dot */}
                  {i < benefits.length - 1 && (
                    <span className="hidden md:block w-1 h-16 bg-blue-200 dark:bg-blue-800"></span>
                  )}
                </div>
                {/* Card */}
                <div className="md:w-4/5 w-full">
                  <motion.div
                    whileHover={{ scale: 1.03, boxShadow: "0 8px 32px 0 rgba(0, 112, 244, 0.10)" }}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-md px-8 py-6 transition-all duration-300"
                  >
                    <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}