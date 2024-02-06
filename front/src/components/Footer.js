import React from "react";
import "../style/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <a href="/" className="logo d-flex align-items-center">
          <p>K-DS</p>
        </a>
        <div className="row gy-5">
          <div className="col-lg-6 col-md-12 footer-info">
            <div className="team-info">
              <h4>Contact Me</h4>
              <div className="team">
                <span className="team-name">박준형 : </span>
                <span className="team-email">xxxx@naver.com</span>
                <span className="team-github"><a href="https://github.com/Frog-Slayer"><ion-icon name="logo-github"></ion-icon></a></span>
              </div>
              <div className='team'>tel : 010-xxxx-xxxx</div>
            </div>
          </div>

          



          <div className="col-lg-6 col-md-12 footer-work-space">
            <h4>Work Space</h4>
            <div className="work-space-info"><span>(06707) 서울 서초구 효령로 176, 02-523-7029</span></div>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="copyleft">
            COPYRIGHT 2018 kt ds ALL RIGHTS RESERVED.
        </div>
      </div>
    </div>
  );
}

export default Footer;