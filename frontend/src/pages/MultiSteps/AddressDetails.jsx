import React from 'react'
import "./AddressDetails.css"

const AddressDetails = () => {
  return (
    <div className='AddressDetail'>
      <h5>Address Information</h5>
      <div className="address">
        <form>
          <div className="addressData">
            <label>City</label>
            <div className="inpts">
              <input type="text" placeholder="city" />
            </div>
          </div>
          {/* -------- */}
          <div className="addressData">
            <label>State</label>
            <div className="inpts">
              <input type="text" placeholder="state" />
            </div>
          </div>
          {/* ------------ */}
          <div className="addressData">
            <label>Postal Code/ZIP Code</label>
            <div className="inpts">
              <input type="text" placeholder="postal code" />
            </div>
          </div>
          {/* ---------- */}
          <div className="addressData">
            <label>Apartment/Suite/Unit</label>
            <div className="inpts">
              <input type="text" placeholder="apartment" />
            </div>
          </div>
        </form>
        <form>
          <div className="addressData">
            <label>Country</label>
            <div className="inpts">
              <input type="text" placeholder="country" />
            </div>
          </div>
          {/* -------- */}
          <div className="addressData">
            <label>Birth Place</label>
            <div className="inpts">
              <input type="text" placeholder="birth place" />
            </div>
          </div>
          {/* -------- */}
          <div className="addressData">
            <label>Street Address</label>
            <div className="inpts">
              <input type="text" placeholder="street address" />
            </div>
          </div>
          {/* ---------------- */}
          {/* <div className="addressData">
            <button>Submit</button>
          </div> */}


        </form>
      </div>
    </div>
  )
}

export default AddressDetails