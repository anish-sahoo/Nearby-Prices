import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Card } from "@nextui-org/react";
import PropTypes from "prop-types";

const ItemModal = ({ items, isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onClose} backdrop="blur">
        <ModalContent>
          {(onClose) => (
            <div>
              <ModalHeader className="flex flex-col gap-1">Sample Item</ModalHeader>
              <ModalBody>
                {items.map((item) => (
                  <Card key={item.item_id} className="flex flex-row gap-2">
                    <h1>{item.item_name}</h1>
                    <p>{item.category_id}</p>
                    <p>{item.store_name}</p>
                    <p>{item.price}</p>
                    <p>{item.latitude}</p>
                    <p>{item.longitude}</p>
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
}

ItemModal.propTypes = {
  items: PropTypes.array.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ItemModal;