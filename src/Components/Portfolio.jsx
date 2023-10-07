/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "E-Cormmerce Website 🎉",
    description:
      "A web app built with MongoDb, Express.Js, ReactJs and Node.Js. A payment gateway was also initialized in this app to",
    url: "https://thegodman-yfjr.onrender.com/",
  },
  {
    title: "Frontend Developer at Ratefy.co  🎉",
    description:
      "Played a key role in the development of pages featured on the Ratefy website, enhancing the platform with professional skills and elevating the user experience.",
    url: "https://ratefy.co/",
  },
  {
    title: "My Resume Site",
    description:
      "Created with HTML, CSS and JavaScript. Deployed with netlify. Includes my experience and coding abilities.",
    url: "https://akintemijoshua.netlify.app/",
  },
  {
    title: "Food Delivery Site",
    description:
      "An innovative food delivery application seamlessly integrated with the secure and efficient Paystack gateway for hassle-free payment processing",
    url: "https://sparklingoodycreations.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
