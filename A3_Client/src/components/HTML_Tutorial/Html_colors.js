import React from 'react'
import Navbar2 from '../Navbar2';
import { Button } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import Footer from '../Footer';
import './Html_colorStyle.css';
const Html_colors = () => {
  return (
    <div>
       <Navbar2/>
       <div class="grid-container">
       <div className="grid-item fd " expand="lg">
            <h3 className='heading'>HTML Tutorial</h3>
            <div className="newd"><ul className='ul1'>
        <li className="rcolor"><a target="_top" href="/htmlhome">HTML Home</a></li>
   <li className="rcolor"><a target="_top" href="/htmlIntro">HTML Introduction</a></li>
    <li className="rcolor"><a target="_top" href="/htmlEditor">HTML Editors</a></li>
   <li className="rcolor"><a target="_top" href="/htmlIntro">HTML Basic</a></li>
   <li className="rcolor"><a target="_top" href="/htmlInline">HTML Elements</a></li>
   <li className="rcolor"><a target="_top" href="/htmlHead">HTML Attributes</a></li>
   <li className="rcolor"><a target="_top" href="/htmlEditor">HTML Headings</a></li>
   <li className="rcolor"><a target="_top" href="/htmlhome">HTML Paragraphs</a></li>
   <li className="rcolor"><a target="_top" href="htmlInline">HTML Styles</a></li>
   <li className="rcolor"><a target="_top" href="/htmlColor">HTML Formatting</a></li>
    <li className="rcolor"><a target="_top" href="/htmlEditor">HTML Quotations</a></li>
    <li className="rcolor"><a target="_top" href="/htmlhome">HTML Comments</a></li>
<li className="rcolor"><a target="_top" href="/htmlColor">HTML Colors</a></li>
<li className="rcolor"><a target="_top" href="htmlInline">HTML CSS</a></li>
<li className="rcolor"><a target="_top" href="/htmlhome">HTML Links</a></li>
<div class="tut_overview">
  <li className="rcolor"><a target="_top" href="/htmlColor">Links</a></li>
  <li className="rcolor"><a target="_top" href="/htmlIntro">Link Colors</a></li>
  <li className="rcolor"><a target="_top" href="/htmlEditor">Link Bookmarks</a></li>
</div>
<li className="rcolor"><a target="_top" href="/htmlHead">HTML Images</a></li>
<div class="tut_overview">
  <li className="rcolor"><a target="_top" href="/htmlhome">Images</a></li>
  <li className="rcolor"><a target="_top" href="/htmlIntro">Image Map</a></li>
  <li className="rcolor"><a target="_top" href="/htmlEditor">Background Images</a></li>
  <li className="rcolor"><a target="_top" href="/htmlColor">The Picture Element</a></li>
</div>
<li className="rcolor"><a target="_top" href="/htmlhome">HTML Favicon</a></li>
<li className="rcolor"><a target="_top" href="/htmlIntro">HTML Page Title</a></li>
<li className="rcolor"><a target="_top" href="/htmlHead">HTML Tables</a></li>
<div class="tut_overview">
  <li className="rcolor"><a target="_top" href="/htmlhome">HTML Tables</a></li>
  <li className="rcolor"><a target="_top" href="/htmlHead">Table Borders</a></li>
  <li className="rcolor"><a target="_top" href="/htmlEditor">Table Sizes</a></li>
  <li className="rcolor"><a target="_top" href="/htmlColor">Table Headers</a></li>
  <li className="rcolor"><a target="_top" href="/htmlIntro">Padding &amp; Spacing</a></li>
  <li className="rcolor"><a target="_top" href="/htmlhome">Colspan &amp; Rowspan</a></li>
  <li className="rcolor"><a target="_top" href="/htmlIntro">Table Styling</a></li>
  <li className="rcolor"><a target="_top" href="/htmlColor">Table Colgroup</a></li>
</div>



<li className="rcolor"><a target="_top" href="/htmlIntro">HTML Lists</a></li>
<div class="tut_overview">
<li className="rcolor"><a target="_top" href="/htmlhome">Lists</a></li>
<li className="rcolor"><a target="_top" href="/htmlEditor">Unordered Lists</a></li>
<li className="rcolor"><a target="_top" href="/htmlHead">Ordered Lists</a></li>
<li className="rcolor"><a target="_top" href="/htmlIntro">Other Lists</a></li>
</div>
<li className="rcolor"><a target="_top" href="htmlInline">HTML Block &amp; Inline</a></li>
<li className="rcolor"><a target="_top" href="/htmlEditor">HTML Classes</a></li>
<li className="rcolor"><a target="_top" href="/htmlhome">HTML Id</a></li>
<li className="rcolor"><a target="_top" href="/htmlIntro">HTML Iframes</a></li>
<li className="rcolor"><a target="_top" href="/htmlColor">HTML JavaScript</a></li>
<li className="rcolor"><a target="_top" href="/htmlEditor">HTML File Paths</a></li>
<li className="rcolor"><a target="_top" href="/htmlHead">HTML Head</a></li></ul></div></div>
        <div class="grid-item" id='hihi'>
        <h1>HTML <span class="color_h1">Colors</span></h1>
        <div className='btns'>

<Button variant="success">❮ Previous</Button>{' '} 
<Button variant="success">Next ❯</Button>{' '}
</div>
<hr/>
<p class="intro">HTML colors are specified with predefined color names, or with 
RGB, HEX, HSL, RGBA, or HSLA values.</p>
<hr></hr>
<h2>Color Names</h2>
<p>In HTML, a color can be specified by using a color name:</p>
<div class="w3-row w3-center" style={{margin:"0 -16px",lineHeight:"80px",color:"white"}}>
  <div class="w3-col l3 m6 w3-padding">
    <div style={{backgroundColor:"tomato"}}>Tomato</div>
  </div>
  <div class="w3-col l3 m6 w3-padding">
    <div style={{backgroundColor:"orange"}}>Orange</div>
  </div>
  <div class="w3-col l3 m6 w3-padding">
    <div style={{backgroundColor:"dodgerblue"}}>DodgerBlue</div>
  </div>
  <div class="w3-col l3 m6 w3-padding">
    <div style={{backgroundColor:"mediumseagreen"}}>MediumSeaGreen</div>
  </div>
  <div class="w3-col l3 m6 w3-padding">
    <div style={{backgroundColor:"gray"}}>Gray</div>
  </div>
  <div class="w3-col l3 m6 w3-padding">
    <div style={{backgroundColor:"slateblue"}}>SlateBlue</div>
  </div>
  <div class="w3-col l3 m6 w3-padding">
    <div style={{backgroundColor:"violet"}}>Violet</div>
  </div>
  <div class="w3-col l3 m6 w3-padding">
    <div style={{backgroundColor:"lightgray",color:"#444444"}}>LightGray</div>
  </div>
</div>
<div className='trybtn'> <Button variant="success"><a href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default" className='restyle' target="_blank">Try it Yourself&raquo;</a></Button>{' '}</div><hr />
<h2>Background Color</h2>
<p>You can set the background color for HTML elements:</p>
<div style={{backgroundColor:"dodgerblue", textAlign:"center",color:"white",fontSize:"24px"}}>Hello World</div>
<br/>
<div class="w3-container" style={{backgroundColor:"tomato",color:"white"}}><br/>
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
  Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.<br/><br/>
</div>
<hr/>
<h2>Text Color</h2>
<p>You can set the color of text:</p>
<h3 style={{color:"tomato"}}>Hello World</h3>
<p style={{color:"dodgerblue"}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
<p style={{color:"mediumseagreen"}}>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
<hr/>
<h2>Border Color</h2>
<p>You can set the color of borders:</p>
<h2 style={{border: "2px solid Tomato"}}>Hello World</h2>
<h2 style={{border: "2px solid DodgerBlue"}}>Hello World</h2>
<h2 style={{border:"2px solid Violet"}}>Hello World</h2>
<hr/>
<h2>Color Values</h2>
<p>In HTML, colors can also be specified using RGB values, HEX values, HSL 
values, RGBA values, and HSLA values.</p>
<p>The following three &lt;div&gt; elements have their background color set with RGB, 
HEX, and HSL values:</p>

<div class="w3-center" style={{lineHeight:"60px",color:"white",fontSize:"20px",fontWeight:"bold",fontFamily:"Consolas, 'Courier New', Courier, monospace"}}>
  <div style={{backgroundColor:"rgb(255, 99, 71)",margin:"10px 0"}}>rgb(255, 99, 71)</div>
  <div style={{backgroundColor:"#ff6347",margin:"10px 0"}}>#ff6347</div>
  <div style={{backgroundColor:"hsl(9, 100%, 64%)",margin:"10px 0"}}>hsl(9, 100%, 64%)</div>
</div>
<p>The following two &lt;div&gt; elements have their background color set with RGBA 
and HSLA values, which add an Alpha channel to the color (here we have 50% 
transparency):</p>
<div class="w3-center" style={{lineHeight:"60px",color:"white",fontSize:"20px",fontWeight:"bold",fontFamily:"Consolas, 'Courier New', Courier, monospace"}}>
  <div style={{backgroundColor:"rgba(255, 99, 71, 0.5)",margin:"10px 0"}}>rgba(255, 99, 71, 0.5)</div>
  <div style={{backgroundColor:"hsla(9, 100%, 64%, 0.5)",margin:"10px 0"}}>hsla(9, 100%, 64%, 0.5)</div>
</div>
<div class="w3-note w3-panel">
<h3>Learn more about Color Values</h3>
<p>You will learn more about <a href="html_colors_rgb.asp">RGB</a>, <a href="html_colors_hex.asp">HEX</a> and <a href="html_colors_hsl.asp">HSL</a> in the next chapters.</p>
</div>
<div className='btns'>

<Button variant="success">❮ Previous</Button>{' '} 
<Button variant="success">Next ❯</Button>{' '}
</div>
<div className='fullwi'>
  <Footer/>
  </div>
</div>
        </div>
        </div>

  )
}

export default Html_colors
