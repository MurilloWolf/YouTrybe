import React from 'react';
import Card from '../Card';
import data from '../../data';
import './styles.css';
// eslint-disable-next-line react/prefer-stateless-function
class VideoList extends React.Component {
  render() {
    const { results } = data;
    return (
      <div className="grid">
        <div className="item">

          {
             results.map((item) => (
               <Card
                 title={item.title}
                 subtitle={item.subtitle}
                 thumbnail={item.thumbnail}
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
