import "./Testimonials.css";
import React, { useRef } from "react";
import nextIcon from "./../../assets/next-icon.png";
import backIcon from "./../../assets/back-icon.png";
import user1 from "./../../assets/user-1.png";
import user2 from "./../../assets/user-2.png";
import user3 from "./../../assets/user-3.png";
import user4 from "./../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
  const slideForward = () => {
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={nextIcon} alt="" className="nextBtn" onClick={slideForward} />
      <img src={backIcon} alt="" className="backBtn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={user1} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree ar Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to acadamic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={user2} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree ar Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to acadamic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={user3} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree ar Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to acadamic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={user4} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree ar Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to acadamic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
