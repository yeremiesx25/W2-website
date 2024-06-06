import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
//importar componentes
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Componentes/Principal/Home.jsx";
import Empresas from "./Componentes/Empresas/Empresas.jsx";
import Power from "./Componentes/Power/Power.jsx";
import Practicantes from "./Componentes/Practicantes/Practicantes.jsx";
import ScrollToTop from "./Componentes/Principal/ScrollToTop.jsx";
import PowerAuth from './Componentes/PowerAuth/PowerAuth.jsx'
import { AuthContextProvider } from "./Context/AuthContext.jsx";
import {JobsProvider} from './Context/JobsContext.jsx'
import Admin from "./Componentes/Admin/Admin.jsx";
import Privacidad from './Componentes/Principal/Privacidad.jsx'
import AdminForm from './Componentes/Form/AdminForm.jsx'

function App() {
  return (
    <AuthContextProvider>
      <JobsProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Empresas" element={<Empresas />} />
          <Route path="/Power" element={<Power />} />
          <Route path="/DescubriendoTalentos" element={<Practicantes />} />
          <Route path="/PowerAuth" element={<PowerAuth />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Privacidad" element={<Privacidad />} />
          <Route path="/AdminForm" element={<AdminForm />} />
        </Routes>
        </JobsProvider>
    </AuthContextProvider>
  );
}

export default App;
