import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import "./App.css";
import "./styles/ProductList.css";
import "./styles/CategoryList.css";

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
              <h1>{selectedProduct ? selectedProduct.title : "Products"}</h1>
              <AppRoutes
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedProduct={setSelectedProduct}
                products={allProducts}
                handleCategoryClick={handleCategoryClick}
              />
            </React.Fragment>
          )}
        </header>
      </div>
    </Router>
  );
};

export default App;
