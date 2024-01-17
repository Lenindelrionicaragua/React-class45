import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";
import { useFavorites } from "../../context/FavoritesContext";
import HeartRegularIcon from "../HeartIcons/HeartRegularIcon";
import HeartSolidIcon from "../HeartIcons/HeartSolidIcon";

const ProductDetail = ({ products, setSelectedProduct }) => {
  const { id } = useParams();
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();

  useEffect(() => {
    if (products.length === 0) {
      return;
    }

    const product = products.find((product) => product.id === parseInt(id));

    if (!product) {
      return;
    }

    setSelectedProduct(product);

    return () => {
      setSelectedProduct(null);
    };
  }, [id, products, setSelectedProduct]);

  if (products.length === 0) {
    return <p>No products available</p>;
  }

  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <p>Product not found</p>;
  }

  const { title, image, description } = product;

  return (
    <div className="product-detail-container">
      <div className="product-content">
        <div className="product-description">
          <p className="vertical-center">{description}</p>
          <div className="heart-icon-container">
            {isFavorite(product.id) ? (
              <HeartSolidIcon onClick={() => removeFavorite(product.id)} />
            ) : (
              <HeartRegularIcon onClick={() => addFavorite(product.id)} />
            )}
          </div>
        </div>
        <div className="product-image">
          <img className="product-detail-image" src={image} alt={title} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
