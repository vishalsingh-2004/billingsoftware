import Menubar from "./components/Menubar/Menubar.jsx";
import { Routes, Route, useLocation } from "react-router-dom";
import ManageCategory from "./pages/ManageCategory/ManageCategory.jsx";
import ManageUsers from "./pages/ManageUsers/ManageUsers.jsx";
import ManageItem from "./pages/ManageItems/ManageItem.jsx";
import Explore from "./pages/Explore/Explore.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login/Login.jsx";

const App = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/login" && <Menubar />}
      <Toaster />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/category" element={<ManageCategory />} />
        <Route path="/users" element={<ManageUsers />} />
        <Route path="/items" element={<ManageItem />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
};
export default App;
