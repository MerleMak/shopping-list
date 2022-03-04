export default function ListItem({ item, onDelete }) {
  return <li onClick={() => onDelete(item._id)}>{item.name.en}</li>;
}
