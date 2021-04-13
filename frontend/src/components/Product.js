import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const Product = ({ product }) => {
  return (
    <Card className='mb-30'>
      <div className='grocium-product-img'>
        <div className='img-loader__wrapper'>
          <Link to={`/product/${product._id}`}>
            <img
              className='img-loader__img'
              src={product.image}
              alt={product.name}
            />
          </Link>
        </div>
      </div>

      <Card.Body>
        <Link className='heigh45' to={`/product/${product._id}`}>
          <strong>{product.name}</strong>
        </Link>
        <Card.Text className='price'>$ {product.price}</Card.Text>
        <Button className='btn-block'>add to cart</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
