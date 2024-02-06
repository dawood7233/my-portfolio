import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import "./style.scss";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
    <section id="home" className="home">
      <div className="home__container">
        <h1>
          Hello,I'm Dawood
          <br />
          Front-end developer
        </h1>
      </div>
      <Animate play 
      duration={1.5}
        delay={1}
        start=
        {{
          transform: "translateY(150px)",
        }}
        end=
        {{
          transfrom: "translateX(0px)",
        }}>
        <div className="home__contact-me">
          <button onClick={() => navigate("/resume")}>Hire me</button>
          <a href="/Muhammad Dawood(updated).pdf" download="Resume">
            <button>Download Resume</button>
          </a>
        </div>
      </Animate>
    </section>
    </>
  );
};


export default Home;
