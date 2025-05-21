'use client'
import { motion } from 'framer-motion'

const steps = [
  {
    title: "Receive Enquiry",
    icon: "📥",
    description: "We start by receiving job requests from different sources. Our system makes sure all the important job details are collected and ready for the next steps."
  },
  {
    title: "Post Jobs",
    icon: "📢",
    description: "Next, we create and share job openings on various platforms. This helps us reach more people and find the best candidates quickly and easily."
  },
  {
    title: "Manage Applications",
    icon: "📝",
    description: "As applications come in, we organize and review them in one place. This makes it simple to keep track of every candidate and choose the most suitable ones."
  },
  {
    title: "Schedule Interviews",
    icon: "📅",
    description: "We help you set up interviews by finding the best times for both candidates and interviewers. Automatic reminders and calendar invites keep everyone on track."
  },
  {
    title: "Send Offers",
    icon: "📨",
    description: "Once you select the right candidate, our system helps you quickly create and send professional offer letters, making the hiring process smooth and fast."
  },
  {
    title: "Verify Candidates",
    icon: "✅",
    description: "Finally, we assist with background checks and verifications to make sure every new hire is trustworthy and fits your company’s needs."
  }
]

export default function UserJourney() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-pink-50 to-yellow-50 pt-18">
      <div className="container mx-auto px-4 py-16 max-w-4xl relative z-10 padding-50">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900"
        >
          How It Works
        </motion.h2>
        {/* Animated Timeline */}
        <div className="relative flex flex-col items-center">
          {/* Vertical line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="absolute left-1/2 -translate-x-1/2 top-12 bottom-12 w-1 bg-blue-200 z-0"
            style={{ minHeight: "calc(100% - 6rem)" }}
          />
          <div className="flex flex-col gap-16 w-full z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, type: "spring" }}
                className="relative flex md:flex-row flex-col items-center w-full"
              >
                {/* Icon on the line */}
                <div className="flex flex-col items-center md:w-1/5 w-full mb-4 md:mb-0 relative">
                  <motion.span
                    initial={{ scale: 0.7, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1 + i * 0.08, type: "spring" }}
                    className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-3xl shadow-lg border-4 border-white z-10"
                  >
                    {step.icon}
                  </motion.span>
                  {/* Arrow Down */}
                  {i < steps.length - 1 && (
                    <motion.span
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + i * 0.08 }}
                      className="hidden md:flex flex-col items-center"
                    >
                      <svg width="24" height="40" viewBox="0 0 24 40" fill="none" className="my-1">
                        <path
                          d="M12 0V32"
                          stroke="#3B82F6"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                        <path
                          d="M6 26L12 32L18 26"
                          stroke="#3B82F6"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.span>
                  )}
                </div>
                {/* Card */}
                <div className="md:w-4/5 w-full">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.03, boxShadow: "0 8px 32px 0 rgba(0, 112, 244, 0.10)" }}
                    transition={{ duration: 0.4, delay: 0.15 + i * 0.04, type: "spring" }}
                    className="relative overflow-hidden rounded-xl border border-gray-200 bg-gradient-to-br from-white to-blue-50 p-8 shadow group transition-all duration-300"
                  >
                    {/* Grid overlay */}
                    <svg
                      className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
                      width="100%" height="100%" viewBox="0 0 100 100"
                      style={{ minWidth: 120, minHeight: 120 }}
                    >
                      <defs>
                        <pattern id={`smallGrid-uj${i}`} width="10" height="10" patternUnits="userSpaceOnUse">
                          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#dbeafe" strokeWidth="0.5"/>
                        </pattern>
                        <pattern id={`grid-uj${i}`} width="20" height="20" patternUnits="userSpaceOnUse">
                          <rect width="20" height="20" fill={`url(#smallGrid-uj${i})`}/>
                          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#93c5fd" strokeWidth="1"/>
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#grid-uj${i})`} />
                    </svg>
                    <div className="relative z-10">
                      <h3 className="text-xl font-semibold text-blue-700 mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
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