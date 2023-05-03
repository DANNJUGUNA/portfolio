import React from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from"./components/About";
import Projects from"./components/Projects"
function App() {
  return (
    <div className="app">
      <NavBar/>
      <Home/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
