import React from "react";
import Image from "next/image";
import style from "../styles/Discount_offers.module.css";
import img1 from '../public/images/Group 26771.png';
import img2 from '../public/images/Group 26772.png';
import img3 from '../public/images/Group 26774.png';

const Discount_offers = () => {
  return (
    <>
    <br/><br/>
      <div className="container">
        <h3 className={style.heading}>Discount offers</h3>
      <div className={style.pp}> 
  <div className="col">
    
  <div style={{width:"250px",height: "60px",borderRadius:"5px",backgroundColor: '#f5f5f5'}}>
    <Image src={img1} 
    alt="" 
    style={{width: "18px", height:"18px",marginTop: "1rem", margin: "0.3em"}}
    />

    <center><h6 className={style.head}>Save 15% on every order <p style={{fontSize:"12px",float : "left",color:"gray" }}>Get Now</p></h6></center>   
  </div>

  </div>
  <div className="col m1">
      <div  style={{width:"250px",height: "60px",borderRadius:"5px",backgroundColor: '#f5f5f5'}}> 
      <Image src={img2} 
    alt="" 
    style={{width: "18px", height:"18px",marginTop: "1rem", margin: "0.3em"}}
    />
      
      <center><h6 className={style.head}>15% off on noor card <p style={{fontSize:"12px",color:"gray"}}>15% off up  £300</p></h6></center> 
      </div>
  </div>
  <div className="col m1">
  <div  style={{width:"250px",height: "60px",borderRadius:"5px",backgroundColor: '#f5f5f5'}}> 
  <Image src={img2} 
    alt="" 
    style={{width: "18px", height:"18px",marginTop: "1rem", margin: "0.3em"}}
    />
  
  <center>
    <h6 className={style.head}>Save 15% on every order  <p style={{fontSize:"12px",color:"gray"}}>5% off up  £120</p> </h6>
   
   </center> 
  </div>
  </div>
  <div className="col m1">
      <div  style={{width:"250px",height: "60px",borderRadius:"5px",backgroundColor: '#f5f5f5'}}> 
      <Image src={img3} 
    alt="" 
    style={{width: "18px", height:"18px",marginTop: "1rem", margin: "0.3em"}}
    />
      <center><h6 className={style.head}>Save 15% on every order <p style={{fontSize:"12px",color:"gray"}}>Get up to £18 cashback</p> </h6></center> 
      </div>
   
  </div>
 </div>
</div>
    </>
  );
};

export default Discount_offers;
