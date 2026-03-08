"use client";
import Link from "next/link";
import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const navLinks = [
  { href: "#", label: "Home" },
  { href: "#events", label: "Events" },
  { href: "#fighters", label: "Fighters" },
  { href: "#results", label: "Results" },
  { href: "#about", label: "About" },
  { href: "#news", label: "News" },
  { href: "#shop", label: "Shop" },
];

const socials = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Twitter, href: "#", label: "Twitter/X" },
];

export default function Footer() {
  return (
    <footer className="bg-[#060606] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-12">
          {/* Nav links — red */}
          <div>
            <div className="mb-6 sm:mb-8">
              <img
                src={`${basePath}/images/logo.png`}
                alt="EMX Sports"
                className="h-16"
              />
            </div>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-heading font-bold text-xs text-[#c41e3a] hover:text-white uppercase tracking-[0.15em] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Office info */}
          <div>
            <h4 className="font-heading font-bold text-[10px] text-gray-600 uppercase tracking-[0.25em] mb-5 sm:mb-6">
              Office
            </h4>
            <div className="text-gray-500 text-sm space-y-1 leading-relaxed">
              <p className="text-gray-400">EMX Sports</p>
              <p>Riga, Latvia</p>
              <p className="mt-4">
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
            <div className="flex gap-5">
              {socials.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-gray-600 hover:text-white transition-colors duration-300"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/5 py-5 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-700 text-[10px] sm:text-xs tracking-wider">
            © 2026 EMX Sports. All rights reserved.
          </p>
          <div className="flex gap-5 sm:gap-6">
            <Link href="#" className="text-gray-700 hover:text-gray-400 text-[10px] sm:text-xs tracking-wider transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-700 hover:text-gray-400 text-[10px] sm:text-xs tracking-wider transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
