import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  Input,
  Card
} from "@nextui-org/react";
import PropTypes from "prop-types";
import { useState } from "react";

const UpdatePriceModal = ({ isOpen, onClose, onPriceUpdate, item }) => {
  const [newPrice, setNewPrice] = useState(0);
  const handlePriceUpdate = (price) => {
    onPriceUpdate(price);
    setNewPrice(0);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onClose}
      backdrop="blur"
      size="xl"
      placement="top-center"
    >
      <ModalContent>
        <ModalHeader>Update Price for {item.item_name}</ModalHeader>
        <ModalHeader className="flex flex-col px-8 pt-4">
          <Card className="p-4">
          <div className="flex w-full h-full flex-row">
              <h1 className="text-3xl h-full text-wrap w-full text-clip flex-grow">{item.store_name.slice(0, 20) || 'Undefied'}</h1>
              <h1 className="text-3xl flex my-auto text-green-400">
                ${item.price}
              </h1>
          </div>
          </Card>
        </ModalHeader>
        <ModalBody className="flex flex-row px-8 pb-6">
          <Input
            size="sm"
            radius="lg"
            placeholder="New Price"
            type="number"
            className="mb-2"
            onChange={(e) => setNewPrice(e.target.value)}
            value={newPrice}
            label="New Price"
          />
          <Button
            className=""
            variant="flat"
            onClick={() => handlePriceUpdate(newPrice)}
            size="lg"
          >
            Update
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

UpdatePriceModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onPriceUpdate: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

export default UpdatePriceModal;

// {
//   "item_id": 94,
//   "item_name": "Sausage - Andouille",
//   "store_id": 457,
//   "store_name": "Skinte",
//   "latitude": -6.9236,
//   "longitude": 113.2611,
//   "category_name": "misc",
//   "price": 4.75
// }
