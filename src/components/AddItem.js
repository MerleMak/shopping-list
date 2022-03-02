import { useState } from "react";

const [items, setItem] = useState(initialItems);

export default function AddItem() {
  setItem([...items, { itemname: "", status: false }]);

  return (
    <>
      <input placeholder="Add item" />
      <button onClick={() => {}}>Add</button>
    </>
  );
}
