"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Streamline Your Business?
          </h2>
          
          <p className="text-lg sm:text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Get in touch today for a free consultation and discover how we can make your operations run like clockwork.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="group bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition font-semibold shadow-lg hover:shadow-xl flex items-center gap-2 transform hover:scale-105 w-full sm:w-auto">
              Contact Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </button>
            
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition font-semibold flex items-center gap-2 transform hover:scale-105 w-full sm:w-auto">
              <Phone className="w-5 h-5" />
              Schedule a Call
            </button>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center text-blue-100"
          >
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span className="text-sm">+1 (845) 904-7626</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-blue-300"></div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span className="text-sm">contact@cpsllc.com</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}