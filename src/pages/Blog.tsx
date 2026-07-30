// src/pages/Blog.tsx
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";

export default function Blog() {
  const pageRef = useRef<HTMLElement | null>(null);
  const dotsRef = useRef<HTMLSpanElement | null>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        gsap.set("[data-blog-reveal], .blog-anim-shape", { autoAlpha: 1 });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".blog-anim-shape",
        { y: 90, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 1, stagger: 0.15, ease: "power4.out" },
      ).fromTo(
        "[data-blog-reveal]",
        { y: 34, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.85, stagger: 0.12 },
        "-=0.6",
      );

      /* The ellipsis writes itself, like a pen pausing on the page. */
      if (dotsRef.current) {
        gsap.fromTo(
          dotsRef.current.children,
          { autoAlpha: 0.15 },
          {
            autoAlpha: 1,
            duration: 0.5,
            stagger: { each: 0.35, repeat: -1, yoyo: true },
            ease: "power1.inOut",
          },
        );
      }
    },
    { scope: pageRef },
  );

  return (
    <main
      ref={pageRef}
      className="relative isolate flex min-h-[calc(100vh-8.5rem)] items-center overflow-hidden bg-[#1a0c70]"
    >
      {/* Signature slab motif, echoing the hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-14 top-1/2 h-[420px] w-[300px] -translate-y-1/2 opacity-[0.14] sm:opacity-[0.2] lg:-right-4 lg:h-[520px] lg:w-[400px]"
      >
        <span className="blog-anim-shape invisible absolute bottom-[6%] left-0 top-[4%] w-[13%] -skew-x-[11deg] rounded-[2rem] bg-[#fe7b30]" />
        <span className="blog-anim-shape invisible absolute bottom-[6%] left-[22%] right-0 top-[4%] -skew-x-[11deg] rounded-[2.6rem] bg-[#fe7b30]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1400px] px-6 py-20 sm:px-8 sm:py-24 lg:px-12">
        <p
          data-blog-reveal
          className="invisible text-sm font-semibold uppercase tracking-[0.3em] text-[#fe7b30]"
        >
          The blog
        </p>

        <h1
          data-blog-reveal
          className="invisible mt-5 max-w-3xl text-[2.6rem] font-bold leading-[1.08] tracking-[0.005em] text-white sm:text-6xl lg:text-[4.4rem]"
        >
          Blogs coming{" "}
          <span className="italic text-[#fe7b30]">
            soon
            <span ref={dotsRef} aria-hidden="true">
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </span>
          </span>
        </h1>

        <p
          data-blog-reveal
          className="invisible mt-6 max-w-xl text-lg font-medium leading-8 text-white/80 sm:text-xl lg:mt-8"
        >
          Notes on Biology, study strategy, and the occasional verse — this page
          is still being written. Check back shortly.
        </p>

        <div
          data-blog-reveal
          className="invisible mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center lg:mt-11"
        >
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-[#fe7b30] px-9 py-3.5 text-base font-semibold capitalize tracking-[0.04em] text-white shadow-[0_14px_30px_rgba(254,123,48,0.35)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f36b20] hover:shadow-[0_18px_38px_rgba(254,123,48,0.45)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40 active:translate-y-0 sm:px-11 sm:py-4"
          >
            Back To Home
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full border-2 border-white/60 px-9 py-3.5 text-base font-semibold capitalize tracking-[0.04em] text-white transition duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-[#1a0c70] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40 active:translate-y-0 sm:px-11 sm:py-4"
          >
            Say Hello
          </Link>
        </div>
      </div>
    </main>
  );
}
