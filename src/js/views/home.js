import React from "react";
import rigoImage from "../../img/perfil.jpg";
import "../../styles/home.css";
import { About } from "../component/about";
import { Header } from "../component/header";
import { Project } from "../component/project";
import { Skill } from "../component/skill";
import { Contact } from "../component/contact";
import { Nav } from "../component/nav";
export const Home = () => (
  <div className="row justify-content-center mb-5">
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Bowlby+One&family=NTR&family=Short+Stack&display=swap" rel="stylesheet"/>


   <div className="container ">
      <Header />
    </div>
    <div className="container-fluid about">
      <About />
    </div>
     <div className="container-fluid project">
      <Project />
    </div>
    <div className="container-fluid skill">
      <Skill />
    </div>
    <div className="container-fluid contact">
      <Contact />
    </div>
  </div>
);
