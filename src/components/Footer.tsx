import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type IconProps = { className?: string };

function FacebookIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

const MEDHAUP_URL = "https://medhaup.com"; // TODO: replace with the real MedhaUp link

const exploreLinks = [
  { label: "Admission", href: "/admission" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// TODO: replace "#" with real profile links
const socialLinks = [
  { label: "Facebook", href: "#", Icon: FacebookIcon },
  { label: "Instagram", href: "#", Icon: InstagramIcon },
  { label: "YouTube", href: "#", Icon: YoutubeIcon },
];

const footerLinkClasses =
  "relative inline-block text-[0.95rem] font-medium uppercase tracking-[0.18em] text-white/75 transition-colors duration-300 hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[#fe7b30] after:transition-all after:duration-300 hover:after:w-full";

export default function Footer() {
  const footerRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const footer = footerRef.current;
      if (!footer) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        gsap.set("[data-footer-reveal]", { autoAlpha: 1 });
        return;
      }

      gsap.fromTo(
        "[data-footer-reveal]",
        { y: 32, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.85,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: footer,
            start: "top 82%",
            once: true,
          },
        },
      );
    },
    { scope: footerRef },
  );

  return (
    <footer
      ref={footerRef}
      className="relative isolate overflow-hidden bg-[#1a0c70] text-white"
    >
      {/* Signature slab motif, echoing the hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-16 h-[380px] w-[300px] opacity-[0.16] sm:opacity-[0.22] lg:-right-4 lg:h-[460px] lg:w-[380px]"
      >
        <span className="absolute bottom-[6%] left-0 top-[4%] w-[13%] -skew-x-[11deg] rounded-[2rem] bg-[#fe7b30]" />
        <span className="absolute bottom-[6%] left-[22%] right-0 top-[4%] -skew-x-[11deg] rounded-[2.6rem] bg-[#fe7b30]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12">
        {/* ============ CTA row ============ */}
        <div className="flex flex-col items-start gap-8 pb-12 pt-16 sm:pt-20 lg:flex-row lg:items-end lg:justify-between lg:gap-12 lg:pb-16 lg:pt-24">
          <h2
            data-footer-reveal
            className="invisible max-w-2xl text-[2.2rem] font-bold leading-[1.12] text-white sm:text-5xl lg:text-[3.6rem]"
          >
            Your journey to <span className="text-[#fe7b30]">confidence</span>{" "}
            starts here.
          </h2>

          <div data-footer-reveal className="invisible shrink-0">
            <a
              href={MEDHAUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#fe7b30] px-9 py-3.5 text-base font-semibold capitalize tracking-[0.04em] text-white shadow-[0_14px_30px_rgba(254,123,48,0.35)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f36b20] hover:shadow-[0_18px_38px_rgba(254,123,48,0.45)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40 active:translate-y-0 sm:px-11 sm:py-4 sm:text-lg"
            >
              Go To MedhaUp
            </a>
          </div>
        </div>

        <div className="h-px w-full bg-white/12" aria-hidden="true" />

        {/* ============ Main grid ============ */}
        <div className="grid grid-cols-1 gap-12 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-16 lg:py-16">
          {/* Brand + bio */}
          <div data-footer-reveal className="invisible">
            <Link
              to="/"
              aria-label="Nure Arushi home"
              className="inline-flex flex-col items-center leading-none text-white transition-opacity duration-300 hover:opacity-80"
            >
              <span className="text-[1.45rem] font-semibold uppercase tracking-[0.22em]">
                Nure
              </span>
              <span className="mt-0.5 border-y border-white/80 py-[2px] text-[1.45rem] font-semibold uppercase tracking-[0.18em]">
                Arushi
              </span>
            </Link>

            <p className="mt-6 max-w-sm text-[1.05rem] leading-7 text-white/70">
              Poet turned Biology educator. Helping aspiring nurses across
              Bengal prepare for ANM &amp; GNM entrance exams with clarity,
              care, and quality education through MedhaUp.
            </p>
          </div>

          {/* Explore */}
          <div data-footer-reveal className="invisible">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#fe7b30]">
              Explore
            </h3>
            <ul className="mt-6 space-y-4">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className={footerLinkClasses}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div data-footer-reveal className="invisible">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#fe7b30]">
              Connect
            </h3>
            <p className="mt-6 max-w-xs text-[1.05rem] leading-7 text-white/70">
              Follow along for daily classes, study tips, and updates from
              MedhaUp.
            </p>
            <ul className="mt-6 flex items-center gap-4">
              {socialLinks.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="flex size-11 items-center justify-center rounded-full border border-white/20 text-white/80 transition duration-300 hover:-translate-y-0.5 hover:border-[#fe7b30] hover:bg-[#fe7b30] hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
                  >
                    <Icon className="size-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="h-px w-full bg-white/12" aria-hidden="true" />

        {/* ============ Bottom bar ============ */}
        <div
          data-footer-reveal
          className="invisible flex flex-col items-center justify-between gap-4 py-8 text-center sm:flex-row sm:text-left"
        >
          <p className="text-[0.8rem] font-medium uppercase tracking-[0.22em] text-white/55">
            &copy; {new Date().getFullYear()} Nure Arushi. All rights reserved.
          </p>
          <p className="text-[0.8rem] font-medium uppercase tracking-[0.22em] text-white/55">
            Learn with clarity, prepare with confidence
          </p>
        </div>
      </div>
    </footer>
  );
}
