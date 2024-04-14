import React, { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    //console.log("hS called");
    if (!description) return;
    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };
    //console.log(newItem);
    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    // This will handle form submission both via pressing "Enter" key and clicking on "Add" btn
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>

      <select
        value={quantity}
        onChange={(e) => {
          //console.log(e.target.value);
          setQuantity(Number(e.target.value));
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          //Inside <select> value is coming directly from option's value={num}
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => {
          //console.log(e.target.value);
          setDescription(e.target.value);
        }}
      />
      <button>Add</button>
      {/* We can also handle form submission like below but it will only
            listen to click BUT NOT via pressing "Enter" key */}
      {/* <button onclick={handleClick}>Add</button> */}
    </form>
  );
}
