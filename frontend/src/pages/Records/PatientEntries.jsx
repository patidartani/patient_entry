import React, { useState, useEffect } from 'react';
import Nav from '../../components/Navbar/Nav';
import "./PatientEntries.css";

const PatientEntries = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData(); 
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('Api Url..........');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    };

    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log("Search query:", searchQuery);
        // Search Functionality
    };

    return (
        <div className='PatientEntries'>
            <Nav />
            <div className="Entries">
                <div className="EntryRecord">
                    <div className="EntriesTop">
                        <form onSubmit={handleSearchSubmit}>
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={handleSearchInputChange}
                            />
                            <button type="submit"><i className="ri-search-line"></i></button>
                        </form>
                    </div>
                    <h5>Patient Entries</h5>
                    <div className="PatientTable">
                        <table>
                            <thead>
                                <tr>
                                    <th>CaseNo</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Gender</th>
                                    <th>Age</th>
                                    <th>Contact No</th>
                                    <th>Date Added</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                              
                           <div className="Tdatas">
                           <p>P-01</p>
                              <p>Tanisha  patel</p>
                              <p>JohnDoe</p>
                              <p>Female</p>
                              <p>21</p>
                              <p>123456789010</p>
                              <p>12/3/2023</p>
                              <p className='btns'>
                                        <button><i class="ri-edit-line"></i></button>
                                        <button><i class="ri-eye-line"></i></button>
                                        <button><i class="ri-delete-bin-6-line"></i></button>
                              </p>
                           </div>
                           {/* -------- */}
                           <div className="Tdatas">
                           <p>P-02</p>
                              <p>John</p>
                              <p>Doe!</p>
                              <p>Male</p>
                              <p>35</p>
                              <p>0987654321</p>
                              <p>17/8/2003</p>
                              <p className='btns'>
                              <button><i class="ri-edit-line"></i></button>
                                        <button><i class="ri-eye-line"></i></button>
                                        <button><i class="ri-delete-bin-6-line"></i></button>
                              </p>
                           </div>
                            {/* ------- */}
                              {/* <tr>
                                {/* {data.map((item, index) => (
                                    <tr key={index}>
                                        <td>p-01{item.CaseNo}</td>
                                        <td>vbn{item.FirstName}</td>
                                        <td>vbn{item.LastName}</td>
                                        <td>vbn{item.Gender}</td>
                                        <td>vb{item.Age}</td>
                                        <td>bn{item.ContactNo}</td>
                                        <td>xcvb{item.Date}</td>
                                        <td className='btns'>
                                            <button>View</button>
                                            <button>Edit</button>
                                        </td>
                                    </tr>
                                ))} */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PatientEntries;
