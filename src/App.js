import "./App.css";
import React from "react";
import Header from "./components/Header";
import Filters from "./components/Filters";
import SideBar from "./components/SideBar";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="body-filter w-4/5 mx-auto my-8">
        <Filters />
        <SideBar />
      </div>
    </div>
  );
}

export default App;
