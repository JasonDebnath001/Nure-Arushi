// src/pages/About.tsx
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const MEDHAUP_URL = "https://medhaup.com"; // TODO: replace with the real MedhaUp link

/* Photos already used across the site (ImageKit) */
const IMAGES = {
  bookLaunch:
    "https://ik.imagekit.io/jasondebnath/WhatsApp%20Image%202026-07-26%20at%204.49.20%20PM.jpeg",
  award:
    "https://ik.imagekit.io/jasondebnath/WhatsApp%20Image%202026-07-26%20at%204.49.20%20PM%20(1).jpeg",
  teaching:
    "https://ik.imagekit.io/jasondebnath/WhatsApp%20Image%202026-07-26%20at%204.49.20%20PM%20(2).jpeg",
  medhaup:
    "https://ik.imagekit.io/jasondebnath/WhatsApp%20Image%202026-07-26%20at%205.35.16%20PM.jpeg",
};

const marqueeWords = ["Poet", "Author", "Educator", "Mentor", "Founder"];

const poetShelf = [
  {
    title: "Arektu Theke Jete Pari",
    detail: "Debut poetry collection",
  },
  {
    title: "Second collection",
    detail: "Another book, a deeper purpose",
  },
  {
    title: "Sonnet Publication Kobi Samman",
    detail: "Literary honour",
  },
  {
    title: "Priya Payel Gora Smriti Sahitya Sammanana",
    detail: "Awarded by Apnar Kobita",
  },
];

const educatorCards = [
  {
    image: IMAGES.teaching,
    imageAlt: "Nure Arushi teaching Biology",
    eyebrow: "The subject",
    title: "Biology, taught with clarity",
    copy: "Curiosity grew into a deep love for Biology — the beauty, complexity, and wonder of life itself. Mastering every concept turned teaching from a profession into a passion.",
  },
  {
    image: IMAGES.award,
    imageAlt: "Exam Album",
    eyebrow: "The foundation",
    title: "Co-founding Exam Album",
    copy: "Built to make quality guidance accessible for aspiring nurses preparing for the ANM & GNM entrance examinations — direction, confidence, and someone standing beside every student.",
  },
  {
    image: IMAGES.medhaup,
    imageAlt: "MedhaUp",
    eyebrow: "The promise",
    title: "Building MedhaUp",
    copy: "More than a platform — a promise to empower every learner with conceptual clarity, modern teaching methods, and the confidence to achieve their dreams. And this is only the beginning.",
  },
];

