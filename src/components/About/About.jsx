import React from 'react';
import {Section, Paragraph} from '../../styles/globalStyles';
import {Title, Highlight} from './about';

const About = () => {


  return (
    <Section>
      <Title>Who is <Highlight>Josh</Highlight>?</Title>
      <div className="about__holder">
        <div className="about__content">
          <Paragraph>Ever since I was about 10 years old, I've dabbled in developing websites, whether it be for leisure or to create concepts which could make one's life much easier.</Paragraph>
          <Paragraph>I think I started to actually realize my talent when it came to converting my father's way of handling his business into a much more effecient and digital way! I couldn't fathom how he managed to do everything on pen and paper, and so begun my journey (and love) of developing web applications that can make people's lives much, much easier.</Paragraph>
          <Paragraph>Aside from developing, I'm very much an extrovert, so in my off time, I'm usually off on an adventure with some friends, or taking one of my nature walks and pretending that I'm a photographer (or videographer, depending on my mood) with my iPhone.</Paragraph>
        </div>
      </div>
    </Section>
  );
}

export default About;