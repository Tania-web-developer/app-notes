import NotesList from '../components/notesList/NotesList';
import Form from '../components/form/Form';

function Home(props) {
  return (
    <div className="home">
      <Form addNote={props.addNote} />      
      <NotesList arr={props.arr} deleteNote={props.deleteNote}/>
    </div>
  );
}
export default Home;
