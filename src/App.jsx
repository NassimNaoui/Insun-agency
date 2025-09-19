import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import NavBar from "./component/InsunNavBar";
import Accueil from "./pages/Accueil";
import Decouvrir from "./pages/Decouvrir";
import Createurs from "./pages/Createurs";
import "./App.css";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Accueil></Accueil>
      <Decouvrir></Decouvrir>
      <Createurs></Createurs>
    </>
  );
}

export default App;
