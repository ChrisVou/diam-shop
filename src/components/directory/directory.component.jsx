import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

//Edw xreiazetai na einai class component giati xreiazetai na apothikefsoume
//tin state value twn menu items pou theloume na perasoume kai na 
//dimiourgisoume ta menu items me afta

class Directory extends React.Component {
  constructor() {
    super();

    this.state ={
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ]
    }
  }

  render() {
    return (
      <div className='directory-menu'>
        {
          //Kanoyme Destructuring ekso apo to section mesa sto map to (title, imageUrl kai id)
          //Kai ta pername mesa sto MenuItem
          this.state.sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps} />
          ))

          //Idios tropos alla oxi toso veltistos
          // this.state.sections.map(section => (
          //   <MenuItem key={secion.key} title={section.title} imageUrl={section.imageUrl} size={section.size} />
          // ))

          //(ES6)  ...otherSectionProps, to xrisimopoioume giati ta keys values pou kanoume destructuring
          // Exoun to idio name me ta properties name ektos apo to key={id} pou exei diaforetiko key value apo 
          // propertie name
          // this.state.sections.map(({ title, imageUrl, id, size, linkUrl }) => (
          //   <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
          // ))

        }
      </div>
    )
  }
}

export default Directory;