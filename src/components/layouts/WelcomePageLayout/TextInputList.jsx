import { useState } from "react";

export const TextInputList = () => {
  const [text, setText] = useState("");

  const handleChange = e =>
    e.target.value.length <= 5
      ? setText(e.target.value.trim())
      : alert("5文字以内にしてください");

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

  return (
    <>
      <input type="text" value={text} onChange={handleChange} />

      <button onClick={handleAdd}>追加</button>

      <ul>
        {texts.map(t => <li key={t}>{t}</li>)}
      </ul>
    </>
  );
};
