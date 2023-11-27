import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DeepDive from "./pages/DeepDive";
import Spectrum from "./pages/Spectrum";
import Irony from "./pages/Irony";
import Vanish from "./pages/Vanish";
import ChangDuk from "./pages/ChangDuk";
import KingLear from "./pages/KingLear";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";

const gaTrackingId = process.env.REACT_APP_GA_TRACKING_ID; // 환경 변수에 저장된 추적ID 가져오기
ReactGA.initialize(gaTrackingId, { debug: true }); // react-ga 초기화 및 debug 사용
ReactGA.pageview(window.location.pathname); // 추적하려는 page 설정

const history = createBrowserHistory();
history.listen((response) => {
  console.log(response.location.pathname);
  ReactGA.set({ page: response.location.pathname });
  ReactGA.pageview(response.location.pathname);
});

export default function App() {
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
