import React from 'react';
import Categories from '../components/Categories';
import Pagination from '../components/Pagination';
import Products from '../components/Products';
import Sorting from '../components/Sorting';

const Home = () => {
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sorting />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <Products />
      <Pagination />
    </>
  );
};

export default Home;
