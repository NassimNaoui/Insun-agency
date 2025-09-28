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
      id="Accueil"
      className="
        bg-[url(./src/assets/BACKGROUND/Rectangle.png)] 
        bg-no-repeat bg-cover bg-center 
        h-screen
      "
    >
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
          // key={index}
          className="
            py-6 sm:py-8 md:py-10 
            text-white font-title capitalize animate-bouncy
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
          "
        >
          direction artistique {/* listExpertises[index] */}
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
    </div>
  );
}
