import ArrowIcon from "../assets/SVG/icons/Arrow right.svg?react";

function NavBarButton({ value, onClick }) {
  return (
    <a
      onClick={onClick}
      href={`#${value}`}
      className="bg-white/25 border-1 rounded-full text-white h-fit px-[24px]
      py-[12px] transition duration-300 font-title ease-out hover:bg-[var(--orange-insun)]
      focus:bg-[var(--orange-insun)]"
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
