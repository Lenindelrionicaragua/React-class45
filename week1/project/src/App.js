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

  // Extract unique categories from the list of all products
  const categories = Array.from(
    new Set(allProducts.map((product) => product.category))
  );

  // Handle category click event
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedProduct(null); // Reset selected product when changing categories
  };

  // Handle product click event
  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setSelectedCategory(null); // Reset selected category when clicking on a product
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Products</h1>
        <CategoryList
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryClick={handleCategoryClick}
        />
        {selectedProduct ? (
          <div>
            {/* Display only the selected product */}
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
