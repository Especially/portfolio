import React from 'react';
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
      <section className="container__section">
          <h1>About Me</h1>
          <div className="content-holder">
            <img src={} alt="Josh Walters" />
            <div classNAme="content-holder__">
              
            </div>
            <p>I've blah blah blah blah blah blah blah blah blah</p>
          </div>
        </section>
        <section className="section accordion">
          <h1>Projects</h1>
          <div className="accordion__block">
            <h2>Project Name</h2>
          </div>
          <div className="accordion__block accordion__block--collapsed">
            <h2>Project Name</h2>
          </div>
        </section>
      </main>
      <article>
        <section className="section">
          <h1>About</h1>
        </section>
        <section className="section accordion">
          <h1>Projects</h1>
          <div className="accordion__block">
            <h2>Project Name</h2>
          </div>
          <div className="accordion__block accordion__block--collapsed">
            <h2>Project Name</h2>
          </div>
        </section>
      </article>
      <article>
        <section className="section">
          <h1>About</h1>
        </section>
        <section className="section accordion">
          <h1>Projects</h1>
          <div className="accordion__block">
            <h2>Project Name</h2>
          </div>
          <div className="accordion__block accordion__block--collapsed">
            <h2>Project Name</h2>
          </div>
        </section>
      </article>
      <article>
        <section className="section">
          <h1>About</h1>
        </section>
        <section className="section accordion">
          <h1>Projects</h1>
          <div className="accordion__block">
            <h2>Project Name</h2>
          </div>
          <div className="accordion__block accordion__block--collapsed">
            <h2>Project Name</h2>
          </div>
        </section>
      </article>
      <article>
        <section className="section">
          <h1>About</h1>
        </section>
        <section className="section accordion">
          <h1>Projects</h1>
          <div className="accordion__block">
            <h2>Project Name</h2>
          </div>
          <div className="accordion__block accordion__block--collapsed">
            <h2>Project Name</h2>
          </div>
        </section>
      </article>
    </>
  );
}

export default App;
