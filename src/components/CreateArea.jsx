import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <div className="input-group mb-3">
          <input name="title" onChange={handleChange} type="text" className="form-control"  value={note.title}  placeholder="Title"/>
          </div>
        )}
        <div className="input-group">
        <textarea className="form-control"
        name="content"
        onClick={expand}
        onChange={handleChange}
        value={note.content}
        placeholder="Take a note..."
         rows={isExpanded ? 3 : 1}
        ></textarea>
        </div> 
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote} type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;


// {/* <textarea
//           name="content"
//           onClick={expand}
//           onChange={handleChange}
//           value={note.content}
//           placeholder="Take a note..."
//           rows={isExpanded ? 3 : 1}
//         /> */}


// {/* <input
//             name="title"
//             onChange={handleChange}
//             value={note.title}
//             placeholder="Title"
//           /> */}