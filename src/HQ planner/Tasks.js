import React from 'react'
import "../Styles/HQ planner/Tasks.css";
import Sidebar from '../Components/Sidebar'
import NavigationBar from '../Components/NavigationBar'
import "../Styles/HQ planner/Dashboard.css";
import {AiOutlineMenu} from "react-icons/ai";
import {BsBellFill} from "react-icons/bs";
import {FaUserCircle} from "react-icons/fa";
import {MdOutlineArrowForwardIos} from "react-icons/md";
import {Row,Col, Card, ProgressBar, Table, Tab,Nav, Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

function Tasks() {
    const navigate=useNavigate();


    const toggleSideBar=()=>{
        
        let sbar=document.getElementById("sb");
        let nav=document.getElementById("nv");
        let sec=document.getElementById("sec");
    
    
        if(sbar.classList.contains("sidebar")){
            sbar.classList.remove("sidebar")
           sbar.classList.add("nosbar")
           nav.classList.add("fullcont")
           sec.classList.add("fullcont")
        }
        else if(sbar.classList.contains("nosbar")){
            sbar.classList.remove("nosbar")
            sbar.classList.add("sidebar")
            nav.classList.remove("fullcont")
            sec.classList.remove("fullcont")
        }
        else{
            return ""
        }
    
    
    }
    
  return (
    <>
      <div className='prnt'>
    <Sidebar/>
   
    <section id='sec'>
            <div className='nvbar p-2 pt-3' id='nv'>
             <AiOutlineMenu color='white' fontSize={25} id='toggleBtn' style={{cursor:"pointer"}} className='' onClick={toggleSideBar}/>
             <p className=''>Oklahoma City, OK</p>
    <div className='gears'>
      <BsBellFill fontSize={20}/> <span><FaUserCircle fontSize={22}/></span>
    </div>
            </div>

            <div className="main-cont p-3">
           <p className='dash-title'>Headquarter Planner Task</p>


           <Card className='taskMainCrd p-5'>

           <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col>
          <div className='tabwrap'>
              <Nav variant="pills" className="flex-row">
                <Nav.Item className='tasktab1'>
                  <Nav.Link eventKey="first">Today</Nav.Link>
                </Nav.Item>
                <Nav.Item className='tasktab2'>
                  <Nav.Link eventKey="second">Week</Nav.Link>
                </Nav.Item>
              </Nav>
          </div>
        </Col>
      </Row>
      <Row className='mt-4'>
        <Col>
          <Tab.Content>
            <Tab.Pane eventKey="first">
                <Table responsive>
                    <thead className='dashthead'>
                        <tr>
                            <th>Job ID#</th>
                            <th>Crop Type</th>
                            <th>Variety</th>
                            <th>Sales Person</th>
                            <th>Customer</th>
                            <th>Order Date</th>
                            <th>First Ship Date</th>
                            <th>Quantity</th>
                            <th>Task</th>
                        </tr>
                    </thead>
                    <tbody className='dashtbody'>
                        <tr>
                            <td>J20230907002</td>
                            <td>Strawberry</td>
                            <td>Portola</td>
                            <td>Person One</td>
                            <td>Customer One</td>
                            <td>10-31-2023</td>
                            <td>11-29-2023</td>
                            <td>128</td>
                            <td>
                                <Button variant='' className='taskSchedBtn' onClick={()=>{
                                    navigate(`/sched-task`)
                                }}>Schedule</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>J20230907002</td>
                            <td>Strawberry</td>
                            <td>Portola</td>
                            <td>Person One</td>
                            <td>Customer One</td>
                            <td>10-31-2023</td>
                            <td>11-29-2023</td>
                            <td>128</td>
                            <td>
                                <Button variant='' className='taskSchedBtn' onClick={()=>{
                                    navigate(`/sched-task`)
                                }}>Schedule</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>J20230907002</td>
                            <td>Strawberry</td>
                            <td>Portola</td>
                            <td>Person One</td>
                            <td>Customer One</td>
                            <td>10-31-2023</td>
                            <td>11-29-2023</td>
                            <td>128</td>
                            <td>
                                <Button variant='' className='taskSchedBtn' onClick={()=>{
                                    navigate(`/sched-task`)
                                }}>Schedule</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>J20230907002</td>
                            <td>Strawberry</td>
                            <td>Portola</td>
                            <td>Person One</td>
                            <td>Customer One</td>
                            <td>10-31-2023</td>
                            <td>11-29-2023</td>
                            <td>128</td>
                            <td>
                                <Button variant='' className='taskSchedBtn' onClick={()=>{
                                    navigate(`/sched-task`)
                                }}>Schedule</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>J20230907002</td>
                            <td>Strawberry</td>
                            <td>Portola</td>
                            <td>Person One</td>
                            <td>Customer One</td>
                            <td>10-31-2023</td>
                            <td>11-29-2023</td>
                            <td>128</td>
                            <td>
                                <Button variant='' className='taskSchedBtn' onClick={()=>{
                                    navigate(`/sched-task`)
                                }}>Schedule</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>J20230907002</td>
                            <td>Strawberry</td>
                            <td>Portola</td>
                            <td>Person One</td>
                            <td>Customer One</td>
                            <td>10-31-2023</td>
                            <td>11-29-2023</td>
                            <td>128</td>
                            <td>
                                <Button variant='' className='taskSchedBtn' onClick={()=>{
                                    navigate(`/sched-task`)
                                }}>Schedule</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
            <Table responsive>
                    <thead className='dashthead'>
                        <tr>
                            <th>Job ID#</th>
                            <th>Crop Type</th>
                            <th>Variety</th>
                            <th>Sales Person</th>
                            <th>Customer</th>
                            <th>Order Date</th>
                            <th>First Ship Date</th>
                            <th>Quantity</th>
                            <th>Task</th>
                        </tr>
                    </thead>
                    <tbody className='dashtbody'>
                        <tr>
                            <td>J20230907002</td>
                            <td>Strawberry</td>
                            <td>Portola</td>
                            <td>Person One</td>
                            <td>Customer One</td>
                            <td>10-31-2023</td>
                            <td>11-29-2023</td>
                            <td>128</td>
                            <td>
                                <Button variant='' className='taskSchedBtn' onClick={()=>{
                                    navigate(`/sched-task`)
                                }}>Schedule</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>J20230907002</td>
                            <td>Strawberry</td>
                            <td>Portola</td>
                            <td>Person One</td>
                            <td>Customer One</td>
                            <td>10-31-2023</td>
                            <td>11-29-2023</td>
                            <td>128</td>
                            <td>
                                <Button variant='' className='taskSchedBtn' onClick={()=>{
                                    navigate(`/sched-task`)
                                }}>Schedule</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>J20230907002</td>
                            <td>Strawberry</td>
                            <td>Portola</td>
                            <td>Person One</td>
                            <td>Customer One</td>
                            <td>10-31-2023</td>
                            <td>11-29-2023</td>
                            <td>128</td>
                            <td>
                                <Button variant='' className='taskSchedBtn' onClick={()=>{
                                    navigate(`/sched-task`)
                                }}>Schedule</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>J20230907002</td>
                            <td>Strawberry</td>
                            <td>Portola</td>
                            <td>Person One</td>
                            <td>Customer One</td>
                            <td>10-31-2023</td>
                            <td>11-29-2023</td>
                            <td>128</td>
                            <td>
                                <Button variant='' className='taskSchedBtn' onClick={()=>{
                                    navigate(`/sched-task`)
                                }}>Schedule</Button>
                            </td>
                        </tr>
                       
                    </tbody>
                </Table>
            </Tab.Pane>
          </Tab.Content>
        </Col>
        </Row>
    </Tab.Container>

           </Card>

           </div>

            </section>
            </div>
    </>
  )
}

export default Tasks