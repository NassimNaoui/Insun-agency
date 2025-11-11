import { CallToAction } from "../ui-kit/InsunButton";

export default function RejoinsNous() {
  return (
    <div
      className="min-h-screen flex flex-col w-screen
        bg-[url('./src/assets/BACKGROUND/svg-top-left.svg')] 
        bg-no-repeat bg-cover bg-center -mt-px"
    >
      <div className="flex-1 flex flex-col-reverse justify-between sm:flex-row">
        {/* Texte */}
        <div className="flex-1 px-2 sm:px-8 md:px-12 lg:px-20 w-full sm:w-[60%] flex flex-col justify-evenly py-8 sm:py-0">
          <h1 className="text-xl sm:text-2xl md:text-4xl xl:text-6xl 2xl:text-8xl text-white font-title mb-4">
            Rejoins l'équipe
          </h1>
          <p className="font-text text-white text-sm sm:text-base lg:text-xl mb-6">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor
            ornare leo, non suscipit magna interdum eu. Curabitur pellentesque
            nibh nibh, at maximus ante.
          </p>
          <CallToAction value="Rejoins nous" />
        </div>

        {/* Image */}
        <div
          className="
            w-full h-64 sm:h-auto sm:w-[40%]
            bg-cover bg-center
          "
          style={{
            backgroundImage:
              "url('./src/assets/PICTURE/Pexels Photo by cottonbro studio.png')",
            WebkitMaskImage: `
              linear-gradient(
                to bottom,
                transparent 0%,
                rgba(0,0,0,0.4) 10%,
                black 35%,
                black 65%,
                rgba(0,0,0,0.4) 90%,
                transparent 100%
              )
            `,
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "cover",
            maskImage: `
              linear-gradient(
                to bottom,
                transparent 0%,
                rgba(0,0,0,0.4) 10%,
                black 35%,
                black 65%,
                rgba(0,0,0,0.4) 90%,
                transparent 100%
              )
            `,
            maskRepeat: "no-repeat",
            maskSize: "cover",
          }}
        ></div>
      </div>
    </div>
  );
}
