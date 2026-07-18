import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Brain,
  CircleHelp,
  ClipboardCheck,
  Video,
  type LucideIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type MedhaUpSectionProps = {
  logoSrc?: string;
  educatorImageSrc?: string;
  admissionPath?: string;
};

type FeatureKind = "live" | "test" | "doubt";

type Feature = {
  kind: FeatureKind;
  lines: string[];
  Icon: LucideIcon;
};

const features: Feature[] = [
  {
    kind: "live",
    lines: ["DAILY LIVE", "CLASSES"],
    Icon: Video,
  },
  {
    kind: "test",
    lines: ["MOCK", "TESTS"],
    Icon: ClipboardCheck,
  },
  {
    kind: "doubt",
    lines: ["SPECIAL DOUBT", "SOLVING SESSIONS"],
    Icon: Brain,
  },
];

function FeatureIcon({
  kind,
  Icon,
}: {
  kind: FeatureKind;
  Icon: LucideIcon;
}) {
  if (kind === "live") {
    return (
      <div
        aria-hidden="true"
        className="flex size-[62px] items-center justify-center rounded-[12px] bg-[#ff3131] shadow-[0_9px_20px_rgba(255,49,49,0.18)] lg:size-[66px]"
      >
        <Icon
          className="size-[35px] text-white"
          strokeWidth={1.9}
        />
      </div>
    );
  }

  if (kind === "test") {
    return (
      <div
        aria-hidden="true"
        className="flex size-[66px] items-center justify-center rounded-[16px] bg-[#e5e9ff] shadow-[0_9px_20px_rgba(77,101,215,0.15)] lg:size-[70px]"
      >
        <Icon
          className="size-[42px] text-[#5a74df]"
          strokeWidth={1.8}
        />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className="relative flex size-[70px] items-center justify-center text-[#9c64a1] lg:size-[76px]"
    >
      <Icon className="size-[58px]" strokeWidth={1.65} />

      <span className="absolute -right-1 top-0 flex size-[31px] items-center justify-center rounded-full bg-white shadow-[0_4px_12px_rgba(76,33,91,0.18)]">
        <CircleHelp className="size-[29px] text-[#bf78ac]" strokeWidth={2} />
      </span>
    </div>
  );
}

function FeatureDivider({ index }: { index: number }) {
  /*
   * Mobile:
   * Horizontal divider beneath each feature.
   *
   * Tablet:
   * Vertical dividers between the first three features.
   *
   * Desktop:
   * Vertical divider after every feature, matching the reference.
   */
  if (index < 2) {
    return (
      <span
        aria-hidden="true"
        className="
          absolute bottom-0 left-1/2 h-[2px] w-[62%]
          -translate-x-1/2 bg-[#fe7b30]
          sm:bottom-auto sm:left-auto sm:right-0 sm:top-1/2
          sm:h-[62%] sm:w-[3px] sm:translate-x-0 sm:-translate-y-1/2
        "
      />
    );
  }

  return (
    <span
      aria-hidden="true"
      className="
        absolute bottom-0 left-1/2 h-[2px] w-[62%]
        -translate-x-1/2 bg-[#fe7b30]
        sm:hidden
        lg:bottom-auto lg:left-auto lg:right-0 lg:top-1/2 lg:block
        lg:h-[62%] lg:w-[3px] lg:translate-x-0 lg:-translate-y-1/2
      "
    />
  );
}

export default function MedhaUpSection({
  logoSrc = "/medhaup-logo.png",
  educatorImageSrc = "/nure-arushi-medhaup.png",
  admissionPath = "/admission",
}: MedhaUpSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;

      if (!section) {
        return;
      }

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        return;
      }

      const timeline = gsap.timeline({
        defaults: {
          duration: 0.8,
          ease: "power3.out",
        },
        scrollTrigger: {
          trigger: section,
          start: "top 72%",
          once: true,
        },
      });

      timeline
        .from("[data-medhaup-reveal='logo']", {
          x: -35,
          autoAlpha: 0,
        })
        .from(
          "[data-medhaup-reveal='headline']",
          {
            y: 35,
            autoAlpha: 0,
            duration: 0.95,
          },
          "-=0.45",
        )
        .from(
          "[data-medhaup-reveal='description']",
          {
            y: 20,
            autoAlpha: 0,
          },
          "-=0.55",
        )
        .from(
          "[data-medhaup-reveal='educator']",
          {
            x: 70,
            autoAlpha: 0,
            scale: 0.97,
            duration: 1,
          },
          "-=0.8",
        )
        .from(
          "[data-medhaup-reveal='panel']",
          {
            y: 45,
            autoAlpha: 0,
            scale: 0.985,
            duration: 0.9,
          },
          "-=0.55",
        )
        .from(
          "[data-medhaup-reveal='feature']",
          {
            y: 25,
            autoAlpha: 0,
            stagger: 0.13,
            duration: 0.65,
          },
          "-=0.55",
        )
        .from(
          "[data-medhaup-reveal='cta']",
          {
            x: 30,
            autoAlpha: 0,
            duration: 0.7,
          },
          "-=0.45",
        );
    },
    {
      scope: sectionRef,
    },
  );

  return (
    <section
      ref={sectionRef}
      className="medhaup-section relative isolate overflow-hidden bg-[#fe7b30]"
      aria-labelledby="medhaup-heading"
    >
      {/* Dark-blue upper area */}
      <div className="relative overflow-hidden bg-[#1a0c70] lg:h-[clamp(500px,32.8125vw,525px)]">
        <div className="relative mx-auto h-full max-w-[1600px] overflow-hidden px-5 sm:px-10 lg:px-0">
          {/* Logo */}
          <img
            data-medhaup-reveal="logo"
            src={logoSrc}
            alt="MedhaUp"
            draggable={false}
            className="
              relative z-20 w-[155px] pb-7
              select-none object-contain
              sm:w-[190px] sm:pt-0
              lg:absolute lg:left-[5.3%] lg:top-[46px]
              lg:w-[220px] lg:pb-0
            "
          />

          {/* Main copy */}
          <div
            className="
              relative z-20 mt-12 max-w-[720px] pb-4
              sm:mt-14
              lg:absolute lg:left-[5.3%] lg:top-[42.5%]
              lg:mt-0 lg:w-[48%] lg:pb-0
            "
          >
            <h2
              id="medhaup-heading"
              data-medhaup-reveal="headline"
              className="
                text-[clamp(2.45rem,8.6vw,3.25rem)]
                font-bold uppercase leading-[0.96]
                tracking-[0.015em] text-white
                lg:text-[clamp(2.55rem,3.25vw,3.25rem)]
              "
            >
              <span className="block lg:whitespace-nowrap">
                Bengal’s{" "}
                <span className="text-[#fe7b30]">trusted</span> &amp;
              </span>

              <span className="mt-[0.48em] block text-[#fe7b30]">
                Affordable
              </span>

              <span className="mt-[0.48em] block lg:whitespace-nowrap">
                Education platform
              </span>
            </h2>

            <p
              data-medhaup-reveal="description"
              className="
                mt-6 max-w-[660px] text-[13px]
                font-medium uppercase leading-[1.3]
                tracking-[0.015em] text-white
                sm:text-[15px]
                lg:mt-5
              "
            >
              Unlock your potential with quality education and a effective
              roadmap
              <br className="hidden sm:block" /> towards your nursing dream.
            </p>
          </div>

          {/* Educator cutout */}
          <img
            data-medhaup-reveal="educator"
            src={educatorImageSrc}
            alt="Nure Arushi, MedhaUp educator"
            draggable={false}
            decoding="async"
            className="
              relative z-10 mx-auto mt-8 h-[320px]
              w-full max-w-[430px] select-none
              object-contain object-bottom
              sm:h-[420px] sm:max-w-[520px]
              lg:absolute lg:bottom-0 lg:right-[4.5%]
              lg:mt-0 lg:h-[96%] lg:w-[36%]
              lg:max-w-[520px]
            "
          />
        </div>
      </div>

      {/* White features panel */}
      <div
        data-medhaup-reveal="panel"
        className="
          relative z-30 mx-auto -mt-7
          grid w-[calc(100%_-_2rem)] grid-cols-1
          overflow-hidden rounded-[38px] bg-white
          shadow-[0_22px_55px_rgba(70,25,0,0.14)]
          sm:grid-cols-3 sm:rounded-[58px]
          lg:-mt-[7px] lg:h-[270px]
          lg:w-[92%] lg:max-w-[1472px]
          lg:grid-cols-[0.82fr_1fr_1.12fr_2fr]
          lg:rounded-[100px] lg:shadow-none
        "
      >
        {features.map((feature, index) => (
          <article
            key={feature.kind}
            data-medhaup-reveal="feature"
            className="
              relative flex min-h-[150px]
              flex-col items-center justify-center
              gap-3 px-4 py-7 text-center
              sm:min-h-[170px] sm:py-8
              lg:min-h-0 lg:gap-3 lg:py-0
            "
          >
            <FeatureIcon kind={feature.kind} Icon={feature.Icon} />

            <h3
              className="
                text-[21px] font-bold uppercase
                leading-[1.25] tracking-[-0.01em]
                text-black
                lg:text-[22px]
              "
            >
              {feature.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h3>

            <FeatureDivider index={index} />
          </article>
        ))}

        {/* Admission CTA */}
        <div
          data-medhaup-reveal="cta"
          className="
            relative flex min-h-[155px]
            items-center justify-center p-5
            sm:col-span-3 sm:min-h-[150px] sm:px-12
            lg:col-span-1 lg:min-h-0 lg:px-10 lg:py-0
          "
        >
          {/* Tablet-only separator */}
          <span
            aria-hidden="true"
            className="
              absolute left-1/2 top-0 hidden
              h-[3px] w-[78%] -translate-x-1/2
              bg-[#fe7b30] sm:block lg:hidden
            "
          />

          <Link
            to={admissionPath}
            aria-label="Take admission now"
            className="
              flex min-h-[78px] w-full max-w-[448px]
              items-center justify-center rounded-full
              bg-[#fe7b30] px-6 py-4 text-center
              text-[clamp(1.55rem,6vw,2.1rem)]
              font-bold uppercase leading-none text-white
              shadow-[0_13px_30px_rgba(254,123,48,0.24)]
              transition duration-300
              hover:-translate-y-1
              hover:bg-[#f36b20]
              hover:shadow-[0_18px_35px_rgba(254,123,48,0.34)]
              focus-visible:outline-none
              focus-visible:ring-4
              focus-visible:ring-[#1a0c70]
              focus-visible:ring-offset-4
              active:translate-y-0
              lg:h-[106px] lg:text-[2.1rem]
            "
          >
            Take admission now
          </Link>
        </div>
      </div>

      {/* Orange space beneath the panel */}
      <div className="h-12 sm:h-16 lg:h-[112px]" aria-hidden="true" />
    </section>
  );
}