// Routes.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList/ProductList"; // Importa desde el directorio correcto
import ProductDetail from "./components/ProductDetail/ProductDetail"; // Importa desde el directorio correcto

const AppRoutes = ({ selectedCategory, onProductClick }) => (
  <Routes>
    <Route path="/product/:id" element={<ProductDetail />} />
    <Route
      path="/products"
      element={
        <ProductList
          selectedCategory={selectedCategory}
          onProductClick={onProductClick}
        />
      }
    />
    {/* Agrega más rutas según sea necesario */}
  </Routes>
);

export default AppRoutes;
