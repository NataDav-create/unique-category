const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

  //get unique types
  let types = getUnique(rooms, "type");
  //add all
  types = ["all", ...types];
  //map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
