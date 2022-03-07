import "./ListItem.css";

export default function ListItem({ item, onClick }) {
  return (
    <li className="ListItem" onClick={() => onClick(item)}>
      {item.name.en}
    </li>
  );
}
