import React from 'react'
import Navbar2 from '../Navbar2';
import { Button } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import Footer from '../Footer';
import './Js_bitwiseStyle.css';
const Js_bitwise = () => {
  return (
    <div>
       <div>
      <Navbar2/>
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
        <div class="grid-item" id='hihi'>
        <h1>JavaScript <span class="color_h1">Bitwise Operations</span></h1>
        <div className='btns'>

<Button variant="success">❮ Previous</Button>{' '} 
<Button variant="success">Next ❯</Button>{' '}
</div><hr />
<h2>JavaScript Bitwise Operators</h2>

<table class="ws-table-all notranslate">
<tr>
<th>Operator</th>
<th>Name</th>
<th>Description</th>
</tr>
<tr>
<td>&amp;</td>
<td>AND</td>
<td>Sets each bit to 1 if both bits are 1</td>
</tr>
<tr>
<td>|</td>
<td>OR</td>
<td>Sets each bit to 1 if one of two bits is 1</td>
</tr>
<tr>
<td>^</td>
<td>XOR</td>
<td>Sets each bit to 1 if only one of two bits is 1</td>
</tr>
<tr>
<td>~</td>
<td>NOT</td>
<td>Inverts all the bits</td>
</tr>
<tr>
<td>&lt;&lt;</td>
<td>Zero fill left shift</td>
<td>Shifts left by pushing zeros in from the right and let the leftmost bits fall off</td>
</tr>
<tr>
<td>&gt;&gt;</td>
<td>Signed right shift</td>
<td>Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits 
fall off</td>
</tr>
<tr>
<td>&gt;&gt;&gt;</td>
<td>Zero fill right shift</td>
<td>Shifts right by pushing zeros in from the left, and let the rightmost bits fall off</td>
</tr>
</table>
<h2>Examples</h2>
<div class="w3-responsive">
<table class="ws-table-all notranslate">
<tr>
<th>Operation</th>
<th >Result</th>
<th >Same as</th>
<th>Result</th>
</tr>
<tr>
<td>5 &amp; 1</td>
<td>1</td>
<td>0101 &amp; 0001</td>
<td>&nbsp;0001</td>
</tr>
<tr>
<td>5 | 1</td>
<td>5</td>
<td>0101 | 0001</td>
<td>&nbsp;0101</td>
</tr>
<tr>
<td>~ 5</td>
<td>10</td>
<td>&nbsp;~0101</td>
<td>&nbsp;1010</td>
</tr>
<tr>
<td>5 &lt;&lt; 1</td>
<td>10</td>
<td>0101 &lt;&lt; 1</td>
<td>&nbsp;1010</td>
</tr>
<tr>
<td>5 ^ 1</td>
<td>4</td>
<td>0101 ^ 0001</td>
<td>&nbsp;0100</td>
</tr>
<tr>
<td>5 &gt;&gt; 1</td>
<td>2</td>
<td>0101 &gt;&gt; 1</td>
<td>&nbsp;0010</td>
</tr>
<tr>
<td>5 &gt;&gt;&gt; 1</td>
<td>2</td>
<td>0101 &gt;&gt;&gt; 1</td>
<td>&nbsp;0010</td>
</tr>
</table>
</div>
<hr/><h2>JavaScript Uses 32 bits Bitwise Operands</h2>
<p>JavaScript stores numbers as 64 bits floating point numbers, but all bitwise 
operations are performed on 32 bits binary numbers. </p>
<p>Before a bitwise operation is performed, JavaScript converts numbers to 32 bits 
signed integers.</p>
<p>After the bitwise operation is performed, the result is converted back to 64 bits JavaScript 
numbers.</p>
<div class="w3-container w3-note">
<p>The examples above uses 4 bits unsigned binary numbers. Because of this ~ 5 returns 10.</p>
<p>Since JavaScript uses 32 bits signed integers, it will not return 10. It will return -6.</p>
<p>00000000000000000000000000000101 (5)</p>
<p>11111111111111111111111111111010 (~5 = -6)</p>
<p>A signed integer uses the leftmost bit as the minus sign.</p>
</div>
<h2>JavaScript Bitwise AND</h2>
<p>When a bitwise AND is performed on a pair of bits, it returns 1 if both bits are 1.</p>
<div class="w3-row-padding" style={{margin:"0 -16px"}}>
<div class="w3-half " style={{padding: "0 8px"}}>
One bit example:
<table class="ws-table-all">
  <tr><th>Operation</th><th>Result</th></tr>
  <tr><td>0 &amp; 0</td><td>0</td></tr>
  <tr><td>0 &amp; 1</td><td>0</td></tr>
  <tr><td>1 &amp; 0</td><td>0</td></tr>
  <tr><td>1 &amp; 1</td><td>1</td></tr>
</table>
</div>
<div class="w3-half">
4 bits example:
<table class="ws-table-all">
  <tr><th>Operation</th><th>Result</th></tr>
  <tr><td>1111 &amp; 0000</td><td>0000</td></tr>
  <tr><td>1111 &amp; 0001</td><td>0001</td></tr>
  <tr><td>1111 &amp; 0010</td><td>0010</td></tr>
  <tr><td>1111 &amp; 0100</td><td>0100</td></tr>
</table>
</div>
</div>
<hr/>
<h2>JavaScript Bitwise OR</h2>
<p>When a bitwise OR is performed on a pair of bits, it returns 1 if one of the bits is 1:</p>
<div class="w3-row-padding" style={{margin:"0 -16px"}}>
<div class="w3-half">
One bit example:
<table class="ws-table-all">
  <tr><th>Operation</th><th>Result</th></tr>
  <tr><td>0 | 0</td><td>0</td></tr>
  <tr><td>0 | 1</td><td>1&nbsp;</td></tr>
  <tr><td>1 | 0</td><td>1</td></tr>
  <tr><td>1 | 1</td><td>1</td></tr>
</table>
</div>
<div class="w3-half">
4 bits example:
<table class="ws-table-all">
  <tr><th>Operation</th><th>Result</th></tr>
  <tr><td>1111 | 0000</td><td>1111</td></tr>
  <tr><td>1111 | 0001</td><td>1111</td></tr>
  <tr><td>1111 | 0010</td><td>1111</td></tr>
  <tr><td>1111 | 0100</td><td>1111</td></tr>
</table>
</div>
</div>
<hr/>

<h2>JavaScript Bitwise XOR</h2>
<p>When a bitwise XOR is performed on a pair of bits, it returns 1 if the bits are different:</p>
<div class="w3-row-padding" style={{margin:"0 -16px"}}>
<div class="w3-half">
One bit example:
<table class="ws-table-all">
  <tr><th>Operation</th><th>Result</th></tr>
  <tr><td>0 ^ 0</td><td>0</td></tr>
  <tr><td>0 ^ 1</td><td>1&nbsp;</td></tr>
  <tr><td>1 ^ 0</td><td>1</td></tr>
  <tr><td>1 ^ 1</td><td>0&nbsp;</td></tr>
</table>
</div>
<div class="w3-half">
4 bits example:
<table class="ws-table-all">
  <tr><th>Operation</th><th>Result</th></tr>
  <tr><td>1111 ^ 0000</td><td>1111</td></tr>
  <tr><td>1111 ^ 0001</td><td>1110</td></tr>
  <tr><td>1111 ^ 0010</td><td>1101</td></tr>
  <tr><td>1111 ^ 0100</td><td>1011</td></tr>
</table>
</div>
</div>
<hr/>
<h2>JavaScript Bitwise AND (&amp;)</h2>
<p>Bitwise AND returns 1 only if both bits are 1:</p>

<table class="ws-table-all">
<tr><th>Decimal</th><th>Binary</th></tr>
<tr><td>5</td><td>00000000000000000000000000000101</td></tr>
<tr><td>1</td><td>00000000000000000000000000000001</td></tr>
<tr><td>5 &amp; 1</td><td>00000000000000000000000000000001 (1)</td></tr>
</table><h2>JavaScript Bitwise OR (|)</h2>
<p>Bitwise OR returns 1 if one of the bits is 1:</p>
<table class="ws-table-all">
<tr><th>Decimal</th><th>Binary</th></tr>
<tr><td>5</td><td>00000000000000000000000000000101</td></tr>
<tr><td>1</td><td>00000000000000000000000000000001</td></tr>
<tr><td>5 | 1</td><td>00000000000000000000000000000101 (5)</td></tr>
</table>
<h2>JavaScript Bitwise XOR (^)</h2>
<p>Bitwise XOR returns 1 if the bits are different:</p>
<table class="ws-table-all">
<tr><th>Decimal</th><th>Binary</th></tr>
<tr><td>5</td><td>00000000000000000000000000000101</td></tr>
<tr><td>1</td><td>00000000000000000000000000000001</td></tr>
<tr><td>5 ^ 1</td><td>00000000000000000000000000000100 (4)</td></tr>
</table>
<h2>Binary Numbers</h2>
<p>Binary numbers with only one bit set are easy to understand:</p>
<table class="ws-table-all">
<tr><th>Binary Representation</th><th>Decimal value</th></tr>
<tr><td>00000000000000000000000000000001</td><td>1</td></tr>
<tr><td>00000000000000000000000000000010</td><td>2</td></tr>
<tr><td>00000000000000000000000000000100</td><td>4</td></tr>
<tr><td>00000000000000000000000000001000</td><td>8</td></tr>
<tr><td>00000000000000000000000000010000</td><td>16</td></tr>
<tr><td>00000000000000000000000000100000</td><td>32</td></tr>
<tr><td>00000000000000000000000001000000</td><td>64</td></tr>
</table>
<p>Setting a few more bits reveals the binary pattern:</p>
<table class="ws-table-all">
<tr><th>Binary Representation</th><th>Decimal value</th></tr>
<tr><td>00000000000000000000000000000101</td><td>5 (4 + 1)</td></tr>
<tr><td>00000000000000000000000000001101</td><td>13 (8 + 4 + 1)</td></tr>
<tr><td>00000000000000000000000000101101</td><td>45 (32 + 8 + 4 + 1)</td></tr>
</table>
<p>JavaScript binary numbers are stored in two's complement format.</p>
<p>This means that a negative number is the bitwise NOT of the number plus 1:</p>
<table class="ws-table-all">
<tr><th>Binary Representation</th><th>Decimal value</th></tr>
<tr><td>00000000000000000000000000000101</td><td>5</td></tr>
<tr><td>11111111111111111111111111111011</td><td>-5</td></tr>
<tr><td>00000000000000000000000000000110</td><td>6</td></tr>
<tr><td>11111111111111111111111111111010</td><td>-6</td></tr>
<tr><td>00000000000000000000000000101000</td><td>40</td></tr>
<tr><td>11111111111111111111111111011000</td><td>-40</td></tr>
</table>

<div class="w3-note">
<h2>Joke:</h2>
<p>There are only 10 types of people in the world: those who understand binary and those who don't.</p></div>
<hr/>
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

export default Js_bitwise
