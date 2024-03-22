import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./index.css";
import ErrorPage from "./pages/404.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import TestingPage from "./pages/TestingPage.jsx";
import ProfilMitraPage from "./pages/ProfilMitraPage.jsx";
import ProfilInvestorPage from "./pages/ProfilInvestorPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import DetailProductPage from "./pages/DetailProductPage.jsx";
import RolePage from "./pages/RolePage.jsx";
import createStore from "react-auth-kit/createStore";
import AuthProvider from "react-auth-kit";
import AuthOutlet from "@auth-kit/react-router/RequireAuth";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const store = createStore({
  authType: "cookie",
  authName: "_auth",
  cookieDomain: window.location.hostname,
  cookieSecure: false,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/masuk" element={<RolePage />} />
          <Route path="/masuk/:role" element={<LoginPage />} />
          <Route path="/daftar" element={<RegisterPage />} />
          <Route path="/produk" element={<ProductPage />} />
          <Route path="/detail-produk/:id" element={<DetailProductPage />} />
          <Route element={<AuthOutlet fallbackPath="/masuk" />}>
            <Route path="/profil-mitra" element={<ProfilMitraPage />} />
            <Route path="/profil-investor" element={<ProfilInvestorPage />} />
          </Route>
          <Route path="/testing" element={<TestingPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
