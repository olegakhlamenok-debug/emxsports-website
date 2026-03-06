"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#events", label: "Events" },
  { href: "#fighters", label: "Fighters" },
  { href: "#results", label: "Results" },
  { href: "#about", label: "About" },
  { href: "#news", label: "News" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-md shadow-lg shadow-black/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#c41e3a] flex items-center justify-center">
              <span className="text-white font-heading font-bold text-sm">EMX</span>
            </div>
            <div>
              <div className="font-heading font-bold text-xl tracking-wider text-white group-hover:text-[#c41e3a] transition-colors">
                EMX SPORTS
              </div>
              <div className="text-[10px] tracking-[0.2em] text-gray-400 uppercase">
                Professional Boxing
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-heading font-medium tracking-wider text-sm text-gray-300 hover:text-white uppercase transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#c41e3a] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <Link
              href="#events"
              className="bg-[#c41e3a] hover:bg-[#a01830] text-white font-heading font-semibold tracking-wider text-sm px-6 py-2.5 uppercase transition-colors"
            >
              Buy Tickets
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-gray-800">
          <div className="px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block font-heading font-medium tracking-wider text-gray-300 hover:text-white uppercase text-sm py-2"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#events"
              className="block bg-[#c41e3a] text-white font-heading font-semibold tracking-wider text-sm px-6 py-3 uppercase text-center"
              onClick={() => setMenuOpen(false)}
            >
              Buy Tickets
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
