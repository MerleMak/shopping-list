import "./AddItem.css";
import { useState } from "react";

export default function AddItem({ onInput, onAddItem }) {
  const [name, setName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onAddItem(name);
    setName("");
  }

  function handleChange(event) {
    setName(event.target.value);
    onInput(event.target.value);
  }

  return (
    <form className="AddItem__form" onSubmit={handleSubmit}>
      <label className="AddItem__label" htmlFor="new-item">
        What do you want to buy?
      </label>
      <input
        className="AddItem__input"
        type="text"
        id="new-item"
        placeholder="Add item"
        value={name}
        onChange={handleChange}
      />
      <button
        className="AddItem__button"
        //onClick={() => {
        //  setName("");
        //  onAddItem(name);}}
        // --> changes functionalities into form and handleSubmit function
      >
        Add
      </button>
    </form>
  );
}
