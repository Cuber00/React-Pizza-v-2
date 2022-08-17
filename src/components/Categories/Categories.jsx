import React from 'react';
import CategorItem from './CategorItem/CategorItem';

const Categories = ({ active, setActive }) => {
  const categors = [
    { id: 0, title: 'Все' },
    { id: 1, title: 'Мясные' },
    { id: 2, title: 'Вегетарианская' },
    { id: 3, title: 'Гриль' },
    { id: 4, title: 'Острые' },
    { id: 5, title: 'Закрытые' },
  ];
  const changeCategor = (index) => {
    setActive(categors[index]);
  };
  return (
    <div className="categories">
      <ul>
        {categors.map((item, index) => (
          <CategorItem
            key={item.id}
            value={item.title}
            classActive={item.id === active.id ? 'active' : ''}
            onClick={() => changeCategor(item.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Categories;
