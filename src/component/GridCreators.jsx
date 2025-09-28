import CreatorCard from "../ui-kit/CreatorCard";
import creatorsData from "../data/creatorsData.json";

export default function GridCreators({ onClick }) {
  return (
    <div
      className="
      grid 
      grid-cols-1
      gap-2
      md:grid-cols-2
      md:gap-4
      lg:grid-cols-3
      lg:gap-8
      "
    >
      {creatorsData.map((creator, index) => (
        <CreatorCard
          key={index}
          onClick={onClick}
          creatorName={creator.creator_name}
          totalFollowers={creator.grand_total.all_followers}
          totalViews={creator.grand_total.all_views}
        />
      ))}
    </div>
  );
}
