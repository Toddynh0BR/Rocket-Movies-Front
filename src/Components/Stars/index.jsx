import React from "react";
import { Container } from "./style";
import { MdStar, MdStarBorder } from "react-icons/md";

export function Stars({ rating }) {
  return (
    <Container data-rating={rating}>
      <MdStar className="yes1" /><MdStarBorder className="no1" />
      <MdStar className="yes2" /><MdStarBorder className="no2" />
      <MdStar className="yes3" /><MdStarBorder className="no3" />
      <MdStar className="yes4" /><MdStarBorder className="no4" />
      <MdStar className="yes5" /><MdStarBorder className="no5" />
    </Container>
  );
}