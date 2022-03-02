// import { useState } from "react";

import AddItem from "./components/AddItem.js";
import "./components/Listbody.css";

function App() {
  return (
    <main className="Listbody">
      <header> Merle's shopping list</header>
      <AddItem></AddItem>
    </main>
  );
}

export default App;
