import React from "react";
import rigoImage from "../../img/perfil.jpg";
import "../../styles/home.css";

export const About = () => (
  <div className="about container ">
    <div className="row ">
      <div className="col text-secondary">
        <div className="row mt-5 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="120"
            fill="currentColor"
            className="bi bi-person icon"
            viewBox="0 0 16 16"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
          </svg>
        </div>
        <h1 className="title  fw-bold mb-3">Perfil</h1>
        Mi “Hola Mundo ! ” Comenzó en septiembre de 2009 en la que realice un
        ciclo '' F.P. Micro Sistemas y redes.” el cual me aportó mucho a nivel
        hardware y mis primeros pasos en esto de la programación con HTML, CSS,
        apache, MySQL, Joomla!, instalación y mantenimiento de servidores,
        protocolos, Windows Server 2003 con Active directory entre otras. Lo
        cual tras muchos años sin terminar de ejercer como profesional en el
        sector, decidí dar el paso de intentar profesionalizarme en el sector
        IT. Entonces decidí formar parte de esta gran familia llamada 4geeks
        Academy. En la que me he formado en tecnologías y lenguajes como React,
        JS, HTML5, CSS, Boostrap, Flask, SQLAlchemy y Python y trabajando con
        herramientas como github, gitpod, Trello, slack entre otras, para
        conseguir mi objetivo de ser un técnico Full Stack Developer.
      </div>
    </div>
  </div>
);
