import React from 'react';
import './about.scss';

const About = () => {


  return (
    <section className="about">
      <h1>About Me</h1>
      <div className="about__holder">
        {/* <img src={} alt="Josh Walters" /> */}
        <div className="about__content">
          <p>Ever since I was about 10 I've dabbled in developing websites, whether it be for leisure or to create concepts which could make one's life much easier.</p>
          <p>I think I started to actually realize my talent when it came to converting my father's way of handling his business into a much more effecient and digital way! I couldn't fathom how he managed to do everything on pen and paper, and so begun my journey (and love) of developing web applications that can make people's lives much, much easier.</p>
          <p>Aside from developing, I'm very much an extrovert, so in my off time, I'm usually off on an adventure with some friends, or taking one of my nature walks and pretending that I'm a photographer (or videographer, depending on my mood) with my iPhone.</p>
        </div>
      </div>
    </section>
  );
}

export default About;