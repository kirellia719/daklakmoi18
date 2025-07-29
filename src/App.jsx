
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/UserLayout";
import Admin from "./layout/AdminLayout/AdminPage";
const App = () => {

  return (
    <Routes>
      <Route path="/admin" element={<Admin />} />
      <Route path="/*" element={<MainLayout />} />
    </Routes>
  )
}

export default App
