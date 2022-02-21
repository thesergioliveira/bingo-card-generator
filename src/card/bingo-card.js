import React from 'react';
import Numbers from '../card/bingo-numbers';

function Card() {
  return (
    <div className="card-container">
      <img
        className="background"
        src={process.env.PUBLIC_URL + './images/backgroundOne.jpeg'}
        alt="rugged-background"
      />
      <div className="content-wrap">
        <div className="card-header">
          <h1>CHÁ DE BEBÊ</h1>
          <span>da Elisa</span>
        </div>
        <div className="number-container">
          <Numbers />
        </div>
        <div className="card-footer">
          <span>bingo</span>
        </div>
      </div>
    </div>
  );
}
export default Card;
