import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeValue } from '../../redux/slice/searchSlice';
import { toggleShowModal, checkTypeSort } from '../../redux/slice/sortingSlice';

const Sorting = () => {
  console.count('Компонент Sorting перерисован');

  const { list, activeSort, showModal } = useSelector((state) => state.sortingSlice);
  const dispatch = useDispatch();

  const activeSortObj = activeSort
    ? list.filter((item) => item.id === activeSort)[0]
    : { title: 'порядку' };

  const toggleModal = () => {
    dispatch(toggleShowModal(!showModal));
  };

  const clearInput = () => {
    dispatch(changeValue(''));
  };

  const checkNewTypeSort = (el) => {
    clearInput();
    const activeId = Number(el.target.getAttribute('path'));
    const activePath = list.filter((item) => item.id === activeId)[0].path;
    dispatch(checkTypeSort({ id: activeId, path: activePath }));
    toggleModal();
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={toggleModal}>{activeSortObj.title}</span>
      </div>
      {showModal && (
        <div className="sort__popup">
          <ul>
            {list.map((i) => (
              <li onClick={(el) => checkNewTypeSort(el)} key={i.id} path={i.id}>
                {i.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sorting;
