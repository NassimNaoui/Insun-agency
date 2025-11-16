import { useState } from "react";
import GridCreators from "../component/GridCreators";

export default function Createurs() {
  const [selectedCreator, setSelectedCreator] = useState(null);

  return (
    <div
      id="Créateurs"
      className="relative min-h-screen w-screen flex bg-[url('./src/assets/BACKGROUND/svg-bottom-left.svg')] 
                 bg-no-repeat bg-cover bg-center -mt-px pb-5"
    >
      <div className="pt-20 flex-1 flex flex-col items-center justify-evenly px-2 gap-5 sm:px-8 md:px-12 lg:px-20">
        <h1 className="self-start font-title text-white font-title text-xl sm:text-2xl md:text-4xl xl:text-6xl 2xl:text-8xl">
          Nos créateurs
        </h1>
        <div className="flex flex-col gap-5 items-center">
          <div className="text-white">
            Petite phrase pour parler de nos supers créateurs.
          </div>
          <GridCreators
            selectedCreator={selectedCreator}
            setSelectedCreator={setSelectedCreator}
          ></GridCreators>
        </div>
      </div>
    </div>
  );
}
