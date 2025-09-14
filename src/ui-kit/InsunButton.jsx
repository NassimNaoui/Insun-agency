function NavBarButton({ value, onClick }) {
  return (
    <div className="flex py-[12px] px-[24px] items-center bg-white/75 border-1 rounded-[46px] text-white">
      <button type="button" className="" onClick={onClick}>
        {value}
      </button>
    </div>
  );
}

export default NavBarButton;
