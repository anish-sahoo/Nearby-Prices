import { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import ItemCard from "./ItemCard";

const HomePage = () => {
  const [items, setItems] = useState([]);

  const handleItemRetrieval = async () => {
    // Fetch items from API
    const data = await fetch("/api/items");
    console.log(data);
    const items = await data.json();
    setItems(items);
  };

  return (
    <div className="">
      <div className="flex flex-row gap-5 h-full p-4 justify-center mx-auto my-2">
        <Input
          size="sm"
          isClearable
          radius="lg"
          placeholder="Type to search..."
          className="w-1/2 light"
        />
        <div className="flex flex-row">
        <Button
          className="p-2 m-1"
          onClick={() => items.length === 0 && handleItemRetrieval()}
          color="primary"
        >
          Search
        </Button>
        <Button className="p-2 m-1" color="primary">Clear</Button>
        <Button className="p-2 m-1" color="primary">Advanced Search</Button>
        </div>
      </div>
      <div className="flex flex-row flex-wrap h-full gap-6 px-20 justify-center mx-auto">
        {items.length != 0 &&
          items.map((item) => <ItemCard key={item.id} item={item}/>)}
      </div>
    </div>
  );
};

export default HomePage;
