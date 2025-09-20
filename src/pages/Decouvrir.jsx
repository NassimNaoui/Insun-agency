import { gsap } from "gsap";
import { useState, useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Decouvrir() {
  const sectionRef = useRef(null);
  const childRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=100%",
          scrub: true,
          pin: true,
          onUpdate: (self) => {
            const p = self.progress; // 0 → 1
            const children = childRef.current.children;

            for (let i = 0; i < children.length; i++) {
              // chaque enfant prend un gradient qui "avance" selon la progression
              const progressStart = i * 0.2; // ajuster selon le nombre d'enfants
              const progressEnd = progressStart + 0.2;

              // calcul du pourcentage à remplir
              let fill =
                ((p - progressStart) / (progressEnd - progressStart)) * 100;
              fill = Math.max(0, Math.min(100, fill));

              children[
                i
              ].style.background = `linear-gradient(to right, #fff ${fill}%, rgba(156,163,175,0.3) ${fill}%)`;
            }
          },
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="Découvrir"
      ref={sectionRef}
      className="bg-[url(./src/assets/BACKGROUND/Rectangle_2.png)] bg-no-repeat bg-cover bg-center rotate h-screen -m-px"
    >
      <div className="flex flex-col h-full justify-center px-50 py-25">
        <div className="h-[80%] w-auto ">
          <h1 className="font-title text-white text-[36px]">Notre mission</h1>
          <div className="h-full w-auto flex flex-col px-15 items-center justify-center">
            <div
              className="h-fit w-full grid grid-cols-[28px_1fr_28px_1fr_28px] items-center relative"
              ref={childRef}
            >
              <div className="w-7 h-7 rounded-full bg-gray-300/30"></div>
              <div className="h-2 w-auto bg-gray-300/30"></div>
              <div className="w-7 h-7 rounded-full bg-gray-300/30"></div>
              <div className="h-2 w-auto bg-gray-300/30"></div>
              <div className="w-7 h-7 rounded-full bg-gray-300/30"></div>
            </div>
            <div className="w-full bg-gray-500 flex-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
