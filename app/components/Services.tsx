"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  FileText, 
  Calculator, 
  CreditCard, 
  Lightbulb, 
  Users, 
  Megaphone, 
  ArrowRight
} from "lucide-react";

type ColorKey = 'blue' | 'emerald' | 'purple' | 'orange' | 'indigo' | 'pink';

export default function Services() {
  const services = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Administrative Support",
      description: "Efficient admin services to keep your operations smooth.",
      color: "blue"
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Accounting & Financial Management",
      description: "Expert accounting to keep you compliant and financially healthy.",
      color: "emerald"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Credit Control & Debt Recovery",
      description: "Maintaining strong cash flow by minimizing overdue payments.",
      color: "purple"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Business Consultancy",
      description: "Strategic insight for smarter, more effective business decisions.",
      color: "orange"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Human Resources & Staffing",
      description: "Building the dedicated, skilled team your business deserves.",
      color: "indigo"
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Marketing & Branding",
      description: "Grow your audience and strengthen your market presence.",
      color: "pink"
    }
  ];

  const getColorClasses = (color: ColorKey) => {
    const colors = {
      blue: { bg: "bg-blue-50", icon: "text-blue-600", border: "border-blue-200", hover: "hover:border-blue-400" },
      emerald: { bg: "bg-emerald-50", icon: "text-emerald-600", border: "border-emerald-200", hover: "hover:border-emerald-400" },
      purple: { bg: "bg-purple-50", icon: "text-purple-600", border: "border-purple-200", hover: "hover:border-purple-400" },
      orange: { bg: "bg-orange-50", icon: "text-orange-600", border: "border-orange-200", hover: "hover:border-orange-400" },
      indigo: { bg: "bg-indigo-50", icon: "text-indigo-600", border: "border-indigo-200", hover: "hover:border-indigo-400" },
      pink: { bg: "bg-pink-50", icon: "text-pink-600", border: "border-pink-200", hover: "hover:border-pink-400" }
    };
    return colors[color] || colors.blue;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Our Core Services</h2>
          <p className="mt-4 text-lg text-slate-600">A glimpse into how we can support your business.</p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color as ColorKey);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border ${colors.border} ${colors.hover}`}
              >
                <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center mb-4 ${colors.icon}`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{service.title}</h3>
                <p className="text-slate-500 text-sm">{service.description}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/services">
            <p className="group inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors transform hover:scale-105">
              View All Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
