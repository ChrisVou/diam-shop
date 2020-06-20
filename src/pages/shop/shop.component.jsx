import React from 'react';

//Epidei ta data mas einai static ta kanoume import apo to arxeio mas
import SHOP_DATA from './shop.data.js';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

//Epidei theloume na apotheikefsoume ta DATA pou tha xrisimopoieisoume
// sto shoppage mas, tha to kanoume class component
class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    const { collections } = this.state;
    return(
      <div className='shop-page'>
        {
          collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
          ))
        }
      </div>
    );
  }
}

export default ShopPage;

//Pername mesa sto CollectionPreview ola ta data apo to shop.data.js aexeio mas
// me tin voitheia tis map