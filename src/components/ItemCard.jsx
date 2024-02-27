import { Card, CardBody, CardFooter, CardHeader, Image } from '@nextui-org/react';
import PropTypes from 'prop-types';

const ItemCard = ({ item }) => {
  return (
      <Card className='dark bg-gray-700 p-2' isBlurred={true}>
        <CardHeader>
          <h1 className='text-2xl font-bold'>{item.name}</h1>
        </CardHeader>
        <Image src={"https://picsum.photos/100"} alt={item.name} width={300} height={300}/>
        <CardBody>
          <p>{item.description}</p>
        </CardBody>
        <CardFooter>
          <p>Price: {item.price}</p>
        </CardFooter>
      </Card>
  );
}

ItemCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ItemCard;