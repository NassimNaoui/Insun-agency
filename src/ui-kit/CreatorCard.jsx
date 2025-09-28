import PlusIcon from "../assets/SVG/icons/Plus circle.svg?react";
import { formatViews } from "../formatNumber";

export default function CreatorCard({
  creatorName,
  totalFollowers,
  totalViews,
  onClick,
}) {
  return (
    <div
      className="
        relative 
        w-[250px] h-[380px]        /* base mobile */
        sm:w-[300px] sm:h-[420px]  /* small screens */
        lg:w-[350px] lg:h-[500px]  /* large screens */
        bg-[#2E2E2E]/20 rounded-3xl
        border border-[#676767] 
        hover:shadow-[4px_4px_50px_0_#FF5E0B]
      "
    >
      <img
        src={`/creator/${creatorName}.png`}
        alt={`${creatorName} picture`}
        className="h-full w-full absolute rounded-3xl object-cover"
      />
      <div
        className="
          flex flex-col justify-end h-full absolute z-1 w-full px-4 py-3
          bg-[linear-gradient(180deg,rgba(46,46,46,0)_14.06%,rgba(46,46,46,0.65)_57.03%,var(--anthracite,#2E2E2E)_100%)]
          rounded-b-3xl
        "
      >
        <div
          className="
            font-title text-[var(--orange-insun)] font-bold uppercase
            text-lg sm:text-xl md:text-2xl
          "
        >
          {creatorName}
        </div>
        <div className="flex flex-row justify-between pb-3 md:pb-5">
          <div className="flex flex-row gap-4 sm:gap-5">
            <div className="flex flex-row items-center gap-2 sm:gap-3">
              <img
                src="./src/assets/SVG/icons/Users.svg"
                alt="followers icons"
                className="w-4 sm:w-5 md:w-6"
              />
              <div className="font-text text-white text-sm sm:text-base md:text-lg">
                {formatViews(totalFollowers)}
              </div>
            </div>
            <div className="flex flex-row items-center gap-2 sm:gap-3">
              <img
                src="./src/assets/SVG/icons/Eye.svg"
                alt="views icons"
                className="w-4 sm:w-5 md:w-6"
              />
              <div className="font-text text-white text-sm sm:text-base md:text-lg">
                {formatViews(totalViews)}
              </div>
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
              hover:scale-110
              w-5 sm:w-6 md:w-7
            "
          />
        </div>
      </div>
    </div>
  );
}
