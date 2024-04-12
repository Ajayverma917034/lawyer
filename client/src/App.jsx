import React from "react";
import Navbar from "./components/navbar.compnent";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
};
export default App;
