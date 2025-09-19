import { gsap } from "gsap";
import { useState, useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Decouvrir() {
  const sectionRef = useRef(null);
  const childRef = useRef(null);
  const boxRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top", // déclenche quand la section arrive en haut
          end: "+=100%", // durée pendant laquelle la section est "pinned"
          scrub: true,
          pin: true,
          onUpdate: (self) => {
            console.log(self.progress);
            const p = self.progress;
            const center = Math.round(p * 100); // centre du bloc
            const half = 10; // demi-largeur en %
            const left = Math.max(0, center - half);
            const right = Math.min(100, center + half);

            gsap.set(childRef.current, {
              background: `linear-gradient(to right, transparent ${left}%, #FFFFFF ${left}%, #FFFFFF ${right}%, transparent ${right}%)`,
            });
          },
        },
      });
    }, sectionRef);

    return () => ctx.revert(); // clean up sur unmount
  }, []);

  return (
    <div
      id="Découvrir"
      ref={sectionRef}
      className="bg-[url(./src/assets/BACKGROUND/Rectangle_2.png)] bg-no-repeat bg-cover bg-center rotate h-screen -m-px"
    >
      <div className="flex flex-col h-full justify-center px-50 py-25">
        <div className="h-[80%] w-auto bg-red-400">
          <h1 className="font-title text-white text-[36px]">Notre mission</h1>
          <div className="h-full w-auto bg-amber-400 flex flex-col px-25">
            <div
              ref={childRef}
              className="w-full h-15 flex flex-col justify-cente"
            >
              <div className="w-full flex-1 bg-white/0"></div>
            </div>
            <div className="w-full bg-gray-500 flex-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
