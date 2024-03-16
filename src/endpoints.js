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
  const data = await fetch(`/api/items/update/${item_id}/${store_id}/${newPrice}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    }
  });
  const result = await data.json();
  console.log(result);
};

const addNewPrice = async (item_id, store_id, newPrice) => {
  const data = await fetch(`/api/items/add/${item_id}/${store_id}/${newPrice}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    }
  });
  const result = await data.json();
  console.log(result);
};

const deletePrice = async (item_id, store_id) => {
  const data = await fetch(`/api/items/delete/${item_id}/${store_id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    }
  });
  const result = await data.json();
  console.log(result);
};

export { getItemInfo, getAllItems, setNewPrice, addNewPrice, deletePrice };
