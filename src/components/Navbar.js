"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    return (
        <nav>
            <Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link>
            <Link href="/about" className={pathname === "/about" ? "active" : ""}>About</Link>
            <Link href="/services" className={pathname === "/services" ? "active" : ""}>Services</Link>
            <Link href="/contact" className={pathname === "/contact" ? "active" : ""}>Contact</Link>
        </nav>
    )
}