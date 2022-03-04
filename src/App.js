import { nanoid } from "nanoid";
import { initialItems } from "./db.js";
import { useState } from "react";

import AddItem from "./components/AddItem.js";
import ListItem from "./components/ListItem.js";

import "./components/Listbody.css";

let nextID = 1;

export default function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItem(title) {
    setItems([
      ...items,
      {
        _id: nanoid(),
        _type: "shopping.item",
        category: { _type: "ref", _ref: "c2hvcHBpbmcuY2F0ZWdvcnk6MA==" },
        name: { en: title, de: "" },
      },
    ]);
  }

  function handleonDelete(itemId) {
    setItems(items.filter((filteredItem) => filteredItem._id !== itemId));
  }

  return (
    <main className="Listbody">
      <header> Merle's shopping list</header>
      <ul>
        {items.map((item) => (
          <ListItem onDelete={handleonDelete} key={item._id} item={item} />
        ))}
      </ul>
      <AddItem onAddItem={handleAddItem} />
    </main>
  );
}
