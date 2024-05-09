import React from 'react'
import "./LogIn.css"
import SignUpImg from "../../assets/images/SignUpImg.jpg"

const LogIn = () => {
  return (
    <div>
           <div className="LogIn">
                <div className="Login">
                
                <div className="LoginLeft">
                  <img src={SignUpImg} alt="" />
                </div>
                <div className="LoginRight">
                        <div className="Top">
                              <h3>LogIn<span>!</span></h3>
                              <p>create an account</p>
                        </div>
                        <div className="LoginMedium">
                              <form>
                                  <div className="two">
                                        <label>Username</label>
                                        <div className="int">
                                        <i class="ri-user-fill"></i>        
                                        <input type="text" placeholder="Enter Your Name"  />
                                        </div>
                                  </div>
                                 
                                  <div className="two">
                                        <label>Email</label>
                                        <div className="int">
                                        <i class="ri-user-fill"></i>        
                                        <input type="text" placeholder="Enter Your Email"  />
                                        </div>
                                  </div>
                                 
                                 
                                 
                                  
                                    
                                  <div className="two">
                                  <button>Login</button>
                                  </div>
                                  <div className="line2">
                                        <p>Don't have an account? <a href="/signup">SignUp</a></p>
                                  </div>
                              </form>
                        </div>
                        <div className="LoginBottom">
                            <button><i class="ri-google-fill"></i> Continue with Google</button>
                        </div>
                </div>


</div>
</div>
</div>
  )
}

export default LogIn