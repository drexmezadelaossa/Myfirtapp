import { Header } from "./features/layout/components/Header";
import { Content } from "./features/layout/components/Content";
import { Footer } from "./features/layout/components/Footer";
import Props from "./features/layout/components/Props";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header /> 

      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<Content />} />
        
        {/* Ruta de Props sincronizada */}
        <Route path="/props" element={<Props />} />

        {/* Agrega aquí las demás cuando las tengas listas */}
        <Route path="/celulares" element={<Content />} /> 
        <Route path="/accesorios" element={<Content />} />
        <Route path="/tablets" element={<Content />} />
        
        {/* 404 personalizado */}
        <Route path="*" element={
          <div className="container text-center py-5">
            <h2 className="display-1">404</h2>
            <p>Lo sentimos, esta página no existe.</p>
          </div>
        } />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;