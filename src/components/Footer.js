"use client"

import { FaMapMarkerAlt, FaPhoneAlt, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-secondary/60  mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Content Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-muted">Ready to Experience Luxury?</h2>
          <p className="mb-6">
            Book your stay at Holi Stay today and discover the perfect blend of comfort, luxury, and natural beauty.
          </p>
          <a href="/booking"><motion.button 
            whileHover={{ scale: 1.05 }}
            className="group bg-primary text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-all duration-300"
          >
            Book your stay
            <motion.span
              className="inline-block transition-transform duration-300 group-hover:translate-x-2"
            >
              →
            </motion.span>
          </motion.button></a>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-muted">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-primary/40" />
              Colombo, Sri Lanka
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-primary/40" />
              +94 77 123 4567
            </li>
            <li className="flex items-center gap-3">
              <MdEmail className="text-primary/40" />
              info@holistay.lk
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-muted">Quick Links</h3>
          <ul className="space-y-2">
            {[{name:"Home", href: "/"}, {name: "About Us", href: "/about"}, {name:"Services", href:"/services"}, 
            {name:"Contact", href: "/contact"}, {name: "Privacy Policy", href: "privacy"}, 
            {name:"Terms of Service", href: "/terms"} ].map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="hover:text-primary transition-colors duration-300">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-muted">Follow Us</h3>
          <p className="mb-4">Stay connected with us on social media for special offers and updates.</p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-800 hover:text-primary/40 text-2xl transition-colors duration-300">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-800 hover:text-primary/40 text-2xl transition-colors duration-300">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-800 hover:text-primary/40 text-2xl transition-colors duration-300">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center py-4 text-sm bg-secondary/80">
        © {new Date().getFullYear()} Holi Stay. All rights reserved.
      </div>
    </footer>
  );
}
