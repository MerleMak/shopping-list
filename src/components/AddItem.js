import { useState } from "react";

export default function AddItem({ onAddItem }) {
  const [name, setName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onAddItem(name);
    setName("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-item">What do you want to buy?</label>
      <input
        type="text"
        id="new-item"
        placeholder="Add item"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button
      //onClick={() => {
      //  setName("");
      //  onAddItem(name);}}
      >
        Add to list
      </button>
    </form>
  );
}
