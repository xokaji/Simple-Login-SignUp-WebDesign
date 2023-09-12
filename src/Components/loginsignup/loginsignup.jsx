import React, { useState } from 'react'
import './loginsignip.css'

import user_icon from '../Assests/person.png'
import email_icon from '../Assests/email.png'
import password_icon from '../Assests/password.png'



const loginsignup = () => {

    const [action, setAction] = useState("Login");

  return (

    

    <div>
      <div className="container">
        <div className="header">
            <div className="text"> {action} </div>
            <div className="underline"></div>
        </div>
        <div className="inputs">

            {action==="Login"?<div> </div>:<div className="input">
                <img src={user_icon} alt="" />
                <input type="name" placeholder='Name'/>
            </div>
            
             }
                      

            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder='E-Mail'/>
            </div>

            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder='Password'/>
            </div>

             {action==="Login"?<div> </div>:<div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder='Repeat Password'/>
            </div>
            
             }
        </div>

        <div className="forget-password">Forgot Password? <span>Click Here</span></div>

        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
        </div>
      </div>
    </div>

  )
}

export default loginsignup
