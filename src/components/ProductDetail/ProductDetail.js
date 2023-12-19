import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";

const ProductDetail = ({ products, setSelectedProduct }) => {
  const { id } = useParams();

  // Encuentra el producto con el ID correspondiente
  const product = products.find((product) => product.id === parseInt(id));

  useEffect(() => {
    if (product) {
      // Limpia todo lo anterior y carga solo el nuevo producto
      setSelectedProduct(product);
    }
  }, [product, setSelectedProduct]);

  if (!product) {
    return <p>Product not found</p>;
  }

  const { title, image, description } = product;

  return (
    <div className="product-detail-container">
      <h1>{title}</h1>
      <div className="product-content">
        <div className="product-description">
          <p className="vertical-center">{description}</p>
        </div>
        <div className="product-image">
          <img className="product-detail-image" src={image} alt={title} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
