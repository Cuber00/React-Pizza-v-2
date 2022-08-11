import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    className="pizza-block"
    {...props}>
    <circle cx="140" cy="130" r="130" />
    <rect x="0" y="272" rx="10" ry="10" width="280" height="24" />
    <rect x="0" y="318" rx="10" ry="10" width="280" height="85" />
    <rect x="0" y="420" rx="10" ry="10" width="120" height="40" />
    <rect x="172" y="434" rx="0" ry="0" width="1" height="0" />
    <rect x="160" y="420" rx="10" ry="10" width="120" height="40" />
  </ContentLoader>
);

export default Skeleton;
