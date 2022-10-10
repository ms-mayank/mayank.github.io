import React from "react";
import "./portfolio.css";
import Tab from "../tab/Tab";
import IMG1 from "../../assets/p1.jpg";
import IMG2 from "../../assets/p2.jpg";
import IMG3 from "../../assets/p3.jpg";
import IMG4 from "../../assets/p4.jpg";
import IMG5 from "../../assets/p5.jpg";
import IMG6 from "../../assets/p6.jpg";
import IMG7 from "../../assets/p7.jpg";

const data = [
  {
    id: 1,
    image: IMG2,
    title: "React Daily Planner",
    type: "react",
    github: "https://github.com/msmayank555/ReactJs-Daily-Planner",
    demo: "",
  },
  {
    id: 2,
    image: IMG5,
    title: "React Portfolio Site",
    type: "react",
    github: "https://github.com/msmayank555",
    demo: "#",
  },
  {
    id: 3,
    image: IMG2,
    title: "Toastmaster Timer",
    type: "javascript",
    github: "https://github.com/msmayank555/Javascript/tree/master/Toastmasters-timer",
    demo: "http://toastmasters-timer.herokuapp.com/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Tic Tac Toe",
    type: "javascript",
    github: "https://github.com/msmayank555/Javascript/tree/master/Tic%20Tac%20Toe",
    demo: "",
  },
  {
    id: 5,
    image: IMG5,
    title: "Daily Notes",
    type: "javascript",
    github: "https://github.com/msmayank555/Javascript/tree/master/Project%20-%20Daily%20notes",
    demo: "",
  },
  {
    id: 6,
    image: IMG6,
    title: "Javascript Calculator",
    type: "javascript",
    github: "https://github.com/msmayank555/Javascript/tree/master/JS%20calculator",
    demo: "",
  },
  {
    id: 7,
    image: IMG1,
    title: "E-billing Governing Fraud Detection ",
    type: "python",
    github: "https://github.com/msmayank555/E-billing_governing_fraud_detection",
    demo: "",
  },
  {
    id: 8,
    image: IMG6,
    title: "Automated Bulk Image Compression",
    type: "python",
    github: "https://github.com/msmayank555/image_compresson",
    demo: "",
  },
  {
    id: 9,
    image: IMG7,
    title: "Automated Finding-404-Link-error Using Python",
    type: "python",
    github: "https://github.com/msmayank555/Finding-Link-error-404",
    demo: "",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      {/* {console.log(
        data.filter((e) => {
          return e.type !== "react";
        })
      )} */}
      <Tab portfolioData={data} />
      {/* <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
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
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div> */}
    </section>
  );
};

export default Portfolio;
