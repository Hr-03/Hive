import React from 'react'
import Sidebar from '../Components/Sidebar'
import NavigationBar from '../Components/NavigationBar'
import "../Styles/HQ planner/Dashboard.css";
import {AiOutlineMenu} from "react-icons/ai";
import {BsBellFill} from "react-icons/bs";
import {FaUserCircle} from "react-icons/fa";
import {MdOutlineArrowForwardIos} from "react-icons/md";
import bee from "../Assets/bee.svg";
import {Row,Col, Card, ProgressBar, Table, Badge} from "react-bootstrap";
import workcell from "../Assets/workcell.svg";
import gp from "../Assets/gpallet.svg";
import invs from "../Assets/invstat.svg";
import ots from "../Assets/otship.svg";
import fcv from "../Assets/fcview.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import cam1 from "../Assets/cam1.svg";
import cam2 from "../Assets/cam2.svg";


function Dashboard() {
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


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};



  return (
    <>
     <div className='prnt'>
    <Sidebar/>
   
    <section id='sec'>
            <div className='nvbar p-2 pt-3' id='nv'>
             <AiOutlineMenu color='white' fontSize={25} style={{cursor:"pointer"}} id='toggleBtn' className='' onClick={toggleSideBar}/>
             <p className=''>Oklahoma City, OK</p>
    <div className='gears'>
      <BsBellFill fontSize={20}/> <span><FaUserCircle fontSize={22}/></span>
    </div>
            </div>
         

         <div className="main-cont p-3">
           <p className='dash-title'>Dashboard <img src={bee} alt="" className=''/></p>


          <Row>
            <Col lg={4} md={4} sm={12}>
            <Card className='dashcrds p-4'>
              <div className='d-flex justify-content-between flex-wrap'>

                <div className='d-flex flex-wrap'>
                  <img src={workcell} alt="" srcset="" />
                  <p className='mx-2 mx-lg-4 crd1heads m-0'>Work Cell Usage <br /><span className='crd1spans'>Weekly Levels</span></p>
                </div>

                <p className='crd1perc'>93%</p>

                
              </div>

              <div className='d-flex justify-content-between flex-wrap mt-4'>

                <div className='d-flex flex-wrap'>
                  <img src={gp} alt="" srcset="" />
                  <p className='mx-2 mx-lg-4 crd1heads m-0'>Grow Pallet Usage <br /><span className='crd1spans'>Weekly Levels</span></p>
                </div>

                <p className='crd1perc'>80%</p>


              </div>


              <div className='d-flex justify-content-between flex-wrap mt-4'>

                <div className='d-flex flex-wrap'>
                  <img src={invs} alt="" srcset="" />
                  <p className='mx-2 mx-lg-4 crd1heads m-0'>Inventory Status <br /><span className='crd1spans'>Ordered Today </span></p>
                </div>

                <p className='crd1perc'>26%</p>


              </div>



              <div className='d-flex justify-content-between flex-wrap mt-4'>

                <div className='d-flex flex-wrap'>
                  <img src={ots} alt="" srcset="" />
                  <p className='mx-2 mx-lg-4 crd1heads m-0'>On-Time Shipment <br /><span className='crd1spans'>Today</span></p>
                </div>

                <p className='crd1perc'>92%</p>


              </div>
            </Card>

            <Card className='dashcrds p-4 mt-3'>
              <p className='crd1heads'>Plant Health Metrics</p>
              
              <div>
                <div className='d-flex justify-content-between'>
                  <p className='mb-2'>Average Plant Health</p>
                  <p className='mb-2'>68%</p>
                </div>
                <ProgressBar now={68} className='pb1'/>
              </div>


              <div className='mt-4'>
                <div className='d-flex justify-content-between'>
                  <p className='mb-2'>Seedling Survival Rate</p>
                  <p className='mb-2'>50%</p>
                </div>
                <ProgressBar now={50} className='pb2'/>
              </div>


              <div className='mt-4'>
                <div className='d-flex justify-content-between'>
                  <p className='mb-2'>Harvest Ratio</p>
                  <p className='mb-2'>82%</p>
                </div>
                <ProgressBar now={82} className='pb3'/>
              </div>
            </Card>
            </Col>
            <Col lg={8} md={8} sm={12}>
            <Row>
              <Col>
              <Card className='dashcrds p-4'>
                <div className='d-flex justify-content-between'>
                  <p className='crd1heads'>Growing Dashboard</p>
                  <p><MdOutlineArrowForwardIos/></p>
                </div>

                <div className='d-flex'>
                  <div className='gdashbar1'></div>
                  <div className='d-block'>
                    <p className='crd1heads mx-3 p-0 m-0'>90 </p>
                    <span className='crd1spans mx-3'>Grams per plant per week</span>
                  </div>
                </div>


                <div className='d-flex mt-3'>
                  <div className='gdashbar2'></div>
                  <div className='d-block'>
                    <p className='crd1heads mx-3 p-0 m-0'>86% </p>
                    <span className='crd1spans mx-3'>Yield Performance (Target percentage last week)</span>
                  </div>
                </div>


                
                <div className='d-flex mt-3'>
                  <div className='gdashbar3'></div>
                  <div className='d-block'>
                    <p className='crd1heads mx-3 p-0 m-0'>90% </p>
                    <span className='crd1spans mx-3'>Percentage occupancy</span>
                  </div>
                </div>

              </Card>

              <Card className='dashcrds p-4 mt-3'>
              <div className='d-flex justify-content-between'>
                  <p className='crd1heads'>Facility Plan View</p>
                  <p><MdOutlineArrowForwardIos/></p>
                </div>
{/* <div className='d-flex'>
  <div>

                <div className='d-flex'>
                <Card style={{backgroundColor:"white"}} className='m-1'>
                  <Table bordered className='m-0'>
                    <tbody>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td colSpan="8"></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </Table>
                </Card>
                

                <Card style={{backgroundColor:"white"}} className='m-1'>
                  <Table bordered className='m-0'>
                    <tbody>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td colSpan="8"></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </Table>
                </Card>

                <Card style={{backgroundColor:"white"}} className='m-1'>
                  <Table bordered className='m-0'>
                    <tbody>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td colSpan="8"></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </Table>
                </Card>

                <Card style={{backgroundColor:"white"}} className='m-1'>
                  <Table bordered className='m-0'>
                    <tbody>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td colSpan="8"></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </Table>
                </Card>

                </div>

                <div className='d-flex'>
                  <Card style={{backgroundColor:"white"}} className='m-1'>
                    <Table bordered className='m-0'>
                      <tbody>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td colSpan="8"></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </Table>
                  </Card>
                  
                  <Card style={{backgroundColor:"white"}} className='m-1'>
                    <Table bordered className='m-0'>
                      <tbody>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td colSpan="8"></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </Table>
                  </Card>
                  <Card style={{backgroundColor:"white"}} className='m-1'>
                    <Table bordered className='m-0'>
                      <tbody>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td colSpan="8"></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </Table>
                  </Card>
                  <Card style={{backgroundColor:"white"}} className='m-1'>
                    <Table bordered className='m-0'>
                      <tbody>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td colSpan="8"></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </Table>
                  </Card>
                  </div>


                  
                <div className='d-flex'>
                  <Card style={{backgroundColor:"white",width:"100%",height:"1.5rem"}} className='m-1'>

                  </Card>
                  <Card style={{backgroundColor:"white",width:"100%",height:"1.5rem"}} className='m-1'>

                  </Card>
                  <Card style={{backgroundColor:"white",width:"100%",height:"1.5rem"}} className='m-1'>

                  </Card>
                  <Card style={{backgroundColor:"white",width:"100%",height:"1.5rem"}} className='m-1'>

                  </Card>
                </div>
  </div>








                <Card style={{backgroundColor:"white"}} className='m-1'>
                    <Table bordered className='m-0'>
                      <tbody>
                        <tr><td></td></tr>
                        <tr><td></td></tr>
                        <tr><td></td></tr>
                        <tr><td></td></tr>
                        <tr><td></td></tr>
                        <tr><td></td></tr>
                        <tr><td></td></tr>
                        <tr><td></td></tr>
                        <tr><td></td></tr>
                        <tr><td></td></tr>
                        <tr><td></td></tr>
                      </tbody>
                    </Table>
                  </Card>
                  </div> */}
                <img src={fcv} alt="" srcset=""  width={340}/>

               
                  
                      
                 
          

                  
                 
                

              </Card>
              </Col>
              <Col>
              <Card className='dashcrds p-4'>
              <div className='d-flex justify-content-between'>
                  <p className='crd1heads'>Robotic Controls <Badge bg="danger" className='bdg p-1'>10</Badge></p>
                  <p><MdOutlineArrowForwardIos/></p>
                </div>



                <div className='d-flex'>
                  <div className='gdashbar4'></div>
                  <div className='d-block'>
                    <p className='crd1heads mx-3 p-0 m-0'>100 </p>
                    <span className='crd1spans mx-3'>Mission in Queue</span>
                  </div>
                </div>


                <div className='d-flex mt-3'>
                  <div className='gdashbar5'></div>
                  <div className='d-block'>
                    <p className='crd1heads mx-3 p-0 m-0'>20 </p>
                    <span className='crd1spans mx-3'>Mission Assigned</span>
                  </div>
                </div>


                
                <div className='d-flex mt-3'>
                  <div className='gdashbar6'></div>
                  <div className='d-block'>
                    <p className='crd1heads mx-3 p-0 m-0'>80 </p>
                    <span className='crd1spans mx-3'>Mission Executed, hourly</span>
                  </div>
                </div>
              </Card>

              <Card className='dashcrds p-4 mt-3'>
              <div className='d-flex justify-content-between'>
                  <p className='crd1heads'>Camera Shots</p>
                  <p><MdOutlineArrowForwardIos/></p>
                </div>



                <Carousel responsive={responsive}>
  <div className='m-1'><img src={cam1} alt="" /></div>
  <div className='m-1'><img src={cam2} alt=""/></div>
  <div className='m-1'><img src={cam1} alt="" /></div>
  <div className='m-1'><img src={cam2} alt=""/></div>
 
</Carousel>

              </Card>
              </Col>
            </Row>
            </Col>
          </Row>

          <Row>
            <Col>
            <Card className='dashcrds p-4 mt-3'>
              <div>
                  <p className='crd1heads'>Jobs Planned for Today</p>
                  
                </div>
              <Table responsive>
                  <thead className='dashthead'>
                    <tr>
                      <th>Job ID#</th>
                      <th>Work Cell</th>
                      <th>Completion Rate</th>
                    </tr>
                  </thead>

                  <tbody className='dashtbody'>
                    <tr>
                      <td>J20230907002</td>
                      <td>Work Cell 1</td>
                       <td>
                        <div className='row'>
                <div className="col">
                  <ProgressBar now={50} className='jobsp'/>
                </div><div className="col"><span>50%</span></div>
               

                        </div>
                       </td>
                    </tr>
                    <tr>
                      <td>J20230907003</td>
                      <td>Work Cell 3</td>
                       <td>
                        <div className='row
                        '>
                <div className="col">
                  <ProgressBar now={80} className='jobsp'/>
                </div>
                <div className="col"><span>80%</span></div>
               

                        </div>
                       </td>
                    </tr>
                    <tr>
                      <td>J20230907004</td>
                      <td>Work Cell 4</td>
                       <td>
                        <div className='row'>
                <div className="col">
                  <ProgressBar now={9} className='jobsp'/>
                </div>
                <div className="col"><span>09%</span></div>
               

                        </div>
                       </td>
                    </tr>
                    <tr>
                      <td>J20230907005</td>
                      <td>Work Cell 5</td>
                       <td>
                        <div className='row'>
                <div className="col">
                  <ProgressBar now={58} className='jobsp'/>
                </div>
                <div className="col"><span>58%</span></div>
               

                        </div>
                       </td>
                    </tr>
                  </tbody>

              </Table>
            </Card>
            </Col>
          </Row>
         </div>
            </section>
 </div>
    </>
  )
}

export default Dashboard