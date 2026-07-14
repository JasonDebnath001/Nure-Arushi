import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ADMISSION_PATH = "/admission";

const subjects = [
  "Biology",
  "Anatomy & Physiology",
  "Community Health",
  "Nursing Foundations",
  "Nutrition",
  "Mental Health",
  "English & Communication",
  "Child Health",
];

const trustPoints = [
  "I teach every core Biology lesson.",
  "I organise the syllabus for you.",
  "I keep the pace steady.",
];

const featureCards = [
  {
    number: "01",
    title: "Clear explanations",
    copy: "I begin with fundamentals before adding complexity.",
  },
  {
    number: "02",
    title: "A visible path",
    copy: "I show you exactly what to study next.",
  },
  {
    number: "03",
    title: "Steady progress",
    copy: "I keep lessons focused, measured, and manageable.",
  },
];

export default function MedhaUpSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) return;

      const timeline = gsap.timeline({
        defaults: {
          duration: 0.75,
          ease: "power3.out",
        },
      });

      timeline
        .from("[data-medhaup-reveal='eyebrow']", {
          y: 12,
          opacity: 0,
        })
        .from(
          "[data-medhaup-reveal='headline']",
          {
            y: 24,
            opacity: 0,
            duration: 0.9,
          },
          "-=0.42",
        )
        .from(
          "[data-medhaup-reveal='copy']",
          {
            y: 16,
            opacity: 0,
          },
          "-=0.5",
        )
        .from(
          "[data-medhaup-reveal='cta']",
          {
            y: 14,
            opacity: 0,
          },
          "-=0.48",
        )
        .from(
          "[data-medhaup-reveal='panel']",
          {
            x: 22,
            opacity: 0,
            scale: 0.985,
            duration: 0.95,
          },
          "-=0.78",
        )
        .from(
          "[data-medhaup-reveal='support']",
          {
            y: 22,
            opacity: 0,
            stagger: 0.1,
          },
          "-=0.58",
        );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="medhaup-section relative isolate overflow-hidden bg-[#06113f] text-[#fffaf3] selection:bg-[#c56b35] selection:text-white"
      aria-labelledby="medhaup-heading"
    >
      {/* Very subtle background depth */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_84%_14%,rgba(197,107,53,0.13),transparent_26%),radial-gradient(circle_at_12%_72%,rgba(255,255,255,0.055),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />

      <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16 xl:py-32">
        <div className="grid gap-y-14 lg:grid-cols-[minmax(0,1.08fr)_minmax(340px,0.92fr)] lg:gap-x-16 lg:gap-y-20 xl:gap-x-24">
          {/* Main message */}
          <div className="order-1 flex max-w-[46rem] flex-col justify-center lg:min-h-[37rem]">
            <div
              data-medhaup-reveal="eyebrow"
              className="inline-flex w-fit items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/55 sm:text-xs"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#c56b35]" />
              I built this for ANM/GNM students
            </div>

            <h2
              id="medhaup-heading"
              data-medhaup-reveal="headline"
              className="medhaup-display mt-7 max-w-[10.5ch] text-[clamp(3.6rem,8vw,6.9rem)] font-medium leading-[0.88] tracking-[-0.052em] text-[#fffaf3]"
            >
              ANM/GNM, taught with clarity.
            </h2>

            <div
              data-medhaup-reveal="copy"
              className="mt-7 max-w-[38rem] space-y-3"
            >
              <p className="text-base leading-7 text-white/76 sm:text-lg sm:leading-8">
                I teach Biology personally and guide every step of your
                preparation.
              </p>

              <p className="max-w-[34rem] text-sm leading-6 text-white/48 sm:text-base sm:leading-7">
                You’ll always know what to study next.
              </p>
            </div>

            {/* The only conversion action */}
            <div data-medhaup-reveal="cta" className="mt-9 sm:mt-10">
              <Link
                to={ADMISSION_PATH}
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#c56b35] px-6 py-3.5 text-sm font-semibold tracking-[-0.01em] text-white shadow-[0_18px_50px_rgba(197,107,53,0.24)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#b85e2d] hover:shadow-[0_22px_60px_rgba(197,107,53,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fffaf3] focus-visible:ring-offset-4 focus-visible:ring-offset-[#06113f] sm:px-7"
              >
                Start Your Admission

                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>

              <p className="mt-4 text-xs leading-5 text-white/40">
                I’ll personally guide your next steps.
              </p>
            </div>
          </div>

          {/* Founder panel */}
          <aside
            data-medhaup-reveal="panel"
            className="order-3 lg:order-2 lg:self-center"
            aria-label="A note from Nure Arushi"
          >
            <div className="relative mx-auto max-w-[38rem] rounded-[2.25rem] border border-white/10 bg-white/[0.045] p-2.5 shadow-[0_32px_90px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:p-3">
              <div className="grid overflow-hidden rounded-[1.75rem] border border-white/8 bg-[#0a1848] sm:grid-cols-[0.88fr_1.12fr] lg:grid-cols-1">
                <div className="relative min-h-[21rem] overflow-hidden sm:min-h-[27rem] lg:aspect-[4/3] lg:min-h-0">
                  <img
                    src="/nure-arushi.png"
                    alt="Nure Arushi"
                    className="absolute inset-0 h-full w-full object-cover object-top"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#06113f]/55 via-transparent to-transparent" />

                  <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-[#06113f]/60 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-white/70 backdrop-blur-md sm:left-5 sm:top-5">
                    I teach personally
                  </div>
                </div>

                <div className="flex min-h-[18rem] flex-col justify-between bg-[#fffaf3] p-6 text-[#06113f] sm:min-h-0 sm:p-7 lg:min-h-[17rem] lg:p-8">
                  <div>
                    <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[#06113f]/42">
                      A note from me
                    </p>

                    <blockquote className="medhaup-display mt-5 text-[2rem] font-medium leading-[1.02] tracking-[-0.035em] sm:text-[2.15rem]">
                      “I built MedhaUp so your preparation feels calm, personal,
                      and clear.”
                    </blockquote>
                  </div>

                  <div className="mt-8 flex items-end justify-between gap-4 border-t border-[#06113f]/10 pt-5">
                    <div>
                      <p className="text-sm font-semibold">Nure Arushi</p>

                      <p className="mt-1 text-xs text-[#06113f]/50">
                        Founder &amp; educator
                      </p>
                    </div>

                    <p className="max-w-[9rem] text-right text-xs leading-5 text-[#06113f]/48">
                      I teach Biology personally.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Supporting information */}
          <div className="order-2 space-y-5 lg:order-3 lg:col-span-2">
            {/* Subjects and trust panel */}
            <div
              data-medhaup-reveal="support"
              className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] shadow-[0_24px_70px_rgba(0,0,0,0.14)] lg:grid-cols-[1.45fr_0.55fr]"
            >
              <div className="p-5 sm:p-7 lg:p-8">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-white/38">
                      What I’ll cover
                    </p>

                    <h3 className="mt-2 text-lg font-semibold tracking-[-0.025em] text-white sm:text-xl">
                      One complete learning path.
                    </h3>
                  </div>

                  <span className="hidden text-xs text-white/28 sm:block">
                    8 core areas
                  </span>
                </div>

                <div className="mt-6 grid gap-x-8 sm:grid-cols-2">
                  {subjects.map((subject, index) => (
                    <div
                      key={subject}
                      className="flex min-h-12 items-center gap-3 border-t border-white/8 py-3"
                    >
                      <span className="w-6 shrink-0 text-[0.62rem] font-semibold tabular-nums text-[#c56b35]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-sm leading-5 text-white/72">
                        {subject}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/10 bg-[#04103a]/55 p-5 sm:p-7 lg:border-l lg:border-t-0 lg:p-8">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-white/38">
                  What you can expect
                </p>

                <div className="mt-6 space-y-6">
                  {trustPoints.map((point) => (
                    <div key={point} className="flex gap-3">
                      <span className="mt-2 h-px w-5 shrink-0 bg-[#c56b35]" />

                      <p className="max-w-[22rem] text-sm leading-6 text-white/68">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Feature cards */}
            <div className="grid gap-4 md:grid-cols-3">
              {featureCards.map((card) => (
                <article
                  key={card.number}
                  data-medhaup-reveal="support"
                  className="group rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-5 transition duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.05] sm:p-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[0.65rem] font-semibold tabular-nums tracking-[0.18em] text-[#c56b35]">
                      {card.number}
                    </span>

                    <span className="h-1.5 w-1.5 rounded-full bg-white/15 transition-colors duration-300 group-hover:bg-[#c56b35]" />
                  </div>

                  <h3 className="mt-8 text-lg font-semibold tracking-[-0.025em] text-white">
                    {card.title}
                  </h3>

                  <p className="mt-3 max-w-[31ch] text-sm leading-6 text-white/52">
                    {card.copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}