import { useState, useEffect } from "react";
import NavBar from "./component/InsunNavBar";
import Accueil from "./pages/Accueil";
import Decouvrir from "./pages/Decouvrir";
import Createurs from "./pages/Createurs";
import DecouvrirValeurs from "./pages/DecouvrirValeurs";

import "./App.css";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Accueil></Accueil>
      <Decouvrir></Decouvrir>
      <DecouvrirValeurs></DecouvrirValeurs>
      <Createurs></Createurs>
    </>
  );
}

export default App;
