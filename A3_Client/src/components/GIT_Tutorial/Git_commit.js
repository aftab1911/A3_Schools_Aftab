import React from 'react'
import Navbar2 from '../Navbar2';
import { Button } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import Footer from '../Footer';
const Git_commit = () => {
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
        <h1>Git <span class="color_h1">Commit</span></h1>
        <div className='btns'>

<Button variant="success">❮ Previous</Button>{' '} 
<Button variant="success">Next ❯</Button>{' '}
</div><hr />
<div className='topg'>
<h2>Git Commit</h2>
<p>Since we have finished our work,  
we are ready move from <code class="w3-codespan">stage</code> to <code class="w3-codespan">commit</code> 
for our repo.</p>
<p>Adding commits keep track of our progress and changes as we work. Git 
considers each <code class="w3-codespan">commit</code> change point or &quot;save point&quot;. It is a point in the project 
you can go back to if you find a bug, or want to make a change.</p>
<p>When we <code class="w3-codespan">commit</code>, we should <strong>always</strong> include a <strong>message</strong>.</p>
<p>By adding clear messages to each <code class="w3-codespan">commit</code>, it is easy for yourself (and others) 
to see what has changed and when.</p></div>
<p>The <code class="w3-codespan">commit</code>  command performs a commit, and the <code class="w3-codespan">-m &quot;<em>message</em>&quot;</code> adds a message.</p>
<p>The Staging Environment has been committed to our repo, with the message:<br/>&quot;First release of Hello World!&quot;</p>
<hr></hr>
<h2>Git Commit without Stage</h2>
<p>Sometimes, when you make small changes, using the staging environment seems like a waste of time. It is possible to commit changes directly, skipping the staging environment.
The <code class="w3-codespan">-a</code> option will automatically stage every 
changed, already tracked file.</p>
<p>Let's add a small update to index.html:</p>
<div class="w3-panel w3-note">
  <p><strong>Note:</strong> Short status flags are:</p>
  <ul className='introul'>
    <li>?? - Untracked files</li>
    <li>A - Files added to stage</li>
    <li>M - Modified files</li>
    <li>D - Deleted files</li>
  </ul>
</div>
<div class="w3-panel w3-warning" style={{backgroundColor:"#ffdddd"}}>
  <p><strong>Warning:</strong> Skipping the Staging Environment is not generally recommended.</p>
  <p>Skipping the stage step can sometimes make you include unwanted changes.</p>
</div>
<h2>Git Commit Log</h2>
<p>To view the history of commits for a repository, you can use the <code class="w3-codespan">log</code> command:</p><hr/>
<form autocomplete="off" id="w3-exerciseform" action="exercise.asp?filename=exercise_commit1" method="post" target="_blank">
<h2>Test Yourself With Exercises</h2>
<div class="exercisewindow">
<h2>Exercise:</h2>
<p>Commit the changes to the current repository with the message "First release!</p>
<div class="exerciseprecontainer">
<pre>
git <input name="ex1" maxlength="6" style={{width: "80px"}}/> <input name="ex2" maxlength="2" style={{width: "30px"}}/> "First release!"/
</pre>
</div>
<br/>
<button type="submit" class="w3-btn w3-margin-bottom">Submit Answer &raquo;</button>
<p>
<a target="_blank" href="exercise.asp?filename=exercise_commit1">Start the Exercise</a></p>
</div>
</form>
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

export default Git_commit
