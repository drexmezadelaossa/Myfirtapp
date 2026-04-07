import { Header } from "./features/layout/components/Header";
import { Content } from "./features/layout/components/Content";
import { Footer } from "./features/layout/components/Footer";
import Props from "./features/layout/components/Props";

// Solo necesitamos BrowserRouter, Routes y Route
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      {/* El Header y Footer están FUERA de <Routes>, así que se verán en todas las páginas */}
      <Header /> 

      <Routes>
        {/* path="/" es la página principal (Home) */}
        <Route path="/" element={<Content />} />
        
        {/* path="/props" cargará el componente Props */}
        <Route path="/props" element={<Props />} />
        
        {/* Opcional: Ruta para cuando no encuentra nada (404) */}
        <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;