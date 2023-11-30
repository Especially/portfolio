import React from "react";
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";
import {
  Hero,
  HeroDesc,
  HeroVideo,
  HeroIcon,
  HeroSocials,
  HeroAvatar,
  HeroLink,
  HeroContent,
  HeroTitle,
} from "./s-main";
import heroVideo from "../../assets/images/videos/hero.mp4";
import { Outlet } from "react-router-dom";

function Main() {
  return (
    <>
      <Hero>
        <HeroVideo autoPlay loop muted playsinline>
          <source src={heroVideo} type="video/mp4" />
        </HeroVideo>
        <HeroContent>
          <HeroTitle>Josh Walters</HeroTitle>
          <HeroAvatar />
          <HeroDesc>
            Full-Stack Web Developer, meme lover and I often like to think that
            I'm a photographer when I'm taking pics with my phone.
          </HeroDesc>
          <HeroSocials>
            <HeroLink
              target="_blank"
              rel="noopener noreferrer"
              href="http://linkedin.com/in/joshwalters94"
            >
              <HeroIcon
                className="fab fa-linkedin"
                title="Check out my LinkedIn!"
              />
            </HeroLink>
            <HeroLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/especially"
            >
              <HeroIcon
                className="fab fa-github-square"
                title="Check out my GitHub!"
              />
            </HeroLink>
          </HeroSocials>
        </HeroContent>
      </Hero>
      <main>
        <About />
        <Projects />
        <Outlet />
      </main>
    </>
  );
}

export default Main;
