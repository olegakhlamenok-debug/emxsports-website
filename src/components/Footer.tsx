"use client";
import Link from "next/link";
import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";

const navLinks = [
  { href: "#", label: "Home" },
  { href: "#events", label: "Events" },
  { href: "#fighters", label: "Fighters" },
  { href: "#results", label: "Results" },
  { href: "#about", label: "About" },
  { href: "#news", label: "News" },
];

const socials = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Twitter, href: "#", label: "Twitter/X" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-3 gap-12">
          {/* Nav links — red like Matchroom */}
          <div>
            {/* Logo mark */}
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-white flex items-center justify-center">
                <span className="text-[#0a0a0a] font-heading font-bold text-xs">EMX</span>
              </div>
            </div>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-heading font-bold text-sm text-[#c41e3a] hover:text-white uppercase tracking-wider transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Office info */}
          <div>
            <h4 className="font-heading font-bold text-xs text-gray-500 uppercase tracking-widest mb-6">
              Office
            </h4>
            <div className="text-gray-500 text-sm space-y-1 leading-relaxed">
              <p>EMX Sports</p>
              <p>Riga, Latvia</p>
              <p className="mt-4">
                <a
                  href="mailto:info@emxsports.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  info@emxsports.com
                </a>
              </p>
              <p>
                <a
                  href="mailto:press@emxsports.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  press@emxsports.com
                </a>
              </p>
            </div>
          </div>

          {/* Social */}
          <div className="flex sm:justify-end items-start">
            <div className="flex gap-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800/30 py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-700 text-xs tracking-wider">
            © 2026 EMX Sports. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-gray-700 hover:text-gray-500 text-xs tracking-wider transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-700 hover:text-gray-500 text-xs tracking-wider transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
