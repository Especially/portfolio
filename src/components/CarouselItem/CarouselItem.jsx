import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StackItem from "../StackItem/StackItem";
import { StackContainer } from "../StackItem/s-stackItem";
import Timestamp from "../Timestamp/Timestamp";
import {
  CarouselContainer,
  CarouselDesc,
  CarouselTitle,
  CarouselHolder,
  CarouselInfo,
  CarouselContent,
  CarouselImage,
} from "./s-carouselItem";

const CarouselItem = ({ data, active }) => {
  const [activeState, setActiveState] = useState(active);
  const { slug, title, image, desc, stack, start, end } = data;

  let stackItems = stack.map((item) => (
    <StackItem key={item.id} type={item.type} active={activeState} />
  ));

  useEffect(() => {
    setActiveState(active);
  }, [active]);

  return (
    <Link to={`/project/${slug}`}>
      <CarouselContainer>
        <CarouselHolder>
          <CarouselTitle>{title}</CarouselTitle>
          <CarouselContent>
            <CarouselInfo>
              <CarouselDesc>{desc}</CarouselDesc>
              <span>
                <Timestamp
                  options={{ type: "duration", case: "title" }}
                  start={start}
                  end={end}
                />
              </span>
            </CarouselInfo>

            <StackContainer>{stackItems}</StackContainer>
          </CarouselContent>
        </CarouselHolder>
        <CarouselImage
          style={{ backgroundImage: `url(${image[0].img})` }}
          alt={image[0].alt}
          url={image[0].img}
          light={(title === "Blockr").toString()}
        />
      </CarouselContainer>
    </Link>
  );
};

export default CarouselItem;
