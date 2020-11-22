import React from 'react';

import CardLink from '../CardLink/card-link.component';

import './introduction-resources.styles.scss';

import video from '../../../assets/images/video.svg';

import { introResources, howDoI, popularVideos } from '../CardLink/card-link-data';

const IntroductionResources = () => {
  // HowDoI list items
  const listOne = Object.entries(howDoI.list1);
  const listTwo = Object.entries(howDoI.list2);

  const videoData = Object.entries(popularVideos.list);

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
        { introResources.map((item) => <CardLink key={item.id} {...item} />) }
      </div>
      <div className='links-2'>
        <div className='how-do-i'>
          <div className='header'>
            <h3>How do I?</h3>
            <p>
              Check out the following topics to learn how to build, run, and deploy your applications using Docker.
            </p>
          </div>
          <div className='list'>
            <ul>
              { listOne.map(item => <li key={item[0]}><p>{item[1]}</p></li>) }
            </ul>
            <ul>
              { listTwo.map(item => <li key={item[0]}><p>{item[1]}</p></li>) }
            </ul>
          </div>
        </div>
        <div className='popular-videos'>
          <div className='header'>
            <h3>Popular videos</h3>
            <p>Watch the most popular videos from DockerCon.</p>
          </div>
          { videoData.map(item => (
            <div key={item[0]} className='video-link list'>
              <img src={video} alt='video' />
              <p>{item[1]}</p>
            </div>
          )) }
        </div>
      </div>
    </section>
  );
};

export default IntroductionResources;