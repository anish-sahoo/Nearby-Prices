import { useEffect, useState } from "react";
import { Button, Input, Spinner } from "@nextui-org/react";
import ItemCard from "../components/ItemCard";
import { FaSearch } from "react-icons/fa";
import { MdClear } from "react-icons/md";

const HomePage = () => {
  const [items, setItems] = useState([]);
  const [displayItems, setDisplayItems] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    handleItemRetrieval();
  }, []);

  useEffect(() => {
    // Filter items based on search
    if (search.length > 0) {
      const filteredItems = items.filter((item) =>
        item.item_name.toLowerCase().includes(search.toLowerCase()) ||
        item.store_name.toLowerCase().includes(search.toLowerCase())
      );
      setDisplayItems(filteredItems);
    } else {
      setDisplayItems(items);
    }
  }, [search, items]);

  const handleItemRetrieval = async () => {
    // Fetch items from API
    const data = await fetch("/api/items");
    console.log(data.status);
    const items = await data.json();
    setItems(items.slice(0, 50));
    setDisplayItems(items.slice(0, 50));
    setLoading(false);
  };

  const handleItemInfoRetrieval = async (id) => {
    // Fetch item info from API
    const data = await fetch(`/api/items/${id}`);
    const itemInfo = await data.json();
    console.log(itemInfo);
  };

  const darkButtonStyle = "dark:bg-indigo-800 dark:font-bold";
  const lightButtonStyle = "bg-sky-600 font-bold text-white";

  return (
    <div className="">
      <div className="flex flex-row flex-wrap gap-5 h-full p-4 justify-center mx-auto my-2">
        <Input
          size="sm"
          radius="lg"
          placeholder="Type to search..."
          className="md:w-1/2 w-full"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <div className="flex flex-row">
          <Button
            className={`p-2 m-1 text-lg ${lightButtonStyle} ${darkButtonStyle}`}
            onClick={() => items.length === 0 && handleItemRetrieval()}
          >
            <FaSearch/>
          </Button>
          {search.length > 0 && <Button
            className={`p-2 m-1 text-lg ${lightButtonStyle} ${darkButtonStyle}`}
            onClick={() => {setSearch(""); setDisplayItems(items);}}
          >
            <MdClear />
          </Button>}
          <Button
            className={`p-2 m-1 text-lg ${lightButtonStyle} ${darkButtonStyle}`}
          >
            Advanced Search
          </Button>
        </div>
      </div>
      <div className="flex flex-row flex-wrap h-full gap-6 px-4 md:px-20 justify-center mx-auto mt-8">
        {loading ? (
          <div>
            <Spinner size="lg" label="Loading items" />
          </div>
        ) : (
          displayItems.length != 0 &&
          displayItems.map((item, index) => (
            <ItemCard
              key={index}
              item={item}
              retriever={(id) => handleItemInfoRetrieval(id)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default HomePage;
