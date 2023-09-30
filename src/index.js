import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss";
import "assets/demo/demo.css";

import LandingPage from "views/examples/LandingPage.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="*" element={<Navigate to="/landing-page" replace />} />
    </Routes>
  </BrowserRouter>
);
