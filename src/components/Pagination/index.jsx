import cl from './style.module.scss';

const Pagination = () => {
  return (
    <div className={cl.pagination}>
      <div className={cl.item}>
        <svg width="18px" height="18px" viewBox="-32 0 512 512">
          <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z" />
        </svg>
      </div>
      <div className={cl.item + ' ' + cl.active}>1</div>
      <div className={cl.item}>2</div>
      <div className={cl.item}>3</div>
      <div className={cl.item} style={{ transform: 'rotate(-180deg)' }}>
        <svg width="18px" height="18px" viewBox="-32 0 512 512">
          <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z" />
        </svg>
      </div>
    </div>
  );
};

export default Pagination;
