import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import { useState, useEffect } from "react";
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';

function App() {
  const [total, setTotal] = useState(0);
  const [arr, setArr] = useState([]);

  useEffect(() => { fetchNotes(); getTotal() }, []);

  function getTotal() {
    fetch("http://f0464737.xsph.ru.xsph.ru/notes/total_count.php"
    ).then((info) => {
      if (info.ok) {
        return info.json();
      } else throw new Error(info.status)
    }).then((result) => {
      console.log(1);
      console.log(result.total);
      setTotal(result.total);
    }).catch((error) => {
      console.log(error);
      console.log(2);
    })
  }


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
      setArr(arr.concat([result]));
      setTotal(total + 1);
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
    <BrowserRouter>
      <div className="App">        
          <nav class="navbar navbar-expand-md navbar-dark bg-dark">
            <NavLink className="nav-link" exact to={"/"}>Home</NavLink>
            <NavLink className="nav-link" to={"/about"}>About</NavLink>
          </nav>
          <Switch>
            <Route exact path={"/"} render={() => <Home addNote={addNote} deleteNote={deleteNote} arr={arr} />} />
            <Route path={"/about"} render={() => <About total={total} />} />
          </Switch>        
      </div>
    </BrowserRouter>
  );
}

export default App;
