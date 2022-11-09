import style from './style.css';

const Header = () => (
	<header className="header">
		<div className="socials">
			<p className="titleThing" >August 19th, 2023 <span style={{float: 'right'}}>#JaneAndNelson</span></p>
		</div>
		<h1>Nelson and Jane's Wedding!</h1>
		<nav>
			<a href="/">Welcome</a>
			<a href="/Details">Details</a>
			<a href="/RSVP">RSVP</a>
			<a href="/WeddingParty">Wedding Party</a>
			<a href="/TravelAccomodation">Travel / Accomodations</a>
			<a href="/Registry">Registry</a>
		</nav>
	</header>
);

export default Header;
