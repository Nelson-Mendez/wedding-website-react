import React from "react";
import "./style.css";

const Header = () => (
  <header className="header">
    <h1>Nelson and Jane's Wedding</h1>
    <nav>
      <div className="navigation">
        <a href="/">Welcome</a>
        <a href="/Details">Details / FAQ</a>
        <a href="/RSVP">RSVP</a>
        <a href="/WeddingParty">Wedding Party</a>
        <a href="/TravelAccomodation">Travel / Accomodations</a>
        {/* <a href="/FAQ">FAQ</a> */}
      </div>
    </nav>
  </header>
);

export default Header;
