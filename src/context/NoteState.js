import NoteContext from "./NoteContext";
import { useState } from "react";


const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)

  // Get all Notes
  const getNotes = async () => {
    // API Call 
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwMTlmODk0NzY0MDUwNGJhZjY0NGE4In0sImlhdCI6MTY5NDYwNTE5M30.IAXkuiGiGVogsyyqM04mk6qiKje1nPPCDUsUdF1VPIo"
      }
    });
    const json = await response.json()
    console.log(json)
    setNotes(json)
  }

  // Add a Note
  const addNote = async (title, description, tag) => {
    // TODO: API Call
    // API Call 
    // console.log(JSON.stringify({title, description, tag}))

    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwMTlmODk0NzY0MDUwNGJhZjY0NGE4In0sImlhdCI6MTY5NDYwNTE5M30.IAXkuiGiGVogsyyqM04mk6qiKje1nPPCDUsUdF1VPIo"
      },
      body: JSON.stringify({ title, description, tag })
    });

    console.log("Adding a new note")

    const note = await response.json()
    setNotes(notes.concat(note))
    // console.log("Adding a new note")

  }

  // Delete a Note
  const deleteNote = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwMTlmODk0NzY0MDUwNGJhZjY0NGE4In0sImlhdCI6MTY5NDYwNTE5M30.IAXkuiGiGVogsyyqM04mk6qiKje1nPPCDUsUdF1VPIo"
      }
    });
    const json = response.json();
    console.log(json)

    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call 
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwMTlmODk0NzY0MDUwNGJhZjY0NGE4In0sImlhdCI6MTY5NDYwNTE5M30.IAXkuiGiGVogsyyqM04mk6qiKje1nPPCDUsUdF1VPIo"
      },
      body: JSON.stringify({ title, description, tag })
    });
    const json = response.json();
    let newnotes = JSON.parse(JSON.stringify(notes));
    // Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = newnotes[index];
      if (element._id === id) {
        newnotes[index].title = title;
        newnotes[index].description = description;
        newnotes[index].tag = tag;
        break;
      }

    }
    setNotes(newnotes);

  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )

}
export default NoteState;
///"
///eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMWRjNWUzZTQwMzdjZDQ3MzRhMDY2In0sImlhdCI6MTYzMDY2OTU5Nn0.hJS0hx6I7ROugkqjL2CjrJuefA3pJi-IU5yGUbRHI4Q"
