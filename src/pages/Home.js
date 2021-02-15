import Note from '../components/note/Note';
import Form from '../components/form/Form';



function Home(props) {   
  return (
    <div className="home">
      <Form addNote={props.addNote} />
      <div className="notes-container">
        {props.arr.map((item, index) => {
          console.log(item);
          return <Note key={index} note={item} deleteNote={props.deleteNote} />
        })}
      </div>
    </div>
  );
}
export default Home;
