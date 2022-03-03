import { initialItems } from "./db.js";

import AddItem from "./components/AddItem.js";
import ListItem from "./components/ListItem.js";

import "./components/Listbody.css";

function App() {
  return (
    <main className="Listbody">
      <header> Merle's shopping list</header>
      <AddItem />
      <ul>
        <ListItem ListItems={initialItems} />
      </ul>
    </main>
  );
}

export default App;
