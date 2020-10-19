import React, { Component } from "react";
import "./App.css";
import ProfilPhoto from "./Component/Profile/ProfilPhoto";
import Profil from "./Component/Profile/Profil";
import Handle from "./Component/Profile/Handle";

function App() {
  const handleName = (name) => alert(name);
  const styleObject = {
    color: "green",
    fontSize: 25,
    fontWeight: "bold",
    fontStyle: "italic",
  };
  return (
    <div className="App">
      <ProfilPhoto>
        <h2>this is my photo</h2>
      </ProfilPhoto>
      <div style={styleObject}>
        <Profil
          fullname="Sahar KACHOUKH"
          bio="I'm fullstack developer"
          prof="FullStack Developer"
        >
          <img />
        </Profil>
      </div>

      <Handle name=" i am sahar" handleClick={handleName} />
    </div>
  );
}

export default App;
