import React from 'react'
import Navbar2 from '../Navbar2';
import { Button } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import Footer from '../Footer';
const REACT_home = () => {
  return (
    <div>
       <div>
      <Navbar2/>
      <div class="grid-container">
        <div className="grid-item fd " expand="lg"><br />
            <h3 className='heading'>REACT Tutorial</h3>
            <div className="newd"><ul className='ul1'>
        <li className="rcolor"><a target="_top" href="/reactHome">React Home</a></li>
   <li className="rcolor"><a target="_top" href="/reactRouter">React Intro</a></li>
    <li className="rcolor"><a target="_top" href="/reactCompiler">React Get Started</a></li>
   <li className="rcolor"><a target="_top" href="/reactHook">React Upgrade</a></li>
   <li className="rcolor"><a target="_top" href="/reactHome">React ES6</a></li>
   <li className="rcolor"><a target="_top" href="/reactRouter">React Render HTML</a></li>
   <li className="rcolor"><a target="_top" href="/reactCompiler">React JSX</a></li>
   <li className="rcolor"><a target="_top" href="/reactHook">React Components</a></li>
   <li className="rcolor"><a target="_top" href="/reactRouter">React Class</a></li>
   <li className="rcolor"><a target="_top" href="/reactCompiler">React Props</a></li>
    <li className="rcolor"><a target="_top" href="/reactHome">React Events</a></li>
    <li className="rcolor"><a target="_top" href="/reactHook">React Conditionals</a></li>
<li className="rcolor"><a target="_top" href="/reactRouter">React Lists</a></li>
<li className="rcolor"><a target="_top" href="/reactHome">React Forms</a></li>
<li className="rcolor"><a target="_top" href="/reactRouter">React Router</a></li>

  <li className="rcolor"><a target="_top" href="/reactHook">React Memo</a></li>
  <li className="rcolor"><a target="_top" href="/reactRouter">React CSS Styling</a></li>
  <li className="rcolor"><a target="_top" href="/reactHome">React Sass Styling</a></li>
<br />
<h2 class="heading" style={{color:"black"}}>React Hooks</h2>
<li className="rcolor"><a target="_top" href="/reactHook">What is a Hook?</a></li>
<div class="tut_overview">
  <li className="rcolor"><a target="_top" href="/reactHook">useState</a></li>
  <li className="rcolor"><a target="_top" href="/reactCompiler">useEffect</a></li>
  <li className="rcolor"><a target="_top" href="/reactHome">useContext</a></li>
  <li className="rcolor"><a target="_top" href="/reactRouter">useRef</a></li>
</div>
<li className="rcolor"><a target="_top" href="/reactHook">useReducer</a></li>
<li className="rcolor"><a target="_top" href="/reactRouter">useCallback</a></li>
<li className="rcolor"><a target="_top" href="/reactHome">useMemo</a></li>
  <li className="rcolor"><a target="_top" href="/reactRouter">Custom Hooks</a></li><br />
  <h2 class="heading" style={{color:"black"}}>React Exercises</h2>

  <li className="rcolor"><a target="_top" href="/reactCompiler">React Compiler</a></li>
  <li className="rcolor"><a target="_top" href="/reactHome">React Quiz</a></li>
  <li className="rcolor"><a target="_top" href="/reactCompiler">React Exercises</a></li>
  <li className="rcolor"><a target="_top" href="/reactHome">React Certificate</a></li>
  </ul></div></div>
        <div class="grid-item" id='hihi'><br />
        <h1>React Tutorial</h1>
        <div className='btns'>

<Button variant="success">❮ Home</Button>{' '} 
<Button variant="success">Next ❯</Button>{' '}
</div><hr />
<div class="w3-panel w3-info intro topg" style={{backgroundColor:"#f3ecea",color:"#000"} }>

  <p>React is a JavaScript library for building user interfaces.</p>
  <p>React is used to build single-page applications.</p>
  <p>React allows us to create reusable UI components.</p>
</div>

<hr></hr>
<h2>Create React App</h2>

<p>To learn and test React, you should set up a React Environment on 
your computer.</p>
<p>This tutorial uses the <code class="w3-codespan">create-react-app</code>.</p>

<p>The <code class="w3-codespan">create-react-app</code> tool is an officially supported way to create React applications.</p>
<p><a href="https://nodejs.org" target="_blank">Node.js</a> is required to use <code class="w3-codespan">create-react-app</code>.</p>

<p>Open your terminal in the directory you would like to create your 
application.</p>
<p>Run this command to create a React application named
<code class="w3-codespan">my-react-app</code>:</p>

<div class="w3-example">
<div class="w3-code notranslate w3-black">
  npx create-react-app my-react-app
</div>
</div>

<p><code class="w3-codespan">create-react-app</code> will set up everything you need to run a React application.</p>

<div class="w3-panel w3-note">
<p><strong>Note:</strong>
If you've previously installed <code class="w3-codespan">create-react-app</code> globally,
it is recommended that you uninstall the package to ensure npx always uses the latest version of
<code class="w3-codespan">create-react-app</code>.
To uninstall, run this command: <code class="w3-codespan">npm uninstall -g create-react-app</code>.
</p>
</div>
<hr/>

<h2>Run the React Application</h2>

<p>Run this command to move to the <code class="w3-codespan">my-react-app</code> directory:</p>

<div class="w3-example">
<div class="w3-code notranslate w3-black" style={{backgroundColor:"black",color:"white"}}>
  cd my-react-app
</div>
</div>

<p>Run this command to execute the React application <code class="w3-codespan">
my-react-app</code>:</p>

<div class="w3-example">
<div class="w3-code notranslate w3-black" style={{backgroundColor:"black",color:"white"}}>
  npm start
</div>
</div>
<p>A new browser window will pop up with your newly created React App! If not, open your browser and type 
<code class="w3-codespan">localhost:3000</code> in the address bar.</p>

<p>The result:</p>

<div class="w3-container w3-margin-top">
<img src="https://www.w3schools.com/react/screenshot_myfirstreact.png" style={{maxWidth:"100%"}}/>
</div>
<br/>

<div class="w3-panel w3-note">
<p>You will learn more about the <code class="w3-codespan">create-react-app</code> in the <a href="react_getstarted.asp">React Get Started</a> chapter.</p>
</div>
<hr/>


<h2>What You Should Already Know</h2>
<p>Before starting with React.JS, you should have intermediate experience in:</p>
<ul className='introul'>
<li>HTML</li>
<li>CSS</li>
<li>JavaScript</li>
</ul>

<p>You should also have some experience with the new JavaScript features 
introduced in ECMAScript 6 (ES6), you will learn about them in the <a href="react_es6.asp">React ES6</a> chapter.</p>
<hr></hr>
<div className='btns'>

<Button variant="success">❮ Home</Button>{' '} 
<Button variant="success">Next ❯</Button>{' '}
</div>
<div className='fullwi'>
  <Footer/>
  </div>
            </div></div></div>
    </div>
  )
}

export default REACT_home
