import React from 'react';
import "./MedicalDetails.css";

const MedicalDetails = () => {
  return (
    <div className='MedicalDetails'>
      <h5>Medical Information</h5>
      <div className="medical">
        <form>
          <div className="medicalData">
            <p>Medical History</p>
            <label>Previous illnesses or medical conditions</label>
            <div className="inpts">
              <input type="text" placeholder="" />
            </div>
          </div>
          <div className="medicalData">
            <label>Surgical history (past surgeries)</label>
            <div className="inpts">
              <input type="text" placeholder="" />
            </div>
          </div>
          <div className="medicalData">
            <label>Family medical history (history of diseases or conditions in the family)</label>
            <div className="inpts">
              <input type="text" placeholder="" />
            </div>
          </div>
          <div className="medicalData">
            <label>Medications (current and past prescriptions, over-the-counter medications, supplements).</label>
            <div className="inpts">
              <input type="text" placeholder="" />
            </div>
          </div>
          <div className="medicalData">
            <label>Allergies (medications, food, environmental).</label>
            <div className="inpts">
              <input type="text" placeholder="" />
            </div>
          </div>
          <div className="medicalData">
            <p>Risk Factors</p>
            <label>Smoking status.</label>
            <div className="inpts">
              <input type="text" placeholder="" />
            </div>
          </div>
          {/* ----------- */}
          <div className="medicalData">
            <label>Alcohol consumption</label>
            <div className="inpts">
              <input type="text" placeholder="" />
            </div>
          </div>
          <div className="medicalData">
            <label>Drug use</label>
            <div className="inpts">
              <input type="text" placeholder="" />
            </div>
          </div>
          <div className="medicalData">
            <label>Exercise habits</label>
            <div className="inpts">
              <input type="text" placeholder="" />
            </div>
          </div>

          <div className="medicalData">
            <p>Chronic Conditions</p>
            <label>Diabetes mellitus</label>
            <div className="inpts">
              <input type="text" placeholder="" />
            </div>
          </div>
          <div className="medicalData">
            <label>Cancer history</label>
            <div className="inpts">
              <input type="text" placeholder="" />
            </div>
          </div>
          <div className="medicalData">
            <label>Hypertension</label>
            <div className="inpts">
              <input type="text" placeholder="" />
            </div>
          </div>
        </form>

        {/* ---------- */}
        <form>
          <div className="medicalData">
            <p>Vital Signs</p>
            <label>Blood pressure</label>
            <div className="inpts">
              <input type="text" placeholder="" />
            </div>
          </div>
          <div className="medicalData">
            <label>Heart rate (pulse)</label>
            <div className="inpts">
              <input type="text" placeholder="" />
            </div>
          </div>
          <div className="medicalData">
            <label>Body temperature</label>
            <div className="inpts">
              <input type="text" placeholder="" />
            </div>
          </div>
          {/* ---------- */}
          <div className="medicalData">
            <p>Acute Conditions</p>
            <label>Infections (respiratory, urinary tract, skin, etc.).</label>
            <div className="inpts">
              <input type="text" placeholder="" />
            </div>
          </div>
          <div className="medicalData">
            <label>Injuries (fractures, sprains, cuts).</label>
            <div className="inpts">
              <input type="text" placeholder="" />
            </div>
          </div>
          {/* ---------------- */}
          <div className="medicalData">
            <p>Treatment and Procedures</p>
            <label>Current and past treatments (medications, therapies)</label>
            <div className="inpts">
              <input type="text" placeholder="" />
            </div>
          </div>
          <div className="medicalData">
            <label>Surgical procedures</label>
            <div className="inpts">
              <input type="text" placeholder="" />
            </div>
          </div>
          <div className="medicalData">
            <label>Immunizations (vaccination history)</label>
            <div className="inpts">
              <input type="text" placeholder="" />
            </div>
          </div>
          <div className="medicalData">
            <p>Diagnostic Test Results</p>
            <label>Blood tests</label>
            <div className="inpts">
              <input type="text" placeholder="" />
            </div>
          </div>
          <div className="medicalData">
            <label>Imaging studies (X-rays, CT scans, MRI scans)</label>
            <div className="inpts">
              <input type="text" placeholder="" />
            </div>
          </div>
          <div className="medicalData">
            <label>Covid/vaccination Certification</label>
            <div className="inpts">
              <input type="file" placeholder="" />
            </div>
          </div>
          <div className="medicalData">
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MedicalDetails;
