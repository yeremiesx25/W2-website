import { Routes, Route } from "react-router-dom";
import Home from "./Componentes/Principal/Home.jsx";
import Empresas from "./Componentes/Empresas/Empresas.jsx";
import Power from "./Componentes/Power/Power.jsx";
import Practicantes from "./Componentes/Practicantes/Practicantes.jsx";
import ScrollToTop from "./Componentes/Principal/ScrollToTop.jsx";
import PowerAuth from "./Componentes/PowerAuth/PowerAuth.jsx";
import { AuthContextProvider } from "./Context/AuthContext.jsx";
import { JobsProvider } from "./Context/JobsContext.jsx";
import Admin from "./Componentes/Admin/Admin.jsx";
import Privacidad from "./Componentes/Principal/Privacidad.jsx";
import AdminForm from "./Componentes/Form/AdminForm.jsx";
import LoginAdmin from "./Componentes/Admin/LoginAdmin.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import Profile from "./Componentes/Profile/Profile.jsx";
import Postulados from "./Componentes/Admin/Postulados.jsx";
import Share from "./Componentes/PowerAuth/Share.jsx"; // Importar el componente Share
import InfoJobMovil from "./Componentes/PowerAuth/InfoJobMovil.jsx";
import EditJob from "./Componentes/Form/EditJob.jsx";
import Reserva from './Componentes/Reserva/Reserva.jsx'
import ReservaAdmin from './Componentes/Reserva/ReservaAdmin.jsx'

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
          <Route
            path="/PowerAuth"
            element={
              <ProtectedRoute>
                <PowerAuth />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
          <Route
            path="/AdminForm"
            element={
              <ProtectedRoute>
                <AdminForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/AdminLogin"
            element={
              <ProtectedRoute>
                <LoginAdmin />
              </ProtectedRoute>
            }
          />
          <Route
            path="/edit-job/:id_oferta"
            element={
              <ProtectedRoute>
                <EditJob />
              </ProtectedRoute>
            }
          /> 
          <Route
            path="/job/:id"
            element={
              <ProtectedRoute>
                <Postulados />
              </ProtectedRoute>
            }
          />
          <Route path="/Privacidad" element={<Privacidad />} />
          <Route path="/Reserva" element={<Reserva />} />
          <Route path="/ReservaAdmin" element={<ReservaAdmin/>} />
         
          <Route path="/Share" element={<Share />} />{" "}
          {/* Añadir ruta para Share */}
          <Route path="/info-job-movil/:id" element={<InfoJobMovil />} />
          
        </Routes>
      </JobsProvider>
    </AuthContextProvider>
  );
}

export default App;
