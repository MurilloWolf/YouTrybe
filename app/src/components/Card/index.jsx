import React from 'react';
import './styles.css';
// eslint-disable-next-line react/prefer-stateless-function
class Card extends React.Component {
  render() {
    return (
      <section>
        <img className="card-image" alt="" src="https://s3.amazonaws.com/gupy5/production/companies/1673/career/2546/images/2020-10-08_20-12_institutionalImage1.png" />
        <div className="info">
          <div className="auth">
            <img alt="" src="" />
          </div>
          <div>
            <h6 className="title"> Title </h6>
            <p className="subtitle">Subtitle </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Card;
