import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import PropTypes from "prop-types";

const ItemCard = ({ item, retriever }) => {
  return (
    <Card className="p-4 w-96 font-sans" isBlurred={true} key={item.item_id}>
      <CardHeader>
        <h1 className="text-wrap text-2xl font-bold">{item.item_name}</h1>
      </CardHeader>
      <CardBody className="flex justify-end">
        <p>{item.category_id}</p>
        <p>
          Cheapest at{" "}
          <b className="text-orange-400 text-lg">{item.store_name}</b>
        </p>
      </CardBody>
      <CardFooter>
        <div className="flex flex-row w-full gap-4">
          <Card className="w-full justify-center flex dark:bg-transparent">
            <p className="text-5xl text-green-600 p-1 truncate text-center dark:text-green-400 dark:font-bold">
              ${item.price}
            </p>
          </Card>
          <div className="flex flex-col">
            <Button
              className="w-full mb-1 font-bold text-lg"
              variant="flat"
              onClick={() => retriever(item.item_id)}
            >
              View
            </Button>
            <Button className="w-full mt-1 font-bold text-lg" variant="flat">
              Locate
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

ItemCard.propTypes = {
  item: PropTypes.object.isRequired,
  retriever: PropTypes.func.isRequired,
};

export default ItemCard;
