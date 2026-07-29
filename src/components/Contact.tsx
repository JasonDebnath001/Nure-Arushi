import { useRef, useState } from "react";
import type { FormEvent } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

/*
 * Submissions are delivered to this inbox via FormSubmit (https://formsubmit.co).
 * NOTE: the very first submission triggers a one-time confirmation email to
 * contact@medhaup.com — click the link in it once and every message after
 * that lands straight in the inbox. No account or backend needed.
 */
const CONTACT_EMAIL = "contact@medhaup.com";
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

type SubmitStatus = "idle" | "sending" | "success" | "error";

type IconProps = { className?: string };

function FacebookIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TwitterIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function InstagramIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
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

// TODO: replace "#" with real profile links
const socialLinks = [
  { label: "Facebook", href: "#", Icon: FacebookIcon },
  { label: "Twitter", href: "#", Icon: TwitterIcon },
  { label: "Instagram", href: "#", Icon: InstagramIcon },
];

const fieldClasses =
  "w-full border-b-2 border-[#1a0c70]/15 bg-transparent pb-3 pt-2 text-[1.05rem] font-medium text-[#101828] outline-none transition-colors duration-300 placeholder:text-[#101828]/35 focus:border-[#fe7b30]";

const labelClasses =
  "block text-[0.78rem] font-semibold uppercase tracking-[0.24em] text-[#1a0c70]";

export default function Contact() {
  const pageRef = useRef<HTMLElement | null>(null);
  const [status, setStatus] = useState<SubmitStatus>("idle");

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        gsap.set("[data-contact-reveal]", { autoAlpha: 1 });
        return;
      }

      gsap.fromTo(
        "[data-contact-reveal]",
        { y: 34, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.85,
          ease: "power3.out",
          stagger: 0.12,
        },
      );
    },
    { scope: pageRef },
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("sending");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: data.get("email"),
          phone: data.get("phone"),
          message: data.get("message"),
          _subject: "New message from nurearushi website",
          _template: "table",
          _honey: data.get("_honey"),
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <main
      ref={pageRef}
      className="relative isolate overflow-hidden bg-[#fe7b30]"
    >
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12">
        {/* ============ Heading row ============ */}
        <div
          data-contact-reveal
          className="invisible flex flex-col gap-6 pt-12 sm:flex-row sm:items-center sm:justify-between sm:pt-14 lg:pt-16"
        >
          <h1 className="text-[3rem] font-semibold leading-none text-[#fff3e7] sm:text-[3.4rem] lg:text-[3.8rem]">
            Contact Me
          </h1>

          <ul className="flex items-center gap-7 sm:gap-9 lg:gap-11">
            {socialLinks.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  className="text-[#1a0c70] transition duration-300 hover:-translate-y-0.5 hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
                >
                  <Icon className="size-6 sm:size-7" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ============ Split card ============ */}
        <div
          data-contact-reveal
          className="invisible mb-16 mt-10 grid grid-cols-1 overflow-hidden bg-white shadow-[0_30px_70px_rgba(70,25,0,0.18)] sm:mt-12 lg:mb-24 lg:grid-cols-2"
        >
          {/* Photo panel */}
          <figure className="relative min-h-[340px] overflow-hidden bg-[#efece6] sm:min-h-[420px] lg:min-h-[640px]">
            <img
              src="/nure-arushi.png"
              alt="Nure Arushi"
              draggable={false}
              className="absolute bottom-0 left-1/2 h-[94%] max-w-[92%] -translate-x-1/2 select-none object-contain object-bottom"
            />
          </figure>

          {/* Form panel */}
          <div className="flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-16">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#fe7b30]">
              Say hello
            </p>

            <h2 className="mt-3 text-[1.8rem] font-bold leading-tight text-[#101828] sm:text-[2.1rem]">
              I&rsquo;d love to hear from you.
            </h2>

            <p className="mt-3 max-w-md text-[1.02rem] leading-7 text-[#101828]/65">
              Whether it&rsquo;s a question about classes, admissions, or
              MedhaUp — drop me a message below. I read every single one.
            </p>

            {status === "success" ? (
              <div
                role="status"
                className="mt-10 border-l-4 border-[#fe7b30] bg-[#fff4ec] px-6 py-6"
              >
                <p className="text-[1.15rem] font-bold text-[#101828]">
                  Thank you — your message is on its way!
                </p>
                <p className="mt-2 leading-7 text-[#101828]/65">
                  I&rsquo;ll get back to you as soon as I can. Talk soon.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#fe7b30] underline-offset-4 transition-colors duration-300 hover:text-[#f36b20] hover:underline focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#fe7b30]/30"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-9 space-y-8"
                noValidate={false}
              >
                {/* Honeypot — hidden from people, catches bots */}
                <input
                  type="text"
                  name="_honey"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />

                <div>
                  <label htmlFor="contact-email" className={labelClasses}>
                    Your email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    className={fieldClasses}
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone" className={labelClasses}>
                    Your phone number
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="+91 98765 43210"
                    className={fieldClasses}
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className={labelClasses}>
                    Your message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me what&rsquo;s on your mind&hellip;"
                    className={`${fieldClasses} resize-none`}
                  />
                </div>

                {status === "error" && (
                  <p
                    role="alert"
                    className="text-[0.95rem] font-medium leading-6 text-[#c2410c]"
                  >
                    Something went wrong sending your message. Please try again,
                    or email me directly at{" "}
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="font-semibold underline underline-offset-2"
                    >
                      {CONTACT_EMAIL}
                    </a>
                    .
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center justify-center rounded-full bg-[#1a0c70] px-10 py-3.5 text-base font-semibold capitalize tracking-[0.04em] text-white shadow-[0_14px_30px_rgba(26,12,112,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#241394] hover:shadow-[0_18px_38px_rgba(26,12,112,0.36)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#fe7b30]/50 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:px-11 sm:py-4"
                >
                  {status === "sending" ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
