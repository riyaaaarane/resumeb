import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Details from "./components/Details";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}> {/* Navbar as the parent route */}
          <Route index element={<Card />} /> {/* Card as the index route */}
          <Route path="Details" element={<Details />} /> {/* Details route */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
