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

const addNewPrice = async (item_id, store_id, newPrice) => {
  const data = await fetch(
    `/api/items/add/${item_id}/${store_id}/${newPrice}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  const result = await data.json();
  console.log(result);
};

const deletePrice = async (item_id, store_id) => {
  const data = await fetch(`/api/items/delete/${item_id}/${store_id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await data.json();
  console.log(result);
};

const updatePrice = async (item_id, store_id, newPrice) => {
  console.log("Updating price for item", item_id, "at store", store_id, "to", newPrice);
  const token = localStorage.getItem('token');
  const data = await fetch(
    `/api/items/update`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({ itemId:item_id, storeId:store_id, price:newPrice }),
    },
  );
  const result = await data.json();
  return result;
};

export { getItemInfo, getAllItems, addNewPrice, deletePrice, updatePrice };
