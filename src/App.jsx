
import { Route, Routes } from "react-router-dom";
import AdminRoutes from "./admin/routes/AdminRoutes";
import AdminLogin from "./admin/pages/Login"
import MainLayout from "./layout/UserLayout"
const App = () => {

  return (
    <Routes>
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/admin/*" element={<AdminRoutes />} />
      <Route path="/*" element={<MainLayout />} />
    </Routes>
  )
}

export default App
