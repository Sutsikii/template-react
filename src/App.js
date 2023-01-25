import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
      <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contact" element={<Contact/>}/>

                <Route path="*" element={fallback()} />
            </Routes>
      </BrowserRouter>
  );
}

const fallback = () => <Home />; // Fallback Page

export default App;
