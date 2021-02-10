import './App.css';
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Note from './components/note/Note';
import Form from './components/form/Form';

function App() {
  const [arr, setArr] = useState([]);
  useEffect(() => { fetchNotes() }, []);

  function fetchNotes() {
    fetch("http://f0464737.xsph.ru.xsph.ru/notes/fetch_notes.php").then((info) => {
      if (info.ok) {
        return info.json();
      } else throw new Error(info.status)
    }).then((result) => {
      setArr(result.notes);
      console.log(arr);
    }).catch((error) => {
      console.log(error);
      console.log(3);
    })
  }

  function addNote(text) {
    fetch("http://f0464737.xsph.ru.xsph.ru/notes/add_note.php", {
      method: "POST",
      headers: {
        "Content-Type": 'application/x-www-form-urlencoded'
      },
      body: "text=" + text + "&date=" + new Date().toDateString()
    }).then((info) => {
      if (info.ok) {
        return info.json();
      } else throw new Error(info.status)
    }).then((result) => {
      console.log(1);
      console.log(result);
      setArr(arr.concat([{ text: text, date: new Date().toDateString() }]))
    }).catch((error) => {
      console.log(error);
      console.log(2);
    })

  }

  function deleteNote(id) {
    fetch("http://f0464737.xsph.ru.xsph.ru/notes/delete_note.php", {
      method: "POST",
      headers: {
        "Content-Type": 'application/x-www-form-urlencoded'
      },
      body: "id=" + id
    }).then((info) => {
      if (info.ok) {
        return info.json();
      } else throw new Error(info.status)
    }).then((result) => {
      setArr(arr.filter((item) => {
        if (item.id === id) {
          return false;
        } else return true;
      }))
    }).catch((error) => {
      console.log(error);
      console.log(1);
    })

  }

  return (
    <div className="App">
      <Form addNote={addNote} />
      <div className="notes-container">
        {arr.map((item, index) => {
          console.log(item);
          return <Note key={index} note={item} deleteNote={deleteNote} />
        })}
      </div>
    </div>
  );
}

export default App;
