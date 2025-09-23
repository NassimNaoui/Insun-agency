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

function CallToAction({ value, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="self-center bg-white border border-[rgba(202,202,202,0.60)] flex flex-row gap-[10px] justify-center items-center w-fit rounded-full text-[var(--anthracite)] h-fit px-[24px]
    py-[16px] cursor-pointer
    transition duration-300 font-title ease-out hover:bg-[var(--orange-insun)] hover:text-white"
    >
      <div>{value}</div>
      <ArrowIcon className="" />
    </button>
  );
}

export { NavBarButton, CallToAction };
