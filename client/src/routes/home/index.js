import React from "react";
import IMG_7822 from "../../assets/pictures/IMG_7822.jpg";
import IMG_7663 from "../../assets/pictures/IMG_7663.jpg";
import IMG_8082 from "../../assets/pictures/IMG_8082.jpg";
import wedding2 from "../../assets/pictures/wedding2.JPG";
import wedding1 from "../../assets/pictures/wedding1.JPG";
import wedding3 from "../../assets/pictures/wedding3.JPG";
import venice from "../../assets/pictures/venice.JPG";
import startrek from "../../assets/pictures/startrek.JPG";
import proposal from "../../assets/pictures/proposal.JPG";
import newfoundland from "../../assets/pictures/newfoundland.jpg";
import gradphotos from "../../assets/pictures/gradphotos.JPG";
import nelsonjane from "../../assets/pictures/nelsonjane.JPG";

import "./style.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => (
  <div className="home">
    <Carousel autoPlay={true} infiniteLoop={true} showArrows={false} showThumbs={false} showIndicators={true} showStatus={false} >
      <img alt="" className="photoImage" src={IMG_7822}></img>
      <img alt="" className="photoImage" src={IMG_7663}></img>
      <img alt="" className="photoImage" src={IMG_8082}></img>
      <img alt="" className="photoImage" src={wedding2}></img>
      <img alt="" className="photoImage" src={wedding1}></img>
      <img alt="" className="photoImage" src={wedding3}></img>
      <img alt="" className="photoImage" src={venice}></img>
      <img alt="" className="photoImage" src={startrek}></img>
      <img alt="" className="photoImage" src={proposal}></img>
      <img alt="" className="photoImage" src={newfoundland}></img>
      <img alt="" className="photoImage" src={gradphotos}></img>
      <img alt="" className="photoImage" src={nelsonjane}></img>
    </Carousel>

    <div className="photos"></div>
    <h1 className="date">
      August 19<sup style={{ fontSize: "18px" }}>th</sup>, 2023
    </h1>
    <h2 className="location">Old Mill, Toronto, Ontario</h2>
    <div style={{ width: "100%", borderBottom: "1px solid black" }}> </div>
    <div>
      <p className="homeText">Hi everyone! Welcome to our wedding website!</p>
      <p>
        Here you can find all the details of our big day! Please use the menu
        above to find information about the day, the party, the location,
        accomodation, and to RSVP!
      </p>
      <p>
        {" "}
        We are so excited to be getting married, and can't wait to celebrate
        with you all!
      </p>

      <p>
        If you have any questions / comments / concerns, please give us a call
        or text at either 647-858-5774 or 647-704-4269 and we'll help out in any
        way we can!
      </p>

      <h3>Our Love Story</h3>

      <p>
        Jane and Nelson's love story begins in their very first year at
        University of Guelph. Nelson had volunteered to assist with an Engineer
        tradition in which they would ride a giant (think the size of a phone
        pole) teeter totter for 24 hours and they would raise money for a local
        charity. On this night, a mutual friend of Jane and Nelson's let Jane
        know about this magical teeter totter and told her she should come by,
        she did and that is where the friend introduced Jane to Nelson. The
        connection was instant and they chatted for hours. The next time they
        met was in the common room of Jane's residence where they and two
        friends, one of whom is Nelson's best man Jarrett, built a pillow fort
        and Nelson impressed Jane with his charm, eloquence and fort building
        skills. This led to two weeks of fooseball, late night swims and hot
        chocolate outings. They bonded over reading, animals and film and they
        created a list of movies they wanted to watch together, this was a wild
        mix that included Inception, Breakfast at Tiffany's and Monty Python and
        the Holy Grail. That was the night they revealed their feelings for one
        another and the rest is history! After 10 years together, 5 degrees,
        bouncing between Guelph, Oakville, Toronto, Kingston, and England,
        finally settling in Toronto and getting their two beloved cats, Millie
        and Louise, Nelson and Jane planned a trip to Niagara on the Lake to
        celebrate their 10 year anniversary. After much bamboozlement and making
        it very clear he would not be proposing that weekend, Nelson pulled the
        old whats-that-over-there-trick and got down on one knee and asked Jane to marry
        him. It was a resounding yes! 
        
        <br></br><br></br> They are so excited to begin this next chapter of their love story with everyone
        they hold near and dear to them.

      </p>
    </div>
  </div>
);

export default Home;
