//5. React: 組件
//問題：使用React創建一個簡單的計數器組件，具有增加和減少計數的按鈕。

function CountNumber() {
  const [number, setNumber] = useState(0);

  function handleAdd() {
    setNumber(number + 1);
  }
  function handleMinus() {
    if (number === 0) return;
    setNumber(number - 1);
  }

  return (
    <div>
      <button onClick={handleAdd}> + </button>
      <p>{number}</p>
      <button onClick={handleMinus}> - </button>
    </div>
  );
}
