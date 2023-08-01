import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";

const featuresData = [
  {
    title: "Language Understanding",
    text: "GPT-3 comprehends natural language input, enabling accurate responses and context-based interactions.",
  },
  {
    title: "Text Generation",
    text: "It generates coherent and human-like text, making it ideal for chatbots and content creation.",
  },
  {
    title: "Versatile Applications",
    text: "GPT-3 adapts to various tasks, such as translation, Q&A, and code completion.",
  },
  {
    title: "Large Model Capacity",
    text: "With 175 billion parameters, GPT-3 possesses extensive knowledge and enhances performance in diverse language tasks.",
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">
        The Future is Now and You Just Need to Realize It. Step into Future
        Today. & Make it Happen.
      </h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
