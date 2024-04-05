import { Route, Routes, Router } from "react-router-dom"
import HomePage from "./pages/homePage/HomePage";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";


function App() {
  return (
   <div>
    <Header/>
   <BrowserRouter>
      <Routes> 
        <Route path="/portfolio" element={ < HomePage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
