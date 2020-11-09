import React from 'react';
import Card from './Card';
import data from '../data';
class VideoList extends React.Component {
  render() {
    const { results } = data;
    return (
      <div className="grid">
        <div className="item">
          {
             results.map((item) => (
               <Card
                 video={item}
                 key={item.title}
               />
             ))
           }

        </div>

      </div>
    );
  }
}

export default VideoList;
