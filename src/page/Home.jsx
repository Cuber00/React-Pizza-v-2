import React, { useState } from 'react';
import Categories from '../components/Categories/Categories';
import Pagination from '../components/Pagination';
import Products from '../components/Products/Products';
import Sort from '../components/Sort';

const Home = () => {
  const [sort, setSort] = useState({ id: 3, title: 'алфавиту', path: 'title' });
  const [active, setActive] = useState({ id: 0, title: 'Все' });
  const [visible, setVisible] = useState(false);

  const [products, setProducts] = useState([...new Array(6)]);

  return (
    <>
      <div className="content__top">
        <Categories active={active} setActive={setActive} />
        <Sort sort={sort} setSort={setSort} visible={visible} setVisible={setVisible} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <Products
        sortBy={sort.path}
        categoryId={active.id}
        products={products}
        setProducts={setProducts}
      />
      <Pagination />
    </>
  );
};

export default Home;
