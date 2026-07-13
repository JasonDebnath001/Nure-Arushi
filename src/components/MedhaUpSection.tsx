import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";

const curriculum = [
  "Biology",
  "Anatomy & Physiology",
  "Community Health",
  "Nursing Foundations",
  "Nutrition",
  "Child Health",
  "Mental Health",
  "English & Communication",
];

export default function MedhaUpSection() {
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(".medhaup-rail", {
      scaleY: 0,
      transformOrigin: "top center",
      duration: 0.75,
    })
      .from(
        ".medhaup-kicker",
        {
          y: 18,
          opacity: 0,
          duration: 0.5,
        },
        "-=0.15",
      )
      .from(
        ".medhaup-title",
        {
          y: 42,
          opacity: 0,
          duration: 0.9,
        },
        "-=0.2",
      )
      .from(
        ".medhaup-copy",
        {
          y: 24,
          opacity: 0,
          duration: 0.7,
        },
        "-=0.35",
      )
      .from(
        ".medhaup-subline",
        {
          y: 18,
          opacity: 0,
          duration: 0.55,
        },
        "-=0.25",
      )
      .from(
        ".medhaup-separator",
        {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 0.65,
        },
        "-=0.15",
      )
      .from(
        ".medhaup-curriculum-item",
        {
          y: 16,
          opacity: 0,
          stagger: 0.06,
          duration: 0.45,
        },
        "-=0.15",
      )
      .from(
        ".medhaup-actions",
        {
          y: 18,
          opacity: 0,
          stagger: 0.08,
          duration: 0.5,
        },
        "-=0.15",
      )
      .from(
        ".medhaup-panel",
        {
          x: 42,
          opacity: 0,
          scale: 0.985,
          duration: 0.95,
        },
        "-=0.95",
      );

    gsap.to(".medhaup-soft-glow", {
      y: -10,
      duration: 4.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".medhaup-logo-float", {
      y: -6,
      duration: 3.4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  });

  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 sm:px-8 lg:px-12 xl:px-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(3,16,69,0.05),transparent_28%),radial-gradient(circle_at_88%_82%,rgba(255,193,7,0.08),transparent_24%)]" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[72px_1.12fr_0.88fr] lg:items-center">
          <div className="medhaup-rail hidden h-full lg:flex lg:flex-col lg:items-center lg:justify-between">
            <div className="h-40 w-px bg-gradient-to-b from-[#031045] via-[#031045]/25 to-transparent" />
            <div className="flex -rotate-90 items-center gap-3 whitespace-nowrap">
              <span className="text-xs font-semibold uppercase tracking-[0.42em] text-slate-500">
                MedhaUp
              </span>
              <span className="h-px w-16 bg-slate-300" />
              <span className="text-xs uppercase tracking-[0.28em] text-slate-400">
                01
              </span>
            </div>
            <div className="h-24 w-px bg-gradient-to-t from-[#031045] via-[#031045]/25 to-transparent" />
          </div>

          <div className="relative">
            <div className="medhaup-kicker inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-slate-500 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
              <span className="h-2 w-2 rounded-full bg-[#031045]" />
              A learning platform by Nure Arushi
            </div>

            <h2 className="medhaup-title mt-7 max-w-4xl text-4xl font-semibold leading-[0.98] text-[#031045] sm:text-5xl lg:text-7xl">
              One platform.
              <br />
              Full ANM/GNM preparation.
              <br />
              Biology, taught with personal clarity.
            </h2>

            <p className="medhaup-copy mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              MedhaUp brings together the subjects students need for ANM/GNM
              preparation in one calm, structured learning space. Biology is
              Nure Arushi’s signature strength, and the rest of the curriculum
              follows the same focused, exam-ready teaching philosophy.
            </p>

            <p className="medhaup-subline mt-6 max-w-xl text-sm leading-7 text-slate-500">
              Built as her own education brand, MedhaUp is designed to feel
              personal, refined, and serious from the first glance.
            </p>

            <div className="medhaup-separator mt-10 h-px w-full bg-gradient-to-r from-[#031045] via-[#031045]/25 to-transparent" />

            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3 text-[0.95rem] text-slate-700">
              {curriculum.map((item, index) => (
                <div key={item} className="medhaup-curriculum-item flex items-center gap-4">
                  <span className="font-medium tracking-[0.02em]">{item}</span>
                  {index !== curriculum.length - 1 ? (
                    <span className="text-slate-300">•</span>
                  ) : null}
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <div className="rounded-[1.6rem] border border-slate-200 bg-white px-6 py-5 shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Signature strength
                </p>
                <p className="mt-3 text-2xl font-semibold text-[#031045]">
                  Biology, taught personally.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Clear concepts, strong fundamentals, and focused guidance
                  from Nure Arushi herself.
                </p>
              </div>

              <div className="rounded-[1.6rem] border border-slate-200 bg-white px-6 py-5 shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Full curriculum
                </p>
                <p className="mt-3 text-2xl font-semibold text-[#031045]">
                  Every major subject in one place.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Students get the complete ANM/GNM journey without scattered
                  coaching or fragmented notes.
                </p>
              </div>
            </div>

            <div className="medhaup-actions mt-10 flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-2 rounded-full bg-[#031045] px-7 py-3.5 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-[#061636]">
                Take Admission
                <ArrowRight className="h-4 w-4" />
              </button>

              <button className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-[#031045] transition hover:border-[#031045] hover:bg-slate-50">
                Explore MedhaUp
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="medhaup-soft-glow absolute -left-10 top-10 h-36 w-36 rounded-full bg-[#031045]/5 blur-3xl" />
            <div className="medhaup-soft-glow absolute -right-6 bottom-8 h-44 w-44 rounded-full bg-amber-400/10 blur-3xl" />

            <div className="medhaup-panel relative overflow-hidden rounded-[2.35rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#fbfcff_54%,#f4f7ff_100%)] p-7 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
              <div className="flex items-start justify-between gap-6">
                <div className="max-w-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.34em] text-slate-500">
                    MedhaUp
                  </p>
                  <h3 className="mt-4 text-3xl font-semibold leading-tight text-[#031045] sm:text-4xl">
                    A private platform with a quiet, premium voice.
                  </h3>
                </div>

                <div className="medhaup-logo-float flex h-18 w-18 shrink-0 items-center justify-center rounded-[1.4rem] border border-slate-200 bg-white shadow-[0_14px_40px_rgba(15,23,42,0.08)]">
                  <img
                    src="/medhaup-logo.png"
                    alt="MedhaUp logo"
                    className="h-11 w-11 object-contain"
                  />
                </div>
              </div>

              <div className="mt-10 rounded-[1.75rem] bg-[#031045] p-6 text-white shadow-[0_20px_50px_rgba(3,16,69,0.22)]">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
                  Founder-led teaching
                </p>
                <p className="mt-3 text-2xl font-semibold leading-tight sm:text-3xl">
                  Nure Arushi shapes the learning experience herself.
                </p>
                <p className="mt-4 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
                  MedhaUp is where her Biology teaching becomes part of a
                  complete ANM/GNM preparation journey, built with structure,
                  clarity, and a polished brand identity.
                </p>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
                  <p className="text-sm font-medium text-slate-500">
                    Academic focus
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-[#031045]">
                    All ANM/GNM subjects
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    One place for the full syllabus journey.
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
                  <p className="text-sm font-medium text-slate-500">
                    Personal edge
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-[#031045]">
                    Biology by Nure Arushi
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Her strongest subject, taught with care.
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-[1.5rem] border border-slate-200 bg-white p-5">
                <p className="text-sm font-medium text-slate-500">
                  Brand position
                </p>
                <p className="mt-2 text-lg font-semibold text-[#031045]">
                  Not a coaching class. A platform she owns and defines.
                </p>
              </div>

              <div className="pointer-events-none absolute -bottom-24 -right-24 h-60 w-60 rounded-full bg-[#031045]/5 blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}