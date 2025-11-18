import { CallToAction } from "../ui-kit/InsunButton";

export default function DecouvrirSimplifie() {
  return (
    <section
      id="decouvrir"
      aria-labelledby="titre-mission"
      className="relative bg-[url(./src/assets/BACKGROUND/svg-bottom-right.svg)] flex flex-col bg-no-repeat bg-cover bg-center min-h-screen max-h-[1200px] -mt-px"
    >
      {/* Fade en haut */}
      <div className="absolute top-0 left-0 w-full h-15 bg-gradient-to-t from-[#2E2E2E]/0 via-[#2E2E2E]/15 via-[#2E2E2E]/35 to-[#2E2E2E]/60 pointer-events-none" />

      <div className="flex-1 flex flex-col justify-evenly gap-6 mt-16 sm:mt-24 px-2 sm:px-8 md:px-12 lg:px-20">
        {/* Titre section */}
        <h2
          id="titre-mission"
          className="font-title text-white text-xl sm:text-2xl md:text-4xl xl:text-6xl 2xl:text-8xl"
        >
          Notre mission
        </h2>

        {/* Container */}
        <article
          itemScope
          itemType="https://schema.org/Organization"
          className="self-center flex flex-col items-center justify-center w-full max-w-[1200px]"
        >
          <meta itemProp="name" content="INSUN" />

          <p className="text-white text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-text leading-relaxed mt-4">
            Chez <span itemProp="name">INSUN</span>, nous croyons que chaque
            idée mérite d’être partagée de manière authentique et impactante.
            C’est pourquoi nous accompagnons les créatifs, les entrepreneurs et
            les entreprises dans leur démarche de différenciation en leur
            offrant une approche humaine et authentique.
          </p>

          <p className="text-white text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-text leading-relaxed mt-6">
            Nous vous aidons à vous démarquer en construisant une narration
            forte qui résonne avec vos valeurs et votre audience. Que ce soit à
            travers la création de contenu, le développement de votre marque ou
            l’optimisation de votre présence en ligne, notre mission est de vous
            fournir toutes les clés pour exprimer pleinement votre potentiel
            créatif.
          </p>

          <p className="text-white text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-text leading-relaxed mt-6">
            Ensemble, nous mettons en lumière vos projets grâce à une stratégie
            de contenu sur mesure, centrée sur vos besoins et vos ambitions,
            pour faire briller votre histoire et transformer vos idées en
            véritables réussites.
          </p>
        </article>

        <CallToAction value={"Contactez-nous"} />
      </div>
    </section>
  );
}
