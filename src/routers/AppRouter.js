import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../components/iu/NavBar";
import Home from "../components/iu/Home";
import Generos from "../components/genero/genero";
import Footer from "../components/iu/Footer";

export default function AppRouter() {
  const estilo = {
    position: 'absolute',
    height: '100%',
    width: '100%',
    background: '#18332c',

    // Otros estilos aquí
  };
  
  return (
    <Router>
      <div className="" style={estilo}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generos" element={<Generos />} />
          {/* Agrega más rutas según tus necesidades */}
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
}

