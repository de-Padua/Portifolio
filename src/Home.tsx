import React, { useState, useEffect, useRef } from "react";
import Menu from "./Menu";
import Spline from '@splinetool/react-spline';

export default function Home() {
  const ref = useRef(null);
  const [menu, setMenu] = useState(false);
  const [isOb, setIsOb] = useState(false);


  


  return (
    <>
      <div className="home-3d"  ref={ref}>
      <Spline scene="https://prod.spline.design/5LWpxOYo9TgVQ5ul/scene.splinecode" />

      </div>
      <div className="main-container-home">
        <div className="ctn home-container-top">
          <div className="navbar">
            <div className="logo">
              <p>tonixt.co</p>
            </div>
            <div className="links">
              <Menu />
            </div>
          </div>
        </div>
        <div className="ctn home-container-bottom">
          <div className="name-title">
            <p>CREATIVE</p>
            <p>FRONT END DEVELOPER</p>
          </div>
          <div className="skill-home">
            <p>REACT</p>
            <p>TYPESCRIPT</p>
            <p>JAVASCRIPT</p>
            <p>NEXT</p>
          </div>
        </div>
      </div>
    </>
  );
}
