import React, { useRef } from 'react'
import "./PersonalDetails.css"
import userPhoto from "../../assets/images/userImgPhoto.png"

const PersonalDetails = () => {


  const fileInputRef = useRef(null);

  const handlePhotoClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log('Selected file:', selectedFile);
  };



  return (
    <div className='PersonalDetails'>
      {/* --------- */}
      <div className="Photo" >
        <h5>Personal Information</h5>
        <div className='userPhoto'>
          <img onClick={handlePhotoClick} height={30} weight={30} src={userPhoto} alt="" />
        </div>
        <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} required />
      </div>
      {/* -------- */}
      <div className="personal">
        <form>
          <div className="personalData">
          <p>Personal Details</p>
            <label>Patient First Name</label>
            <div className="inpts">
              <i class="ri-user-fill"></i>
              <input type="text" placeholder="Enter Your Name" />
            </div>
          </div>
          <div className="personalData">
            <label>Patient Last Name</label>
            <div className="inpts">
              <i class="ri-user-fill"></i>
              <input type="text" placeholder="Enter Your Last Name" />
            </div>
          </div>
          <div className="personalData">
            <label>Contact No.</label>
            <div className="inpts">
              <i class="ri-phone-fill"></i>
              <input type="number" placeholder="Enter Contact Number" />
            </div>
          </div>
          <div className="personalData">
            <label>Date Of Birth</label>
            <div className="inpts">
              <i class="ri-calendar-2-fill"></i>
              <input type="date" placeholder="Enter Your DOB" />
            </div>
          </div>
          <div className="personalData">
            <label>Civil Status</label>
            <div className="inpts">
              <select>
                <option value="male">Married</option>
                <option value="female">Single</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="personalData">
            <label>Gender</label>
            <div className="inpts">
              <select>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="personalData">
            <label>Age</label>
            <div className="inpts">
              <input type="text" placeholder="" />
            </div>
          </div>

        </form>

        <form>
           <div className="personalData">
            <p>Additional Details</p>
            <label>Registered Date/Date of visit</label>
            <div className="inpts">
              <i class="ri-calendar-2-fill"></i>
              <input type="date" placeholder="" />
            </div>
          </div>
          <div className="personalData">
            <label>Department</label>
            <div className="inpts">
              <input type="text" placeholder="" />
            </div>
          </div>
          <div className="personalData">
            <label>Appointment</label>
            <div className="inpts">
              <input type="text" placeholder="" />
            </div>
          </div>
          {/* <div className="personalData">
            <button>Submit</button>
          </div> */}


        </form>
      </div>
    </div>
  )
}

export default PersonalDetails