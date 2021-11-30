import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    category: "Produce",
  });


  function handleItemChange(e) {
    const name = e.target.name; //<=input or select name
    const value = e.target.value; //<=input value

    setFormData({ ...formData, [name]: value });
  }


  function handleSubmit(e) {
    e.preventDefault()

    const newItem = {
      id: uuid(),
      name: formData.name,
      category: formData.category
    }

    onItemFormSubmit(newItem)

    formData.name = ""
    formData.category = "Produce"
  }


  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input
          onChange={handleItemChange}
          value={formData.name}
          type="text"
          name="name"
        />
      </label>

      <label>
        Category:
        <select
          onChange={handleItemChange}
          value={formData.category}
          name="category"
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
