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

const UpdatePriceModal = ({ isOpen, onClose, onPriceUpdate }) => {
  const [newPrice, setNewPrice] = useState(0);

  const handlePriceUpdate = (price) => {
    onPriceUpdate(price);
    setNewPrice(0);
    onClose();
  }

  return (
    <Modal isOpen={isOpen} onOpenChange={onClose} backdrop="blur" size="xl" placement="top-center">
      <ModalContent>
        <ModalHeader>Update Price</ModalHeader>
        <ModalBody>
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
            className="w-full"
            variant="flat"
            onClick={() => handlePriceUpdate(newPrice)}
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
};

export default UpdatePriceModal;
