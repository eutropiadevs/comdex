import React from "react";
import "./index.scss";
import large from "../../assets/img/FARM_MAIN PAGE 3.png";
import small from "../../assets/img/Group 632963.png";

const Row = () => {
  return (
    <>
      <div className="row-section">
        <div className="row-section_main">
          <div className="row-section_main-first">
            <div className="img-container">
             
                <img src={large} alt="img" />
                <img className="img-small" src={small} alt="img" />
             
            </div>
          </div>
          <div className="row-section_main-second">
            <h2>cSwap</h2>
            <p>
              Enroll for MBA for Working Professional from one of India's best
              Management Institution. Fast-track your career with MBA (WX) in
              Leadership & Strategy from NMIMS. Apply Today.
            </p>

            <div className="btn-container">
              <button>Launch App</button>
              <button className="diff-btn">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Row;
