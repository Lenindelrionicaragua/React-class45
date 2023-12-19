// ProductList.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../../services/api";

const ProductList = ({ selectedCategory, onProductClick }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await getProducts(selectedCategory);
        setProducts(productsData);
        setLoading(false);
      } catch (error) {
        setError("Error fetching products");
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedCategory]);

  const handleProductClick = (product) => {
    // Ensure that onProductClick is a function before invoking it
    if (typeof onProductClick === "function") {
      onProductClick(product);
    }
  };

  const renderProductList = () => (
    <ul className="product-list">
      {products.map((product, index) => (
        <li key={index}>
          <Link to={`/product/${product.id}`}>
            <button
              type="button"
              onClick={() => handleProductClick(product)}
              className="product-link"
            >
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
              <h3>{product.title}</h3>
            </button>
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        renderProductList()
      )}
    </div>
  );
};

export default ProductList;
