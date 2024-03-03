import { useEffect, useState } from "react";
import { Button, Input, Spinner } from "@nextui-org/react";
import ItemCard from "./ItemCard";

const HomePage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    handleItemRetrieval();
  }, []);

  const handleItemRetrieval = async () => {
    // Fetch items from API
    const data = await fetch("/api/items");
    console.log(data);
    const items = await data.json();
    setItems(items);
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
      <div className="flex flex-row gap-5 h-full p-4 justify-center mx-auto my-2">
        <Input
          size="sm"
          radius="lg"
          placeholder="Type to search..."
          className="w-1/2"
        />
        <div className="flex flex-row">
          <Button
            className={`p-2 m-1 text-lg ${lightButtonStyle} ${darkButtonStyle}`}
            onClick={() => items.length === 0 && handleItemRetrieval()}
            variant="flat"
          >
            Search
          </Button>
          <Button
            className={`p-2 m-1 text-lg ${lightButtonStyle} ${darkButtonStyle}`}
          >
            Clear
          </Button>
          <Button
            className={`p-2 m-1 text-lg ${lightButtonStyle} ${darkButtonStyle}`}
          >
            Advanced Search
          </Button>
        </div>
      </div>
      <div className="flex flex-row flex-wrap h-full gap-6 px-20 justify-center mx-auto mt-8">
        {loading ? (
          <div>
            <Spinner size="lg" label="Loading items" />
          </div>
        ) : (
          items.length != 0 &&
          items.map((item, index) => (
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
