import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ExternalLink } from "lucide-react";

const MEDHAUP_URL = "https://medhaup.com"; // TODO: replace with the real MedhaUp link

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-title-line", {
        y: 45,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
      })
        .from(
          ".hero-copy",
          {
            y: 24,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.4",
        )
        .from(
          ".hero-cta",
          {
            y: 18,
            opacity: 0,
            duration: 0.55,
          },
          "-=0.35",
        )
        .from(
          ".hero-image",
          {
            x: 60,
            opacity: 0,
            scale: 0.97,
            duration: 1,
          },
          "-=0.8",
        );
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white">
      <div className="mx-auto w-full max-w-[1500px] px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 items-center gap-10 pb-4 pt-10 sm:pt-14 lg:min-h-[calc(100vh-8.5rem)] lg:grid-cols-[1.15fr_0.85fr] lg:gap-6 lg:pb-0 lg:pt-0">
          {/* LEFT SIDE */}
          <div className="flex flex-col items-start">
            <h1 className="max-w-4xl text-left text-[2.6rem] font-bold uppercase leading-[1.12] tracking-[0.01em] text-[#101828] sm:text-6xl lg:text-[4.2rem] xl:text-[5rem] 2xl:text-[5.5rem]">
              <span className="hero-title-line block">
                Learn with <span className="text-[#f4731f]">clarity</span>,
              </span>
              <span className="hero-title-line block">Prepare with</span>
              <span className="hero-title-line block text-[#f4731f]">
                Confidence
              </span>
            </h1>

            <p className="hero-copy mt-6 max-w-xl text-left text-lg font-semibold leading-8 text-[#101828] sm:text-xl lg:mt-8 lg:text-[1.35rem] lg:leading-9">
              I&rsquo;m Nure Arushi, and I create Biology educational content
              that helps students move forward with confidence.
            </p>

            <div className="hero-cta mt-8 lg:mt-10">
              <a
                href={MEDHAUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-[#f4731f] px-9 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_14px_30px_rgba(244,115,31,0.3)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#e3650f] hover:shadow-[0_18px_38px_rgba(244,115,31,0.38)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#f4731f]/35 active:translate-y-0 sm:px-10 sm:py-[1.15rem] sm:text-base"
              >
                Go to MedhaUp
                <ExternalLink className="h-5 w-5" strokeWidth={2.2} />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex items-end justify-center lg:h-full lg:justify-end">
            <div className="hero-image relative w-full max-w-[340px] sm:max-w-[420px] lg:flex lg:h-full lg:max-w-[560px] lg:items-end xl:max-w-[620px]">
              <img
                src="/nure-arushi.png"
                alt="Nure Arushi"
                draggable={false}
                fetchPriority="high"
                className="h-auto w-full select-none object-contain object-bottom lg:max-h-[82vh]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
