import React, { useContext } from 'react';

import '../styles/TopicList.scss';
import TopicListItem from './TopicListItem';
import { photoLabContext } from '../Context';


const TopicList = () => {

  const{ topics }= useContext(photoLabContext);

  const newTopics = topics.map((topic) => {

    return (
      <TopicListItem 
        key={topic.id} 
        title={topic.title}
        id={topic.id}
        slug={topic.slug}
      />
    )
  });
  return (
  <div className="top-nav-bar--topic-list">
    { newTopics }
  </div>
  )
}

export default TopicList