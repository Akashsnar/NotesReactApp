import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from "../context/NoteContext";
import Noteitem from "./NoteItem";
import { useNavigate } from "react-router-dom";


const Notes = () => {
    const context = useContext(noteContext);
    const { notes, getNotes, editNote } = context;
    const [tag, settag] = useState("ALL")
    const navigate = useNavigate();

    useEffect(() => {
        console.log(localStorage.getItem('token'));
        if (localStorage.getItem('token')) {
            getNotes();
        }
        else {
            navigate("/login", { replace: true });
        }
    }, [])// eslint-disable-line react-hooks/exhaustive-deps
    const ref = useRef(null)
    const refclose = useRef(null)
    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" })

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
    }

    const handleClick = (e) => {
        console.log("Updating the note...", note)
        editNote(note.id, note.etitle, note.edescription, note.etag)
        refclose.current.click();
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    const handleChange = (e) => {
        const upperTag = e.target.value.toUpperCase();
        settag(upperTag);
      };
    
    

    return (
        <>

            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="etag" name="etag" value={note.etag}
                                    //  onChange={(e) => onChange({ ...note, [e.target.name]: e.target.value.toUpperCase() } })} />
                                    // ...note, [e.target.name]: e.target.value
                                     onChange={(e) => setNote({ ...note, [e.target.name]: e.target.value.toUpperCase() })} />
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refclose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className='textwhite' style={{ margin: 'auto', textAlign: 'center' }}>Your Previous Notes</h2>

            <div className="row my-3" style={{ margin: '4rem', textAlign: 'center' }}>


                <select name="cars" id="cars" onChange={handleChange}>
                    <option value="ALL">ALL</option>
                    {notes.map((note) => {
                        return <option value={note.tag}>{note.tag}</option>
                    })
                    }
                </select>
                   {notes.filter(note => tag === "ALL" || note.tag === tag).map((note) => {
                    return <Noteitem key={note._id} updateNote={updateNote} note={note} />
                })}
            </div>
        </>
    )
}

export default Notes