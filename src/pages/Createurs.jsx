import { useState } from "react";
import GridCreators from "../component/GridCreators";

export default function Createurs() {
  const [selectedCreator, setSelectedCreator] = useState();
  console.log(selectedCreator);

  return (
    <div
      id="Créateurs"
      className="relative lg:h-screen w-screen before:content-[''] before:absolute before:inset-0 
                      before:bg-[url('./src/assets/BACKGROUND/Rectangle_2.png')] 
                      before:bg-no-repeat before:bg-cover before:bg-center 
                      before:rotate-y-180"
    >
      <div className="relative z-9 flex flex-col items-center justify-evenly h-full w-full">
        <h1 className="self-start font-title text-white  text-2xl sm:text-3xl lg:text-4xl sm:px-8 md:px-12 lg:px-20">
          Nos créateurs
        </h1>
        <GridCreators setSelectedCreator={setSelectedCreator}></GridCreators>
      </div>
    </div>
  );
}
