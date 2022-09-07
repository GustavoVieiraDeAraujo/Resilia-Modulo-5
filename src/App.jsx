// Importando react
import React from "react";

// Importando componentes
import Header from "./components/Header/index.jsx";
import Main from "./components/Main/index.jsx";
import AreaCards from "./components/AreaCards/index.jsx";
import Footer from "./components/Footer/index.jsx";

// Importando CSS global
import "./Global.css"

export function App() {
    
    return (
      <>
        <Header/>
        <Main/>
        <AreaCards/>
        <Footer/>
      </>
    )

  }
