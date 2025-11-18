import authenticite from "../assets/SVG/icons/Authenticité.svg";
import creativite from "../assets/SVG/icons/Créativité.svg";
import excellence from "../assets/SVG/icons/Excellence.svg";
import humain from "../assets/SVG/icons/Humain.svg";
import innovation from "../assets/SVG/icons/Innovation.svg";

export default function ValueCard({ value, text, className = "" }) {
  const icon = {
    Authenticité: authenticite,
    Créativité: creativite,
    Excellence: excellence,
    Humain: humain,
    Innovation: innovation,
  };
  return (
    <article
      itemProp="values"
      itemScope
      itemType="https://schema.org/DefinedTerm"
      className={`
        flex flex-col justify-between bg-white/25 p-1 sm:p-3 rounded-lg 
        ${className}
        hover:bg-[linear-gradient(146deg,#FF5E0B_4.61%,#FF9206_70.46%,var(--jaune-insun)_98.48%)]
        hover:shadow-[1px_1px_25px_2px_var(--orange-insun)]
        transition-transform duration-300 ease-in-out hover:scale-103
      `}
    >
      {/* Icône décorative (ne porte pas d’info → alt vide + aria-hidden) */}
      <img
        src={icon[value]}
        alt=""
        aria-hidden="true"
        className="w-5  md:w-10 2xl:w-14"
      />

      <div className="flex flex-col gap-2">
        <h3
          itemProp="name"
          className="font-title font-bold text-white text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl"
        >
          {value}
        </h3>

        <p
          itemProp="description"
          className="font-text text-white text-sm sm:text-base lg:text-lg xl:text-xl"
        >
          {text}
        </p>
      </div>
    </article>
  );
}
