
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/experience" },
  { label: "How I Work", href: "/#approach" },
  { label: "About", href: "/about" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  function isActive(href: string) {
    return href === pathname && href !== "/#projects";
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="text-lg font-bold tracking-tight text-slate-950"
        >
          William Sessions<span className="text-blue-600">.</span>
        </Link>

        <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`transition hover:text-blue-600 ${
                isActive(item.href) ? "text-blue-700" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <a
          href="/#contact"
          className="hidden items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600 md:inline-flex"
        >
          Let&apos;s Connect
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M7 17 17 7M7 7h10v10" />
          </svg>
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-800 md:hidden"
        >
          {menuOpen ? (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-slate-200 bg-white px-6 py-5 shadow-lg md:hidden"
        >
          <div className="flex flex-col gap-1">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`rounded-lg px-3 py-3 text-sm font-medium transition hover:bg-slate-50 hover:text-blue-600 ${
                  isActive(item.href)
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
