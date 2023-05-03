import React from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from"./components/About";
import Projects from"./components/Projects"
import Footer from "./components/Footer";
function App() {
  return (
    <div className="app">
      <NavBar/>
      <Home/>
      <About/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
