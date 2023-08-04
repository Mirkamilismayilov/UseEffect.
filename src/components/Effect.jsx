import React, { useEffect, useState } from "react";

const Effect = () => {
  const [count, setCount] = useState(0);
  const [data1, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${count}`)
      .then((res) => res.json())
      .then((data2) => setData(data2));
  }, [count]);

  return (
    <div className="">
      <button className="bg-amber-400 m-5" onClick={() => setCount(count + 1)}>
        {" "}
        Increment{" "}
      </button>
      {count}

      {
      data1.length > 1 ?
         data1?.map((item, index) => (
         <div key={index}>{item.title}</div>
         ))
        : data1.title
        }
    </div>
  );
};

export default Effect;
