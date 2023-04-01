import React from 'react'
import Image from 'next/image'
import Img from '../public/images/pngg.png'
import p1 from '../public/images/Path 39703.png'
import p2 from '../public/images/Path 39702.png'
import p3 from '../public/images/NoPath - Copy (14).png'
const Testimonials = () => {
  return (
    <>
    <div className='container'>
    <h4 style={{ fontFamily:" Poppins", fontWeight: 600}}>What people are saying !</h4>

    <div className="row">
  <div className="col-sm-7">
    <div className="card" style={{backgroundColor: '#f5f5f5', border: "none" , height: "250px"}}>
      <div className="card-body">
        <h5 className="card-title">
        <Image
      src={p1} 
      className="img-fluid rounded-start img" alt="..." style={{width: "20px"}}   />
        </h5>
        <p className="card-text  text-justify" style={{fontSize: 14}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambledit to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
        <h5 className="card-title">
        <Image
      src={p2} 
      className="img-fluid rounded-start img" alt="..." style={{width: "20px", float : 'right'}}   />
        </h5>
        <h6><Image
      src={p3} 
      className="img-fluid rounded-start img" alt="..." style={{width: "40px", float : 'left', }}   />
      <span style={{margin: 10}}>Junaid Ahmad Khan <br/><small style={{margin: 10, fontSize: 12 , color: "gray"}}>Cleaning Expert</small></span>  
        
      </h6>

      </div>
    </div>
  </div>
  <div className="col-sm-5">
    <div className="card" style={{border: "none"}}>
      <div className="card-body">
      
      <Image
      src={Img} 
      className="img-fluid rounded-start img" alt="..."  />
       
      </div>
    </div>
  </div>
</div>


    </div>
    
    
    </>
  )
}

export default Testimonials