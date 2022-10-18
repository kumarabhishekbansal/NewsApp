import React from 'react'
import './style.css'
const Contact = () => {

  const clickm=()=>{
    window.open("https://mail.google.com/mail/u/0/");
  }


  return (
    <>
      <div className="con_1_div  my-5">
            <div className="cpart_1">
              <div className="cicon1"><i class="fa-solid fa-phone icons"></i></div>
              <div className="ctext">
                <h3 className="ac1">Phone</h3>
                <h4 className="ac2">1234567899</h4>
              </div>
            </div>
            <div className="cpart_1">
              <div className="cicon1"> <i class="fa-sharp fa-solid fa-envelope icons"></i></div>
              <div className="ctext">
                <h3 className="ac1">Email</h3>
                <h4 className="ac2">abc@gmail.com</h4>
              </div>
            </div>
            <div className="cpart_1">
              <div className="cicon1"><i class="fa-solid fa-address-book icons"></i></div>
              <div className="ctext">
                <h3 className="ac1">Address</h3>
                <h4 className="ac2">Dabwali</h4>
              </div>
            </div>
      </div>

      <div className="con_2_div">
              <div className="cpart2">
                <h2 className="ac3">Get In Touch</h2>
              </div>
              <div className="cpart3">
                <div className="scpart1">
                  <input type="text" name="uname" id="uname" placeholder='Your Name' />
                </div>
                <div className="scpart1">
                  <input type="email" name="uemail" id="uemail" placeholder='Your Email' />
                </div>
                <div className="scpart1">
                  <input type="number" name="uphone" id="uphone" placeholder='Your Phone Number'/>
                </div>
              </div>
              <div className="cpart4">
                <textarea name="Messages" id="umessage" cols="30" rows="5" placeholder='Your Messages'></textarea>
              </div>
              <div className="cpart5">
                <button className='btnsendm' onClick={clickm}>Send Message</button>
              </div>
      </div>
    </>
  )
}

export default Contact