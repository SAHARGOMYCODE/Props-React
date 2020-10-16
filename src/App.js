import React, { Component } from "react";
import "./App.css";
import ProfilPhoto from "./Component/Profile/ProfilPhoto";
import FullName from "./Component/Profile/FullName";
import Adress from "./Component/Profile/Address";

function App() {
  return (
    <div className="App">
      <div className="FullName">
        <FullName />
      </div>
      <Adress />
      <ProfilPhoto />
    </div>
  );
}

export default App;
