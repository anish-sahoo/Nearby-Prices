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

const setNewPrice = async (item_id, store_id, newPrice) => {
  // STUB - replace with actual API call
  await setTimeout(1000);
  console.log(item_id, store_id, newPrice);
};

export { getItemInfo, getAllItems, setNewPrice };
