import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
export default function Header() {
const [open, setopen] = useState(false);
  return (
    <header id="header">
      <nav className="navbar">
        <a href="" className="logo">
          Educa-Web
        </a>
        <ul className="menu">
          <li>
            <a href="">Homme</a>
          </li>
          <li>
            <a href="">product</a>
          </li>
          <li>
            <a href="">pricing</a>
          </li>

          <li>
            <a href="">contact</a>
          </li>
        </ul>
        <div className="account">
          <a href="">login</a>
          <a href="" className="btn-join">
            join us
            <FaArrowRight />
          </a>
        </div>
        <div className="navbar-toggle" onClick={()=>setopen(!open)}>
          <i class="fa-solid fa-bars"></i>
        </div>
        <div className={`dropdown ${open?'open':''}`} >
          <ul className="dropdown-menu">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">product</a>
            </li>
            <li>
              <a href="">pricing</a>
            </li>

            <li>
              <a href="">contact</a>
            </li>
            <div className="dropdown-account">
              <a href="">Login</a>
              <a href="" className="btn-join">
                join us
                <FaArrowRight />
              </a>
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
}
