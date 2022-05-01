import React from "react";
import profPic from "../../assests/images/prof.jpg";

function About() {
  return (
    <section id="about" className="my-5">
      <h1>Sabrina Zanin</h1>
      <img src={profPic} alt="profile" />
      <div className="my-2">
        <p>
          My name is Sabrina Zanin and I am in the process of becoming a full
          stack web developer. I have a backgroung in various programming
          languages such as; python, R, and javascript. I enjoy working out the
          fine details that go into creating code for websites. I believe web
          developers are some of the most important people in this era of the
          internet.
        </p>
      </div>
    </section>
  );
}

export default About;
