import React from "react";
import style from "../styles/expert.module.css";
import Image from "next/image";

// import img3 from "../public/images/img2.png";
import img8 from "../public/images/img8.png";
import img5 from "../public/images/img5.png";
import img7 from "../public/images/img7.png";
import img6 from "../public/images/img6.png";
const Why_expert = () => {
  return (
    <>
      <div className="text-center">
        <h2 className={style.expert_heading}>
          Why Expert Laser Hair Removal Is Ideal
        </h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="row justify-content-center">
              <div className="col-md-4">
                <Image
                  src={img8}
                  alt="laser"
                  className="img-fluid img-responsive"
                  style={{ height: 170, width: 170 }}
                />
              </div>
              <div className="col-md-8">
                <h2 className={style.grid_heading}>Be Ready. Always.</h2>
                <p className={style.grid_para}>
                  Last minute appointments and the waxing-waddle will be a
                  distant memory. You’ll always be prepared with smooth skin
                  after laser hair removal.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="row justify-content-center">
              <div className="col-md-4">
                <Image
                  src={img5}
                  alt="laser"
                  className="img-fluid img-responsive"
                  style={{ height: 170, width: 170 }}
                />
              </div>
              <div className="col-md-8">
                <h2 className={style.grid_heading}>Be Ready. Always.</h2>
                <p className={style.grid_para}>
                  Last minute appointments and the waxing-waddle will be a
                  distant memory. You’ll always be prepared with smooth skin
                  after laser hair removal.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* ==========row 2================ */}
        <div className="row mt-5">
          <div className="col-md-6 col-sm-12">
            <div className="row justify-content-center">
              <div className="col-md-4">
                <Image
                  src={img7}
                  alt="laser"
                  className="img-fluid img-responsive"
                  style={{ height: 170, width: 170 }}
                />
              </div>
              <div className="col-md-8">
                <h2 className={style.grid_heading}>Be Ready. Always.</h2>
                <p className={style.grid_para}>
                  Last minute appointments and the waxing-waddle will be a
                  distant memory. You’ll always be prepared with smooth skin
                  after laser hair removal.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="row justify-content-center">
              <div className="col-md-4">
                <Image
                  src={img6}
                  alt="laser"
                  className="img-fluid img-responsive"
                  style={{ height: 170, width: 170 }}
                />
              </div>
              <div className="col-md-8">
                <h2 className={style.grid_heading}>Be Ready. Always.</h2>
                <p className={style.grid_para}>
                  Last minute appointments and the waxing-waddle will be a
                  distant memory. You’ll always be prepared with smooth skin
                  after laser hair removal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Why_expert;
