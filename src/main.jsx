import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ErrorPage from "./pages/404.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import TestingPage from "./pages/TestingPage.jsx";
import ProfilMitraPage from "./pages/ProfilMitraPage.jsx";
import ProfilInvestorPage from "./pages/ProfilInvestorPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import DetailProductPage from "./pages/DetailProductPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/masuk",
    element: <LoginPage />,
  },
  {
    path: "/daftar",
    element: <RegisterPage />,
  },
  {
    path: "/produk",
    element: <ProductPage />,
  },
  {
    path: "/detail-produk",
    element: <DetailProductPage />,
  },
  {
    path: "/profil-mitra",
    element: <ProfilMitraPage />,
  },
  {
    path: "/profil-investor",
    element: <ProfilInvestorPage />,
  },
  {
    path: "/testing",
    element: <TestingPage />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
