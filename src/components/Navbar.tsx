import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const leftLinks = [
  { label: "Admission", href: "/admission" },
  { label: "Blog", href: "/blog" },
];

const rightLinks = [
  { label: "Contact", href: "/contact" },
  { label: "About", href: "/about" },
];

const allLinks = [...leftLinks, ...rightLinks];

const linkClasses =
  "relative text-[0.95rem] font-medium uppercase tracking-[0.18em] text-[#fff7ef]/95 transition-colors duration-300 hover:text-white after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full";

function Wordmark() {
  return (
    <Link
      to="/"
      aria-label="Nure Arushi home"
      className="flex shrink-0 flex-col items-center leading-none text-[#101828] transition-opacity duration-300 hover:opacity-80"
    >
      <span className="text-[1.3rem] font-semibold uppercase tracking-[0.22em] sm:text-[1.45rem]">
        Nure
      </span>
      <span className="mt-0.5 border-y border-[#101828]/80 py-[2px] text-[1.3rem] font-semibold uppercase tracking-[0.18em] sm:text-[1.45rem]">
        Arushi
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white px-4 pt-4 sm:px-6 sm:pt-5 lg:px-10">
      <div
        className={`mx-auto max-w-[1400px] bg-[#f4731f] shadow-[0_14px_35px_rgba(244,115,31,0.28)] transition-[border-radius] duration-300 ${
          open ? "rounded-[2rem]" : "rounded-full"
        }`}
      >
        {/* Desktop */}
        <div className="hidden h-24 grid-cols-[1fr_auto_1fr] items-center px-10 md:grid xl:px-16">
          <nav
            className="flex items-center justify-evenly gap-8 pr-6"
            aria-label="Primary navigation left"
          >
            {leftLinks.map((link) => (
              <Link key={link.label} to={link.href} className={linkClasses}>
                {link.label}
              </Link>
            ))}
          </nav>

          <Wordmark />

          <nav
            className="flex items-center justify-evenly gap-8 pl-6"
            aria-label="Primary navigation right"
          >
            {rightLinks.map((link) => (
              <Link key={link.label} to={link.href} className={linkClasses}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile bar */}
        <div className="flex h-20 items-center justify-between px-6 md:hidden">
          <Wordmark />

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex items-center justify-center text-[#fff7ef] transition-colors duration-300 hover:text-white"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav
            className="flex flex-col px-6 pb-5"
            aria-label="Mobile navigation"
          >
            {allLinks.map((link, index) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setOpen(false)}
                className={`px-1 py-4 text-sm font-medium uppercase tracking-[0.18em] text-[#fff7ef]/95 transition-colors duration-300 hover:text-white ${
                  index < allLinks.length - 1 ? "border-b border-white/20" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
