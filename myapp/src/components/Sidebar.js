import React from "react";
import {MdContentCopy} from 'react-icons/md';
import {CgProfile} from 'react-icons/cg';
import {FiLogOut} from 'react-icons/fi';
import {MdDashboard} from 'react-icons/md';

const Sidebar = () => {
  return (
    // <div className="sidebar">
    //     <div className="topbox">
    //         <div className="round1">
    //          <div className="circle"></div>
    //         </div>
        
    //     </div>
  
    // </div>
    <div className='sideBar'>
    <div className='user'>
      <div className='circle'>
         <img src="https://celebsnft.appworkdemo.com/static/media/avt-3.c5101bd0154f9b840946.jpg" alt="img"/>
      </div>
      <div className="point">.</div>
      <div className="dot">...</div>
    </div>
       <div className="Dashboard">
         <div className="ds"> <span className="icn"><MdDashboard/></span> Dashbord</div> 
         <div className="ds"><span className="icn"><MdContentCopy/></span>Refer & Earn</div> 
         <div className="ds"><span className="icn"><CgProfile/></span> My profile</div>
         <div className="ds"><span className="icn"><FiLogOut/></span>Logout</div>
       </div>
   </div>
  );
};

export default Sidebar;
