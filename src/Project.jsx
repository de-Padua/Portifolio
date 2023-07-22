import React from "react";

export default function Project({title,desc,images}) {
  return (
    <div className="project">
      <div className="row-oc">
        <span className="icon-txt xc"></span>{" "}
        <span className="icon-txt xb"></span>{" "}
        <span className="icon-txt xv"></span>{" "}
    
      </div>

      <div className="title-project-1" >
        <h2>{ title ? title.toUpperCase() : ""}</h2>
      
      </div>
      <div className="desc-project">
        <p>
          {desc}
        </p>
      </div>
      <div className="bento-grid">
        <div className="image-project-1">
          <img src={images[0]} />
        </div>
        <div className="grid-1px">
         <div className="grid-2px">
         <div>
            <img src={images[1]} />
          </div>
          <div>
            <img src={images[2]} />
          </div>
          <div>
            <img src={images[3]} />
          </div>
          <div>
            <img src={images[4]}/>
          </div>
         </div>
        <div className="buttons-project">
          <button className="button-see">SEE PROJECT</button>
          <button className="button-see">SEE REPOSITORY</button>

        </div>
        </div>
      </div>
    </div>
  );
}
