import React from 'react'
import Image from 'next/image'
import Logo from '../public/images/Expert Logo web.png'
import insta from '../public/images/Group 3276.png'
import twit from '../public/images/Group 3279.png'
import pin from '../public/images/Group 3281.png'
import yt from '../public/images/Group 3282.png'
import linkln from '../public/images/Group 3285.png'


const Footer = () => {
  return (
    <>
      <div className='container-fluid'>

        <>
          {/* Footer */}
          <footer className=" text-center text-white " style={{ backgroundColor: "#f5f5f5" }}  >
            {/* Grid container */}
            <div className="container p-4">

              {/* Section: Form */}
              <section className="">
                <form action="">
                  {/*Grid row*/}
                  <div className="row d-flex justify-content-start">
                    {/*Grid column*/}
                    <div className="col-auto">
                      <p className="pt-0">
                        <strong style={{ color: "black" }}>
                          <Image src={Logo}
                            alt='logo' style={{ width: "140px", height: "60px" }} />
                        </strong>
                      </p>
                    </div>
                    {/*Grid column*/}
                    {/*Grid column*/}
                    <div className="col-md-5 col-12">
                      {/* Email input */}

                    </div>

                  </div>
                  {/*Grid row*/}
                </form>
              </section>
              {/* Section: Form */}
              {/* Section: Text */}
              <section className="mb-4">
                <p style={{ textAlign: "justify", color: "black" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  distinctio earum repellat quaerat voluptatibus placeat nam, commodi
                  optio pariatur est quia magnam eum harum corrupti dicta, aliquam sequi
                  voluptate quas.
                </p>
              </section>
              {/* Section: Text */}
              {/* Section: Links */}
              <section className="">
                {/*Grid row*/}
                <div className="row">
                  {/*Grid column*/}
                  <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase text-black text-start">Experts</h5>
                    <ul className="list-unstyled mb-0 text-start">
                      <li>
                        <a href="#!" className="text-black" style={{textDecoration: "none", textTransform: "capitalize"}}>
                          obscure
                        </a>
                      </li>
                      <li>
                      <br/>
                        <a href="#!" className="text-black" style={{textDecoration: "none", textTransform: "capitalize"}}>
                          Lorem Ipsum
                        </a>
                      </li>
                      <li>
                      <br/>
                        <a href="#!" className="text-black" style={{textDecoration: "none", textTransform: "capitalize"}}>
                          predefined
                        </a>
                      </li>
                      <li>
                        <br/>
                        <a href="#!" className="text-black" style={{textDecoration: "none", textTransform: "capitalize"}}>
                          structures
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/*Grid column*/}
                  {/*Grid column*/}
                  <div className="col-lg-3 col-md-6 mb-4 mb-md-0" style={{ float: "left" }}>
                    <h5 className="text-uppercase text-black text-start">Services</h5>
                    <ul className="list-unstyled mb-0 text-start">
                      <li>
                        <a href="#!" className="text-black" style={{textDecoration: "none", textTransform: "capitalize"}}>
                          obscure
                        </a>
                      </li>
                      <li>
                      <br/>
                        <a href="#!" className="text-black" style={{textDecoration: "none", textTransform: "capitalize"}}>
                          Lorem Ipsum
                        </a>
                      </li>
                      <li>
                      <br/>
                        <a href="#!" className="text-black" style={{textDecoration: "none", textTransform: "capitalize"}}>
                          predefined
                        </a>
                      </li>
                      <li>
                      <br/>
                        <a href="#!" className="text-black" style={{textDecoration: "none", textTransform: "capitalize"}}>
                          structures
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/*Grid column*/}
                  {/*Grid column*/}
                  <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase text-black text-start">Experts</h5>
                    <ul className="list-unstyled mb-0 text-start">
                      <li>
                        <a href="#!" className="text-black" style={{textDecoration: "none", textTransform: "capitalize"}}>
                          obscure
                        </a>
                      </li>
                      <li>
                      <br/>
                        <a href="#!" className="text-black" style={{textDecoration: "none", textTransform: "capitalize"}}>
                          Lorem Ipsum
                        </a>
                      </li>
                      <li>
                      <br/>
                        <a href="#!" className="text-black" style={{textDecoration: "none", textTransform: "capitalize"}}>
                          predefined
                        </a>
                      </li>
                      <li>
                      <br/>
                        <a href="#!" className="text-black" style={{textDecoration: "none", textTransform: "capitalize"}}>
                          structures
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/*Grid column*/}
                  {/*Grid column*/}
                  <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase text-start text-black" >Social</h5>
                    <ul className="list-unstyled mb-0">
                      <li>
                        <a href="#!" className="text-white">
                          <div className="form-outline form-white mb-4">
                            <label className="form-label" style={{ float: "left", color: "black" }} htmlFor="form5Example21">
                              Email address
                            </label>
                            <div className="input-group mb-3">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Type email here"
                                aria-label="Recipient's username"
                                aria-describedby="button-addon2"
                              />
                              <button
                                className="btn btn-outline-danger"
                                type="button"
                                id="button-addon2"
                              >
                                subscribe
                              </button>
                            </div>




                          </div>
                        </a>

                      </li>
                      {/* Section: Social media */}
                      <section className="mb-4">
                        {/* Facebook */}
                        <a
                          className="btn btn-outline-danger btn-floating m-1"
                          href="#!"
                          role="button"
                        >
                          <Image src={twit} alt='' style={{width: "17px", height: "17px"}}/>
                        </a>
                        {/* Twitter */}
                        <a
                          className="btn btn-outline-danger btn-floating m-1"
                          href="#!"
                          role="button"
                        >
                      <Image src={yt} alt='' style={{width: "17px", height: "17px"}}/>
                        </a>
                        {/* Google */}
                        <a
                          className="btn btn-outline-danger btn-floating m-1"
                          href="#!"
                          role="button"
                        >
                          <Image src={pin} alt='' style={{width: "17px", height: "17px"}}/>
                        </a>
                        {/* Instagram */}
                        <a
                          className="btn btn-outline-danger btn-floating m-1"
                          href="#!"
                          role="button"
                        >
                         <Image src={insta} alt='' style={{width: "17px", height: "17px"}}/>
                        </a>
                        {/* Linkedin */}
                        <a
                          className="btn btn-outline-danger btn-floating m-1"
                          href="#!"
                          role="button"
                        >
                        <Image src={linkln} alt='' style={{width: "17px", height: "17px"}}/>
                        </a>
                        {/* Github */}
                        {/* <a
                          className="btn btn-outline-dark btn-floating m-1"
                          href="#!"
                          role="button"
                        >
                          <i className="fab fa-github" />
                        </a> */}
                      </section>
                      {/* Section: Social media */}
                    </ul>
                  </div>
                  {/*Grid column*/}
                </div>
                {/*Grid row*/}
              </section>
              {/* Section: Links */}
            </div>
            {/* Grid container */}
            {/* Copyright */}
            <div
              className="text-center p-2 text-black"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            >
              <div className='container'>
                <p style={{ textAlign: "start" }}> <br/> <i>© 2020:selteq.LTD</i>
                </p></div>
            </div>
            {/* Copyright */}
          </footer>

          {/* Footer */}

        </>

      </div>

    </>
  )
}

export default Footer