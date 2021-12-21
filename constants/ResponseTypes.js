const ResponseTypeList = [
  "Text",
  "Item",
  "Quest"
];

const ResponseTypes = ResponseTypeList.reduce((acc, item) => {
  acc[item] = item;
  return acc;
}, {})

export default ResponseTypes;
