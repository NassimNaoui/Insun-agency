import CreatorCard from "../ui-kit/CreatorCard";

export default function Createurs() {
  function test() {
    console.log("test");
  }

  return (
    <div
      id="Créateurs"
      className="relative h-screen before:content-[''] before:absolute before:inset-0 
                      before:bg-[url('./src/assets/BACKGROUND/Rectangle_2.png')] 
                      before:bg-no-repeat before:bg-cover before:bg-center 
                      before:rotate-y-180"
    >
      <div className="relative z-9 flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl text-white font-bold">Créateurs</h1>
        <CreatorCard
          onClick={test}
          creatorName={"CREATOR NAME"}
          totalFollowers={"TEST"}
          totalViews={300}
        ></CreatorCard>
      </div>
    </div>
  );
}
