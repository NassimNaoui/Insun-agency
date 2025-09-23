import { useState } from "react";

export default function DecouvrirValeurs() {
  const values = [
    ["Excellence", "TEXT"],
    ["Authenticité", "TEXT"],
    ["Créativité", "TEXT"],
    ["Humain", "TEXT"],
    ["Innovation", "TEXT"],
  ];

  return (
    <div
      className="relative h-screen before:content-[''] before:absolute before:inset-0 
                        before:bg-[url('./src/assets/BACKGROUND/Rectangle_2.png')] 
                        before:bg-no-repeat before:bg-cover before:bg-center 
                        before:rotate-x-180 -m-px"
    >
      <div className="relative z-9 flex items-center justify-center h-full">
        <h1 className="text-4xl text-white font-bold">Nos valeurs</h1>
      </div>
    </div>
  );
}
