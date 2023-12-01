import React from 'react'
import Navbar2 from '../Navbar2';
import { Button } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import Footer from '../Footer';
const React_Router = () => {
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
        <h1>React Router</h1>
        <div className='btns'>

<Button variant="success">❮ Previous</Button>{' '} 
<Button variant="success">Next ❯</Button>{' '}
</div><hr />
<p class="intro">Create React App doesn't include page routing.</p>

<p class="intro">React Router is the most popular solution.</p>

<hr></hr>
<h2>Add React Router</h2>
<p>To add React Router in your application, run this in the terminal from the root directory of the application:</p>

<div class="w3-example">
<div class="w3-code notranslate w3-black" style={{backgroundColor:"black",color:"white"}}>
  npm i -D react-router-dom
</div>
</div>

<div class="w3-panel w3-note">
<p><strong>Note:</strong> This tutorial uses React Router v6.</p>
<p>If you are upgrading from v5, you will need to use the @latest flag:</p>
</div>

<div class="w3-example">
<div class="w3-code notranslate w3-black" style={{backgroundColor:"black",color:"white"}}>
  npm i -D react-router-dom@latest
</div>
</div>
<hr/>
<h2>Folder Structure</h2>

<p>To create an application with multiple page routes, let's first start with the file structure.</p>

<p>Within the <code class="w3-codespan">src</code> folder, we'll create a folder named
<code class="w3-codespan">pages</code> with several files:</p>

<p><code class="w3-codespan">src\pages\</code>:</p>

<ul className='introul'>
<li><code class="w3-codespan">Layout.js</code></li>
<li><code class="w3-codespan">Home.js</code></li>
<li><code class="w3-codespan">Blogs.js</code></li>
<li><code class="w3-codespan">Contact.js</code></li>
<li><code class="w3-codespan">NoPage.js</code></li>
</ul>
<p>Each file will contain a very basic React component.</p>
<hr />
<h2>Example Explained</h2>

<p>We wrap our content first with <code class="w3-codespan">&lt;BrowserRouter&gt;</code>.</p>

<p>Then we define our <code class="w3-codespan">&lt;Routes&gt;</code>.
An application can have multiple <code class="w3-codespan">&lt;Routes&gt;</code>.
Our basic example only uses one.</p>
<p>
<code class="w3-codespan">&lt;Route&gt;</code>s can be nested.
The first <code class="w3-codespan">&lt;Route&gt;</code> has a path of <code class="w3-codespan">/</code>
and renders the <code class="w3-codespan">Layout</code> component.</p>
<p>
The nested <code class="w3-codespan">&lt;Route&gt;</code>s inherit and add to the parent route.
So the <code class="w3-codespan">blogs</code> path is combined with the parent and becomes
<code class="w3-codespan">/blogs</code>.</p>
<p>
The <code class="w3-codespan">Home</code> component route does not have a path but has an
<code class="w3-codespan">index</code> attribute.
That specifies this route as the default route for the parent route, which is <code class="w3-codespan">/</code>.</p>
<p>
Setting the <code class="w3-codespan">path</code> to <code class="w3-codespan">*</code> will act as a 
catch-all for any undefined URLs. This is great for a 404 error page.</p>
<hr />
<h2>Pages / Components</h2>
<p>
The <code class="w3-codespan">Layout</code> component has
<code class="w3-codespan">&lt;Outlet&gt;</code> and <code class="w3-codespan">&lt;Link&gt;</code> elements.</p>

<p>The <code class="w3-codespan">&lt;Outlet&gt;</code> renders the current route selected.</p>

<p><code class="w3-codespan">&lt;Link&gt;</code> is used to set the URL and keep track of browsing history.</p>

<p>Anytime we link to an internal path, we will use <code class="w3-codespan">&lt;Link&gt;</code>
instead of <code class="w3-codespan">&lt;a href=""&gt;</code>.</p>

<p>The "layout route" is a shared component that inserts common content on all pages, such as a navigation menu.</p>
<div className='btns'>

<Button variant="success">❮ Previous</Button>{' '} 
<Button variant="success">Next ❯</Button>{' '}
</div>
<div className='fullwi'>
  <Footer/>
  </div>
        </div></div>
    </div>
  )
}

export default React_Router
