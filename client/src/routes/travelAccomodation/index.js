import './style.css';

const TravelAccomodation = () => (
	<div className="travel">
		<h1>Travel & Accomodation</h1>
		<p>TTC: Old Mill Station, Venue is a 2 minute walk away!</p>
		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11547.17858186067!2d-79.5005657613518!3d43.6524406659393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b36f574f01e2d%3A0x89be645251a5bfb6!2sOld%20Mill%2C%20Toronto%2C%20ON!5e0!3m2!1sen!2sca!4v1659038996194!5m2!1sen!2sca" width="600" height="450" style={{border: 0}} title="map of the venue"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
		<p>Nearby hotels are </p>	
		<a href="https://www.airbnb.ca/s/Old-Mill--Toronto--Ontario--Canada/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&price_filter_input_type=0&query=Old%20Mill%2C%20Toronto%2C%20ON&place_id=ChIJLR7wdPU2K4gRtr-lUVJkvok&date_picker_type=calendar&checkin=2023-08-19&checkout=2023-08-20&source=structured_search_input_header&search_type=autocomplete_click" target="_blank" rel="noreferrer" >Nearby airbnb options!</a>
		
	</div>
);

export default TravelAccomodation;
