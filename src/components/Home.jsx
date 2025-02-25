import React, { useState, useEffect } from "react";
import endpoints from "../constants/endpoints";
import FallbackSpinner from "./FallbackSpinner";
import Typewriter from "typewriter-effect";
import { Reveal, Slide, Fade } from "react-awesome-reveal";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(endpoints.home, { method: "GET" });
        const res = await response.json();
        setData(res);
      } catch (err) {
        console.error("Home fetch Error", err);
      }
    };
    fetchData();
  }, []);

  return data ? (
    <div id="/" className="home">
      <Reveal duration={3000} triggerOnce>
        <div className="homeimage">
          <img
            src={process.env.PUBLIC_URL + "/images/rabbani_t.png"}
            alt="ProfilePic"
            style={{
              width: "350px",
              height: "350px",
              objectFit: "cover",
              borderRadius: "50%",
              border: "5px solid #fff",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          />
        </div>
      </Reveal>
      <Fade direction="right" duration={3000} cascade damping={1e3} triggerOnce>
        <div className="hometext">
          <h1 className="name">{data.name}</h1>
          <div className="textanimation">
            <h2 className="im">I'm</h2>
            <span>&nbsp;</span>
            <Typewriter
              options={{
                strings: data.roles,
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className="home-paragraph">
            <p>{data.paragraph}</p>
          </div>
        </div>
      </Fade>
    </div>
  ) : (
    <FallbackSpinner />
  );
};

export default Home;
