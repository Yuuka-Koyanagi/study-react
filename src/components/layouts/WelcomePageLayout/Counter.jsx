import { useCounter } from "@/hooks/useCounter";

export const Counter = () => {
  const { countDisplay, toggleButtonLabel, handleClick, handleDisplay } = useCounter();

  return (
    <>
      {countDisplay}

      <button onClick={handleClick}>ボタン</button>

      <button onClick={handleDisplay}>{toggleButtonLabel}</button>
    </>
  );
};
