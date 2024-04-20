import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const titles = [
  "",
  "I'm a Web Developer",
  "I'm a Designer",
  "I'm a ML Developer",
  "I'm a DevOps Learner",
  "I'm an AI Instructor"
];

export default function HeroSection() {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: titles,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      showCursor: false,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Elyes Besbes</p>
          <h1 className="hero--section--title" ref={typedRef}></h1>
          <p className="hero--section-description">
            Passionate about web development, DevOps, and AI. 
            <br/>
            Always ready for new challenges.
          </p>
        </div>
        <button className="btn btn-primary" href="">Get In Touch</button>
        <a href="https://drive.google.com/file/d/1MO7eCg0LYQcsKRoAgnVJIej2LVStwJVp/view?usp=sharing" target='display'>
          <button className="btn btn-outline-primary" >Check Resume</button>
        </a>
        </div>
      <div className="hero--section--img">
        <img src="./img/me.png" alt="Hero Section"/>
      </div>
    </section>
  );
}
