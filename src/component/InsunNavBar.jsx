import { NavBarButton } from "../ui-kit/InsunButton";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // icons burger/cross

export default function NavBar() {
  const section = ["Accueil", "Découvrir", "Créateurs", "Expertises"];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 w-full z-10">
      <div className="flex flex-row items-center py-2 lg:py-4 px-6 md:py-6 md:px-8 lg:px-12 bg-gradient-to-b from-[var(--anthracite)]/65 to-[var(--anthracite)]/5 backdrop-blur-xs">
        {/* Logo */}
        <img
          src="./src/assets/SVG/Logo/INSUN_logo-12.svg"
          alt="LOGO INSUN"
          className="w-8 sm:12 md:w-[70px]"
        />

        {/* Desktop Nav */}
        <div className="hidden md:flex grow items-center justify-end gap-6 lg:gap-[52px]">
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
