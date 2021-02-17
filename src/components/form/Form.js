import "./form.css"
import { useRef } from "react";
import { Button } from 'react-bootstrap';


export default function Form(props) {

    let inpText = useRef(null);
    return (
        <div className="form-container">
            <div className="form-item">               
                    <input className="text-inp" placeholder="write here a text for your note" ref={inpText} />
                    <button className="form-btn"  onClick={
                        () => {
                            props.addNote(inpText.current.value);
                            inpText.current.value = "";
                        }
                    }>add a note</button>
               
            </div>
        </div>
    )
} 