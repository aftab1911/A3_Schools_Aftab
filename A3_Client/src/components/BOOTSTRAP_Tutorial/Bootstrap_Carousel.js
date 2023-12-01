import React from 'react'
import Navbar2 from '../Navbar2';
import { Button } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import Footer from '../Footer';
const Bootstrap_Carousel = () => {
  return (
    <div>
       <Navbar2/>
       <div class="grid-container">
        <div className="grid-item fd " expand="lg"><br />
            <h3 className='heading'>Bootstrap 5 Tutorial</h3>
            <div className="newd"><ul className='ul1'>
        <li className="rcolor"><a target="_top" href="/bootHome">BS5 HOME</a></li>
   <li className="rcolor"><a target="_top" href="/bootList">BS5 Get Started</a></li>
    <li className="rcolor"><a target="_top" href="/bootCarousel">BS5 Containers</a></li>
   <li className="rcolor"><a target="_top" href="/bootHome">BS5 Grid Basic</a></li>
   <li className="rcolor"><a target="_top" href="/bootCarousel">BS5 Typography</a></li>
   <li className="rcolor"><a target="_top" href="/bootList">BS5 Colors</a></li>
   <li className="rcolor"><a target="_top" href="/bootHome">BS5 Tables</a></li>
   <li className="rcolor"><a target="_top" href="/bootCarousel">BS5 Images</a></li>
   <li className="rcolor"><a target="_top" href="/bootList">BS5 Jumbotron</a></li>
   <li className="rcolor"><a target="_top" href="/bootHome">BS5 Alerts</a></li>
    <li className="rcolor"><a target="_top" href="/bootList">BS5 Buttons</a></li>
    <li className="rcolor"><a target="_top" href="/bootHome">BS5 Button Groups</a></li>
<li className="rcolor"><a target="_top" href="/bootList">BS5 Badges</a></li>
<li className="rcolor"><a target="_top" href="/bootCarousel">BS5 Progress Bars</a></li>
<li className="rcolor"><a target="_top" href="/bootHome">BS5 Spinners</a></li>
<div class="tut_overview">
  <li className="rcolor"><a target="_top" href="/bootCarousel">BS5 Pagination</a></li>
  <li className="rcolor"><a target="_top" href="/bootList">BS5 List Groups</a></li>
  <li className="rcolor"><a target="_top" href="/bootHome">BS5 Cards</a></li>
</div>
<li className="rcolor"><a target="_top" href="/bootCarousel">BS5 Dropdowns</a></li>
<div class="tut_overview">
  <li className="rcolor"><a target="_top" href="/bootList">BS5 Collapse</a></li>
  <li className="rcolor"><a target="_top" href="/bootHome">BS5 Navs</a></li>
  <li className="rcolor"><a target="_top" href="/bootCarousel">BS5 Navbar</a></li>
  <li className="rcolor"><a target="_top" href="/bootCarousel">BS5 Carousel</a></li>
</div>
<li className="rcolor"><a target="_top" href="/bootCarousel">BS5 Modal</a></li>
<li className="rcolor"><a target="_top" href="/bootHome">BS5 Tooltip</a></li>
<li className="rcolor"><a target="_top" href="/bootList">BS5 Popover</a></li>
<div class="tut_overview">
  <li className="rcolor"><a target="_top" href="/bootCarousel">BS5 Toast</a></li>
  <li className="rcolor"><a target="_top" href="/bootHome">BS5 Scrollspy</a></li>
  <li className="rcolor"><a target="_top" href="/bootList">BS5 Offcanvas</a></li>
  <li className="rcolor"><a target="_top" href="/bootHome">BS5 Utilities</a></li>
  <li className="rcolor"><a target="_top" href="/bootCarousel">BS5 Dark Mode</a></li>
  <li className="rcolor"><a target="_top" href="/bootHome">BS5 Flex</a></li><br />
  <h2 class="heading" style={{color:"black"}}>Bootstrap 5 Forms</h2>

  <li className="rcolor"><a target="_top" href="/bootList">BS5 Forms</a></li>
  <li className="rcolor"><a target="_top" href="/bootHome">BS5 Select Menus</a></li>
</div>
<li className="rcolor"><a target="_top" href="/bootList">BS5 Checks and Radios</a></li>
</ul></div></div>
        <div class="grid-item" id='hihi'><br />
        <h1>Bootstrap 5 <span class="color_h1">Carousel</span></h1>
        <div className='btns'>

<Button variant="success">❮ Previous</Button>{' '} 
<Button variant="success">Next ❯</Button>{' '}
</div> <hr />
<h2>Carousel / Slideshow</h2>
<p>The Carousel is a slideshow for cycling through elements:</p>
<div id="demo" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.w3schools.com/bootstrap5/la.jpg" alt="Los Angeles" class="d-block w-100"/>
    </div>
    <div class="carousel-item">
      <img src="https://www.w3schools.com/bootstrap5/chicago.jpg" alt="Chicago" class="d-block w-100"/>
    </div>
    <div class="carousel-item">
      <img src="https://www.w3schools.com/bootstrap5/ny.jpg" alt="New York" class="d-block w-100"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev" style={{cursor:"pointer"}}>
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next" style={{cursor:"pointer"}}>
    <span class="carousel-control-next-icon"></span>
  </button>
</div>
<hr></hr>
<h3>Example explained</h3>
<p>A description of what each class from the example above do:</p>
<table class="ws-table-all notranslate">
  <tr>
    <th style={{width:"30%"}}>Class</th>
    <th style={{width:"70%"}}>Description</th>
  </tr>
  <tr>
    <td><code class="w3-codespan">.carousel</code></td>
    <td>Creates a carousel</td>
  </tr>
  <tr>
    <td><code class="w3-codespan">.carousel-indicators</code></td>
    <td>Adds indicators for the carousel. These are the little dots at the bottom of each slide (which indicates how many slides there are in the carousel, and which slide the user are currently viewing)</td>
  </tr>
  <tr>
    <td><code class="w3-codespan">.carousel-inner</code></td>
    <td>Adds slides to the carousel</td>
  </tr>
  <tr>
    <td><code class="w3-codespan">.carousel-item</code></td>
    <td>Specifies the content of each slide</td>
  </tr>
  <tr>
    <td><code class="w3-codespan">.carousel-control-prev</code></td>
    <td>Adds a left (previous) button to the carousel, which allows the user to go back between the slides</td>
  </tr>
  <tr>
    <td><code class="w3-codespan">.carousel-control-next</code></td>
    <td>Adds a right (next) button to the carousel, which allows the user to go forward between the slides</td>
  </tr>
  <tr>
    <td><code class="w3-codespan">.carousel-control-prev-icon</code></td>
    <td>Used together with .carousel-control-prev to create a "previous" button</td>
  </tr>
  <tr>
    <td><code class="w3-codespan">.carousel-control-next-icon</code></td>
    <td>Used together with .carousel-control-next to create a "next" button</td>
  </tr>
  <tr>
    <td><code class="w3-codespan">.slide</code></td>
    <td>Adds a CSS transition and animation effect when sliding from one item to the next. Remove this class if you do not want this effect</td>
  </tr>
</table>
<h2>Add Captions to Slides</h2>
<div id="demo2" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo2" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo2" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo2" data-bs-slide-to="2"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.w3schools.com/bootstrap5/la.jpg" alt="Los Angeles" class="d-block w-100"/>
        <div class="carousel-caption">
    <h3>Los Angeles</h3>
    <p>We had such a great time in LA!</p>
  </div>

    </div>
    <div class="carousel-item">
      <img src="https://www.w3schools.com/bootstrap5/chicago.jpg" alt="Chicago" class="d-block w-100"/>
      
            <div class="carousel-caption">
        <h3>Chicago</h3>
        <p>Thank you, Chicago!</p>
      </div> 
    </div>
    <div class="carousel-item">
      <img src="https://www.w3schools.com/bootstrap5/ny.jpg" alt="New York" class="d-block w-100"/>
            <div class="carousel-caption">
        <h3>New York</h3>
        <p>We love the Big Apple!</p>
      </div>  
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#demo2" data-bs-slide="prev" style={{cursor:"pointer"}}>
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo2" data-bs-slide="next" style={{cursor:"pointer"}}>
    <span class="carousel-control-next-icon"></span>
  </button>
</div>
<div className='btns'>

<Button variant="success">❮ Previous</Button>{' '} 
<Button variant="success">Next ❯</Button>{' '}
</div>
<div className='fullwi'>
  <Footer/>
  </div>
        </div></div>
    </div>
  )
}

export default Bootstrap_Carousel
