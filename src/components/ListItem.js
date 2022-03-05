import "./ListItem.css";

export default function ListItem({ item, onDelete }) {
  return (
    <li className="ListItem" onClick={() => onDelete(item._id)}>
      {item.name.en}
    </li>
  );
}
