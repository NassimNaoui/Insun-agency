import CreatorCard from "../ui-kit/CreatorCard";
import creatorsData from "../data/creatorsData.json";
import BigCreatorCard from "../ui-kit/BigCreatorCard";

export default function GridCreators({ selectedCreator, setSelectedCreator }) {
  return (
    <div className="">
      <div
        className="
      grid 
      grid-cols-1
      gap-2
      md:grid-cols-2
      md:gap-4
      lg:grid-cols-3
      lg:gap-8
      xl:grid-cols-4
      xl:gap-10
      grid-2xl
      "
      >
        {creatorsData.map((creator, index) => (
          <CreatorCard
            key={index}
            onClick={() =>
              setSelectedCreator({
                creator: creator.creatorName,
                description: creator.description,
                socialNetworksDetails: creator.socialNetworksKpis,
              })
            }
            creatorName={creator.creatorName}
            totalFollowers={creator.grandTotal.allFollowers}
            totalViews={creator.grandTotal.allViews}
          />
        ))}
      </div>
      <DisplayOverlay
        selectedCreator={selectedCreator}
        onClick={() => setSelectedCreator(null)}
      />
    </div>
  );
}

function DisplayOverlay({ selectedCreator, onClick }) {
  if (!selectedCreator) return null;

  return (
    <div
      className="
        fixed inset-0 z-40 
        bg-black/30 
        backdrop-blur-sm 
        flex items-center justify-center
      "
      onClick={onClick} // ferme si on clique hors de la carte
    >
      <div onClick={(e) => e.stopPropagation()}>
        <BigCreatorCard selectedCreator={selectedCreator} onClick={onClick} />
      </div>
    </div>
  );
}
