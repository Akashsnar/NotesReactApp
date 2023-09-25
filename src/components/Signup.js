import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom";
import noteContext from "../context/NoteContext"

function Signup() {
  // const navigate = useNavigate();
  const context = useContext(noteContext);
  const { addUser } = context;
  const [User, setUser] = useState({ name: "", email: "", password: "" })


  const handlesubmit = (e) => {

    e.preventDefault();
    console.log(User.name + User.email + User.password);
    addUser(User.name, User.email, User.password);
    // navigate("/home");
  }

  const updatevalues = (e) => {
    setUser({ ...User, [e.target.name]: e.target.value });
  }



  return (
    <div>
      <div className="wrapper">




        <div class="form" style={{marginTop:"4rem"}}>
        <div class="avatar">
                    <img src="https://cdn.pixabay.com/photo/2014/04/02/14/10/female-306407_960_720.png" alt="Avatar" />
                </div>

          
          <form>
          <h1>Register User</h1>


          <div className="input-box">
            <input type="text" placeholder="name" name="name" required onChange={updatevalues} />
          </div>
          <div className="input-box">
            <input type="email" placeholder="email" name="email" required onChange={updatevalues} />
          </div>
          <div className="input-box">
            <input type="password" placeholder="password" name="password" required onChange={updatevalues} />
          </div>


            <button type="submit" className="btn" onClick={handlesubmit}>Login</button>

            <div className="register-link">
              <p class="message">Already have Account?<Link to="/login"> Login</Link></p>
            </div>
          </form>
        </div> 

    </div>
    </div >
  )
}

export default Signup
