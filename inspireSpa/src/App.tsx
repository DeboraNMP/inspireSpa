import "./global.css"
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Testimonials } from "../src/pages/Testimonials/index";
import { Massages } from "../src/pages/Massages/index"

function App() {

  return (
    <Routes>
      <Route path="/inspirespa" element={<Home />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/massagens" element={<Massages />} />
    </Routes>
  )
}

export default App

