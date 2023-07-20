import React from "react";
import Project from "./Project";
import MenuItem from "./MenuItem";

export default function Projects() {
  return (
    <>
      <div className="project-container">
        <div className="title-projects">
          <h2 data-aos="fade-right" data-aos-offset="200" data-aos-delay="50">
            PROJECTS
          </h2>
          
          <h2 data-aos="fade-right" data-aos-offset="200" data-aos-delay="400">
            -
          </h2>
         <div className="menu">
          <div>
          <MenuItem number={"1 - "} title={"Housing Hub"} desc={"A marketplace for real estate"} />
          </div>
          
         </div>
        </div>
        <div className="bordered-container-project">
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    </>
  );
}
