"use client";

import { motion } from "framer-motion";
import { Briefcase, Globe2, Cpu, Clock } from "lucide-react";

const highlights = [
  {
    icon: <Briefcase className="w-8 h-8 text-blue-600" />,
    title: "Full-Service Support",
    description: "Full-service business support across every sector.",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-emerald-600" />,
    title: "Experienced Professionals",
    description: "Experienced professionals in finance, HR, and operations.",
  },
  {
    icon: <Clock className="w-8 h-8 text-purple-600" />,
    title: "Flexible Solutions",
    description: "Flexible solutions for short or long-term needs.",
  },
  {
    icon: <Globe2 className="w-8 h-8 text-orange-600" />,
    title: "Local Knowledge, Global Reach",
    description: "Local knowledge, global reach.",
  },
  {
    icon: <Cpu className="w-8 h-8 text-indigo-600" />,
    title: "Confidential & Compliant",
    description: "Confidential, compliant, and results-driven.",
  },
];

export default function Highlights() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Why Businesses Choose <span className="text-blue-600">CPS LLC</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We combine expertise, innovation, and dedication to deliver exceptional results for your business
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-shadow border border-slate-100"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}