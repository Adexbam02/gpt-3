import React from "react";
import Article from "../../components/article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">
        A lot is happening, <br /> We are blogging about it.
      </h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article
          imgUrl={blog01}
          date="Sep 26, 2022"
          text="Unleashing the Power of GPT-3"
        />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article
          imgUrl={blog02}
          date="Sep 26, 2021"
          text="How GPT-3 is Transforming Chatbots"
        />
        <Article
          imgUrl={blog03}
          date="Jan 6, 2022"
          text="Beyond Text Generation"
        />
        <Article
          imgUrl={blog04}
          date="Jun 2, 2022"
          text="Demystifying GPT-3"
        />
        <Article
          imgUrl={blog05}
          date="Aug 26, 2023"
          text="GPT-3 and what to expect!"
        />
      </div>
    </div>
  </div>
);

export default Blog;
