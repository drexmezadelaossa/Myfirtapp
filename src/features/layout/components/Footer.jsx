import React from "react";

export const Footer = () => {
  return (
    /* Añadí 'w-100' para asegurar que ocupe todo el ancho 
       y 'py-4' para que en móviles sea más fácil de leer 
    */
    <footer className="bg-light text-center py-4 px-3 mt-auto border-top w-100">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <small className="text-muted d-block d-md-inline mb-2 mb-md-0">
              © 2026 - <strong>Carrito de Compras</strong>
            </small>
            <span className="text-muted d-none d-md-inline mx-2">|</span>
            <small className="text-muted d-block d-md-inline">
              Andres Mauricio Meza
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};