import React from "react";
import { cardData } from "../data";
import Card from "./card";

export default function Home() {
  return (
    <section id="home">
      <div className="container">
        <div className="home-header">
          <span>join us</span>
          <h1>Best Opportunities For Learning </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            alias inventore ipsum exercitationem nulla nihil?
          </p>
          <a href="" className="btn btn-red">get quote now </a>
          <a href="" className="btn btn-transparent"> learn more</a>
        </div>
        <div className="card-container">
        {cardData.map(card=>{
          const {id,img,title,description,color,bgColor}=card
          return (
            <Card
              key={id}
              id={id}
              img={img}
              title={title}
              description={description}
              color={color}
              bgColor={bgColor}
            />
          );
        })}
        </div>
      </div>
    </section>
  );
}
