import { useState, useEffect } from "react";

export default function Accueil() {
  //   const listExpertises = [
  //     "direction artistique",
  //     "agence créative",
  //     "coaching",
  //     "consulting",
  //     "influence",
  //   ];

  //   const [index, setIndex] = useState(0);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setIndex((prevIndex) => (prevIndex + 1) % listExpertises.length);
  //     }, 3000);

  //     return () => clearInterval(interval);
  //   }, [listExpertises.length]);

  return (
    <div
      id="Accueil"
      className="bg-[url(./src/assets/BACKGROUND/Rectangle.png)] bg-no-repeat bg-cover bg-center h-screen"
    >
      <div className="h-full py-100 px-50">
        <img
          src="./src/assets/SVG/Logotype/INSUN_logo-10.svg"
          alt="LOGO INSUN TYPOGRAPHIQUE"
          className="h-[100px]"
        />
        <div
          // key={index}
          className="py-10 text-white text-[36px] capitalize font-title  animate-bouncy"
        >
          direction artistique {/*listExpertises[index]*/}
        </div>
        <div className="font-text text-white text-[24px] text-balance">
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
          Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus..
        </div>
      </div>
    </div>
  );
}
