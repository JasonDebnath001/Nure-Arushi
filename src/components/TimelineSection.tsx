// src/components/TimelineSection.tsx
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type TimelineItem = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

const timelineItems: TimelineItem[] = [
  {
    eyebrow: "Where It All Began",
    title: "A Small Town, A World of Words",
    description:
      "I come from Aminpur, a small town in South Dinajpur, where my story began quietly, with words. From the very beginning, poetry called to me. I wrote to give shape to feelings, to hold on to moments, and to say what ordinary speech could not. In those early lines, I found my voice—and I began to understand the world through verse.",
    image:
      "https://ik.imagekit.io/jasondebnath/a487bfae-0d0a-4f7c-ba8a-a1433edb52e0.jfif",
    imageAlt: "Writing poetry",
  },
  {
    eyebrow: "First Publication",
    title: "My Words Found Their First Home",
    description:
      "Seeing my first piece published in a literary magazine was a moment I'll never forget. It wasn't simply about being in print—it was the quiet reassurance that the thoughts I had carried for so long could reach beyond the pages of my notebook and resonate with others. It gave me the confidence to keep writing, one story at a time.",
    image:
      "https://ik.imagekit.io/jasondebnath/WhatsApp%20Image%202026-07-26%20at%204.49.19%20PM.jpeg",
    imageAlt: "First publication",
  },
  {
    eyebrow: "First Book",
    title: "Arektu Theke Jete Pari",
    description:
      "There are moments every writer dreams of, and for me, this was one of them. Holding my first book, Arektu Theke Jete Pari, in my hands felt surreal. The words that had once lived only in my notebooks had finally found their own place in the world. That launch wasn't just the beginning of a book—it was the beginning of believing that my voice could travel far beyond the pages I wrote on.",
    image:
      "https://ik.imagekit.io/jasondebnath/WhatsApp%20Image%202026-07-26%20at%204.49.20%20PM.jpeg",
    imageAlt: "First book launch",
  },
  {
    eyebrow: "Recognition",
    title: "A Voice That Began To Be Heard",
    description:
      "Every writer hopes that one day their words will reach beyond the page. Receiving the Sonnet Publication Kobi Samman was a deeply humbling moment in my journey. Standing before an audience and being recognized for my writing reminded me that every poem, every sleepless night, and every emotion I had poured into my work had found a place in the hearts of others.",
    image:
      "https://ik.imagekit.io/jasondebnath/WhatsApp%20Image%202026-07-26%20at%204.49.20%20PM%20(1).jpeg",
    imageAlt: "Literary award",
  },
  {
    eyebrow: "Another Milestone",
    title: "Priya Payel Gora Smriti Sahitya Sammanana",
    description:
      "Every recognition reminded me that words have the power to travel farther than we imagine. Receiving the Priya Payel Gora Smriti Sahitya Sammanana from Apnar Kobita strengthened my faith in literature. It wasn't simply an award on a shelf—it was a reminder to keep writing with honesty, to keep feeling deeply, and to trust that every poem carries the possibility of touching someone's heart.",
    image:
      "https://ik.imagekit.io/jasondebnath/WhatsApp%20Image%202026-07-26%20at%204.49.21%20PM.jpeg",
    imageAlt: "Award",
  },
  {
    eyebrow: "Another Book",
    title: "Every Book Tells A New Story",
    description:
      "There is a unique joy in watching an idea grow into a book. With the launch of my second poetry collection, I felt the same excitement I had experienced the very first time—but with a deeper sense of purpose. Every page carried stories, emotions, and fragments of my journey, reminding me that writing is not just about publishing books; it's about leaving behind pieces of your soul for someone else to discover.",
    image:
      "https://ik.imagekit.io/jasondebnath/WhatsApp%20Image%202026-07-26%20at%204.49.24%20PM.jpeg",
    imageAlt: "Second book",
  },
  {
    eyebrow: "A New Calling",
    title: "Falling In Love With Biology",
    description:
      "As the years passed, my pen found a new purpose. What began as curiosity slowly grew into a deep love for Biology—a subject that revealed the beauty, complexity, and wonder of life itself. I immersed myself in learning, questioned everything, and spent countless hours mastering every concept. Before I knew it, teaching had become more than a profession; it had become my passion.",
    image:
      "https://ik.imagekit.io/jasondebnath/WhatsApp%20Image%202026-07-26%20at%204.49.20%20PM%20(2).jpeg",
    imageAlt: "Teaching Biology",
  },
  {
    eyebrow: "Building Dreams",
    title: "Co-founding Exam Album",
    description:
      "My love for Biology eventually grew into something much bigger than myself. With a vision to make quality guidance accessible, I co-founded Exam Album to help aspiring nurses prepare for the ANM and GNM entrance examinations. It wasn't just about teaching a syllabus—it was about inspiring confidence, providing the right direction, and standing beside every student as they chased a dream that could transform their lives.",
    image: "https://ik.imagekit.io/jasondebnath/images%20(2).jfif",
    imageAlt: "Exam Album",
  },
  {
    eyebrow: "Today",
    title: "Building MedhaUp",
    description:
      "Every chapter of my journey—from writing poetry to teaching Biology—led me to one realization: students deserve more than just lessons; they deserve the very best learning experience. That vision inspired me to build MedhaUp, my own educational venture dedicated to delivering advanced, up-to-date, and high-quality education. More than a platform, MedhaUp is a promise to empower every learner with conceptual clarity, modern teaching methods, and the confidence to achieve their dreams. And for me, this is only the beginning.",
    image:
      "https://ik.imagekit.io/jasondebnath/WhatsApp%20Image%202026-07-26%20at%205.35.16%20PM.jpeg",
    imageAlt: "MedhaUp",
  },
];

