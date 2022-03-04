import { initialItems } from "./db.js";
import { useState } from "react";

import AddItem from "./components/AddItem.js";
import ListItem from "./components/ListItem.js";

import "./components/Listbody.css";

function App() {
  const [items, setItems] = useState(initialItems);

  function handleonDelete(itemId) {
    setItems;
  }

  return (
    <main className="Listbody">
      <header> Merle's shopping list</header>
      <ul>
        <ListItem items={items} />
      </ul>
      <AddItem />
    </main>
  );
}

export default App;
