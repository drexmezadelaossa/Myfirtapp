import React from 'react';
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky-top">
      {/* --- BLOQUE PRINCIPAL --- */}
      <div className="container py-2 py-lg-3">
        <div className="row align-items-center g-2">
          
          {/* Logo - Se ajusta en móvil y escritorio */}
          <div className="col-6 col-lg-3 d-flex align-items-center">
            <img
              src="/img/LOGO_000.webp"
              alt="Logo"
              style={{ maxWidth: '100px', height: 'auto' }} 
              className="img-fluid"
            />
          </div>

          {/* Acciones Rápidas (Solo iconos en móvil para ahorrar espacio) */}
          <div className="col-6 d-lg-none d-flex justify-content-end gap-3">
            <i className="bi bi-person fs-4"></i>
            <div className="position-relative">
              <i className="bi bi-bag fs-4"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-warning text-dark" style={{ fontSize: '0.5rem' }}>0</span>
            </div>
            {/* Botón Hamburguesa para el menú */}
            <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
              <i className="bi bi-list fs-2"></i>
            </button>
          </div>

          {/* Buscador - En móvil ocupa toda la fila (order-3) */}
          <div className="col-12 col-lg-5 order-3 order-lg-2">
            <div className="input-group bg-light rounded-pill px-3 py-1 border-0">
              <input
                type="text"
                className="form-control border-0 bg-light shadow-none"
                placeholder="¿Qué buscas?"
              />
              <span className="input-group-text bg-light border-0 text-muted">
                <i className="bi bi-search"></i>
              </span>
            </div>
          </div>

          {/* Contacto e Iconos - Solo visibles en Escritorio (lg) */}
          <div className="col-lg-4 d-none d-lg-flex align-items-center justify-content-end gap-3 order-lg-3">
            <div className="d-flex align-items-center gap-2 border-end pe-3">
              <i className="bi bi-headset fs-3"></i>
              <div style={{ lineHeight: '1' }}>
                <small className="text-muted d-block" style={{ fontSize: '0.6rem' }}>Contacto</small>
                <span className="fw-bold" style={{ fontSize: '0.8rem' }}>+57 304 205 0535</span>
              </div>
            </div>
            <div className="d-flex gap-3 ps-2">
              <i className="bi bi-person fs-3 cursor-pointer"></i>
              <div className="position-relative">
                <i className="bi bi-bag fs-3"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-warning text-dark" style={{ fontSize: '0.6rem' }}>0</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* --- MENÚ DE NAVEGACIÓN RESPONSIVO --- */}
      <nav className="navbar navbar-expand-lg border-top py-0 bg-white">
        <div className="container">
          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav gap-lg-4 py-2 py-lg-0">
              <li className="nav-item">
                <NavLink to="/Inicio" className="nav-link text-dark fw-medium">Inicio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Articulo" className="nav-link text-dark fw-medium">Celulares</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Accesorios" className="nav-link text-dark fw-medium">Accesorios</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Tablets" className="nav-link text-dark fw-medium">Tablets</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Props" className="nav-link text-dark fw-medium">Props</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};