import React from 'react'
import './style.css';

const Card = ({name, image, description, title}) => (
	<div className="card">
        <img src={image} alt="" className="cardStock" />
        <h1 className='name'>{name}</h1>
        <p className='title'>{title}</p>
		<p className='description'>{description}</p>
	</div>
);

export default Card;
