import React from 'react';

import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <Directory />
  </div>
);

export default HomePage;

/* Exoume ftiaksei ton fakelo pages kai mesa valame to homepage
Afto pou tha kanoume einai na valoume edw mesa tis selides mas
giati den einai reusable component opws ta alla pou tha ftiaksoume
kai tha apothikefsoume mesa ston fakelo components */