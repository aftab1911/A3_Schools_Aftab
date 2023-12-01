import React from 'react'
import { Button } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import Navbar2 from '../Navbar2';
import Footer from '../Footer';
import './Html_blockStyle.css';
const Html_blockInline = () => {
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
        <h1>HTML <span class="color_h1">Block and Inline Elements</span></h1>
        <div className='btns'>

<Button variant="success">❮ Previous</Button>{' '} 
<Button variant="success">Next ❯</Button>{' '}
</div>
<hr/>
<p class="intro">Every HTML element has a default display value, depending on what type 
of element it is.</p>
<p class="intro">There are two display values: block and inline.</p>
<hr></hr>
<div style={{backgroundColor:"#ffffcc"}}>
<h2>Block-level Elements</h2>
<p>A block-level element always starts on a new line, and the browsers 
automatically add some space (a margin) before and after the element.</p>
<p>A block-level element always takes up the full width available 
(stretches out to the left and right as far as it can).</p>
<p>Two commonly used block elements are: <code class="w3-codespan">&lt;p&gt;</code> 
and <code class="w3-codespan">&lt;div&gt;</code>.</p>
<p>The <code class="w3-codespan">&lt;p&gt;</code> element defines a paragraph in an 
HTML document.</p>
<p>The <code class="w3-codespan">&lt;div&gt;</code> element defines a division 
or a section in an HTML document.</p></div>
<p class="w3-theme-border" style={{borderWidth:"1px",borderStyle:"solid",padding:"5px"}}>
The &lt;p&gt; element is a block-level element.</p>

<div class="w3-theme-border" style={{borderWidth:"1px",borderStyle:"solid",padding:"5px"}}>
The &lt;div&gt; element is a block-level element.
</div>
<div class="h4-example">
<h3>Example</h3>
<div class="h4-code notranslate htmlHigh">
<span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>p</span><span style={{color:"blue"}}>&gt;</span>Hello World<span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>/p</span><span style={{color:"blue"}}>&gt;</span><br/>
<span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>div</span><span style={{color:"blue"}}>&gt;</span>Hello World<span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>/div</span><span style={{color:"blue"}}>&gt;</span><br/>

</div>
<div className='trybtn'> <Button variant="success"><a href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default" className='restyle' target="_blank">Try it Yourself&raquo;</a></Button>{' '}</div></div>
<p>Here are the block-level elements in HTML:</p>
<div class="w3-row htmlHigh w3-code" style={{lineHeight:"25px",borderLeft:"none"}}>
  <div class="mylist"><a href="/tags/tag_address.asp">&lt;address&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_article.asp">&lt;article&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_aside.asp">&lt;aside&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_blockquote.asp">&lt;blockquote&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_canvas.asp">&lt;canvas&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_dd.asp">&lt;dd&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_div.asp">&lt;div&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_dl.asp">&lt;dl&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_dt.asp">&lt;dt&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_fieldset.asp">&lt;fieldset&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_figcaption.asp">&lt;figcaption&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_figure.asp">&lt;figure&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_footer.asp">&lt;footer&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_form.asp">&lt;form&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_hn.asp">&lt;h1&gt;-&lt;h6&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_header.asp">&lt;header&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_hr.asp">&lt;hr&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_li.asp">&lt;li&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_main.asp">&lt;main&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_nav.asp">&lt;nav&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_noscript.asp">&lt;noscript&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_ol.asp">&lt;ol&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_p.asp">&lt;p&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_pre.asp">&lt;pre&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_section.asp">&lt;section&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_table.asp">&lt;table&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_tfoot.asp">&lt;tfoot&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_ul.asp">&lt;ul&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_video.asp">&lt;video&gt;</a></div>
</div>
<hr></hr><br /><br /><br /><br />
<div style={{backgroundColor:"#D9EEE1"}}>
<h2>Inline Elements</h2>
<p>An inline element does not start on a new line.</p>
<p>An inline element only takes up as much width as necessary.</p></div>
<p>This is <span class="w3-theme-border" style={{border:"1px solid green",padding:"5px"}}>a &lt;span&gt; element 
inside</span> a paragraph.</p><div class="h4-example">
<h3>Example</h3>
<div class="h4-code notranslate htmlHigh">
<span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>span</span><span style={{color:"blue"}}>&gt;</span>Hello World<span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>/span</span><span style={{color:"blue"}}>&gt;</span><br/>

</div> 
<div className='trybtn'> <Button variant="success"><a href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default" className='restyle' target="_blank">Try it Yourself&raquo;</a></Button>{' '}</div></div>
<p>Here are the inline elements in HTML:</p>
<div class="w3-row htmlHigh w3-code" style={{lineHeight:"25px",borderLeft:"none"}}>
  <div class="mylist"><a href="/tags/tag_a.asp">&lt;a&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_abbr.asp">&lt;abbr&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_acronym.asp">&lt;acronym&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_b.asp">&lt;b&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_bdo.asp">&lt;bdo&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_big.asp">&lt;big&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_br.asp">&lt;br&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_button.asp">&lt;button&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_cite.asp">&lt;cite&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_code.asp">&lt;code&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_dfn.asp">&lt;dfn&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_em.asp">&lt;em&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_i.asp">&lt;i&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_img.asp">&lt;img&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_input.asp">&lt;input&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_kbd.asp">&lt;kbd&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_label.asp">&lt;label&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_map.asp">&lt;map&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_object.asp">&lt;object&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_output.asp">&lt;output&gt;</a></div>  
  <div class="mylist"><a href="/tags/tag_q.asp">&lt;q&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_samp.asp">&lt;samp&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_script.asp">&lt;script&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_select.asp">&lt;select&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_small.asp">&lt;small&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_span.asp">&lt;span&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_strong.asp">&lt;strong&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_sub.asp">&lt;sub&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_sup.asp">&lt;sup&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_textarea.asp">&lt;textarea&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_time.asp">&lt;time&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_tt.asp">&lt;tt&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_var.asp">&lt;var&gt;</a></div>
</div>   <br /><br /><br /><br /><br /><hr />
<h2>The &lt;div&gt; Element</h2>
<p>The <code class="w3-codespan">&lt;div&gt;</code> element is 
often used as a container for other HTML elements.</p>
<p>The <code class="w3-codespan">&lt;div&gt;</code> element has no required attributes, but <code class="w3-codespan">style</code>, <code class="w3-codespan">class</code> and <code class="w3-codespan">id</code> are common.</p>
<p>When used together with CSS, the <code class="w3-codespan">&lt;div&gt;</code> element can be used to style blocks of 
content:</p>

<h2>The &lt;span&gt; Element</h2>
<p>The <code class="w3-codespan">&lt;span&gt;</code> element is  
an inline container used to mark up a part of a text, or a part of a document.</p>
<p>The <code class="w3-codespan">&lt;span&gt;</code> element has no required attributes, but <code class="w3-codespan">style</code>, <code class="w3-codespan">class</code> and <code class="w3-codespan">id</code> are common.</p>
<p>When used together with CSS, the <code class="w3-codespan">&lt;span&gt;</code> element can be used to style parts of the text:</p>
<h2>Chapter Summary</h2>
<ul className='introul'>
<li>There are two display values: block and inline</li>
  <li>A block-level element always starts on a new line and takes up the full 
  width available</li>
  <li>An inline element does not start on a new line and it only takes up as 
  much width as necessary</li>
  <li>The <code class="w3-codespan">&lt;div&gt;</code> element is a block-level 
  and is often used as a container for other HTML elements</li>
  <li>The <code class="w3-codespan">&lt;span&gt;</code> element is an inline 
  container used to mark up a part of a text, or a part of a document</li>
</ul>
<hr></hr>
<h2>HTML Tags</h2>
<table class="ws-table-all notranslate">
<tr>
<th>Tag</th>
<th>Description</th>
</tr>
<tr>
<td><a href="/tags/tag_div.asp" style={{textDecoration:"none",color:"black"}}>&lt;div&gt;</a></td>
<td>Defines a section in a document (block-level)</td>
</tr>
<tr>
<td><a href="/tags/tag_span.asp" style={{textDecoration:"none",color:"black"}}>&lt;span&gt;</a></td>
<td>Defines a section in a document (inline)</td>
</tr>
</table>
<div className='btns'>

<Button variant="success">❮ Previous</Button>{' '} 
<Button variant="success">Next ❯</Button>{' '}
</div>
<div className='fullwi'>
  <Footer/>
  </div>
    </div>
    </div></div>
  )
}

export default Html_blockInline
