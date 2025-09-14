import NavBarButton from "../ui-kit/InsunButton";

export default function NavBar() {
  const section = ["Accueil", "Découvrir", "Créateurs", "Expertises"];

  return (
    <div className="flex bg-red-500">
      {section.map((label, index) => (
        <NavBarButton key={index} value={label} />
      ))}
    </div>
  );
}
