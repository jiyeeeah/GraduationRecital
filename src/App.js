import React from "react";
import Home from "./pages/Home";
import DeepDive from "./pages/DeepDive";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deepDive" element={<DeepDive />} />
      </Routes>
    </BrowserRouter>
  );
}
