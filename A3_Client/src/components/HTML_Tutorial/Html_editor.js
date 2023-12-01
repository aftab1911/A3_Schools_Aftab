import React from 'react'
import { Button } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import Navbar2 from '../Navbar2';
import Footer from '../Footer';
const Html_editor = () => {
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
        <h1>HTML <span class="color_h1">Editors</span></h1>
        <div className='btns'>

        <Button variant="success">❮ Previous</Button>{' '} 
        <Button variant="success">Next ❯</Button>{' '}
        </div>
        <hr/>
<p class="intro">A simple text editor is all you need to learn HTML.</p>
<hr></hr>
<div style={{backgroundColor:"#D9EEE1"}}>
<h2>Learn HTML Using Notepad or TextEdit</h2>
<p>Web pages can be created and modified by using professional HTML editors.</p>
<p>However, for learning HTML we recommend a simple text editor like Notepad (PC) or TextEdit (Mac).</p>
<p>We believe that using a simple text editor is a good way to learn HTML.</p>
<p>Follow the steps below to create your first web page with Notepad or TextEdit.</p>
<hr></hr></div>
<h2>Step 1: Open Notepad (PC)</h2>
<p><strong>Windows 8 or later:</strong></p>
<p>Open the <strong>Start Screen</strong> (the window symbol at the bottom left on your screen). Type <strong>Notepad</strong>.</p>
<p><strong>Windows 7 or earlier:</strong></p>
<p>Open <strong>Start</strong> &gt;<strong> 
Programs &gt;</strong> <strong>Accessories &gt;</strong> <strong>Notepad</strong></p>
<hr></hr>
<h2>Step 2: Write Some HTML</h2>
<p>Write or copy the following HTML code into Notepad:</p>
<div class="h4-example">
<h3>Example</h3>
<div class="h4-code notranslate htmlHigh">
<span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>!DOCTYPE <span style={{color:"red"}}>html</span></span><span style={{color:"blue"}}>&gt;</span><br/>
<span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>html</span><span style={{color:"blue"}}>&gt;</span><br/><span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>body</span><span style={{color:"blue"}}>&gt;</span><br/><br/><span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>h1</span><span style={{color:"blue"}}>&gt;</span>This is a Heading<span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>/h1</span><span style={{color:"blue"}}>&gt;</span><br/><span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>p</span><span style={{color:"blue"}}>&gt;</span>This is a paragraph.<span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>/p</span><span style={{color:"blue"}}>&gt;</span><br/><br/>
<span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>/body</span><span style={{color:"blue"}}>&gt;</span><br/><span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>/html</span><span style={{color:"blue"}}>&gt;</span>
</div>
<div className='trybtn'> <Button variant="success"><a href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default" className='restyle' target="_blank">Try it Yourself&raquo;</a></Button>{' '}</div>
</div>

<h2>Step 3: Save the HTML Page</h2>
<p>Save the file on your computer. Select <strong>File &gt; Save as</strong> in the Notepad menu.</p>
<p>Name the file <strong>&quot;index.htm&quot;</strong> and set the encoding to 
<strong>UTF-8</strong> (which is the preferred encoding for HTML files).</p>
<p><img alt="View in Browser" style={{height:"auto",width:"631px"} } class="w3-image" src="https://www.w3schools.com/html/img_saveas.png"/></p>
<div class="w3-panel w3-note">
  <p><strong>Tip:</strong> You can use either .htm or .html as file extension. There is no difference; it is up to you.</p>
</div>
<hr></hr>
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

export default Html_editor
