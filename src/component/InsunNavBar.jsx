import NavBarButton from "../ui-kit/InsunButton";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // icons burger/cross

export default function NavBar() {
  const section = ["Accueil", "Découvrir", "Créateurs", "Expertises"];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 w-full z-10">
      <div className="flex flex-row items-center py-4 px-6 md:py-6 md:px-12 bg-gradient-to-b from-[#333333] to-[#48484800]">
        {/* Logo */}
        <img
          src="./src/assets/SVG/Logo/INSUN_logo-12.svg"
          alt="LOGO INSUN"
          className="w-12 md:w-[86px]"
        />

        {/* Desktop Nav */}
        <div className="hidden md:flex grow items-center justify-end gap-8 lg:gap-[52px]">
          {section.map((label, index) => (
            <NavBarButton key={index} value={label} />
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="ml-auto md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 bg-[#333] py-6">
          {section.map((label, index) => (
            <NavBarButton key={index} value={label} />
          ))}
        </div>
      )}
    </div>
  );
}
