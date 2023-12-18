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

  const renderProductList = () => (
    <ul className="product-list">
      {products.map((product, index) => (
        <li key={index}>
          {/* Use Link from react-router-dom to navigate to the product detail page */}
          <Link to={`/products/${product.id}`}>
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
