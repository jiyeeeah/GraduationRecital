import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DeepDive from "./pages/DeepDive";
import Spectrum from "./pages/Spectrum";
import Irony from "./pages/Irony";
import Vanish from "./pages/Vanish";
import ChangDuk from "./pages/ChangDuk";
import KingLear from "./pages/KingLear";
import RouteChangeTracker from "./utils/routeChangeTracker";

export default function App() {
  RouteChangeTracker();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/DeepDive" element={<DeepDive />} />
        <Route path="/Irony" element={<Irony />} />
        <Route path="/Spectrum" element={<Spectrum />} />
        <Route path="/Vanish" element={<Vanish />} />
        <Route path="/ChangDuk" element={<ChangDuk />} />
        <Route path="/KingLear" element={<KingLear />} />
      </Routes>
    </BrowserRouter>
  );
}
