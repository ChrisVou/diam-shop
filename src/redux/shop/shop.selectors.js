import { createSelector } from 'reselect';

//To selectShop pernei tin state kai return tin state.shop
const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
);

//Theloume to collection.id url nai einai idio === me to COLLECTION_ID_MAP url
export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
  );