import React from 'react'
import './style.css';
import Card from '../../components/partyCard';
import { data } from './data';


const WeddingParty = () => (
	<div className="weddingParty">
		<h1>WeddingParty</h1>
		<p>This is the Wedding Party!! Meet the people!</p>
		<div className="party">
			{data.map((person) => (
				<Card key={person.id} name={person.name} image={person.image} description={person.description}></Card>
			))}
		</div>
	</div>
);

export default WeddingParty;
