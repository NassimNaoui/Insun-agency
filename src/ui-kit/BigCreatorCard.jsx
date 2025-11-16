import { useEffect, useState } from "react";
import ExitIcon from "../assets/SVG/icons/exit-button.svg?react";
import x from "../assets/SVG/icons/x.svg?react";
import tiktok from "../assets/SVG/icons/tiktok.svg?react";
import twitch from "../assets/SVG/icons/twitch.svg?react";
import youtube from "../assets/SVG/icons/youtube.svg?react";
import instagram from "../assets/SVG/icons/instagram.svg?react";
import { formatViews } from "../formatNumber";
import { CallToAction } from "./InsunButton";

const socialNetworkIcons = {
  x: x,
  tiktok: tiktok,
  twitch: twitch,
  youtube: youtube,
  instagram: instagram,
};

export default function BigCreatorCard({ selectedCreator, onClick }) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    // Permet le fade-in après le montage du composant
    setTimeout(() => setIsVisible(true), 10);
  }, []);

  return (
    <div
      className={`relative z-50 w-[90vw] max-w-[800px]
      flex flex-col sm:flex-row
      h-auto sm:h-[450px] bg-white rounded-2xl  transition-all duration-500 ease-out
    ${
      isVisible
        ? "opacity-100 scale-100 translate-y-0"
        : "opacity-0 scale-90 translate-y-5"
    }`}
    >
      <img
        className="w-full sm:w-[45%] 
        h-[220px] sm:h-full 
        object-cover rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none
        bg-gradient-to-b from-[var(--anthracite)] to-[var(--anthracite)]/75"
        src={`/creator/${selectedCreator.creator}.png`}
        alt={`${selectedCreator.creator} picture`}
      />
      <div className="flex flex-col flex-1 p-5 justify-between">
        <ExitIcon
          onClick={onClick}
          className="
              
              self-end
              cursor-pointer 
              transition-all 
              duration-300 
              ease-in-out 
              hover:scale-120
              w-5 sm:w-6 md:w-7
            "
        />
        <h3 className="text-3xl sm:text-4xl font-title text-[var(--orange-insun)] font-bold uppercase ">
          {selectedCreator.creator}
        </h3>
        <SocialNetworksKpis
          socialNetworksDetails={selectedCreator.socialNetworksDetails}
        />
        <p className="font-text sm:mb-10">{selectedCreator.description}</p>
        <div className="self-end">
          <CallToAction value={"Collaborer"} onClick={onClick} variant="dark" />
        </div>
      </div>
    </div>
  );
}

function SocialNetworksKpis({ socialNetworksDetails }) {
  if (socialNetworksDetails) {
    return (
      <div className="flex flex-row gap-4">
        {Object.entries(socialNetworksDetails).map(([socialNetwork, infos]) => (
          <div className="flex flex-row gap-2">
            <Icon name={socialNetwork} />
            <div className=" font-text text-[#1E1E1E]" key={socialNetwork}>
              {formatViews(infos.followers)}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

function Icon({ name }) {
  const SvgIcon = socialNetworkIcons[name];
  return SvgIcon ? (
    <SvgIcon className={"h-[24px] w-[24px] fill-[#1E1E1E]"} />
  ) : null;
}
