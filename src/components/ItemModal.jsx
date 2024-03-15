import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Card,
} from "@nextui-org/react";
import PropTypes from "prop-types";

const ItemModal = ({ items, isOpen, onClose, openUpdatePriceModal }) => {
  console.log("ItemModal items opened", items);
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onClose}
      backdrop="blur"
      size="xl"
      placement="top-center"
    >
      <ModalContent>
        {(onClose) => (
          <div>
            <ModalHeader className="flex flex-col gap-1">
              {items.name}
            </ModalHeader>
            <ModalBody>
              {items &&
                items.stores &&
                items.stores.map((store, index) => (
                  <Card key={index} className="p-3">
                    <div className="flex flex-row w-full h-full">
                      <div className="w-full h-full">
                        <h1 className="text-3xl h-full">{store.store_name}</h1>
                        <h2>{store.address}</h2>
                      </div>
                      <h1
                        className={`text-3xl flex my-auto ${index === 0 ? "text-green-400" : ""}`}
                      >
                        {store.price}
                      </h1>
                    </div>
                    <div className="flex flex-row w-full mt-1">
                      <Button className="flex mx-auto w-full mr-1">
                        <a
                          href={`https://www.google.com/maps/@${store.latitude},${store.longitude},18z`}
                          target="_blank"
                        >
                          Locate
                        </a>
                      </Button>
                      <Button
                        className="flex w-full mx-auto my-auto text-wrap ml-1"
                        onClick={() =>
                          openUpdatePriceModal({
                            item_id: items.item_id, // Adjust accordingly
                            item_name: items.name,
                            store_id: store.store_id,
                            store_name: store.store_name,
                            price: store.price,
                          })
                        }
                      >
                        Update Price
                      </Button>
                    </div>
                  </Card>
                ))}
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </div>
        )}
      </ModalContent>
    </Modal>
  );
};

ItemModal.propTypes = {
  items: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  openUpdatePriceModal: PropTypes.func.isRequired,
};

export default ItemModal;

// {
//   "name": "Muffins - Assorted",
//   "item_id": 1,
//   "stores": [
//       {
//           "store_name": "Trudeo",
//           "store_id": 221,
//           "price": 16.77,
//           "timestamp": "2024-02-28 21:39:37",
//           "latitude": 32.650887,
//           "longitude": 101.505519,
//           "address": "3369 Ludington Road",
//           "culture_specialty": "European",
//           "expense_rating": "very expensive"
//       }
//   ]
// }
