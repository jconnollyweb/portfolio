import { Route, Routes, Router } from "react-router-dom"
import HomePage from "./pages/homePage/HomePage";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import MyCv from "./pages/MyCv";


function App() {
  return (
   <div>
    <Header/>
   <BrowserRouter>
      <Routes> 
        <Route path="/portfolio" element={ < HomePage />} />
        <Route path="/CV" element={ < MyCv />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
