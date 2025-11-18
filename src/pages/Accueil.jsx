import { useState, useEffect } from "react";

export default function Accueil() {
  // const listExpertises = [
  //   "direction artistique",
  //   "agence créative",
  //   "coaching",
  //   "consulting",
  //   "influence",
  // ];
  //
  // const [index, setIndex] = useState(0);
  //
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIndex((prevIndex) => (prevIndex + 1) % listExpertises.length);
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, [listExpertises.length]);

  return (
    <div
      id="accueil"
      className="
        relative
        bg-[url(./src/assets/BACKGROUND/svg-accueil-fin.svg)] 
        bg-no-repeat bg-cover bg-center 
        h-screen
      "
    >
      {/* Contenu principal */}
      <div
        className="
          h-full flex flex-col justify-center items-start
          px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32
          max-w-6xl
        "
      >
        <img
          src="./src/assets/SVG/Logotype/INSUN_logo-10.svg"
          alt="LOGO INSUN TYPOGRAPHIQUE"
          className="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32"
        />

        <div
          className="
            py-6 sm:py-8 md:py-10 
            text-white font-title capitalize animate-bouncy
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
          "
        >
          direction artistique
        </div>

        <div
          className="
            font-text text-white text-pretty
            text-base sm:text-lg md:text-xl lg:text-2xl
            max-w-[90%] md:max-w-[70%]
          "
        >
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
          Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus..
        </div>
      </div>

      {/* Dégradé fondu en bas */}
      <div className="absolute bottom-0 left-0 w-full h-15 bg-gradient-to-b from-[#2E2E2E]/0 via-[#2E2E2E]/15 via-[#2E2E2E]/35  to-[#2E2E2E]/60   pointer-events-none"></div>
    </div>
  );
}
