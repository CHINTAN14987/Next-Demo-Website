import React, { forwardRef, useEffect, useRef, useState } from "react";

import styles from "../../styles/Carousel.module.scss";
import data from "./Carousel.json";
import Image from "next/image";
const Carousel = () => {
  const { reviewData } = data;
  const [current, setCurrent] = useState(0);
  const [active, setActive] = useState(false);
  const prevRef = useRef();
  const forwardRef = useRef();
  const nextSlide = () => {
    setCurrent(current === reviewData?.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? reviewData?.length - 1 : current - 1);
  };
  useEffect(() => {
    const clickHandler = (e) => {
      if (
        !prevRef?.current?.contains(e.target) ||
        !forwardRef?.current?.contains(e.target)
      ) {
        setActive(true);
      } else {
        setActive(false);
      }
    };
    window.addEventListener("click", clickHandler);
    return () => {
      window.removeEventListener("click", clickHandler);
    };
  }, []);

  return (
    <div>
      <div className={styles.imageWrapper}>
        {reviewData.map((content) => {
          return <Image src={content.image} alt="" width={100} height={115} />;
        })}
      </div>
      <div className={styles.StyledSlider}>
        <span className={styles.leftArrow} onClick={prevSlide} ref={prevRef}>
          {"<"}
        </span>
        <span
          className={styles.rightArrow}
          onClick={nextSlide}
          ref={forwardRef}
        >
          {">"}
        </span>
        {reviewData.map((slide, index) => {
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
