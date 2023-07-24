import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import React from "react";

const Rating = ({ rate, onClick, style }) => {
  return (
    <>
      {[...Array(5)].map((_, index) => (
        <span
          disabled
          key={index}
          onClick={() => onClick && onClick(index)}
          style={style}
        >
          {rate > index ? <AiFillStar /> : <AiOutlineStar />}
        </span>
      ))}
    </>
  );
};

export default Rating;
