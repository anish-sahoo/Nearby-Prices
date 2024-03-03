import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import PropTypes from "prop-types";

const ItemCard = ({ item }) => {
  console.log("ItemCard", item);
  return (
    <Card className="p-4 w-96" isBlurred={true} key={item.item_id}>
      <CardHeader>
        <h1 className="text-wrap text-2xl font-bold">{item.item_name}</h1>
      </CardHeader>
      <CardBody>
        <p>{item.category_id}</p>
      </CardBody>
      <CardFooter>
        <div className="flex flex-row w-full gap-4">
          <Card className="w-full justify-center flex dark:bg-transparent">
            <p className="text-5xl text-green-600 p-1 truncate text-center dark:text-green-400 dark:font-bold">{item.price}</p>
          </Card>
          <div className="flex flex-col">
            <Button className="w-full mb-1 font-bold font-sans text-lg" variant='flat'>View</Button>
            <Button className="w-full mt-1 font-bold font-sans text-lg" variant='flat'>Locate</Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

ItemCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ItemCard;
