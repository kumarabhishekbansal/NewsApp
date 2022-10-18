import React,{useState} from "react";
import su1 from '../Images/su1.jpg'
import {NavLink,useHistory} from 'react-router-dom'
import Navbar from "./Navbar";
import './style.css'
const Register = () => {
  const history=useHistory();
  const [pass,setpass]=useState("");
  const [email,setemail]=useState("");

  const passchange=(e)=>{
    setpass(e.target.value);
    console.log(pass);
  }

  const emailchange=(e)=>{
    setemail(e.target.value);
    console.log(email);
  }

  const registerclick=()=>{
    if(pass!=="" && email!=="")
    {
      alert("login successfully");
      history.push("/");
    }
    else{
      alert("fill all values and correctly")
    }
  }


  return (
    <>
        <div className="main_div mns  my-5">
            <div className="navibar">
                    <Navbar />
            </div>
      <div className="form_div fs">
      <div className="form_p_div">
      <h2 className="form_head1">
        Login To Your Account
      </h2>
        <form className="form">
          <div className="forms_div">
            <div className="icon_div">
            <i class="fa-sharp fa-solid fa-envelope icons"></i>
            </div>
            <div className="input_div">
              <input
                type="email"
                className="input-form"
                id="email"
                name="email"
                placeholder="Enter Your Email"
                onChange={emailchange}
                required
              />
            </div>
          </div>

          <div className="forms_div">
            <div className="icon_div">
            <i class="fa-solid fa-lock icons"></i>
            </div>
            <div className="input_div">
              <input
                type="password"
                className="input-form"
                id="password"
                name="password"
                placeholder="Enter Your Password"
                onChange={passchange}
                required
              />
            </div>
          </div>

          <div className="forms_div">
                <button className="submit_in" onClick={registerclick}>
                    Login
                </button>
          </div>

        </form>
        </div>
        <div className="img_div s">
            <figure>
                <img src={su1} alt="image" />
            </figure>
            <p className="img_b_p">Register Your Account
            <NavLink className="signupp navlink" to="/register"
            style={{"color":"black","fontSize":"1rem"}}
            >Login</NavLink>
            </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default Register;
