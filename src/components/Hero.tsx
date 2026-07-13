import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Hero() {
  const floatingItems = [
    "📖",
    "🩺",
    "📚",
    "🧠",
    "💉",
    "📝",
    "🎓",
    "📄",
  ];

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(".hero-badge", {
      y: 24,
      opacity: 0,
      duration: 0.6,
    })
      .from(
        ".hero-title",
        {
          y: 40,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.35",
      )
      .from(
        ".hero-copy",
        {
          y: 24,
          opacity: 0,
          duration: 0.7,
        },
        "-=0.35",
      )
      .from(
        ".hero-actions",
        {
          y: 18,
          opacity: 0,
          stagger: 0.12,
          duration: 0.55,
        },
        "-=0.3",
      )
      .from(
        ".hero-image",
        {
          x: 60,
          opacity: 0,
          scale: 0.95,
          duration: 1,
        },
        "-=0.85",
      );

    gsap.to(".hero-image-float", {
      y: -10,
      duration: 3.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".hero-glow", {
      scale: 1.08,
      opacity: 0.9,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Animate floating items in
    gsap.from(".orbit-item", {
      scale: 0,
      opacity: 0,
      duration: 0.8,
      stagger: 0.08,
      ease: "back.out(2)",
      delay: 0.6,
    });

    // Individual floating
    gsap.utils.toArray(".orbit-item").forEach((item, i) => {
      gsap.to(item, {
        y: gsap.utils.random(-15, 15),
        x: gsap.utils.random(-8, 8),
        rotation: gsap.utils.random(-8, 8),
        duration: gsap.utils.random(2.5, 4),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.1,
      });
    });

    // Whole orbit rotation
    gsap.to(".orbit-wrapper", {
      rotation: 360,
      transformOrigin: "50% 50%",
      duration: 80,
      repeat: -1,
      ease: "none",
    });
  });

  return (
    <section className="relative overflow-hidden bg-[#031045]">
      <div className="relative mx-auto min-h-screen w-full px-6 py-10 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
        <div className="grid min-h-[calc(100vh-5rem)] grid-cols-1 gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          {/* LEFT SIDE */}
          <div className="flex h-full flex-col justify-center items-start pt-16 sm:pt-20 lg:pt-0 lg:pr-8 xl:pr-16">
            <h1 className="hero-title max-w-3xl text-left text-4xl font-bold leading-[1.05] text-white sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl">
              Learn with clarity.
              <br />
              Prepare with confidence.
            </h1>

            <p className="hero-copy mt-6 max-w-xl text-left text-base leading-7 text-white/75 sm:text-lg md:text-xl xl:text-[1.15rem]">
              I’m Nure Arushi, and I create Biology educational content that helps
              students move forward with confidence.
            </p>

            <div className="hero-actions mt-9 flex flex-wrap gap-4 sm:mt-10">
              <button className="rounded-full bg-yellow-400 px-6 py-3.5 text-sm font-semibold text-[#031045] transition hover:scale-[1.03] sm:px-8 sm:py-4 sm:text-base">
                Explore Courses
              </button>

              <button className="rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-yellow-400 hover:text-yellow-400 sm:px-8 sm:py-4 sm:text-base">
                Watch Videos
              </button>
            </div>

            <div className="mt-10 hidden w-full max-w-md border-t border-white/10 pt-6 text-sm text-white/55 sm:block xl:mt-12">
              Education made simple, practical, and easy to follow.
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex h-full items-end justify-start lg:items-center lg:justify-center">
            <div className="hero-glow absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/20 blur-[140px]" />

            {/* Orbit */}
            <div className="orbit-wrapper absolute left-1/2 top-1/2 z-20 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2">
              {floatingItems.map((icon, i) => {
                const angle = (360 / floatingItems.length) * i;
                const radius = 220;

                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <div
                    key={i}
                    className="orbit-item absolute flex items-center justify-center"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl text-3xl shadow-xl text-white">
                      {icon}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile */}
            <div className="hero-image hero-image-float relative z-30 w-full max-w-[320px] sm:max-w-[380px] md:max-w-[440px] lg:hidden">
              <img
                src="/nure-arushi.png"
                alt="Nure Arushi"
                className="h-auto w-full object-contain drop-shadow-[0_28px_45px_rgba(0,0,0,0.45)]"
              />
            </div>

            {/* Desktop */}
            <div className="hero-image hero-image-float relative z-30 hidden w-full max-w-[560px] lg:block xl:max-w-[680px] 2xl:max-w-[780px]">
              <img
                src="/nure-arushi.png"
                alt="Nure Arushi"
                className="h-auto w-full object-contain drop-shadow-[0_34px_60px_rgba(0,0,0,0.48)]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -left-32 top-16 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-yellow-400/10 blur-[140px]" />
    </section>
  );
}
