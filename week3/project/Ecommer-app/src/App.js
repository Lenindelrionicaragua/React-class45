import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import "./App.css";
import "./styles/ProductList.css";
import "./styles/CategoryList.css";
import { FavoritesProvider } from "./context/FavoritesContext";
import useFetch from "./hooks/useFetch";

const App = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [allProducts, setAllProducts] = useState([]);

  const { data: categoriesData, loading: categoriesLoading } = useFetch(
    "https://fakestoreapi.com/products/categories"
  );

  useEffect(() => {
    if (!categoriesLoading) {
      setCategories(categoriesData);
    }
  }, [categoriesData, categoriesLoading]);

  const { data: allProductsData, loading: allProductsLoading } = useFetch(
    "https://fakestoreapi.com/products"
  );

  useEffect(() => {
    if (!allProductsLoading) {
      setAllProducts(allProductsData);
    }
  }, [allProductsData, allProductsLoading]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Router>
      <FavoritesProvider>
        <div className="App">
          <header className="App-header">
            <div className="header-container">
              <h1>Products</h1>
              <nav>
                <Link to="/">Products</Link>
                <Link to="/favorites">Favorites</Link>
              </nav>
            </div>
          </header>
          <AppRoutes
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedProduct={() => {}}
            products={allProducts}
            handleCategoryClick={handleCategoryClick}
          />
        </div>
      </FavoritesProvider>
    </Router>
  );
};

export default App;
