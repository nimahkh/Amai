import React from "react";
import { Helmet } from "react-helmet";
import favicon from "../static/logo/favicon.png";
import { Link } from "gatsby"
import "../styles/unicons.css"
import $ from 'jquery';

const HomePage = () => (
    <div>
      <Helmet>
      <title>Wouter</title>
      <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css' />
      <link rel="stylesheet" href="/style.css" />
      </Helmet>

      <body>
      <div class="hero-center-section">
      		<div class="left-text">wouter</div>
      		<div class="container">
      			<div class="row justify-content-center">
      				<div class="col-md-8">
      					<div class="img-wrap">
      						<img src="./images/rotterdam.jpg" alt="Rotterdam" />
      					</div>
      				</div>
      			</div>
      		</div>
      	</div>
      	<div class="hero-center-section">
      		<div class="left-text">blog</div>
      		<div class="container">
      			<div class="row justify-content-center">
      				<div class="col-md-8">
      					<div class="img-wrap">
      						<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/fashion.jpg" alt="" />
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
      						<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/animals.jpg" alt="" />
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
      						<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/business.jpg" alt="" />
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
      						<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/art.jpg" alt="" />
      					</div>
      				</div>
      			</div>
      		</div>
      	</div>


      	<div class="section padding-top-bottom over-hide z-bigger">
      		<ul class="slide-buttons">
      			<li class="">
      				<a class="hover-target" data-hover="wouter">wouter</a>
      			</li>
      			<li class="">
      				<Link to="/blog" class="hover-target" data-hover="blog">blog</Link>
      			</li>
      			<li class="">
      				<a href="#" class="hover-target" data-hover="animals">animals</a>
      			</li>
      			<li class="">
      				<a href="#" class="hover-target" data-hover="business">business</a>
      			</li>
      			<li class="">
      				<a href="#" class="hover-target" data-hover="art">art</a>
      			</li>
      		</ul>
      	</div>

      	<div class='cursor' id="cursor"></div>
      	<div class='cursor2' id="cursor2"></div>
      	<div class='cursor3' id="cursor3"></div>

      </body>
    </div>
  );

  (function($) { "use strict";

  	$(document).ready(function() {

  		$('.slide-buttons li:nth-child(1)').on('mouseenter', function() {
  			$('.slide-buttons li.active').removeClass('active');
  			$('.hero-center-section.show').removeClass("show");
  			$('.hero-center-section:nth-child(1)').addClass("show");
  			$('.slide-buttons li:nth-child(1)').addClass('active');
  		})
  		$('.slide-buttons li:nth-child(2)').on('mouseenter', function() {
  			$('.slide-buttons li.active').removeClass('active');
  			$('.hero-center-section.show').removeClass("show");
  			$('.hero-center-section:nth-child(2)').addClass("show");
  			$('.slide-buttons li:nth-child(2)').addClass('active');
  		})
  		$('.slide-buttons li:nth-child(3)').on('mouseenter', function() {
  			$('.slide-buttons li.active').removeClass('active');
  			$('.hero-center-section.show').removeClass("show");
  			$('.hero-center-section:nth-child(3)').addClass("show");
  			$('.slide-buttons li:nth-child(3)').addClass('active');
  		})
  		$('.slide-buttons li:nth-child(4)').on('mouseenter', function() {
  			$('.slide-buttons li.active').removeClass('active');
  			$('.hero-center-section.show').removeClass("show");
  			$('.hero-center-section:nth-child(4)').addClass("show");
  			$('.slide-buttons li:nth-child(4)').addClass('active');
  		})
  		$('.slide-buttons li:nth-child(5)').on('mouseenter', function() {
  			$('.slide-buttons li.active').removeClass('active');
  			$('.hero-center-section.show').removeClass("show");
  			$('.hero-center-section:nth-child(5)').addClass("show");
  			$('.slide-buttons li:nth-child(5)').addClass('active');
  		})
  		$('.slide-buttons li:nth-child(6)').on('mouseenter', function() {
  			$('.slide-buttons li.active').removeClass('active');
  			$('.hero-center-section.show').removeClass("show");
  			$('.hero-center-section:nth-child(6)').addClass("show");
  			$('.slide-buttons li:nth-child(6)').addClass('active');
  		})
  		$('.slide-buttons li:nth-child(1)').trigger('mouseenter')

  	});

  });

export default HomePage;
