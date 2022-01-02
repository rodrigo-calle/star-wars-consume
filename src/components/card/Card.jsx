import React from 'react';
import PropTypes from 'prop-types';

import './Card.css'

const Card = (props) => {
    const { info } = props;



    return(
        <div className="card-container" key={info.name}>
            <p className="card-container__name"><span>NAME: </span> {info.name}</p>
            <p className="card-container__gender"><span>GENDER: </span> { info.gender} </p>
            <p className="card-container__born"><span>BITH YEAR: </span> {info.birth_year}</p>
            <p className="card-container__height"><span>HEIGHT: </span> {info.height} cm</p>
            <p className="card-container__mass"><span>MASS: </span> {info.mass} kg</p>
        </div>
    );
}

export default Card;

Card.propTypes = {
    info: PropTypes.instanceOf(Object).isRequired,
  };