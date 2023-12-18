// Importa las dependencias necesarias
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppRoutes from "./Routes";

// Importa estilos y componentes adicionales
import "./App.css";
import "./styles/ProductList.css";
import "./styles/CategoryList.css";
import CategoryList from "./components/CategoryList/CategoryList";
import ProductList from "./components/ProductList/ProductList";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import { getCategories, getProducts } from "./services/api";

// Define el componente principal
const App = () => {
  // Define los estados iniciales
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [allProducts, setAllProducts] = useState([]);

  // Obtiene las categorías y productos al cargar el componente
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

  // Maneja el clic en una categoría
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedProduct(null);
  };

  // Maneja el clic en un producto
  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setSelectedCategory(null);
  };

  // Renderiza la aplicación
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Products</h1>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <CategoryList
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryClick={handleCategoryClick}
            />
          )}

          <Routes>
            <Route
              path="/product/:id"
              element={
                selectedProduct && (
                  <ProductDetail
                    productId={selectedProduct.id}
                    title={selectedProduct.title}
                    image={selectedProduct.image}
                    description={selectedProduct.description}
                  />
                )
              }
            />
            <Route
              path="/products"
              element={
                <ProductList
                  selectedCategory={selectedCategory}
                  onProductClick={handleProductClick}
                  products={allProducts}
                />
              }
            />
            <Route
              path="/"
              element={
                <ProductList
                  selectedCategory={selectedCategory}
                  onProductClick={handleProductClick}
                  products={allProducts}
                />
              }
            />
          </Routes>
        </header>
      </div>
    </Router>
  );
};

// Exporta el componente principal
export default App;
