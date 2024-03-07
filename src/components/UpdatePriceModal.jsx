import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  Input,
} from "@nextui-org/react";
import PropTypes from "prop-types";
import { useState } from "react";

const UpdatePriceModal = ({ isOpen, onClose, onPriceUpdate, item }) => {
  const [newPrice, setNewPrice] = useState(0);
  // console.log(item);
  const handlePriceUpdate = (price) => {
    onPriceUpdate(price);
    setNewPrice(0);
    onClose();
  }

  return (
    <Modal isOpen={isOpen} onOpenChange={onClose} backdrop="blur" size="xl" placement="top-center">
      <ModalContent>
        <ModalHeader>Update Price</ModalHeader>
        <ModalHeader className="flex flex-col px-8 pt-8"> 
          <h1 className="text-2xl font-bold hover:underline">{item.item_name}</h1>
          <h2 className="text-lg font-bold">{item.store_name}</h2>
          <p className="text-lg font-bold">${item.price}</p>
        </ModalHeader>
        <ModalBody className="flex flex-row px-8 pb-8">
          <Input
            size="sm"
            radius="lg"
            placeholder="New Price"
            type="number"
            className="mb-2"
            onChange={(e) => setNewPrice(e.target.value)}
            value={newPrice}
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