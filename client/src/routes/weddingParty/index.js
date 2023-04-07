import React from 'react'
import './style.css';
import Card from '../../components/partyCard';
import { data } from './data';


const WeddingParty = () => (
	<div className="weddingParty">
        <h1>Wedding Party</h1>
		<h4>Meet the members of our wedding party!</h4>
		<div className="party">
			{data.map((person) => (
				<Card title={person.title} key={person.id} name={person.name} image={person.image} description={person.description}></Card>
			))}
		</div>
	</div>
);

export default WeddingParty;
