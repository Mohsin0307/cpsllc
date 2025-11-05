"use client";

import { motion } from "framer-motion";
import { Shield, Target, Heart, Users, Award, Lock } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Integrity",
      description: "We do what's right, every time.",
    },
    {
      icon: <Target className="w-8 h-8 text-emerald-600" />,
      title: "Efficiency",
      description: "We optimise processes for peak performance.",
    },
    {
      icon: <Lock className="w-8 h-8 text-purple-600" />,
      title: "Confidentiality",
      description: "Your business information stays secure.",
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: "Partnership",
      description: "We work as an extension of your team.",
    },
    {
      icon: <Award className="w-8 h-8 text-indigo-600" />,
      title: "Excellence",
      description: "We aim for outstanding results in every task.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 right-10 w-96 h-96 bg-blue-200 rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Who We Are
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg text-slate-700 leading-relaxed"
          >
            <p>
              <span className="font-semibold text-slate-900">CPS LLC</span> is a multidisciplinary business support firm committed to helping organisations thrive in every stage of growth. Our mission is simple — to provide professional, reliable, and scalable support that allows you to focus on strategic priorities while we handle the day-to-day complexities of running a business.
            </p>
            
            <p>
              Founded on principles of trust, integrity, and excellence, we bring together a team of specialists with decades of experience across multiple industries — including finance, operations, human resources, and digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Our Vision
              </h2>
              <p className="text-slate-700 leading-relaxed">
                To be the most trusted business support partner globally, empowering companies to operate efficiently, grow sustainably, and reach their full potential.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-emerald-600" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Our Mission
              </h2>
              <p className="text-slate-700 leading-relaxed">
                To deliver innovative, cost-effective, and comprehensive business solutions that help clients save time, reduce costs, and achieve measurable results.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {values.map((value, index) => (
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
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900 text-center">
                  {value.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed text-center">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how CPS LLC can support your business goals
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
              Get in Touch
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}