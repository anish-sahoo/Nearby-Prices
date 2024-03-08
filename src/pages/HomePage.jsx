import { useEffect, useState } from "react";
import { Button, Input, Spinner } from "@nextui-org/react";
import ItemCard from "../components/ItemCard";
import { FaSearch } from "react-icons/fa";
import { MdClear } from "react-icons/md";
import ItemModal from "../components/ItemModal";
import UpdatePriceModal from "../components/UpdatePriceModal";
import { getAllItems, getItemInfo } from "../endpoints";

const HomePage = () => {
  const [items, setItems] = useState([]);
  const [displayItems, setDisplayItems] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItemInfo, setSelectedItemInfo] = useState({});
  const [isUpdatePriceModalOpen, setUpdatePriceModalOpen] = useState(false);
  const [shouldReopenItemModal, setShouldReopenItemModal] = useState(false);

  // retrieve all the items on page load
  useEffect(() => {
    handleItemRetrieval();
  }, []);

  // update the display items based on search
  useEffect(() => {
    // Filter items based on search
    if (search.length > 0) {
      const filteredItems = items.filter(
        (item) =>
          item.item_name.toLowerCase().includes(search.toLowerCase()) ||
          item.store_name.toLowerCase().includes(search.toLowerCase()) ||
          item.category_id.toLowerCase().includes(search.toLowerCase()),
      );
      setDisplayItems(filteredItems);
    } else {
      setDisplayItems(items);
    }
  }, [search, items]);

  // retrieve all the items
  const handleItemRetrieval = () => {
    setLoading(true);
    getAllItems().then((items) => {
      setItems(items.slice(0, 50));
      setDisplayItems(items.slice(0, 50));
      setLoading(false);
    });
  };

  // package the item info and stores and open the modal
  const handleItemInfoRetrieval = (id, name) => {
    getItemInfo(id).then((stores) => {
      setSelectedItemInfo({ name: name, item_id: id, stores: stores });
      setIsModalOpen(true);
    });
  };

  // open the modal for updating price
  const openUpdatePriceModal = (item) => {
    setSelectedItemInfo(item);
    setUpdatePriceModalOpen(true);
    setShouldReopenItemModal(isModalOpen);
  };

  // handle the price update
  const handlePriceUpdate = (item_id, item_name, updatedPrice) => {
    setUpdatePriceModalOpen(false);
    getItemInfo(item_id).then((data) => {
      setSelectedItemInfo({ name: item_name, item_id: item_id, stores: data });
      console.log("Updated price for", item_name, "to", updatedPrice);
      if (shouldReopenItemModal) {
        setIsModalOpen(true);
        setShouldReopenItemModal(false);
      }
    });
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
            <FaSearch />
          </Button>
          {search.length > 0 && (
            <Button
              className={`p-2 m-1 text-lg ${lightButtonStyle} ${darkButtonStyle}`}
              onClick={() => {
                setSearch("");
                setDisplayItems(items);
              }}
            >
              <MdClear />
            </Button>
          )}
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
              retriever={(id, name) => handleItemInfoRetrieval(id, name)}
              openUpdatePriceModal={() => openUpdatePriceModal(item)}
            />
          ))
        )}
      </div>
      <ItemModal
        items={selectedItemInfo}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        openUpdatePriceModal={(item) => openUpdatePriceModal(item)}
      />
      <UpdatePriceModal
        isOpen={isUpdatePriceModalOpen}
        onClose={() => setUpdatePriceModalOpen(false)}
        onPriceUpdate={(item_id, item_name, newPrice) =>
          handlePriceUpdate(item_id, item_name, newPrice)
        }
        item={selectedItemInfo}
      />
    </div>
  );
};

export default HomePage;
