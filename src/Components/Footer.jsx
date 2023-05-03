import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="row contaainer topfooter">
        <div className="col-lg-6 col-md-6 col-sm-6">
          <img
            src="./images/yellowlogo.png"
            alt="logo"
            title="logo"
            className="mb-4"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat.
          </p>
          <p>
            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
            suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis
            autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat, vel illum dolore eu feugiat nulla. Lorem ipsum
            dolor sit amet, consectetuer adipiscing elit, sed dia
          </p>
          <p>
            m nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
            erat volutpat. Ut wisi enim ad minim veniam, quis nostrud{" "}
          </p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6">
          <p className="fw-bold">Subscribe to our newsletter</p>
          <div className="d-flex Subscribe aling-items-center">
            <input
              className="form-control"
              type="mail"
              placeholder="Enter Your Mail"
            />
            <button className="d-flex align-items-center Subscribebtn justify-content-around fw-bold mx-2">
              Subscribe <img src="./images/send.png" alt="send" title="send" />
            </button>
          </div>
          <div className="row justify-content-between mt-4">
            <div className="col-lg-6 d-flex flex-column ">
              <a className="footerlink mt-3" href="#">
                About Us
              </a>
              <a className="footerlink mt-3" href="#">
                Contact Us
              </a>
              <a className="footerlink mt-3" href="#">
                Track Order
              </a>
              <a className="footerlink mt-3" href="#">
                Terms & Conditions
              </a>
              <a className="footerlink mt-3" href="#">
                Privacy Policy
              </a>
              <a className="footerlink mt-3" href="#">
                Sell With Us
              </a>
              <a className="footerlink mt-3" href="#">
                Shipping And Returns
              </a>
            </div>
            <div className="col-lg-6">
              <div className="social d-flex align-items-center mt-3">
                <img
                  src="./images/facebook.png"
                  alt="facebook"
                  title="facebook"
                />
                <a className="mb-0 mx-2">/YESHTERY</a>
              </div>
              <div className="social d-flex align-items-center  mt-3">
                <img
                  src="/images/linkedin.png"
                  alt="linkedin"
                  title="linkedin"
                />
                <a className="mb-0 mx-2">/YESHTERY</a>
              </div>
              <div className="social d-flex align-items-center  mt-3">
                <img
                  src="./images/instgram.png"
                  alt="instgram"
                  title="instgram"
                />
                <a className="mb-0 mx-2">/YESHTERY</a>
              </div>
              <div className="social d-flex align-items-center  mt-3">
                <img src="./images/twitter.png" alt="twitter" title="twitter" />
                <a className="mb-0 mx-2">/YESHTERY</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" contaainer">
        <div className="copy-right d-flex justify-content-between align-items-center mt-5">
          <p className="mb-0">© 2021 yeshtery, all rights reserved.</p>
          <div className="d-flex">
            <img
              src="./images/copy1.png"
              alt="copy1"
              title="copy1"
              className="mb-0 mx-2"
            />
            <img
              src="./images/copy2.png"
              alt="copy2"
              title="copy2"
              className="mb-0 mx-2"
            />
            <img
              src="./images/copy3.png"
              alt="copy3"
              title="copy3"
              className="mb-0 mx-2"
            />
          </div>
          <div className="d-flex align-items-center">
            <p className="mb-0 mx-2"> Powered By</p>
            <img src="./images/copy4.png" alt="copy4" title="copy4" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
