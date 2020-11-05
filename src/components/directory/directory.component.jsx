import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors.js';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

/* Edw xreiazetai na einai class component giati xreiazetai na apothikefsoume
tin state value twn menu items pou theloume na perasoume kai na 
dimiourgisoume ta menu items me afta */

const Directory = ({ sections }) => (
  <div className='directory-menu'>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}  
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);


/* Idios tropos alla oxi toso veltistos 
 this.state.sections.map(section => (
  <MenuItem key={secion.key} title={section.title} imageUrl={section.imageUrl} size={section.size} />
))

(ES6)  ...otherSectionProps, to xrisimopoioume giati ta keys values pou kanoume destructuring
Exoun to idio name me ta properties name ektos apo to key={id} pou exei diaforetiko key value apo 
 propertie name
this.state.sections.map(({ title, imageUrl, id, size, linkUrl }) => (
  <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
 ))
*/