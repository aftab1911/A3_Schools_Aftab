import React from 'react'
import './Html_introStyle.css';
import Navbar2 from '../Navbar2';
import { Button } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import Footer from '../Footer';
const Html_Intro = () => {
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
        <h1>HTML <span class="color_h1">Introduction</span></h1>
        <div className='btns'>

        <Button variant="success">❮Previous</Button>{' '} 
        <Button variant="success">Next ❯</Button>{' '}
        </div>
        <hr/>
        <p class="intro">HTML is the standard markup language for creating Web pages.</p>
<hr></hr>
<h2>What is HTML?</h2>
<ul className='introul'>
<li>HTML stands for Hyper Text Markup Language</li>
  <li>HTML is the standard markup language for creating Web pages</li>
  <li>HTML describes the structure of a Web page</li>
  <li>HTML consists of a series of elements</li>
  <li>HTML elements tell the browser how to display the content</li>
  <li>HTML elements label pieces of content such as &quot;this is a heading&quot;, &quot;this 
  is a paragraph&quot;, &quot;this is a link&quot;, etc.</li>
</ul>
<hr></hr>
<h2>A Simple HTML Document</h2>
<div class="h4-example">
<h3>Example</h3>
<div class="h4-code notranslate htmlHigh">
<span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>!DOCTYPE <span style={{color:"red"}}>html</span></span><span style={{color:"blue"}}>&gt;</span><br/>
<span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>html</span><span style={{color:"blue"}}>&gt;</span><br/><span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>head</span><span style={{color:"blue"}}>&gt;</span><br/><span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>title</span><span style={{color:"blue"}}>&gt;</span>Page Title<span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>/title</span><span style={{color:"blue"}}>&gt;</span><br/>
<span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>/head</span><span style={{color:"blue"}}>&gt;</span><br/><span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>body</span><span style={{color:"blue"}}>&gt;</span><br/><br/><span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>h1</span><span style={{color:"blue"}}>&gt;</span>This is a Heading<span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>/h1</span><span style={{color:"blue"}}>&gt;</span><br/><span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>p</span><span style={{color:"blue"}}>&gt;</span>This is a paragraph.<span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>/p</span><span style={{color:"blue"}}>&gt;</span><br/><br/>
<span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>/body</span><span style={{color:"blue"}}>&gt;</span><br/><span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>/html</span><span style={{color:"blue"}}>&gt;</span>
</div> <div className='trybtn'> <Button variant="success"><a href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default" className='restyle' target="_blank">Try it Yourself&raquo;</a></Button>{' '}</div>
</div>
<p><strong>Click on the &quot;Try it Yourself&quot; button to see how it works.</strong></p>
<hr></hr>
<div style={{backgroundColor:"#D9EEE1"}}>
<h3 >Example Explained</h3>
<ul className='introul'>
<li>The <code class="w3-codespan">&lt;!DOCTYPE html&gt;</code> declaration defines 
that this document is an HTML5 document</li>
<li>The <code class="w3-codespan">&lt;html&gt;</code> element is the root element of an HTML 
page</li>
 <li>The <code class="w3-codespan">&lt;head&gt;</code> element contains meta information about the 
 HTML page</li>
 <li>The <code class="w3-codespan">&lt;title&gt;</code> element specifies a title for the 
 HTML page (which is shown in the browser's title bar or in the page's tab)</li>
 <li>The <code class="w3-codespan">&lt;body&gt;</code> element defines the 
 document's body, and is a container for all the visible contents, such as 
 headings, paragraphs, images, hyperlinks, tables, lists, etc.</li>
 <li>The <code class="w3-codespan">&lt;h1&gt;</code> element defines a large heading</li>
 <li>The <code class="w3-codespan">&lt;p&gt;</code> element defines a paragraph</li>
</ul>
<hr></hr></div>
<h2>What is an HTML Element?</h2>
<p>An HTML element is defined by a start tag, some content, and an end tag:</p>
<div style={{fontSize:"20px",padding:"10px",marginBottom:"10px"}}>
<span class="spes_tagname">
<span class="spes_tag"><span style={{color:"blue"}}>&lt;</span></span><span style={{color:"brown"}}>tagname</span><span class="spes_tag"><span style={{color:"blue"}}>&gt;</span></span></span>
Content goes here...
<span class="spes_tagname">
<span class="spes_tag"><span style={{color:"blue"}}>&lt;</span></span><span style={{color:"brown"}}>/tagname</span><span class="spes_tag"><span style={{color:"blue"}}>&gt;</span></span></span>
</div>
<p>The HTML <strong>element</strong> is everything from the start tag to the end tag:</p>

<div style={{fontSize:"20px",padding:"10px",marginBottom:"10px"}}>
<span class="spes_tagname"><span class="spes_tag"><span style={{color:"blue"}}>&lt;</span><span class="spes_tagname"><span style={{color:"brown"}}>h1</span></span><span style={{color:"blue"}}><span style={{color:"blue"}}>&gt;</span></span></span></span>My 
  First Heading<span class="spes_tagname"><span class="spes_tag"><span style={{color:"blue"}}>&lt;</span></span><span style={{color:"brown"}}>/h1</span><span class="spes_tag"><span style={{color:"blue"}}>&gt;</span></span></span>
</div>
<div style={{fontSize:"20px",padding:"10px",marginBottom:"10px"}}>
<span class="spes_tagname"><span class="spes_tag"><span style={{color:"blue"}}>&lt;</span></span><span style={{color:"brown"}}>p</span><span class="spes_tag"><span style={{color:"blue"}}>&gt;</span></span></span>My first paragraph.<span class="spes_tagname"><span class="spes_tag"><span style={{color:"blue"}}>&lt;</span></span><span style={{color:"brown"}}>/p</span><span class="spes_tag"><span style={{color:"blue"}}>&gt;</span></span></span>
</div>
<table class="ws-table-all notranslate">
<tr>
<th>Start tag</th>
<th>Element content</th>
<th>End tag</th>
</tr>
<tr>
<td>&lt;h1&gt;</td>
<td>My First Heading</td>
<td>&lt;/h1&gt;</td>
</tr>
<tr>
<td>&lt;p&gt;</td>
<td>My first paragraph.</td>
<td>&lt;/p&gt;</td>
</tr>
<tr>
<td>&lt;br&gt;</td>
<td><em>none</em></td>
<td><em>none</em></td>
</tr>
</table>
<div class="w3-panel w3-note">
<p><strong>Note:</strong> Some HTML elements have no content (like the &lt;br&gt; 
element). These elements are called empty elements. Empty elements do not have an end tag!</p>
</div>
<hr></hr>
<h2>HTML Page Structure</h2>
<p>Below is a visualization of an HTML page structure:</p>
<div class="ws-grey" style={{width:"90%",border:"1px solid grey",padding:"3px",margin:"20px"}}>&lt;html&gt;
<div style={{width:"90%",border:"1px solid grey",padding:"3px",margin:"20px"}}>&lt;head&gt;
<div style={{width:"90%",border:"1px solid grey",padding:"3px",margin:"20px"}}>&lt;title&gt;Page title&lt;/title&gt;
</div>
&lt;/head&gt;
</div>
<div class="ws-grey" style={{width:"90%",border:"1px solid grey",padding:"3px",margin:"20px"}}>&lt;body&gt;
<div class="w3-white" style={{width:"90%",border:"1px solid grey",padding:"3px",margin:"20px"}}>
<div style={{width:"90%",border:"1px solid grey",padding:"5px",margin:"20px"}}>&lt;h1&gt;This is a heading&lt;/h1&gt;</div>
<div style={{width:"90%",border:"1px solid grey",padding:"5px",margin:"20px"}}>&lt;p&gt;This is a paragraph.&lt;/p&gt;</div>
<div style={{width:"90%",border:"1px solid grey",padding:"5px",margin:"20px"}}>&lt;p&gt;This is another paragraph.&lt;/p&gt;</div>
</div>
&lt;/body&gt;
</div>
&lt;/html&gt;
</div>
<div class="w3-panel w3-note">
<p><strong>Note:</strong> The content inside the &lt;body&gt; section 
will be displayed in a browser. The content inside the &lt;title&gt; element will be 
shown in the browser's title bar or in the page's tab.</p>
</div>
<hr></hr>
<div className='btns'>

        <Button variant="success">❮Previous</Button>{' '} 
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

export default Html_Intro;
