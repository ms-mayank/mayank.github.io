import React, { useState } from "react";
import "./Tab.css";

const Tab = ({ portfolioData }) => {
  const [toggletab, setToggleTab] = useState(1);
  function toggle(index) {
    setToggleTab(index);
  }
  return (
    <section className="container">
      <div className="tab-head">
        <div className={toggletab === 1 ? "btn btn-primary" : "btn"} onClick={() => toggle(1)}>
          JavaScript
        </div>
        <div className={toggletab === 2 ? "btn btn-primary" : "btn"} onClick={() => toggle(2)}>
          ReactJs
        </div>
        <div className={toggletab === 3 ? "btn btn-primary" : "btn"} onClick={() => toggle(3)}>
          Python
        </div>
      </div>
      <div className="tab-content">
        <div className={toggletab === 1 ? "content content-active" : "content"}>
          <h2>JavaScript Projects</h2>
          <div className="portfolio__container">
            {portfolioData.map(({ id, image, title, type, github, demo }) => {
              if (type === "javascript") {
                return (
                  <article key={id} className="portfolio__item">
                    <div className="portfolio__item-image">
                      <img src={image} alt={title} />
                    </div>
                    <h3>{title}</h3>
                    <div className="portfolio-item-cta">
                      <a href={github} className="btn">
                        Github
                      </a>
                      <a href={demo} style={{ display: demo === "" ? "none" : "" }} className="btn btn-primary" target="_blank">
                        Live Demo
                      </a>
                    </div>
                  </article>
                );
              }
            })}
          </div>
        </div>
        <div className={toggletab === 2 ? "content content-active" : "content"}>
          <h2>ReactJs Projects</h2>
          <div className="portfolio__container">
            {portfolioData.map(({ id, image, title, type, github, demo }) => {
              if (type === "react") {
                return (
                  <article key={id} className="portfolio__item">
                    <div className="portfolio__item-image">
                      <img src={image} alt={title} />
                    </div>
                    <h3>{title}</h3>
                    <div className="portfolio-item-cta">
                      <a href={github} className="btn">
                        Github
                      </a>
                      <a href={demo} style={{ display: demo === "" ? "none" : "" }} className="btn btn-primary" target="_blank">
                        Live Demo
                      </a>
                    </div>
                  </article>
                );
              }
            })}
          </div>
        </div>
        <div className={toggletab === 3 ? "content content-active" : "content"}>
          <h2>Python Projects</h2>
          <div className="portfolio__container">
            {portfolioData.map(({ id, image, title, type, github, demo }) => {
              if (type === "python") {
                return (
                  <article key={id} className="portfolio__item">
                    <div className="portfolio__item-image">
                      <img src={image} alt={title} />
                    </div>
                    <h3>{title}</h3>
                    <div className="portfolio-item-cta">
                      <a href={github} className="btn">
                        Github
                      </a>
                      <a href={demo} style={{ display: demo === "" ? "none" : "" }} className="btn btn-primary" target="_blank">
                        Live Demo
                      </a>
                    </div>
                  </article>
                );
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tab;
