
import React, { useState } from 'react';

function Room() {

    let [isLit, setLit] = useState(false);
    let [age, setAge] = useState(23);

    return (
        <div>

            This is Room component : {isLit ? "lit" : "dark"};
            <br />
                    Age = {age}
            <br />
            <button onClick={() => setLit(!isLit)} >Toggle Light</button>
            <button onClick={() => setAge(++age)}  >Increase Age</button>
        </div>
    );
}

export default Room;
