import React, { useState } from "react";
import './style.css';

const RSVP = () => {

    const [rsvpGroup, setRsvpGroup] = useState([])
    const [formInput, setformInput] = useState('')
    // const [rsvpInfo, setRsvpInfo ] = useState ([])
    const [diet, setDiet] = useState([])
    const [songRequest, setSongRequest] = useState([])
    const [going, setGoing] = useState([])


    const getRsvpGroup = async () => {

        const data = { 
            "name": `${formInput}` 
        }

        const response = await fetch('http://localhost:8080/rsvp/list', {
            method: "POST",
            mode: "cors",
            headers: {
                "access-control-allow-origin" : "*",   
                "Content-Type": "application/json; charset=utf-8" 
            },
            cache: 'default',
            body: JSON.stringify(data),
        })
        .catch ( error => console.log(error))

        if(response.status === 404) {
            alert("Person not found! Make sure name is written correctly, or contact Nelson at 647-704-4269 or Jane at 647-858-5774");
       }

        const RESPONSE = await response.json()

        setRsvpGroup(RESPONSE.map(user => user["name"]))
    }
    
    const changeSearchInput = (e) => {
        setformInput(e.target.value)
    }

    const submitSearch = (e) => {
        e.preventDefault()
        getRsvpGroup()
    }
    
    const handleCheckboxBit = (e, i) => {
        let temp = [...going]
        temp[i] = e.target.checked
        setGoing(temp)
    }

    const changeDiet = (e, i) => {
        let temp = [...diet]
        temp[i] = e.target.value
        setDiet(temp)
    }
    
    const changeSongRequest = (e, i) => {
        let temp = [...songRequest]
        temp[i] = e.target.value
        setSongRequest(temp)
    }

    const submitRSVP = (e) => {
        e.preventDefault()
        sendRSVP()
        alert("submitted!")
    }

    const sendRSVP = async () => {
        const data = []

        console.log("you hit the button")

        rsvpGroup.forEach((individual, i) => {
            data.push({
                "name": individual,
                "RSVP": going[i],
                "dietary": diet[i],
                "songRequest": songRequest[i]
            })
        })        
        
        let response = await fetch('http://localhost:8080/rsvp/submit', {
            method: "PUT",
            mode: "cors",
            headers: {
                "access-control-allow-origin" : "*",   
                "Content-Type": "application/json; charset=utf-8" 
            },
            cache: 'default',
            body: JSON.stringify(data),
        })        
        .catch ( error => console.log(error))


        if(response.status === 404) {
            alert("kurwa mać coś poszło nie tak! Contact Nelson at 647-704-4269 or Jane at 647-858-5774");
       }


    }

    return (
        <div className="rsvp">
            <h1>RSVP</h1>
            <p>This is the RSVP Page! RSVP Below once we have that sorted!</p>
            <div>
                <p>RSVP Form</p>

                <form onSubmit={submitSearch}>
                    <input type="text" value={formInput} onInput={changeSearchInput} />
                    <button type="submit">submit</button>
                </form>

                <div>
                    <p>This is there the other output will be where it shows names and stuff</p>
                    <form onSubmit={submitRSVP}>
                        { rsvpGroup.map((person, i) => 
                            <div key={i} style={{display: 'flex', flexDirection: 'column'}} >
                                <label>{person}
                                    <input type="checkbox" onChange={(e) => handleCheckboxBit(e, i)} ></input>
                                </label>

                                <label> Allergies / Dietery Restrictions
                                    <input type="text" value={diet[i]} onInput={(e) => changeDiet(e, i)}></input>
                                </label>

                                <label>Song Request?
                                    <input type="text" value={songRequest[i]} onInput={(e) => changeSongRequest(e, i)}></input>
                                </label>
                                <br></br>
                            </div>
                        )}
                    <button>Submit</button>
                    </form>
                    
                </div>
            </div>
        </div>
    )
};

export default RSVP;
