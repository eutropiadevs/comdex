import React from "react";
import "./index.scss";
import { icons } from "../../utils/DataInt";
import Head from "../title";

const Icons = () => {
  return (
    <>
      <div className="icon-section">
        <Head title={'Explore The Ecosystem'} text={`Enroll for MBA for Working Professional from one of India's best Management Institution. Fast-track your career with MBA (WX) in Leadership & Strategy from NMIMS. Apply Today.`} />
        <div className="icon-section_main">
          {icons.map((item) => {
            return (
              <div key={item.id}>
                <div
                  className="single-icon"
                  style={{ width: `${item.width}`, height: `${item.height}` }}
                >
                 <img src={item.icon} alt='img'/>
                </div>
              </div>
            );
          })}
        </div>
        <div className="btn">
            <button>Explore</button>
        </div>
      </div>
    </>
  );
};

export default Icons;
