import ValueCard from "../ui-kit/ValueCard";

export default function DecouvrirValeurs() {
  const values = [
    [
      "Excellence",
      "Nous visons l’exigence dans chaque détail. Qu’il s’agisse d’une vidéo, d’une direction artistique, ou d’une campagne de marque.",
    ],
    [
      "Authenticité",
      "Nous mettons en avant des récits et des contenus qui traduisent la personnalité réelle de chaque créatif et la vision authentique de chaque marque.",
    ],
    [
      "Créativité",
      "La créativité est notre moteur. Nous aidons les créateurs et les marques à sortir des sentiers battus gâce à des concepts visuels, narratifs et stratégiques uniques.",
    ],
    [
      "Humain",
      "Au coeur de tout ce que nous faisons, il y a l’humain. Nous plaçons la relation, l’écoute et la collaboration au centre de chaque marque et chaque créateur.",
    ],
    [
      "Innovation",
      "Nous explorons constamment de nouvelles façons de créer et de communiquer. Que ce soit via les formats de contenu, les outils numériques ou les stratégies de diffusion.",
    ],
  ];

  return (
    <div
      className="min-h-screen flex  bg-[url('./src/assets/BACKGROUND/svg-top-right.svg')] 
                 bg-no-repeat bg-cover bg-center -mt-px pb-5"
    >
      <div className="flex-1 flex flex-col justify-evenly items-center px-2 gap-5 mt-16 sm:mt-24 sm:px-8 md:px-12 lg:px-20">
        <h1 className="text-xl sm:text-2xl md:text-4xl xl:text-6xl 2xl:text-8xl text-white self-start font-title">
          Nos valeurs
        </h1>
        <div
          className="grid gap-4
            sm:grid-cols-1 sm:grid-rows-5
            md:grid-cols-2 md:grid-rows-3
            lg:grid-cols-4 lg:grid-rows-2 max-w-[2000px] 2xl:h-[900px]"
        >
          <ValueCard
            className="lg:col-span-2 lg:row-span-1"
            value={values[0][0]}
            text={values[0][1]}
          />
          <ValueCard
            className="lg:col-span-2 lg:row-span-1"
            value={values[1][0]}
            text={values[1][1]}
          />
          <ValueCard
            className="lg:row-span-2"
            value={values[2][0]}
            text={values[2][1]}
          />

          <ValueCard
            className="lg:col-span-2 lg:row-span-2"
            value={values[3][0]}
            text={values[3][1]}
          />
          <ValueCard
            className="md:col-span-2 lg:col-span-1 lg:row-span-2"
            value={values[4][0]}
            text={values[4][1]}
          />
        </div>
      </div>
    </div>
  );
}
