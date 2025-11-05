"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Briefcase } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Terms and Conditions", href: "/terms" },

  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200">
      <div className="max-w-7xls mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <Briefcase className="w-8 h-8 text-blue-600 group-hover:text-blue-700 transition" />
          <div>
            <div className="text-xl font-bold text-slate-900">CPS LLC  </div>
            <div className="text-xs text-slate-600 -mt-1">Business Solutions <br /> EIN#: 385765109</div>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-700 hover:text-blue-600 font-medium transition"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/contact"
            className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition shadow-md hover:shadow-lg transform hover:scale-105"
          >
            Get Free Consultation
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-slate-700 hover:text-blue-600 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg overflow-hidden border-t border-slate-200"
          >
            <div className="flex flex-col items-center py-6 space-y-4">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-700 hover:text-blue-600 font-medium transition text-lg"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition shadow-md w-4/5 text-center"
                onClick={() => setMenuOpen(false)}
              >
                Get Free Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}