export default function TimelineSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const linePathRef = useRef<SVGPathElement | null>(null);

  const setTextRef = (index: number) => (el: HTMLDivElement | null) => {
    textRefs.current[index] = el;
  };

  const setImageRef = (index: number) => (el: HTMLDivElement | null) => {
    imageRefs.current[index] = el;
  };

  useGSAP(
    () => {
      const section = sectionRef.current;
      const pin = pinRef.current;
      const line = linePathRef.current;

      if (!section || !pin || !line) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const lineLength = line.getTotalLength();
      gsap.set(line, {
        strokeDasharray: lineLength,
        strokeDashoffset: lineLength,
      });

      textRefs.current.forEach((el, index) => {
        if (!el) return;

        if (reduceMotion) {
          el.classList.remove("absolute", "inset-0");
          el.classList.add("relative", "mb-6", "w-full");
        } else {
          el.classList.remove("relative", "mb-6", "w-full");
          el.classList.add("absolute", "inset-0");
        }

        gsap.set(el, {
          autoAlpha: reduceMotion || index === 0 ? 1 : 0,
          y: reduceMotion || index === 0 ? 0 : 28,
          scale: reduceMotion || index === 0 ? 1 : 0.985,
          filter: reduceMotion || index === 0 ? "blur(0px)" : "blur(1px)",
        });
      });

      imageRefs.current.forEach((el, index) => {
        if (!el) return;

        if (reduceMotion) {
          el.classList.remove("absolute", "inset-0");
          el.classList.add(
            "relative",
            "mb-6",
            "w-full",
            "min-h-[18rem]",
            "sm:min-h-[20rem]",
            "lg:min-h-[24rem]",
          );
        } else {
          el.classList.remove(
            "relative",
            "mb-6",
            "w-full",
            "min-h-[18rem]",
            "sm:min-h-[20rem]",
            "lg:min-h-[24rem]",
          );
          el.classList.add("absolute", "inset-0");
        }

        gsap.set(el, {
          autoAlpha: reduceMotion || index === 0 ? 1 : 0,
          y: reduceMotion || index === 0 ? 0 : 22,
          scale: reduceMotion || index === 0 ? 1 : 0.985,
        });
      });

      if (reduceMotion) {
        gsap.set(line, { strokeDashoffset: 0 });
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${window.innerHeight * (timelineItems.length - 1)}`,
          pin,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(
        line,
        {
          strokeDashoffset: 0,
          ease: "none",
          duration: timelineItems.length - 1,
        },
        0,
      );

      for (let i = 1; i < timelineItems.length; i += 1) {
        const at = i - 0.58;

        const prevText = textRefs.current[i - 1];
        const nextText = textRefs.current[i];
        const prevImage = imageRefs.current[i - 1];
        const nextImage = imageRefs.current[i];

        if (prevText) {
          tl.to(
            prevText,
            {
              autoAlpha: 0,
              y: -20,
              scale: 0.985,
              filter: "blur(1px)",
              duration: 0.45,
              ease: "power2.out",
            },
            at,
          );
        }

        if (prevImage) {
          tl.to(
            prevImage,
            {
              autoAlpha: 0,
              y: -16,
              scale: 0.985,
              duration: 0.45,
              ease: "power2.out",
            },
            at,
          );
        }

        if (nextText) {
          tl.fromTo(
            nextText,
            { autoAlpha: 0, y: 28, scale: 0.985, filter: "blur(1px)" },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
              duration: 0.55,
              ease: "power3.out",
            },
            at + 0.12,
          );
        }

        if (nextImage) {
          tl.fromTo(
            nextImage,
            { autoAlpha: 0, y: 22, scale: 0.985 },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.55,
              ease: "power3.out",
            },
            at + 0.12,
          );
        }
      }
    },
    { dependencies: [], scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden text-white"
      style={{
        backgroundColor: "#ff7c30",
        minHeight: `calc(100svh * ${timelineItems.length})`,
      }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div ref={pinRef} className="relative flex h-[100svh] items-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Journey
          </h2>

          <div className="grid gap-5 lg:grid-cols-[1fr_120px_1fr] lg:gap-7">
            <div className="relative min-h-[18rem] sm:min-h-[20rem] lg:min-h-[34rem]">
              {timelineItems.map((item, index) => (
                <article
                  key={item.title}
                  ref={setTextRef(index)}
                  className="absolute inset-0 flex items-center"
                  style={{ willChange: "transform, opacity, filter" }}
                >
                  <div className="w-full rounded-[2rem] border border-white/14 bg-white/[0.08] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.16)] backdrop-blur-xl sm:p-7">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/58">
                      {item.eyebrow}
                    </p>

                    <h3 className="mt-3 max-w-xl text-2xl font-semibold tracking-tight sm:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-white/84 sm:text-[15px]">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="relative flex min-h-[10rem] items-center justify-center lg:min-h-[34rem]">
              <svg
                viewBox="0 0 120 620"
                className="h-24 w-20 sm:h-28 sm:w-24 lg:h-full lg:w-[120px]"
                aria-hidden="true"
              >
                <path
                  d="M60 18 C64 130 56 210 60 310 C64 410 56 490 60 602"
                  fill="none"
                  stroke="rgba(13,39,79,0.22)"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                <path
                  ref={linePathRef}
                  d="M60 18 C64 130 56 210 60 310 C64 410 56 490 60 602"
                  fill="none"
                  stroke="#0d274f"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="relative min-h-[18rem] sm:min-h-[20rem] lg:min-h-[34rem]">
              {timelineItems.map((item, index) => (
                <figure
                  key={item.image}
                  ref={setImageRef(index)}
                  className="absolute inset-0 overflow-hidden rounded-[2rem] border border-white/14 bg-white/[0.08] shadow-[0_24px_80px_rgba(0,0,0,0.18)]"
                  style={{ willChange: "transform, opacity" }}
                >
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="h-full w-full object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d274f]/55 via-[#0d274f]/10 to-transparent" />
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
