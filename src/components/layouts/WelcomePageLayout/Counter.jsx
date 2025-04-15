import { useState } from "react";

export const Counter = () => {
  const [isShow, setIsShow] = useState(true);

  const handleDisplay = () => setIsShow(isShow => !isShow);

  const [count, setCount] = useState(1);

  const handleClick = () => {
    setCount(count => {
      console.log(count);
      return count < 10 ? ++count : count;
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
