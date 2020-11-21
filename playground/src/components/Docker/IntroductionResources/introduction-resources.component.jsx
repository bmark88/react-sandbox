import React from 'react';

import CardLink from '../CardLink/card-link.component';

import './introduction-resources.styles.scss';

import { introResources } from '../CardLink/card-link-data';

const IntroductionResources = () => {
  return (
    <section className='introduction-resources container'>
      <div className='search'>
        <form>
          <label htmlFor='search-bar'>
            <h2>What can we help you find?</h2>
          </label>
          <input type='text' name='search-bar' placeholder='Search for guides, terms, commands and more...' />
        </form>
      </div>
      <div className='links-1'>
        {introResources.map((item) => <CardLink {...item} />)}
      </div>
      <div className='links-2'>

      </div>
    </section>
  );
};

export default IntroductionResources;