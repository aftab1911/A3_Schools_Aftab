import React from 'react'
import Navbar2 from '../Navbar2';
import { Button } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import Footer from '../Footer';
import './Git_homeStyle.css';
const Git_home = () => {
  return (
    <div>
       <Navbar2/>
      <div class="grid-container">
        <div className="grid-item fd " expand="lg"><br />
            <h3 className='heading'>Git Tutorial</h3>
            <div className="newd"><ul className='ul1'>
        <li className="rcolor"><a target="_top" href="/gitHome">Git HOME</a></li>
   <li className="rcolor"><a target="_top" href="/gitCommit">Git Intro</a></li>
    <li className="rcolor"><a target="_top" href="/githubFlow">Git Get Started</a></li>
   <li className="rcolor"><a target="_top" href="/gitIgnore">Git New Files</a></li>
   <li className="rcolor"><a target="_top" href="/gitHome">Git Staging Environment</a></li>
   <li className="rcolor"><a target="_top" href="/gitCommit">Git Commit</a></li>
   <li className="rcolor"><a target="_top" href="/githubFlow">Git Help</a></li>
   <li className="rcolor"><a target="_top" href="/gitIgnore">Git Branch</a></li>
   <li className="rcolor"><a target="_top" href="/gitHome">Git Branch Merge</a></li>
   <li className="rcolor"><a target="_top" href="/gitCommit">GitHub Get Started</a></li>
    <li className="rcolor"><a target="_top" href="/githubFlow">GitHub Edit Code</a></li>
    <li className="rcolor"><a target="_top" href="/gitIgnore">Pull from GitHub</a></li>
<li className="rcolor"><a target="_top" href="/gitHome">Push to GitHub</a></li>
<li className="rcolor"><a target="_top" href="/githubFlow">GitHub Branch</a></li>
<li className="rcolor"><a target="_top" href="/gitCommit">Pull Branch from GitHub</a></li>

  <li className="rcolor"><a target="_top" href="/gitHome">Push Branch to GitHub</a></li>
  <li className="rcolor"><a target="_top" href="/githubFlow">GitHub Flow</a></li>
  <li className="rcolor"><a target="_top" href="/gitIgnore">GitHub Pages</a></li>
<br />
<h2 class="heading" style={{color:"black"}}>Git Contribute</h2>
<li className="rcolor"><a target="_top" href="/gitCommit">GitHub Fork</a></li>
<div class="tut_overview">
  <li className="rcolor"><a target="_top" href="/gitHome">Git Clone from GitHub</a></li>
  <li className="rcolor"><a target="_top" href="/githubFlow">GitHub Send Pull Request</a></li>
  <li className="rcolor"><a target="_top" href="/gitIgnore">Git .gitignore</a></li>
  <li className="rcolor"><a target="_top" href="/gitCommit">Git Security SSH</a></li>
</div>
<li className="rcolor"><a target="_top" href="/gitHome">GitHub Add SSH</a></li>
<li className="rcolor"><a target="_top" href="/githubFlow">Git Revert</a></li>
<li className="rcolor"><a target="_top" href="/gitIgnore">Git Reset</a></li>
  <li className="rcolor"><a target="_top" href="/gitCommit">Git Amend</a></li><br />
  <h2 class="heading" style={{color:"black"}}>Git Exercises</h2>

  <li className="rcolor"><a target="_top" href="/gitHome">Git Quiz</a></li>
  </ul></div></div>
        <div class="grid-item" id='hihi'><br />
        <h1>Git <span class="color_h1">Tutorial</span></h1>
        <div className='btns'>

<Button variant="success">❮ Previous</Button>{' '} 
<Button variant="success">Next ❯</Button>{' '}
</div>
<div class="w3-panel w3-info intro topg" style={{backgroundColor:"#f3ecea",color:"#000"}}>
<p>Git is a version control system.</p>
<p>Git helps you keep track of code changes.</p>
<p>Git is used to collaborate on code.</p>
</div>
<h2>Learning by Examples</h2>
<p>In this tutorial, we will show you Git commands like this:</p>

<div class="w3-example">
  <h3>Example</h3>
<pre class="command-line" data-output="2" data-user="user" data-host="localhost"><code class="language-shell" style={{backgroundColor:"black",color:"white"}}>git --version
git version 2.30.2.windows.1</code></pre>
</div>
<p>For new users, using the terminal view can seem a bit complicated. Don't worry! We will keep it really simple, and learning this way gives you a good grasp of how Git works.</p>
<p>In the code above, you can see commands (input) and output.</p>
<p>Lines like this are commands we input:</p>
<div class="w3-example">
  <h3>Example</h3>
<pre class="command-line" data-user="user" data-host="localhost"><code class="language-shell" style={{backgroundColor:"black",color:"white"}}>git --version</code></pre>
</div>
<p>Lines like this are the output/response to our commands:</p>
<div class="w3-example">
  <h3>Example</h3>
<pre class="command-line" data-output="1" data-user="user" data-host="localhost"><code class="language-shell" style={{backgroundColor:"black",color:"white"}}>git version 2.30.2.windows.1</code></pre>
</div>
<p>In general, lines with <code>$</code> in front of it is input. These are the commands you can copy and run in your terminal.</p>
<hr></hr>
<h2>Git and Remote Repositories</h2>
<p>Git and GitHub are different things.</p>
<p>In this tutorial you will understand what Git is and how to use it on the remote repository platforms, like GitHub.</p>
<p>You can choose, and change, which platform to focus on by clicking in the menu on the right:</p>
<hr style={{clear:"both"}}/>
<h2>Git Exercises</h2>
<form autocomplete="off" id="w3-exerciseform" action="exercise.asp?filename=exercise_getstarted1" method="post" target="_blank">
<h2>Test Yourself With Exercises</h2>
<div class="exercisewindow">
<h2>Exercise:</h2>
<p>Insert the missing part of the command to check which version of Git (if any) 
is installed.</p>
<div class="exerciseprecontainer">
<pre>
git <input name="ex1" maxlength="9" style={{width: "100px"}}/>
</pre>
</div>
<br/>
<button type="submit" class="w3-btn w3-margin-bottom">Submit Answer &raquo;</button>
<p>
<a target="_blank" href="exercise.asp?filename=exercise_getstarted1">Start the Exercise</a></p>
</div>
</form>
<hr></hr>
<div className='btns'>

<Button variant="success">❮ Home</Button>{' '} 
<Button variant="success">Next ❯</Button>{' '}
</div>
<div className='fullwi'>
  <Footer/>
  </div>
        </div></div>
    </div>
  )
}

export default Git_home
