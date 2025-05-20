'use client'
import { HoverEffect } from "../components/ui/card-hover-effect"

const features = [
  { icon: "📊", title: "User Interface Reports", description: "Comprehensive analytics and reporting dashboard" },
  { icon: "📩", title: "Enquiry Management", description: "Streamlined handling of recruitment inquiries" },
  { icon: "📢", title: "Advertise Job Openings", description: "Easy job posting and distribution" },
  { icon: "📝", title: "Candidate Job Application", description: "Simplified application process" },
  { icon: "✅", title: "Shortlisting Candidates", description: "Efficient candidate screening" },
  { icon: "🔁", title: "Enquiry Follow-Up", description: "Automated follow-up system" },
  { icon: "🎤", title: "Interview Scheduling", description: "Seamless interview coordination" },
  { icon: "📄", title: "Offer Letter Generation", description: "Automated offer letter creation" },
  { icon: "🔍", title: "Background Verification", description: "Thorough candidate verification" },
]

export default function Features() {
  // Map features to HoverEffect format (add icon to title for fun)
  const items = features.map(f => ({
    title: `${f.icon} ${f.title}`,
    description: f.description,
    link: "#", // or you can omit this if not needed
  }))

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Key Features
        </h2>
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={items} />
        </div>
      </div>
    </section>
  )
}