import { useInputArray } from "@/hooks/useInputArray";

export const TextInputList = () => {
  const { text, texts, handleAdd, handleChange } = useInputArray();

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
