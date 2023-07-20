import React, { useState,useEffect } from "react";
import Menu from "./Menu";


export default function Home() {
  const [menu, setMenu] = useState(false);
    
  
  return (

    <>
      <div className="home-3d">
        <spline-viewer url="https://prod.spline.design/5LWpxOYo9TgVQ5ul/scene.splinecode"></spline-viewer>
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
