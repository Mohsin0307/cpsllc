"use client";

import { motion } from "framer-motion";
import { 
  FileText, 
  Calculator, 
  CreditCard, 
  Lightbulb, 
  Users, 
  Megaphone, 
  Laptop, 
  Network, 
  Shield, 
  Building,
  ArrowRight,
  Check
} from "lucide-react";

type ColorKey = 'blue' | 'emerald' | 'purple' | 'orange' | 'indigo' | 'pink' | 'cyan' | 'teal' | 'red' | 'amber';

export default function ServicesPage() {
  const services = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Administrative Support",
      description: "Keep your operations running smoothly with our efficient administrative services.",
      features: [
        "Virtual assistant and secretarial services",
        "Email and calendar management",
        "Document processing and data entry",
        "CRM and database management",
        "Office workflow setup and optimisation"
      ],
      color: "blue"
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Accounting & Financial Management",
      description: "Stay compliant and financially healthy with our expert accounting services.",
      features: [
        "Bookkeeping and financial reporting",
        "Payroll and pension management",
        "VAT returns and tax preparation",
        "Budgeting and cash flow forecasting",
        "Financial performance reviews"
      ],
      color: "emerald"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Credit Control & Debt Recovery",
      description: "We help you maintain a strong cash flow and minimize overdue payments.",
      features: [
        "Invoice processing and payment tracking",
        "Credit checks and risk management",
        "Payment reminders and debtor communication",
        "Dispute resolution and collection support"
      ],
      color: "purple"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Business Consultancy",
      description: "Strategic insight for smarter decisions.",
      features: [
        "Business planning and performance improvement",
        "Market research and feasibility studies",
        "Operational efficiency reviews",
        "Risk and compliance assessment",
        "Change management and restructuring"
      ],
      color: "orange"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Human Resources & Staffing",
      description: "Build the team your business deserves.",
      features: [
        "Recruitment and onboarding",
        "HR policy creation and compliance",
        "Employee relations and performance management",
        "Payroll and benefits administration",
        "Outsourced HR and interim staffing"
      ],
      color: "indigo"
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Marketing & Branding",
      description: "Grow your audience and strengthen your presence.",
      features: [
        "Brand strategy and visual identity",
        "Website content and SEO",
        "Social media management",
        "Email marketing and campaigns",
        "Market positioning and competitor analysis"
      ],
      color: "pink"
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "IT & Digital Solutions",
      description: "Empower your business through technology.",
      features: [
        "IT setup, support, and cybersecurity",
        "Software integration and data management",
        "Cloud migration and system optimisation",
        "Digital transformation consulting"
      ],
      color: "cyan"
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Networking & Business Development",
      description: "We connect you to opportunities that help your business grow.",
      features: [
        "B2B matchmaking and introductions",
        "Event organisation and networking support",
        "Supplier and partner sourcing",
        "Strategic collaborations and partnerships"
      ],
      color: "teal"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Compliance & Legal Administration",
      description: "We help ensure your business operates within all legal frameworks.",
      features: [
        "Business registration and licensing",
        "GDPR and data protection",
        "Health and safety documentation",
        "Policy drafting and procedure manuals",
        "Contract support and record-keeping"
      ],
      color: "red"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Virtual Office & Outsourcing",
      description: "Professional presence, zero overheads.",
      features: [
        "Virtual address and call answering",
        "Mail handling and forwarding",
        "Remote admin, HR, or finance teams",
        "Complete back-office outsourcing"
      ],
      color: "amber"
    }
  ];

  const getColorClasses = (color: ColorKey) => {
    const colors = {
      blue: { bg: "bg-blue-50", icon: "text-blue-600", border: "border-blue-200", hover: "hover:border-blue-400" },
      emerald: { bg: "bg-emerald-50", icon: "text-emerald-600", border: "border-emerald-200", hover: "hover:border-emerald-400" },
      purple: { bg: "bg-purple-50", icon: "text-purple-600", border: "border-purple-200", hover: "hover:border-purple-400" },
      orange: { bg: "bg-orange-50", icon: "text-orange-600", border: "border-orange-200", hover: "hover:border-orange-400" },
      indigo: { bg: "bg-indigo-50", icon: "text-indigo-600", border: "border-indigo-200", hover: "hover:border-indigo-400" },
      pink: { bg: "bg-pink-50", icon: "text-pink-600", border: "border-pink-200", hover: "hover:border-pink-400" },
      cyan: { bg: "bg-cyan-50", icon: "text-cyan-600", border: "border-cyan-200", hover: "hover:border-cyan-400" },
      teal: { bg: "bg-teal-50", icon: "text-teal-600", border: "border-teal-200", hover: "hover:border-teal-400" },
      red: { bg: "bg-red-50", icon: "text-red-600", border: "border-red-200", hover: "sshover:border-red-400" },
      amber: { bg: "bg-amber-50", icon: "text-amber-600", border: "border-amber-200", hover: "hover:border-amber-400" }
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-white mt-5">
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Our Services — Complete Support for{' '}
              <span className="text-blue-600">Every Business Function</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
              We understand that every business is unique, which is why we tailor our services to meet your specific needs. Whether you need a single solution or full operational outsourcing, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, index) => {
              const colors = getColorClasses(service.color as ColorKey);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                  className={`bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all border-2 ${colors.border} ${colors.hover}`}
                >
                  <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center mb-6 ${colors.icon}`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 ${colors.icon} flex-shrink-0 mt-0.5`} />
                        <span className="text-sm text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700"></div>
        
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
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Looking for a Complete Support Package?
            </h2>
            
            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Explore our flexible service bundles and build a solution that fits your business perfectly.
            </p>

            <button className="group bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition font-semibold shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto transform hover:scale-105">
              Get a Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}