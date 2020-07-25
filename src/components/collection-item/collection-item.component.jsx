import React from 'react';
// ([#.5])
import { connect } from 'react-redux';

import CustomButtom from '../custom-button/custom.button.component';
// ([#.6])
import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';

//Vazoumee to addItem mesa sto CollectionItem
// ([#.9])
//Vazoume to item mesa sto CollectionItem kai kanoume destructure to { name, price, imageUrl } = item
//Episis prothetoume to return
// ([#.11])
const CollectionItem = ({ item, addItem }) => {
  //O logos pou to kanoume auto einai gia na boroume na xrisimopououme aftes tis values { name, price, imageUrl }
  // mesa ston kwdika mas
  const { name, price, imageUrl } = item;
  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      {/* Otan kanoume click sto CustomButton na ginete fired kai na kalei to addItem kai na pernaei mesa to item
       */}
      <CustomButtom onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButtom>
    </div>
  );
};

//Ftiaxnoume tin function addItem, kai kathe fora pou dispatch i kanoume call aftin tin action (addItem)
//afti i action (addItem) recaive tin item san property kai tin pernaei meesa stin dispatch(addItem())
//Vlepe video 8.15. Cart Item Reducer min 5:40
// ([#.7])
const mapDispatchtoProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

// ([#.8])
//Gia na exoume prosvasi sto addItem to opoio tha valoume sto vima #.9
export default connect(null, mapDispatchtoProps)(CollectionItem);
