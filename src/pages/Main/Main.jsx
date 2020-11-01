import React from 'react';
import About from '../../components/About/About';
import Projects from '../../components/Projects/Projects';
import styled from 'styled-components';
import DeviceSize from '../../styles/mixins/DeviceSizes';

const HeroContent = styled.div`
  width: 100%;
  max-width: 400px;
  ${DeviceSize.custom(`
  width: 400px;
  height: 400px;
`,'min','565px')}

  &:before {
    display: none;
    ${DeviceSize.custom(`
      display: inherit;
    `,'min','565px')}
  }
`;

function Main() {
  return (
    <>
      <div className="hero">
        <HeroContent className="hero__content">
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
        </HeroContent>
      </div>
      <main className="container">
        <About />
        <Projects />
      </main>
    </>
  );
}

export default Main;
