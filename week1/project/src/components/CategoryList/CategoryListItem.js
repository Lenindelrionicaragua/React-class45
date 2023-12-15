import React from "react";

const CategoryListItem = ({ category, isSelected, onClick }) => (
  <li
    className={`category-list-item ${isSelected ? "active" : ""}`}
    onClick={onClick}
  >
    {category}
  </li>
);

export default CategoryListItem;
