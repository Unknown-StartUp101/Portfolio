"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Facebook,
  X,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    // { icon: Facebook, href: "#", label: "Facebook" },
    { icon: X, href: "https://x.com/negaritsystems", label: "X" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/negarit-systems",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/negaritsystems",
      label: "Instagram",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
  ];

  const services = [
    { name: "Web Development", href: "#" },
    { name: "Mobile Apps", href: "#" },
    { name: "UI/UX Design", href: "#" },
    { name: "AI Solutions", href: "#" },
    { name: "Consulting", href: "#" },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-xl font-bold">Negarit Systems</span>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Building innovative technology solutions from Ethiopia to the
              world. We create scalable, impactful software that drives business
              growth.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Get In Touch</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-slate-300 text-sm">
                  Addis Ababa University, Institute of Technology, Ethiopia
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-slate-300 text-sm">+251911524940</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a 
                  href="mailto:negarit.system.tech@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 text-sm hover:text-blue-400 transition-colors"
                >
                  negarit.system.tech@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a 
                  href="https://www.linkedin.com/company/negarit-systems"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 text-sm hover:text-blue-400 transition-colors"
                >
                  https://www.linkedin.com/company/negarit-systems
                </a>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h4 className="text-sm font-semibold mb-3">Stay Updated</h4>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
                />
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Separator className="bg-slate-800" />

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-slate-400 text-sm"
          >
            © {currentYear} Negarit Systems. All rights reserved.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-6 text-sm"
          >
            <Link
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Cookie Policy
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
