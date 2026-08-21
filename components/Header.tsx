"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";
import { basePath } from "@/lib/basePath";
import { trackList } from "@/lib/tracks";

const primaryLinks = [
  { href: "/resources", label: "Resources" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };

  const scheduleCloseServices = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150);
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full bg-white/90 backdrop-blur-md transition-shadow ${
        scrolled ? "shadow-md shadow-black/5" : "shadow-none"
      }`}
    >
      <nav className="mx-auto flex h-20 w-[90%] max-w-6xl items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 text-xl font-bold text-primary"
        >
          <Image
            src={`${basePath}/logo.svg`}
            alt={`${site.name} logo`}
            width={40}
            height={26}
            className="h-8 w-auto object-contain"
            priority
          />
          {site.name}
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          <li
            className="relative"
            onMouseEnter={openServices}
            onMouseLeave={scheduleCloseServices}
          >
            <button
              type="button"
              className="flex items-center gap-1 font-medium text-secondary transition-colors hover:text-primary"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((open) => !open)}
            >
              Services
              <svg
                className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                viewBox="0 0 12 8"
                fill="none"
              >
                <path d="M1 1.5 6 6.5 11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-1/2 top-full w-80 -translate-x-1/2 pt-3"
                >
                  <div className="glass rounded-xl p-2 shadow-xl shadow-black/10">
                    {trackList.map((track) => (
                      <Link
                        key={track.id}
                        href={track.href}
                        className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-primary/5"
                        onClick={() => setServicesOpen(false)}
                      >
                        <span
                          className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                          style={{ backgroundColor: track.accent }}
                        />
                        <span>
                          <span className="block font-semibold text-primary">
                            {track.name}
                          </span>
                          <span className="block text-sm text-secondary">
                            {track.tagline}
                          </span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          {primaryLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-medium text-secondary transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/#contact"
              className="rounded-md bg-accent px-5 py-2.5 font-semibold text-white transition-colors hover:bg-accent-dark"
            >
              Contact
            </Link>
          </li>
        </ul>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-primary transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-primary transition-opacity ${menuOpen ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`h-0.5 w-6 bg-primary transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-black/5 bg-white md:hidden"
          >
            <ul className="flex flex-col gap-1 px-[5%] pt-2 pb-4">
              <li>
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-3 font-medium text-secondary"
                  onClick={() => setMobileServicesOpen((open) => !open)}
                >
                  Services
                  <svg
                    className={`h-3.5 w-3.5 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                    viewBox="0 0 12 8"
                    fill="none"
                  >
                    <path d="M1 1.5 6 6.5 11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {mobileServicesOpen && (
                  <ul className="pb-2 pl-3">
                    {trackList.map((track) => (
                      <li key={track.id}>
                        <Link
                          href={track.href}
                          onClick={() => setMenuOpen(false)}
                          className="block py-2 text-secondary hover:text-primary"
                        >
                          {track.shortName}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              {primaryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 font-medium text-secondary transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/#contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 block rounded-md bg-accent px-5 py-3 text-center font-semibold text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
