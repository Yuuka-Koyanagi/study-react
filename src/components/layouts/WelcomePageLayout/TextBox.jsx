import { useState } from "react";

export const TextBox = () => {
  const [text, setText] = useState("");

  const handleChange = e =>
    e.target.value.length <= 5
      ? setText(e.target.value.trim())
      : alert("5文字以内にしてください");

  return <input type="text" value={text} onChange={handleChange} />;
};
