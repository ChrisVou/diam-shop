import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

/* .Kanoume destructuring kai kaloume to title kai items apo to
parent component to ShopPage
  .Xrisimopoioume to filter gia na mas epistrepsei ta prwta 4 
    apotelesmata mesa apo ton pinaka items sto shop.data.js
    meta to kanoume map gia na paroume to name 
  .Pername to item mesa sto CollectionItem
  ([#.10])*/
const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
