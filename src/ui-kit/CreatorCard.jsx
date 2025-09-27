import PlusIcon from "../assets/SVG/icons/Plus circle.svg?react";

export default function CreatorCard({
  creatorName,
  totalFollowers,
  totalViews,
  onClick,
}) {
  return (
    <div
      className="relative w-[350px] h-[500px] bg-[#2E2E2E]/20 rounded-3xl
                    border-1 border-[#676767] 
                    hover:shadow-[4px_4px_50px_0_#FF5E0B]"
    >
      <img
        src="./creator/Osmoz.png"
        alt="Creator picture"
        className="h-full w-full absolute"
      />
      <div
        className="flex flex-col justify-end h-full absolute z-1 w-full px-5 py-2
      bg-[linear-gradient(180deg,rgba(46,46,46,0)_14.06%,rgba(46,46,46,0.65)_57.03%,var(--anthracite,#2E2E2E)_100%)] rounded-b-3xl"
      >
        <div className="font-title text-[var(--orange-insun)] font-bold text-xl">
          {creatorName}
        </div>
        <div className="flex flex-row justify-between pb-5">
          <div className="flex flex-row gap-5">
            <div className="flex flex-row items-center gap-3">
              <img
                src="./src/assets/SVG/icons/Users.svg"
                alt="followers icons"
              />
              <div className="font-text text-white">{totalFollowers}</div>
            </div>
            <div className="flex flex-row items-center gap-3">
              <img src="./src/assets/SVG/icons/Eye.svg" alt="views icons" />
              <div className="font-text text-white">{totalViews}</div>
            </div>
          </div>
          <PlusIcon
            onClick={onClick}
            className="
                cursor-pointer 
              stroke-white 
                transition-all 
                duration-300 
                ease-in-out 
                hover:stroke-[var(--orange-insun)] 
                hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
}
