import { useState, useEffect } from "react";
import NavBar from "./component/InsunNavBar";
import Accueil from "./pages/Accueil";
import Decouvrir from "./pages/Decouvrir";
import Createurs from "./pages/Createurs";
import DecouvrirValeurs from "./pages/DecouvrirValeurs";
import RejoinsNous from "./pages/RejoinsNous";
import DecouvrirSimplifie from "./pages/DecouvrirSimplifie";

import "./App.css";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Accueil></Accueil>
      <DecouvrirSimplifie></DecouvrirSimplifie>
      <DecouvrirValeurs></DecouvrirValeurs>
      <Createurs></Createurs>
      <RejoinsNous></RejoinsNous>
    </>
  );
}

export default App;
