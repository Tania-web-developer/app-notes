import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export default function Note(props) {
    return (
        <div className="note-root">
            <div className="note-container clearfix">            
                <button type="button" className="btn btn-outline-dark float-right" onClick={() => props.deleteNote(props.note.id)} ><FontAwesomeIcon icon={faTrashAlt} /></button>
                <div className="note-date">
                    <h5>{props.note.date}</h5>
                </div>
                <div><p>{props.note.text}</p></div>
            </div>
            
            {/* <div class="mb-3">
                <label for="formFile" class="form-label">Default file input example</label>
                <input class="form-control" type="file" id="formFile"></input>
            </div> */}
        </div>
    )

}