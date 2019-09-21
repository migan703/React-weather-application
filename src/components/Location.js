import React from 'react';

const Location = (props) => {
    //const city = props.city; //Opción 1
    const {city} = props;
    return <div><h1>{city}</h1></div>
};

export default Location;