import React from "react";
import CategoryListItem from "./CategoryListItem";

const CategoryList = ({ categories, selectedCategory, onCategoryClick }) => {
  const handleClick = (category) => {
    onCategoryClick(category);
  };

  return (
    <>
      <ul className="category-list">
        {categories.map((category) => (
          <CategoryListItem
            key={category}
            category={category}
            isSelected={category === selectedCategory}
            onClick={() => handleClick(category)}
          />
        ))}
      </ul>
    </>
  );
};

export default CategoryList;
