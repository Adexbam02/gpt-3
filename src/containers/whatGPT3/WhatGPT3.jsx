import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="
GPT-3, short for 'Generative Pre-trained Transformer 3' is a highly advanced language model by OpenAI, boasting 175 billion parameters. It excels in natural language processing tasks, such as text generation and translation, due to its extensive training on diverse text data. GPT-3 is a groundbreaking leap in AI language capabilities." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="GPT-3 functions as a chatbot by processing natural language and generating human-like responses, providing interactive and conversational experiences." />
      <Feature title="Knowledgebase" text="GPT-3 acts as a knowledgebase, tapping into its vast data training to provide extensive information and answer queries accurately." />
      <Feature title="Education" text="GPT-3 serves an educational role by offering informative responses, facilitating learning experiences, and assisting with academic queries through its language understanding and knowledge capabilities." />
    </div>
  </div>
);

export default WhatGPT3;
