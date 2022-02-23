import { useState } from "react";

import { workList } from "../../data/workList";

import Carousel from "../../components/Carousel";
import Section from "../../components/Section";
import Title from "../../components/Title";

function Work() {
  const [activeIndex, setActiveIndex] = useState(0);

  function goToPreviousSlide() {
    let newIndex = activeIndex - 1;

    if (newIndex < 0) {
      newIndex = workList.length - 1;
    }

    setActiveIndex(newIndex);
  }

  function goToNextSlide() {
    let newIndex = activeIndex + 1;

    if (newIndex > workList.length - 1) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  }

  //   Refacto this when got time
  const slides = {
    prevSlide:
      activeIndex === 0
        ? workList[workList.length - 1]
        : workList[activeIndex - 1],
    activeSlide: workList[activeIndex],
    nextSlide:
      activeIndex === workList.length - 1
        ? workList[0]
        : workList[activeIndex + 1],
  };

  const { activeSlide, nextSlide, prevSlide } = slides;

  return (
    <Section id="work">
      <Title>Work</Title>

      <Carousel
        activeSlide={activeSlide}
        goToNextSlide={goToNextSlide}
        goToPreviousSlide={goToPreviousSlide}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
      />
    </Section>
  );
}

export default Work;
