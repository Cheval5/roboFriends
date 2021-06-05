import './Card.css';
import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className="tc bg-light-blue dib br3 ma2 pa3 grow bw2 shadow-5">
      <img src={`https://robohash.org/${name}?size=200x200`} alt='robots'/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;