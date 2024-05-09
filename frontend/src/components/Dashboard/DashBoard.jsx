import React, { useState } from 'react';
import "./DashBoard.css";
import { Link } from 'react-router-dom';

const DashBoard = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div className={`DashBoardMain ${isMenuOpen ? 'menuOpen' : ''}`}>
            <div className="dashboard">
                <div className="DashContent">
                    <div className="Dtop">
                        <div className="menubar">
                            <h5>Dashboard</h5>
                            <i className="ri-menu-2-line" onClick={toggleMenu}></i>
                        </div>
                    </div>
                    <div className="Dmid">
                        <div className="DashboardList">
                            <div className="heading">
                                <p>Patient data</p>
                            </div>
                            <Link style={{textDecoration:"none", color:'#fff'}} to='/' className="DashData">
                                <i className="ri-home-3-fill"></i>
                                <h6>Home</h6>    
                            </Link>
                            <Link style={{textDecoration:"none", color:'#fff'}} to='/' className="DashData">
                                <i className="ri-line-chart-fill"></i>
                                <h6>Reports</h6>    
                            </Link>
                            <Link style={{textDecoration:"none", color:'#fff'}} to='/patiententry' className="DashData">
                                <i className="ri-heart-pulse-fill"></i>
                                <h6>Patient Entries</h6>    
                            </Link>
                        </div>
                    </div>
                    <div className="Dbtm">
                        <div className="logout">
                        <h5>LogOut</h5>
                            <i className="ri-logout-box-line"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;

















// import React, { useState } from 'react';
// import "./DashBoard.css";
// import { Link } from 'react-router-dom';

// const DashBoard = () => {
//     const [isMenuOpen, setMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setMenuOpen(!isMenuOpen);
//     };

//     return (
//         <div className={`DashBoardMain ${isMenuOpen ? 'menuOpen' : ''}`}>
//             <div className="dashboard">
//                 <div className="dashContent">
//                     <div className="menubar" onClick={toggleMenu}>
//                         <h5>Dashboard</h5>
//                         <i className={`ri-menu-2-line ${isMenuOpen ? 'rotate' : ''}`}></i>
//                     </div>
//                     <div className="DashboardList">
//                         <div className="heading">
//                             <p>Patient data</p>
//                         </div>
//                         <Link style={{textDecoration:"none", color:'#fff'}} to='/' className="DashData">
//                             <i className="ri-home-3-fill"></i>
//                             <h6>Home</h6>    
//                         </Link>
//                         <Link style={{textDecoration:"none", color:'#fff'}} to='/' className="DashData">
//                             <i className="ri-line-chart-fill"></i>
//                             <h6>Reports</h6>    
//                         </Link>
//                         <Link style={{textDecoration:"none", color:'#fff'}} to='/patiententry' className="DashData">
//                             <i className="ri-heart-pulse-fill"></i>
//                             <h6>Find Patient</h6>    
//                         </Link>
//                     </div>
//                     <div className="DashboardList">
//                         <div className="heading">
//                             <p>Records</p>
//                         </div>
//                         <Link style={{textDecoration:"none", color:'#fff'}} to='/patiententry' className="DashData">
//                             {/* <i className="ri-file-list-2-fill"></i> */}
//                             <i class="ri-arrow-down-s-line"></i>
//                             <h6>Patient Entries</h6>    
//                         </Link>
//                         <Link style={{textDecoration:"none", color:'#fff'}} to='/' className="DashData">
//                             <i className="ri-file-list-2-fill"></i>
//                             <h6>Add Records</h6>    
//                         </Link>
//                         <Link style={{textDecoration:"none", color:'#fff'}} to='/' className="DashData">
//                             <i className="ri-file-list-2-fill"></i>
//                             <h6>Add Records</h6>    
//                         </Link>
//                     </div>
//                     <div className="DashboardList">
//                         <div className="heading">
//                             <p>Patient data</p>
//                         </div>
//                         <Link style={{textDecoration:"none", color:'#fff'}} to='/' className="DashData">
//                             <i className="ri-file-list-2-fill"></i>
//                             <h6>Add Records</h6>    
//                         </Link>
//                         <Link style={{textDecoration:"none", color:'#fff'}} to='/' className="DashData">
//                             <i className="ri-file-list-2-fill"></i>
//                             <h6>Add Records</h6>    
//                         </Link>
//                         <Link style={{textDecoration:"none", color:'#fff'}} to='/' className="DashData">
//                             <i className="ri-file-list-2-fill"></i>
//                             <h6>Add Records</h6>    
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default DashBoard