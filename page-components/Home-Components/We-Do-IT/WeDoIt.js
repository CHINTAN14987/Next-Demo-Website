import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";

const data = [
  {
    id: 1,
    content: " UX Design",
    image: "/Images/Reviewer1.png",
    rating: "3",
  },
  {
    id: 2,
    content: "Data Scrine",
    image: "/Images/Reviewer2.png",
    rating: "4",
  },
  {
    id: 3,
    content: "FrontEnd",
    image: "/Images/Reviewer3.png",
    rating: "5",
  },
  // {
  //   id: 4,
  //   content:
  //     "hem and the work done by them in just two words, “Simply Awesome”! Be it the turnaround, quality or the concept understanding, I got the best from them. In fact, before writing all this, I’ve already recommended them",
  //   image: "/Images/Reviewer4.png",
  //   rating: "5",
  // },
  // {
  //   id: 5,
  //   content:
  //     "them in just two words, “Simply Awesome”! Be it the turnaround, quality or the concept understanding, I got the best from them. In fact, before writing all this, I’ve already recommended them",
  //   image: "/Images/Reviewer5.png",
  //   rating: "5",
  // },
];

const WeDoIt = () => {
  const [newName, setnewName] = useState();
  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * 1);
    console.log(index);
    // setnewName(names[index]);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 5000);
    return () => clearInterval(intervalID);
  }, [shuffle]);

  return (
    <div>
      {data?.map((item) => {
        return (
          <div style={{ display: "flex", gap: "5rem" }}>
            <div>
              <h3>{item.content}</h3>
            </div>
          </div>
        );
      })}
      <div>
        <Image src={data[0].image} height={300} width={300} />
      </div>
    </div>
  );
};

export default WeDoIt;
