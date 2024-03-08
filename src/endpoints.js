// retrieve all the stores for one item
const getItemInfo = async (id) => {
  const data = await fetch(`/api/items/${id}`);
  const itemInfo = await data.json();
  return itemInfo;
};

// retrieve all items
const getAllItems = async () => {
  const data = await fetch("/api/items");
  const items = await data.json();
  return items;
};

export { getItemInfo, getAllItems };
