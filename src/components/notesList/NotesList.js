import "./notesList.css";
import Note from '../note/Note';


function NotesList(props) {   
  return (
    <div className="notes-list">      
      <div className="notes-list-container">
        {props.arr.map((item, index) => {
          console.log(item);
          return <Note key={index} note={item} deleteNote={props.deleteNote}/>
        })}
      </div>
    </div>
  );
}
export default NotesList;