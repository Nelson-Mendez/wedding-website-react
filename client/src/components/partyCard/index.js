import './style.css';

const Card = ({name, image, description}) => (
	<div className="card">
        <h1>{name}</h1>
        <img src={image} alt="" className="cardStock" />
		<p>{description}</p>
	</div>
);

export default Card;
