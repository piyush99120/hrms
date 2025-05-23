'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

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
    <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-purple-50 overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800">
          Product Screenshots
        </h2>
        <p className="text-gray-500 mt-2 max-w-xl mx-auto">
          Explore the key modules of our ERP system with visual previews and feature highlights.
        </p>
      </div>

      {screenshots.map((shot, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`container mx-auto px-6 flex flex-col lg:flex-row items-center gap-14 mb-32 ${
            i % 2 !== 0 ? 'lg:flex-row-reverse' : ''
          }`}
        >
          <div className="flex-1 space-y-5">
            <h3 className="text-3xl font-semibold text-blue-700">{shot.title}</h3>
            <p className="text-gray-600 text-lg">{shot.description}</p>
            <ul className="space-y-3">
              {shot.features.map((f, j) => (
                <motion.li
                  key={j}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: j * 0.1 }}
                  className="flex items-start gap-2 text-gray-700"
                >
                  <span className="mt-1 text-blue-600">✔</span>
                  {f}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="flex-1 relative">
            <div className="relative w-full pt-[60%] bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl shadow-xl overflow-hidden backdrop-blur-sm">
              <div className="absolute inset-2 bg-white rounded-lg overflow-hidden">
                <Image
                  src={shot.image}
                  alt={shot.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <div className="h-4 bg-gradient-to-r from-blue-200 to-blue-300 rounded-b-xl mt-1 relative">
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[15%] h-[3px] bg-blue-400/30 rounded-full" />
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  )
}
