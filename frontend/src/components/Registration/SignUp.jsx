import React from 'react'
import "./SignUp.css"
import SignUpImg from "../../assets/images/SignUpImg.jpg"

const SignUp = () => {

       const submitHandler = (e) => {
               e.preventDefault()

       }

  return (
    <div>
           <div className="Joinnow">
                <div className="Join">
                
                <div className="JoinLeft">
                  <img src={SignUpImg} alt="" />
                </div>
                <div className="JoinRight">
                        <div className="Top">
                              <h3>Patient Registration<span>!</span></h3>
                              <p>create an account</p>
                        </div>
                        <div className="Medium">
                              <form onSubmit={submitHandler}>
                                  <div className="one">
                                        <label>Username</label>
                                        <div className="int">
                                        <i class="ri-user-fill"></i>        
                                        <input type="text" name='name' placeholder="Enter Your Name"  />
                                        </div>
                                  </div>
                                 
                                  <div className="one">
                                        <label>Email</label>
                                        <div className="int">
                                        <i class="ri-user-fill"></i>        
                                        <input type="email" name='email' placeholder="Enter Your Email"  />
                                        </div>
                                  </div>
                                  <div className="one">
                                        <label>Password</label>
                                        <div className="int">
                                        <i class="ri-git-repository-private-fill"></i>     
                                        <input type="number" name='password' placeholder="Enter Your Password"  />
                                        </div>
                                  </div>
                                 
                                 
                                  
                                    
                                  <div className="one">
                                  <button type='submit'>Sign Up</button>
                                  </div>
                                  <div className="line">
                                        <p>Already you have an account? <a href="/login">Log in</a></p>
                                  </div>
                              </form>
                        </div>
                        <div className="Bottom">
                            <button><i class="ri-google-fill"></i> Continue with Google</button>
                        </div>
                </div>


</div>
</div>
</div>
  )
}

export default SignUp