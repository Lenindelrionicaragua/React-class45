import React, { useState } from "react";
import CategoryListItem from "./CategoryListItem";

const CategoryList = ({ categories, selectedCategory, onCategoryClick }) => {
  const [prevSelectedCategory, setPrevSelectedCategory] = useState(null);

  const handleClick = (category) => {
    if (category === selectedCategory) {
      onCategoryClick(null);
      setPrevSelectedCategory(null);
    } else {
      onCategoryClick(category);
      setPrevSelectedCategory(category);
    }
  };

  return (
    <div>
      <h2>Categories</h2>
      <ul className="category-list">
        {categories.map((category) => (
          <CategoryListItem
            key={category}
            category={category}
            isSelected={category === selectedCategory}
            onClick={() => handleClick(category)}
          />
        ))}
        {prevSelectedCategory && (
          <CategoryListItem
            key="all-categories"
            category="All Categories"
            isSelected={selectedCategory === null}
            onClick={() => handleClick(null)}
          />
        )}
      </ul>
    </div>
  );
};

export default CategoryList;
