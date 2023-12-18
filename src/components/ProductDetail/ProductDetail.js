import React from "react";

const ProductDetail = ({ productId, title, image, description }) => (
  <div>
    <h2>{title}</h2>
    <img src={image} alt={title} />
    <p>{description}</p>
    <p>Product ID: {productId}</p>
  </div>
);

export default ProductDetail;
