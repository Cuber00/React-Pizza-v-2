import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard/ProductCard';
import Skeleton from './ProductCard/Skeleton';

const Products = () => {
  const [products, setProducts] = useState([...new Array(6)]);
  const [isLoadProduct, setIsLoadProduct] = useState(false);

  useEffect(() => {
    axios('https://62f463cdac59075124bd19f0.mockapi.io/product')
      .then((response) => setProducts(response.data))
      .then(() => {
        setIsLoadProduct(true);
      });
  }, []);

  console.log(isLoadProduct);
  return (
    <div className="content__items">
      {products.map((item) =>
        isLoadProduct ? <ProductCard {...item} key={item.id} /> : <Skeleton />,
      )}
    </div>
  );
};

export default Products;
