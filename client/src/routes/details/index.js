import React from 'react'
import './style.css';

const Details = () => (
	<div className="detail">
		<h1>Details!</h1>
		<p>We're getting married!</p>
		<p>Saturday August 19th 2023</p>
		<p>The Old Mill, Toronto</p>
        <p>Ceremony starts at 4pm sharp at the chapel, followed by cocktail hour and reception, with dinner and dancing in the Guildhall room starting at 5pm, all on site.</p>

        <div className="faq">
		<h1>FAQ</h1>
		<p  className='question'>Can we bring our children?</p>
		<p className='answer'>While we love all of our family and friends' children, we would like to keep our special day to adults, and young adults listed on the invitation only.</p>

        <p className='question'>What are the rules on plus ones?</p>
        <p className='answer'>We are thrilled to have you join us on our special day! <br></br> As we're trying to keep our guest list to close family and friends, we would kindly request that only guests included on your invitation attend.</p>
		
        <p className='question'>What time should I arrive?</p>
        <p className='answer'>Please try to arrive at least 15 minutes before the ceremony, which starts at 4:00pm sharp!</p>

		<p className='question'>Is there a dress code?</p>
        <p className='answer'>Formal, black tie optional!</p>

        <p className='question'>Where can I park?</p>
        <p className='answer'>Parking is right across the street of the Old Mill, with plenty of space! <br></br>Parking is $12.00 for the entire evening.</p>

        <p className='question'>Where do I go once I get there?</p>
        <p className='answer'>Look for the Chapel Entrance / Main Entrance at the top of the hill. <br></br>Please see the Travel & Accomodations tab above for more info.</p>

        <p className='question'>Is there a registry?</p>
        <p className='answer'>While we don't have an official registry, and your presence at our wedding is all that we wish for,<br></br> however if you wish to give a gift, we would gratefully appreciate a monetary contribution to help fund our wedding and honeymoon.</p>

        <p className='question'></p>
        <p className='answer'></p>

	</div>
	</div>
);

export default Details;