export default function About() {
  const pageRef = useRef<HTMLElement | null>(null);
  const marqueeTrackRef = useRef<HTMLDivElement | null>(null);
  const poetImageRef = useRef<HTMLImageElement | null>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(
          "[data-about-reveal], .about-title-line, .about-anim-shape, .about-anim-image",
          { autoAlpha: 1 },
        );
        return;
      }

      /* ---------- Intro entrance (mirrors the Hero choreography) ---------- */
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });

      intro
        .fromTo(
          ".about-anim-shape",
          { y: 90, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1,
            stagger: 0.15,
            ease: "power4.out",
          },
        )
        .fromTo(
          ".about-anim-image",
          { y: 70, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 1 },
          "-=0.7",
        )
        .fromTo(
          ".about-title-line",
          { y: 48, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.12 },
          "-=0.75",
        )
        .fromTo(
          "[data-about-reveal='intro-copy']",
          { y: 24, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.7 },
          "-=0.45",
        );

      /* ---------- Role marquee: seamless infinite loop ---------- */
      if (marqueeTrackRef.current) {
        gsap.to(marqueeTrackRef.current, {
          xPercent: -50,
          repeat: -1,
          duration: 22,
          ease: "none",
        });
      }

      /* ---------- Scroll reveals for each chapter ---------- */
      const revealGroups: string[] = ["poet", "seam", "educator", "cta"];

      revealGroups.forEach((group) => {
        const targets = gsap.utils.toArray<HTMLElement>(
          `[data-about-reveal='${group}']`,
        );

        if (!targets.length) return;

        gsap.fromTo(
          targets,
          { y: 34, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.85,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: {
              trigger: targets[0],
              start: "top 82%",
              once: true,
            },
          },
        );
      });

      /* ---------- Verse lines rise one by one at the seam ---------- */
      gsap.fromTo(
        ".about-verse-line",
        { y: 44, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.18,
          scrollTrigger: {
            trigger: ".about-verse",
            start: "top 76%",
            once: true,
          },
        },
      );

      /* ---------- Gentle parallax on the poet photo ---------- */
      if (poetImageRef.current) {
        gsap.fromTo(
          poetImageRef.current,
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: poetImageRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      }
    },
    { scope: pageRef },
  );

  return (
    <main ref={pageRef} className="relative isolate overflow-hidden">
      {/* ================================================================
          INTRO — indigo, echoes the hero's slab motif (mirrored)
          ================================================================ */}
      <section className="relative isolate overflow-hidden bg-[#1a0c70]">
        <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 items-center gap-10 pt-12 sm:gap-12 sm:pt-14 lg:min-h-[72vh] lg:grid-cols-[0.95fr_1.05fr] lg:gap-6 lg:pt-0">
            {/* Portrait with mirrored slabs */}
            <div className="relative order-2 mx-auto aspect-[5/6] w-full max-w-[440px] sm:max-w-[500px] lg:order-1 lg:aspect-auto lg:h-full lg:min-h-[520px] lg:max-w-none">
              <div
                aria-hidden="true"
                className="about-anim-shape invisible absolute bottom-[3%] right-[2%] top-[6%] w-[13%] sm:right-[5%]"
              >
                <span className="block h-full w-full skew-x-[11deg] rounded-[1.6rem] bg-[#fe7b30] sm:rounded-[2.8rem]" />
              </div>

              <div
                aria-hidden="true"
                className="about-anim-shape invisible absolute bottom-[3%] left-[6%] right-[19%] top-[6%] sm:right-[24%]"
              >
                <span className="block h-full w-full skew-x-[11deg] rounded-[2rem] bg-[#fe7b30] sm:rounded-[3.2rem]" />
              </div>

              <div className="about-anim-image invisible absolute inset-0">
                <img
                  src="/nure-arushi.png"
                  alt="Nure Arushi"
                  draggable={false}
                  fetchPriority="high"
                  className="absolute bottom-0 left-[2%] h-[94%] max-w-[88%] select-none object-contain object-bottom sm:left-[4%] lg:left-0 lg:h-full lg:max-w-full"
                />
              </div>
            </div>

            {/* Copy */}
            <div className="order-1 flex flex-col items-start lg:order-2 lg:pb-14 lg:pl-8">
              <p className="about-title-line invisible text-sm font-semibold uppercase tracking-[0.3em] text-[#fe7b30]">
                About me
              </p>

              <h1 className="mt-4 max-w-2xl text-[2.5rem] font-bold leading-[1.08] tracking-[0.005em] text-white sm:text-6xl lg:text-[4.2rem] xl:text-[4.8rem]">
                <span className="about-title-line block">Poet at heart,</span>
                <span className="about-title-line block">
                  <span className="text-[#fe7b30] italic">educator</span> by
                </span>
                <span className="about-title-line block">calling.</span>
              </h1>

              <p
                data-about-reveal="intro-copy"
                className="invisible mt-6 max-w-xl text-lg font-medium leading-8 text-white/85 sm:text-xl lg:mt-8 lg:leading-9"
              >
                I&rsquo;m Nure Arushi — from Aminpur, a small town in South
                Dinajpur. My story began quietly, with words, and grew into a
                life spent helping aspiring nurses across Bengal prepare with
                clarity and confidence.
              </p>
            </div>
          </div>
        </div>

        {/* Role marquee */}
        <div className="relative mt-10 border-t border-white/10 py-5 sm:mt-14 sm:py-6 lg:mt-0">
          <div className="overflow-hidden" aria-hidden="true">
            <div
              ref={marqueeTrackRef}
              className="flex w-max items-center gap-0 whitespace-nowrap"
            >
              {[0, 1].map((copy) => (
                <div key={copy} className="flex items-center">
                  {marqueeWords.map((word) => (
                    <span
                      key={`${copy}-${word}`}
                      className="flex items-center gap-8 pr-8 text-[1.35rem] font-semibold uppercase tracking-[0.35em] text-white/60 sm:gap-12 sm:pr-12 sm:text-[1.6rem]"
                    >
                      {word}
                      <span className="inline-block size-2 shrink-0 rounded-full bg-[#fe7b30]" />
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <span className="sr-only">
            Poet, author, educator, mentor, founder
          </span>
        </div>
      </section>

      {/* ================================================================
          CHAPTER ONE — THE POET (white)
          ================================================================ */}
      <section
        className="relative bg-white"
        aria-labelledby="about-poet-heading"
      >
        <div className="mx-auto w-full max-w-[1400px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            {/* Narrative */}
            <div>
              <p
                data-about-reveal="poet"
                className="invisible text-sm font-semibold uppercase tracking-[0.3em] text-[#fe7b30]"
              >
                Chapter one
              </p>

              <h2
                id="about-poet-heading"
                data-about-reveal="poet"
                className="invisible mt-4 max-w-xl text-[2.1rem] font-bold leading-[1.12] text-[#101828] sm:text-[2.6rem] lg:text-[3rem]"
              >
                A small town,{" "}
                <span className="italic text-[#fe7b30]">a world of words.</span>
              </h2>

              <div
                data-about-reveal="poet"
                className="invisible mt-7 max-w-xl space-y-6 text-[1.08rem] leading-8 text-[#101828]/70 sm:text-[1.15rem]"
              >
                <p className="first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[3.4rem] first-letter:font-bold first-letter:leading-[0.8] first-letter:text-[#1a0c70]">
                  From the very beginning, poetry called to me. I wrote to give
                  shape to feelings, to hold on to moments, and to say what
                  ordinary speech could not. In those early lines I found my
                  voice — and began to understand the world through verse.
                </p>
                <p>
                  Seeing my first piece published in a literary magazine was the
                  quiet reassurance that thoughts I had carried for so long
                  could reach beyond my notebook. Then came the books, and the
                  honours — each one a reminder to keep writing with honesty,
                  and to trust that every poem carries the possibility of
                  touching someone&rsquo;s heart.
                </p>
              </div>

              {/* The shelf — grounded milestones, no invented stats */}
              <ul
                data-about-reveal="poet"
                className="invisible mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2"
              >
                {poetShelf.map((item) => (
                  <li
                    key={item.title}
                    className="group border-l-[3px] border-[#1a0c70]/15 pl-5 transition-colors duration-300 hover:border-[#fe7b30]"
                  >
                    <p className="text-[1.05rem] font-bold leading-snug text-[#101828]">
                      {item.title}
                    </p>
                    <p className="mt-1 text-[0.8rem] font-semibold uppercase tracking-[0.22em] text-[#101828]/45">
                      {item.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Photo with parallax */}
            <figure
              data-about-reveal="poet"
              className="invisible relative self-start overflow-hidden rounded-[2rem] bg-[#efece6] shadow-[0_30px_70px_rgba(26,12,112,0.16)] lg:sticky lg:top-24"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <img
                  ref={poetImageRef}
                  src={IMAGES.bookLaunch}
                  alt="Nure Arushi at her first book launch"
                  draggable={false}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-[116%] w-full select-none object-cover"
                />
              </div>
              <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1a0c70]/85 to-transparent px-7 pb-6 pt-16">
                <p className="text-[0.78rem] font-semibold uppercase tracking-[0.28em] text-white/75">
                  First book launch
                </p>
                <p className="mt-1 text-xl font-bold text-white">
                  Arektu Theke Jete Pari
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ================================================================
          THE SEAM — where the poet becomes the educator
          ================================================================ */}
      <section
        className="about-verse relative isolate overflow-hidden bg-[#1a0c70]"
        aria-label="From poetry to teaching"
      >
        {/* Slab motif bleeding across the seam */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-12 top-1/2 h-[130%] w-[240px] -translate-y-1/2 opacity-[0.14] sm:w-[320px]"
        >
          <span className="absolute bottom-[6%] left-0 top-[4%] w-[16%] -skew-x-[11deg] rounded-[2rem] bg-[#fe7b30]" />
          <span className="absolute bottom-[6%] left-[26%] right-0 top-[4%] -skew-x-[11deg] rounded-[2.6rem] bg-[#fe7b30]" />
        </div>

        <div className="mx-auto w-full max-w-[1200px] px-6 py-20 text-center sm:px-8 sm:py-24 lg:py-32">
          <p className="about-verse-line invisible text-sm font-semibold uppercase tracking-[0.3em] text-[#fe7b30]">
            The turning page
          </p>

          <blockquote className="mt-8 text-[1.9rem] font-semibold italic leading-[1.3] text-white sm:text-[2.5rem] lg:text-[3.1rem]">
            <p className="about-verse-line invisible">
              Poetry taught me to feel.
            </p>
            <p className="about-verse-line invisible mt-3">
              Biology taught me to understand.
            </p>
            <p className="about-verse-line invisible mt-3 text-[#fe7b30]">
              Teaching lets me do both.
            </p>
          </blockquote>
        </div>
      </section>

      {/* ================================================================
          CHAPTER TWO — THE EDUCATOR (orange, glass cards like the timeline)
          ================================================================ */}
      <section
        className="relative isolate overflow-hidden bg-[#fe7b30] text-white"
        aria-labelledby="about-educator-heading"
      >
        {/* Grid backdrop, matching the Journey section */}
        <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:48px_48px] sm:[background-size:72px_72px]" />

        <div className="relative mx-auto w-full max-w-[1400px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
          <p
            data-about-reveal="educator"
            className="invisible text-sm font-semibold uppercase tracking-[0.3em] text-[#1a0c70]"
          >
            Chapter two
          </p>

          <h2
            id="about-educator-heading"
            data-about-reveal="educator"
            className="invisible mt-4 max-w-2xl text-[2.1rem] font-bold leading-[1.12] sm:text-[2.6rem] lg:text-[3rem]"
          >
            Standing beside{" "}
            <span className="italic text-[#1a0c70]">every student.</span>
          </h2>

          <p
            data-about-reveal="educator"
            className="invisible mt-5 max-w-2xl text-[1.08rem] leading-8 text-white/90 sm:text-[1.15rem]"
          >
            My pen found a new purpose: helping aspiring nurses across Bengal
            prepare for the ANM &amp; GNM entrance examinations — not just a
            syllabus, but confidence, direction, and care.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-8">
            {educatorCards.map((card) => (
              <article
                key={card.title}
                data-about-reveal="educator"
                className="group invisible overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.08] shadow-[0_18px_50px_rgba(0,0,0,0.16)] backdrop-blur-md transition-transform duration-500 hover:-translate-y-2"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.imageAlt}
                    draggable={false}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d274f]/50 via-[#0d274f]/5 to-transparent" />
                </div>

                <div className="p-6 sm:p-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-white/70">
                    {card.eyebrow}
                  </p>
                  <h3 className="mt-2 text-[1.4rem] font-bold leading-tight">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-[0.98rem] leading-7 text-white/85">
                    {card.copy}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Page-level CTA row (the footer carries the big one) */}
          <div
            data-about-reveal="cta"
            className="invisible mt-14 flex flex-col items-start gap-4 sm:flex-row sm:items-center lg:mt-16"
          >
            <a
              href={MEDHAUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#1a0c70] px-9 py-3.5 text-base font-semibold capitalize tracking-[0.04em] text-white shadow-[0_14px_30px_rgba(26,12,112,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#241394] hover:shadow-[0_18px_38px_rgba(26,12,112,0.36)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50 active:translate-y-0 sm:px-11 sm:py-4"
            >
              Go To MedhaUp
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/70 px-9 py-3.5 text-base font-semibold capitalize tracking-[0.04em] text-white transition duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-[#fe7b30] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#1a0c70]/40 active:translate-y-0 sm:px-11 sm:py-4"
            >
              Say Hello
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
