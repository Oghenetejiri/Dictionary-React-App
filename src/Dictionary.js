import React, {useState} from "react";
import "./Dictionary.css";

export default function Dictionary(){
    let[word, setWord] = useState("");
    function search(event){
        event.preventDefault();
        alert(`why are you bothering me with ${word}?`)
    }
    function handleWordChange(event){
        setWord(event.target.value);
    }
    return <div className="Dictionary">
        <form onSubmit={search}>
            <input type="search" autoFocus={true} onChange={handleWordChange}/>
        </form>
    </div>
}