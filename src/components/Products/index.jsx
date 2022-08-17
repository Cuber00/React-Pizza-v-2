import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import Skeleton from './ProductCard/Skeleton';
import { installData } from '../../redux/slice/productSlice';
import { checkCategor } from '../../redux/slice/categoriesSlice';
import { checkTypeSort } from '../../redux/slice/sortingSlice';
import { changeValue } from '../../redux/slice/searchSlice';

const Products = () => {
  const URL_STATE = 'https://62f463cdac59075124bd19f0.mockapi.io/product';
  const dispatch = useDispatch();
  const activeCategor = useSelector((state) => state.categoriesSlice.activeItem);
  const activePath = useSelector((state) => state.sortingSlice.activePath);
  const searchPhrase = useSelector((state) => state.searchSlice.value).toLowerCase();
  const stateProduct = useSelector((state) => state.productSlice);

  const getParam = () => {
    if (searchPhrase) {
      dispatch(checkCategor(null));
      dispatch(checkTypeSort({ id: null, path: null, title: 'порядку' }));
      return `search=${searchPhrase}`;
      //Нужно сбросить параметры сортировки и категорий
    } else {
      return [
        `${activePath ? 'sortBy=' + activePath : ''}`,
        `${activeCategor ? 'filter=' + activeCategor : ''}`,
      ]
        .filter((item) => item)
        .join('&');
    }
  };

  useEffect(() => {
    const URL_PARAMETR = getParam();
    axios(`${URL_STATE}${URL_PARAMETR ? '?' + URL_PARAMETR : ''}`).then((response) => {
      console.log(response.data);
      dispatch(installData(response.data));
    });
  }, [activeCategor, activePath, searchPhrase]);

  return (
    <div className="content__items">
      {stateProduct.list.map((item, index) =>
        stateProduct.isLoadProduct ? (
          <ProductCard {...item} key={item.id} />
        ) : (
          <Skeleton key={index} />
        ),
      )}
    </div>
  );
};

export default Products;
