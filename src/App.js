import Categories from './components/Categories/Categories';
import Header from './components/Header';
import Products from './components/Products/Products';
import Sort from './components/Sort';
import './scss/app.scss';

function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <Products />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
