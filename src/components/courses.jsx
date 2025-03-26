import React from "react";
import SectionHeader from "./Section-header";
import { coursesData } from "../data";
import Course from "./Course";

export default function Courses() {
  return (
    <section id="courses">
      <div className="container">
        <SectionHeader
          title="make online education accessible"
          description="Lorem iLorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur eos, hic animi rerum, repellendus sapiente iure reiciendis, quo iusto accusamus vitae? Rem, error odit quos facilis minus earum. Adipisci, voluptas.psum dolor sit amet consectetur adipisicing elit. Quidem dolore ratione beatae, ut alias perferendis maxime aperiam. Recusandae ipsa labore fugiat ut consectetur facere maiores in! Quae iste natus eos"
        />
      </div>
      <div className="courses-container">
        {coursesData.map((course,index)=>{
            const{id,img,department,title,rating,description,sales,price,discount,duration,lessons}=course
            return (
              <Course
                key={index}
                id={id}
                img={img}
                department={department}
                title={title}
                rating={rating}
                description={description}
                sales={sales}
                price={price}
                discount={discount}
                duration={duration}
                lessons={lessons}
              />
            );
        })}
      </div>
    </section>
  );
}
