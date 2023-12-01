import React from 'react'
import Navbar2 from "../Navbar2";
import { Button } from "react-bootstrap";
import "font-awesome/css/font-awesome.min.css";
import Footer from "../Footer";
import './Js_comparisonStyle.css';
const Js_comparsion = () => {
  return (
    <div>
      <div>
        <Navbar2 />
        <div class="grid-container">
        <div className="grid-item fd " expand="lg">
            <h3 className='heading'>JS Tutorial</h3>
            <div className="newd"><ul className='ul1'>
        <li className="rcolor"><a target="_top" href="/jsHome">JS HOME</a></li>
   <li className="rcolor"><a target="_top" href="/jsVar">JS Introduction</a></li>
    <li className="rcolor"><a target="_top" href="/jsHome">JS Where To</a></li>
   <li className="rcolor"><a target="_top" href="/jsComp">JS Output</a></li>
   <li className="rcolor"><a target="_top" href="/jsVar">JS Statements</a></li>
   <li className="rcolor"><a target="_top" href="/jsBitwise">JS Syntax</a></li>
   <li className="rcolor"><a target="_top" href="/jsHome">JS Comments</a></li>
   <li className="rcolor"><a target="_top" href="/jsVar">JS Variables</a></li>
   <li className="rcolor"><a target="_top" href="/jsComp">JS Let</a></li>
   <li className="rcolor"><a target="_top" href="/jsBitwise">JS Const</a></li>
    <li className="rcolor"><a target="_top" href="/jsVar">JS Operators</a></li>
    <li className="rcolor"><a target="_top" href="/jsHome">JS Arithmetic</a></li>
<li className="rcolor"><a target="_top" href="/jsComp">JS Assignment</a></li>
<li className="rcolor"><a target="_top" href="/jsHome">JS Data Types</a></li>
<li className="rcolor"><a target="_top" href="/jsVar">JS Functions</a></li>
<div class="tut_overview">
  <li className="rcolor"><a target="_top" href="/jsComp">JS Objects</a></li>
  <li className="rcolor"><a target="_top" href="/jsVar">JS Events</a></li>
  <li className="rcolor"><a target="_top" href="/jsHome">JS Strings</a></li>
</div>
<li className="rcolor"><a target="_top" href="/jsBitwise">JS String Methods</a></li>
<div class="tut_overview">
  <li className="rcolor"><a target="_top" href="/jsHome">JS String Search</a></li>
  <li className="rcolor"><a target="_top" href="/jsComp">JS String Templates</a></li>
  <li className="rcolor"><a target="_top" href="/jsVar">JS Numbers</a></li>
  <li className="rcolor"><a target="_top" href="/jsHome">JS BigInt</a></li>
</div>
<li className="rcolor"><a target="_top" href="/jsVar">JS Number Methods</a></li>
<li className="rcolor"><a target="_top" href="/jsComp">JS Number Properties</a></li>
<li className="rcolor"><a target="_top" href="/jsBitwise">JS Arrays</a></li>
<div class="tut_overview">
  <li className="rcolor"><a target="_top" href="/jsHome">JS Array Methods</a></li>
  <li className="rcolor"><a target="_top" href="/jsBitwise">JS Array Sort</a></li>
  <li className="rcolor"><a target="_top" href="/jsComp">JS Array Iteration</a></li>
  <li className="rcolor"><a target="_top" href="/jsVar">JS Array Const</a></li>
  <li className="rcolor"><a target="_top" href="/jsBitwise">JS Dates</a></li>
  <li className="rcolor"><a target="_top" href="/jsVar">JS Date Formats</a></li>
  <li className="rcolor"><a target="_top" href="/jsHome">JS Date Get Methods</a></li>
  <li className="rcolor"><a target="_top" href="/jsComp">JS Date Set Methods</a></li>
</div>



<li className="rcolor"><a target="_top" href="/jsVar">JS Math</a></li>
<div class="tut_overview">
<li className="rcolor"><a target="_top" href="/jsHome">JS Random</a></li>
<li className="rcolor"><a target="_top" href="/jsBitwise">JS Booleans</a></li>
<li className="rcolor"><a target="_top" href="/jsComp">JS Comparisons</a></li>
<li className="rcolor"><a target="_top" href="/jsVar">JS If Else</a></li>
</div>
<li className="rcolor"><a target="_top" href="/jsHome">JS Switch</a></li>
<li className="rcolor"><a target="_top" href="/jsComp">JS Loop For</a></li>
<li className="rcolor"><a target="_top" href="/jsVar">JS Loop For In</a></li>
<li className="rcolor"><a target="_top" href="/jsComp">JS Loop While</a></li>
<li className="rcolor"><a target="_top" href="/jsHome">JS Break</a></li>
<li className="rcolor"><a target="_top" href="/jsBitwise">JS Bitwise</a></li>
<li className="rcolor"><a target="_top" href="/jsVar">JS Type Conversion</a></li></ul></div></div>
          <div class="grid-item" id="hihi">
          <h1>JavaScript Comparison and Logical Operators</h1>
          <div className='btns'>

        <Button variant="success">❮ Previous</Button>{' '} 
        <Button variant="success">Next ❯</Button>{' '}
        </div><hr />
        <p class="intro">Comparison and Logical operators are used to test for <code class="w3-codespan">true</code> or 
<code class="w3-codespan">false</code>.</p>
<hr/>

<h2>Comparison Operators</h2>
<p>Comparison operators are used in logical statements to determine equality or difference between variables or values. </p>
<p>Given that <code class="w3-codespan">x = 5</code>, the table below explains the comparison operators:</p>

<div class="w3-responsive" style={{margin:"-16px 0"}}>
<table class="ws-table-all notranslate">
<tr>
<th style={{width:"12%"}}>Operator</th>
<th>Description</th>
<th>Comparing</th>
<th>Returns</th>
<th style={{width:"10%"}}>Try it</th>
</tr>
<tr class="spes_table_row1">
<td rowspan="3">==</td>
<td rowspan="3">equal to</td>
<td>x == 8</td>
<td>false</td>
<td><a target="_blank" class="w3-btn btnsmall" href="tryit.asp?filename=tryjs_comparison1">Try it &raquo;</a></td> 
</tr>
<tr class="spes_table_row1">
<td>x == 5</td>
<td>true</td>
<td><a target="_blank" class="w3-btn btnsmall" href="tryit.asp?filename=tryjs_comparison2">Try it &raquo;</a></td> 
</tr>
<tr class="spes_table_row1">
<td>x == "5"</td>
<td>true</td>
<td><a target="_blank" class="w3-btn btnsmall" href="tryit.asp?filename=tryjs_comparison12">Try it &raquo;</a></td> 
</tr>
<tr class="spes_table_row2">
<td rowspan="2">===</td>
<td rowspan="2">equal value and equal type</td>
<td>x === 5</td>
<td>true</td>
<td><a target="_blank" class="w3-btn btnsmall" href="tryit.asp?filename=tryjs_comparison4">Try it &raquo;</a></td>
</tr>
<tr class="spes_table_row2">
<td>x === "5"</td>
<td>false</td>
<td><a target="_blank" class="w3-btn btnsmall" href="tryit.asp?filename=tryjs_comparison3">Try it &raquo;</a></td>
</tr>
<tr class="spes_table_row1">
<td>!=</td>
<td>not equal</td>
<td>x != 8</td>
<td>true</td>
<td><a target="_blank" class="w3-btn btnsmall" href="tryit.asp?filename=tryjs_comparison5">Try it &raquo;</a></td>
</tr>
<tr class="spes_table_row2">
<td rowspan="3">!==</td>
<td rowspan="3">not equal value or not equal type</td>
<td>x !== 5</td>
<td>false</td>
<td>
<a class="w3-btn btnsmall" href="tryit.asp?filename=tryjs_comparison7" target="_blank">Try it &raquo;</a></td>
</tr>
<tr class="spes_table_row2">
<td>x !== &quot;5&quot;</td>
<td>true</td>
<td>
<a class="w3-btn btnsmall" href="tryit.asp?filename=tryjs_comparison6" target="_blank">Try it &raquo;</a></td>
</tr>
<tr class="spes_table_row2">
<td>x !== 8</td>
<td>true</td>
<td>
<a class="w3-btn btnsmall" href="tryit.asp?filename=tryjs_comparison13" target="_blank">Try it &raquo;</a></td>
</tr>
<tr class="spes_table_row1">
<td>&gt;</td>
<td>greater than</td>
<td>x &gt; 8</td>
<td>false</td>
<td><a target="_blank" class="w3-btn btnsmall" href="tryit.asp?filename=tryjs_comparison8">Try it &raquo;</a></td>
</tr>
<tr class="spes_table_row2">
<td>&lt;</td>
<td>less than</td>
<td>x &lt; 8</td>
<td>true</td>
<td><a target="_blank" class="w3-btn btnsmall" href="tryit.asp?filename=tryjs_comparison9">Try it &raquo;</a></td>
</tr>
<tr class="spes_table_row1">
<td>&gt;=</td>
<td>greater than or equal to</td>
<td>x &gt;= 8</td>
<td>false</td>
<td><a target="_blank" class="w3-btn btnsmall" href="tryit.asp?filename=tryjs_comparison10">Try it &raquo;</a></td>
</tr>
<tr class="spes_table_row2">
<td>&lt;=</td>
<td>less than or equal to</td>
<td>x &lt;= 8</td>
<td>true</td>
<td><a target="_blank" class="w3-btn btnsmall" href="tryit.asp?filename=tryjs_comparison11">Try it &raquo;</a></td>
</tr>
</table>
</div>
<hr></hr>
<hr/>

<h2>Logical Operators</h2>
<p>Logical operators are used to determine the logic between variables or values.</p>
<p>Given that <code class="w3-codespan">x = 6</code> and <code class="w3-codespan">y = 3</code>, the table below explains the logical operators: </p>

<div class="w3-responsive" style={{margin:"-16px 0"}}>
<table class="ws-table-all notranslate">
<tr>
<th style={{width:"12%"}}>Operator</th>
<th>Description</th>
<th>Example</th>
<th style={{width:"10%"}}>Try it</th>
</tr>
<tr>
<td>&amp;&amp;</td>
<td>and</td>
<td> (x &lt; 10 &amp;&amp; y &gt; 1) is true</td>
<td><a target="_blank" class="w3-btn btnsmall" href="tryit.asp?filename=tryjs_comparison_and">Try it &raquo;</a></td>
</tr>
<tr>
<td>||</td>
<td>or</td>
<td>(x == 5 || y == 5) is false</td>
<td><a target="_blank" class="w3-btn btnsmall" href="tryit.asp?filename=tryjs_comparison_or">Try it &raquo;</a></td>
</tr>
<tr>
<td>!</td>
<td>not</td>
<td> !(x == y) is true</td>
<td><a target="_blank" class="w3-btn btnsmall" href="tryit.asp?filename=tryjs_comparison_not">Try it &raquo;</a></td>
</tr>
</table>
</div>
<hr/>
<h2>Conditional (Ternary) Operator</h2>
<p>JavaScript also contains a conditional operator that assigns a value to a variable based on some condition.</p>
<h3>Syntax</h3>

<div class="w3-code w3-border notranslate"><div>
 <em>variablename </em>= (<em>condition</em>) ?<em> value1</em>:<em>value2</em>&nbsp;</div></div>
 <hr/>
<h2>Comparing Different Types</h2>
<p>Comparing data of different types may give unexpected results.</p>
<p>When comparing a string with a number, JavaScript will convert the string to 
a number when doing the comparison. An empty string converts to 0. A non-numeric 
string converts to <code class="w3-codespan">NaN</code> which is always <code class="w3-codespan">false</code>.</p>

<table class="ws-table-all notranslate">
 <tr>
  <th>Case</th>
  <th>Value</th>
  <th style={{width:"10%"}}>Try</th>
 </tr>
 <tr>
  <td>2 &lt; 12</td>
  <td>true</td>
  <td><a target="_blank" class="w3-btn btnsmall" href="tryit.asp?filename=tryjs_comparison_20">Try it &raquo;</a></td>
 </tr>
 <tr>
  <td>2 &lt; &quot;12&quot;</td>
  <td>true</td>
  <td><a target="_blank" class="w3-btn btnsmall" href="tryit.asp?filename=tryjs_comparison_21">Try it &raquo;</a></td>
 </tr>
 <tr>
  <td>2 &lt; &quot;John&quot;</td>
  <td>false</td>
  <td><a target="_blank" class="w3-btn btnsmall" href="tryit.asp?filename=tryjs_comparison_23">Try it &raquo;</a></td>
 </tr>
 <tr>
  <td>2 &gt; &quot;John&quot;</td>
  <td>false</td>
  <td><a target="_blank" class="w3-btn btnsmall" href="tryit.asp?filename=tryjs_comparison_24">Try it &raquo;</a></td>
 </tr>
 <tr>
  <td>2 == &quot;John&quot;</td>
  <td>false</td>
  <td><a target="_blank" class="w3-btn btnsmall" href="tryit.asp?filename=tryjs_comparison_25">Try it &raquo;</a></td>
 </tr>
 <tr>
  <td>&quot;2&quot; &lt; &quot;12&quot;</td>
  <td>false</td>
  <td><a target="_blank" class="w3-btn btnsmall" href="tryit.asp?filename=tryjs_comparison_26">Try it &raquo;</a></td>
 </tr>
 <tr>
  <td>&quot;2&quot; &gt; &quot;12&quot;</td>
  <td>true</td>
  <td><a target="_blank" class="w3-btn btnsmall" href="tryit.asp?filename=tryjs_comparison_27">Try it &raquo;</a></td>
 </tr>
 <tr>
  <td>&quot;2&quot; == &quot;12&quot;</td>
  <td>false</td>
  <td><a target="_blank" class="w3-btn btnsmall" href="tryit.asp?filename=tryjs_comparison_28">Try it &raquo;</a></td>
 </tr>
</table>

<p>When comparing two strings, &quot;2&quot; will be greater than &quot;12&quot;, because 
(alphabetically) 1 is less than 2.</p>
<p>To secure a proper result, variables should be converted to the proper type 
before comparison:</p>
<hr/>
<h2>The Nullish Coalescing Operator (??)</h2>
<p>The <code class="w3-codespan">??</code> operator returns the first argument if it is not <b>nullish</b>
(<code class="w3-codespan">null</code> or <code class="w3-codespan">undefined</code>).</p>
<p>Otherwise it returns the second argument.</p>
<div className="btns">
              <Button variant="success">❮Previous</Button>{" "}
              <Button variant="success">Next ❯</Button>{" "}
            </div>
            <div className='fullwi'>
  <Footer/>
  </div>
            </div></div></div>
    </div>
  )
}

export default Js_comparsion
