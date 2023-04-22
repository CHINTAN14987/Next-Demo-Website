import React, { forwardRef, useEffect, useRef, useState } from "react";

import styles from "../../styles/Carousel.module.scss";
import data from "./Carousel.json";
import Image from "next/image";
const Carousel = () => {
  const { reviewData } = data;
  const [current, setCurrent] = useState(0);
  const [active, setActive] = useState(false);
  const [reviewImageData, setReviewImageData] = useState([...data.reviewData]);
  const leftArrowRef = useRef(null);
  const rightArrowRef = useRef(null);
  const nextSlide = () => {
    setCurrent(current === reviewData?.length - 1 ? 0 : current + 1);
  };
  console.log(reviewImageData, "image");
  const prevSlide = () => {
    setCurrent(current === 0 ? reviewData?.length - 1 : current - 1);
  };
  useEffect(() => {
    const clickHandler = (e) => {
      if (
        leftArrowRef?.current?.contains(e.target) ||
        rightArrowRef?.current?.contains(e.target)
      ) {
        setActive(true);
      } else {
        setActive(false);
      }
    };
    document.addEventListener("click", clickHandler);
    return () => {
      document.removeEventListener("click", clickHandler);
    };
  }, []);
  useEffect(() => {
    {
      const data = reviewImageData.find(
        (item, index) => item.id === reviewImageData[current].id
      );
      console.log(data);
      reviewImageData.splice(current, 1);
      reviewImageData.splice(4, 0, data);
      setReviewImageData(reviewImageData);
    }
  }, [current]);
  console.log(reviewImageData);
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        {reviewImageData.map((content) => {
          return (
            <Image
              src={content.image}
              alt=""
              width={100}
              height={115}
              key={content.id}
            />
          );
        })}
      </div>
      <div className={styles.StyledSlider}>
        <span
          className={styles.leftArrow}
          onClick={prevSlide}
          ref={leftArrowRef}
        >
          {"<"}
        </span>
        <span
          className={styles.rightArrow}
          onClick={nextSlide}
          ref={rightArrowRef}
        >
          {">"}
        </span>
        {reviewImageData.map((slide, index) => {
          return (
            <div key={index}>
              {index === current && (
                <h3 className={styles.SlideImage}>{slide.content}</h3>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
