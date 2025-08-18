import React, { useState } from "react";
import "./App.css";

function HomePage() {
  const items = ["Keys 🔑", "Wallet 👛", "Water Bottle 🍼", "Books 📚", "Lunch Box 🍱"];
  const [checkedItems, setCheckedItems] = useState([]);

  const toggleCheck = (item) => {
    setCheckedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  return (
    <div className="page">
      <h1>🚪 Habit: Check Before Leaving Home</h1>
      <p>Select all items before you leave:</p>
      <div className="checklist">
        {items.map((item, index) => (
          <label key={index} className="checkbox">
            <input
              type="checkbox"
              checked={checkedItems.includes(item)}
              onChange={() => toggleCheck(item)}
            />
            {item}
          </label>
        ))}
      </div>

      {checkedItems.length === items.length ? (
        <h2 className="success">Great! You're ready to leave home safely!</h2>
      ) : (
        <h2 className="warning">Don’t forget something!</h2>
      )}
    </div>
  );
}

export default HomePage;
