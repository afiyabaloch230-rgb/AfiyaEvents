import { useState } from "react";
function Event(){
    const[message, setMessage]=useState('Hello');
function changeMessage(){
    setMessage("Welcome to React");
    }
    return(
    <div>
        <h1>{message}</h1>
        <button onClick={changeMessage}> 
            Change Message
        </button>
    </div>
    );
}
 export default Event;

