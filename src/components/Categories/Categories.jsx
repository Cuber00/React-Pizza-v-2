import React, { useState } from 'react';
import CategorItem from './CategorItem/CategorItem';

const Categories = () => {
  const [active, setActive] = useState(0);
  const categors = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  return (
    <div className="categories">
      <ul>
        {categors.map((item, index) => (
          <CategorItem
            key={index}
            value={item}
            classActive={index === active ? 'active' : ''}
            onClick={() => setActive(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Categories;
