import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Directions from "./components/Directions/Directions";

function App() {
  return (
    <div className="App">
      <Header />
      <Directions />
    </div>
  );
}

export default App;
