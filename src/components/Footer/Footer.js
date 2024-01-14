import React from 'react';
import "./Footer.css";

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
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <a href="#"><i class="fab fa-youtube"></i></a>
          </div>
        </div>
        <div class="link-boxes">
          <ul class="box">
            <li class="link_name">Company Info</li>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Carrier</a></li>
            <li><a href="#">We are hiring</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
          <ul class="box">
            <li class="link_name">Legal</li>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Carrier</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">We are hiring</a></li>
          </ul>
          <ul class="box">
            <li class="link_name">Features</li>
            <li><a href="#"> Business Marketing</a></li>
            <li><a href="#">User Analytic</a></li>
            <li><a href="#">Live Chat</a></li>
            <li><a href="#">Unlimited Support</a></li>
          </ul>
          <ul class="box">
            <li class="link_name">Resources</li>
            <li><a href="#"> IOS & Android</a></li>
            <li><a href="#">Watch a Demo</a></li>
            <li><a href="#">Customers</a></li>
            <li><a href="#">
              API</a></li>
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