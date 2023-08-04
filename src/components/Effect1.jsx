import React, { useEffect, useState } from "react";

const Effect1 = () => {
  const [count, setCount] = useState(1);
  const [getData, setGetData] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${count}`)
      .then((res) => res.json())
      .then((data2) => setGetData(data2));

    return () => {
      console.log("element destroy");
    };
  }, [count]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data2) => setGetData(data2));
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>increment</button>

      {count}

      {getData.length > 1
        ? getData?.map((item, index) => <div key={index}>{item.title}</div>)
        : getData.title}
    </div>
  );
};

export default Effect1;
