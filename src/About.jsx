import React from "react";

export default function About() {
  return (
    <div className="skill-main-container">
      <div className="about-desc">
        <div className="righ-div">
          <h2>So,who am I ?</h2>

          <svg
            className="svg-1"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:svgjs="http://svgjs.dev/svgjs"
            viewBox="0 0 800 800"
          >
            <g
              stroke-width="1"
              stroke="hsl(0, 0%, 0%)"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-dasharray="33.5 18"
              transform="matrix(0.838670567945424,0.5446390350150271,-0.5446390350150271,0.838670567945424,191.38738682784117,-96.32384118418042)"
            >
              <path
                d="M194.61600598692894 193.54458618164062Q184.61600598692894 634.5445861816406 605.6160059869289 604.5445861816406 "
                marker-end="url(#SvgjsMarker7631)"
              ></path>
            </g>
            <defs>
              <marker
                markerWidth="33"
                markerHeight="33"
                refX="16.5"
                refY="16.5"
                viewBox="0 0 33 33"
                orient="auto"
                id="SvgjsMarker7631"
              >
                <polygon
                  points="0,33 0,0 33,16.5"
                  fill="hsl(0, 0%, 0%)"
                ></polygon>
              </marker>
            </defs>
          </svg>
        </div>
        <div className="div-img">
          <img src="https://i.pinimg.com/564x/9e/fb/81/9efb81966bb3eb79450d89cbd9825ccf.jpg" />
          <p>
            My name is Antônio de Pádua, and I am a front-end developer with
            strong knowledge in languages like JavaScript and Typescript, I also
            have knowledge on tredding frameworks like Next.js and React . I
            have been working on creating interactive and responsive user
            interfaces for websites and web applications for 1 year. My goal is
            to create exceptional digital experiences for users by providing
            effective solutions in terms of design and functionality.
          </p>
          <p>
            If you're interest in get to know me more in deepth,you can reach me
            out on my{" "}
            <a
              target="_blank"
              href="https://www.linkedin.com/in/ant%C3%B4nio-de-p%C3%A1dua-36a530254/"
            >
              Linkedin{" "}
            </a>
          </p>
        </div>
      </div>
      <div className="title-work-stack">
        <h2>This is my current work stack</h2>
      </div>
      <div className="images-skills">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg" />
      </div>
    </div>
  );
}
