import React from "react";
import { Route, Routes as RoutesContainer } from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import CategoryList from "./components/CategoryList/CategoryList";

const AppRoutes = ({
  categories,
  selectedCategory,
  setSelectedProduct,
  products,
  handleCategoryClick,
  onProductClick,
}) => (
  <RoutesContainer>
    <Route
      path="/product/:id"
      element={
        <ProductDetail
          products={products}
          setSelectedProduct={setSelectedProduct}
        />
      }
    />

    <Route
      path="/"
      element={
        <React.Fragment>
          <CategoryList
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryClick={handleCategoryClick}
          />

          <ProductList
            selectedCategory={selectedCategory}
            setSelectedProduct={setSelectedProduct}
            products={products}
            onProductClick={onProductClick}
          />
        </React.Fragment>
      }
    />

    <Route
      path="/category/:category"
      element={
        <ProductList
          selectedCategory={selectedCategory}
          setSelectedProduct={setSelectedProduct}
          products={products}
          onProductClick={onProductClick}
        />
      }
    />
  </RoutesContainer>
);

export default AppRoutes;
