import { useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(true);

  const handleClick = () => {
    setCount(prevCount => {
      console.log(prevCount);
      return prevCount < 10 ? prevCount + 1 : prevCount;
    });
  };

  const handleDisplay = () => setIsShow(prevIsShow => !prevIsShow);

  const countDisplay = isShow ? <h1>{count}</h1> : null;
  const toggleButtonLabel = isShow ? "非表示" : "表示";

  return { countDisplay, toggleButtonLabel, handleClick, handleDisplay };
};
