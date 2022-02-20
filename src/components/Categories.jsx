import React from "react";

const Categories = React.memo(function Categories({ activeCategory, items, onClickCategory }) {
  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? "active" : ""}
          onClick={() => onClickCategory(null)}
        >
          All
        </li>
        {items.map((name, key) => (
          <li
            className={activeCategory === key ? "active" : ""}
            onClick={() => onClickCategory(key)}
            key={`${name}_${key}`}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Categories;
