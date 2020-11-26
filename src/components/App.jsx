import React, { useState, useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";
import useMediaQuery from '@material-ui/core/useMediaQuery';

function App() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    axios
      .get("https://vast-brushlands-82116.herokuapp.com/note")
      .then((res) => {
        setNotes(res.data);
      });
  }, []);

  function addNote(newNote) {
    // setNotes((prevNotes) => {
    //   return [...prevNotes, newNote];
    // });

    axios
      .post("https://vast-brushlands-82116.herokuapp.com/note", {
        t: newNote.title,
        c: newNote.content,
      })
      .then(function (response) {
        console.log(response.data);
        axios
          .get("https://vast-brushlands-82116.herokuapp.com/note")
          .then((res) => {
            setNotes(res.data);
          });
      });
  }

  function deleteNote(id) {
    notes.forEach((item, index) => {
      if (index === id) {
        axios
          .delete(
            "https://vast-brushlands-82116.herokuapp.com/note/" + item._id
          )
          .then((res) => {
            console.log(res.data);
            axios
              .get("https://vast-brushlands-82116.herokuapp.com/note")
              .then((res) => {
                setNotes(res.data);
              });
          });
      }
    });
  }
  const MyWrapperComponent = (props) => {
    const isMobile = useMediaQuery('(max-width: 1000px)');
    const textStyle = isMobile ? 'text-mobile' : 'text-mobile';
  
    return (
      <div className={textStyle}>
       {props.children}
      </div>
    )
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
