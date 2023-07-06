import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import App from "../pages/App";

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<App />} />
    </Routes>
    </BrowserRouter>
  )
};

export default Router;
