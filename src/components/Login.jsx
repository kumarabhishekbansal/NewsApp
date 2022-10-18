import React,{useState} from "react";
import si1 from "../Images/si1.jpg"
import {NavLink,useHistory} from 'react-router-dom'
import Navbar from "./Navbar";
import './style.css'
const Login = () => {
  const history=useHistory();
  const [pass,setpass]=useState("");
  const [cpass,setcpass]=useState("");
  const [name,setname]=useState("");
  const [email,setemail]=useState("");
  const [phone,setphone]=useState("");

  const namechange=(e)=>{
    setname(e.target.value);
    console.log(pass);
  }

  const emailchange=(e)=>{
    setemail(e.target.value);
    console.log(pass);
  }

  const phonechange=(e)=>{
    setphone(e.target.value);
    console.log(pass);
  }

  const passchange=(e)=>{
    setpass(e.target.value);
    console.log(pass);
  }

  const cpasschange=(e)=>{
    setcpass(e.target.value);
    console.log(cpass);
  }

  const loginclick=()=>{
    if(pass===cpass && name!=="" && phone!=="" && email!=="")
    {
      alert("Register successfully");
      history.push("/");
    }
    else{
      alert("fill all values and correctly")
    }
  }
  return (
    <>

        <div className="main_div my-5">
            <div className="navibar">
                    <Navbar />
            </div>
       
      <div className="form_div">       
      <div className="form_p_div">
      <h2 className="form_head1">
        Register To Your Account
      </h2>
        <form className="form">
          <div className="forms_div">
            <div className="icon_div">
              <i className="fa-solid fa-file-signature icons"></i>
            </div>
            <div className="input_div">
              <input
                type="text"
                className="input-form"
                id="fname"
                name="fname"
                placeholder="Enter Your Name"
                onChange={namechange}
                required
              />
            </div>
          </div>

          <div className="forms_div">
            <div className="icon_div">
            <i className="fa-sharp fa-solid fa-envelope icons"></i>
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
            <i className="fa-solid fa-phone icons"></i>
            </div>
            <div className="input_div">
              <input
                type="number"
                className="input-form"
                id="phone"
                name="phone"
                placeholder="Enter Your Mobile Number"
                onChange={phonechange}
                required
              />
            </div>
          </div>

          <div className="forms_div">
            <div className="icon_div">
            <i className="fa-solid fa-lock icons"></i>
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
            <div className="icon_div">
            <i className="fa-sharp fa-solid fa-lock icons"></i>
            </div>
            <div className="input_div">
              <input
                type="password"
                className="input-form"
                id="cpassword"
                name="cpassword"
                placeholder="Enter Your Confirm Password"
                onChange={cpasschange}
                required
              />
            </div>
          </div>


          <div className="forms_div">
                <button className="submit_in" onClick={loginclick}>
                    Register
                </button>
          </div>

        </form>
        </div>
        <div className="img_div">
            <figure>
                <img src={si1} alt="image" />
            </figure>
            <p className="img_b_p">Login Your Account
            <NavLink className="signupp navlink" to="/login"
            style={{"color":"black","fontSize":"1rem"}}
            >Login</NavLink>
            </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default Login;
