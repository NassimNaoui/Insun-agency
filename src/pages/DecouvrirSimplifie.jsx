import { CallToAction } from "../ui-kit/InsunButton";

export default function DecouvrirSimplifie() {
  return (
    <div
      id="Découvrir"
      className="relative bg-[url(./src/assets/BACKGROUND/svg-bottom-right.svg)] bg-no-repeat bg-cover bg-center h-screen max-h-[1200px] -mt-px"
    >
      {/* Fade en haut */}
      <div className="absolute top-0 left-0 w-full h-15 bg-gradient-to-t from-[#2E2E2E]/0 via-[#2E2E2E]/15 via-[#2E2E2E]/35  to-[#2E2E2E]/60  pointer-events-none"></div>
      <div className="flex flex-col  h-full  justify-evenly  px-2 pt-8 sm:px-8 md:px-12 lg:px-20 sm:py-16 lg:py-24">
        {/* Titre */}
        <h1 className="font-title text-white text-xl sm:text-2xl md:text-4xl xl:text-6xl 2xl:text-8xl">
          Notre mission
        </h1>

        {/* Container */}
        <div className=" self-center flex flex-col items-center justify-center w-full max-w-[1200px]">
          {/* Textes */}
          <p className=" text-white text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-text leading-relaxed">
            Chez INSUN, nous croyons que chaque idée mérite d’être partagée de
            manière authentique et impactante. C’est pourquoi nous accompagnons
            les créatifs, les entrepreneurs et les entreprises dans leur
            démarche de différenciation en leur offrant une approche humaine et
            authentique.
          </p>
          <br />

          <p className="  text-white text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-text leading-relaxed">
            Nous vous aidons à vous démarquer en construisant une narration
            forte qui résonne avec vos valeurs et votre audience. Que ce soit à
            travers la création de contenu, le développement de votre marque ou
            l’optimisation de votre présence en ligne, notre mission est de vous
            fournir toutes les clés pour exprimer pleinement votre potentiel
            créatif.
          </p>
          <br />

          <p className=" text-white text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-text leading-relaxed">
            Ensemble, nous mettons en lumière vos projets grâce à une stratégie
            de contenu sur mesure, centrée sur vos besoins et vos ambitions,
            pour faire briller votre histoire et transformer vos idées en
            véritables réussites.
          </p>

          {/* CTA */}
        </div>
        <CallToAction value={"Contactez-nous"} />
      </div>
    </div>
  );
}
