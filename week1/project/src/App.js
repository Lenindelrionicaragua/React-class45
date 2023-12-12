import React, { useState } from "react";
import "./App.css";

const App = () => {
  // Fetch the product data from the provided file
  const allProducts = require("./all-products.json");

  // State to manage the selected category
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Function to filter products based on the selected category
  const filteredProducts = selectedCategory
    ? allProducts.filter((product) => product.category === selectedCategory)
    : allProducts;

  // Function to handle category selection
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>E-commerce App</h1>
        {/* Category list */}
        <div>
          <h2>Categories</h2>
          <ul>
            {/* Display all categories */}
            {Array.from(
              new Set(allProducts.map((product) => product.category))
            ).map((category) => (
              <li
                key={category}
                className={category === selectedCategory ? "active" : ""}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Product list */}
        <div>
          <h2>Products</h2>
          <ul>
            {/* Display all products */}
            {filteredProducts.map((product) => (
              <li key={product.id}>
                <strong>{product.name}</strong> - {product.description}
              </li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
};

export default App;
