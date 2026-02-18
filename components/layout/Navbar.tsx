"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="text-white font-bold text-lg">
            Duygu Altunay
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-white">
            <Link href="#hakkimda">Hakkımda</Link>
            <Link href="#deneyim">Deneyim</Link>
            <Link href="#egitim">Eğitim</Link>
            <Link href="#yetenekler">Yetenekler</Link>
            <Link href="#projeler">Projeler</Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden text-white">
            <button onClick={() => setOpen(!open)}>
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/95 text-white px-4 pb-4 space-y-3">
          <Link href="#hakkimda" onClick={() => setOpen(false)}>Hakkımda</Link>
          <Link href="#deneyim" onClick={() => setOpen(false)}>Deneyim</Link>
          <Link href="#egitim" onClick={() => setOpen(false)}>Eğitim</Link>
          <Link href="#yetenekler" onClick={() => setOpen(false)}>Yetenekler</Link>
          <Link href="#projeler" onClick={() => setOpen(false)}>Projeler</Link>
        </div>
      )}
    </nav>
  );
}
