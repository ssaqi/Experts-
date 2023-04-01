import React from "react";
import Image from "next/image";
import img1 from "../public/images/img1.png";
import style from "../styles/hero.module.css";
import { CiClock2 } from "react-icons/ci";
import {BsCart3} from "react-icons/bs"
const Hero_section = () => {
  return (
    <>
    <br/>
      <div className="hero-section">
        <div className="container">
          <div className="row  align-items-center justify-content-center">
            <div className="col-md-5 ">
              <h2 className={style.Sunspots_Freckle_Removal}>
                Sunspots Freckle Removal
              </h2>
              <p className={style.sunspots_details}>
                Be it party, bridal, mayun, wedding , casual, engagement makeup,
                or for any other occasion, no one can beautify you better than
                Expert’s makeup artists. We are known to provide matched makeup
                services at the comfort of your home.
              </p>
              <h2 className={style.sunspot_price}> £4500</h2>
              <div>
                <CiClock2
                  size={21}
                  color="#ccd2d8"
                  style={{ marginBottom: "4px" }}
                />
                <span className={style.minutes}>20 Minutes</span>
              </div>
              <div className="button_container mt-3">
                <button className={style.book}>Book Now</button>
                <button className={style.consultation}>Free Consultation</button>
                <button className={style.icon}><BsCart3 size={20}/></button>
              </div>
            </div>
            <div className="col-md-7">
              <Image
                src={img1}
                className="img-fluid img-responsive"
                alt="Alt Text"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero_section;
