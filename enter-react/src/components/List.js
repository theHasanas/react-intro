const List = (props) => {
  const { items, title, ordered, type } = props;

  const listItems = items.map((item, index) => <li key={index}>{item}</li>);

  return (
    <>
      <h3>{title}</h3>
      {ordered ? <ol type={type}>{listItems}</ol> : <ul>{listItems}</ul>}
    </>
  );
};

export default List;
