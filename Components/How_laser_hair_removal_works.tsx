import React from "react";
import style from "../styles/laser-hair_removal.module.css";
import Image from "next/image";
import img1 from "../public/images/img2.png";
import img2 from "../public/images/img3.png";
import img3 from "../public/images/img4.png";

const How_laser_hair_removal_works = () => {
  return (
    <>
      <div className={style.container_section}>
        <div className="container">
          <h2 className={style.why_hair_removal}>
            How Laser Hair Removal Works
          </h2>
          <p className={style.details_text}>
            The secret lies in the clinically-proven technology that targets and
            destroys cells responsible for hair growth without harming
            surrounding skin. It's a simple approach to permanent hair reduction
            that's fast, easy and FDA cleared. Best of all, treatment sessions
            can take just minutes.
            <br />
            ​Light-based hair removal can work for almost everyone, for all skin
            colors and most hair types. For men, laser hair removal is great for
            permanently reducing chest and back hair for the cleaner, younger
            look you desire. For women, it's a great alternative to creams and
            waxing for reducing hair on the face and body-including delicate
            areas around the lips and the bikini line.
          </p>
        </div>
        <div className="text-center">
          <div className="row justify-content-center m-auto">
            <div className="col-md-4">
              <Image
                src={img1}
                alt="laser"
                className="img-fluid img-responsive style.image_style"
                
                style={{ height: 170, width: 200 }}
              />
              <p className={style.image_text}>
                Lasers target hair at the root.
              </p>
            </div>
            <div className="col-md-4">
              <Image src={img2} alt="laser" className={style.image_style} />
              <p className={style.image_text}>
                The root is destroyed so hair never grows back.
              </p>
            </div>
            <div className="col-md-4">
              <Image src={img3} alt="laser" className={style.image_style} />
              <p className={style.image_text}>Hair is gone forever.</p>
            </div>
          </div>
        </div>
        


      </div>
    </>
  );
};

export default How_laser_hair_removal_works;
