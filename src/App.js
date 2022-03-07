/* eslint-disable jsx-a11y/no-redundant-roles */
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";

import AddItem from "./components/AddItem.js";
import ListItem from "./components/ListItem.js";

//import { loadFromLocal, saveToLocal } from "./lib/localStorage.js";

import "./App.css";

export default function App() {
  //const [shoppingList, setshoppingList] = useState(loadFromLocal);
  const [items, setItems] = useState([]);
  const [data, setData] = useState([]);
  const [matchingItems, setMatchingItems] = useState([]);

  useEffect(() => {
    async function loadItems() {
      try {
        const response = await fetch(
          "https://fetch-me.vercel.app/api/shopping/items"
        );
        const data = await response.json();
        setData(data.data);
      } catch (error) {
        console.error(error);
      }
    }
    loadItems();
  }, []);

  /*useEffect(() => {
    saveToLocal("items", shoppingList);
  }, [shoppingList]);*/

  function addMatchedItem(item) {
    setItems([...items, item]);
  }

  function filterItems(searchString) {
    if (searchString.length > 1) {
      setMatchingItems(
        data.filter((item) =>
          item.name.en.toLowerCase().includes(searchString.toLowerCase())
        )
      );
    } else {
      setMatchingItems([]);
    }
  }

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

  function handleDelete(item) {
    setItems(items.filter((filteredItem) => filteredItem._id !== item._id));
  }

  return (
    <main className="list__body">
      <header className="list__header">shopping list</header>
      <ul role="list" className="list">
        {items.map((item) => (
          <ListItem
            ariaLabel="click to delete Item"
            onClick={handleDelete}
            key={item._id}
            item={item}
          />
        ))}
      </ul>
      <p className="list__info">-click item to delete-</p>
      <hr className="list__divider"></hr>
      <AddItem onInput={filterItems} onAddItem={handleAddItem} />
      <ul role="list" className="ApiList">
        {matchingItems.map((item) => (
          <ListItem
            ariaLabel="click to add Item from database"
            onClick={() => addMatchedItem(item)}
            key={item._id}
            item={item}
          />
        ))}
      </ul>
    </main>
  );
}
