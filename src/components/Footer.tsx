"use client";
import Link from "next/link";
import { Instagram } from "lucide-react";

const navColumns = [
  [
    { href: "#", label: "Home" },
    { href: "#articles", label: "News" },
    { href: "/events/", label: "Events" },
  ],
  [
    { href: "#fighters", label: "Fighters" },
    { href: "#results", label: "Results" },
    { href: "#videos", label: "Videos" },
  ],
  [
    { href: "#news", label: "Media" },
    { href: "#shop", label: "Shop" },
    { href: "#about", label: "About" },
  ],
];

export default function Footer() {
  return (
    <footer className="bg-[#060606] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-8 sm:gap-12">
          {navColumns.map((col, i) => (
            <ul key={i} className="space-y-2.5">
              {col.map((link) => (
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
          ))}

          {/* Office */}
          <div className="col-span-3 sm:col-span-1 border-t border-white/5 sm:border-t-0 pt-6 sm:pt-0">
            <h4 className="font-heading font-bold text-[10px] text-gray-600 uppercase tracking-[0.25em] mb-5 sm:mb-6">
              Office
            </h4>
            <div className="text-gray-500 text-sm space-y-1 leading-relaxed">
              <p className="text-gray-400">EMX Sports</p>
              <p>Riga, Latvia</p>
              <p className="mt-4">
                <a
                  href="mailto:promotion@emxsports.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  promotion@emxsports.com
                </a>
              </p>
            </div>
            <div className="mt-6">
              <a
                href="https://www.instagram.com/emx.sports/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-600 hover:text-white transition-colors duration-300"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
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
