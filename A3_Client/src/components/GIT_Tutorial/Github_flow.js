import React from 'react'
import Navbar2 from '../Navbar2';
import { Button } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import Footer from '../Footer';
const Github_flow = () => {
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
        <h1>Git <span class="color_h1">GitHub Flow</span></h1>
        <div className='btns'>

<Button variant="success">❮ Previous</Button>{' '} 
<Button variant="success">Next ❯</Button>{' '}
</div><hr /><div className='topg'><h2>Working using the GitHub Flow</h2>
<p>On this page, you will learn how to get the best out of working with 
GitHub.</p>
<p>The GitHub flow is a workflow designed to work well with Git and GitHub.</p>
<p>It focuses on branching and makes it possible for teams to experiment freely, and make deployments regularly.</p>
<p>The GitHub flow works like this:</p>
<ul className='introul'>
  <li>Create a new Branch</li>
  <li>Make changes and add Commits</li>
  <li>Open a Pull Request</li>
  <li>Review</li>
  <li>Deploy</li>
  <li>Merge</li>
</ul><p>You should already have a good understanding of how this works from the 
previous chapters. This chapter focuses on understanding how the flow 
makes it easy for you to work together.</p>
</div><hr/><h2>Create a New Branch</h2>
<p>Branching is the key concept in Git. And it works around the rule that the 
master branch is ALWAYS deployable.</p>
<p>That means, if you want to try something new or experiment, you create a new 
branch! Branching gives you an environment where you can make changes without 
affecting the main branch.</p>
<p>When your new branch is ready, it can be reviewed, discussed, and merged with 
the main branch when ready.</p>
<p>When you make a new branch, you will (almost always) want to make it from 
the master branch.</p>
<div class="w3-panel w3-note">
  <p><strong>Note:</strong> Keep in mind that you are working with others. Using descriptive names for 
new branches, so everyone can understand what is happening.</p>
</div><hr/>
<h2>Make Changes and Add Commits</h2>
<p>After the new branch is created, it is time to get to work. Make 
changes by adding, editing and deleting files. Whenever you reach a small 
milestone, add the changes to your branch by commit.</p>
<p>Adding commits keeps track of your work. Each commit should have a message 
explaining what has changed and why. Each commit becomes a part of the history 
of the branch, and a point you can revert back to if you need to.</p>
<div class="w3-panel w3-note">
  <p><strong>Note:</strong> commit messages are very important! Let everyone 
  know what has changed and why. Messages and comments make it so much easier for yourself 
  and other people to keep track of changes.</p>
</div><hr/>
<h2>Open a Pull Request</h2>
<p>Pull requests are a key part of GitHub. A Pull Request notifies 
people you have changes ready for them to consider or review.</p>
<p>&nbsp;You can ask others to review your changes or pull your contribution 
and merge it into their branch.</p>
<hr/>
<h2>Review</h2>
<p>When a Pull Request is made, it can be reviewed by whoever has the proper 
access to the branch. This is where good discussions and review of the changes 
happen.</p>
<p>Pull Requests are designed to allow people to work together easily and 
produce better results together!</p>
<p>If you receive feedback and continue to 
improve your changes, you can push your changes with new commits, making further 
reviews possible.</p>
<div class="w3-panel w3-note">
  <p><strong>Note:</strong> GitHub shows new commit and feedback in the &quot;unified 
  Pull Request view&quot;.</p>
</div>
<hr/>
<h2>Deploy</h2>
<p>When the pull request has been reviewed and everything looks good, it is time 
for the final testing. GitHub allows you to deploy from a branch for final 
testing in production before merging with the master branch.</p>
<p>If any issues arise, you can undo the changes by deploying the master branch 
into production again!</p>
<div class="w3-panel w3-note">
  <p><strong>Note:</strong> Teams often have dedicated testing environments used 
  for deploying branches.</p>
</div>


<hr/>
<h2>Merge</h2>
<p>After exhaustive testing, you can merge the code into the master branch!</p>
<p>Pull Requests keep records of changes to your code, and if you commented and 
named changes well, you can go back and understand why changes and decisions 
were made.</p>
<div class="w3-panel w3-note">
  <p><strong>Note:</strong> You can add keywords to your pull request for easier 
  searching!</p>
</div>
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

export default Github_flow
