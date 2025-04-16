import { useState } from "react";

export const Counter = () => {
  const [isShow, setIsShow] = useState(true);

  const handleDisplay = () => setIsShow(prevIsShow => !prevIsShow);

  const [count, setCount] = useState(1);

  const handleClick = () => {
    setCount(prevCount => {
      console.log(prevCount);
      return prevCount < 10 ? prevCount + 1 : prevCount;
    });
  };

  return (
    <>
      {isShow ? <h1>{count}</h1> : null}

      <button onClick={handleClick}>ボタン</button>

      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
    </>
  );
};
