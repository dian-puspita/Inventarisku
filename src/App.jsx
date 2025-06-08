import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/login";
import Dashboard from "./pages/dashboard/dashboard";
import Info from "./pages/info/info";
import Profil from "./pages/profil/profil";
import Pengguna from "./pages/pengguna/pengguna";
import PenggunaCreate from "./pages/pengguna/penggunacreate";
import PenggunaUpdate from "./pages/pengguna/penggunaupdate";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Info />} />
          <Route path="pengguna" element={<Pengguna />} />
          <Route path="pengguna/tambah" element={<PenggunaCreate />} />
          <Route path="pengguna/edit/:id" element={<PenggunaUpdate />} />
          <Route path="profil" element={<Profil />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
