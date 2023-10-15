import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../components/iu/NavBar";
import Home from "../components/iu/Home";
import Generos from "../components/genero/genero";

export default function AppRouter() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generos" element={<Generos />} />
          {/* Agrega más rutas según tus necesidades */}
        </Routes>
      </div>
    </Router>
  );
}

