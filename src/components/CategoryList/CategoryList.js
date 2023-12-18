import React from "react";
import CategoryListItem from "../CategoryListItem/CategoryListItem";

const CategoryList = ({ categories, selectedCategory, onCategoryClick }) => {
  const handleClick = (category) => {
    // If the current category is already selected, deselect it
    const newSelectedCategory = category === selectedCategory ? null : category;
    onCategoryClick(newSelectedCategory);
  };

  return (
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
  );
};

export default CategoryList;
