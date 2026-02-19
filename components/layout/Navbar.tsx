"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 z-50 w-full px-4">
        <div
          className={`mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-2xl border px-6 py-4 transition-all
          ${
            scrolled
              ? "bg-black/60 backdrop-blur-xl border-white/10 shadow-xl"
              : "bg-transparent border-transparent"
          }`}
        >
          <Link href="/" className="font-semibold text-white">
            Duygu Altunay
          </Link>

          {/* Desktop */}
          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-zinc-300 hover:text-white transition"
              >
                {item.name}
              </Link>
            ))}

            <a
              href="/files/Duygu-Altunay-CV.pdf"
              target="_blank"
              className="rounded-xl bg-blue-500 px-4 py-2 text-white text-sm"
            >
              CV
            </a>
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-white text-xl"
          >
            ☰
          </button>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* background blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-md"
            />

            {/* menu panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 120 }}
              className="fixed right-0 top-0 z-50 h-full w-[80%] max-w-sm bg-black border-l border-white/10 p-6"
            >
              {/* close button */}
              <button
                onClick={() => setMenuOpen(false)}
                className="mb-8 text-white text-xl"
              >
                ✕
              </button>

              {/* MENU ITEMS */}
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white backdrop-blur-lg transition hover:border-blue-500/40 hover:bg-blue-500/10"
                  >
                    {item.name}
                  </Link>
                ))}

                {/* CV BUTTON */}
                <a
                  href="/files/Duygu-Altunay-CV.pdf"
                  target="_blank"
                  className="rounded-2xl bg-blue-500 px-5 py-4 text-center text-white font-medium hover:bg-blue-400"
                >
                  Download CV
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
