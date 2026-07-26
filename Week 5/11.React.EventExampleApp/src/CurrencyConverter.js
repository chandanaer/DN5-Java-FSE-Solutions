import React, { useState } from "react";

function CurrencyConverter() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");

  const handleSubmit = () => {
    const convertedAmount = amount * 80;
    alert(`Converting to Euro Amount is ${convertedAmount}`);
  };

  return (
    <div>
      <h1>Currency Convertor!!!</h1>

      <label>Amount: </label>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <br />
      <br />

      <label>Currency: </label>
      <input
        type="text"
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default CurrencyConverter;