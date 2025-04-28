"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="p-3 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center ">
          {/* Logo */}
          <div>
            <Link href="/" className={`text-2xl font-bold ${pathname === "/" ? "text-primary" : ""}`}>
              HoliStay
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-4 px-4 items-center">
            <Link href="/" className={`px-3 py-2 ${pathname === "/" ? "text-secondary/80 font-bold" : ""}`}>Home</Link>
            <Link href="/about" className={`px-3 py-2 ${pathname === "/about" ? "text-secondary/80 font-bold" : ""}`}>About</Link>
            <Link href="/services" className={`px-3 py-2 ${pathname === "/services" ? "text-secondary/80 font-bold" : ""}`}>Services</Link>
            <Link href="/contact" className={`px-3 py-2 ${pathname === "/contact" ? "text-secondary/80 font-bold" : ""}`}>Contact</Link>
            <Link href="/booking" className="bg-primary text-white px-3 py-2 rounded-md hover:bg-secondary transition duration-300">
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu with Animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden flex flex-col gap-4 mt-4 md:hidden"
            >
              <Link href="/" onClick={toggleMenu} className={`px-3 py-2 ${pathname === "/" ? "text-primary font-semibold" : ""}`}>Home</Link>
              <Link href="/about" onClick={toggleMenu} className={`px-3 py-2 ${pathname === "/about" ? "text-primary font-semibold" : ""}`}>About</Link>
              <Link href="/services" onClick={toggleMenu} className={`px-3 py-2 ${pathname === "/services" ? "text-primary font-semibold" : ""}`}>Services</Link>
              <Link href="/contact" onClick={toggleMenu} className={`px-3 py-2 ${pathname === "/contact" ? "text-primary font-semibold" : ""}`}>Contact</Link>
              <Link href="/booking" onClick={toggleMenu} className="bg-primary text-white px-3 py-2 rounded-md hover:bg-primary/90 transition">
                Book Now
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
