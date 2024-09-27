import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home/Home";
import Dashboard from "./components/pages/dashboard/index";
import Chains from "./components/pages/chains/index";
import Settings from "./components/pages/settings/index";
import Products from "./components/pages/products/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          {/* <Route path="dashboard" element={<Dashboard />} />
          <Route path="chains" element={<Chains />} />
          <Route path="products" element={<Products />} />
          <Route path="settings" element={<Settings />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
