import React, {useEffect, useState} from "react";

const Counter = () =>{
    const [number,setNumber]=useState(0);
    const [text,setText] = useState('Hello')
 
    useEffect(() => {
        console.log('call from global console');
        setText(Math.random());
        setNumber(Math.random());
    },[number]);
    
    return(<div>
        <div>{number}</div>
        <div>NEW App</div>
        <div>{text}</div>
        <div><button onClick={()=> setNumber(Math.random())}>Update Number</button></div>
        <div><button onClick={()=> setText(Math.random())}>Update Text</button></div>
        </div>)
}

export default Counter;