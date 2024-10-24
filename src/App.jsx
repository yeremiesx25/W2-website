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
import Profile1 from "./Componentes/Profile/Profile1.jsx";
import PgPostulados from "./Componentes/Admin/PgPostulados.jsx";
import Share from "./Componentes/PowerAuth/Share.jsx";
import InfoJobMovil from "./Componentes/PowerAuth/InfoJobMovil.jsx";
import EditJob from "./Componentes/Form/EditJob.jsx";
import Login from './Componentes/Power/Login.jsx';
import ReservaAdmin from './Componentes/Reserva/ReservaAdmin.jsx';
import Auth from './Componentes/Reserva/Auth.jsx';
import Coworking from './Componentes/Coworking/Coworking.jsx';
import Contacto from './Componentes/Contacto/Contacto.jsx';
import RegisterAdmin from "./Componentes/Admin/RegisterAdmin.jsx";
import Conversaciones from "./Componentes/Admin/Conversaciones.jsx";
import Programa from "./Componentes/Admin/Programa.jsx";
import Estadisticas from "./Componentes/Admin/Estadisticas.jsx";
import AdminProfile from "./Componentes/Admin/AdminProfile.jsx";
import Proceso from "./Componentes/Admin/Proceso.jsx";

function App() {
  return (
    <AuthContextProvider>
      <JobsProvider>
        <ScrollToTop />
        <Routes>
          {/* Rutas Públicas */}
          <Route path="/" element={<Home />} />
          <Route path="/Empresas" element={<Empresas />} />
          <Route path="/Power" element={<Power />} />
          <Route path="/DescubriendoTalentos" element={<Practicantes />} />
          <Route path="/Privacidad" element={<Privacidad />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Share" element={<Share />} />
          <Route path="/info-job-movil/:id" element={<InfoJobMovil />} />
          <Route path="/ReservaAdmin" element={<ReservaAdmin />} /> {/* Ruta pública */}
          <Route path="/auth" element={<Auth />} />
          <Route path="/Coworking" element={<Coworking />} />
          
          {/* Rutas Protegidas */}
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
            path="/Conversaciones"
            element={
              <ProtectedRoute>
                <Conversaciones />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Programa"
            element={
              <ProtectedRoute>
                <Programa />
              </ProtectedRoute>
            }
          />
                <Route
            path="/Proceso"
            element={
              <ProtectedRoute>
                <Proceso />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Estadisticas"
            element={
              <ProtectedRoute>
                <Estadisticas />
              </ProtectedRoute>
            }
          />
          <Route
            path="/AdminProfile"
            element={
              <ProtectedRoute>
                <AdminProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/AdminLogin"
            element={<LoginAdmin />} /> {/* Ruta pública */}

             <Route path="/550e8400-e29b-41d4-a716-446655440000" element={<RegisterAdmin />} />
          
          <Route
            path="/EditJob/:id_oferta"
            element={
              <ProtectedRoute>
                <EditJob />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Postulados/:id"
            element={
              <ProtectedRoute>
                <PgPostulados />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Profile1"
            element={
              <ProtectedRoute>
                <Profile1 />
              </ProtectedRoute>
            }
          />
        </Routes>
      </JobsProvider>
    </AuthContextProvider>
  );
}

export default App;
