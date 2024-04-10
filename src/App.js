import { Route, Routes, Router } from "react-router-dom"
import HomePage from "./pages/homePage/HomePage";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import MyCv from "./pages/MyCv";
import AboutMe from "./pages/aboutme/AboutMe";
import ContactMe from "./pages/contact/ContactMe";


function App() {
  return (
   <div>
    <Header/>
   <BrowserRouter>
      <Routes> 
        <Route path="https://jconnollyweb.github.io/portfolio/portfolio" element={ < HomePage />} /> 
        <Route path="https://jconnollyweb.github.io/portfolio/CV" element={ < MyCv />} />
        <Route path="https://jconnollyweb.github.io/portfolio/aboutme" element={ < AboutMe />} />
        <Route path="https://jconnollyweb.github.io/portfolio/contact" element={ < ContactMe />} />
        {/* removed / from path for github pages to work */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
