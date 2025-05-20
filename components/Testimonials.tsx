'use client'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "HR Director",
    company: "Tech Solutions Inc.",
    image: "/testimonial1.jpg",
    quote: "This HRMS has transformed our hiring process. We've reduced time-to-hire by 40%!"
  },
  {
    name: "Michael Chen",
    role: "Recruitment Manager",
    company: "Global Innovations",
    image: "/testimonial2.jpg",
    quote: "The automated workflows and intuitive interface have made recruitment a breeze."
  },
  {
    name: "Emily Brown",
    role: "HR Manager",
    company: "StartUp Hub",
    image: "/testimonial3.jpg",
    quote: "Outstanding support and regular updates keep making the platform better."
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          What Our Clients Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4" />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}