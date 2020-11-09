import React from 'react';
class Card extends React.Component {
  render() {
    const { title, subtitle, thumbnail } = this.props.video;
    return (
      <section>
        <img className="card-image" alt="" src={thumbnail} />
        <div className="info">
          <h6 className="title">{title}</h6>
          <p className="subtitle">{subtitle}</p>
        </div>
      </section>
    );
  }
}

export default Card;
