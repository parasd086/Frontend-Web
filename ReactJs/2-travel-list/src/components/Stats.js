import React from "react";

export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items in your packing list 🚀</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const perci = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {perci === 100
          ? "You got everything ready to go ✈️"
          : `💼 You have ${numItems} items on your list, and you already packed ${numPacked} (${perci}%)`}
      </em>
    </footer>
  );
}
