import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-row">
          <div className="col all-media">
            <h2>Get in touch</h2>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <div className="media">
              <a href="">
                <FaFacebook />
              </a>
              <a href="">
                <FaInstagram />
              </a>
              <a href="">
                <FaXTwitter />
              </a>
            </div>
          </div>
          <div className="col">
            <h2>company info</h2>
            <a href="">about us</a>
            <a href="">carrier</a>
            <a href="">we are hiring</a>
            <a href="">blog</a>
          </div>
          <div className="col">
            <h2>features</h2>
            <a href="">about us</a>
            <a href="">carrier</a>
            <a href="">we are hiring</a>
            <a href="">blog</a>
          </div>
          <div className="col">
            <h2>ressources</h2>
            <a href="">about us</a>
            <a href="">carrier</a>
            <a href="">we are hiring</a>
            <a href="">blog</a>
          </div>
        </div>
      </div>
      <p className=" copyright">
        ©2024 copyright || made by developper{" "}
        <span className="text-primary">Ayoub hamil-eddin</span>
      </p>
    </footer>
  );
}
