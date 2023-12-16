import React from "react";

const ProductList = ({ products, selectedCategory, onProductClick }) => {
  const filteredProducts = Array.isArray(products)
    ? selectedCategory
      ? products.filter(({ category }) => category === selectedCategory)
      : products
    : [];

  return (
    <div>
      <ul className="product-list">
        {filteredProducts.map((product, index) => (
          <li key={index}>
            <button
              type="button"
              onClick={() => onProductClick(product)}
              className="product-link"
            >
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
              <h3>{product.title.replace(/^FAKE: /, "")}</h3>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
