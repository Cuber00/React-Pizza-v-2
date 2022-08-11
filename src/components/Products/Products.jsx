import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard/ProductCard';

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios('https://62f463cdac59075124bd19f0.mockapi.io/product').then((response) =>
      setProducts(response.data),
    );
  }, []);
  console.log(products);
  return (
    <div className="content__items">
      {products.map((item) => (
        <ProductCard {...item} key={item.id} />
      ))}
    </div>
  );
};

export default Products;
