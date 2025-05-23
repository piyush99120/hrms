'use client'
import React from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  CheckCircle2, Users, Wallet, Building2, Settings2,
  FileText, Briefcase, ClipboardList, Star, CalendarCheck2, UserCheck, ShieldCheck, TrendingUp, Banknote, Globe, Layers, UserCog, FileSpreadsheet, FolderCog, ArrowUpRight, ArrowDownLeft, UserPlus, UserMinus, FileCheck2, FileX2, FilePlus2, FileMinus2, FileSearch2, User2, Users2, Building, Settings, DollarSign, Award, Lock, Key, Globe2, MapPin, Map, Flag, Home, Layers2, ClipboardCheck, ClipboardX, ClipboardPlus, ClipboardMinus, Clock
} from 'lucide-react'

// Example icon mapping for details (add more as needed)
const detailIcons: Record<string, React.ReactNode> = {
  'Enquiry Management': <FileText className="w-6 h-6" />,
  'Advertise': <Briefcase className="w-6 h-6" />,
  'Candidate Job Application': <ClipboardList className="w-6 h-6" />,
  'Short listing - Candidate': <Star className="w-6 h-6" />,
  'Enquiry Follow-up': <CalendarCheck2 className="w-6 h-6" />,
  'Interview Process Candidate': <UserCheck className="w-6 h-6" />,
  'Offer Letter Candidate': <FileText className="w-6 h-6" />,
  'Candidate Verifiction': <ShieldCheck className="w-6 h-6" />,
  'Leave Application': <FileText className="w-6 h-6" />,
  'Leave Approval': <CheckCircle2 className="w-6 h-6" />,
  'Rule Name Master': <ClipboardList className="w-6 h-6" />,
  'Rule Manager SetUp': <UserCog className="w-6 h-6" />,
  'Rule Manager Set Up Register': <ClipboardCheck className="w-6 h-6" />,
  'Salary Allowance': <Banknote className="w-6 h-6" />,
  'Salary Configuration': <Settings2 className="w-6 h-6" />,
  'Bonus Type Master': <Award className="w-6 h-6" />,
  'Bonus Setting': <Settings className="w-6 h-6" />,
  'Salary Manager': <DollarSign className="w-6 h-6" />,
  'Salary Manager Bulk Insert': <ArrowUpRight className="w-6 h-6" />,
  'Deduction Manager': <ArrowDownLeft className="w-6 h-6" />,
  'Day Adjustment': <CalendarCheck2 className="w-6 h-6" />,
  'Day Adjust Approval': <CheckCircle2 className="w-6 h-6" />,
  'Client Visit Application': <UserPlus className="w-6 h-6" />,
  'Client Visit Approval': <UserCheck className="w-6 h-6" />,
  'Miscellaneous': <Layers className="w-6 h-6" />,
  'Miscellaneous Approval': <CheckCircle2 className="w-6 h-6" />,
  'Compensate Day Application': <CalendarCheck2 className="w-6 h-6" />,
  'Bulk Attendance': <Users2 className="w-6 h-6" />,
  'Attendance Filter Access File': <FileSpreadsheet className="w-6 h-6" />,
  'Attendance Excel File': <FileSpreadsheet className="w-6 h-6" />,
  'Attendance Filter Excel File': <FileSpreadsheet className="w-6 h-6" />,
  'Employee All Day Present': <User2 className="w-6 h-6" />,
  'Reset Over Time': <Clock className="w-6 h-6" />,
  'Employee Advance': <ArrowUpRight className="w-6 h-6" />,
  'Loan Check': <Banknote className="w-6 h-6" />,
  'Company wise Benefits': <Award className="w-6 h-6" />,
  'Bank Letter': <FileText className="w-6 h-6" />,
  'Employee Transfer': <ArrowUpRight className="w-6 h-6" />,
  'Employee All Present': <Users className="w-6 h-6" />,
  'Employee Bulk Insert': <ArrowUpRight className="w-6 h-6" />,
  'Salary Generator Bulk': <DollarSign className="w-6 h-6" />,
  'Salary Generator Single': <DollarSign className="w-6 h-6" />,
  'Employee Payment': <Banknote className="w-6 h-6" />,
  'Advance Loan Approva': <CheckCircle2 className="w-6 h-6" />,
  // Add more mappings for other details as needed...
}

