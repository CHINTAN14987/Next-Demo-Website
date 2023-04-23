import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../../../styles/Services.module.scss";
import Button from "../../../components/Button/Button";
import data from "./data.json";

const ServiceDescription = () => {
  const [counter, setCounter] = useState(-1);

  useEffect(() => {
    setCounter(0);
    let flag;
    let count;
    count = counter;
    setInterval(function () {
      timer();
    }, 2000);

    function timer() {
      if (flag) {
        count = 0;
      }
      if (!flag) {
        count = count + 1;
      }

      if (count === 0) {
        flag = false;
      }
      if (count >= data?.["description-data"].length - 1) {
        flag = true;
      }
      setCounter(count);
    }
    return () => clearInterval(timer);
  }, []);
  const buttonAttributes = {
    content: "Find out more",
    style: {
      padding: "10px 30px",
      border: "2px solid #eb596e",
      color: "#eb596e",
      background: "#312C51",
      marginTop: "2rem",
    },
  };
  return (
    <>
      <div className={styles.title}>
        <span>We</span>
        <span>Offer</span>
      </div>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          {data?.["description-data"]?.map((item, index) => {
            return (
              <div className={styles.wrapper}>
                {counter === index ? (
                  <div className={styles.activeLine}></div>
                ) : (
                  <div></div>
                )}
                <h3
                  className={`${
                    counter === index
                      ? styles.activeHeading
                      : styles.nonActiveHeading
                  }`}
                >
                  {item.content}
                </h3>
              </div>
            );
          })}
        </div>
        {console.log(counter)}
        <div className={styles.slideImageWrapper}>
          <Image
            src={data?.["description-data"]?.[counter]?.image}
            height={300}
            width={300}
          />
          <h3>{data?.["description-data"]?.[counter]?.content}</h3>
          <p>{data?.["description-data"]?.[counter]?.desc}</p>
          <div className={styles.logo}>
            {data?.["description-data"]?.[counter]?.logos?.map((logo) => {
              return <Image src={logo} height={25} width={25} />;
            })}
          </div>
          <Button buttonAttributes={buttonAttributes} />
        </div>
      </div>
    </>
  );
};

export default ServiceDescription;
