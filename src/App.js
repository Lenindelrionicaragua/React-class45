import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import "./App.css";
import "./styles/ProductList.css";
import "./styles/CategoryList.css";
import CategoryList from "./components/CategoryList/CategoryList";
import ProductList from "./components/ProductList/ProductList";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import { getCategories, getProducts } from "./services/api";

const App = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesData = await getCategories();
        const productsData = await getProducts();
        setCategories(categoriesData);
        setAllProducts(productsData);
        setLoading(false);
      } catch (error) {
        setError("Error fetching data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedProduct(null);
  };

  const handleProductClick = (product) => {
    setSelectedCategory(null);
    setSelectedProduct(product);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <React.Fragment>
              {selectedProduct ? (
                <h1>{selectedProduct.title}</h1>
              ) : (
                <React.Fragment>
                  <h1>Products</h1>
                  <CategoryList
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onCategoryClick={handleCategoryClick}
                  />
                  <ProductList
                    selectedCategory={selectedCategory}
                    onProductClick={handleProductClick}
                  />
                </React.Fragment>
              )}
            </React.Fragment>
          )}

          <Routes>
            <Route
              path="/product/:id"
              element={
                <ProductDetail
                  products={allProducts}
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
                    onProductClick={handleProductClick}
                  />
                </React.Fragment>
              }
            />
          </Routes>

          {/* Comenta o elimina el siguiente código si no lo necesitas */}
          {/* <AppRoutes
            selectedCategory={selectedCategory}
            setSelectedProduct={setSelectedProduct}
            products={allProducts}
          /> */}
        </header>
      </div>
    </Router>
  );
};

export default App;
