import React,{useRef,useEffect} from 'react'
import "../Styles/HQ planner/ScheduleTask.css";
import Sidebar from '../Components/Sidebar'
import NavigationBar from '../Components/NavigationBar'
import "../Styles/HQ planner/Dashboard.css";
import {AiOutlineMenu} from "react-icons/ai";
import {BsBellFill,BsArrowLeft} from "react-icons/bs";
import {BiArrowBack} from "react-icons/bi";
import {FaUserCircle} from "react-icons/fa";
import {MdOutlineArrowForwardIos} from "react-icons/md";
import {Row,Col, Card, ProgressBar, Table, Tab,Nav, Button, Form, Badge} from "react-bootstrap";
import 'bs-stepper/dist/css/bs-stepper.min.css'; // Import the CSS
import Stepper from 'bs-stepper';


function ScheduleTask() {
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


    const stepperContainerRef = useRef(null);

    useEffect(() => {
      const stepper = new Stepper(stepperContainerRef.current, {
        linear: false, // You can configure the stepper options here
      
      });
  
      // You can also access the stepper instance and use it as needed
      // stepper.to(1); // Example: Move to the second step
  
      return () => {
        stepper.destroy(); // Destroy the stepper when the component unmounts
      };
    }, []);



   
    
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

           <p className='dash-title mb-0'><BiArrowBack className='me-3'/>Schedule Task</p>
           <p className='m-5 mt-0' style={{fontSize:"15px",fontWeight:"bold",color:"#BEBDC1"}}>Job Id:<span className='mx-2' style={{fontWeight:"normal",color:"#BEBDC1"}}>J20230907007</span></p>



<Card className='dashcrds p-5'>
<Form>
    {/* <Row className='justify-content-between'>
        <Col lg={2} sm={12}> */}


        <div className='d-flex gap-4'>

       
        <Form.Group className="mb-3 w-100">
        <Form.Label>Plant Facility</Form.Label>
        <Form.Select>
          <option>Select City</option>
        </Form.Select>
      </Form.Group>
        {/* </Col>
        <Col lg={2} sm={12}> */}
        <Form.Group className="mb-3 w-100">
        <Form.Label>Plant Type</Form.Label>
        <Form.Select>
          <option>Albion</option>
        </Form.Select>
      </Form.Group>
        {/* </Col>
        <Col lg={2} sm={12}> */}
        <Form.Group className="mb-3 w-100">
        <Form.Label>Production Profile</Form.Label>
        <Form.Select>
          <option>Choose Profile</option>
        </Form.Select>
      </Form.Group>
        {/* </Col>
        <Col lg={2} sm={12}> */}
        <Form.Group className="mb-3 w-100">
        <Form.Label>Choose Blueprint</Form.Label>
        <Form.Select>
          <option>Select Blueprint</option>
        </Form.Select>
      </Form.Group>
        {/* </Col>
        <Col lg={2} sm={12}> */}
        <Form.Group className="mb-3 w-100">
        <Form.Label>Ship Date</Form.Label>
        <Form.Control type='date'/>
          
      </Form.Group>
        {/* </Col>
    </Row> */}



</div>




<div className='d-flex gap-4'>
  

    {/* <Row className='mt-3 justify-content-between'>
    <Col lg={2} sm={12}> */}
        <Form.Group className="mb-3 w-100">
        <Form.Label>First Harvest Date</Form.Label>
        <Form.Control type='date'/>
          
      </Form.Group>
        {/* </Col>
    <Col lg={2} sm={12}> */}
        <Form.Group className="mb-3 w-100">
        <Form.Label>Next Harvest Date</Form.Label>
        <Form.Control type='date'/>
          
      </Form.Group>
        {/* </Col>
    <Col lg={2} sm={12}> */}
        <Form.Group className="mb-3 w-100">
        <Form.Label>Plant Yield (oz / plant / growing cycle)</Form.Label>
        <Form.Control type='text'/>
          
      </Form.Group>
        {/* </Col>
    <Col lg={2} sm={12}> */}
        <Form.Group className="mb-3 w-100">
        <Form.Label>Overage (%)</Form.Label>
        <Form.Control type='text'/>
          
      </Form.Group>
        {/* </Col>
    <Col className='pt-3' lg={2} sm={12}> */}
    <div className='w-100 m-auto'>

       <Button variant='' className='subSchedBtn mt-4'>Schedule</Button>
    </div>
        {/* </Col>
    </Row> */}

</div>

</Form>
</Card>


<p className='palletCountT mt-4 pt-3 pb-3'>Pallets Needed:<span className='palletCount p-2 mx-2 px-4'>120</span></p>



<Card className='dashcrds p-4 mt-4'>
<p className='schedTrack'>Production Plan</p>

<div className='p-4 pplan'>

{/* <div  className="bs-stepper">
      <div className="bs-stepper-header">
        <div className="step" data-target="#step-1">
          <button className="step-trigger">Step 1</button>
        </div>
        <div className="step" data-target="#step-2">
          <button className="step-trigger">Step 2</button>
        </div>
      </div>
      <div className="bs-stepper-content">
        <div id="step-1" className="content">
          <p>Hi</p>
        </div>
        <div id="step-2" className="content">
          <p>Hello</p>
        </div>
      </div>
    </div> */}



    <div ref={stepperContainerRef} class="bs-stepper vertical">
  <div class="bs-stepper-header" role="tablist">
    {/* <!-- your steps here --> */}
    <div class="step" data-target="#logins-part">
      <button type="button" class="step-trigger p-0" role="tab" aria-controls="logins-part" id="logins-part-trigger">
        <span className='mx-2' style={{fontWeight:"normal"}}>21-10-2023</span>
        <span class="bs-stepper-circle"></span>
        <span class="bs-stepper-label">Rock Wool Arrives</span>
      </button>
    </div>
    <div class="line"></div>
    <div class="step" data-target="#information-part">
      <button type="button" class="step-trigger p-0" role="tab" aria-controls="information-part" id="information-part-trigger">
        <span className='mx-2' style={{fontWeight:"normal"}}>24-10-2023</span>
        <span class="bs-stepper-circle"></span>
        <span class="bs-stepper-label">At Work Cell #1 Ready to Plant</span>
      </button>
    </div>
    <div class="line"></div>

    <div class="step" data-target="#information-part">
      <button type="button" class="step-trigger p-0" role="tab" aria-controls="information-part" id="information-part-trigger">
        <span className='mx-2' style={{fontWeight:"normal"}}>26-10-2023</span>
        <span class="bs-stepper-circle"></span>
        <span class="bs-stepper-label">Planted</span>
      </button>
    </div>
    <div class="line"></div>

    <div class="step" data-target="#information-part">
      <button type="button" class="step-trigger p-0" role="tab" aria-controls="information-part" id="information-part-trigger">
        <span className='mx-2' style={{fontWeight:"normal"}}>28-10-2023</span>
        <span class="bs-stepper-circle"></span>
        <span class="bs-stepper-label">Scheduled for Placement in House</span>
      </button>
    </div>
    <div class="line"></div>

    <div class="step" data-target="#information-part">
      <button type="button" class="step-trigger p-0" role="tab" aria-controls="information-part" id="information-part-trigger">
        <span className='mx-2' style={{fontWeight:"normal"}}>30-10-2023</span>
        <span class="bs-stepper-circle"></span>
        <span class="bs-stepper-label">In House H.001.005.052</span>
      </button>
    </div>
    <div class="line"></div>

    <div class="step" data-target="#information-part">
      <button type="button" class="step-trigger p-0" role="tab" aria-controls="information-part" id="information-part-trigger">
        <span className='mx-2' style={{fontWeight:"normal"}}>02-11-2023</span>
        <span class="bs-stepper-circle"></span>
        <span class="bs-stepper-label">Growing</span>
      </button>
    </div>
    <div class="line"></div>

    <div class="step" data-target="#information-part">
      <button type="button" class="step-trigger p-0" role="tab" aria-controls="information-part" id="information-part-trigger">
        <span className='mx-2' style={{fontWeight:"normal"}}>07-11-2023</span>
        <span class="bs-stepper-circle"></span>
        <span class="bs-stepper-label">Trimming</span>
      </button>
    </div>
    <div class="line"></div>

    <div class="step" data-target="#information-part">
      <button type="button" class="step-trigger p-0" role="tab" aria-controls="information-part" id="information-part-trigger">
        <span className='mx-2' style={{fontWeight:"normal"}}>07-11-2023</span>
        <span class="bs-stepper-circle"></span>
        <span class="bs-stepper-label">Plant Health Check 1</span>
      </button>
    </div>
    <div class="line"></div>

    <div class="step" data-target="#information-part">
      <button type="button" class="step-trigger p-0" role="tab" aria-controls="information-part" id="information-part-trigger">
        <span className='mx-2' style={{fontWeight:"normal"}}>14-11-2023</span>
        <span class="bs-stepper-circle"></span>
        <span class="bs-stepper-label">Deflowering</span>
      </button>
    </div>
    <div class="line"></div>

    <div class="step" data-target="#information-part">
      <button type="button" class="step-trigger p-0" role="tab" aria-controls="information-part" id="information-part-trigger">
        <span className='mx-2' style={{fontWeight:"normal"}}>14-11-2023</span>
        <span class="bs-stepper-circle"></span>
        <span class="bs-stepper-label">Plant Health Check 2</span>
      </button>
    </div>
    <div class="line"></div>

    <div class="step" data-target="#information-part">
      <button type="button" class="step-trigger p-0" role="tab" aria-controls="information-part" id="information-part-trigger">
        <span className='mx-2' style={{fontWeight:"normal"}}>15-01-2024</span>
        <span class="bs-stepper-circle"></span>
        <span class="bs-stepper-label">Harvest</span>
      </button>
    </div>
    <div class="line"></div>

    <div class="step" data-target="#information-part">
      <button type="button" class="step-trigger p-0" role="tab" aria-controls="information-part" id="information-part-trigger">
        <span className='mx-2' style={{fontWeight:"normal"}}>15-01-2024</span>
        <span class="bs-stepper-circle"></span>
        <span class="bs-stepper-label">Plant Health Check 3</span>
      </button>
    </div>
    <div class="line"></div>

    <div class="step" data-target="#information-part">
      <button type="button" class="step-trigger p-0" role="tab" aria-controls="information-part" id="information-part-trigger">
        <span className='mx-2' style={{fontWeight:"normal"}}>16-01-2024</span>
        <span class="bs-stepper-circle"></span>
        <span class="bs-stepper-label">Ready for Harvest</span>
      </button>
    </div>
    <div class="line"></div>

    <div class="step" data-target="#information-part">
      <button type="button" class="step-trigger p-0" role="tab" aria-controls="information-part" id="information-part-trigger">
        <span className='mx-2' style={{fontWeight:"normal"}}>17-01-2024</span>
        <span class="bs-stepper-circle"></span>
        <span class="bs-stepper-label">Work Cell - Staging Ready for Pick-up</span>
      </button>
    </div>
    <div class="line"></div>

    <div class="step" data-target="#information-part">
      <button type="button" class="step-trigger p-0" role="tab" aria-controls="information-part" id="information-part-trigger">
        <span className='mx-2' style={{fontWeight:"normal"}}>18-01-2024</span>
        <span class="bs-stepper-circle"></span>
        <span class="bs-stepper-label">Work Cell - Ready to Harvest</span>
      </button>
    </div>
    <div class="line"></div>

    <div class="step" data-target="#information-part">
      <button type="button" class="step-trigger p-0" role="tab" aria-controls="information-part" id="information-part-trigger">
        <span className='mx-2' style={{fontWeight:"normal"}}>19-01-2024</span>
        <span class="bs-stepper-circle"></span>
        <span class="bs-stepper-label">Harvested</span>
      </button>
    </div>
    <div class="line"></div>
    
    <div class="step" data-target="#information-part">
      <button type="button" class="step-trigger p-0" role="tab" aria-controls="information-part" id="information-part-trigger">
        <span className='mx-2' style={{fontWeight:"normal"}}>20-01-2024</span>
        <span class="bs-stepper-circle"></span>
        <span class="bs-stepper-label">Shipped</span>
      </button>
    </div>
  </div>
  <div class="bs-stepper-content">
    {/* <!-- your steps content here --> */}
    <div id="logins-part" class="content" role="tabpanel" aria-labelledby="logins-part-trigger"></div>
    <div id="information-part" class="content" role="tabpanel" aria-labelledby="information-part-trigger"></div>
  </div>
</div>


</div>

</Card>


<Row className='mt-4 pt-2'>
  <Col md={2}>
  <Form.Group className="mb-3 w-100">
        {/* <Form.Label>Choose Blueprint</Form.Label> */}
        <Form.Select>
          <option>Assign Team</option>
        </Form.Select>
      </Form.Group>
  </Col>
</Row>


<Row className='mt-3'>
  <Col md={2}>
<Button variant='' type='submit' className='subSchedBtn w-100'>Submit</Button>
  </Col>
</Row>
            </div>
            </section>
            </div>
    </>
  )
}

export default ScheduleTask