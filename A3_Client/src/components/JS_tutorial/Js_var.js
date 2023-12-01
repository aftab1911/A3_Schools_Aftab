import React from "react";
import Navbar2 from "../Navbar2";
import { Button } from "react-bootstrap";
import "font-awesome/css/font-awesome.min.css";
import Footer from "../Footer";
const Js_var = () => {
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
            <h1>
              JavaScript <span class="color_h1">Variables</span>
            </h1>

            <div className="btns">
              <Button variant="success">❮Previous</Button>{" "}
              <Button variant="success">Next ❯</Button>{" "}
            </div>
            <div class="w3-info topg">
              <h3>Variables are Containers for Storing Data</h3>
              <p>JavaScript Variables can be declared in 4 ways:</p>
              <ul className="introul">
                <li>Automatically</li>
                <li>
                  Using <code class="w3-codespan">var</code>
                </li>
                <li>
                  Using <code class="w3-codespan">let</code>
                </li>
                <li>
                  Using <code class="w3-codespan">const</code>
                </li>
              </ul>
            </div>
            <div class="h4-example">
              <h3>Example</h3>
              <div class="h4-code notranslate htmlHigh">
                <span style={{ color: "brown" }}>
                  x = <span style={{ color: "red" }}>5;</span>
                </span>
                <br />
                <span style={{ color: "brown" }}>
                  y = <span style={{ color: "red" }}>6;</span>
                </span>
                <br />
                <span style={{ color: "brown" }}>
                  z = <span style={{ color: "brown" }}>x + y ;</span>
                </span>
                <br />
              </div>{" "}
              <div className="trybtn">
                {" "}
                <Button variant="success">
                  <a
                    href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default"
                    className="restyle"
                    target="_blank"
                  >
                    Try it Yourself&raquo;
                  </a>
                </Button>{" "}
              </div>
            </div>
            <div class="w3-panel w3-note">
              <h2>Note</h2>
              <p>
                It is considered good programming practice to always declare
                variables before use.
              </p>
            </div>
            <p>From the examples you can guess:</p>
            <ul className="introul">
              <li>x stores the value 5</li>
              <li>y stores the value 6</li>
              <li>z stores the value 11</li>
            </ul>
            <div class="h4-example">
              <h3>Example Using var</h3>
              <div class="h4-code notranslate htmlHigh">
                <span style={{ color: "brown" }}>
                  var x = <span style={{ color: "red" }}>5;</span>
                </span>
                <br />
                <span style={{ color: "brown" }}>
                  var y = <span style={{ color: "red" }}>6;</span>
                </span>
                <br />
                <span style={{ color: "brown" }}>
                  var z = <span style={{ color: "brown" }}>x + y ;</span>
                </span>
                <br />
              </div>{" "}
              <div className="trybtn">
                {" "}
                <Button variant="success">
                  <a
                    href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default"
                    className="restyle"
                    target="_blank"
                  >
                    Try it Yourself&raquo;
                  </a>
                </Button>{" "}
              </div>
            </div>
            <div class="w3-panel w3-note">
              <h2>Note</h2>
              <p>
                The <code class="w3-codespan">var</code> keyword was used in all
                JavaScript code from 1995 to 2015.
              </p>
              <p>
                The <code class="w3-codespan">let</code> and{" "}
                <code class="w3-codespan">const</code> keywords were added to
                JavaScript in 2015.
              </p>
              <p>
                The <code class="w3-codespan">var</code> keyword should only be
                used in code written for older browsers.
              </p>
            </div>
            <div class="h4-example">
              <h3>Example Using let</h3>
              <div class="h4-code notranslate htmlHigh">
                <span style={{ color: "brown" }}>
                  let x = <span style={{ color: "red" }}> 5;</span>
                </span>
                <br />
                <span style={{ color: "brown" }}>
                  let y = <span style={{ color: "red" }}> 6;</span>
                </span>
                <br />
                <span style={{ color: "brown" }}>
                  let z = <span style={{ color: "brown" }}> x + y ;</span>
                </span>
                <br />
              </div>{" "}
              <div className="trybtn">
                {" "}
                <Button variant="success">
                  <a
                    href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default"
                    className="restyle"
                    target="_blank"
                  >
                    Try it Yourself&raquo;
                  </a>
                </Button>{" "}
              </div>
            </div>
            <div class="h4-example">
              <h3>Example Using Const</h3>
              <div class="h4-code notranslate htmlHigh">
                <span style={{ color: "brown" }}>
                  const x = <span style={{ color: "red" }}> 5;</span>
                </span>
                <br />
                <span style={{ color: "brown" }}>
                  const y = <span style={{ color: "red" }}> 6;</span>
                </span>
                <br />
                <span style={{ color: "brown" }}>
                  const z = <span style={{ color: "brown" }}> x + y ;</span>
                </span>
                <br />
              </div>
              <div className="trybtn">
                {" "}
                <Button variant="success">
                  <a
                    href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default"
                    className="restyle"
                    target="_blank"
                  >
                    Try it Yourself&raquo;
                  </a>
                </Button>{" "}
              </div>
            </div>
            <div class="h4-example">
              <h3>Mixed Example</h3>
              <div class="h4-code notranslate htmlHigh">
                <span style={{ color: "brown" }}>
                  const price1 = <span style={{ color: "red" }}> 5;</span>
                </span>
                <br />
                <span style={{ color: "brown" }}>
                  const price2 = <span style={{ color: "red" }}> 6;</span>
                </span>
                <br />
                <span style={{ color: "brown" }}>
                  let z = <span style={{ color: "brown" }}> price1 + price2 ;</span>
                </span>
                <br />
              </div>
              <div className="trybtn">
                {" "}
                <Button variant="success">
                  <a
                    href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default"
                    className="restyle"
                    target="_blank"
                  >
                    Try it Yourself&raquo;
                  </a>
                </Button>{" "}
              </div>
            </div>
            <p>The two variables <code class="w3-codespan">price1</code> and <code class="w3-codespan">price2</code>
are declared with the <code class="w3-codespan">const</code> keyword.</p>
<p>These are constant values and cannot be changed.</p>
<p>The variable <code class="w3-codespan">total</code> is declared with the <code class="w3-codespan">let</code> keyword.</p>
<p>The value <code class="w3-codespan">total</code> can be changed.</p>
<div class="w3-panel w3-note">
<h2>When to Use var, let, or const?</h2>
<p>1. Always declare variables</p>
<p>2. Always use <code class="w3-codespan">const</code> if the value should not be changed</p>
<p>3. Always use <code class="w3-codespan">const</code> if the type should not be changed (Arrays and Objects)</p>
<p>4. Only use <code class="w3-codespan">let</code> if you can't use <code class="w3-codespan">const</code></p>
<p>5. Only use <code class="w3-codespan">var</code> if you MUST support old browsers.</p>
</div>
<hr/>
<h2>Just Like Algebra</h2>

<p>Just like in algebra, variables hold values:</p>
<div class="h4-example">
              <div class="h4-code notranslate htmlHigh">
                <span style={{ color: "brown" }}>
                  let x = <span style={{ color: "red" }}> 5;</span>
                </span>
                <br />
                <span style={{ color: "brown" }}>
                 let y  = <span style={{ color: "red" }}> 6;</span>
                </span>
                <br />
              </div>
              <div className="trybtn">
                {" "}
                <Button variant="success">
                  <a
                    href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default"
                    className="restyle"
                    target="_blank"
                  >
                    Try it Yourself&raquo;
                  </a>
                </Button>{" "}
              </div>
            </div>
            <div class="w3-panel w3-note">
<h2>Note</h2>
<p>Variables are containers for storing values.</p>
</div>
<h2>JavaScript Identifiers</h2>
<p>All JavaScript <strong>variables</strong> must be
<strong>identified</strong> with <strong>unique names</strong>.</p>
<p>These unique names are called <strong>identifiers</strong>.</p>

<p>Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).</p>
<p>The general rules for constructing names for variables (unique identifiers) are:</p>
<ul className="introul">
  <li>Names can contain letters, digits, underscores, and dollar signs.</li>
  <li>Names must begin with a letter.</li>
  <li>Names can also begin with $ and _ (but we will not use it in this tutorial).</li>
  <li>Names are case sensitive (y and Y are different variables).</li>
  <li>Reserved words (like JavaScript keywords) cannot be used as names.</li>
</ul>

<div class="w3-panel w3-note">
<h2>Note</h2>
<p>JavaScript identifiers are case-sensitive.</p>
</div>
<hr/>
<h2>JavaScript Data Types</h2>
<p>JavaScript variables can hold numbers like 100 and text values like &quot;John 
Doe&quot;.</p>
<p>In programming, text values are called text strings.</p>
<p>JavaScript can handle many types of data, but for now, just think of numbers and strings. </p>

<p>Strings are written inside double or single quotes. Numbers are written 
without quotes.</p>
<p>If you put a number in quotes, it will be treated as a text string.</p>
<hr/>

<h2>Value = undefined</h2>
<p>In computer programs, variables are often declared without a value. The value 
can be something that has to be calculated, or something that will be provided 
later, like user input.</p>
<p>A variable declared without a value will have the value <code class="w3-codespan">
undefined</code>.</p>
<p>The variable carName will have the value <code class="w3-codespan">undefined</code> after the execution of this statement:</p>
<div className="btns">
              <Button variant="success">❮Previous</Button>{" "}
              <Button variant="success">Next ❯</Button>{" "}
            </div>
            <div className='fullwi'>
  <Footer/>
  </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Js_var;
