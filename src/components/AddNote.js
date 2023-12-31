import React, {useContext, useState} from 'react'
import noteContext from "../context/NoteContext"

const AddNote = () => {
    const context = useContext(noteContext);
    const {addNote} = context;

    const [note, setNote] = useState({title: "", description: "", tag: "default"})

    const handleClick = (e)=>{
        e.preventDefault();
   
        if (note.description.length<5 || note.title.length<3) {
            alert("desc/title are very short");
            return false;
        }
        // console.log(note.title);
        addNote(note.title, note.description, note.tag);
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
    return (
        <div className="container my-3">
            <h2>Add a Note</h2>
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label textwhite">Title</label>
                    <input type="text"  className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange} /> 
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label textwhite">Description</label>
                    <textarea type="text"  className="form-control" id="description" style={{height:'10rem'}} name="description" onChange={onChange} placeholder='Add your Note'>
                     </textarea>
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label textwhite">Tag</label>
                    <input type="text" className="form-control" id="tag" name="tag" onChange={onChange} />
                </div>
               
                <button type="submit" className="btn btn-primary " onClick={handleClick}>Add Note</button>
            </form>
        </div>
    )
}

export default AddNote