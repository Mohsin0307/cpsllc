"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 overflow-hidden">
      {/* Animated Background Elements */}
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
          className="absolute top-20 left-10 w-96 h-96 bg-blue-200 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-200 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6"
              >
                <span className="text-blue-700 text-sm font-medium">🌍 Your Trusted Business Partner</span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Comprehensive Business Support Services for{' '}
                <span className="text-blue-600">Every Sector</span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-slate-700 font-medium mb-6">
                Your trusted partner in growth, efficiency, and success.
              </p>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-4">
                At CPS LLC, we help businesses of all sizes operate smarter, grow faster, and achieve long-term success. Whether you need administrative support, financial management, strategic consultancy, or staffing solutions, our expert team delivers reliable, flexible, and cost-effective services tailored to your goals.
              </p>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                From startups to established enterprises, we provide the operational foundation you need to focus on what truly matters — running and expanding your business.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="group bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </button>
              <button className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg hover:border-slate-400 hover:bg-slate-50 transition transform hover:scale-105">
                Explore Services
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Hero Image - replace src with your actual image URL */}
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 relative">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop" 
                  alt="Business team collaboration"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay gradient for better text visibility if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-400 rounded-full blur-2xl opacity-50"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-indigo-400 rounded-full blur-2xl opacity-50"></div>
            </div>

            {/* Floating card - optional decorative element */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs hidden lg:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Quality Guaranteed</p>
                  <p className="text-sm text-slate-600">Expert solutions tailored for you</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}