import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Admission", href: "/admission" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b border-white/10 bg-gradient-to-r from-[#a44f18] via-[#c96a2b] to-[#b85d22] shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
      <div className="flex h-20 items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-16">
        <Link
          to="/"
          className="shrink-0 text-[1.35rem] font-normal tracking-[0.14em] text-[#fff7ef] transition-opacity duration-300 hover:opacity-85 sm:text-[1.55rem]"
          style={{ fontFamily: '"Cormorant Garamond", "Times New Roman", serif' }}
          aria-label="Nure Arushi home"
        >
          Nure Arushi
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="relative text-sm font-medium tracking-[0.14em] text-[#fff7ef]/90 transition-colors duration-300 hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              style={{ letterSpacing: "0.14em" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex items-center justify-center text-[#fff7ef] transition-colors duration-300 hover:text-white md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-white/10 bg-[#bb6125] md:hidden transition-all duration-300 ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-5 py-4 sm:px-8" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 px-1 py-4 text-sm font-medium tracking-[0.14em] text-[#fff7ef]/90 transition-colors duration-300 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
