import React from 'react'

export const Content = () => {
  const productos = [
    {
      id: 1,
      nombre: "Celular xiaomi",
      precio: 10.000,
      img: "/img/Celular-XIAOMI-.webp",
    },
    {
      id: 2,
      nombre: "Celular poco",
      precio: 20.000,
      img: "/img/poco.webp",
    },
    {
      id: 3,
      nombre: "Celular Samsung",
      precio: 17.000,
      img: "/img/Samsung.webp",
    },
    {
      id: 4,
      nombre: "Celular Huawei",
      precio: 19.000,
      img: "/img/huawei.png",
    },
    {
      id: 5,
      nombre: "Celular Apple",
      precio: 16.000,
      img: "/img/apple.webp",
    },
    {
      id: 6,
      nombre: "Celular Morola",
      precio: 11.000,
      img: "/img/motorola.webp",
    },
  ];

  return (
    <main className="container-fluid px-4 pb-5 flex-grow-1" style={{ paddingTop: "20px" }}>
      <div className="row g-4">
        <div className="col-lg-8">
          <h4 className="text-warning mb-3">Ventas</h4>

          <div className="row">
            {productos.map((p) => (
              <div className="col-sm-6 col-md-4 mb-4" key={p.id}>
                <div className="card h-100 shadow bg-dark text-light">
                  <img
                    src={p.img}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                    alt={p.nombre}
                  />
                  <div className="card-body d-flex flex-column">
                    <h6 className="mb-1">{p.nombre}</h6>
                    <p className="fw-bold text-success mb-2">
                      ${p.precio} PESOS
                    </p>
                    <div className="d-flex gap-2 mt-auto">
                      <button type="button" className="btn btn-warning btn-sm flex-fill">
                        Editar
                      </button>
                      <button type="button" className="btn btn-danger btn-sm flex-fill">
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-lg-4">
          <div className="bg-white rounded shadow p-4" style={{ top: "150px" }}>
            <h5 className="mb-3">Registro</h5>

            <input className="form-control mb-2" placeholder="Nombre completo" />
            <input className="form-control mb-2" placeholder="Correo electrónico" />
            <input className="form-control mb-3" placeholder="Dirección" />

            <hr/>

            <h6>Realizar Pago</h6>
            <input className="form-control mb-2" placeholder="Número de tarjeta" />

            <div className="row">
              <div className="col-6">
                <input className="form-control mb-2" placeholder="MM/AA" />
              </div>
              <div className="col-6">
                <input className="form-control mb-2" placeholder="CVV" />
              </div>
            </div>

            <button className="btn btn-success w-100 mt-2">
              Confirmar Compra
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
