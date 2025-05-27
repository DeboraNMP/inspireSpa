import "./global.css"
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Testimonials } from "../src/pages/Testimonials/index";

function App() {

  return (
    <Routes>
      <Route path="/inspirespa" element={<Home />} />
      <Route path="/testimonials" element={<Testimonials />} />
    </Routes>
  )
}

export default App

