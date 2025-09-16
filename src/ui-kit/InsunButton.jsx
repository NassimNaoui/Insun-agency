function NavBarButton({ value, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-white/25 border-1 rounded-full text-white h-fit px-[24px] py-[12px] transition duration-300 ease-out hover:bg-[var(--orange-insun)] focus:bg-[var(--orange-insun)]"
    >
      {value}
    </button>
  );
}

export default NavBarButton;
