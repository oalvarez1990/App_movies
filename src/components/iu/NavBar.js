import React from "react";
import { Link, NavLink } from "react-router-dom";
import img from '../../assets/img/iudigital.png'



export default function NavBar() {
  const estilo = {
    width: '100%'

};
const estiloImg = {
  marginRight: '1rem',

};
  return (
    <nav className="navbar navbar-expand-lg py-3 bg-primary fixed-top" >
      <div className="container bg-white py-3 rounded">
          <img src={img} alt="img" className="col-2 mr-4" style={estiloImg} />
        <Link
          to="/"
          tabIndex={0}
          className="navbar-brand btn btn-outline-light"
          aria-label="Ir a Inicio"
        >
          PELICULAS
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav d-flex justify-content-around" style={estilo}>
            <NavLink to="/generos" tabIndex={1} className="nav-link btn btn-outline-secondary">
              Géneros
            </NavLink>
            <NavLink to="/directores" tabIndex={2} className="nav-link btn btn-outline-secondary">
              Directores
            </NavLink>
            <NavLink to="/productoras" tabIndex={3} className="nav-link btn btn-outline-secondary">
              Productoras
            </NavLink>
            <NavLink to="/tipos" tabIndex={4} className="nav-link btn btn-outline-secondary">
              Tipos
            </NavLink>
            <NavLink to="/peliculas-series" tabIndex={5} className="nav-link btn btn-outline-secondary">
              Peliculas y Series
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
