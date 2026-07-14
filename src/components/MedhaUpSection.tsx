import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";

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
  {
    label: "Founder-led",
    value: "I teach directly.",
  },
  {
    label: "Clear structure",
    value: "You always know next.",
  },
  {
    label: "Personal pace",
    value: "No rushed chapters.",
  },
];

const dashboardCards = [
  {
    label: "Pace",
    value: "Calm",
    copy: "I keep each chapter measured and direct.",
  },
  {
    label: "Format",
    value: "Structured",
    copy: "I build a clean path through the syllabus.",
  },
  {
    label: "Tone",
    value: "Personal",
    copy: "I speak to students, not a crowd.",
  },
];

export default function Hero() {
  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
    });

    tl.from(".hero-badge", {
      y: 16,
      opacity: 0,
      duration: 0.55,
    })
      .from(
        ".hero-title-line",
        {
          y: 26,
          opacity: 0,
          duration: 0.8,
          stagger: 0.08,
        },
        "-=0.2"
      )
      .from(
        ".hero-copy",
        {
          y: 14,
          opacity: 0,
          duration: 0.65,
        },
        "-=0.35"
      )
      .from(
        ".hero-cta",
        {
          y: 12,
          opacity: 0,
          duration: 0.55,
        },
        "-=0.25"
      )
      .from(
        ".trust-card",
        {
          y: 16,
          opacity: 0,
          duration: 0.5,
          stagger: 0.08,
        },
        "-=0.2"
      )
      .from(
        ".subject-chip",
        {
          y: 10,
          opacity: 0,
          duration: 0.35,
          stagger: 0.03,
        },
        "-=0.2"
      )
      .from(
        ".hero-panel",
        {
          x: 24,
          opacity: 0,
          scale: 0.985,
          duration: 0.9,
        },
        "-=0.9"
      );

    gsap.to(".hero-glow", {
      scale: 1.06,
      opacity: 0.95,
      duration: 4.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".floating-panel", {
      y: -8,
      duration: 4.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".hero-portrait", {
      y: -6,
      duration: 3.6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".hero-mini-card-1", {
      y: -5,
      x: 2,
      duration: 4.8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".hero-mini-card-2", {
      y: 5,
      x: -2,
      duration: 5.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    const onMove = (e: MouseEvent) => {
      const panel = document.querySelector(".hero-panel");
      if (!panel) return;

      const rect = panel.getBoundingClientRect();
      const dx = (e.clientX - (rect.left + rect.width / 2)) / rect.width;
      const dy = (e.clientY - (rect.top + rect.height / 2)) / rect.height;

      gsap.to(".hero-portrait-wrap", {
        x: dx * 10,
        y: dy * 10,
        duration: 0.45,
        ease: "power2.out",
      });

      gsap.to(".hero-glow", {
        x: dx * 18,
        y: dy * 18,
        duration: 0.6,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", onMove);

    return () => {
      window.removeEventListener("mousemove", onMove);
    };
  });

  return (
    <section className="relative overflow-hidden bg-[#031045] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_28%),radial-gradient(circle_at_80%_15%,rgba(201,106,43,0.18),transparent_20%),radial-gradient(circle_at_75%_80%,rgba(255,255,255,0.04),transparent_25%)]" />
      <div className="pointer-events-none hero-glow absolute -left-32 top-24 h-80 w-80 rounded-full bg-white/5 blur-[140px]" />
      <div className="pointer-events-none absolute -right-28 bottom-0 h-96 w-96 rounded-full bg-[#c96a2b]/15 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid min-h-[calc(100vh-4rem)] items-center gap-14 lg:grid-cols-[1.06fr_0.94fr]">
          <div className="flex max-w-2xl flex-col justify-center pt-10 lg:pt-0">
            <div className="hero-badge inline-flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.32em] text-white/70 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#c96a2b]" />
              Founder-led ANM/GNM preparation
            </div>

            <h1 className="mt-6 max-w-[11ch] text-5xl font-semibold leading-[0.92] tracking-[-0.05em] text-white sm:text-6xl md:text-7xl xl:text-8xl">
              <span className="hero-title-line serif-display block">
                ANM/GNM,
              </span>
              <span className="hero-title-line serif-display block">
                taught with clarity.
              </span>
            </h1>

            <p className="hero-copy mt-6 max-w-[34rem] text-base leading-7 text-white/76 sm:text-lg">
              I teach Biology personally. I built MedhaUp for calm, structured
              preparation.
            </p>

            <p className="mt-3 max-w-[32rem] text-sm leading-7 text-white/58 sm:text-base">
              I keep every chapter direct. I keep you clear on what comes next.
            </p>

            <div className="hero-cta mt-9">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full bg-[#c96a2b] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(201,106,43,0.26)] transition hover:-translate-y-0.5 hover:bg-[#b85d22]"
              >
                Start Your Admission
                <ArrowRight className="h-4 w-4" />
              </button>

              <p className="mt-4 text-xs uppercase tracking-[0.28em] text-white/38">
                One clear path. No extra noise.
              </p>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {trustPoints.map((item) => (
                <div
                  key={item.label}
                  className="trust-card rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-4 shadow-[0_16px_40px_rgba(0,0,0,0.08)] backdrop-blur"
                >
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-white/42">
                    {item.label}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white/82">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {subjects.map((subject) => (
                <span
                  key={subject}
                  className="subject-chip rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/72 backdrop-blur"
                >
                  {subject}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-panel relative mx-auto w-full max-w-[38rem] lg:ml-auto">
            <div className="absolute inset-10 rounded-full bg-[#c96a2b]/15 blur-[120px]" />

            <div className="floating-panel relative overflow-hidden rounded-[2.75rem] border border-white/10 bg-white/6 p-4 shadow-[0_35px_100px_rgba(0,0,0,0.34)] backdrop-blur-xl">
              <div className="flex items-center justify-between px-2 pb-4">
                <span className="text-[0.7rem] uppercase tracking-[0.3em] text-white/45">
                  Founder panel
                </span>
                <span className="text-[0.7rem] uppercase tracking-[0.3em] text-[#c96a2b]">
                  MedhaUp
                </span>
              </div>

              <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="hero-portrait-wrap relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#091a4d]">
                  <img
                    src="/nure-arushi.png"
                    alt="Nure Arushi"
                    className="hero-portrait aspect-[4/5] w-full object-cover object-top"
                  />

                  <div className="absolute inset-x-4 bottom-4 rounded-[1.4rem] border border-white/10 bg-[#031045]/82 px-4 py-3 backdrop-blur-md">
                    <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/48">
                      My promise
                    </p>
                    <p className="mt-2 text-lg leading-tight text-white sm:text-xl">
                      I’ll guide you through every chapter.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="hero-mini-card-1 rounded-[1.75rem] border border-white/10 bg-white/6 p-5">
                    <p className="text-[0.7rem] uppercase tracking-[0.28em] text-white/45">
                      What I teach
                    </p>
                    <p className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">
                      Biology first.
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/68">
                      Clear fundamentals. Calm pace. No rushed chapters.
                    </p>
                  </div>

                  <div className="hero-mini-card-2 rounded-[1.75rem] border border-white/10 bg-white/6 p-5">
                    <p className="text-[0.7rem] uppercase tracking-[0.28em] text-white/45">
                      What students feel
                    </p>
                    <p className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">
                      Calm, not crowded.
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/68">
                      You always know what to study next.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {dashboardCards.map((card) => (
                  <div
                    key={card.label}
                    className="rounded-[1.5rem] border border-white/10 bg-[#031045]/55 px-4 py-4"
                  >
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-white/42">
                      {card.label}
                    </p>
                    <p className="mt-3 text-base font-semibold tracking-[-0.02em] text-white">
                      {card.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/65">
                      {card.copy}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}