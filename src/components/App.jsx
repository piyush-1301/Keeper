import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    axios.get("http://guarded-falls-49509.herokuapp.com/note").then((res) => {
      setNotes(res.data);
    });
  }, []);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });

    axios
      .post("http://guarded-falls-49509.herokuapp.com/note", { t: newNote.title, c: newNote.content })
      .then(function (response) {
        console.log(response.data);
      });
  }

  function deleteNote(id) {
  //  notes.forEach((currentValue,index) => {
  //    if(index===id){
  //     axios.delete("/note/"+currentValue.title).then((res)=>{
  //       setNotes(res.data);
  //     })
  //    }
  //  });
  
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        if(index===id){
          axios.delete("http://guarded-falls-49509.herokuapp.com/note/"+noteItem.title).then((res)=>{
            console.log(res.data);
          })
        }
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
