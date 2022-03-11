import React, {useState} from 'react';
import Logo from "../svg/logo.svg";


export default function CircleSite (){
    const [value, setValue] = useState();
    return (
        <div className="App">
            <input value={}/>

            <svg height="500px" width="90%" >
                <circle r={value} fill="red" cx="50%" cy="50%"/>
            </svg>
        </div>
    );
}
