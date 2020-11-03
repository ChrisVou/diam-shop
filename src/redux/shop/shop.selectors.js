import { createSelector } from 'reselect';

//To selectShop pernei tin state kai return tin state.shop
const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

//To Object.keys metatrepei to collections se array kai pernei ta key
//px to object {a: 1, a: 2} tha ginei array ["a", "b"]
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
);

//Data Normalization onomazete otan apothikevoume listes apo dedomena mesa se object andi gia array
export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
  );