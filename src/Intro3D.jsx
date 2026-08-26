import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RoomScene from "./RoomScene";
import {
  MissionRoad,
  WhyKaruna,
  RoomsPricing,
  SafetyGrid,
  DailySchedule,
  Gallery,
  ResidentStories,
  ContactSection,
  Footer,
} from "./Sections";

gsap.registerPlugin(ScrollTrigger);

/*
  Scroll choreography (total pinned distance: 300vh)
  ---------------------------------------------------
  0vh   -> 100vh   Opening: isometric bird's-eye hold.
                   Within this beat: "Karuna" wordmark reveals first,
                   holds, fades, then the tagline reveals, holds, fades —
                   scoped to its OWN dedicated ScrollTrigger (start/end
                   "+=100%") so it's tied to real scroll distance, not a
                   fraction of the master 300vh trigger's internal timeline.
  100vh -> 250vh   Flythrough: camera loops around the 4 beds.
  250vh -> 300vh   Window exit: camera pushes through the window,
                   canvas fades out, rest of the site reveals.
*/

const CAMERA_KEYFRAMES = [
  // Opening — isometric bird's-eye, pulled back far enough to frame the
  // whole room (all 4 beds, both wardrobes, and the window) in one shot
  { scroll: 0.0, pos: [10, 11, 10], look: [0, 1, -1] },
  { scroll: 0.33, pos: [10, 11, 10], look: [0, 1, -1] },

  // Flythrough — loop around the 4 beds at dynamic angles
  { scroll: 0.42, pos: [-3.6, 2.4, 2.4], look: [-2.7, 0.5, -2.6] },
  { scroll: 0.55, pos: [-3.2, 1.8, -3.0], look: [-2.7, 0.4, 1.6] },
  { scroll: 0.68, pos: [3.4, 1.6, -3.2], look: [2.7, 0.4, -2.6] },
  { scroll: 0.83, pos: [3.6, 2.2, 2.2], look: [2.7, 0.5, 1.6] },

  // Window exit — straight through the frame center
  { scroll: 0.92, pos: [0, 2.3, -1.6], look: [0, 2.3, -4.3] },
  { scroll: 1.0, pos: [0, 2.3, -4.6], look: [0, 2.3, -8] },
];

function lerp(a, b, t) {
  return a + (b - a) * t;
}
function lerpVec(a, b, t) {
  return [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)];
}

function sampleKeyframes(progress) {
  const kf = CAMERA_KEYFRAMES;
  for (let i = 0; i < kf.length - 1; i++) {
    const a = kf[i];
    const b = kf[i + 1];
    if (progress >= a.scroll && progress <= b.scroll) {
      const span = b.scroll - a.scroll || 1;
      const t = (progress - a.scroll) / span;
      return { pos: lerpVec(a.pos, b.pos, t), look: lerpVec(a.look, b.look, t) };
    }
  }
  return { pos: kf[kf.length - 1].pos, look: kf[kf.length - 1].look };
}

export default function Intro3D() {
  const camRef = useRef();
  const pinRef = useRef();
  const canvasWrapRef = useRef();
  const brandRef = useRef();
  const headlineRef = useRef();
  const restSiteRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Brand + tagline reveal, scoped to real scroll distance (first 100vh only)
      gsap.set(brandRef.current, { opacity: 0, y: 20, scale: 0.96 });
      gsap.set(headlineRef.current, { opacity: 0, y: 24 });

      const introTl = gsap.timeline({
        scrollTrigger: {
          trigger: pinRef.current,
          start: "top top",
          end: "+=100%",
          scrub: 0.4,
        },
      });
      introTl
        // "Karuna" — brand introduction
        .to(brandRef.current, { opacity: 1, y: 0, scale: 1, ease: "power2.out", duration: 0.16 }, 0.02)
        .to(brandRef.current, { opacity: 1, y: 0, duration: 0.14 }, 0.18)
        .to(brandRef.current, { opacity: 0, y: -14, ease: "power1.in", duration: 0.1 }, 0.32)
        // Tagline — takes the brand's place
        .to(headlineRef.current, { opacity: 1, y: 0, ease: "power2.out", duration: 0.16 }, 0.4)
        .to(headlineRef.current, { opacity: 1, y: 0, duration: 0.2 }, 0.56)
        .to(headlineRef.current, { opacity: 0, y: -16, ease: "power1.in", duration: 0.1 }, 0.86);

      // Master pinned timeline driving the camera across the full 300vh
      ScrollTrigger.create({
        trigger: pinRef.current,
        start: "top top",
        end: "+=300%",
        pin: true,
        scrub: 0.6,
        onUpdate: (self) => {
          const cam = camRef.current;
          if (!cam) return;
          const { pos, look } = sampleKeyframes(self.progress);
          cam.position.set(pos[0], pos[1], pos[2]);
          cam.lookAt(look[0], look[1], look[2]);

          // Window exit fade: last 10% of the pin (progress 0.9–1.0)
          if (self.progress >= 0.9) {
            const fadeT = (self.progress - 0.9) / 0.1;
            gsap.set(canvasWrapRef.current, { opacity: 1 - fadeT });
          } else {
            gsap.set(canvasWrapRef.current, { opacity: 1 });
          }
        },
      });

      // Reveal the rest of the site once the window-exit fade completes
      gsap.fromTo(
        restSiteRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: pinRef.current,
            start: "95% top",
            end: "100% top",
            scrub: 0.4,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Pinned 3D stage — occupies 300vh of scroll */}
      <div ref={pinRef} id="top" className="relative h-screen w-full overflow-hidden bg-ivory-deep">
        <div ref={canvasWrapRef} className="absolute inset-0">
          <RoomScene camRef={camRef} initialLook={CAMERA_KEYFRAMES[0]} />
        </div>

        {/* "Karuna" — brand introduction, first beat of the opening sequence */}
        <div
          ref={brandRef}
          className="pointer-events-none absolute inset-0 flex items-center justify-center px-6"
        >
          <span className="font-script text-[clamp(3.5rem,10vw,7rem)] font-bold text-teal-deep drop-shadow-sm">
            Karuna
          </span>
        </div>

        {/* Tagline — second beat, takes the brand's place */}
        <div
          ref={headlineRef}
          className="pointer-events-none absolute inset-0 flex items-center justify-center px-6"
        >
          <h1 className="max-w-3xl text-center font-display text-[clamp(2.2rem,5.5vw,3.8rem)] font-semibold leading-[1.12] text-teal-deep drop-shadow-sm">
            A home for every college chapter{" "}
            <em className="not-italic text-rose">she's</em> writing.
          </h1>
        </div>
      </div>

      {/* Rest-of-site content, revealed as the window-exit completes */}
      <div ref={restSiteRef}>
        <MissionRoad />
        <WhyKaruna />
        <RoomsPricing />
        <SafetyGrid />
        <DailySchedule />
        <Gallery />
        <ResidentStories />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}
