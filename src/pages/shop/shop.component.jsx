import React from 'react';

import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

//To match, locate kai history to klironomei apo to Route pou einai sto App.js ws props
//An kanoume console.log(match) tha doume oti fernei to /shop page
//To math.path einai to /shop 
//Aftro to kanoume gia na boroume na exoume ta categories mas sto site mas px /hats, /jackets, etc..
const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;