import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CallToAction } from "../ui-kit/InsunButton";

gsap.registerPlugin(ScrollTrigger);

export default function Decouvrir() {
  const sectionRef = useRef(null);
  const cursorRef = useRef(null);
  const barRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cursor = cursorRef.current;
    const bar = barRef.current;

    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=100%",
          scrub: true,
          pin: true,
          onUpdate: (self) => {
            const p = self.progress; // 0 → 1
            const maxX = bar.offsetWidth - cursor.offsetWidth;
            gsap.set(cursor, { x: maxX * p });

            // ----- TEXTES -----

            // TEXT 1 : 0 → 0.25
            if (p <= 0.25) {
              gsap.set(text1Ref.current, {
                y: -400 * (p / 0.25),
                opacity: 1 - p / 0.25,
              });
            } else {
              gsap.set(text1Ref.current, { opacity: 0 });
            }

            // TEXT 2 : 0 → 1
            if (p <= 0.25) {
              gsap.set(text2Ref.current, {
                y: -100 * (p / 0.25),
                opacity: 0.3 + (0.5 * p) / 0.25,
              });
            } else if (p <= 0.6) {
              gsap.set(text2Ref.current, {
                y: -100 - 300 * ((p - 0.25) / 0.35),
                opacity: 0.8 + (0.2 * (p - 0.25)) / 0.35,
              });
            } else {
              gsap.set(text2Ref.current, {
                y: -400 - 200 * ((p - 0.6) / 0.4),
                opacity: 1 - (p - 0.6) / 0.4,
              });
            }

            // TEXT 3 : 0 → 1
            if (p <= 0.25) {
              gsap.set(text3Ref.current, {
                y: -50 * (p / 0.25),
                opacity: 0.1 + (0.2 * p) / 0.25,
              });
            } else if (p <= 0.6) {
              gsap.set(text3Ref.current, {
                y: -50 - 200 * ((p - 0.25) / 0.35),
                opacity: 0.3 + (0.4 * (p - 0.25)) / 0.35,
              });
            } else {
              gsap.set(text3Ref.current, {
                y: -250 - 50 * ((p - 0.6) / 0.4),
                opacity: 0.7 + (0.3 * (p - 0.6)) / 0.4,
              });
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
      className="bg-[url(./src/assets/BACKGROUND/Rectangle_2.png)] bg-no-repeat bg-cover bg-center h-screen -m-px"
    >
      <div className="flex flex-col h-full justify-start gap-10 sm:gap-16 lg:gap-20 px-4 sm:px-8 md:px-12 lg:px-20 py-10 sm:py-16 lg:py-20">
        {/* Titre */}
        <h1 className="font-title text-white pt-25 text-2xl sm:text-3xl lg:text-4xl">
          Notre mission
        </h1>

        {/* Container */}
        <div className="self-center flex flex-col items-center justify-center w-full max-w-[900px]">
          {/* Barre de progression */}
          <div
            ref={barRef}
            className="relative w-full h-3 sm:h-4 bg-gray-300/30 rounded-full mb-6 sm:mb-8"
          >
            <div
              ref={cursorRef}
              className="absolute top-0 h-3 sm:h-4 w-8 sm:w-12 rounded-full"
              style={{
                background: `linear-gradient(
                  to right,
                  rgba(255,255,255,0.50) 0%,
                  rgba(255,255,255,0.8) 10%,
                  rgba(255,255,255,1) 30%,
                  rgba(255,255,255,1) 70%,
                  rgba(255,255,255,0.8) 90%,
                  rgba(255,255,255,0.50) 100%
                )`,
                boxShadow: "0 0 10px 5px rgba(255,255,255,0.6)",
              }}
            />
          </div>

          {/* Textes */}
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden">
            <p
              ref={text1Ref}
              className="absolute top-0 w-full text-white text-base sm:text-lg lg:text-xl font-text leading-relaxed"
            >
              Chez INSUN, nous croyons que chaque idée mérite d’être partagée de
              manière authentique et impactante. C’est pourquoi nous
              accompagnons les créatifs, les entrepreneurs et les entreprises
              dans leur démarche de différenciation en leur offrant une approche
              humaine et authentique.
            </p>

            <p
              ref={text2Ref}
              style={{ opacity: 0.3 }}
              className="absolute top-1/3 w-full text-white text-base sm:text-lg lg:text-xl font-text leading-relaxed"
            >
              Nous vous aidons à vous démarquer en construisant une narration
              forte qui résonne avec vos valeurs et votre audience. Que ce soit
              à travers la création de contenu, le développement de votre marque
              ou l’optimisation de votre présence en ligne, notre mission est de
              vous fournir toutes les clés pour exprimer pleinement votre
              potentiel créatif.
            </p>

            <p
              ref={text3Ref}
              style={{ opacity: 0.1 }}
              className="absolute top-2/3 w-full text-white text-base sm:text-lg lg:text-xl font-text leading-relaxed"
            >
              Ensemble, nous mettons en lumière vos projets grâce à une
              stratégie de contenu sur mesure, centrée sur vos besoins et vos
              ambitions, pour faire briller votre histoire et transformer vos
              idées en véritables réussites.
            </p>
          </div>
        </div>
        <CallToAction value={"Contactez-nous"} />
      </div>
    </div>
  );
}
