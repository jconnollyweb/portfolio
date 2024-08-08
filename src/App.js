import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/homePage/HomePage";
import Header from "./components/Header";
import MyCv from "./pages/MyCv";
import AboutMe from "./pages/aboutme/AboutMe";
import ContactMe from "./pages/contact/ContactMe";


function App() {
  return (
   <>
    <Header/>
      <Routes> 
        <Route path="/" element={ < HomePage />} /> 
        <Route path="/CV" element={ < MyCv />} />
        <Route path="/aboutme" element={ < AboutMe />} />
        <Route path="/contact" element={ < ContactMe />} />
        {/* removed / from path for github pages to work */}
      </Routes>
    </>
  );
}

// test

export default App;
