import React from 'react'
import { Link } from 'gatsby'
import '.components/styles/style.css';

const IndexPage = () => (
  <style>
  /* Slider wrapper*/
  .css-slider-wrapper {
    display: block;
    background: #FFF;
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  /* Slider */
  .slider {
    width: 100%;
    height: 100%;
    background: red;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 1;
    z-index: 0;
    display: flex;
    display: -webkit-flex;
    display: -ms-flexbox;
    flex-direction: row;
    flex-wrap: wrap;
    -webkit-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    justify-content: center;
    align-content: center;
    -webkit-transition: -webkit-transform 1600ms;
    transition: -webkit-transform 1600ms, transform 1600ms;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  /* each slide backgound color */
  .slide1 {
    background: #00bcd7;
    left: 0;
  }
  .slide2 {
    background: #009788;
    left: 100%
  }
  .slide3 {
    background: #ff5608;
    left: 200%
  }
  .slide4 {
    background: #607d8d;
    left: 300%;
  }
  .slider > div {
    text-align: center;
  }
  /* Slider inner slide effect */
  .slider h2 {
    color: #FFF;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 45px;
    line-height: 120%;
    opacity: 0;
    -webkit-transform: translateX(500px);
    transform: translateX(500px);
  }
  .slider .button {
    color: #FFF;
    padding: 5px 30px;
    background: rgba(255,255,255,0.3);
    text-decoration: none;
    opacity: 0;
    font-size: 15px;
    line-height: 30px;
    display: inline-block;
    -webkit-transform: translateX(-500px);
    transform: translateX(-500px);
  }
  .slider h2, .slider .button {
    -webkit-transition: opacity 800ms, -webkit-transform 800ms;
    transition: transform 800ms, opacity 800ms;
    -webkit-transition-delay: 1s; /* Safari */
    transition-delay: 1s;
  }
  /* Next and Preive arrow */
  .control {
    position: absolute;
    top: 50%;
    width: 50px;
    height: 50px;
    margin-top: -25px;
    z-index: 55;
  }
  .control label {
    z-index: 0;
    display: none;
    text-align: center;
    line-height: 50px;
    font-size: 50px;
    color: #FFF;
    cursor: pointer;
    opacity: 0.2;
  }
  .control label:hover {
    opacity: 0.5;
  }
  .next {
    right: 1%;
  }
  .previous {
    left: 1%;
  }
  /* Slider Pagger */
  .slider-pagination {
    position: absolute;
    bottom: 20px;
    width: 100%;
    left: 0;
    text-align: center;
    z-index: 1000;
  }
  .slider-pagination label {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: inline-block;
    background: rgba(255,255,255,0.2);
    margin: 0 2px;
    border: solid 1px rgba(255,255,255,0.4);
    cursor: pointer;
  }
  /* Slider Pagger arrow event */
  .slide-radio1:checked ~ .next .numb2,
  .slide-radio2:checked ~ .next .numb3,
  .slide-radio3:checked ~ .next .numb4,
  .slide-radio2:checked ~ .previous .numb1,
  .slide-radio3:checked ~ .previous .numb2,
  .slide-radio4:checked ~ .previous .numb3 {
    display: block;
    z-index: 1
  }
  /* Slider Pagger event */
  .slide-radio1:checked ~ .slider-pagination .page1,
  .slide-radio2:checked ~ .slider-pagination .page2,
  .slide-radio3:checked ~ .slider-pagination .page3,
  .slide-radio4:checked ~ .slider-pagination .page4 {
    background: rgba(255,255,255,1)
  }
  /* Slider slide effect */
  .slide-radio1:checked ~ .slider {
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
  }
  .slide-radio2:checked ~ .slider {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
  .slide-radio3:checked ~ .slider {
    -webkit-transform: translateX(-200%);
    transform: translateX(-200%);
  }
  .slide-radio4:checked ~ .slider {
    -webkit-transform: translateX(-300%);
    transform: translateX(-300%);
  }
  .slide-radio1:checked ~ .slide1 h2,
  .slide-radio2:checked ~ .slide2 h2,
  .slide-radio3:checked ~ .slide3 h2,
  .slide-radio4:checked ~ .slide4 h2,
  .slide-radio1:checked ~ .slide1 .button,
  .slide-radio2:checked ~ .slide2 .button,
  .slide-radio3:checked ~ .slide3 .button,
  .slide-radio4:checked ~ .slide4 .button {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1
  }

  @media only screen and (max-width: 767px) {
  .slider h2 {
    font-size: 20px;
  }
  .slider > div {
    padding: 0 2%
  }
  .control label {
    font-size: 35px;
  }
  .slider .button {
    padding: 0 15px;
  }
  }
  </style>
  </head>

  <body>
  <div class="css-slider-wrapper">
    <input type="radio" name="slider" class="slide-radio1" checked id="slider_1">
    <input type="radio" name="slider" class="slide-radio2" id="slider_2">
    <input type="radio" name="slider" class="slide-radio3" id="slider_3">
    <input type="radio" name="slider" class="slide-radio4" id="slider_4">
    <div class="slider-pagination">
      <label for="slider_1" class="page1"></label>
      <label for="slider_2" class="page2"></label>
      <label for="slider_3" class="page3"></label>
      <label for="slider_4" class="page4"></label>
    </div>
    <div class="next control">
      <label for="slider_1" class="numb1"><i class="fa fa-arrow-circle-right"></i></label>
      <label for="slider_2" class="numb2"><i class="fa fa-arrow-circle-right"></i></label>
      <label for="slider_3" class="numb3"><i class="fa fa-arrow-circle-right"></i></label>
      <label for="slider_4" class="numb4"><i class="fa fa-arrow-circle-right"></i></label>
    </div>
    <div class="previous control">
      <label for="slider_1" class="numb1"><i class="fa fa-arrow-circle-left"></i></label>
      <label for="slider_2" class="numb2"><i class="fa fa-arrow-circle-left"></i></label>
      <label for="slider_3" class="numb3"><i class="fa fa-arrow-circle-left"></i></label>
      <label for="slider_4" class="numb4"><i class="fa fa-arrow-circle-left"></i></label>
    </div>
    <div class="slider slide1">
      <div>
        <h2>Css Based slider</h2>
        <a href="http://www.htmllion.com/pure-css-based-fullscreen-slider.html" class="button">Back</a>  <a href="#" class="button">Download</a> </div>
    </div>
    <div class="slider slide2">
      <div>
        <h2>CSS Slider without use of any javascript or jQuery</h2>
        <a href="http://www.htmllion.com/pure-css-based-fullscreen-slider.html" class="button">Back</a> <a href="#" class="button">Download</a> </div>
    </div>
    <div class="slider slide3">
      <div>
        <h2>Full screen animation slider</h2>
        <a href="http://www.htmllion.com/pure-css-based-fullscreen-slider.html" class="button">Back</a> <a href="#" class="button">Download</a> </div>
    </div>
    <div class="slider slide4">
      <div>
        <h2>css3 slider</h2>
        <a href="http://www.htmllion.com/pure-css-based-fullscreen-slider.html" class="button">Back</a> <a href="#" class="button">Download</a> </div>
    </div>
  </div>
)

export default IndexPage
