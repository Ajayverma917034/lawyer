import React from "react";
import Navbar from "./components/navbar.compnent";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import CaseStatus from './pages/CaseStatus'
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Dashboard />} />
        
        <Route path="tract-case-status" element={<CaseStatus/>} />
      </Route>
    </Routes>
  );
};
export default App;
