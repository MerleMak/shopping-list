/* eslint-disable jsx-a11y/no-redundant-roles */
import { nanoid } from "nanoid";
import { initialItems } from "./db.js";
import { useState } from "react";

import AddItem from "./components/AddItem.js";
import ListItem from "./components/ListItem.js";

import "./App.css";

export default function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItem(name) {
    setItems([
      ...items,
      {
        _id: nanoid(),
        _type: "shopping.item",
        category: { _type: "ref", _ref: "c2hvcHBpbmcuY2F0ZWdvcnk6MA==" },
        name: { en: name, de: "" },
      },
    ]);
  }

  function handleonDelete(itemId) {
    setItems(items.filter((filteredItem) => filteredItem._id !== itemId));
  }

  return (
    <main className="list__body">
      <header className="list__header">shopping list</header>
      <ul role="list" className="list">
        {items.map((item) => (
          <ListItem
            ariaLabel="click to delete Item"
            onDelete={handleonDelete}
            key={item._id}
            item={item}
          />
        ))}
      </ul>
      <p className="list__info">-click item to delete-</p>
      <hr className="list__divider"></hr>
      <AddItem onAddItem={handleAddItem} />
    </main>
  );
}
