import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const MEDHAUP_URL = "https://medhaup.com"; // TODO: replace with the real MedhaUp link

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        // Skip motion entirely but make everything visible.
        gsap.set(
          ".hero-anim-shape, .hero-anim-image, .hero-title-line, .hero-copy, .hero-cta",
          { autoAlpha: 1 },
        );
        return;
      }

      /*
       * Animations only ever touch the ".hero-anim-*" wrapper elements.
       * The skew / centering transforms live on children, so GSAP's
       * inline transforms never overwrite them.
       */
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-anim-shape",
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
          ".hero-anim-image",
          { y: 70, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 1 },
          "-=0.7",
        )
        .fromTo(
          ".hero-title-line",
          { y: 48, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.12 },
          "-=0.75",
        )
        .fromTo(
          ".hero-copy",
          { y: 24, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.7 },
          "-=0.45",
        )
        .fromTo(
          ".hero-cta",
          { y: 18, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.55 },
          "-=0.4",
        );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[#1a0c70]"
    >
      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 items-center gap-10 pt-10 sm:gap-12 sm:pt-14 lg:min-h-[calc(100vh-8.5rem)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:pt-0">
          {/* ============ LEFT — copy ============ */}
          <div className="flex flex-col items-start lg:pb-16">
            <h1 className="max-w-3xl text-left text-[2.5rem] font-bold leading-[1.08] tracking-[0.005em] text-white sm:text-6xl lg:text-[4.4rem] xl:text-[5.1rem] 2xl:text-[5.6rem]">
              <span className="hero-title-line block">Learn with</span>
              <span className="hero-title-line block">
                <span className="text-[#fe7b30]">clarity,</span> prepare
              </span>
              <span className="hero-title-line block">
                with <span className="text-[#fe7b30]">confidence</span>
              </span>
            </h1>

            <p className="hero-copy mt-5 max-w-xl text-left text-lg font-medium leading-8 text-white sm:mt-6 sm:text-xl lg:mt-8 lg:text-[1.35rem] lg:leading-9">
              I&rsquo;m Nure Arushi, and I create Biology educational content
              that helps students move forward with confidence.
            </p>

            <div className="hero-cta mt-7 sm:mt-8 lg:mt-10">
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

          {/* ============ RIGHT — orange slabs + educator cutout ============
              The container scales with an aspect ratio below lg (no fixed
              pixel heights), then stretches to fill the hero row on lg+. */}
          <div className="relative mx-auto aspect-[5/6] w-full max-w-[480px] sm:aspect-[6/6] sm:max-w-[560px] lg:aspect-auto lg:h-full lg:min-h-[580px] lg:max-w-none">
            {/* Small orange sliver — animated wrapper, skewed child */}
            <div
              aria-hidden="true"
              className="hero-anim-shape invisible absolute bottom-[3%] left-[2%] top-[4%] w-[13%] sm:left-[6%] sm:w-[12%]"
            >
              <span className="block h-full w-full -skew-x-[11deg] rounded-[1.6rem] bg-[#fe7b30] sm:rounded-[2.8rem] lg:rounded-[3.2rem]" />
            </div>

            {/* Large orange slab — animated wrapper, skewed child */}
            <div
              aria-hidden="true"
              className="hero-anim-shape invisible absolute bottom-[3%] left-[19%] right-[6%] top-[4%] sm:left-[26%] sm:right-[8%]"
            >
              <span className="block h-full w-full -skew-x-[11deg] rounded-[2rem] bg-[#fe7b30] sm:rounded-[3.2rem] lg:rounded-[4rem]" />
            </div>

            {/* Educator cutout — animated wrapper, positioned child */}
            <div className="hero-anim-image invisible absolute inset-0">
              <img
                src="/nure-arushi.png"
                alt="Nure Arushi"
                draggable={false}
                fetchPriority="high"
                className="absolute bottom-0 right-[2%] h-[94%] max-w-[88%] select-none object-contain object-bottom sm:right-[4%] lg:right-0 lg:h-full lg:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}