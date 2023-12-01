import React from 'react'
import Navbar2 from '../Navbar2';
import { Button } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import Footer from '../Footer';
const React_hook = () => {
  return (
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
        <h1>React Hooks</h1>
        <div className='btns'>

<Button variant="success">❮ Previous</Button>{' '} 
<Button variant="success">Next ❯</Button>{' '}
</div><hr />
<p class="intro">Hooks were added to React in version 16.8.</p>
<p class="intro">Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.</p>
<div class="w3-panel w3-note">
<p>Although Hooks generally replace class components, there are no plans to remove classes from React.</p>
</div>
<hr/>
<div className='topg'> 
<h2>What is a Hook?</h2>

<p>Hooks allow us to "hook" into React features such as state and lifecycle methods.</p>
</div>
<p>You must <code class="w3-codespan">import</code> Hooks from <code class="w3-codespan">react</code>.</p>

<p>Here we are using the <code class="w3-codespan">useState</code> Hook to keep track of the application state.</p>

<p>State generally refers to application data or properties that need to be tracked.</p>
<h2>Hook Rules</h2>

<p>There are 3 rules for hooks:</p>

<ul className='introul'>
<li>Hooks can only be called inside React function components.</li>
  <li>Hooks can only be called at the top level of a component.</li>
  <li>Hooks cannot be conditional</li>
</ul>

<div class="w3-panel w3-note">
<p><strong>Note:</strong> Hooks will not work in React class components.</p>
</div>
<h2>Custom Hooks</h2>
<p class="intro">Hooks are reusable functions.</p>
<p class="intro">When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.</p>
<p class="intro">Custom Hooks start with "use". Example: <code class="w3-codespan">useFetch</code>.</p>
<hr></hr>
<h2>Build a Hook</h2>

<p>In the following code, we are fetching data in our <code class="w3-codespan">Home</code> component and displaying it.</p>

<p>We will use the <a href="https://jsonplaceholder.typicode.com/" target="_blank">JSONPlaceholder</a> service to fetch fake data. This service is great for testing applications when there is no existing data.</p>

<p>To learn more, check out the <a href="/js/js_api_fetch.asp">JavaScript Fetch API</a> section.</p>

<p>Use the JSONPlaceholder service to fetch fake "todo" items and display the titles on the page:</p>
<div className='btns'>

<Button variant="success">❮ Previous</Button>{' '} 
<Button variant="success">Next ❯</Button>{' '}
</div>
<div className='fullwi'>
  <Footer/>
  </div>
        </div></div></div>

  )
}

export default React_hook
