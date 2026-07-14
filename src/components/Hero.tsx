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
  return (
    <section className="relative overflow-hidden bg-[#031045] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_28%),radial-gradient(circle_at_80%_15%,rgba(201,106,43,0.18),transparent_20%),radial-gradient(circle_at_75%_80%,rgba(255,255,255,0.04),transparent_25%)]" />
      <div className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-white/5 blur-[140px]" />
      <div className="pointer-events-none absolute -right-28 bottom-0 h-96 w-96 rounded-full bg-[#c96a2b]/15 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid min-h-[calc(100vh-4rem)] items-center gap-14 lg:grid-cols-[1.06fr_0.94fr]">
          <div className="flex max-w-2xl flex-col justify-center pt-10 lg:pt-0">
            <div className="inline-flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.32em] text-white/70 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#c96a2b]" />
              Founder-led ANM/GNM preparation
            </div>

            <h1 className="serif-display mt-6 max-w-[11ch] text-5xl font-semibold leading-[0.92] tracking-[-0.05em] text-white sm:text-6xl md:text-7xl xl:text-8xl">
              ANM/GNM,
              <br />
              taught with clarity.
            </h1>

            <p className="mt-6 max-w-[34rem] text-base leading-7 text-white/76 sm:text-lg">
              I teach Biology personally. I built MedhaUp for calm, structured
              preparation.
            </p>

            <p className="mt-3 max-w-[32rem] text-sm leading-7 text-white/58 sm:text-base">
              I keep every chapter direct. I keep you clear on what comes next.
            </p>

            <div className="mt-9">
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
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-4 shadow-[0_16px_40px_rgba(0,0,0,0.08)] backdrop-blur"
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
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/72 backdrop-blur"
                >
                  {subject}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[38rem] lg:ml-auto">
            <div className="absolute inset-10 rounded-full bg-[#c96a2b]/15 blur-[120px]" />

            <div className="relative overflow-hidden rounded-[2.75rem] border border-white/10 bg-white/6 p-4 shadow-[0_35px_100px_rgba(0,0,0,0.34)] backdrop-blur-xl">
              <div className="flex items-center justify-between px-2 pb-4">
                <span className="text-[0.7rem] uppercase tracking-[0.3em] text-white/45">
                  Founder panel
                </span>
                <span className="text-[0.7rem] uppercase tracking-[0.3em] text-[#c96a2b]">
                  MedhaUp
                </span>
              </div>

              <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#091a4d]">
                  <img
                    src="/nure-arushi.png"
                    alt="Nure Arushi"
                    className="aspect-[4/5] w-full object-cover object-top"
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
                  <div className="rounded-[1.75rem] border border-white/10 bg-white/6 p-5">
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

                  <div className="rounded-[1.75rem] border border-white/10 bg-white/6 p-5">
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
