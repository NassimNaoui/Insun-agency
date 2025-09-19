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

export default NavBarButton;
