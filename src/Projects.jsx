import React, { useState, useEffect, useRef } from "react";
import Project from "./Project";
import MenuItem from "./MenuItem";
import { TbHome2 } from "react-icons/tb";

export default function Projects() {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const ref = useRef(null);

  useEffect(() => {

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    },{ rootMargin: "-300px" });
    observer.observe(ref.current);
    console.log(isIntersecting);

    return () => observer.disconnect();

  },[])

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
              <section >
                <MenuItem
                  active={isIntersecting}
                  icon={<TbHome2 className="icon" />}
                  title={"Housing Hub"}
                  desc={"A marketplace for real estate"}
                />
              </section>
            </div>
          </div>
        </div>
        <div className="bordered-container-project">
          <section className="project-section" ref={ref}
>
          <Project  />
          </section>
          <section className="project-section"  >
          <Project  />
          </section>
          <section className="project-section"  >
          <Project  />
          </section>
          <section className="project-section"  >
          <Project  />
          </section>
          <section className="project-section"  >
          <Project  />
          </section>
        </div>
      </div>
    </>
  );
}
