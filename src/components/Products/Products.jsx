import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard/ProductCard';
import Skeleton from './ProductCard/Skeleton';

const Products = ({ sortBy, categoryId, products, setProducts }) => {
  const [isLoadProduct, setIsLoadProduct] = useState(false);
  const urlProduct = 'https://62f463cdac59075124bd19f0.mockapi.io/product';

  useEffect(() => {
    setIsLoadProduct(false);
    axios(`${urlProduct}?sortBy=${sortBy}&category=${categoryId}`)
      .then((response) => setProducts(response.data))
      .then(() => {
        setIsLoadProduct(true);
      });
  }, [sortBy, categoryId]);
  return (
    <div className="content__items">
      {products.map((item, index) =>
        isLoadProduct ? <ProductCard {...item} key={item.id} /> : <Skeleton key={index} />,
      )}
    </div>
  );
};

export default Products;
