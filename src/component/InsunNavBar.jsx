import NavBarButton from "../ui-kit/InsunButton";

export default function NavBar() {
  const section = ["Accueil", "Découvrir", "Créateurs", "Expertises"];

  return (
    <>
      <div className="fixed top-0 w-full z-10">
        <div className="flex flex-row py-[30px] px-[70px] bg-gradient-to-b from-[#333333] to-[#48484800]">
          <img
            src="./src/assets/SVG/Logo/INSUN_logo-12.svg"
            alt="LOGO INSUN"
            className="w-[86px]"
          />
          <div className="flex grow items-center justify-end gap-[52px]">
            {section.map((label, index) => (
              <NavBarButton key={index} value={label} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
