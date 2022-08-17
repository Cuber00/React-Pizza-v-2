import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkCategor } from '../../redux/slice/categoriesSlice';
import { changeValue } from '../../redux/slice/searchSlice';
import CategorItem from './CategorItem';

const Categories = () => {
  console.count('Компонент Categor был перерисован');
  const { list, activeItem } = useSelector((state) => state.categoriesSlice);
  const dispatch = useDispatch();
  const categories = [{ id: null, title: 'Все' }].concat(list);
  const clearInput = () => {
    dispatch(changeValue(''));
  };
  const changeCategor = (idCategor) => {
    clearInput();
    dispatch(checkCategor(idCategor));
  };
  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) => (
          <CategorItem
            key={item.id ? item.id : Date.now()}
            value={item.title}
            classActive={item.id === activeItem ? 'active' : ''}
            onClick={() => changeCategor(item.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Categories;
