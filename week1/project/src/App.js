import React, { useState } from "react";
import "./App.css";
import "./styles/ProductList.css";
import "./styles/CategoryList.css";
import allProducts from "./fake-data/all-products";
import CategoryList from "./components/CategoryList/CategoryList";
import ProductList from "./components/ProductList/ProductList";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = Array.from(
    new Set(allProducts.map((product) => product.category))
  );

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedProduct(null); // Reset selected product when changing categories
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setSelectedCategory(null); // Reset selected category when clicking on a product
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>E-commerce App</h1>
        <CategoryList
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryClick={handleCategoryClick}
        />
        {selectedProduct ? (
          <div>
            {/* Mostrar solo el producto seleccionado */}
            <h2>{selectedProduct.title.replace(/^FAKE: /, "")}</h2>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              className="product-image"
            />
            <p>{selectedProduct.description}</p>
          </div>
        ) : (
          <ProductList
            products={allProducts}
            selectedCategory={selectedCategory}
            onProductClick={handleProductClick}
          />
        )}
      </header>
    </div>
  );
};

export default App;
