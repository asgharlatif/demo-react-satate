
import React, { useState } from 'react';
import './Room.css' 

function Room() {
    let [isLit, setLit] = useState(false);
    let [Temp, setTemp] = useState(22);
    return (

        <div className={`room ${isLit? "Lit":"dark"}`}>          

            <br />
                    Current Room Temprature = {Temp}
            <br />

            <button onClick={() => setLit(true)} >Turn Light On</button>            
            <button onClick={() => setLit(false)} >Turn Light Off.</button>
            <button onClick={() => setTemp(++Temp)}  >Increase Temprature</button>
            <button onClick={() => setTemp(--Temp)}  >Decrease Temprature</button>
        </div>
    );
}

export default Room;
