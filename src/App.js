import { Route, Routes, Router } from "react-router-dom"
import HomePage from "./pages/homePage/HomePage";
import { BrowserRouter } from "react-router-dom";
import Opportunites from "./pages/opportunites/Opportunities";

function App() {
  return (
   <div>
   <BrowserRouter>
      <Routes> 
        <Route path="/portfolio" element={ < HomePage />} />
        <Route path="/opportunities" element={ < Opportunites />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
