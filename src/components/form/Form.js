import "./form.css"
import { useRef } from "react";
import { Button } from 'react-bootstrap';


export default function Form(props) {

    let inpText = useRef(null);
    return (
        <div className="form-container">
            <div className="form-item">               
                    <input className="text-inp" placeholder="Add text for you note" ref={inpText} />
                    <Button className="text-btn" variant="info" onClick={
                        () => {
                            props.addNote(inpText.current.value);
                            inpText.current.value = "";
                        }
                    }>add your note </Button>
               
            </div>
        </div>
    )
} 