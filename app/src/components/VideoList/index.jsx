import React from 'react';
import Card from '../Card';
import './styles.css';
// eslint-disable-next-line react/prefer-stateless-function
class VideoList extends React.Component {
  render() {
    return (
      <div className="grid">
        <div className="item">
          <div className="card">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>

      </div>
    );
  }
}

export default VideoList;
