import * as React from "react"
import '../components/login.css'
import sample from '../images/top-image/user-regular.svg';
import passwordicon from '../images/top-image/passward.svg';
import loginbtn from '../images/top-image/login-btn.png'
import loginbg from '../images/top-image/login-bg.png'
import { useState } from 'react';
import { handleLogin } from "../utils/auth";


const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = async (event) => {
    console.log(email, password)
    event.preventDefault()
    await handleLogin(email, password)
  }
  return (
    <>
      <main className="main">
        <div className="whole-bg">
          <div className="bottom-bg">
            <div className="whole-info">
              <div className="title">
                <div>
                  <span>HABIT TRACKER</span>
                </div>
              </div>
              <form onSubmit={login} className="login-bg">

                <div className="login-bg-img">
                  <img src={loginbg} alt="" />
                </div>
                <div className="log-info">
                  <div className="user">
                    <div className="user-info">
                      <div className="user-take">
                        <div className="user-icon">
                          <img src={sample} alt="" />
                        </div>
                        <div className="user-in">
                          <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="passward">
                    <div className="pass-info">
                      <div className="pass-take">
                        <div className="pass-icon">
                          <img src={passwordicon} alt="" />
                        </div>
                        <div className="pass-in">
                          <input type="password" id='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="click-btn">
                    <button className="c-info">
                      <div className="c-img">
                        <img src={loginbtn} alt="" />
                      </div>
                    </button>
                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default LoginPage
