import { Toaster } from "./components/ui/toaster";
import AdminPage from "./main/admin/adminPage";
import HomePage from "./main/home/homePage";
import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
