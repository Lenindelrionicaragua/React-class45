import React from "react";

const CategoryListItem = ({ category, isSelected, onClick }) => (
  <li
    className={isSelected ? "active" : ""}
    onClick={onClick}
    style={{ cursor: "pointer" }}
  >
    {category}
  </li>
);

export default CategoryListItem;
