import React from 'react';

const PersonCardComponent = (props) => {   //Make sure this is the same as the file name for components
    return (
        <div>
            <h2 style={{ color: "maroon" }}>{props.lastname} {props.firstname}</h2>
            <p>Age: {props.age}</p>
            <p>Hair Color: {props.hairColor}</p>
        </div>

        //Nothing will render outside the div
    )
}

export default PersonCardComponent;   //This has to match Line 3 to export

//to get this page to show up in the browser... Ineed to import it to App.jsx