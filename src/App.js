import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/homePage/HomePage";
import MyCv from "./pages/MyCv";
import ContactMe from "./pages/contact/ContactMe";


function App() {
  return (
   <>
   
      <Routes> 
        <Route path="/" element={ < HomePage />} /> 
        <Route path="/CV" element={ < MyCv />} />
        <Route path="/contact" element={ < ContactMe />} />
      </Routes>
    </>
  );
}



export default App;
