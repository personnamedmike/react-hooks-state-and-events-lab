import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleSelectedCategory(e) {
    setSelectedCategory(e.target.value);
  }

  const filteredCategory = items.filter((item) => {
    if (selectedCategory === "All") {
      return item;
    } else if (item.category === selectedCategory) {
      return item.category;
    }
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleSelectedCategory} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredCategory.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
