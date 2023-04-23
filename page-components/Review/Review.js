import React, { useState } from "react";
import leftArrow from "../../public/Images/left-Arrow.png";
import rightArrow from "../../public/Images/right-Arrow.png";
import styles from "../../styles/Reviews.module.scss";
import data from "./Review.json";
import icon from "../../public/Images/commas.png";

import Image from "next/image";
const Review = () => {
  const { reviewData } = data;
  const [current, setCurrent] = useState(0);
  const nextSlide = () => {
    setCurrent(current === reviewData?.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? reviewData?.length - 1 : current - 1);
  };

  return (
    <>
      <h3 className={styles.heading}>Reviews</h3>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src={data?.reviewData?.[0].image}
            alt=""
            width={100}
            height={115}
          />
          <Image
            src={data?.reviewData?.[1].image}
            alt=""
            width={100}
            height={115}
          />
          <Image
            src={data?.reviewData?.[current].image}
            alt=""
            width={100}
            height={115}
          />
          <Image
            src={data?.reviewData?.[3].image}
            alt=""
            width={100}
            height={115}
          />{" "}
          <Image
            src={data?.reviewData?.[4].image}
            alt=""
            width={100}
            height={115}
          />
        </div>
        <div className={styles.StyledSlider}>
          <div className={styles.slider}>
            {data?.reviewData?.map((slide, index) => {
              return (
                <div key={index}>
                  {index === current && (
                    <>
                      <Image src={icon} width={50} height={50} />
                      <h3 className={styles.slideContent}>{slide.content}</h3>
                      <h3 className={styles.reviewerDetail}>
                        {slide.details.name}
                      </h3>
                    </>
                  )}
                </div>
              );
            })}
            <div className={styles.navButtons}>
              {data?.reviewData?.map((item, index) => {
                return (
                  <span
                    style={{
                      background: index === current ? "#EB596E" : "#fff",
                    }}
                    key={item.id}
                  ></span>
                );
              })}
            </div>
            <Image
              src={leftArrow}
              className={styles.leftArrow}
              onClick={prevSlide}
            />
            <Image
              src={rightArrow}
              className={styles.rightArrow}
              onClick={nextSlide}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
