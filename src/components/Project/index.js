import React from "react";
import boredAf from "../../assests/images/boredAF.JPG";
import desk from "../../assests/images/pic.jpg";
import running from "../../assests/images/hero-bg.jpg";
import robot from "../../assests/images/robot-clipart.png";
import laptop from "../../assests/images/laptop.png";

function Projects() {
  return (
    <section id="my-work" className="bio">
      <h2 class="title">My Work</h2>
      <div className="container">
        <div className="row">
          <div className="col">
            <a
              href="https://zsvoboda87.github.io/Bored-AF/"
              className="main-img"
            >
              <img
                src={boredAf}
                alt="brand of the website with the words Bored a f and names of the developers"
              />
              <div class="bottom-left">BoredAF Javascript</div>
            </a>
          </div>
          <div className="col">
            <a
              href="https://pure-everglades-43557.herokuapp.com/"
              className="image1"
            >
              <img src={desk} alt="laptop on a desk in a bright room" />
              <div class="bottom-left">CC Javascript</div>
            </a>
          </div>
          <div className="col">
            <a href="https://brinabean.github.io/run-buddy/" className="image1">
              <img src={running} alt="person tying their shoe ready to run" />
              <div class="bottom-left">Run Buddy html</div>
            </a>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <a
            href="https://brinabean.github.io/Robot-Gladiators/"
            class="image2"
          >
            <img src={robot} alt="Cute robot ready for battle" />
            <div class="bottom-left">Robot Battle javascript</div>
          </a>
        </div>
        <div className="col">
          <a
            href="https://brinabean.github.io/Horiseon-refactored/"
            class="image3"
          >
            <img src={laptop} alt="laptop with tree graph on the screen" />
            <div class="bottom-left">Horiseon html</div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
