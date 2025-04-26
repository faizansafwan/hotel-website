"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    return (
        <div className="p-3 bg-white shadow-md">
            <nav>
                <div className="flex justify-between items-center">
                    <div>
                        <Link href="/" className={`text-2xl font-bold ${pathname === "/" ? "active" : ""}`}>HoliStay</Link>
                    </div>
                    <div className="flex gap-4 px-4">
                        <Link href="/" className={`px-3 py-2 ${pathname === "/" ? "active" : ""}`}>Home</Link>
                        <Link href="/about" className={`px-3 py-2 ${pathname === "/about" ? "active" : ""}`}>About</Link>
                        <Link href="/services" className={`px-3 py-2 ${pathname === "/services" ? "active" : ""}`}>Services</Link>
                        <Link href="/contact" className={`px-3 py-2 ${pathname === "/contact" ? "active" : ""}`}>Contact</Link>
                        <Link href="/booking" className={`bg-primary text-white px-3 py-2 rounded-md ${pathname === "/booking" ? "active" : ""}`}>Book Now</Link>
                    </div>
                </div>
                
            </nav>
        </div>
    )
}