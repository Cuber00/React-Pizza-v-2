import React from 'react';

const CategorItem = ({ value, classActive, onClick }) => {
  return (
    <li className={classActive} onClick={onClick}>
      {value}
    </li>
  );
};

export default CategorItem;
