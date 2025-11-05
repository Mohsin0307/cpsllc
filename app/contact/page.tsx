"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  Globe,
  Linkedin,
  Twitter,
  Facebook
} from "lucide-react";

type ColorKey = 'blue' | 'emerald' | 'purple' | 'orange';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+1 (845) 904-7626",],
      color: "blue"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["contact@cpsllc.com", "support@cpsllc.com"],
      color: "emerald"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office",
      details: ["LUIS ALBERTO", "1337 REDBUD ST,", "WOODBRIDGE, VA 32191", "US"],
      color: "purple"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Weekend: By Appointment"],
      color: "orange"
    }
  ];

  const services = [
    "Administrative Support",
    "Accounting & Financial Management",
    "Credit Control & Debt Recovery",
    "Business Consultancy",
    "Human Resources & Staffing",
    "Marketing & Branding",
    "IT & Digital Solutions",
    "Networking & Business Development",
    "Compliance & Legal Administration",
    "Virtual Office & Outsourcing"
  ];

  const getColorClasses = (color: ColorKey) => {
    const colors = {
      blue: { bg: "bg-blue-50", icon: "text-blue-600" },
      emerald: { bg: "bg-emerald-50", icon: "text-emerald-600" },
      purple: { bg: "bg-purple-50", icon: "text-purple-600" },
      orange: { bg: "bg-orange-50", icon: "text-orange-600" }
    };
    return colors[color] || colors.blue;
  };

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

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
              <MessageSquare className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 text-sm font-medium">We're Here to Help</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Let's Start a{' '}
              <span className="text-blue-600">Conversation</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
              Have a question or ready to transform your business? Get in touch with our team and discover how CPS LLC can help you succeed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
              <section className="py-12 -mt-8 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {contactInfo.map((info, index) => {
                const colors = getColorClasses(info.color as ColorKey);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-slate-100"
                >
                  <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center mb-4 ${colors.icon}`}>
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-slate-600">{detail}</p>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Send Us a Message</h2>
                <p className="text-slate-600 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>
                
                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Service Interested In</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, idx) => (
                        <option key={idx} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your project or question..."
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                    ></textarea>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition font-semibold shadow-lg hover:shadow-xl flex items-center justify-center gap-2 transform hover:scale-105"
                  >
                    Send Message
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Why Choose Us */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Work With Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Fast Response Time</h4>
                      <p className="text-sm text-slate-600">We respond to all inquiries within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Free Consultation</h4>
                      <p className="text-sm text-slate-600">Get expert advice with no obligation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Tailored Solutions</h4>
                      <p className="text-sm text-slate-600">Custom packages designed for your business</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Proven Track Record</h4>
                      <p className="text-sm text-slate-600">Trusted by businesses across all sectors</p>
                    </div>
                  </div>
                </div>
              </div>

             

              {/* Map Placeholder */}
              <div className="bg-slate-100 rounded-2xl h-64 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                    <p className="text-slate-700 font-medium">LUIS ALBERTO
1337 REDBUD ST,
</p>
                    <p className="text-slate-600 text-sm">WOODBRIDGE, VA 32191
                    US</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
