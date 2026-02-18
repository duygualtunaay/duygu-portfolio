"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Hakkımda", href: "#hakkimda" },
    { name: "Deneyim", href: "#deneyim" },
    { name: "Eğitim", href: "#egitim" },
    { name: "Yetenekler", href: "#yetenekler" },
    { name: "Projeler", href: "#projeler" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="text-white font-bold text-lg tracking-wide">
            Duygu Altunay
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-3">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="
                  px-4 py-2
                  rounded-full
                  text-sm
                  border border-white/20
                  bg-white/5
                  hover:bg-gradient-to-r
                  hover:from-blue-500/20
                  hover:to-purple-500/20
                  hover:border-white/40
                  transition-all
                  duration-300
                  text-white
                  shadow-sm
                  hover:shadow-blue-500/20
                "
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Button */}
          <div className="md:hidden text-white">
            <button onClick={() => setOpen(!open)}>
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/95 backdrop-blur-md px-6 pb-6 pt-2 space-y-3 border-t border-white/10">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={() => setOpen(false)}
              className="
                block
                px-4 py-3
                rounded-xl
                border border-white/20
                bg-white/5
                hover:bg-gradient-to-r
                hover:from-blue-500/20
                hover:to-purple-500/20
                transition-all
                duration-300
                text-white
              "
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
