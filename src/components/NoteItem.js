import React, { useContext } from 'react'
import noteContext from "../context/NoteContext"
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";

const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title">{note.title}</h5>
                        <div >
                            <CiEdit className="mx-2" style={{ cursor: 'pointer', color: 'green' }} onClick={() => { updateNote(note) }} />
                            <RiDeleteBin6Line className="mx-2" style={{ cursor: 'pointer', color: 'red' }} onClick={() => { deleteNote(note._id) }} />
                        </div>
                    </div>
                    <p className="card-text">{note.description}</p>
                </div>
                <p>{note.date}</p>
            </div>
        </div>
    )
}

export default Noteitem