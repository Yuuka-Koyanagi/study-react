import { useState } from "react";

export const useInputArray = () => {
  const [text, setText] = useState("");
  const [texts, setTexts] = useState([]);

  const handleAdd = () => {
    setTexts(prevTexts => {
      if (prevTexts.includes(text)) {
        alert("同じ値が含まれています");
        return prevTexts;
      };

      return [...prevTexts, text];
    });
  };

  const handleChange = e => {
    e.target.value.length <= 5
      ? setText(e.target.value.trim())
      : alert("5文字以内にしてください");
  };

  return { text, texts, handleAdd, handleChange };
};
