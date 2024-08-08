import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Promotion01 from "./pages/promotion01";
import Promotion02 from "./pages/promotion02";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work01" element={<Promotion01 />} />
        <Route path="/work02" element={<Promotion02 />} />
      </Routes>
    </>
  );
}

export default App;
