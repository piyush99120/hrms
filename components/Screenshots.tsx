'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const screenshots = [
  {
    title: "Enquiry Management Dashboard",
    description: "Manage job enquiries with clarity—track roles, budgets, qualifications, and applicant experience efficiently in a centralized panel.",
    image: "/Picture1.png",
    features: [
      "Detailed job designation, department, and requirement entries",
      "Budget, qualification, and experience fields per job role",
      "Real-time user login and enquiry tracking",
      "Built-in tools: email, contact, inbox, and chat"
    ]
  },
  {
    title: "Updated Enquiry Management",
    description: "Refined interface for structured job enquiry handling with enhanced data clarity and administrative tools.",
    image: "/Picture2.png",
    features: [
      "Defined enquiry parameters: job codes, requirement count, budget",
      "Summary table for all job entries with totals",
      "Efficient real-time updates and communication tools",
      "Updated visual structure for SALES ASS&M department planning"
    ]
  },
  {
    title: "Tax Management Panel",
    description: "Set and manage custom tax configurations with control over tax type, category, percentage, and formulas.",
    image: "/Picture3.png",
    features: [
      "Custom tax creation (CST, VAT, GST) with rates & modes",
      "Round-off/general calculation types and return modes",
      "Centralized tax list for quick access and editing",
      "Instant updates with reset functionality"
    ]
  },
  {
    title: "Country Master Management",
    description: "Simplify geographic data accuracy with centralized country-code management and editable listings.",
    image: "/Picture4.png",
    features: [
      "Add, update, or deactivate countries with codes",
      "Tabular view of all entries for quick review",
      "Action icons for edit/delete per row",
      "Seamless interface for managing regional data"
    ]
  }
]

export default function Screenshots() {
  return (
    <>
      <section className="py-20 overflow-hidden bg-gradient-to-br from-white via-blue-50 to-purple-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Product Screenshots
        </h2>
        {screenshots.map((screenshot, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`container mx-auto px-4 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } flex flex-col md:flex-row items-center gap-16 mb-48 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/60 backdrop-blur-sm`}
          >
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-1 space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
                {screenshot.title}
              </h2>
              <p className="text-lg text-gray-600">
                {screenshot.description}
              </p>
              <ul className="space-y-3">
                {screenshot.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * idx }}
                    className="flex items-center gap-2 text-gray-600"
                  >
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Laptop Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-1 relative"
            >
              <div className="relative w-full max-w-2xl mx-auto">
                {/* Laptop Frame */}
                <div className="relative w-full pt-[60%] bg-gradient-to-r from-blue-100 to-blue-200 rounded-t-xl shadow-lg">
                  {/* Screen Content */}
                  <div className="absolute inset-2 bg-white rounded-lg overflow-hidden">
                    <Image
                      src={screenshot.image}
                      alt={screenshot.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
                {/* Laptop Base */}
                <div className="relative h-[20px] bg-gradient-to-r from-blue-200 to-blue-300 rounded-b-xl">
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[20%] h-[3px] bg-blue-400/20 rounded-full" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </section>
    </>
  )
}
