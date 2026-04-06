import React from 'react'

export const Content = () => {
  const productos = [
    { id: 1, nombre: "Celular xiaomi", precio: 10000, img: "/img/Celular-XIAOMI-.webp" },
    { id: 2, nombre: "Celular poco", precio: 20000, img: "/img/poco.webp" },
    { id: 3, nombre: "Celular Samsung", precio: 17000, img: "/img/Samsung.webp" },
    { id: 4, nombre: "Celular Huawei", precio: 19000, img: "/img/huawei.png" },
    { id: 5, nombre: "Celular Apple", precio: 16000, img: "/img/apple.webp" },
    { id: 6, nombre: "Celular Motorola", precio: 11000, img: "/img/motorola.webp" },
  ];

  const formatPrecio = (valor) => {
    return new Intl.NumberFormat('es-CO').format(valor);
  };

  return (
    <main className="container-fluid px-3 px-md-4 pb-5 flex-grow-1" style={{ paddingTop: "20px" }}>

      {/* ================= TÍTULO ================= */}
      <div className="d-flex align-items-center mb-4">
        <div className="bg-warning rounded-pill me-2" style={{ width: '8px', height: '25px' }}></div>
        <h4 className="text-dark mb-0 fw-bold text-start">Catálogo de Ventas</h4>
      </div>

      {/* ================= CARRUSEL RESPONSIVE ================= */}
      <div id="carouselOfertas" className="carousel slide mb-5 shadow-sm rounded-4 overflow-hidden" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselOfertas" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#carouselOfertas" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#carouselOfertas" data-bs-slide-to="2"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <img 
              src="/img/GalaxyZFold.jpg" 
              className="d-block w-100" 
              alt="Galaxy Z Fold7" 
              style={{ height: 'auto', minHeight: '250px', maxHeight: '450px', objectFit: 'cover' }} 
            />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img 
              src="/img/Xiaomi14_120.jpeg" 
              className="d-block w-100" 
              alt="Xiaomi 14 Ultra" 
              style={{ height: 'auto', minHeight: '250px', maxHeight: '450px', objectFit: 'cover' }} 
            />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img 
              src="/img/iphone-1698.webp" 
              className="d-block w-100" 
              alt="iPhone 16 Pro" 
              style={{ height: 'auto', minHeight: '250px', maxHeight: '450px', objectFit: 'cover' }} 
            />
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselOfertas" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bg-dark rounded-circle" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselOfertas" data-bs-slide="next">
          <span className="carousel-control-next-icon bg-dark rounded-circle" aria-hidden="true"></span>
        </button>
      </div>

      {/* ================= GRILLA DE PRODUCTOS (Adaptativa) ================= */}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 g-md-4">
        {productos.map((p) => (
          <div className="col" key={p.id}>
            <div className="card h-100 shadow-sm border-0 rounded-3">
              <div className="card-img-container d-flex align-items-center justify-content-center bg-white">
                <img
                  src={p.img}
                  className="card-img-top p-3"
                  style={{ objectFit: "contain", height: "180px", width: "100%" }}
                  alt={p.nombre}
                />
              </div>

              <div className="card-body d-flex flex-column text-start p-3">
                <h6 className="fw-bold mb-1 text-dark text-truncate">{p.nombre}</h6>
                <p className="text-success fw-bold mb-3 fs-5">
                  ${formatPrecio(p.precio)} <small className="text-muted fs-6" style={{ fontSize: '0.75rem' }}>COP</small>
                </p>

                <div className="d-flex flex-column gap-2 mt-auto">
                  <button 
                    className="btn btn-dark fw-bold w-100 py-2 rounded-pill"
                    data-bs-toggle="modal" 
                    data-bs-target="#modalRegistro"
                  >
                    Comprar Ahora
                  </button>
                  <div className="d-flex gap-2">
                    <button className="btn btn-outline-secondary btn-sm flex-fill py-2">
                      <i className="bi bi-pencil-square"></i>
                    </button>
                    <button className="btn btn-outline-danger btn-sm flex-fill py-2">
                      <i className="bi bi-trash3"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ================= VENTANA MODAL RESPONSIVA ================= */}
      <div className="modal fade" id="modalRegistro" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
          <div className="modal-content border-0 shadow-lg rounded-4">
            <div className="modal-header border-0 pb-0">
              <h5 className="fw-bold mb-0">
                <i className="bi bi-bag-check-fill text-primary me-2"></i>Finalizar Compra
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            
            <div className="modal-body p-4">
              <div className="registration-form border-0 p-0 shadow-none">
                <div className="mb-3">
                  <label className="form-label small fw-bold text-muted">Datos de Entrega</label>
                  <input className="form-control mb-2 bg-light border-0 py-2" placeholder="Nombre completo" />
                  <input className="form-control mb-2 bg-light border-0 py-2" placeholder="Correo electrónico" />
                  <input className="form-control bg-light border-0 py-2" placeholder="Dirección de envío" />
                </div>

                <hr className="my-3 opacity-25" />

                <div className="mb-3">
                  <label className="form-label small fw-bold text-muted">Método de Pago</label>
                  <div className="input-group mb-2">
                    <span className="input-group-text bg-light border-0"><i className="bi bi-credit-card-2-front"></i></span>
                    <input className="form-control bg-light border-0 py-2" placeholder="Número de tarjeta" />
                  </div>
                  <div className="row g-2">
                    <div className="col-6"><input className="form-control bg-light border-0 py-2" placeholder="MM/AA" /></div>
                    <div className="col-6"><input className="form-control bg-light border-0 py-2" placeholder="CVV" /></div>
                  </div>
                </div>

                <button className="btn btn-success w-100 mt-2 py-3 fw-bold shadow-sm">
                  <i className="bi bi-check-circle-fill me-2"></i>
                  Confirmar Pago Seguro
                </button>
                
                <p className="text-muted small mt-3 text-center mb-0">
                  <i className="bi bi-shield-lock-fill me-1"></i> 
                  Transacción protegida y encriptada
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}