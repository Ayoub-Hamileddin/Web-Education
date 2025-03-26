import React from "react";
import { FaStar } from "react-icons/fa";
import { IoMdAlarm } from "react-icons/io";
import { HiOutlineBookOpen } from "react-icons/hi";
import { FaChevronRight } from "react-icons/fa6";

export default function Course({
  id,
  img,
  department,
  title,
  rating,
  description,
  sales,
  price,
  discount,
  duration,
  lessons,
}) {
  return (
    <div className="course">
      <span className="sale">sale</span>
      <img src={img} alt={title} />
      <div className="content">
        <div className="course-field">
          <p className="departement">{department}</p>
          <p className="rating">
            <FaStar />
            {rating}
          </p>
        </div>
        <h3>{title}</h3>
        <p className="description">{description}</p>
        <p className="sales">{sales} sales</p>
        <p className="price">
          <del>{price}</del>
          <span className="text-secondary">{discount}</span>
        </p>
        <div className="info-course">
          <p>
            <IoMdAlarm />
            {duration}
          </p>
          <p>
            <HiOutlineBookOpen />
            {lessons}
          </p>
        </div>
        <a className="btn-learn" href="">
          learn More
          <FaChevronRight />
        </a>
      </div>
    </div>
  );
}
