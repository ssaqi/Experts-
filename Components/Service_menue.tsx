import React from 'react'
import Image from "next/image";
import S1 from '../public/images/Group 26769.png';
import S2 from '../public/images/cosmetologist-woman-performs-procedure-1.png';
import S3 from '../public/images/young-woman-receiving-laser-hair-removal-epilation-2022-12-16-17-47-43-utc.png';
import S4 from '../public/images/beautician-performing-laser-hair-removal-procedure-2022-02-18-05-09-35-utc.png';
import S5 from '../public/images/NoPath - Copy (18).png';
import S6 from '../public/images/cosmetologist-woman-performs-procedure-1.png';
import S7 from '../public/images/NoPath - Copy (22).png';
import { CiClock2 } from "react-icons/ci";
const Service_menue = () => {
  return (

    <>
    <br/><br/>
    <div className='container'>
    <h3 style={{ fontFamily:" Poppins", fontWeight: 600}}>Service Menu</h3>
    <div className="row row-cols-1 row-cols-md-2 g-4 my-5 ">

    <div className="card mb-3 " style={{ maxWidth: 540 , border: "none"}}>
  <div className="row g-0">
    <div className="col-md-4">
    <Image
      src={S1} 
      className="img-fluid rounded-start img" alt="..."  />
    </div>
    <div className="col-md-8">
      <div className="card-body">
      <h5 className="card-title heading">Laser Vien Removal</h5>
        <p className="card-text">
          This is a wider card with supporting text below.
        </p>
        <p className="card-text">
          <small className="text-muted">
            From <b> £200 </b>     <CiClock2
                  size={18}
                  color="#ccd2d8"
                  style={{ marginBottom: "4px" }}
                /> <b> 1 hrs 10 mins</b>
            <button type="button" className="btn btn-outline-danger" style={{float:"right"}}>Book Now</button></small>
        </p>
      </div>
    </div>
  </div>
  
</div>


<div className="card mb-3" style={{ maxWidth: 540 , border: "none" }}>
  <div className="row g-0">
    <div className="col-md-4">
    <Image
      src={S2}  className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
      <h5 className="card-title">Sunspots Freckle Removal</h5>
        <p className="card-text">
          This is a wider card with supporting text below 
        </p>
        <p className="card-text">
        <small className="text-muted">
          
        From <b> £230 </b>    
         <CiClock2
                  size={18}
                  color="#ccd2d8"
                  style={{ marginBottom: "4px" }}
                /> <b> 1 hrs 10 mins</b>
          
          <button type="button" className="btn btn-outline-danger"style={{float:"right"}}>Book Now</button></small>
        </p>
      </div>
    </div>
  </div>
  
</div>

<div className="card mb-3" style={{ maxWidth: 540 , border: "none" }}>
  <div className="row g-0">
    <div className="col-md-4">
    <Image
      src={S3}  className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
      <h5 className="card-title">Laser Wart Removal</h5>
        <p className="card-text">
          This is a wider card with supporting text below 
        </p>
        <p className="card-text">
        <small className="text-muted">
        From <b> £120 </b>    
               <CiClock2
                  size={18}
                  color="#ccd2d8"
                  style={{ marginBottom: "4px" }}
                /> <b> 1 hrs 10 mins</b>
          <button type="button" className="btn btn-outline-danger" style={{float:"right"}}>Book Now</button></small>
        </p>
      </div>
    </div>
  </div>
  
</div>

<div className="card mb-3" style={{ maxWidth: 540 , border: "none" }}>
  <div className="row g-0">
    <div className="col-md-4">
      <Image src={S4} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
      <h5 className="card-title">Laser Tatto Removal</h5>
        <p className="card-text">
          This is a wider card with supporting text below 
        </p>
        <p className="card-text">
        <small className="text-muted">
        From <b> £100 </b>
        <CiClock2
                  size={18}
                  color="#ccd2d8"
                  style={{ marginBottom: "4px" }}
                /> <b> 1 hrs 10 mins</b>
          <button type="button" className="btn btn-outline-danger" style={{float:"right"}}>Book Now</button></small>
        </p>
      </div>
    </div>
  </div>
  
</div>


<div className="card mb-3" style={{ maxWidth: 540 , border: "none" }}>
  <div className="row g-0">
    <div className="col-md-4">
  <Image src={S5} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
      <h5 className="card-title">Arms & Legs</h5>
        <p className="card-text">
          This is a wider card with supporting text below.
        </p>
        <p className="card-text">
        <small className="text-muted">
        From <b> £30 </b>     
        <CiClock2
                  size={18}
                  color="#ccd2d8"
                  style={{ marginBottom: "4px" }}
                /> <b> 1 hrs 10 mins</b>
          <button type="button" className="btn btn-outline-danger" style={{float:"right"}}>Book Now</button></small>
        </p>
      </div>
    </div>
  </div>
  
</div>

<div className="card mb-3" style={{ maxWidth: 540 , border: "none" }}>
  <div className="row g-0">
    <div className="col-md-4">
    <Image src={S6} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
      <h5 className="card-title">Sunspots Freckle Removal</h5>
        <p className="card-text">
          This is a wider card with supporting text below 
        </p>
        <p className="card-text">
        <small className="text-muted">
        From <b> £230 </b>    
         <CiClock2
                  size={18}
                  color="#ccd2d8"
                  style={{ marginBottom: "4px" }}
                /> <b> 1 hrs 10 mins</b>
          <button type="button" className="btn btn-outline-danger" style={{float:"right"}}>Book Now</button></small>
        </p>
      </div>
    </div>
  </div>
  
</div>

<div className="card mb-3" style={{ maxWidth: 540 ,  border: "none" }}>
  <div className="row g-0">
    <div className="col-md-4">
    <Image src={S7} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
      <h5 className="card-title">Underarms</h5>
        <p className="card-text">
          This is a wider card with supporting text below
          
        </p>
        <p className="card-text">
        <small className="text-muted">
        From <b> £20 </b>    
         <CiClock2
                  size={18}
                  color="#ccd2d8"
                  style={{ marginBottom: "4px" }}
                /> <b> 1 hrs 10 mins</b>
          
          <button type="button" className="btn btn-outline-danger" style={{float:"right"}}>Book Now</button></small>
        </p>
      </div>
    </div>
  </div>
  
</div>

 </div>
</div>
    
    
    
    </>
  )
}

export default Service_menue