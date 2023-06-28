import NavbarComponent from "./Components/Navbar/NavbarComponent"
import React from "react";
import SearchPanelComponent from "./Components/SearchPanel/SearchPanelComponent";
import MainPanelComponent from "./Components/Main/MainPanelComponent";
import Footer from "./Components/Footer/FooterComponent";

function App() {
  return (
    <div>
      <NavbarComponent></NavbarComponent>
      <SearchPanelComponent></SearchPanelComponent>
      <MainPanelComponent></MainPanelComponent>
      <Footer></Footer>
    </div>
  );
}

export default App;
