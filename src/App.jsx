import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import NavBar from "./component/InsunNavBar";
import "./App.css";

function App() {
  return (
    <>
      <div className="bg-[url(./src/assets/BACKGROUND/Rectangle.png)] bg-no-repeat bg-cover bg-center h-screen">
        <NavBar></NavBar>
      </div>
    </>
  );
}

export default App;
