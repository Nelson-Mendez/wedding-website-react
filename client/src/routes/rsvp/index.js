import React, { useState } from "react";
import "./style.css";

const RSVP = () => {
  const [rsvpGroup, setRsvpGroup] = useState([]);
  const [formInput, setformInput] = useState("");
  // const [rsvpInfo, setRsvpInfo ] = useState ([])
  const [diet, setDiet] = useState([]);
  const [songRequest, setSongRequest] = useState([]);
  const [going, setGoing] = useState([]);
  const [showrsvp, setShowrsvp] = useState(false);

  const apiURL = "http://localhost:8080";
  // production || ''
  //local || 'http://localhost:8080'

  const getRsvpGroup = async () => {
    const data = {
      name: `${formInput}`,
    };

    const response = await fetch(apiURL + "/api/rsvp/list", {
      method: "POST",
      mode: "cors",
      headers: {
        "access-control-allow-origin": "*",
        "Content-Type": "application/json; charset=utf-8",
      },
      cache: "default",
      body: JSON.stringify(data),
    }).catch((error) => console.log(error));

    if (response.status === 404) {
      alert(
        "Person not found! Make sure name is written correctly, or contact Nelson at 647-704-4269 or Jane at 647-858-5774"
      );
    }

    const RESPONSE = await response.json();

    setRsvpGroup(RESPONSE.map((user) => user["name"]));
    setShowrsvp(!showrsvp);
  };

  const changeSearchInput = (e) => {
    setformInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    getRsvpGroup();
  };

  const handleAttending = (e, i) => {
    console.log(e, i);
    console.log(e.target.value);

    let temp = [...going];
    temp[i] = e.target.value;

    console.log(temp);
    setGoing(temp);
  };

  const changeDiet = (e, i) => {
    let temp = [...diet];
    temp[i] = e.target.value;
    setDiet(temp);
  };

  const changeSongRequest = (e, i) => {
    let temp = [...songRequest];
    temp[i] = e.target.value;
    setSongRequest(temp);
  };

  const submitRSVP = (e) => {
    console.log(e.target);
    e.preventDefault();
    sendRSVP();
    alert("submitted!");
  };

  const sendRSVP = async () => {
    const data = [];

    console.log("you hit the button");

    rsvpGroup.forEach((individual, i) => {
      data.push({
        name: individual,
        RSVP: going[i],
        dietary: diet[i],
        songRequest: songRequest[i],
      });
    });

    console.log(data);

    let response = await fetch(apiURL + "/api/rsvp/submit", {
      method: "PUT",
      mode: "cors",
      headers: {
        "access-control-allow-origin": "*",
        "Content-Type": "application/json; charset=utf-8",
      },
      cache: "default",
      body: JSON.stringify(data),
    }).catch((error) => console.log(error));

    if (response.status === 404) {
      alert(
        "kurwa mać coś poszło nie tak! Contact Nelson at 647-704-4269 or Jane at 647-858-5774"
      );
    }
  };

  return (
    <div className="rsvp">
      <h1>RSVP</h1>
      <p>
        Join us for this special occasion! Please RSVP by completing this form
        by April 20th 2023. Thank you!
      </p>
      <div>
        {rsvpGroup.length ? null : (
          <form onSubmit={submitSearch}>
            <div className="input">
              <label className="input-label"> Search for your name here!</label>
              <input
                className="input-field"
                type="text"
                placeholder="Full Name"
                value={formInput}
                onInput={changeSearchInput}
              />
            </div>
            <button className="action-button" type="submit">
              Submit
            </button>
          </form>
        )}

        {showrsvp && (
          <form className="form" onSubmit={submitRSVP}>
            {rsvpGroup.map((person, i) => (
              <div
                className="input"
                key={i}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <p className="formName">{person}</p>

                <label className="input-label attending">
                  Will you be attending?
                </label>
                <select
                  className="input-field"
                  name="going"
                  onChange={(e) => handleAttending(e, i)}
                  placeholder="Choose an Option"
                  required
                  defaultValue={"selectOption"}
                >
                  <option hidden disabled value="selectOption">
                    {" "}
                    -- select an option --{" "}
                  </option>
                  <option value="Attending">Attending</option>
                  <option value="Not Attending (Lame)">Not Attending</option>
                </select>

                <label className="input-label">
                  Allergies / Dietery Restrictions
                </label>
                <input
                  className="input-field"
                  type="text"
                  value={diet[i]}
                  onInput={(e) => changeDiet(e, i)}
                ></input>

                <label className="input-label">Song Request?</label>
                <input
                  className="input-field"
                  type="text"
                  value={songRequest[i]}
                  onInput={(e) => changeSongRequest(e, i)}
                ></input>

                <br></br>
              </div>
            ))}
            <button className="action-button">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default RSVP;
