import React from 'react'
import "./Sidebar.css";
import logo from "../Assets/logo.svg"
import NavigationBar from './NavigationBar';
import {AiOutlineMenu} from "react-icons/ai";
import dash from "../Assets/dash.svg";
import dashb from "../Assets/dashBlack.svg";
import task from "../Assets/task.svg";
import taskb from "../Assets/taskblack.svg";
import ctask from "../Assets/ctask.svg";
import rpts from "../Assets/reports.svg";
import supp from "../Assets/support.svg";
import fleet from "../Assets/fleet.svg";
import gdash from "../Assets/gdash.svg";
import lm from "../Assets/livemap.svg";
import automation from "../Assets/automation.svg";
import {useNavigate} from "react-router-dom";


function Sidebar() {

  const navigate=useNavigate();


  const isPathnameRed = window.location.pathname === '/';
  const isPathnametask = window.location.pathname === '/tasks';

  const divStyle = {
    background: isPathnameRed ? 'linear-gradient(90deg, #FAC23C 0%, #F9E334 100%)' : 'transparent',
    borderRadius:isPathnameRed? '10px':'0px',
    color:isPathnameRed?'black':'white'
  };


  const astyle={
      color:isPathnameRed?'black':'white'
  }



  const styletask={
    background: isPathnametask ? 'linear-gradient(90deg, #FAC23C 0%, #F9E334 100%)' : 'transparent',
    borderRadius:isPathnametask? '10px':'0px',
    color:isPathnametask?'black':'white'
  }

  const styletasktext={
    color:isPathnametask?'black':'white'

  }
   
  return (
   <>
    
        
            <div className='sidebar' id='sb'>
            <header className='p-3 px-4'><img src={logo} alt="logo"/></header>
         
            <ul className='me-3'>
             <li onClick={()=>navigate("/")}><div style={divStyle} className='px-3'><a style={astyle}><img src={isPathnameRed?dashb:dash} alt="" className='me-3'/>Dashboard</a></div></li>
             <li onClick={()=>navigate("/tasks")}><div className='px-3' style={styletask}><a style={styletasktext}><img src={isPathnametask?taskb:task} alt="" className='me-3'/>Task</a></div></li>
             <li><div className='px-3'><a><img src={ctask} alt="" className='me-3'/>Create Tasks</a></div></li>
             <li><div className='px-3'><a><img src={supp} alt="" className='me-3'/>Job Facility Support</a></div></li>
             <li><div className='px-3'><a><img src={rpts} alt="" className='me-3'/>Job Reports</a></div></li>
             <li><div className='px-3'><a><img src={fleet} alt="" className='me-3'/>Robotic Fleet</a></div></li>
             <li><div className='px-3'><a><img src={gdash} alt="" className='me-3'/>Growing Dashboard</a></div></li>
             <li><div className='px-3'><a><img src={lm} alt="" className='me-3'/>Live Map</a></div></li>
             <li><div className='px-3'><a><img src={automation} alt="" className='me-3'/>Automation</a></div></li>
            </ul>
            </div>



         
           
 
 
   </>
  )
}

export default Sidebar