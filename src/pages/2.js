import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./2.css";
import "./unicons.css";
import "./test.js";

const HomePage = () => (
  <body>
  <!-- partial:index.partial.html -->
  <div class="hero-center-section">
      <div class="left-text">nature</div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="img-wrap">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/nature.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hero-center-section">
      <div class="left-text">travel</div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="img-wrap">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/travel.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hero-center-section">
      <div class="left-text">fashion</div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="img-wrap">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/fashion.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hero-center-section">
      <div class="left-text">animals</div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="img-wrap">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/animals.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hero-center-section">
      <div class="left-text">business</div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="img-wrap">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/business.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hero-center-section">
      <div class="left-text">art</div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="img-wrap">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/art.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="section padding-top-bottom over-hide z-bigger">
      <ul class="slide-buttons">
        <li class="">
          <a href="#0" class="hover-target" data-hover="nature">nature</a>
        </li>
        <li class="">
          <a href="#0" class="hover-target" class="hover-target" data-hover="travel">travel</a>
        </li>
        <li class="">
          <a href="#0" class="hover-target" data-hover="fashion">fashion</a>
        </li>
        <li class="">
          <a href="#0" class="hover-target" data-hover="animals">animals</a>
        </li>
        <li class="">
          <a href="#0" class="hover-target" data-hover="business">business</a>
        </li>
        <li class="">
          <a href="#0" class="hover-target" data-hover="art">art</a>
        </li>
      </ul>
    </div>

    <!-- Page cursor
    ================================================== -->

    <div class='cursor' id="cursor"></div>
    <div class='cursor2' id="cursor2"></div>
    <div class='cursor3' id="cursor3"></div>

  <!-- partial -->
    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script><script  src="./script.js"></script>

  </body>
  );

export default HomePage;
