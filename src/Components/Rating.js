import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import React from "react";

const Rating = ({ rating, onClick }) => {
  return (
    <>
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          onClick={() => onClick(index)}
          style={{ cursor: "pointer" }}
        >
          {rating > index ? <AiFillStar /> : <AiOutlineStar />}
        </span>
      ))}
    </>
  );
};

export default Rating;
