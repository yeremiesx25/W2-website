import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Componentes/Principal/Home';
import Empresas from './Componentes/Empresas/Empresas';
import Power from './Componentes/Power/Power'
import Practicantes from './Componentes/Practicantes/Practicantes'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Empresas" element={<Empresas />} />
        <Route path="/Power" element={<Power />} />
        <Route path="/Practicantes" element={<Practicantes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
