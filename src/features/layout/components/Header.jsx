import React from 'react';
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky-top">
      {/* --- BLOQUE PRINCIPAL: LOGO, BUSCADOR Y ACCIONES --- */}
      <div className="container py-3">
        <div className="row align-items-center">
          
          {/* Logo y Nombre (Centrado a la izquierda como la referencia) */}
          <div className="col-lg-3 col-md-4 d-flex align-items-center gap-2">
            <img
              src="/img/LOGO_000.webp"
              alt="Logo Robot"
              width="120" /* Tamaño ajustado para no crear barras gigantes */
              className="d-inline-block"
            />
            <div className="d-flex flex-column justify-content-center">
             
              <small className="fw-bold text-muted" style={{ fontSize: '0.7rem', letterSpacing: '2px' }}></small>
            </div>
          </div>

          {/* Buscador Central (Estilo Minimalista) */}
          <div className="col-lg-5 col-md-8">
            <div className="input-group bg-light rounded-pill px-3 py-1 border-0">
              <input
                type="text"
                className="form-control border-0 bg-light shadow-none"
                placeholder="Búsqueda"
                aria-label="Búsqueda"
              />
              <span className="input-group-text bg-light border-0 text-muted">
                <i className="bi bi-search fs-5"></i>
              </span>
            </div>
          </div>

          {/* Contacto e Iconos de Acción */}
          <div className="col-lg-4 d-none d-lg-flex align-items-center justify-content-end gap-4">
            {/* Contacto con estilo de la imagen */}
            <div className="d-flex align-items-center gap-2 pe-3 py-1">
              <i className="bi bi-headset fs-3 text-dark"></i>
              <div style={{ lineHeight: '1.1' }}>
                <small className="text-muted d-block" style={{ fontSize: '0.65rem' }}>Contacto</small>
                <span className="fw-bold" style={{ fontSize: '0.85rem' }}>+57 304 205 0535</span>
              </div>
              <i className="bi bi-chevron-down small text-muted ms-1"></i>
            </div>

            {/* Iconos: Perfil, Shuffle, Carrito */}
            <div className="d-flex align-items-center gap-3 border-start ps-4">
              <i className="bi bi-person fs-3 text-dark cursor-pointer"></i>
              
              <div className="position-relative">
                <i className="bi bi-shuffle fs-4 text-dark cursor-pointer"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-warning text-dark border border-white" style={{ fontSize: '0.6rem' }}>
                  0
                </span>
              </div>

              <div className="d-flex align-items-center gap-2">
                <div className="position-relative">
                  <i className="bi bi-bag fs-3 text-dark cursor-pointer"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-warning text-dark border border-white" style={{ fontSize: '0.6rem' }}>
                    0
                  </span>
                </div>
                <div style={{ lineHeight: '1' }}>
                  <small className="text-muted d-block" style={{ fontSize: '0.65rem' }}>Subtotal</small>
                  <span className="fw-bold" style={{ fontSize: '0.85rem' }}>$0</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* --- MENÚ DE NAVEGACIÓN (Borde sutil superior) --- */}
      <nav className="border-top py-2 bg-white">
        <div className="container">
          <ul className="nav justify-content-start gap-4">
            <li className="nav-item">
              <NavLink to="/Inicio" className="nav-link-new">Inicio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Articulo" className="nav-link-new">Celulares <i className="bi bi-chevron-down small ms-1"></i></NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Accesorios" className="nav-link-new">Accesorios <i className="bi bi-chevron-down small ms-1"></i></NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Tablets" className="nav-link-new">Tablets <i className="bi bi-chevron-down small ms-1"></i></NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Props" className="nav-link-new">Props</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};