import React, { useState } from 'react';

const ProductType = ({ arr, theme }) => {
  const [activeType, setActiveType] = useState(0);
  return (
    <ul>
      {arr.map((item, index) => (
        <li
          className={activeType === index ? 'active' : ''}
          onClick={() => setActiveType(index)}
          key={index}>
          {theme[index]}
        </li>
      ))}
    </ul>
  );
};

export default ProductType;
