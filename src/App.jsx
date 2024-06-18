import { Routes, Route } from "react-router-dom";
import Home from "./Componentes/Principal/Home.jsx";
import Empresas from "./Componentes/Empresas/Empresas.jsx";
import Power from "./Componentes/Power/Power.jsx";
import Practicantes from "./Componentes/Practicantes/Practicantes.jsx";
import ScrollToTop from "./Componentes/Principal/ScrollToTop.jsx";
import PowerAuth from './Componentes/PowerAuth/PowerAuth.jsx'
import { AuthContextProvider } from "./Context/AuthContext.jsx";
import { JobsProvider } from './Context/JobsContext.jsx'
import Admin from "./Componentes/Admin/Admin.jsx";
import Privacidad from './Componentes/Principal/Privacidad.jsx'
import AdminForm from './Componentes/Form/AdminForm.jsx'
import LoginAdmin from "./Componentes/Admin/LoginAdmin.jsx";
import ProtectedRoute from './ProtectedRoute.jsx';
import Profile from './Componentes/Profile/Profile.jsx'

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
          <Route path="/PowerAuth" element={
            <ProtectedRoute>
              <PowerAuth />
            </ProtectedRoute>
          } />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Privacidad" element={<Privacidad />} />
          <Route path="/AdminForm" element={<AdminForm />} />
          <Route path="/AdminLogin" element={<LoginAdmin />} />
          <Route path="/Profile" element = {<Profile />} />
        </Routes>
      </JobsProvider>
    </AuthContextProvider>
  );
}

export default App;