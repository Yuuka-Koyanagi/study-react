import { useState } from "react";

export const TextInputList = () => {
  const [text, setText] = useState("");

  const handleChange = e =>
    e.target.value.length <= 5
      ? setText(e.target.value.trim())
      : alert("5文字以内にしてください");

  const [array, setArray] = useState([]);

  const handleAdd = () => {
    setArray(a => {
      if (a.includes(text)) {
        alert("同じ値が含まれています");
        return a;
      };

      return [...a, text];
    });
  };

  return (
    <>
      <input type="text" value={text} onChange={handleChange} />

      <button onClick={handleAdd}>追加</button>

      <ul>
        {array.map((v, i) => <li key={i}>{v}</li>)}
      </ul>
    </>
  );
};