const features = {
  recruitment: {
    title: 'Recruitment Management',
    icon: <Users className="w-6 h-6" />,
    description: 'Streamline your hiring process from job posting to onboarding.',
    details: [
      'Enquiry Management',
      'Advertise',
      'Candidate Job Application',
      'Short listing - Candidate',
      'Enquiry Follow-up',
      'Interview Process Candidate',
      'Offer Letter Candidate',
      'Candidate Verifiction'
    ]
  },
  payroll: {
    title: 'Payroll & Benefits',
    icon: <Wallet className="w-6 h-6" />,
    description: 'Manage employee compensation and benefits with ease.',
    details: [
      'Leave Application',
      'Leave Approval',
      'Rule Name Master',
      'Rule Manager SetUp',
      'Rule Manager Set Up Register',
      'Salary Allowance',
      'Salary Configuration',
      'Bonus Type Master',
      'Bonus Setting',
      'Salary Manager',
      'Salary Manager Bulk Insert',
      'Deduction Manager',
      'Day Adjustment',
      'Day Adjust Approval',
      'Client Visit Application',
      'Client Visit Approval',
      'Miscellaneous',
      'Miscellaneous Approval',
      'Compensate Day Application',
      'Bulk Attendance',
      'Attendance Filter Access File',
      'Attendance Excel File',
      'Attendance Filter Excel File',
      'Employee All Day Present',
      'Reset Over Time',
      'Employee Advance',
      'Loan Check',
      'Company wise Benefits',
      'Bank Letter',
      'Employee Transfer',
      'Employee All Present',
      'Employee Bulk Insert',
      'Salary Generator Bulk',
      'Salary Generator Single',
      'Employee Payment',
      'Advance Loan Approva'
    ]
  },
  hierarchy: {
    title: 'Organizational Hierarchy',
    icon: <Building2 className="w-6 h-6" />,
    description: 'Easily manage your company’s structure, locations, departments, and designations. Maintain masters for every organizational entity and keep your hierarchy organized and up to date.',
    details: [
      'Country Master',
      'State Master',
      'Zone Master',
      'District Master',
      'Division Master',
      'Designation Master',
      'Company Category',
      'Company Type',
      'Company Master',
      'Departments Master',
      'Terms and Conditions',
      'Unit Master',
      'Back Up Db'
    ]
  },
  useradmin: {
    title: 'User Administration',
    icon: <Settings2 className="w-6 h-6" />,
    description: 'Control user access, permissions, and system settings to ensure secure and efficient management of your HRMS platform.',
    details: [
      'Module Creation',
      'Module Authorization',
      'Module Page Assign',
      'Page Authorization',
      'Module Page Priority',
      'Password Change',
      'Currency Master',
      'Other Charges Settings',
      'Tax Creation',
      'Tax Setting'
    ]
  }
} as const

type FeatureKey = keyof typeof features

export default function Features() {
  const [selectedFeature, setSelectedFeature] = useState<FeatureKey>('recruitment')

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-pink-50 to-yellow-50">
      <div className="container mx-auto px-4 py-16 max-w-7xl relative z-10 ">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Features & Capabilities
        </h2>
        {/* Icon Tab Navigation */}
        <div className="flex justify-center gap-6 mb-10">
          {Object.entries(features).map(([key, feat]) => (
            <button
              key={key}
              onClick={() => setSelectedFeature(key as FeatureKey)}
              className={`flex flex-col items-center px-6 py-2 rounded-xl transition font-medium border-2
                ${selectedFeature === key
                  ? 'bg-blue-600 text-white border-blue-600 shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 border-transparent hover:bg-blue-100'
                }`}
            >
              <span>{feat.icon}</span>
              <span className="mt-2 text-sm">{feat.title}</span>
            </button>
          ))}
        </div>
        {/* Feature Card */}
        <div className="flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedFeature}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="w-full max-w-6xl bg-white/90 rounded-2xl shadow-xl p-10"
            >
              {/* Enhanced Details Grid with Grid Overlay */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.06
                    }
                  }
                }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
              >
                {features[selectedFeature].details.map((detail, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(0, 112, 244, 0.13)" }}
                    transition={{ duration: 0.3, delay: 0.1 + idx * 0.04, type: "spring" }}
                    className="relative overflow-hidden rounded-xl border border-gray-200 bg-gradient-to-br from-white to-blue-50 p-6 shadow group"
                  >
                    {/* Grid overlay */}
                    <svg
                      className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
                      width="100%" height="100%" viewBox="0 0 100 100"
                      style={{ minWidth: 120, minHeight: 120 }}
                    >
                      <defs>
                        <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#dbeafe" strokeWidth="0.5"/>
                        </pattern>
                        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                          <rect width="20" height="20" fill="url(#smallGrid)"/>
                          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#93c5fd" strokeWidth="1"/>
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                    {/* Icon and text */}
                    <div className="relative flex flex-col gap-2 z-10">
                      <span className="flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-600 rounded-full mb-2 shadow">
                        {detailIcons[detail] || <CheckCircle2 className="w-6 h-6" />}
                      </span>
                      <span className="text-lg font-semibold text-gray-900">{detail}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}