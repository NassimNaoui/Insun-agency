import ArrowIcon from "../assets/SVG/icons/Arrow right.svg?react";
import { formatString } from "../utilities/formatNumberString";

function NavBarButton({ value, onClick }) {
  const id = formatString(value);

  return (
    <a
      onClick={onClick}
      href={`#${id}`}
      className="
        bg-white/25 border-1 rounded-full text-white 
        font-title transition duration-300 ease-out
        hover:bg-[var(--orange-insun)] focus:bg-[var(--orange-insun)]
        
        /* base (mobile) */
        px-4 py-2 text-sm
        
        /* tablette (md) */
        md:px-5 md:py-2.5 md:text-base
        
        /* desktop (lg+) */
        lg:px-6 lg:py-3 lg:text-lg

        whitespace-nowrap
      "
    >
      {value}
    </a>
  );
}

function CallToAction({ value, onClick, variant = "default" }) {
  const variants = {
    default: "bg-white hover:bg-[var(--orange-insun)] hover:text-white",
    dark: "bg-[var(--anthracite)] text-white hover:bg-[var(--orange-insun)] hover:text-white",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        self-center
        
        border border-[rgba(202,202,202,0.6)]
        flex flex-row items-center justify-center gap-2
        rounded-full
        text-[var(--anthracite)] font-title
        px-6 py-3
        text-sm sm:text-base md:text-lg
        cursor-pointer
        ${variants[variant]}
        transition duration-300 ease-out
        active:scale-95
      `}
    >
      <span className="whitespace-nowrap">{value}</span>
      <ArrowIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
    </button>
  );
}

export { NavBarButton, CallToAction };
