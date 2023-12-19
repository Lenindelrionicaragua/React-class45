// AppRoutes.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";
import ProductDetail from "./components/ProductDetail/ProductDetail";

const AppRoutes = ({ selectedCategory, setSelectedProduct, products }) => (
  <Routes>
    <Route
      path="/product/:id"
      element={
        <ProductDetail
          setSelectedProduct={setSelectedProduct}
          products={products}
        />
      }
    />
    <Route
      path="/products"
      element={
        <ProductList
          selectedCategory={selectedCategory}
          setSelectedProduct={setSelectedProduct}
          products={products}
        />
      }
    />
    {/* Agrega una ruta para mostrar productos filtrados por categoría */}
    <Route
      path="/category/:category"
      element={
        <ProductList
          selectedCategory={selectedCategory}
          setSelectedProduct={setSelectedProduct}
          products={products}
        />
      }
    />
    {/* Ruta por defecto: muestra todos los productos */}
    <Route path="*" element={<ProductList products={products} />} />
  </Routes>
);

export default AppRoutes;
