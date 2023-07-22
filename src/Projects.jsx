import React, { useState, useEffect, useRef } from "react";
import Project from "./Project";
import MenuItem from "./MenuItem";
import { TbHome2 } from "react-icons/tb";
import { FiArrowUpRight, FiTruck } from "react-icons/fi";
import { FiZap } from "react-icons/fi";

export default function Projects() {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const ref = useRef(null);


  return (
    <>
      <div className="project-container">
        <div className="title-projects">
          <h2>
            PROJECTS
          </h2>

          <h2 >
            -
          </h2>
          <div className="menu">
            <div>
              <section>
                <MenuItem
                  active={isIntersecting}
                  icon={<TbHome2 className="icon" />}
                  title={"Housing Hub"}
                  desc={"A marketplace for real estate"}
                  timing={1000}
                />
              </section>
              <section>
                <MenuItem
                  active={isIntersecting}
                  icon={<FiArrowUpRight className="icon" />}
                  title={"Level up"}
                  desc={"A social-media app for gamers"}
                  timing={1000}
                />
              </section>
              <section>
                <MenuItem
                  active={isIntersecting}
                  icon={<FiZap className="icon" />}
                  title={"Flash"}
                  desc={"Bug catcher for companies"}
                  timing={1000}
                />
              </section>
              <section>
                <MenuItem
                  active={isIntersecting}
                  icon={<FiTruck className="icon" />}
                  title={"Hidders"}
                  desc={"Ecommerce"}
                  timing={1000}
                />
              </section>
            </div>
          </div>
        </div>
        <div className="bordered-container-project">
          <section className="project-section" ref={ref}>
            <Project
              title={"Housing hub"}
              desc={
                "Housing hub is a real estate marketplace,where users can sell real estate and others related things."
              }
              images={[
                "https://github.com/de-Padua/HousingHub/raw/main/images/screencapture-localhost-5173-2023-07-18-01_46_31.png?raw=true",
                "https://github.com/de-Padua/HousingHub/raw/main/images/screencapture-localhost-5173-profile-2023-07-18-01_47_05.png?raw=true",
                "https://github.com/de-Padua/HousingHub/raw/main/images/screencapture-localhost-5173-criar-anuncio-2023-07-18-01_46_54.png?raw=true",
                "https://github.com/de-Padua/HousingHub/raw/main/images/screencapture-localhost-5173-2023-07-18-01_46_31.png?raw=true",
                "https://github.com/de-Padua/HousingHub/raw/main/images/screencapture-localhost-5173-2023-07-18-01_46_31.png?raw=true",
              ]}
            />
          </section>
          <section className="project-section" >
            <Project
              title={"Level up"}
              desc={
                "Level Up is a social media application that enables users to share their game status and game reviews with other users. Additionally, users have the ability to create their own lists of favorite games and completed games. In future updates, the application will incorporate features such as user following and direct messaging."
              }
              images={[
                "https://github.com/de-Padua/Portifolio/blob/main/src/projetos/level-up/1-2.PNG?raw=true",
                "https://github.com/de-Padua/Portifolio/blob/main/src/projetos/level-up/1-3.PNG?raw=true",
                "https://github.com/de-Padua/Portifolio/blob/main/src/projetos/level-up/3.PNG?raw=true",
                "https://github.com/de-Padua/Portifolio/blob/main/src/projetos/level-up/1-1.PNG?raw=true",
                "https://github.com/de-Padua/Portifolio/blob/main/src/projetos/level-up/1-2.PNG?raw=true",
                
              ]}
            />
          </section>
          <section className="project-section" >
            <Project
              title={"Bug tracker"}
              desc={
                "This project is designed to be a bug-tracking tool for teams to use on a daily basis. It is intended to be used on a private server by any company that desires it. However, for demonstration purposes, the project is now open-source, and anyone can register and use it."
              }
              images={[
                "https://github.com/de-Padua/BugTracker/raw/main/how-to-use/home.JPG?raw=true",
                "https://github.com/de-Padua/BugTracker/raw/main/how-to-use/closed-issues.JPG?raw=true",
                "https://github.com/de-Padua/BugTracker/raw/main/how-to-use/issues-detail.JPG?raw=true",
                "https://github.com/de-Padua/BugTracker/raw/main/how-to-use/feed.JPG?raw=true",
                "https://github.com/de-Padua/BugTracker/raw/main/how-to-use/home.JPG?raw=true",
                
              ]}
            />
          </section>
          <section className="project-section" >
            <Project
              title={"Hidders"}
              desc={
"It is a complete front-end for an e-commerce, which offers all the functionalities expected in an e-commerce environment, including the possibility of creating users, saving items in the users' shopping cart, filtering products by category and provide a personal page for each user"              }
              images={[
                "https://github.com/de-Padua/BugTracker/raw/main/how-to-use/home.JPG?raw=true",
                "https://github.com/de-Padua/BugTracker/raw/main/how-to-use/closed-issues.JPG?raw=true",
                "https://github.com/de-Padua/BugTracker/raw/main/how-to-use/issues-detail.JPG?raw=true",
                "https://github.com/de-Padua/BugTracker/raw/main/how-to-use/feed.JPG?raw=true",
                "https://github.com/de-Padua/BugTracker/raw/main/how-to-use/home.JPG?raw=true",
                
              ]}
            />
          </section>
        </div>
      </div>
    </>
  );
}
