"use client";
import Link from "next/link";
import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";

const navLinks = [
  { href: "#events", label: "Events" },
  { href: "#fighters", label: "Fighters" },
  { href: "#results", label: "Results" },
  { href: "#about", label: "About" },
  { href: "#news", label: "News" },
];

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Twitter, href: "#", label: "Twitter/X" },
];

export default function Footer() {
  return (
    <footer className="bg-[#060606] border-t border-gray-900">
      {/* CTA bar */}
      <div className="bg-[#c41e3a] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading font-bold text-3xl sm:text-4xl text-white uppercase">
              Be Part of Fight Night
            </h3>
            <p className="text-red-200 mt-1">February 21, 2026 · Xiaomi Arena, Riga</p>
          </div>
          <Link
            href="#events"
            className="bg-white text-[#c41e3a] hover:bg-gray-100 font-heading font-bold tracking-widest text-sm px-10 py-4 uppercase transition-colors whitespace-nowrap"
          >
            Buy Tickets Now
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#c41e3a] flex items-center justify-center">
                  <span className="text-white font-heading font-bold text-sm">EMX</span>
                </div>
                <div>
                  <div className="font-heading font-bold text-xl tracking-wider text-white">
                    EMX SPORTS
                  </div>
                  <div className="text-[10px] tracking-[0.2em] text-gray-500 uppercase">
                    Professional Boxing
                  </div>
                </div>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed max-w-sm mb-6">
                EMX Sports is a dynamic professional boxing promotion company dedicated to advancing the sport through high-quality events and athlete development. Where champions are made.
              </p>
              {/* Socials */}
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 border border-gray-800 hover:border-[#c41e3a] hover:bg-[#c41e3a]/10 flex items-center justify-center text-gray-400 hover:text-white transition-all"
                  >
                    <Icon size={16} />
                  </Link>
                ))}
              </div>
            </div>

            {/* Nav */}
            <div>
              <h4 className="font-heading font-semibold tracking-widest text-xs text-gray-500 uppercase mb-6">
                Navigation
              </h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-heading text-sm text-gray-400 hover:text-white uppercase tracking-wider transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading font-semibold tracking-widest text-xs text-gray-500 uppercase mb-6">
                Contact
              </h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>
                  <span className="block text-gray-600 text-xs uppercase tracking-widest mb-1">Email</span>
                  <a href="mailto:info@emxsports.com" className="hover:text-white transition-colors">
                    info@emxsports.com
                  </a>
                </li>
                <li>
                  <span className="block text-gray-600 text-xs uppercase tracking-widest mb-1">Location</span>
                  Riga, Latvia
                </li>
                <li>
                  <span className="block text-gray-600 text-xs uppercase tracking-widest mb-1">Press</span>
                  <a href="mailto:press@emxsports.com" className="hover:text-white transition-colors">
                    press@emxsports.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs font-heading tracking-wider">
            © 2026 EMX Sports. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-gray-600 hover:text-gray-400 text-xs tracking-wider transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-400 text-xs tracking-wider transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
