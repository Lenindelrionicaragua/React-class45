import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";

const ProductDetail = ({ products, setSelectedProduct }) => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  useEffect(() => {
    if (product) {
      setSelectedProduct(product);
    }

    // Limpiar el producto seleccionado cuando se desmonta el componente
    return () => {
      setSelectedProduct(null);
    };
  }, [product, setSelectedProduct]);

  if (!product) {
    return <p>Product not found</p>;
  }

  const { title, image, description } = product;

  return (
    <div className="product-detail-container">
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
