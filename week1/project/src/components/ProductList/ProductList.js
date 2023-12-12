import React from "react";

const ProductList = ({ products, selectedCategory, onProductClick }) => {
  const filteredProducts = Array.isArray(products)
    ? selectedCategory
      ? products.filter((product) => product.category === selectedCategory)
      : products
    : [];

  return (
    <div>
      <h2>Products</h2>
      <ul className="product-list">
        {filteredProducts.map((product, index) => (
          <li key={index}>
            <a
              href="#"
              onClick={() => onProductClick(product)}
              className="product-link"
            >
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
              <h3>{product.title.replace(/^FAKE: /, "")}</h3>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
