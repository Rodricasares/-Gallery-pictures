import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-light ">
		<div className="container-fluid">

		  
		  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
			<ul className="navbar-nav me-auto mb-2 mb-lg-0">
			  <li className="nav-item">
				<a className="nav-link active" aria-current="page" href="#"></a>
			  </li>
			  <li className="nav-item">
				<a className="nav-link" href="#"></a>
			  </li>
			  <li className="nav-item">
				<a className="nav-link disabled">Disabled</a>
			  </li>
			</ul>
			
		  </div>
		</div>
	  </nav>
	);
};
