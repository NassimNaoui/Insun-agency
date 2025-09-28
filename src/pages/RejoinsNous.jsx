import { CallToAction } from "../ui-kit/InsunButton";

export default function RejoinsNous() {
  return (
    <div
      className="relative h-screen w-screen before:content-[''] before:absolute before:inset-0 
        before:bg-[url('./src/assets/BACKGROUND/Rectangle_2.png')] 
        before:bg-no-repeat before:bg-cover before:bg-center 
        before:rotate-y-180 before:rotate-x-180 -mt-px"
    >
      <div className="relative flex flex-col-reverse lg:flex-row w-full h-full z-9">
        {/* Texte */}
        <div className="sm:px-8 md:px-12 lg:px-20 w-full lg:w-[60%] h-1/2 lg:h-full flex flex-col justify-evenly">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white self-start font-title">
            Rejoins l'équipe
          </h1>
          <p className="font-text text-white sm:text-lg lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor
            ornare leo, non suscipit magna interdum eu. Curabitur pellentesque
            nibh nibh, at maximus ante.
          </p>
          <CallToAction value={"Rejoins nous"}></CallToAction>
        </div>

        {/* Image */}
        <div
          className="relative h-full bg-cover bg-center w-[40%]"
          style={{
            backgroundImage:
              "url('./src/assets/PICTURE/Pexels Photo by cottonbro studio.png')",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "cover",
            maskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
            maskRepeat: "no-repeat",
            maskSize: "cover",
          }}
        ></div>
      </div>
    </div>
  );
}
