import React from "react";
import images from "./images";
import "../../styles/slider.css";
import { motion } from "framer-motion";

export const Slider = () => (
  <div className="container ">

    <div className="row ">
      <div className="col text-secondary">
        <div className="row mt-5 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            fill="currentColor"
            className="bi bi-images"
            viewBox="0 0 16 16"
          >
            <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
            <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z" />
          </svg>
        </div>
        <h1 className="title text-center fw-bold my-3">Gallery pictures</h1>
        <div className="row ">
          <motion.div className="slider-container ">
            <motion.div
              className="slider"
              drag="x"
              dragConstraints={{ right: 0, left: -2800 }}
            >
              {images.map((image, index) => (
                <motion.div className="item mt-5" key={index}>
                  <img src={image} alt="" className="shadow  mb-5 bg-body rounded" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  </div>
);
