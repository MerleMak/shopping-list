function ListItem({ ListItems }) {
  return (
    <>
      {ListItems.map((item) => {
        return <ListItem key={item._id} name={item.name.en} />;
      })}
    </>
  );
}

export default ListItem;
