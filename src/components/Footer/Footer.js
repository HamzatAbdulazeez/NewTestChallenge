import React from 'react';
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div class="content">
        <div class="top">
          <div class="logo-details">
            <h4>
              Bandage
            </h4>
          </div>
          <div class="media-icons">
            <Link to=""><i class="fab fa-facebook-f"></i></Link>
            <Link to=""><i class="fab fa-twitter"></i></Link>
            <Link to=""><i class="fab fa-instagram"></i></Link>
            <Link to=""><i class="fab fa-linkedin-in"></i></Link>
            <Link to=""><i class="fab fa-youtube"></i></Link>
          </div>
        </div>
        <div class="link-boxes">
          <ul class="box">
            <li class="link_name">Company Info</li>
            <li>
              <Link to="">Home</Link>
            </li>
            <li>
              <Link to="">About us</Link>
            </li>
            <li>
              <Link to="">Carrier</Link>
            </li>
            <li>
              <Link to="">We are hiring</Link>
            </li>
            <li>
              <Link to="">Contact Us</Link>
            </li>
          </ul>
          <ul class="box">
            <li class="link_name">Legal</li>
            <li>
              <Link to="">Home</Link>
            </li>
            <li>
              <Link to="">About us</Link>
            </li>
            <li>
              <Link to="">Blog</Link>
            </li>
            <li>
              <Link to="">We are hiring</Link>
            </li>
            <li>
              <Link to="">Contact Us</Link>
            </li>
          </ul>
          <ul class="box">
            <li class="link_name">Features</li>
            <li>
              <Link to="">Business Marketing</Link>
            </li>
            <li>
              <Link to="">User Analytic</Link>
            </li>
            <li>
              <Link to="">Live Chat</Link>
            </li>
            <li>
              <Link to="">Unlimited Support</Link>
            </li>
          </ul>
          <ul class="box">
            <li class="link_name">Resources</li>
            <li>
              <Link to="">IOS & Android</Link>
            </li>
            <li>
              <Link to="">Watch a Demo</Link>
            </li>
            <li>
              <Link to="">Customers</Link>
            </li>
            <li>
              <Link to="">API</Link>
            </li>
          </ul>
          <ul class="box input-box">

            <li class="link_name">Subscribe</li>
            <form>
              <li><input type="text" required placeholder="Enter your email"></input></li>
              <li><input type="button" value="Subscribe"></input></li>
            </form>
          </ul>
        </div>
      </div>
      <div class="bottom-details">
        <div class="bottom_text">
          <p class="copyright_text">Copyright © 2024 Made With Love By Finland All Right Reserved </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer