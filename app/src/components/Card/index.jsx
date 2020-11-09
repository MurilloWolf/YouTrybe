import React from 'react';
import './styles.css';
// eslint-disable-next-line react/prefer-stateless-function
class Card extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { title, subtitle, thumbnail } = this.props;
    return (
      <section>
        <img className="card-image" alt="" src={thumbnail} />
        <div className="info">
          <div>
            <h6 className="title">
              {title}
            </h6>
            <p className="subtitle">
              {subtitle}

            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Card;
