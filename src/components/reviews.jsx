import React from "react";
import SectionHeader from "./Section-header";
import { ratingData } from "../data";
import Review from "./review";

export default function Reviews() {
  return (
    <section id="review">
      <div className="container">
        <SectionHeader
          title={"Each and every client is importante"}
          description={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium debitis aspernatur velit saepe accusamus totam at ducimus suscipit fugiat maxime architecto tempore expedita aperiam, vitae doloribus deleniti iusto magnam dolor"
          }
        />
        <div className="ratings container">
          {ratingData.map((rating) => {
            const { id, img, stars, description, name, job } = rating
            return (
              <Review
                key={id}
                id={id}
                img={img}
                stars={stars}
                description={description}
                name={name}
                job={job}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
