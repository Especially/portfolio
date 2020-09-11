import React from 'react';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
// import Section from './components/Section/Section';

function App() {
  return (
    <>
      <div className="hero">
        <div className="hero__content">
          <h1 className="hero__title">Josh Walters</h1>
          <div className="hero__avatar"></div>
          <p className="hero__desc">Full-Stack Web Developer, meme lover and I often like to think that I'm a photographer when I'm taking pics with my phone.</p>
          <div className="hero__socials">
            <a className="hero__link" target="_blank" rel="noopener noreferrer" href="http://linkedin.com/in/joshwalters94">
              <i className="fab fa-linkedin hero__icon" title="Check out my LinkedIn!"></i>
            </a>
            <a className="hero__link" target="_blank" rel="noopener noreferrer" href="https://github.com/especially">
              <i className="fab fa-github-square hero__icon" title="Check out my GitHub!"></i>
            </a>
          </div>
        </div>
      </div>
      <main className="container">
        <About />
        <Projects />
      </main>
    </>
  );
}

export default App;
