import React from 'react'
import Navbar2 from '../Navbar2';
import { Button } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import Footer from '../Footer';
const Bootstrap_list = () => {
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
        <h1>Bootstrap 5 <span class="color_h1">List Groups</span></h1>
        <div className='btns'>

<Button variant="success">❮ Previous</Button>{' '} 
<Button variant="success">Next ❯</Button>{' '}
</div>
<hr/>

<h2>Basic List Groups</h2>
<p>The most basic list group is an unordered list with list items:</p>
<ul class="list-group introul" style={{margin:"20px 0"}}>
  <li class="list-group-item">First item</li>
  <li class="list-group-item">Second item</li>
  <li class="list-group-item">Third item</li>
</ul>
<p>To create a basic list group, use an <code class="w3-codespan">&lt;ul&gt;</code> element with class <code class="w3-codespan">.list-group</code>, and
<code class="w3-codespan">&lt;li&gt;</code> elements with class <code class="w3-codespan">.list-group-item</code>:</p>
<h2>Active State</h2>
<ul class="list-group introul" style={{margin:"20px 0"}}>
  <li class="list-group-item active" style={{zIndex:"1!important"}}>Active item</li>
  <li class="list-group-item">Second item</li>
  <li class="list-group-item">Third item</li>
</ul>
<p>Use the <code class="w3-codespan">.active</code> class to highlight the current item:</p><hr />
<h2>List Group With Linked Items</h2>
<div class="list-group" style={{margin:"20px 0"}}>
  <a href="javascript:void(0)" class="list-group-item list-group-item-action">First item</a>
  <a href="javascript:void(0)" class="list-group-item list-group-item-action">Second item</a>
  <a href="javascript:void(0)" class="list-group-item list-group-item-action">Third item</a>
</div>
<p>To create a list group with linked items, use <code class="w3-codespan">&lt;div&gt;</code> instead of <code class="w3-codespan">&lt;ul&gt;</code> 
and <code class="w3-codespan">&lt;a&gt;</code> instead of <code class="w3-codespan">&lt;li&gt;</code>.
Optionally, add the <code class="w3-codespan">.list-group-item-action</code> class if you want a grey background color on 
hover:</p><hr />
<h2>Disabled Item</h2>
  <p>The <code class="w3-codespan">.disabled</code> class adds a lighter text color to the disabled item. And when used on links, it will remove the hover effect:</p>
  <div class="list-group" style={{margin:"20px 0"}}>
    <a href="javascript:void(0)" class="list-group-item disabled">Disabled item</a>
    <a href="javascript:void(0)" class="list-group-item disabled">Disabled item</a>
    <a href="javascript:void(0)" class="list-group-item xxhey">Third item</a>
  </div><hr />
  <h2>Flush / Remove Borders</h2>
<p>Use the <code class="w3-codespan">.list-group-flush</code> class to remove some borders and rounded corners:</p>
<div class="container" style={{margin:" 0 -16px"}}>
<ul class="list-group list-group-flush">
  <li class="list-group-item">First item</li>
  <li class="list-group-item">Second item</li>
  <li class="list-group-item">Third item</li>
  <li class="list-group-item">Fourth item</li>
</ul>
</div>
<hr/>

<h2>Contextual Classes</h2>
<p>Contextual classes can be used to add color to the list items:</p>
<ul class="list-group introul" style={{margin:"20px 0"}}>
  <li class="list-group-item list-group-item-success">Success item</li>
  <li class="list-group-item list-group-item-secondary">Secondary item</li>
  <li class="list-group-item list-group-item-info">Info item</li>
  <li class="list-group-item list-group-item-warning">Warning item</li>
  <li class="list-group-item list-group-item-danger">Danger item</li>
  <li class="list-group-item list-group-item-primary">Primary item</li>
  <li class="list-group-item list-group-item-dark">Dark item</li>
  <li class="list-group-item list-group-item-light">Light item</li>
</ul>

<p>The classes for coloring list-items are: <code class="w3-codespan">
.list-group-item-success</code>, <code class="w3-codespan">list-group-item-secondary</code>, <code class="w3-codespan">list-group-item-info</code>, <code class="w3-codespan">
list-group-item-warning</code>, <code class="w3-codespan">.list-group-item-danger</code>, <code class="w3-codespan">.list-group-item-primary</code>, <code class="w3-codespan">list-group-item-dark</code> and <code class="w3-codespan">list-group-item-light</code>,:</p>
<hr/>

<h2>Link items with Contextual Classes</h2>
<div class="list-group" style={{margin:"20px 0"}}>
    <a href="javascript:void(0)" class="list-group-item list-group-item-action">Action item</a>
    <a href="javascript:void(0)" class="list-group-item list-group-item-action list-group-item-success">Success item</a>
    <a href="javascript:void(0)" class="list-group-item list-group-item-action list-group-item-secondary">Secondary item</a>
    <a href="javascript:void(0)" class="list-group-item list-group-item-action list-group-item-info">Info item</a>
    <a href="javascript:void(0)" class="list-group-item list-group-item-action list-group-item-warning">Warning item</a>
    <a href="javascript:void(0)" class="list-group-item list-group-item-action list-group-item-danger">Danger item</a>
    <a href="javascript:void(0)" class="list-group-item list-group-item-action list-group-item-primary">Primary item</a>
    <a href="javascript:void(0)" class="list-group-item list-group-item-action list-group-item-dark">Dark item</a>
    <a href="javascript:void(0)" class="list-group-item list-group-item-action list-group-item-light">Light item</a>
</div><hr />
<h2>List Group with Badges</h2>
<p>Combine <code class="w3-codespan">.badge</code> classes with utility/helper classes to add badges inside the list group:</p>
<div class="container" style={{margin: "0 -16px"}}>
  <ul class="list-group introul">
    <li class="list-group-item d-flex justify-content-between align-items-center">
      Inbox
      <span class="badge bg-primary rounded-pill">12</span>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
      Ads
      <span class="badge bg-primary rounded-pill">50</span>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
      Junk
      <span class="badge bg-primary rounded-pill">99</span>
    </li>
  </ul>
</div><hr />
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

export default Bootstrap_list
