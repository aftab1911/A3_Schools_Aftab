import React from 'react'
import Navbar2 from '../Navbar2';
import { Button } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import Footer from '../Footer';

const Bootstrap_home = () => {
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
        <h1>Bootstrap 5 <span class="color_h1">Tutorial</span></h1>
        <div className='btns'>

<Button variant="success">❮ Home</Button>{' '} 
<Button variant="success">Next ❯</Button>{' '}
</div>
<div class="w3-panel w3-info intro w3-padding-16 topg">
<p style={{marginTop:"15px"}}>Bootstrap 5 is the newest version of <a href="/bootstrap/default.asp">Bootstrap</a>, which is the most popular HTML, CSS, and JavaScript framework for creating responsive, mobile-first websites.</p>
<p>Bootstrap 5 is completely free to download and use!</p></div>
<h2>Bootstrap 5 vs. Bootstrap 3 & 4</h2>
<p>Bootstrap 5 is the newest version of <a href="/bootstrap/default.asp">Bootstrap</a>; with new components, faster stylesheet and more responsiveness.</p>
<p>Bootstrap 5 supports the latest, stable releases of all major browsers and 
platforms. However, Internet Explorer 11 and down is not supported.</p>
<p>The main differences between Bootstrap 5 and Bootstrap 3 &amp; 4, is that 
Bootstrap 5 has switched to <a href="/js/default.asp">JavaScript</a> instead of <a href="/jquery/default.asp">jQuery</a>.</p>
<div class="w3-panel w3-note">
<p style={{marginBottom:"8px"}}><strong>Note:</strong> <a href="/bootstrap/default.asp">Bootstrap 3</a> and <a href="/bootstrap4/default.asp">Bootstrap 4</a> is still supported by the team for critical bugfixes and documentation changes, 
and it is perfectly safe to continue to use them. However, new features will NOT be added to 
them.</p>
</div>
<hr></hr>
<form autocomplete="off" id="w3-exerciseform" action="exercise.php?filename=exercise_bs5_typography1" method="post" target="_blank">
<h2>Test Yourself With Exercises</h2>
<div class="exercisewindow">
<h2>Exercise:</h2>
<p>Use a Bootstrap class to center the following text:</p>
<div class="exerciseprecontainer">
<pre style={{backgroundColor:"transparent",border:"none"}}>
&lt;p class="<input name="ex1" maxlength="11" style={{width: "115px"}}/>"	&gt; Hello World!&lt;/p&gt;
</pre>
</div>
<br/>
<button type="submit" class="w3-btn w3-margin-bottom">Submit Answer &raquo;</button>
<p><a target="_blank" href="exercise.php?filename=exercise_bs5_typography1">Start the Exercise</a></p>
</div>
</form>
<div class="w3-info topg">
<h2>Did You Know?</h2>
<p><b>H4.CSS</b> is an excellent alternative to Bootstrap 5.</p>
<p><b>H4.CSS</b> is smaller, faster, and easier to use.</p>
<p>If you want to learn H4.CSS, go to our <a href="/w3css/default.asp">H4.CSS 
Tutorial</a>.</p>
</div>
<div className='btns bm'>

<Button variant="success">❮ Home</Button>{' '} 
<Button variant="success">Next ❯</Button>{' '}
</div>
<div className='fullwi'>
  <Footer/>
  </div>
            </div></div>
    </div>
  )
}

export default Bootstrap_home
