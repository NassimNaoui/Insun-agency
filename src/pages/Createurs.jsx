import { useState } from "react";
import GridCreators from "../component/GridCreators";

export default function Createurs() {
  const [selectedCreator, setSelectedCreator] = useState(null);

  return (
    <div
      id="createurs"
      className="relative min-h-screen w-screen flex bg-[url('./src/assets/BACKGROUND/svg-bottom-left.svg')] 
                 bg-no-repeat bg-cover bg-center -mt-px pb-5"
    >
      <div className="flex-1 flex flex-col items-center justify-evenly gap-5 mt-16 sm:mt-24 px-2 sm:px-8 md:px-12 lg:px-20">
        <h2 className="self-start font-title text-white font-title text-xl sm:text-2xl md:text-4xl xl:text-6xl 2xl:text-8xl">
          Nos créateurs
        </h2>
        <div className="flex flex-col gap-5 items-center mt-5 md:mt-10 lg:mt-20">
          <GridCreators
            selectedCreator={selectedCreator}
            setSelectedCreator={setSelectedCreator}
          ></GridCreators>
        </div>
      </div>
    </div>
  );
}
